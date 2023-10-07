import axios from "axios"
import { Todo } from "../models/todo"


const BASEURL = process.env.API;

console.log('BASE', BASEURL);


export const todoApi = () => {
    const getAllTask = async() => {
        const { data } = await axios.get<Array<Todo>>()
    }
}

