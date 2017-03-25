window.onload = function bondChar () {

  const theChar = 'characters/'
  const url = 'http://007api.co/api/' + theChar

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( theChar === 'characters/') {
      const results = data.results;
      const resultsLength = results.length;
      const characters = [];

      for (let i = 0; i < resultsLength; i++) {
        characters.push(results[i].name)
      }
      str = JSON.stringify(characters);
      console.log('the charcters are:', characters);
    }
    else {
      console.log('the name of the characters are:', data.name)
    }
    document.getElementById('p-output-box').innerHTML = str;
  })
}
