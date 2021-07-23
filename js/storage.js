
let currentComments = [];
let postsList;

const setCurrentComments = (comment) => {
  currentComments.push(comment);
};

const setPosts = (posts) => {
  postsList = posts.slice();
};

const getPosts = () => postsList;

const getCurrentComments = () => currentComments;

const clearComments = () => {
  currentComments = [];
};

export {getCurrentComments, setCurrentComments, clearComments, setPosts, getPosts};
