'use server';

import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

export async function handleAddProject(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const client = formData.get('client');
  const location = formData.get('location');
  const category = formData.get('category');
  const year = formData.get('year');
  const status = formData.get('status');
  const features = formData.get('features');
  const testimonial = formData.get('testimonial');
  const imageFile = formData.get('image');

  if (!title || !description || !client || !location || !category || !year || !status || !features || !imageFile || imageFile.size === 0) {
    return { success: false, error: 'All required fields must be filled.' };
  }

  try {
    // 1. Upload image to Cloudinary
    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    
    const uploadResult = await cloudinary.uploader.upload(
        `data:${imageFile.type};base64,${imageBase64}`,
        {
            folder: 'projects', // Organize images in Cloudinary
        }
    );
    
    const imageUrl = uploadResult.secure_url;

    // 2. Create a slug from the title
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    // 3. Create the new project object
    const newProject = {
      title,
      description,
      imageSrc: imageUrl,
      imageHint: title.toLowerCase(),
      href: `/projects/${status === 'ongoing' ? 'ongoing' : 'completed'}/${slug}`,
      category,
      client,
      year,
      status: status === 'ongoing' ? 'In Progress' : 'Completed',
      features: features.split(',').map(feature => feature.trim()),
      location,
    };

    // Add testimonial if it's a completed project and testimonial is provided
    if (status === 'completed' && testimonial) {
      newProject.testimonial = {
        content: testimonial,
        author: client,
      };
    }

    // 4. Read the data.js file
    const fileContent = await readDataFile();
    
    // 5. Parse the projects from the file content
    const { ongoingProjects, completedProjects } = parseProjects(fileContent);
    
    // 6. Add the new project to the appropriate array
    if (status === 'ongoing') {
      ongoingProjects.unshift(newProject); // Add to the beginning of the array
    } else {
      completedProjects.unshift(newProject); // Add to the beginning of the array
    }
    
    // 7. Generate the updated file content
    const { beforeOngoing, ongoingToCompleted, afterCompleted } = extractArrays(fileContent);
    
    // Create the new content for the arrays
    const newOngoingContent = `export const ongoingProjects = ${JSON.stringify(ongoingProjects, null, 2)}`;
    const newCompletedContent = `export const completedProjects = ${JSON.stringify(completedProjects, null, 2)}`;
    
    // Combine the parts to create the updated file content
    const updatedContent = `${beforeOngoing}${newOngoingContent};

${newCompletedContent};${afterCompleted.substring(afterCompleted.indexOf(';') + 1)}`;
    
    // 8. Write the updated content back to the file
    await writeDataFile(updatedContent);
    
    // 9. Revalidate the projects page to reflect the changes
    revalidatePath('/projects');
    
    return { success: true };
  } catch (error) {
    console.error('Error adding project:', error);
    return { success: false, error: error.message || 'Failed to add project. Please check server logs.' };
  }
}