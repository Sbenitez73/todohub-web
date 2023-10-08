import { AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = () => {
    return (
        <form className='w-[500px] relative mb-20'>
            <div className="relative">
                <input type="search" placeholder='Search task' className='w-full p-4 rounded-full bg-slate-800 border-slate-500' onChange={(e) => null }/>
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-900 rounded-full'>
                    <AiOutlineSearch />
                </button>
            </div>            
        </form>
    )
}
