import {
  STEP_ADD_COMMENT,
  START_COMMENTS_NUM,
  ESC_KEYCODE,
  ENTER_KEYCODE,
} from './data.js';
import {
  showElement,
  closeElement,
  removeChild
} from './utils.js';

const picturesContainerElement = document.querySelector('.pictures.container');
const bigPicturesOverlayElement = document.querySelector('.big-picture.overlay');
const bigPicturePreviewElement = document.querySelector('.big-picture__preview');
const bigPictureImgElement = bigPicturePreviewElement.querySelector('.big-picture__img img');
const closeButtonBigPictureElement = bigPicturePreviewElement.querySelector('.big-picture__cancel');
const bigPictureCommentsList = bigPicturePreviewElement.querySelector('.social__comments');
const bigPictureCommentElement = bigPicturePreviewElement.querySelector('.social__comment');
const socialCommentCounterElement = bigPicturePreviewElement.querySelector('.social__comment-count');
const socialCommentsLoaderElement = bigPicturePreviewElement.querySelector('.social__comments-loader');
const bigPictureLikesContainerElement = bigPicturePreviewElement.querySelector('.likes-count');
const bigPictureCountContainerElement = bigPicturePreviewElement.querySelector('.comments-count');
const bigPictureCaptonContainerElement = bigPicturePreviewElement.querySelector('.social__caption');
const socialFooterText = bigPicturePreviewElement.querySelector('.social__footer-text');

const getPictureCommonData = (bigPictureData) => {
  const listCommentsFragment = document.createDocumentFragment();
  bigPictureData.forEach((comment) =>{
    const oneCommentElement = bigPictureCommentElement.cloneNode(true);
    oneCommentElement.querySelector('.social__text').textContent = comment.message;
    const userName = `${comment.name  }: `;
    oneCommentElement.querySelector('.social__text').insertAdjacentText('afterbegin', userName);
    oneCommentElement.querySelector('.social__picture').src = comment.avatar;
    bigPictureCommentsList.appendChild(oneCommentElement);
  });
  bigPictureCommentsList.appendChild(listCommentsFragment);
};

const getPost = (somePost) => {
  bigPictureImgElement.src = somePost.url;
  bigPictureLikesContainerElement.textContent =somePost.likesCount;
  bigPictureCountContainerElement.textContent = somePost.comments.length;
  bigPictureCaptonContainerElement.textContent = somePost.description;
};

const getCommentsList = (bigPictureData) => {
  if(bigPictureData.comments.length > STEP_ADD_COMMENT){
    if(socialCommentsLoaderElement.classList.contains('hidden')) {
      showElement(socialCommentsLoaderElement);
    }
    if(socialCommentCounterElement.classList.contains('hidden')){
      showElement(socialCommentCounterElement);
    }

    const commentsBlock = bigPictureData.comments.slice();
    getPictureCommonData(commentsBlock.splice(START_COMMENTS_NUM, STEP_ADD_COMMENT));

    const onClickCommentsOpening = () => {
      getPictureCommonData(commentsBlock.splice(START_COMMENTS_NUM, STEP_ADD_COMMENT));
    };
    socialCommentsLoaderElement.addEventListener('click', onClickCommentsOpening);
  } else {
    if(!socialCommentsLoaderElement.classList.contains('hidden')){
      closeElement(socialCommentsLoaderElement);
    }
    if(!socialCommentCounterElement.classList.contains('hidden')){
      closeElement(socialCommentCounterElement);
    }
    getPictureCommonData(bigPictureData.comments);
  }
};

const getBigPhoto = (loadedPhotos) => {
  const showPhotos = () => {
    getPost(loadedPhotos);
    removeChild(bigPictureCommentsList);
    showElement(bigPicturePreviewElement);
    getCommentsList(loadedPhotos);
  };

  showPhotos();

  const onKeydownPictureOpen = (evt) => {
    if (evt.keyCode === ENTER_KEYCODE && evt.target.classList.contains('picture')) {
      showPhotos(evt);
    }
  };

  const onEscPictureClose = (evt) => {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== socialFooterText) {
      evt.preventDefault();
      closeElement(bigPicturesOverlayElement);
    }
  };

  const onClickPictureClose = () => {
    removeChild(bigPictureCommentsList);
    closeElement(bigPicturesOverlayElement);
  };
  showElement(bigPicturesOverlayElement);
  showElement(bigPicturePreviewElement);

  picturesContainerElement.addEventListener('keydown', onKeydownPictureOpen);
  closeButtonBigPictureElement.addEventListener('click', onClickPictureClose);
  document.addEventListener('keydown', onEscPictureClose);
};


export {
  getBigPhoto
};
