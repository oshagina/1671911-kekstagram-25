let scaleValue = 100;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_START = 100;
const SCALE_STEP =25;

const picturePreviewElement = document.querySelector('.img-upload__preview');

const scaleInputElement = document.querySelector('.scale__control--value');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');

scaleInputElement.value = `${SCALE_START}%`;

scaleControlSmallerElement.addEventListener ('click', () => {
  if (scaleValue > SCALE_MIN){
    scaleValue -= SCALE_STEP;
    scaleInputElement.value = `${scaleValue}%`;
    picturePreviewElement.style.transform = `scale(${scaleValue/SCALE_MAX})`;
  }
}
);
scaleControlBiggerElement.addEventListener ('click', () => {
  if (scaleValue < SCALE_MAX){
    scaleValue += SCALE_STEP;
    scaleInputElement.value = `${scaleValue}%`;
    picturePreviewElement.style.transform = `scale(${scaleValue/SCALE_MAX})`;
  }
}
);
