import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { getTasksByType } from "../../utils/utils";
import { ItemTodo } from "../TodoItem/TodoItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Todo, TodoType } from "../Counter/Counter";
import MenuItem from "@mui/material/MenuItem";
import style from './TodoList.module.css';
import { memo, useCallback, useMemo } from "react";


interface TodoListProps {
    typeTodo: TodoType;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = memo((props: TodoListProps) => {
    const { typeTodo, todos, setTodos } = props;

    const { tasksByType, changeChecked } = useTodoList(typeTodo, todos, setTodos);

    return (
        <Accordion>
            <AccordionSummary className={style.header} expandIcon={<ArrowDropDownIcon />} >
                <Typography >Что нужно сделать?</Typography>
            </AccordionSummary>
            <AccordionDetails className={style.listWrapper}>
                {
                    todos.length ?
                        tasksByType.map(todo =>
                            <ItemTodo
                                key={todo.id}
                                id={todo.id}
                                isActive={todo.isActive}
                                task={todo.task}
                                changeChecked={changeChecked}
                            />)
                        : <MenuItem className={style.noItem}> Задач нет</MenuItem>
                }
            </AccordionDetails>
        </Accordion>
    )
});

const useTodoList = (
    typeTodo: TodoType,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {

    const tasksByType = useMemo(() => getTasksByType(typeTodo, todos), [typeTodo, todos]);

    const changeChecked = useCallback((id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (id === todo.id) {
                return { ...todo, isActive: !todo.isActive }
            }
            return todo;
        }));
    }, []);
    return { tasksByType, changeChecked };
}
