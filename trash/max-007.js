window.onload = function bondDriven () {

  const heDrove = 'vehicles/?page=3'
  const url = 'http://007api.co/api/' + heDrove

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( heDrove === 'vehicles/?page=3') {
      const results = data.results;
      const resultsLength = results.length;
      const vehicles = [];

      for (let i = 0; i < resultsLength; i++) {
        vehicles.push(results[i].make)
      }

      console.log('the vehicles are:', vehicles);
    }
    else {
      console.log('the make of the vehicle is:', data.make)
    }
  })
}
