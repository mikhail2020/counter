import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import { Todo } from '../Counter/Counter';
import Radio from '@mui/material/Radio';
import { Typography } from '@mui/material';
import style from './TodoItem.module.css';

interface ItemTodoProps extends Todo {
    changeChecked: (id: number) => void;
}

export const ItemTodo: FC<ItemTodoProps> = (props) => {

    return <>
        <MenuItem disableTouchRipple className={style.wrapper}>

            <ListItemIcon >
                <Radio checked={!props.isActive} onClick={() => props.changeChecked(props.id)} color='success' />
            </ListItemIcon>

            <Typography
                sx={{ textDecoration: props.isActive ? 'none' : 'line-through', }}
                className={style.body}
            >
                {props.task}
            </Typography>

        </MenuItem>
    </>
}