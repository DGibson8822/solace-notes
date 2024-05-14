import NotePreview from "@/app/ui/NotePreview";
import Link from 'next/link';
import { fetchNotes } from '@/app/lib/data';

export default async function Home() {
  const notes = await fetchNotes()
  console.log(notes)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
          href="/notes/create"
          className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
        >
          New Note
        </Link>
      {notes.reverse().map( (note) => <NotePreview key={note.id} note={note} /> )}
    </main>
  );
}
 