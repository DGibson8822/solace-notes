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
    <main className="grid  lg:grid-cols-4 gap-10">
      {notes.reverse().map( (note) => <NotePreview key={note.id} note={note}/> )}
    </main>
  );
}