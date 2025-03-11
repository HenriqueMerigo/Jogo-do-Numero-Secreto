let numeroSecreto = 8;
alert('Bem vindo ao jogo do número secreto!')
let chute = prompt('Escolha um número entre 1 e 30');
console.log('O número secreto é:', numeroSecreto);

if (chute == numeroSecreto){
    alert(`Isso aí. Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
} 