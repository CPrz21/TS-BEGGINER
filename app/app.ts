const defaultName: string = "MultiMath Player";
function startGame() {
  // starting a new game
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);
  postScore(-5, playerName);
}

function logPlayer(name: string= defaultName): void{
  console.log(`New game starting for player: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
  // const inputElement: HTMLInputElement = document.getElementById(elementId) as HTMLInputElement;
  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string= defaultName): void {

  let logger: (value: string) => void;

  if(score < 0) {
    logger = logError;
  }else{
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string): void =>console.log(message);

function logError (err: string): void {
  console.error(err);
}