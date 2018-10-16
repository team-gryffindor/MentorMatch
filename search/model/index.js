module.exports = {
  initIndex: (search, lessons) => {
    lessons.forEach((lesson, i) => {
      // extract out only values important in searching for the clients
      let { title, description, category, locationOfService } = lesson;
      let lessonTxt = JSON.stringify(
        title + ' ' + description + ' ' + category + ' ' + locationOfService
      );
      console.log('LESSONID', lesson.id);
      console.log('LESSON', lessonTxt, '\n');
      // search.index(lessonTxt, lesson.id);
      search.index(lessonTxt, i);
    });
  }
};
