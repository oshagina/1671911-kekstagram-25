import {getRandomPositiveInteger} from'./utils1.js';

//Функция для проверки максимальной длины строки
const compareMaxLengthWithValue = (phrase, value) => phrase.length <= value;
compareMaxLengthWithValue('Hello', 140);

//функция получения случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length-1)];

export {getRandomArrayElement};
