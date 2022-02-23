function showWelcome() {
  alert('Bem vindo ao jokenpo CTD!');
}

function askUserChoice() {
  return parseInt(prompt('Escolha a opção para jogar \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura'));
}

function getChoiceBot() {
  return parseInt(Math.random() * 3 + 1);
}

function numberOfRounds() {
  const rounds = parseInt(prompt('Digite uma opção para escolher um modo de jogo? \n\n 1 - Jogo Rápido (02 Rounds) \n 2 - Melhor de 03 (03 Rounds) \n 3 - Melhor de 05 (05 Rounds)'));
  const notValidOption = rounds < 1 || rounds > 3;
  const isString = !rounds;
  
  console.log(rounds, isString)

  if(notValidOption || isString) {
    alert('Opção INVÁLIDA clique em ok e digite uma das opções do menu.');
    numberOfRounds();
  }
  return rounds;
}

function showResults(score) {
  if(score.user > score.bot) {
    alert(`Parabéns você venceu, o score final é: \n você: ${score.user} \n bot: ${score.bot}`);
  }
  else if(score.user < score.bot) {
    alert(`Ops você perdeu, o score final é: \n você: ${score.user} \n bot: ${score.bot}`);
  }
  else {
    alert(`Ahhh aconteceu um empate, o score final é: \n você: ${score.user} \n bot: ${score.bot}`);
  }
}
//1 -pedra 2- papel 3-tesoura
function checkChoices(userChoice, botChoice, changeScore) {
  switch (userChoice, botChoice) {
    case (1 && 2):
    case (3 && 1):
    case (2 && 3):
      console.info('bot ganhou')
      changeScore('bot');
      alert(`O bot ganhou está rodada, ele jogou ${choicesDTO(botChoice)} e você jogou ${choicesDTO(userChoice)}`);
      break;
    case (2 && 1):
    case (1 && 3):
    case (3 && 2):
      console.info('usuario ganhou')
      changeScore('user');
      alert(`Você ganhou está rodada, você jogou ${choicesDTO(userChoice)} e o BOT jogou ${choicesDTO(botChoice)}`);
      break;
    default:
      console.info('empate')
      alert(`Ops agora deu empate, você jogou ${choicesDTO(userChoice)} e o BOT jogou ${choicesDTO(botChoice)}`);
  }
}

function choicesDTO(choice) {
  const choices = {
    1: 'PEDRA',
    2: 'PAPEL',
    3: 'TESOURA' 
  }
  return choices[choice]
}

function playGame() {
  showWelcome();

  let score = {user: 0, bot: 0};
  let rounds = numberOfRounds();
  let roudCounter = 0;

  while (roudCounter <= rounds) {
    let userChoice = askUserChoice();
    let botChoice = getChoiceBot();

    checkChoices(userChoice, botChoice, changeScore);
    console.log(score)

    roudCounter++;
  }
  showResults(score);

  function changeScore(player) {
    player === 'user' ? score.user++ : score.bot++
  }
}

playGame();
