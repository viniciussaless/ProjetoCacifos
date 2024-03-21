// Incluir o Chart.js
const script = document.createElement('script');
script.src = 'node_modules/chart.js/dist/chart.umd.js';
script.async = false; // Garante que o script seja carregado de forma síncrona
document.head.appendChild(script);

// Primeiro grafico
window.addEventListener('load', () => {
  const grafico_energia = document.getElementById('grafico_energia');
  const data = [];
  const data2 = [];
  let prev = 100;
  let prev2 = 80;
  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
    prev2 += 5 - Math.random() * 10;
    data2.push({ x: i, y: prev2 });
  }

  const totalDuration = 10000;
  const delayBetweenPoints = totalDuration / data.length;
  const previousY = (grafico_energia) => grafico_energia.index === 0 ? grafico_energia.chart.scales.y.getPixelForValue(100) : grafico_energia.chart.getDatasetMeta(grafico_energia.datasetIndex).data[grafico_energia.index - 1].getProps(['y'], true).y;
  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(grafico_energia) {
        if (grafico_energia.type !== 'data' || grafico_energia .xStarted) {
          return 0;
        }
        grafico_energia.xStarted = true;
        return grafico_energia.index * delayBetweenPoints;
      }
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(grafico_energia) {
        if (grafico_energia.type !== 'data' || grafico_energia.yStarted) {
          return 0;
        }
        grafico_energia.yStarted = true;
        return grafico_energia.index * delayBetweenPoints;
      }
    }
  };

  new Chart(grafico_energia, {
    type: 'line',
    data: {
      datasets: [{
        borderColor: 'red',
        borderWidth: 1,
        radius: 0,
        data: data,
      },
      {
        borderColor: 'blue',
        borderWidth: 1,
        radius: 0,
        data: data2,
      }]
    },
    options: {
      animation,
      interaction: {
        intersect: false
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          type: 'linear'
        }
      }
    }
  });


  //Segundo grafico
  const grafico_alterado = document.getElementById('grafico_alterado'); // Mudamos o ID do elemento de 'grafico_energia' para 'grafico_alterado'
  const dados1 = []; // Renomeamos 'data' para 'dados1'
  const dados2 = []; // Renomeamos 'data2' para 'dados2'
  let anterior1 = 100; // Renomeamos 'prev' para 'anterior1'
  let anterior2 = 80; // Renomeamos 'prev2' para 'anterior2'
  for (let i = 0; i < 1000; i++) {
    anterior1 += 5 - Math.random() * 10;
    dados1.push({ x: i, y: anterior1 });
    anterior2 += 5 - Math.random() * 10;
    dados2.push({ x: i, y: anterior2 });
  }

  const duracaoTotal = 10000; // Renomeamos 'totalDuration' para 'duracaoTotal'
  const atrasoEntrePontos = duracaoTotal / dados1.length; // Renomeamos 'delayBetweenPoints' para 'atrasoEntrePontos'
  const yAnterior = (grafico_alterado) => grafico_alterado.index === 0 ? grafico_alterado.chart.scales.y.getPixelForValue(100) : grafico_alterado.chart.getDatasetMeta(grafico_alterado.datasetIndex).data[grafico_alterado.index - 1].getProps(['y'], true).y; // Renomeamos 'previousY' para 'yAnterior'
  const animacao = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: atrasoEntrePontos,
      from: NaN, // o ponto é inicialmente ignorado
      delay(grafico_alterado) {
        if (grafico_alterado.type !== 'data' || grafico_alterado.xIniciado) {
          return 0;
        }
        grafico_alterado.xIniciado = true;
        return grafico_alterado.index * atrasoEntrePontos;
      }
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: atrasoEntrePontos,
      from: yAnterior,
      delay(grafico_alterado) {
        if (grafico_alterado.type !== 'data' || grafico_alterado.yIniciado) {
          return 0;
        }
        grafico_alterado.yIniciado = true;
        return grafico_alterado.index * atrasoEntrePontos;
      }
    }
  };

  new Chart(grafico_alterado, {
    type: 'line',
    data: {
      datasets: [{
        borderColor: 'red',
        borderWidth: 1,
        radius: 0,
        data: dados1, // Usamos 'dados1' em vez de 'data'
      },
      {
        borderColor: 'blue',
        borderWidth: 1,
        radius: 0,
        data: dados2, // Usamos 'dados2' em vez de 'data2'
      }]
    },
    options: {
      animation: animacao, // Usamos 'animacao' em vez de 'animation'
      interaction: {
        intersect: false
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          type: 'linear'
        }
      }
    }
  });

});