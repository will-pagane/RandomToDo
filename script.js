document.addEventListener('DOMContentLoaded', () => {
  const opcoesDeEstudoBase = [
    "Inteligência Artificial Aplicada",
    "Programação Rocketseat",
    "Programação Low Code",
    "Finclass",
    "Ler um livro",
    "Projeto HighStakes",
    "Projeto Spotify Downloader"
  ];

  const coresDoBotao = [
    "#A6E22E", // Verde Esmeralda
    "#972fff", // Roxo Ametista
    "#FF7F50", // Laranja Coral
    "#FF69B4", // Rosa Choque
    "#FFFF33", // Amarelo Vibrante
  ];

  const marioKartSwitch = document.getElementById('marioKartSwitch');
  const botao = document.querySelector('.button a');
  let foiClicado = false;
  let ultimaOpcao = "";
  let ultimaCor = "";

  botao.addEventListener('click', (event) => {
    event.preventDefault();

    if (!foiClicado) {
      document.documentElement.style.setProperty('--text-color', '#050f1a');
      document.documentElement.style.setProperty('--delay', '0ms');
      botao.classList.add('button-hover-final');
      foiClicado = true;
    }

    let opcoesDeEstudo = marioKartSwitch.checked ? [...opcoesDeEstudoBase, "Mario Kart", "Mario Kart", "Mario Kart"] : [...opcoesDeEstudoBase];

    let novasOpcoes = ultimaOpcao ? opcoesDeEstudo.filter(opcao => opcao !== ultimaOpcao) : opcoesDeEstudo;
    let novasCores = ultimaCor ? coresDoBotao.filter(cor => cor !== ultimaCor) : coresDoBotao;

    const novoTexto = novasOpcoes[Math.floor(Math.random() * novasOpcoes.length)];
    const novaCor = novasCores[Math.floor(Math.random() * novasCores.length)];

    ultimaOpcao = novoTexto;
    ultimaCor = novaCor;

    const botao2 = document.querySelector('.button2');
    if (novoTexto == "Ler um livro") {
      botao2.classList.remove("hidden");
    } else {
      botao2.classList.add("hidden");
    }

    requestAnimationFrame(() => {
      setTimeout(() => {
        botao.textContent = novoTexto;
        document.documentElement.style.setProperty('--button-color', novaCor);
      }, 300);
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const opcoesDeLivros = [
    "21 Lições para o Século 21",
    "Sapiens: Uma Breve História da Humanidade",
    "Terra dos Homens",
    "Quem Pensa Henriquece: O Legado",
    "O Poder da Ação",
    "Antifrágil: Coisas que se Beneficiam com o Caos",
    "Escolha o seu Difícil",
    "A Favela Venceu"
  ];

  const coresDoBotao = [
    "#A6E22E", // Verde Esmeralda
    "#972fff", // Roxo Ametista
    "#FF7F50", // Laranja Coral
    "#FF69B4", // Rosa Choque
    "#FFFF33", // Amarelo Vibrante
  ];

  const botao2 = document.querySelector('.button2 a');
  let foiClicado = false;
  let ultimaOpcao = "";
  let ultimaCor = "";

  botao2.addEventListener('mouseover', () => {
    botao2.style.color = '#050f1a';
  });

  botao2.addEventListener('mouseleave', () => {
    if (!foiClicado) {
      botao2.style.color = ''; // Volta para a cor padrão se não foi clicado
    }
  });

  botao2.addEventListener('click', (event) => {
    event.preventDefault();

    if (!foiClicado) {
      document.documentElement.style.setProperty('--delay', '0ms');
      botao2.classList.add('button-hover-final');
      foiClicado = true;
    }

    let novasOpcoes = ultimaOpcao ? opcoesDeLivros.filter(opcao => opcao !== ultimaOpcao) : opcoesDeLivros;
    let novasCores = ultimaCor ? coresDoBotao.filter(cor => cor !== ultimaCor) : coresDoBotao;

    const novoTexto = novasOpcoes[Math.floor(Math.random() * novasOpcoes.length)];
    const novaCor = novasCores[Math.floor(Math.random() * novasCores.length)];

    ultimaOpcao = novoTexto;
    ultimaCor = novaCor;

    requestAnimationFrame(() => {
      setTimeout(() => {
        botao2.textContent = novoTexto;
        document.documentElement.style.setProperty('--button-color', novaCor);
        botao2.style.color = '#050f1a'; // Muda a cor do texto após o clique
      }, 300);
    });
  });
});
