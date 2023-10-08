import { Todo } from '../models/todo';
import { TodoItem } from './TodoItem';

interface Props {
    todos: Array<Todo>;
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
}


export const TodoList = ({
    todos,
    handleDelete,
    handleEdit
}: Props) => {

    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            { 
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit}/>
                ))
            }
        </div>
     )
}
