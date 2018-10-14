module.exports = {
  initIndex: (search, lessons) => {
    lessons.forEach((lesson, i) => {
      // extract out only values important in searching for the clients
      let { title, description, category, cityOfService } = lesson;
      let lessonTxt = JSON.stringify(
        title + ' ' + description + ' ' + category + ' ' + cityOfService
      );
      console.log('LESSONID', lesson.id);
      console.log('LESSON', lessonTxt, '\n');
      search.index(lessonTxt, lesson.id);
    });
  }
};
