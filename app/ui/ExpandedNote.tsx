import EditButton from "./buttons/EditButton";

export default function ExpandedNote({
  note,
}: {
  note: { id: string; title: string; content: string; updated_at: Date };
}) {
  return (
    <div className="flex flex-col w-auto max-w-96 p-7 bg-gray-50 rounded-lg drop-shadow-md border-2 border-stone-500">
      <div className="flex-1">
        <h2 className="font-bold">{note.title}</h2>
        <p>Last updated: {note.updated_at.toLocaleString()}</p>
        <p className="m-4">{note.content}</p>
      </div>
      <div className="mt-5 flex">
        <EditButton id={note.id} />
      </div>
    </div>
  );
}
