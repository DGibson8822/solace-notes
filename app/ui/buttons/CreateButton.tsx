import Link from "next/link"

export default function CreateButton() {
    return (
        <Link
            href='/notes/create'
            className="flex h-10 ml-2 w-[25%] text-center justify-center items-center rounded-lg bg-white px-4 text-sm font-medium transition-colors hover:bg-gray-100 border border-black"
        >
            <span> New Note </span>
        </Link> 
    )
}