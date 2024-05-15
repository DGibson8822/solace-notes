import NotePreview from "@/app/ui/NotePreview";
import Link from 'next/link';
import { fetchNotes } from '@/app/lib/data';
import Search from "./ui/Search";
import NoteTable from "./ui/NoteTable";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  //const notes = await fetchNotes()
  const query = searchParams?.query || '';
  return (
    <main className="flex bg-[linear-gradient(45deg,#3f937c,#0000)] min-h-screen flex-col items-center justify-between p-24">
      <Search placeholder="Search notes" />
      <Link
          href="/notes/create"
          className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
        >
          New Note
        </Link>
      <NoteTable query={query}/>
    </main>
  );
}
 