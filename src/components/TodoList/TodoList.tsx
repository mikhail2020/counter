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


interface TodoListProps {
    typeTodo: TodoType;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = (props: TodoListProps) => {
    const { typeTodo, todos, setTodos } = props;


    const changeChecked = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (id === todo.id) {
                return { ...todo, isActive: !todo.isActive }
            }
            return todo;
        }));
    }

    return (
        <Accordion>
            <AccordionSummary className={style.header} expandIcon={<ArrowDropDownIcon />} >
                <Typography >Что нужно сделать?</Typography>
            </AccordionSummary>
            <AccordionDetails className={style.listWrapper}>
                {
                    todos.length ?
                        getTasksByType(typeTodo, todos).map(todo =>
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
}