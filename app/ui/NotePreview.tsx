import Image from "next/image";

export default function NotePreview() {
    return (
        <div className='w-60 h-60 bg-gray-600'>
            <div className='m-3 text-center'>Title</div>
            <div className='m-3'>Preview of contents.</div>
        </div>
    )
}