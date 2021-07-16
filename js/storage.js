import {createPhotoDescription} from './data.js';
const data = createPhotoDescription(25);
let currentComments = [];
let idActiveElement;

const getData = () => data;

const setActiveId = (id) => {
  idActiveElement = id;
};

const getActiveId = () => idActiveElement;

const setCurrentComments = (comment) => {
  currentComments.push(comment);
};

const getCurrentComments = () => currentComments;

const clearComments = () => {
  currentComments = [];
};

export {setActiveId, getData, getActiveId, getCurrentComments, setCurrentComments, clearComments};
