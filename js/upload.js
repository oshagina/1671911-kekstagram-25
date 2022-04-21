import {createSlider} from './effects.js';
import './scale.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  createSlider(1,3,3, 0.1);
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
}
);


