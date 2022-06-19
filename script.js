class Player {
  jogou;
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}

const CriarPlayers = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");

  player1 = new Player(input1.value);
  player2 = new Player(input2.value);

  console.log("Players Criados");
  AbrirJogo();
};

const ChecarVencedor = (player1, player2) => {
  if (!player1 || !player2 || checandoVencedor) return;

  checandoVencedor == true;
  if (player1.jogou === player2.jogou) MostrarVencedor("Ambos");
  else if (player1.jogou === "Papel" && player2.jogou === "Pedra")
    MostrarVencedor(player1.nome);
  else if (player1.jogou === "Papel" && player2.jogou === "Tesoura")
    MostrarVencedor(player2.nome);
  else if (player1.jogou === "Tesoura" && player2.jogou === "Pedra")
    MostrarVencedor(player2.nome);
  else if (player2.jogou === "Papel" && player1.jogou === "Pedra")
    MostrarVencedor(player2.nome);
  else if (player2.jogou === "Papel" && player1.jogou === "Tesoura")
    MostrarVencedor(player1.nome);
  else if (player2.jogou === "Tesoura" && player1.jogou === "Pedra")
    MostrarVencedor(player1.nome);

  checandoVencedor = false;
};

const MostrarVencedor = (texto) => {
  let boxVencedor = document.getElementById("mostrar-vencedor");
  document.getElementById("vencedor").innerHTML = QuemVenceu(texto);
  boxVencedor.classList.toggle("mostrar-vencedor");
  boxVencedor.classList.toggle("none");
};

const QuemVenceu = (texto) => {
  if (texto === "Ambos") return "Ambos Venceram.";
  else return `${texto} Venceu.`;
};

const EscolherMao = (player, mao) => {
  if (player === 1) {
    player1.jogou = mao;
  } else if (player === 2) {
    player2.jogou = mao;
  }

  DesativarAtivarBotoesDoPlayer(player);

  if (player1.jogou && player2.jogou) IniciarJogo();
};

const DesativarAtivarBotoesDoPlayer = (player) => {
  let box = document.getElementById(`l${player}`);
  for (let i = 0; i < box.childNodes.length; i++) {
    let child = box.childNodes.item(i);
    child.disabled = !child.disabled;
  }
};

const AbrirJogo = () => {
  if (!player1 && !player2) return;

  document.getElementById("escolher-nome").classList.toggle("none");
  document.getElementById("jogo").classList.toggle("none");

  let nomeDosPlayers = document.getElementById("jogadores");
  console.log(nomeDosPlayers.innerHTML);
  nomeDosPlayers.innerHTML = jogadores();
  nomeDosPlayers.classList.toggle("none");
};

const IniciarJogo = () => {
  let mao1 = document.getElementById("mao1");
  let mao2 = document.getElementById("mao2");

  mao1.classList.toggle("mao1");
  mao2.classList.toggle("mao2");

  setTimeout(() => {
    mao1.classList.replace("pedra", player1.jogou.toLowerCase());
    mao2.classList.replace("pedra", player2.jogou.toLowerCase());
  }, 4500);

  setTimeout(() => {
    ChecarVencedor(player1, player2);
  }, 5000);
};

const JogarNovamente = () => {
  Reset();
};

const Reset = () => {
  MostrarVencedor("");
  DesativarAtivarBotoesDoPlayer(1);
  DesativarAtivarBotoesDoPlayer(2);
  player1.jogou = undefined;
  player2.jogou = undefined;

  let mao1 = document.getElementById("mao1");
  let mao2 = document.getElementById("mao2");
  mao1.removeAttribute("class");
  mao2.removeAttribute("class");
  mao1.classList.add("pedra");
  mao1.classList.add("invert");
  mao2.classList.add("pedra");
};

const jogadores = () => {
  return `${player1.nome} &#127386 ${player2.nome}`;
};

let checandoVencedor = false;
