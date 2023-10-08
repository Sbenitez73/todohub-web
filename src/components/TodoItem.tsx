import { AiOutlineCheckCircle } from 'react-icons/ai'
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Status } from '../models/enums/status';
import { Todo } from '../models/todo';

interface Props {
    todo: Todo;
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
}

export const TodoItem = ({todo, handleDelete, handleEdit}: Props) => {
    const { id: id, title: title, status: status } = todo;

    return (
        <div
            className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 "
        >
            <div className="flex items-center">
                {
                    status === Status.Done ? (
                        <div className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <AiOutlineCheckCircle />
                        </div>
                    )
                    : (
                        <span className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}>
                        </span>
                    )
                }
                <p className={"truncate max-w-sm pl-3 " + (status === Status.Done && "line-through")}>{title}</p> 
            </div>
            <div>
                <EditOutlined 
                    className="w-10 cursor-pointer transition-all duration-300 ease-in"
                    onClick={() => handleEdit(id)}
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
