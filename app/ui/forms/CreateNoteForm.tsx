'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/buttons/Button';
import { createNote } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateNoteForm() {
  const initialState = { message: '', errors: {title: [], content: []} };
  const [state, dispatch] = useFormState(createNote, initialState);

  return (
    <form action={dispatch}>
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
                className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div id="title-error" aria-live="polite" aria-atomic="true">
            {state.errors?.title &&
              state.errors.title.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Content
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea id="content"
                name="content"
                placeholder="Content"
                className="peer block w-full h-48 rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div id="content-error" aria-live="polite" aria-atomic="true">
            {state.errors?.content &&
              state.errors.content.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Note</Button>
      </div>
    </form>
  );
}
