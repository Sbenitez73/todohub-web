import React from 'react'
import { Todo } from '../models/todo';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

interface Props {
    todo: Todo,
    handleSetComplete: (id: number) => void,
    handleDelete: (id: number) => void
}

export const TodoItem = ({todo, handleDelete, handleSetComplete}: Props) => {

    const { id, title, completed } = todo;

    return (
        <div
            className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 "
        >
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img
                                className="h-4 w-4 " src="/check-icon.svg" alt="Check Icon"
                            />
                        </div>
                    )
                        : (
                            <span onClick={() => handleSetComplete(id)} className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}>
                            </span>
                        )
                }

                <p className={"truncate max-w-sm pl-3 " + (completed && "line-through")}>{title}</p>
            </div>
            <div>
                <EditOutlined 
                    className="w-10 cursor-pointer transition-all duration-300 ease-in"
                    onClick={() => handleDelete(id)}
                    alt="Close Icon"
                />
                <CloseOutlined 
                    className="w-5 cursor-pointer transition-all duration-300 ease-in"
                    onClick={() => handleDelete(id)}
                    alt="Close Icon"
                />
            </div>
            
        </div>
    )
}
