import { fireEvent, render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";


describe('Список задач', () => {
    const todos = [
        { id: 1, isActive: true, task: 'активная задача 1' },
        { id: 2, isActive: true, task: 'активная задача 2' },
        { id: 3, isActive: false, task: 'выполненная задача 3' },

    ]
    let mockSetTodos= jest.fn();
 

    test('Проверяем если список пустой, то показываем сообщение что задач нет', () => {
        render(<TodoList typeTodo={'all'} todos={[]} setTodos={mockSetTodos} />)
        const noItem = screen.getByText(/задач нет/i);
        expect(noItem).toBeInTheDocument();
    });

    test('Проверяем что при наличии в списке задач, они отображаються в списке, сообщение что список пуст не отображаеться', () => {
        render(<TodoList typeTodo={'all'} todos={todos} setTodos={mockSetTodos} />)


        const noItem = screen.queryByText(/задач нет/i);
        expect(noItem).toBeNull();

        const task = screen.getAllByText(/активная задача/i);
        expect(task).toHaveLength(2);

        const noValidTask = screen.queryByText('выполненная задача');
        expect(noValidTask).toBeNull();

    });
});