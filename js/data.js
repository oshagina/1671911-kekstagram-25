import {getRandomArrayElement} from'./utils.js';
import {getRandomPositiveInteger} from'./utils1.js';

const SIMILAR_DESCRIPTION_COUNT=25;
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
const similarDescriptionPhotos=()=>Array.from({length: SIMILAR_DESCRIPTION_COUNT}, createDescriptionPhoto);

export {similarDescriptionPhotos};
