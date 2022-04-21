import {
  ESC_KEYCODE,
  CLOSE_MESSAGE,
  StatusResults,
  UrlData
} from './data.js';

import {
  closeElement
} from './utils.js';

import { getData } from './small-picture.js';

import { getFilteredPosts } from './filters.js';
import { destroySlider } from './effects.js';

const picturesContainerElement = document.querySelector('.pictures.container');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const imgUploadForm = document.querySelector('.img-upload__form');
let successClone;
let errorClone;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  const { statusText, status } = response;
  throw new Error(`${status} — ${statusText}`);
};

const removeMessageBlock = (status) => {
  const currentStatus = status;
  const onClickCloser = () => picturesContainerElement.querySelector(`.${currentStatus}`).remove();
  const onEscCloser = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      window.removeEventListener('keydown', onEscCloser);
      picturesContainerElement.querySelector(`.${currentStatus}`).remove();
    }
  };

  const onClickNonCloser = (evt) => evt.stopPropagation();
  picturesContainerElement.querySelector(`.${currentStatus}`).addEventListener('click', onClickCloser);
  picturesContainerElement.querySelector(`.${currentStatus}__inner`).addEventListener('click', onClickNonCloser);
  if (status === 'success') {
    successClone.querySelector(`.${currentStatus}__button`).addEventListener('click', onClickCloser);
  } else {
    errorClone.querySelector(`.${currentStatus}__button`).addEventListener('click', onClickCloser);
  }
  window.addEventListener('keydown', onEscCloser);
};

const getSuccessMessage = () => {
  const successMessageFragment = document.createDocumentFragment();
  successClone = successMessageElement.cloneNode(true);
  picturesContainerElement.appendChild(successClone);
  picturesContainerElement.appendChild(successMessageFragment);
  removeMessageBlock(StatusResults.SUCCESS);
};

const getErrorMessage = (error, message) => {
  const errorMessageFragment = document.createDocumentFragment();
  errorClone = errorMessageElement.cloneNode(true);
  errorClone.querySelector('.error__title').textContent = error;
  if (message) {
    errorClone.querySelector('.error__button').textContent = message;
  }
  errorMessageFragment.appendChild(errorClone);
  picturesContainerElement.appendChild(errorMessageFragment);
  removeMessageBlock(StatusResults.ERROR);
};

const getPhotoList = () => {
  fetch(UrlData.GET_URL)
    .then((response) => response.json())
    .then((data) => {
      getData(data);
      document.querySelector('.img-filters').classList.remove('img-filters--inactive');
      getFilteredPosts(data);
    })
    .catch(() => {
      getErrorMessage('Ошибка получения данных', CLOSE_MESSAGE);
    });
};

const postData = (formData) => {
  const onSuccess = () => {
    closeElement(uploadContainerElement);
    destroySlider();
  };

  fetch(
    UrlData.POST_URL,
    {
      method: 'POST',
      body: formData,
    },
  ).then(checkStatus)
    .then(() => {
      onSuccess();
      getSuccessMessage();
      imgUploadForm.reset();
    })
    .catch(() => getErrorMessage('Ошибка  загрузки изображения', CLOSE_MESSAGE));
};

export {
  postData,
  getPhotoList
};
