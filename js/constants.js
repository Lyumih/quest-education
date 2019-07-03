let createWord = (id, name, definition, note, books, question, ex) => {
    return {
        id,
        name,
        definition,
        note,
        books,
        question,
        ex
    };
};

const words = [
    createWord(1, "Java"),
    createWord(2, "Синтаксис"),
    createWord(3, "ООП"),
    createWord(4, "Лучшие практики"),
    createWord(5, "IDE"),
    createWord(6, "Фреймворки"),
    createWord(7, "Сигнатура метода"),
    createWord(8, "Return"),
    createWord(9, "Инкапсуляция"),
    createWord(10, "Полиморфизм"),
    createWord(11, "Наследие"),
    createWord(12, "Абстракция"),
    createWord(13, "Именование переменных"),
    createWord(14, "SOLID"),
    createWord(15, "IDEA"),
    createWord(16, "Spring"),
];
const graphs = [
    [1, 2, 3, 4],
    [2, 7, 8],
    [3, 9, 10, 11, 12],
    [4, 13, 14],
    [5, 15],
    [6, 16],
    [7],
    [8],
    [9],
    [10],
    [11],
    [12],
    [13],
    [14],
    [15],
    [16]
];
const graphsWithParants = [
    [1, null, 2, 3, 4, 5, 6],
    [2, 1, 7, 8],
    [3, 1, 9, 10, 11, 12],
    [4, 1, 13, 14],
    [5, 1, 15],
    [6, 1, 16],
    [7, 2]
];

const tableExample = [
    [1],
    [2, , 3, , , , 4, , 5, 6],
    [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
];