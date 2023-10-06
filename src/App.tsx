import React, { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { SearchBar } from './components/SearchBar';

function App() {
	const [activeFilter, setActiveFilter] = useState<boolean>(false);
	

	const [todos, setTodos] = useState([
		{
		id: 1,
		title: 'Watch the next Marvel Movie asdasdasdasda asdasd asd asd asd a dadads',
		completed: false,
		},
		{
		id: 2,
		title: 'Record the next Video',
		completed: false,
		},
		{
		id: 3,
		title: 'Wash the dishes',
		completed: false,
		},
		{
		id: 4,
		title: 'Study 2 hours',
		completed: false,
		}
	])

	const [filteredTodos, setFilteredTodos] = useState(todos);

	const addTodo = (title: string) => {
		const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

		const newTodo = {
		id: lastId + 1,
		title,
		completed: false
		}

		const todoList = [...todos]
		todoList.push(newTodo);

		setTodos(todoList);
	}

	const handleSetComplete = (id: number) => {

		const updatedList = todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed}
			}

			return todo;
		})

		setTodos(updatedList);
	} 

	const handleDelete = (id: number) => {
		const updatedList = todos.filter(todo => todo.id !== id);
		setTodos(updatedList);
	}


	return (
		<div className='justify-center'>
			<div className='grid h-screen bg-gray-900 min-h-screen font-inter text-gray-100 py-20 px-5 justify-center'>
				<SearchBar />
				<div className='container flex flex-col max-w-xl'>
					<h1 className="text-5xl font-anton font-bold tracking-widest">
					To-Do
					</h1>

					<TodoInput addTodo={addTodo} />
					<TodoList
						activeFilter={activeFilter}
						todos={filteredTodos}
						handleSetComplete={handleSetComplete}
						handleDelete={handleDelete} />
				</div>
			</div>
		</div>
		
	);
}

export default App;
