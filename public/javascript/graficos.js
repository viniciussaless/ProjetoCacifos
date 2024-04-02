const ctx = document.getElementById('grafico_energia');
let dados;

let valoresArmazenados; // Variável para armazenar os valores obtidos da base de dados

function obterValoresDaBaseDeDados() {
return new Promise((resolve, reject) => {
 fetch('/index', {
   method: 'POST', // Definindo o método como POST
   headers: {
     'Content-Type': 'application/json' // Especificando o tipo de conteúdo como JSON
   },
   body: JSON.stringify({}) // Se necessário, adicione os dados que deseja enviar no corpo da requisição
 })
   .then(res => res.json())
   .then(data => {
     // Armazena os valores obtidos na variável valoresArmazenados
     valoresArmazenados = data.valores;
     console.log(data);
     dados = data;
     resolve(valoresArmazenados); // Resolvendo a promise com os valores obtidos
   })
   .catch(error => {
     console.error('Erro ao obter valores da base de dados:', error);
     reject(error); // Rejeitando a promise em caso de erro
   });
});
}

// Quando os valores da base de dados são obtidos, cria o gráfico
obterValoresDaBaseDeDados()
.then(valores => {
 let labelsX = ["Cacifo1", "Cacifo2", "Cacifo3"];

 new Chart(ctx, {
   type: 'bar',
   data: {
     labels: labelsX,
     datasets: [{
       label: 'Energia(W)',
       data: dados,
       borderWidth: 1
     }]
   },
   options: {
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
 });
})
.catch(error => {
 console.error('Erro ao criar o gráfico:', error);
});

//segundo grafico
const grafico_lucro = document.getElementById('grafico_lucro');
const DATA_COUNT = 3;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

// Função para gerar meses (apenas para exemplo)
function generateMonths(count) {
  const months = ['Janeiro', 'Fevereiro', 'Março'];
  return months.slice(0, count);
}

// Função para gerar números aleatórios
function generateRandomNumbers(cfg) {
  const { count, min, max } = cfg;
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return numbers;
}

// Cores para os datasets
const CHART_COLORS = {
  red: 'rgba(255, 99, 132, 1)',
  blue: 'rgba(54, 162, 235, 1)',
};

// Função para tornar a cor transparente
function transparentize(color, opacity) {
  const [r, g, b] = color.match(/\d+/g);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const labels = generateMonths(DATA_COUNT);
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Déficit',
      data: generateRandomNumbers(NUMBER_CFG),
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
    },
    {
      label: 'Superávit',
      data: generateRandomNumbers(NUMBER_CFG),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  },
};

var grafico = new Chart(grafico_lucro, config);