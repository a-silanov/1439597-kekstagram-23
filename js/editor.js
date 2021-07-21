/*Функционал по редактированию фотографий*/
const effectLevelField = document.querySelector('.effect-level');
const slider = effectLevelField.querySelector('.effect-level__slider');
const effectLevel = effectLevelField.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview img');
const STEP = 0.1;
const MIN = 0;
const MAX = 1;
const HUNDRED = 100;
const THREE = 3;

const resetEffect = () => {
  imgPreview.removeAttribute('class');
};

const createSlider = () => {
  resetEffect();
  effectLevelField.classList.add('hidden');
  noUiSlider.create(slider, {
    range: {
      min: MIN,
      max: MAX,
    },
    start: MAX,
    step: STEP,
    connect: 'lower',
  });

  const applyEffect = (evt) => {
    resetEffect();
    imgPreview.classList.add(`effects__preview--${evt.target.value}`);
    effectLevelField.classList.remove('hidden');
    if (evt.target.value === 'none') {
      effectLevelField.classList.add('hidden');
    }

    switch (evt.target.value) {
      case 'none':
        imgPreview.style.filter = '';
        break;

      case 'chrome':
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: MIN,
            max: MAX,
          },
          start: MAX,
          step: STEP,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `grayscale(${effectLevel.value})`;
        });
        break;

      case 'sepia':
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: MIN,
            max: MAX,
          },
          start: MAX,
          step: STEP,
        });
        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `sepia(${effectLevel.value})`;
        });
        break;

      case 'marvin':
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: MIN,
            max: HUNDRED,
          },
          start: HUNDRED,
          step: STEP,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `invert(${effectLevel.value}%)`;
        });
        break;

      case 'phobos':
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: MIN,
            max: THREE,
          },
          start: THREE,
          step: STEP,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `blur(${effectLevel.value}px)`;
        });
        break;

      case 'heat':
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: MAX,
            max: THREE,
          },
          start: THREE,
          step: STEP,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `brightness(${effectLevel.value})`;
        });
        break;
    }
  };

  effectsList.addEventListener('click', applyEffect);
};

const removeSlider = () => {
  slider.noUiSlider.destroy();
  imgPreview.removeAttribute('style');
};

export {createSlider, removeSlider};
