import {getRandomArrayElement, getRandomPositiveInteger} from'./utils.js';

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
const HashTagData = {
  OCTOTHORPE: '#',
  MIN_HASHTAG_SIZE: 2,
  MAX_HASHTAG_SIZE: 20,
  HASHTAGS_AMOUNT: 5,
};
const COMMENT_SIZE = 140;
const STEP_ADD_COMMENT = 5;
const START_COMMENTS_NUM = 0;
const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const CLOSE_MESSAGE = 'Please close it';
const DELAY_INTERVAL = 500;

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

const hashTagRegExp = /[a-zA-Zа-яА-ЯёЁ0-9]/;

const postInfo = {
  TOTAL_POSTS: 25,
  FILTERED_POSTS: 10,
};

const urlData = {
  GET_URL: 'https://25.javascript.pages.academy/kekstagram/data',
  POST_URL: 'https://25.javascript.pages.academy/kekstagram',
};

const FILE_TYPE = ['jpg', 'jpeg', 'gif', 'png'];

const StatusResults = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export {
  similarDescriptionPhotos,
  HashTagData,
  COMMENT_SIZE,
  STEP_ADD_COMMENT,
  START_COMMENTS_NUM,
  ESC_KEYCODE,
  ENTER_KEYCODE,
  hashTagRegExp,
  postInfo,
  urlData,
  CLOSE_MESSAGE,
  DELAY_INTERVAL,
  FILE_TYPE,
  StatusResults
};
