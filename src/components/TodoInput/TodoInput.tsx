import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Paper from "@mui/material/Paper"
import { useState } from "react";
import { generateId } from "../../utils/utils";
import QueueIcon from '@mui/icons-material/Queue';
import { Todo } from "../Counter/Counter";


interface TodoInputProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoInput = (props: TodoInputProps) => {
    const { setTodos } = props;
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

    return (
        <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
        >
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
}