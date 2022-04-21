const HASHTAGS_AMOUNT = 5;
const COMMENT_SIZE = 140;
const STEP_ADD_COMMENT = 5;
const START_COMMENTS_NUM = 0;
const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const CLOSE_MESSAGE = 'Закрыть';
const DELAY_INTERVAL = 500;

const hashTagRegExp = /^(#[A-za-zА-Яа-яЁё0-9_]{2,19}\s?)*$/;

const PostInfo = {
  TOTAL_POSTS: 25,
  FILTERED_POSTS: 10,
};

const UrlData = {
  GET_URL: 'https://25.javascript.pages.academy/kekstagram/data',
  POST_URL: 'https://25.javascript.pages.academy/kekstagram',
};

const FILE_TYPE = ['jpg', 'jpeg', 'gif', 'png'];

const StatusResults = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export {
  HASHTAGS_AMOUNT,
  COMMENT_SIZE,
  STEP_ADD_COMMENT,
  START_COMMENTS_NUM,
  ESC_KEYCODE,
  ENTER_KEYCODE,
  hashTagRegExp,
  PostInfo,
  UrlData,
  CLOSE_MESSAGE,
  DELAY_INTERVAL,
  FILE_TYPE,
  StatusResults
};
