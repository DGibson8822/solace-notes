import OpenButton from "./buttons/OpenButton";
import EditButton from "./buttons/EditButton";
import { Note } from "../lib/definitions";

export default function NotePreview({note}: { note: Note }) {
    return (
        <div className='flex flex-col w-auto max-w-96 h-80  p-7 bg-gray-100 rounded-lg drop-shadow-md border-2 border-stone-500'>
            <div className="flex-1">
            <h2 className='font-bold'>{note.title}</h2>
            <p>Last updated: {note.updated_at.toLocaleString()}</p>
            <p className='m-3 h-24 text-ellipsis overflow-hidden '>{note.content}</p>
            </div>
            <div className="mt-5 flex">
            <OpenButton id={note.id}/>
            <EditButton id={note.id}/>
            </div>
        </div>
    )
}