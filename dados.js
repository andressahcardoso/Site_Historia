google.charts.load('current', {
    'packages':['geochart'],
});
  
google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Porcentagem'],
      ['Germany', 5],
      ['United States', 32],
      ['Brazil', 10],
      ['France', 8],
      ['Italy', 4],
      ['Scotland', 3],
      ['Portugal', 1],
      ['Poland', 2],
      ['France', 8],
      ['England', 9],
      ['Netherlands', 3],
      ['Turkey', 2]
    ]);

    var options = {
        colorAxis: {colors: ['#9B8989']},
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  }
  

function pais() {

  const myInput = document.querySelector("#iniciar")
  var paises = myInput.value
  console.log(paises)

  if (paises == "País de Formação"){
    console.log('formação')

    var data = google.visualization.arrayToDataTable([
      ['Country', 'Porcentagem'],
      ['Germany', 5],
      ['United States', 32],
      ['Brazil', 10],
      ['France', 8],
      ['Italy', 4],
      ['Scotland', 3],
      ['Portugal', 1],
      ['Poland', 2],
      ['France', 8],
      ['England', 9],
      ['Netherlands', 3],
      ['Turkey', 2]
    ]);
  
    var options = {
      colorAxis: {colors: ['#9B8989']},
    };
  
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div')); 
    chart.draw(data, options);

    myInput.value = "País de Nascimento"
  }   

  if (paises == "País de Nascimento") {
    console.log('nascimento')

    var data = google.visualization.arrayToDataTable([
      ['Country', 'Porcentagem'],
      ['Germany', 5], 
      ['United States', 28],
      ['Brazil', 16],
      ['France', 8],
      ['Italy', 4],
      ['RU', 1],
      ['Scotland', 2],
      ['Switzerland', 1],
      ['Canada', 1],
      ['Angola', 1],
      ['Mexico', 1],
      ['Poland', 4],
      ['Nigeria', 1],
      ['Sweden', 1],
      ['China', 1],
      ['France', 8],
      ['England', 11],
      ['Netherlands', 4],
      ['Czech republic', 2],
      ['Greece', 3],
      ['Ukraine', 1],
      ['Turkey', 2], 
      ['Austria', 1],
      ['Australia', 1]
    ]);

    var options = {
      colorAxis: {colors: ['#9B8989']},
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);    
    
    myInput.value = "País de Formação"
  }
}
