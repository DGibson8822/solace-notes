import Link from "next/link"

export default function OpenButton({ id } : { id: string}) {
    return (
        <Link
            href={`/notes/view/${id}`}
            className="flex h-10 mr-2 w-[50%] text-center items-center rounded-lg bg-[#d39009] px-4 text-sm font-medium text-white transition-colors hover:bg-[#deb260]"
        >
            <span className="w-full"> Open </span>
        </Link> 
    )
}