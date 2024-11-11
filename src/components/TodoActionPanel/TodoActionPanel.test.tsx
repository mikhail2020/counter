import { fireEvent, render, screen } from "@testing-library/react";
import { TodoActionPanel } from "./TodoActionPanel";


describe('Панель с действичми', () => {
    const changeCheckedMock = jest.fn();
    const setTypeTodoMock = jest.fn();
    const setTodosMock = jest.fn();

    const todoItem = {
        id: 1,
        isActive: true,
        task: 'test',
        changeChecked: changeCheckedMock
    };

    beforeEach(() => {
        render(
            <TodoActionPanel
                typeTodo={"all"}
                setTypeTodo={setTypeTodoMock}
                todos={[todoItem, { ...todoItem, id: 2 }, { ...todoItem, id: 3, isActive: false }]}
                setTodos={setTodosMock}
            />);
    })



    test('отрендерились все 4 кнопки и блок с оставшимися задачами', () => {
        const allButton = screen.getByText('Все');
        const activeButton = screen.getByText('Активные');
        const compliteButton = screen.getByText('Выполненные');
        const clearCheckedButton = screen.getByText('Удалить выполненные');
        const remainingTaskBlock = screen.getByTestId('remainingTask');

        expect(allButton).toBeInTheDocument();
        expect(activeButton).toBeInTheDocument();
        expect(compliteButton).toBeInTheDocument();
        expect(clearCheckedButton).toBeInTheDocument();
        expect(remainingTaskBlock).toBeInTheDocument();

    });

    test('Блок с оставшимися задачами отображает правильное количество задач', () => {
        const amountTasksTwo = screen.getByText(/2 .*/i);
        const amountTasksThree = screen.queryByText(/3 .*/i);

        expect(amountTasksTwo).toBeInTheDocument();
        expect(amountTasksThree).toBeNull();
    });


    test('При клике по кнопке "Удалить выполненные" вызываеться setState', () => {
        const clearCheckedButton = screen.getByText('Удалить выполненные');

        fireEvent.click(clearCheckedButton);
        expect(setTodosMock).toHaveBeenCalledTimes(1);
    });

});