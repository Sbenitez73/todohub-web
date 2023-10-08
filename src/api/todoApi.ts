import axios from "axios"
import { Todo } from "../models/todo"


const BASEURL = "https://localhost:44394/api";

const client = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const todoApi = () => {

    const getAllTask = async() => {
        const { data } = await client.get<Array<Todo>>(`${BASEURL}/todo`);
        return data;
    }

    const createTask = async(task: Todo) => {
        const { data } = await client.post<Todo>(`${BASEURL}/todo`, task);
        return data;
    }

    const deleteTask = async(id: number) => {
        const { data } = await client.delete<void>(`${BASEURL}/todo/${id}`);
        return data;
    }

    const updateTask = async( task: Todo ) => {
        const { data } = await client.put<Todo>(`${BASEURL}/todo`, task);
        return data;
    }

    return  {
        getAllTask,
        createTask,
        deleteTask,
        updateTask
    }
}