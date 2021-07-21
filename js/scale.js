const SCALE_VALUE_STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
const PERCENT = 100;
const TEN = 10;
const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const increasesScale = () => {
  let value = parseInt(scaleValue.value, TEN);
  if (value < MAX_VALUE) {
    scaleValue.value = `${value += SCALE_VALUE_STEP}%`;
    imgPreview.style.transform = `scale(${value/PERCENT})`;
  } scaleValue.value = `${value}%`;
};

const decreasesScale = () => {
  let value = parseInt(scaleValue.value, TEN);
  if (value > MIN_VALUE) {
    scaleValue.value = `${value -= SCALE_VALUE_STEP}%`;
    imgPreview.style.transform = `scale(${value/PERCENT})`;
  } scaleValue.value = `${value}%`;
};

const activateScaleEditor = () => {
  btnBigger.addEventListener('click', increasesScale);
  btnSmaller.addEventListener('click', decreasesScale);
};

const deactivateScaleEditor = () => {
  btnBigger.removeEventListener('click', increasesScale);
  btnSmaller.removeEventListener('click', decreasesScale);
  scaleValue.value = `${MAX_VALUE}%`;
};

export {activateScaleEditor, deactivateScaleEditor};
