module.exports = {
  initIndex: (search, lessons) => {
    lessons.forEach((lesson, i) => {
      // extract out only values important in searching for the clients
      let { title, description, category } = lesson;
      let lessonTxt = JSON.stringify(title + ' ' + description + ' ' + category);
      console.log(lessonTxt);
      search.index(lessonTxt, i);
    });
  }
};
