import React, { useState, KeyboardEvent } from 'react'

interface Props {
    addTodo: (title: string) => void
}

export const TodoInput = ({ addTodo }: Props) => {
    const [title, setTitle] = useState('');

    const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <div>
            <div className="mt-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
                </div>
                <input
                    className="focus:shadow-md font-Inter focus:shadow-slate-400 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => handleAddTodo(e)}
                    placeholder="What's next..."
                />
            </div>
        </div>
    )
}
