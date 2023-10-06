import { SearchOutlined } from '@ant-design/icons'
import {AiOutlineSearch} from 'react-icons/ai'

export const SearchBar = () => {
    return (
        <form className='w-[500px] relative'>
            <div className="relative">
                <input type="search" placeholder='Search task' className='w-full p-4 rounded-full bg-slate-800 border-slate-500' onChange={(e) => null }/>
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-900 rounded-full'>
                    <AiOutlineSearch />
                </button>
            </div>

        {/*  {
                activeSearch.length > 0 && (
                    <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                        {
                            activeSearch.map(s => (
                                <span>{s}</span>
                            ))
                        }
                    </div>
                )
            }
    */}

            
        </form>
    )
}