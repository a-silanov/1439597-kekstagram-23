const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');
const SCALE_VALUE_STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;

const increasesScale = () => {
  let value = parseInt(scaleValue.value, 10);
  if (value < MAX_VALUE) {
    scaleValue.value = `${value += SCALE_VALUE_STEP}%`;
    imgPreview.style.transform = `scale(${value/100})`;
  } scaleValue.value = `${value}%`;
};

const decreasesScale = () => {
  let value = parseInt(scaleValue.value, 10);
  if (value > MIN_VALUE) {
    scaleValue.value = `${value -= SCALE_VALUE_STEP}%`;
    imgPreview.style.transform = `scale(${value/100})`;
  } scaleValue.value = `${value}%`;
};

const activateScaleEditor = () => {
  btnBigger.addEventListener('click', increasesScale);
  btnSmaller.addEventListener('click', decreasesScale);
};

const deactivateScaleEditor = () => {
  btnBigger.removeEventListener('click', increasesScale);
  btnSmaller.removeEventListener('click', decreasesScale);
};

export {activateScaleEditor, deactivateScaleEditor};
