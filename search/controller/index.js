module.exports = {
  searchWithQuery: (index, search, query, res) => {
    search
      .query(query) // /search?q=[search query]
      .end(function(err, ids) {
        if (err) throw err;
        res.json(
          ids.map(function(id) {
            console.log(id);
            return index[id].id;
          })
        );
        // res.json(ids);
      });
  }
};
