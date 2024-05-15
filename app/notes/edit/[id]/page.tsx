import UpdateNoteForm from '@/app/ui/forms/UpdateNoteForm';
import { fetchNoteById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/app/ui/Breadcrumbs';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const note = await fetchNoteById(id)
    const breadcrumbs = [{text: 'Home', path:'/'}, {text: 'Edit', path: `/notes/edit/${id}`}]

    if (!note) {
    notFound();
    }

    return (
      <>
         <Breadcrumbs breadcrumbs={breadcrumbs} />
        <main className='w-96'>
         <h1 className='text-center text-lg m-7'>Edit Note</h1>
        <UpdateNoteForm note={note} />
        </main>
      </>
    );
}