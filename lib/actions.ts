'use server';

import { auth } from '@/auth';
import { createStartup as createStartupInDB } from '@/lib/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createStartup(prevState: any, formData: FormData) {
  console.log('🚀 createStartup action called');
  
  const session = await auth();
  
  console.log('👤 Session:', session?.user);
  
  if (!session || !session.user) {
    console.log('❌ No session found');
    return { error: 'You must be logged in to create a startup', success: false };
  }

  // Extract and validate form data
  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;
  const pitch = formData.get('pitch') as string;
  const stage = formData.get('stage') as string;

  console.log('📋 Form data:', { title, category, description: description?.substring(0, 50) + '...' });

  // Validation
  if (!title || title.trim().length < 3) {
    console.log('❌ Title validation failed');
    return { error: 'Title must be at least 3 characters long', success: false };
  }

  if (!category) {
    console.log('❌ Category validation failed');
    return { error: 'Please select a category', success: false };
  }

  if (!description || description.trim().length < 100) {
    console.log('❌ Description validation failed');
    return { error: 'Description must be at least 100 characters long', success: false };
  }

  try {
    console.log('📝 Creating startup:', title);
    
    // Create the startup
    const startup = await createStartupInDB({
      title: title.trim(),
      category,
      description: description.trim(),
      image: image || undefined,
      pitch: pitch || undefined,
      stage: stage || 'idea',
      authorId: session.user.id || session.user.email || 'unknown',
      authorName: session.user.name || 'Anonymous',
      authorEmail: session.user.email || '',
      authorImage: session.user.image || undefined,
    });

    console.log('✅ Startup created successfully:', startup.id);
    
    // Revalidate the startups page to show the new data
    revalidatePath('/startups');
    
  } catch (error) {
    console.error('❌ Error creating startup:', error);
    return { error: 'Failed to create startup. Please try again.', success: false };
  }
  
  // Redirect to the startups listing page (outside try-catch because redirect throws)
  redirect('/startups');
}
