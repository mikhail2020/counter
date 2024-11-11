import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getRemainingTaskCount } from "../../utils/utils";
import Button from "@mui/material/Button";
import { Todo, TodoType } from "../Counter/Counter";
import style from './TodoActionPanel.module.css';
import ButtonGroup from "@mui/material/ButtonGroup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { memo, useMemo } from "react";

interface TodoActionPanel {
    typeTodo: TodoType;
    setTypeTodo: React.Dispatch<React.SetStateAction<TodoType>>;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


export const TodoActionPanel = memo((props: TodoActionPanel) => {
    const { todos, setTodos, typeTodo, setTypeTodo } = props;

    const { handleChangeType, clearChecked, remainingTask } = useTodoActionPanel(todos, setTypeTodo, setTodos);


    return (
        <Box className={style.wrapper}>
            <Stack direction="row" spacing={1} >
                <Typography className={style.remainingTask} data-testid="remainingTask" >
                    {remainingTask}
                </Typography>

                <Tabs
                    value={typeTodo}
                    onChange={handleChangeType}
                    className={style.tabsRoot}
                >
                    <Tab className={typeTodo === "all" ? style.activeTab : style.tab} label="Все" value={'all'} />
                    <Tab className={typeTodo === "active" ? style.activeTab : style.tab} label="Активные" value={'active'} />
                    <Tab className={typeTodo === "complete" ? style.activeTab : style.tab} label="Выполненные" value={'complete'} />
                </Tabs>

                <Button variant="text" size="small" onClick={clearChecked}>
                    Удалить выполненные
                </Button>
            </Stack>
        </Box >
    )
})


const useTodoActionPanel = (
    todos: Todo[],
    setTypeTodo: React.Dispatch<React.SetStateAction<TodoType>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {

    const clearChecked = () => {
        setTodos(prevState => prevState.filter(todo => todo.isActive));
    }
    const handleChangeType = (_: React.SyntheticEvent, value: TodoType) => {
        setTypeTodo(value)
    }

    const remainingTask = useMemo(() => getRemainingTaskCount(todos), [todos]);

    return {
        clearChecked,
        handleChangeType,
        remainingTask
    }
}