import Image from "next/image";
import Link from "next/link";
import { DeleteNote } from "./buttons/DeleteButton";

export default function NotePreview({note}: { note: { id: string, title: string, content:string } }) {
    return (
        <div className='flex flex-col w-auto max-w-96 h-80  p-7 bg-gray-50 rounded-lg drop-shadow-md border-2 border-stone-500'>
            <div className="flex-1">
            <h2>{note.title}</h2>
            <p className='m-3 h-24 text-ellipsis overflow-hidden '>{note.content}</p>
            </div>
            <div className="mt-5">
            <Link
                href={`/notes/view/${note.id}`}
                className="flex h-10 items-center rounded-lg bg-[linear-gradient(45deg,#deb260,#d39009)] px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
                 Open
            </Link>
            <DeleteNote id={note.id}/>
            </div>
            
        
        </div>
    )
}