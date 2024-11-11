import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { TodoInput } from '../TodoInput/TodoInput';
import { TodoList } from '../TodoList/TodoList';
import { TodoActionPanel } from '../TodoActionPanel/TodoActionPanel';
import style from './Counter.module.css';

export interface Todo {
    id: number;
    isActive: boolean;
    task: string;
}

export type TodoType = 'all' | 'active' | 'complete';


export const Counter = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [typeTodo, setTypeTodo] = useState<TodoType>('all');


    return (<>
        <Typography variant="h1" className={style.header} >
            задачи
        </Typography>
        
        <Paper>
            <TodoInput setTodos={setTodos} />
            <TodoList typeTodo={typeTodo} todos={todos} setTodos={setTodos} />
            <TodoActionPanel todos={todos} setTodos={setTodos} typeTodo={typeTodo} setTypeTodo={setTypeTodo} />
        </Paper >
    </>
    )
}