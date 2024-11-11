import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Paper from "@mui/material/Paper"
import { memo, useState } from "react";
import { generateId } from "../../utils/utils";
import QueueIcon from '@mui/icons-material/Queue';
import { Todo } from "../Counter/Counter";
import style from "./TodoInput.module.css";


interface TodoInputProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoInput = memo((props: TodoInputProps) => {

    const { todo, setTodo, addTodo, handleKeyDown } = useTodoInput(props.setTodos);

    return (
        <Paper className={style.wrapper} >
            <InputBase
                sx={{ ml: 1, flex: 1, height: '48px' }}
                placeholder="Новая задача"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            {
                todo && <IconButton type="button" sx={{ p: '10px' }} onClick={addTodo}>
                    <QueueIcon />
                </IconButton>
            }
        </Paper>
    )
});


const useTodoInput = (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        setTodos(prevState => [...prevState, { id: generateId(), isActive: true, task: todo }]);
        setTodo('');
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTodo();
        }
    };

    return {
        todo,
        setTodo,
        addTodo,
        handleKeyDown
    }
}