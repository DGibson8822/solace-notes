import CreateNoteForm from '@/app/ui/forms/CreateNoteForm'

 export default function Page() {
    return (
      <main className='w-96'>
         <h1 className='text-center text-lg m-7'>Create a Note</h1>
         <CreateNoteForm/>
      </main>
    )
 }