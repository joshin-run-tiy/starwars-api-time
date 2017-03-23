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
    alert(str);
  })
}

// document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");


// 
// var output = '';
// for (var property in object) {
//   output += property + ': ' + object[property]+'; ';
// }
// alert(output);



//
// Use native JSON.stringify method. Works with nested objects and all major browsers support this method.
//
// str = JSON.stringify(obj);
// str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
// console.log(str); // Logs output to dev tools console.
// alert(str); // Displays output using window.alert()
