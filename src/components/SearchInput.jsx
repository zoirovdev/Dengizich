import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const Search = () => {
  return (
    <div className="flex flex-row ml-[300px] p-2 mt-6 gap-2 w-[600px] bg-slate-100 rounded-sm">
      <MagnifyingGlassIcon className="w-5 h-5"/>
      <input type='text' placeholder="Search" className="w-full border-none outline-none"/>
    </div>
  )
}



export default Search
