let a = 'samsug desktop';

console.log(a[2]);
console.log(a.charAt(2));
console.log(a.charCodeAt(2));
console.log(a.codePointAt(2));
console.log(a.indexOf('o',3)); /* indexOf(letra,posição de partida);*/
console.log(a.search(/s/)); /*pesquisa a posição da letra */
console.log(a.replace('sam', 'sung'));/*substitui uma plavra pela outra*/
console.log(a.slice(2,5));/*slice(incio, fim) essa função captura o inicio ate o fim que voce add do indice*/
console.log(a.toUpperCase());/*case da string caixa alta*/
console.log(a.toLowerCase());/*case da string caixa baixa*/


