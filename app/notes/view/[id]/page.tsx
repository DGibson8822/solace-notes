import { fetchNoteById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/Breadcrumbs';
import ExpandedNote from '@/app/ui/ExpandedNote';
import DeleteButton from '@/app/ui/buttons/DeleteButton';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const note = await fetchNoteById(id)
    const breadcrumbs = [{text: 'Home', path:'/'}, {text: 'View', path: `/notes/view/${id}`}]

    if (!note) {
    notFound();
    }

    return (
        <>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <main className='w-96'>
        <DeleteButton id={note.id}/>
        <ExpandedNote note={note} />
        </main>
        </>
    );
}