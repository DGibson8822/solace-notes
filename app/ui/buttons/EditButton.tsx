import Link from "next/link"

export default function EditButton({ id } : { id: string}) {
    return (
        <Link
            href={`/notes/edit/${id}`}
            className="flex h-10 ml-2 w-[50%] text-center justify-center items-center rounded-lg bg-white px-4 text-sm font-medium transition-colors hover:bg-gray-100 border border-black"
        >
            <span className="w-full"> Edit </span>
        </Link> 
    )
}