/*
  Visualição dos dados relativos os preço, abertura, fechamento, máxima e mínima de um par de criptomoedas
  em um intervalo de tempo específico. Criar elementos no DOM para exibir esses dados.

  Sempre que o estado do preço mudar, atualize os valores no DOM. Renderizar novamente.

*/

let pares = [ 
  'BTCUSDT',
  'ETHUSDT',
  'BNBUSDT',
  'ADAUSDT',
  'XRPUSDT',
  'DOGEUSDT',
  'DOTUSDT',
  'UNIUSDT',
  'LINKUSDT',
  'LTCUSDT',
  'BCHUSDT',
  'XLMUSDT',
  'SOLUSDT',
  'ETCUSDT',
  'MATICUSDT'
]

const intervalos = [
  '1m',
  '3m',
  '5m',
  '15m',
  '30m',
  '1h',
  '2h',
  '4h',
  '6h',
  '8h',
  '12h',
  '1d'
]

let par = pares[0]
let intervalo = intervalos[intervalos.length - 1]

let selectIntervalo = document.querySelector('#intervalo');
selectIntervalo.innerHTML = intervalos.map(intervalo => `<option value="${intervalo}">${intervalo}</option>`).join('');

let select = document.querySelector('select');
select. innerHTML = pares.map(par => `<option value="${par}">${par}</option>`).join('');

select.addEventListener('change', function(e) {
    //par = this.value;
    par = e.target.value;
    buscar(par,intervalo);


});

selectIntervalo.addEventListener('change', function(e) {
    intervalo = e.target.value;
    console.log(intervalo)
});
async function buscar(par, intervalo) {
      
    let urlBase = 'https://api.binance.com';
    let endpoint = '/api/v3/klines'
    let url = urlBase + endpoint + `?symbol=${par}&interval=${intervalo}` 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let [ tempo, abertura, maxima, minima, fechamento ] = data[data.length - 1];
    
    console.log(new Date(tempo).toLocaleString());
    console.log(`Abertura: ${abertura}`);
    console.log(`Fechamento: ${fechamento}`);
    console.log(`Máxima: ${maxima}`);
    console.log(`Mínima: ${minima}`);

} 

buscar(par,intervalo);






