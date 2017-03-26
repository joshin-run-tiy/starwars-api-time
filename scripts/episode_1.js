window.onload = function starWarsFilms () {

  const whichFilm = 'films/'
  const url = 'http://swapi.co/api/' + whichFilm;

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( whichFilm === 'films/') {
      const results = data.results;
      const resultsLength = results.length;
      const films = [];

      // for (let i = 0; i < resultsLength; i++) {
      //   characters.push(results[0].characters)
      // }
      str = JSON.stringify(results[0].opening_crawl);
      // console.log('the films are: ', characters);
    // }
    // else {
      console.log(results[0].opening_crawl)
    // }
      document.getElementById('p-output-box-one').innerHTML = str;
  }
}
