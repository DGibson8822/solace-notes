import NotePreview from "@/app/ui/NotePreview";
import { fetchNotes } from '@/app/lib/data';

export default async function Home() {
  const notes = await fetchNotes()
  console.log(notes)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {notes.map( (note) => <NotePreview key={note.id} note={note} /> )}
    </main>
  );
}
