'use server';

import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';
import { MongoClient } from 'mongodb';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure MongoDB
const mongoUri = process.env.MONGODB_URI || '';
const client = new MongoClient(mongoUri);

async function connectToDb() {
    await client.connect();
    return client.db('reverie-eng-db'); // You can name your database here
}

export async function handleAddProduct(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const imageFile = formData.get('image');

  if (!title || !description || !imageFile || imageFile.size === 0) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    // 1. Upload image to Cloudinary
    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    
    const uploadResult = await cloudinary.uploader.upload(
        `data:${imageFile.type};base64,${imageBase64}`,
        {
            folder: 'products', // Optional: organize images in Cloudinary
        }
    );
    
    const imageUrl = uploadResult.secure_url;

    // 2. Save product to MongoDB
    const db = await connectToDb();
    const productsCollection = db.collection('products');

    const newProduct = {
      title,
      description,
      imageSrc: imageUrl,
      imageHint: title.toLowerCase(), // Generate a simple hint
      href: `/products/${title.toLowerCase().replace(/\s+/g, '-')}`, // Create a slug for the URL
      createdAt: new Date(),
    };

    await productsCollection.insertOne(newProduct);

    // 3. Revalidate path to refresh the product list
    revalidatePath('/products');

    return { success: true };

  } catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error: 'Failed to add product. Please check server logs.' };
  } finally {
    await client.close();
  }
}
