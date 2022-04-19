import {createSlider} from './effects.js';
import './scale.js';
import {postData} from './backend.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadFormElement = document.querySelector('.img-upload__form');

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  createSlider(1,3,3, 0.1);
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
}
);

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  postData(formData);
}
);

