import '../nouislider/nouislider.js';

import {setDefaultScale} from './/scale.js';

const picturePreviewElement = document.querySelector('.img-upload__preview');
const imgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadEffectsLevel = document.querySelector('.img-upload__effect-level');

const sliderElement = document.querySelector('.effect-level__slider');

const imgUploadOverlay = document.querySelector('.img-upload__overlay');

//const effectContainerElement = document.querySelector('.effect-level');
//const effectLevelValueElement = document.querySelector('.effect-level__value');

const cancelButtonElement = document.querySelector('.img-upload__cancel');

const filterEffects = {
  none: '',
  chrome: 'grayscale',
  sepia:  'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};

const effectOptions = {

  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return `${value}%`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        return `${value.toFixed(1)}px`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  heat: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
};

const createSlider = (min, max, start, step) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

imgUploadEffects.addEventListener('click', (evt) => {

  if(evt.target.closest('li').querySelector('input').value !== 'none' ){
    imgUploadEffectsLevel.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions(
      effectOptions[evt.target.closest('li').querySelector('input').value]
    );
    sliderElement.noUiSlider.on('update', () => {
      picturePreviewElement.style.filter = `${filterEffects[evt.target.value]}(${sliderElement.noUiSlider.get()})`;
    });
  } else {
    picturePreviewElement.style.filter = 'none';
    picturePreviewElement.classList.add('effects__preview--none');
    imgUploadEffectsLevel.classList.add('hidden');
  }
  setDefaultScale();
});


cancelButtonElement.addEventListener('click', () =>{
  imgUploadOverlay.classList.add('hidden');
} );

export{
  createSlider
};

