// Simple JSON-based storage for startups
import { promises as fs } from 'fs';
import path from 'path';

export interface Startup {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  pitch?: string;
  stage: string;
  views: number;
  createdAt: string;
  authorId: string;
  authorName: string;
  authorEmail: string;
  authorImage?: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'startups.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
}

// Read all startups
export async function getStartups(): Promise<Startup[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Get startup by ID
export async function getStartupById(id: string): Promise<Startup | null> {
  const startups = await getStartups();
  return startups.find(s => s.id === id) || null;
}

// Create a new startup
export async function createStartup(startup: Omit<Startup, 'id' | 'createdAt' | 'views'>): Promise<Startup> {
  try {
    await ensureDataDir();
    const startups = await getStartups();
    
    const newStartup: Startup = {
      ...startup,
      id: `startup_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      createdAt: new Date().toISOString(),
      views: 0,
    };
    
    startups.unshift(newStartup); // Add to beginning
    await fs.writeFile(DATA_FILE, JSON.stringify(startups, null, 2), 'utf-8');
    
    console.log('✅ Startup created successfully:', newStartup.title);
    console.log('📁 Saved to:', DATA_FILE);
    
    return newStartup;
  } catch (error) {
    console.error('❌ Error creating startup:', error);
    throw error;
  }
}

// Update startup views
export async function incrementViews(id: string): Promise<void> {
  const startups = await getStartups();
  const startup = startups.find(s => s.id === id);
  
  if (startup) {
    startup.views += 1;
    await fs.writeFile(DATA_FILE, JSON.stringify(startups, null, 2));
  }
}

// Get startups by author
export async function getStartupsByAuthor(authorId: string): Promise<Startup[]> {
  const startups = await getStartups();
  return startups.filter(s => s.authorId === authorId);
}
