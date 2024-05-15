import { deleteNote } from '@/app/lib/actions';

export function DeleteNote({ id }: { id: string }) {
    const deleteNoteWithId = deleteNote.bind(null, id);
    return (
        
      <form action={deleteNoteWithId}>
        <button className="rounded-md bg-white h-10 mt-3 bg-gr text-sm border border-black p-2 font-medium hover:bg-gray-100 w-full">
          Delete
        </button>
      </form>
    );
  }