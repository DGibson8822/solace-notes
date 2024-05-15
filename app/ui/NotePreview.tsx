import Image from "next/image";
import Link from "next/link";
import { DeleteNote } from "./buttons/DeleteButton";

export default function NotePreview({note}: { note: { id: string, title: string, content:string } }) {
    return (
        <div className='w-60 h-60 bg-gray-600'>
            <div className='m-3 text-center'>Title {note.title}</div>
            <div className='m-3'>Preview of contents. {note.content}</div>
            <Link
          href={`/notes/view/${note.id}`}
          className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
        >
          Open
        </Link>
        <DeleteNote id={note.id}/>
        
        </div>
    )
}