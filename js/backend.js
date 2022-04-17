import {
  ESC_KEYCODE,
  CLOSE_MESSAGE,
  StatusResults,
  urlData
} from './data.js';

import {
  closeElement
} from './utils.js';

import{getData} from './small-picture.js';

import {getFilteredPosts} from './filters.js';

const picturesContainerElement = document.querySelector('.pictures.container');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
const uploadFormElement = document.querySelector('.img-upload__form');
const errorMessageElement = document.querySelector('#error').content;
const successMessageElement = document.querySelector('#success').content;

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
  picturesContainerElement.querySelector(`.${currentStatus}__button`).addEventListener('click', onClickCloser);
  window.addEventListener('keydown', onEscCloser);
};

const getSuccessMessage = () => {
  const successMessageFragment = document.createDocumentFragment();
  const element = successMessageElement.cloneNode(true);
  picturesContainerElement.appendChild(element);
  picturesContainerElement.appendChild(successMessageFragment);
  removeMessageBlock(StatusResults.SUCCESS);
};

const getErrorMessage = (error, message) => {
  const errorMessageFragment = document.createDocumentFragment();
  const element = errorMessageElement.cloneNode(true);
  element.querySelector('.error__title').textContent = error;
  if (message) {
    element.querySelector('.error__button').textContent = message;
  }
  errorMessageFragment.appendChild(element);
  picturesContainerElement.appendChild(errorMessageFragment);
  removeMessageBlock(StatusResults.ERROR);
};

const getPhotoList = () => {
  fetch(urlData.GET_URL)
    .then((response) => response.json())
    .then((data) => {
      getData(data);
      document.querySelector('.img-filters').classList.remove('img-filters--inactive');
      getFilteredPosts(data);
    })
    .catch((error) => {
      getErrorMessage(error, CLOSE_MESSAGE);
    });
};

const postData = () => {
  const onSuccess = () => closeElement(uploadContainerElement);
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      urlData.POST_URL,
      {
        method: 'POST',
        body: formData,
      },
    ).then(checkStatus)
      .then(() => {
        onSuccess();
        getSuccessMessage();
      })
      .catch((error) => getErrorMessage(error, CLOSE_MESSAGE));
  });
};

export {
  postData,
  getPhotoList
};
