import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";



describe('Пункт списка дел', () => {
    const changeCheckedMock = jest.fn();
    const todoItem = {
        id: 1,
        isActive: true,
        task: 'test',
        changeChecked: changeCheckedMock  
    };


    test('выполненная задача перечеркнута', () => {
        render(<TodoItem {...{ ...todoItem, isActive: false }} />);

        const todo = screen.getByText('test');
        expect(todo).toHaveStyle('text-decoration: line-through')

    });


    test('к невыполненной задаче не применяеться стиль перечеркивания', () => {
        render(<TodoItem {...todoItem} />);
        const todo = screen.getByText('test');
        expect(todo).not.toHaveStyle('text-decoration: line-through');

    });

    test('проверка вызова функции changeChecked, при клике по radio', () => {
        render(<TodoItem {...todoItem} />);

        const radioInput = screen.getByRole('radio')
        fireEvent.click(radioInput);

        expect(changeCheckedMock).toHaveBeenCalledTimes(1);

    });

});