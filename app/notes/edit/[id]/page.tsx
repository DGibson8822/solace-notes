import UpdateNoteForm from '@/app/ui/UpdateNoteForm';
import { fetchNoteById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const note = await fetchNoteById(id)

    if (!note) {
    notFound();
    }

    return (
        <main>
        <UpdateNoteForm note={note} />
        </main>
    );
}