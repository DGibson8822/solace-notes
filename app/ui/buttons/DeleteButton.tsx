import { deleteNote } from '@/app/lib/actions';

export function DeleteNote({ id }: { id: string }) {
    const deleteNoteWithId = deleteNote.bind(null, id);
    return (
      <form action={deleteNoteWithId}>
        <button className="rounded-md border w-48 p-2 hover:bg-gray-100">
          Delete
        </button>
      </form>
    );
  }