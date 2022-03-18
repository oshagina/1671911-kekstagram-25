const SIMILAR_DESCRIPTION_COUNT=5;
const NAMES=[
  'Ольга',
  'Илья',
  'Катерина',
  'Мария',
  'Иван',
  'Тарас',
];
const MESSAGES=[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS=[
  'Море море',
  'Буду помнить',
  'Счастливые моменты',
  'Было тепло',
  'Май 2020',
  'На природе',
  'С друзьями',
  'Тихая природа',
];

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//Функция для проверки максимальной длины строки
const compareMaxLengthWithValue = (phrase, value) => phrase.length <= value;
compareMaxLengthWithValue('Hello', 140);

//функция получения случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length-1)];


const createDescriptionPhoto = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: {
    id: getRandomPositiveInteger(1, 1000),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
});

//функция для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
const similarDescriptionPhotos=Array.from({length: SIMILAR_DESCRIPTION_COUNT}, createDescriptionPhoto);

// eslint-disable-next-line no-console
console.log(similarDescriptionPhotos);
