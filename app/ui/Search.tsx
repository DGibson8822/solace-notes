'use client';
 
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import CreateButton from './buttons/CreateButton';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`);
    }, 1000);
 
  return (
    <div className="w-full h-10 max-w-screen-xl max-h-10 m-5 relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer h-10 block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
     <CreateButton/>
    </div>
  );
}