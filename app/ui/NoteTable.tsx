import NotePreview from "@/app/ui/NotePreview";
import Link from 'next/link';
import { fetchFilteredNotes } from '@/app/lib/data';

export default async function NoteTable({
    query
  }: {
    query: string;
  }) {
  const notes = await fetchFilteredNotes(query)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {notes.reverse().map( (note) => <NotePreview key={note.id} note={note} /> )}
    </main>
  );
}