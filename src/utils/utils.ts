import { Todo, TodoType } from "../components/Counter/Counter";

/**Функция генерирует случайное число */
export const generateId = (): number => Math.floor(Math.random() * 10000);


/**Функция подсчитывает оставшееся количество задач, и сколняет окончание */
export const getRemainingTaskCount = (todos: Todo[]): string => {

    const count = todos.filter(todo => todo.isActive).length;

    if (count === 0 || (count > 9 && count < 21)) {
        return `${count} задач осталось`;
    } else if (count === 1 || (count % 10 === 1)) {
        return `${count} задача осталась`;
    } else {
        return `${count} задачи осталось`;
    }
}

/**Функция возвращает список задач, в зависимости от выбранного типа задач */
export const getTasksByType = (type: TodoType, todos: Todo[]): Todo[] => {
    switch (type) {
        case 'active':
            return todos.filter(todo => todo.isActive);
        case 'complete':
            return todos.filter(todo => !todo.isActive);

        default:
            return todos;
    }
}