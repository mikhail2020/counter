import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';


describe('Список задач', () => {
    test('Список отрисовался как требуеться', () => {
        render(<Counter />);

        const inputElement = screen.getByRole('textbox');
        const DDl = screen.getByTestId('DDL');
        const buttonAll = screen.getByText('Все');
        const buttonActive = screen.getByText('Активные');
        const buttomComplete = screen.getByText('Выполненные');
        const buttomClearComplete = screen.getByText('Удалить выполненные');

        screen.queryAllByTitle

        expect(inputElement).toBeInTheDocument();
        expect(DDl).toBeInTheDocument();
        expect(buttonAll).toBeInTheDocument();
        expect(buttonActive).toBeInTheDocument();
        expect(buttomComplete).toBeInTheDocument();
        expect(buttomClearComplete).toBeInTheDocument();
    });

    test('Каждый элемент отображается только один раз', () => {
        render(<Counter />);

        const inputElements = screen.getAllByRole('textbox');
        const ddlElements = screen.getAllByTestId('DDL');
        const buttonAllElements = screen.getAllByText('Все');
        const buttonActiveElements = screen.getAllByText('Активные');
        const buttomCompleteElements = screen.getAllByText('Выполненные');
        const buttomClearCompleteElements = screen.getAllByText('Удалить выполненные');

        expect(inputElements).toHaveLength(1);
        expect(ddlElements).toHaveLength(1);
        expect(buttonAllElements).toHaveLength(1);
        expect(buttonActiveElements).toHaveLength(1);
        expect(buttomCompleteElements).toHaveLength(1);
        expect(buttomClearCompleteElements).toHaveLength(1);
    });

});