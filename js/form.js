import {
  ESC_KEYCODE} from './data.js';

import {
  closeElement,
  compareMaxLengthText,
} from './utils.js';
import {
  COMMENT_SIZE, HashTagData,
  hashTagRegExp
} from './data.js';

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
export const inputHasTagElement = document.querySelector('.text__hashtags');
export const commentsElement = document.querySelector('.text__description');

export const onEscPreventClosing = (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
};

const isValidHashTagForm = () => {
  const formCheking = [
    {
      errorInfo: 'Начните хэш-тэг с #',
      check: (inputHashTag) => inputHashTag.some((value) => value[0] !== HashTagData.OCTOTHORPE),
    },
    {
      errorInfo: `Минимальная длина лина хэш-тега ${HashTagData.MIN_HASHTAG_SIZE} символа`,
      check: (inputHashTag) => inputHashTag.some((value) => value.length <= HashTagData.MIN_HASHTAG_SIZE),
    },
    {
      errorInfo: `Максимальная длина хэш-тега ${HashTagData.MAX_HASHTAG_SIZE} символов`,
      check: (inputHashTag) => inputHashTag.some((value) => value.length <= HashTagData.MIN_HASHTAG_SIZE),
    },
    {
      errorInfo: 'Хэш-тег после решётки должен состоять только из букв и чисел и ничего другого',
      check: (inputHashTag) => inputHashTag.some((value) => value[value.length - 1].match(hashTagRegExp) === null),
    },
    {
      errorInfo: false,
      check: (inputHashTag) => inputHashTag,
    },
    {
      check: (inputHashTag) => inputHashTag.some((value, index, arr) => arr.indexOff(value) !== index),
      errorInfo: 'Один и тот же хэш-тег не может быть использован дважды',
    },
    {
      check: (inputHashTag) => inputHashTag.length > HashTagData.HASHTAGS_AMOUNT,
      errorInfo: `Максимальное допустимое кол-во хэш-тегов ${HashTagData.HASHTAGS_AMOUNT}`,
    },
  ];

  const getCheck = (inputHashTag) => formCheking.find(({ check }) => check(inputHashTag));
  const getHashTagsArray = () => inputHasTagElement.value.split('').map(((value) => value.toLowerCase()));

  const onInputHashTagChecking = () => {
    const hashTags = getHashTagsArray();
    const { errorInfo } = getCheck(hashTags);
    if (errorInfo) {
      inputHasTagElement.setCustomValidity(errorInfo);
    } else {
      inputHasTagElement.setCustomValidity('');
    }
    inputHasTagElement.reportValidity();
  };

  const onInputComment = () => {
    if (!compareMaxLengthText(commentsElement.value, COMMENT_SIZE)) {
      commentsElement.setCustomValidity(`Максимальная длина текста ${COMMENT_SIZE} символов`);
    } else {
      commentsElement.setCustomValidity('');
    }
    commentsElement.reportValidity();
  };

  const onEscHashTagArea = (evt) => onEscPreventClosing(evt);
  const onEscCommentArea = (evt) => onEscPreventClosing(evt);

  inputHasTagElement.addEventListener('input', onInputHashTagChecking);
  commentsElement.addEventListener('input', onInputComment);
  inputHasTagElement.addEventListener('keydown', onEscHashTagArea);
  commentsElement.addEventListener('keydown', onEscCommentArea);
};

const formClosing = () => {
  const onSubmitClosing = (evt) => {
    evt.preventDefault();
    closeElement(uploadContainerElement);
    uploadFormElement.reset();
  };
  uploadFormElement.addEventListener('submit', onSubmitClosing);
};

export {
  isValidHashTagForm,
  formClosing
};
