import { Todo } from "../components/Counter/Counter";
import { getRemainingTaskCount, getTasksByType } from "./utils";


describe('Вспомогательные функции', () => {
    const todos: Todo[] = [
        { id: 1, isActive: true, task: 'активная задача 1' },
        { id: 2, isActive: false, task: 'выполненная задача 1' },
        { id: 3, isActive: true, task: 'активная задача 2' },
        { id: 4, isActive: true, task: 'активная задача 3' },
        { id: 5, isActive: false, task: 'выполненная задача 2' },
    ]

    test('Проверка функции возвращающей оставшееся количество активных задач', () => {
        const remainingTasks = getRemainingTaskCount(todos);

        expect(remainingTasks).toBe('3 задачи осталось');
    });


    test('Проверка возвращения всего списка задач, ', () => {
        const totalTasks = getTasksByType('all', todos);
        expect(totalTasks).toHaveLength(5);
    });

    test('Проверка возвращения активных задач, ', () => {
        const totalTasks = getTasksByType('active', todos);
        expect(totalTasks).toHaveLength(3);
    });

    test('Проверка возвращения всего список задач, ', () => {
        const totalTasks = getTasksByType('complete', todos);
        expect(totalTasks).toHaveLength(2);
    });


});