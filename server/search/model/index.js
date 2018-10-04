module.exports = {
  initIndex: (search, lessons) => {
    lessons.forEach((lesson, i) => search.index(lesson, i));
  }
};
