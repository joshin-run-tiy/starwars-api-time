window.onload = function starWarsFilms () {

  const whichFilm = 'films/'
  const url = 'https://swapi.co/api/' + whichFilm;

  $.ajax({
    url: url
  }).done(function(data) {
    // console.log('The returned object is:', data)

    if ( whichFilm === 'films/') {
      const results = data.results;
      console.log('new results objects from data.results: ', results);
      const resultsLength = results.length;
      const films = [];

      for (let i = 0; i < resultsLength; i++) {
        films.push(results[i].title)
      }

      let ep1 = results[2].title;
      let ep2 = results[1].title;
      let ep3 = results[3].title;
      let ep4 = results[0].title;
      let ep5 = results[5].title;
      let ep6 = results[4].title;
      let ep7 = results[6].title;
      console.log(ep1, ep2, ep3, ep4, ep5, ep6, ep7);

      //episodes

      let episode1 = results[2].opening_crawl;
      let episode2 = results[1].opening_crawl;
      let episode3 = results[3].opening_crawl;
      let episode4 = results[0].opening_crawl;
      let episode5 = results[5].opening_crawl;
      let episode6 = results[4].opening_crawl;
      let episode7 = results[6].opening_crawl;
      console.log(episode1, episode2, episode3, episode4, episode5, episode6, episode7);

      //release date

      let ep1Date = results[2].release_date;
      let ep2Date = results[1].release_date;
      let ep3Date = results[3].release_date;
      let ep4Date = results[0].release_date;
      let ep5Date = results[5].release_date;
      let ep6Date = results[4].release_date;
      let ep7Date = results[6].release_date;
      console.log(ep1Date, ep2Date, ep3Date, ep4Date, ep5Date, ep6Date, ep7Date);

  } else {
    console.log('no data was returned')
  }
  })
}
