'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/Button';
import { updateNote } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Note } from '../lib/definitions';

export default function UpdateNoteForm({note}: {note: Note}) {
    const updateNoteWithId = updateNote.bind(null, note.id);
  return (
    <form action={updateNoteWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                defaultValue={note.title}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Content
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="content"
                name="content"
                type="text"
                placeholder="Content"
                defaultValue={note.content}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        

        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Update Note</Button>
      </div>
    </form>
  );
}
