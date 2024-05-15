import { deleteNote } from "@/app/lib/actions";

export default function DeleteButton({ id }: { id: string }) {
  const deleteNoteWithId = deleteNote.bind(null, id);
  return (
    <form action={deleteNoteWithId}>
      <button className="rounded-md mr-2 w-[25%] bg-red-600 h-10 mt-3 mb-5 bg-gr text-sm border border-black p-2 font-medium transition-colors hover:bg-red-500">
        Delete
      </button>
    </form>
  );
}
