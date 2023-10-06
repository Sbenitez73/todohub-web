import React from 'react'
import { Todo } from '../models/todo'
import { TodoItem } from './TodoItem';

interface Props {
    todos: Array<Todo>,
    activeFilter: boolean;
    handleSetComplete: (id: number) => void;
    handleDelete: (id: number) => void;
}


export const TodoList = ({
    todos,
    activeFilter,
    handleSetComplete,
    handleDelete,
}: Props) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        { 
            todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
            ))
        }

    </div>
  )
}
