import Breadcrumbs from "@/app/ui/Breadcrumbs";
import CreateNoteForm from "@/app/ui/forms/CreateNoteForm";

const breadcrumbs = [
  { text: "Home", path: "/" },
  { text: "Create", path: `/notes/create` },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <main className="w-96">
        <h1 className="text-center text-lg m-7">Create a Note</h1>
        <CreateNoteForm />
      </main>
    </>
  );
}
