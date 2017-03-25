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

      for (let i = 0; i < resultsLength; i++) {
        films.push(results[i].title)
      }
      str = JSON.stringify(films);
      console.log('the films are: ', films);
    }
    else {
      console.log('the film titles are:', data.title)
    }
    document.getElementById('p-output-box').innerHTML = str;
  })
}
