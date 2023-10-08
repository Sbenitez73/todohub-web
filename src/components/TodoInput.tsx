import { TaskForm } from './TaskForm';
import { Todo } from '../models/todo';
import { useState, KeyboardEvent } from 'react';

interface Props {
    getAllTodos: () => void;
}

export const TodoInput = ({getAllTodos}: Props) => {
    const [taskToCreate, setTaskToCreate] = useState<Todo>(new Todo());
    const [showTaskModal, setShowTaskModal] = useState(false);
    
    const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === 'enter') {
            setShowTaskModal(!showTaskModal);
        }
    }

    const handleModal = () => {
        setTaskToCreate( new Todo() );
        setShowTaskModal( !showTaskModal );
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
                    value={ taskToCreate.title ?? '' }
                    onChange={(e) => setTaskToCreate({
                        ...taskToCreate,
                        title: e.target.value
                    })}
                    onKeyDown={(e) => handleAddTodo(e)}
                    placeholder="Agrega una nueva tarea"
                />
            </div>
            <TaskForm 
                action='create'
                task={ taskToCreate } 
                show={ showTaskModal } 
                handleModal={ handleModal } 
                getAllTodos={ getAllTodos }/>
        </div>
    )
}