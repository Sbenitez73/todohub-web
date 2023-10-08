import React, { useEffect, useState } from 'react'
import { todoApi } from '../api/todoApi';
import { Todo } from '../models/todo';
import { SearchBar } from './SearchBar';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import Swal from 'sweetalert2';
import { TaskForm } from './TaskForm';

export const Home = () => {
	const { getAllTask, deleteTask } = todoApi();
	const [todos, setTodos] = useState<Todo[]>([]);
	const [taskToEdit, setTaskToEdit] = useState<Todo>(new Todo());
	const [showTaskModal, setShowTaskModal] = useState(false);

	useEffect(() => {
		getAllTodos();
	}, [])

	useEffect(() => {
	}, [todos])

	const getAllTodos = () => {
		getAllTask()
			.then((response: Todo[]) => {
				setTodos(response);
			});
	}

	const handleDelete = (id:number) => {
		deleteTask(id)
			.then( _ => {
				Swal.fire({
					toast: true,
					position: 'top-right',
					title: 'Tarea eliminada',
					showConfirmButton: false,
					icon: 'success',
					timer: 2500
				});
				
				getAllTodos();
			}, _ => {
				Swal.fire({
					toast: true,
					position: 'top-right',
					title: 'Hubo un error al eliminar, intentelo nuevamente.',
					showConfirmButton: false,
					icon: 'error',
					timer: 2500
				});
			});
	}

	const handleEdit = (id: number) => {
		let task = todos.find( t => t.id === id );
		if(!task) return;

		setTaskToEdit( task );
		setShowTaskModal( !showTaskModal );
	}

	const handleModal = () => {
        setShowTaskModal( !showTaskModal );
    }

	return (
		<div>
			<div className='justify-center'>
				<div className='grid h-screen place-items-center bg-gray-900 font-inter text-gray-100 justify-center'>
					<div className='w-[600px] container flex flex-col max-w-xl'>
						<h1 className="text-5xl font-anton font-bold tracking-widest">
							TodoHub
						</h1>

						<TodoInput getAllTodos={getAllTodos} />

						<h1 className="mt-10 text-2xl font-anton font-bold tracking-widest">
							Listado de tareas
						</h1>

						<TaskForm 
							action='edit'
							task={ taskToEdit } 
							show={ showTaskModal } 
							handleModal={ handleModal } 
							getAllTodos={ getAllTodos } />

						<TodoList
							todos={todos}
							handleDelete={handleDelete} 
							handleEdit={handleEdit}/>
					</div>
				</div>
			</div>
		</div>
	)
}
