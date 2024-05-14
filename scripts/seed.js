const { db } = require('@vercel/postgres');
const { notes } = require('../app/lib/sample-data.js');

async function seedNotes(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "notes" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS notes (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(300) NOT NULL,
          content VARCHAR(300) NOT NULL,
          updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
      `;
  
      console.log(`Created "notes" table`);
  
      // Insert data into the "notes" table
      const insertedNotes = await Promise.all(
        notes.map(
          (note) => client.sql`
          INSERT INTO notes (id, title, content)
          VALUES (${note.id}, ${note.title}, ${note.content})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
      );
  
      console.log(`Seeded ${insertedNotes.length} notes`);
  
      return {
        createTable,
        notes: insertedNotes,
      };
    } catch (error) {
      console.error('Error seeding notes:', error);
      throw error;
    }
  }

  async function main() {
    const client = await db.connect();
    await seedNotes(client);
    await client.end();
  }

  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });