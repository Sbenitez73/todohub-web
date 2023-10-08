import { AlignLeftOutlined, CloseOutlined } from '@ant-design/icons';
import { getCategoryValues } from '../helpers/getCategoryValues';
import { getStatusValues } from '../helpers/getStatusValues';
import { Modal, Input, Select, Button } from 'antd';
import { Todo } from '../models/todo';
import { todoApi } from '../api/todoApi';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from 'sweetalert2';

type Inputs = {
    title: string,
};

interface Props {
    action: 'create' | 'edit';
    task: Todo;
    show: boolean;
    handleModal: () => void;
    getAllTodos: () => void;
};

export const TaskForm = ({action, task, show, handleModal, getAllTodos}: Props) => {
    const { TextArea } = Input;
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [newTask, setNewTask] = useState(new Todo());
    const { createTask, updateTask } = todoApi();

    useEffect(() => {
        setNewTask({
            id: task.id,
            title: task.title,
            description: task.description,
            category: task.category,
            status: task.status
        })
    }, [task])

    const createNewTask = () => {
        createTask(newTask)
            .then(( response ) => {
                if(response.id) {
                    setNewTask( new Todo() );
                    Swal.fire({
                        toast: true,
                        position: 'top-right',
                        title: 'Tarea Guardada',
                        showConfirmButton: false,
                        icon: 'success',
                        timer: 2500
                    });

                    getAllTodos();
                    handleModal();
                }
                
            }, _ => {
                Swal.fire({
                    toast: true,
                    position: 'top-right',
                    title: 'Hubo un error al guardar, intentelo nuevamente.',
                    showConfirmButton: false,
                    icon: 'error',
                    timer: 2500
                });
            })
    }

    const updateCurrentTask = () => {
        updateTask( newTask )
            .then(() => {
                setNewTask( new Todo() );
                getAllTodos();
                handleModal();
            }, _ => {
                Swal.fire({
                    toast: true,
                    position: 'top-right',
                    title: 'Ocurrió un error al actualizar, intentelo nuevamente.',
                    showConfirmButton: false,
                    icon: 'error',
                    timer: 2500
                });
            })
    }

    const  onSubmit: SubmitHandler<Inputs> = () => {
        action === 'create' ? createNewTask() : updateCurrentTask();
    }

    return (
        <div>
            <Modal 
                centered
                className='!bg-gray-700 rounded-lg text-gray-100'
                open={show}
                onCancel={ () => handleModal()} 
                closeIcon={ <CloseOutlined style={{ marginTop: 10, fontSize: 20 }} /> }
                footer={ null}
            >
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="flex flex-row">
                        <input 
                            type="text" 
                            placeholder='Nombre de la tarea' 
                            className='w-11/12 p-2 rounded-md bg-gray-600 border-slate-500 text-2xl font-bold text-gray-300' 
                            {...register("title", 
                                { required: 'Se requiere el titulo de la tarea', 
                                    minLength: { 
                                        value: 4, 
                                        message: 'El titulo debe tener por lo menos 4 caracteres' 
                                    } 
                                }
                            )}
                            onChange={(e) => {
                                setNewTask({
                                    ...newTask,
                                    title: e.target.value
                                })
                            } }
                            value={ newTask.title }
                        />
                    </div>
                    <p className='text-red-600 font-bold'>{errors.title?.message}</p>

                    <div className="flex flex-row mt-4">
                        <Select 
                            className='w-1/3'
                            style={{ backgroundColor: '#4b5563' }}
                            dropdownStyle={{ background: '#4b5563' }}
                            placeholder="Estado"
                            onChange={(e: number) => {
                                setNewTask({
                                    ...newTask,
                                    status: e
                                })
                            }} 
                            options={ getStatusValues() }
                            value={ newTask.status }
                        />
                        
                        <Select 
                            className='ml-4 w-50'
                            style={{ backgroundColor: '#4b5563' }}
                            dropdownStyle={{ background: '#4b5563' }}
                            placeholder="Categoria"
                            onChange={(e: number) => {
                                setNewTask({
                                    ...newTask,
                                    category: e
                                })
                            }}
                            options={ getCategoryValues() }
                            value={ newTask.category }
                        />
                    </div>
                    <div className='mt-10'>
                        <div className="flex flex-row mb-2">
                            <AlignLeftOutlined className='mr-2' style={{fontSize: 20}}/>
                            <h3 className="text-lg font-anton font-bold tracking-widest">
                                Descripción
                            </h3>
                        </div>
                        
                        <TextArea 
                            className='bg-gray-600 w-full p-4 rounded-md bg-gray-600 border-slate-500 text-xl'
                            style={{ color: '#FFFFFF' }}
                            onChange={(e) => {
                                setNewTask({
                                    ...newTask,
                                    description: e.target.value
                                })
                            } }
                            value={ newTask.description }
                            rows={10} 
                            autoSize
                            maxLength={450} 

                        />
                    </div>

                    <div className='mt-5 flex flex-row-reverse'>    
                        <Button 
                            type='primary'
                            className='bg-green-500'
                            htmlType='submit'
                        >
                            <input 
                                type="submit" 
                                value="Guardar" />
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
