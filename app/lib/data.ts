import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Note } from './definitions';

export async function fetchNotes() {
    noStore();
    
    try {
      const data = await sql<Note>`SELECT * FROM notes`;
      
      const notes = data.rows;
      
      return notes;
    } catch (err) {
      
        console.error('Database Error:', err);
      
      throw new Error('Failed to fetch all notes.');
    }
  }
