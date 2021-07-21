let currentComments = [];

const setCurrentComments = (comment) => {
  currentComments.push(comment);
};

const getCurrentComments = () => currentComments;

const clearComments = () => {
  currentComments = [];
};

export {getCurrentComments, setCurrentComments, clearComments};
