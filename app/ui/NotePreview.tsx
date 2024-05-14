import Image from "next/image";

export default function NotePreview({note}: { note: { id: string, title: string, content:string } }) {
    return (
        <div className='w-60 h-60 bg-gray-600'>
            <div className='m-3 text-center'>Title {note.title}</div>
            <div className='m-3'>Preview of contents. {note.content}</div>
        </div>
    )
}