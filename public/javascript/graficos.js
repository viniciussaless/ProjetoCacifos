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