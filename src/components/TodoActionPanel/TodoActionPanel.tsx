import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getRemainingTaskCount } from "../../utils/utils";
import Button from "@mui/material/Button";
import { Todo, TodoType } from "../Counter/Counter";
import style from './TodoActionPanel.module.css';

interface TodoActionPanel {
    typeTodo: TodoType;
    setTypeTodo: React.Dispatch<React.SetStateAction<TodoType>>
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


export const TodoActionPanel = (props: TodoActionPanel) => {
    const { todos, setTodos, typeTodo, setTypeTodo } = props;

    const clearChecked = () => {
        setTodos(prevState => prevState.filter(todo => todo.isActive))
    }

    return (
        <Box sx={{ p: 1 }}>
            <Stack direction="row" spacing={1} className={style.directionRow}>
                <Typography >{getRemainingTaskCount(todos)}</Typography>
                <Box sx={{ margin: '3px' }} className={[style.directionRow, style.margin0].join(" ")} >
                    <Button
                        variant={typeTodo === "all" ? "outlined" : "text"}
                        size="small"
                        onClick={() => setTypeTodo('all')}
                    >
                        Все
                    </Button>
                    <Button
                        variant={typeTodo === "active" ? "outlined" : "text"}
                        size="small"
                        onClick={() => setTypeTodo('active')}
                    >
                        Активные
                    </Button>
                    <Button
                        variant={typeTodo === "complete" ? "outlined" : "text"}
                        size="small"
                        onClick={() => setTypeTodo('complete')}
                    >
                        Выполненные
                    </Button>
                </Box>
                <Button  variant="text" size="small" onClick={clearChecked}>
                    Удалить выполненные
                </Button>
            </Stack>
        </Box >
    )
}