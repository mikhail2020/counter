import { fireEvent, render, screen } from "@testing-library/react";
import { TodoInput } from "./TodoInput";

describe('Создание задачи', () => {
    let mockSetTodos: jest.Mock;
    beforeEach(() => {
        mockSetTodos = jest.fn(); 
    });

    test('При пустом инпуте, не показывает иконку добавить ', () => {
        render(<TodoInput setTodos={mockSetTodos} />)
        
        const addIcon = screen.queryByRole('button');
        
        expect(addIcon).toBeNull();
    });

    test('При заполненном инпуте, показывает иконку добавить ', () => {
        render(<TodoInput setTodos={mockSetTodos} />)
        const inputElement = screen.getByPlaceholderText('Новая задача');
        
        fireEvent.change(inputElement, { target: { value: 'Новая задача' } });
        
        const addIcon = screen.getByRole('button');
        
        expect(addIcon).toBeInTheDocument();
    });

    test('Проверка правильности отрабатывания функций при нажатии иконки добавить ', () => {
        render(<TodoInput setTodos={mockSetTodos} />)
        const inputElement = screen.getByPlaceholderText('Новая задача');
        fireEvent.change(inputElement, { target: { value: 'Новая задача' } });
        const addIcon = screen.getByRole('button');


        fireEvent.click(addIcon);
        //вызвали setState, и проверили что инпут пустой
        expect(mockSetTodos).toHaveBeenCalledTimes(1);
        expect(inputElement).toHaveValue('');
        
    });


});