'use server';

import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

// Function to read the data.js file content
async function readDataFile() {
  const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.js');
  const fileContent = await fs.readFile(dataFilePath, 'utf8');
  return fileContent;
}

// Function to write updated content to the data.js file
async function writeDataFile(content) {
  const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.js');
  await fs.writeFile(dataFilePath, content, 'utf8');
}

// Helper function to extract arrays from the data.js file content
function extractArrays(fileContent) {
  // Find the start and end of ongoingProjects array
  const ongoingStartMatch = fileContent.match(/export const ongoingProjects = \[/);
  const ongoingStartIndex = ongoingStartMatch ? ongoingStartMatch.index : -1;
  
  // Find the start of completedProjects array
  const completedStartMatch = fileContent.match(/export const completedProjects = \[/);
  const completedStartIndex = completedStartMatch ? completedStartMatch.index : -1;
  
  if (ongoingStartIndex === -1 || completedStartIndex === -1) {
    throw new Error('Could not find project arrays in data.js');
  }
  
  // Extract the content before, between, and after the arrays
  const beforeOngoing = fileContent.substring(0, ongoingStartIndex);
  const ongoingToCompleted = fileContent.substring(ongoingStartIndex, completedStartIndex);
  const afterCompleted = fileContent.substring(completedStartIndex);
  
  return { beforeOngoing, ongoingToCompleted, afterCompleted };
}

// Helper function to parse the project arrays from the file content
function parseProjects(fileContent) {
  // This is a simplified approach - in a real implementation, you might use a more robust method
  // like eval or a custom parser, but for demonstration purposes, we'll use regex
  
  // Extract the ongoing projects array content
  const ongoingMatch = fileContent.match(/export const ongoingProjects = (\[\s*\{[\s\S]*?\}\s*\]);/);
  const ongoingContent = ongoingMatch ? ongoingMatch[1] : '[]';
  
  // Extract the completed projects array content
  const completedMatch = fileContent.match(/export const completedProjects = (\[\s*\{[\s\S]*?\}\s*\]);/);
  const completedContent = completedMatch ? completedMatch[1] : '[]';
  
  // Parse the arrays (this is unsafe in production, but for demonstration)
  // In a real implementation, you would use a safer parsing method
  const ongoingProjects = eval(ongoingContent);
  const completedProjects = eval(completedContent);
  
  return { ongoingProjects, completedProjects };
}

// Function to move a project from ongoing to completed
export async function completeProject(slug) {
  try {
    // Read the data.js file
    const fileContent = await readDataFile();
    
    // Parse the projects from the file content
    const { ongoingProjects, completedProjects } = parseProjects(fileContent);
    
    // Find the project to move
    const projectIndex = ongoingProjects.findIndex(project => {
      // Extract slug from href or use title
      const projectSlug = project.href ? project.href.split('/').pop() : '';
      return projectSlug === slug;
    });
    
    if (projectIndex === -1) {
      return { success: false, error: 'Project not found' };
    }
    
    // Get the project and remove it from ongoing projects
    const project = { ...ongoingProjects[projectIndex] };
    const updatedOngoingProjects = [...ongoingProjects];
    updatedOngoingProjects.splice(projectIndex, 1);
    
    // Update the project status and add current date
    project.status = 'Completed';
    project.completionDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
    // Update the href to point to completed projects
    if (project.href) {
      project.href = project.href.replace('/ongoing/', '/completed/');
    }
    
    // Add to completed projects
    const updatedCompletedProjects = [project, ...completedProjects];
    
    // Generate the updated file content
    const { beforeOngoing, ongoingToCompleted, afterCompleted } = extractArrays(fileContent);
    
    // Create the new content for the arrays
    const newOngoingContent = `export const ongoingProjects = ${JSON.stringify(updatedOngoingProjects, null, 2)}`;
    const newCompletedContent = `export const completedProjects = ${JSON.stringify(updatedCompletedProjects, null, 2)}`;
    
    // Combine the parts to create the updated file content
    const updatedContent = `${beforeOngoing}${newOngoingContent};

${newCompletedContent};${afterCompleted.substring(afterCompleted.indexOf(';') + 1)}`;
    
    // Write the updated content back to the file
    await writeDataFile(updatedContent);
    
    // Revalidate the projects page to reflect the changes
    revalidatePath('/projects');
    
    return { success: true };
  } catch (error) {
    console.error('Error completing project:', error);
    return { success: false, error: error.message || 'Failed to complete project' };
  }
}