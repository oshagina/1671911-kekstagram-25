
const picturePreviewElement = document.querySelector('.img-upload__preview');

const scaleInputElement = document.querySelector('.scale__control--value');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');

let scaleValue = 100;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_START = 100;
const SCALE_STEP =25;
scaleInputElement.value = `${SCALE_START}%`;

scaleControlSmallerElement.addEventListener ('click', () => {
  if (scaleValue > SCALE_MIN){
    scaleValue -= SCALE_STEP;
    scaleInputElement.value = `${scaleValue}%`;
    picturePreviewElement.style.transform = `scale(${scaleValue/100})`;
  }
}
);
scaleControlBiggerElement.addEventListener ('click', () => {
  if (scaleValue < SCALE_MAX){
    scaleValue += SCALE_STEP;
    scaleInputElement.value = `${scaleValue}%`;
    picturePreviewElement.style.transform = `scale(${scaleValue/100})`;
  }
}
);

const setDefaultScale = ()  => {
  scaleInputElement.value = `scale(${SCALE_MAX})`;
  picturePreviewElement.style.transform = 'none';
  scaleValue =100;
};

export {
  setDefaultScale
};
