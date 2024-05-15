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

export async function fetchNoteById(id: string) {
  noStore();
  console.log(`My ID: ${id}`)
  try {
    const data = await sql<Note>`
      SELECT
        notes.id,
        notes.title,
        notes.content
      FROM notes
      WHERE notes.id = ${id}`;

    const notes = data.rows;
    
    return notes[0];
  } catch (err) {
    
      console.error('Database Error:', err);
    
  }
}

export async function fetchFilteredNotes(query: string) {
  try {
    const data = await sql<Note>`
		SELECT
		  *
		FROM notes
		WHERE
		  notes.title ILIKE ${`%${query}%`} OR
      notes.content ILIKE ${`%${query}%`}
	  `;

    const notes = data.rows

    return notes;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
