window.onload = function starWarsFilms () {

  const whichFilm = 'films/'
  const url = 'http://swapi.co/api/' + whichFilm;

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( whichFilm === 'films/') {
      const results = data.results;
      console.log('new results objects from data.results: ', results);
      const resultsLength = results.length;
      const films = [];

      for (let i = 0; i < resultsLength; i++) {
        films.push(results[i].title)
      }
      // intro = films;

      // console.log('the films itterating in the for loop: ', films);
      // filmOrder = [ep4 , ep2, ep1, ep3, ep6, ep5, ep7]
      let ep1 = results[2].title;
      let ep2 = results[1].title;
      let ep3 = results[3].title;
      let ep4 = results[0].title;
      let ep5 = results[5].title;
      let ep6 = results[4].title;
      let ep7 = results[6].title;
      // let episodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7]
      // let episodesFormat = ep1 + ep2 + ep3 + ep4 + ep5 + ep6 + ep7;
      // document.getElementById('p-output-box-zero').innerHTML = episodes;
      document.getElementById('p-output-box-zero-ep1').innerHTML = "EPISODE I: " + ep1.toUpperCase();
      document.getElementById('p-output-box-zero-ep2').innerHTML = "EPISODE II: " + ep2.toUpperCase();
      document.getElementById('p-output-box-zero-ep3').innerHTML = "EPISODE III: " + ep3.toUpperCase();
      document.getElementById('p-output-box-zero-ep4').innerHTML = "EPISODE IV: " + ep4.toUpperCase();
      document.getElementById('p-output-box-zero-ep5').innerHTML = "EPISODE V: " + ep5.toUpperCase();
      document.getElementById('p-output-box-zero-ep6').innerHTML = "EPISODE VI: " + ep6.toUpperCase();
      document.getElementById('p-output-box-zero-ep7').innerHTML = "EPISODE VII: " + ep7.toUpperCase();

      //episodes

      episode1 = results[0].opening_crawl;
      document.getElementById('p-output-box-one').innerHTML = episode1;

      episode2 = results[1].opening_crawl;
      document.getElementById('p-output-box-two').innerHTML = episode2;

      episode3 = results[2].opening_crawl;
      document.getElementById('p-output-box-three').innerHTML = episode3;

      episode4 = results[3].opening_crawl;
      document.getElementById('p-output-box-four').innerHTML = episode4;

      episode5 = results[4].opening_crawl;
      document.getElementById('p-output-box-five').innerHTML = episode5;

      episode6 = results[5].opening_crawl;
      document.getElementById('p-output-box-six').innerHTML = episode6;

      episode7 = results[6].opening_crawl;
      document.getElementById('p-output-box-seven').innerHTML = episode7;


      //jumbled up text below

      // str1 = JSON.stringify(results[0].opening_crawl);
      // console.log('results[0].opening_crawl) ', results[0].opening_crawl)
      // document.getElementById('p-output-box-one').innerHTML = str1;
      // console.log('string 1', str1)

    }
    else {
      console.log('no data was returned')
    }
    document.getElementById('p-output-box-zero').innerHTML = str;


  })
}
