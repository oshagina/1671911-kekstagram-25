import { postData } from './backend.js';
import { compareMaxLengthText } from './utils.js';
import { hashTagRegExp, HASHTAGS_AMOUNT, COMMENT_SIZE } from './data.js';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textComments = document.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

let hashtags = [];

const duplicatHashtag = (value) => {
  const hashtagsLine = String(value.toLowerCase());
  hashtags = hashtagsLine.split(' ');
  return hashtags.length === new Set(hashtags).size;
};

pristine.addValidator(textHashtags, (value) => hashTagRegExp.test(value), 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина хэш-тега 20 символов', 2, false);

pristine.addValidator(textHashtags, duplicatHashtag, 'Один и тот же хэш-тег не может быть использован дважды');

pristine.addValidator(textHashtags, () => compareMaxLengthText(hashtags, HASHTAGS_AMOUNT), 'Допускается не более 5 хэш-тегов');

pristine.addValidator(textComments, (value) => compareMaxLengthText(value, COMMENT_SIZE), 'Комментарий не должен превышать 140 символов');

const submitButton = document.querySelector('#upload-submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};


const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    postData(formData);
    unblockSubmitButton();
  }
});
