import Search from "./ui/Search";
import NoteTable from "./ui/NoteTable";
import Breadcrumbs from "./ui/Breadcrumbs";

export const revalidate = 1;

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  //const notes = await fetchNotes()
  const query = searchParams?.query || "";
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ text: "Home", path: "/" }]} />
      <main className="flex min-h-screen flex-col items-center px-0">
        <Search placeholder="Search notes" />
        <NoteTable query={query} />
      </main>
    </>
  );
}
