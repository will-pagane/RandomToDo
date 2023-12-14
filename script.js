document.addEventListener('DOMContentLoaded', () => {
  const opcoesDeEstudoBase = [
    "Programação Rocketseat",
    "Programação Low Code",
    "Finclass"
  ];

  const coresDoBotao = [
    "#A6E22E", // Verde Esmeralda
    "#9966CC", // Roxo Ametista
    "#FF7F50", // Laranja Coral
    "#FF69B4", // Rosa Choque
    "#FFFF33", // Amarelo Vibrante
  ];

  const marioKartSwitch = document.getElementById('marioKartSwitch');
  const botao = document.querySelector('.button a');
  let foiClicado = false;
  let ultimaOpcao = "";
  let ultimaCor = "";

  botao.addEventListener('transitionend', () => {
    if (!foiClicado) {
      document.documentElement.style.setProperty('--text-color', '#050f1a');
    }
  });

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

    requestAnimationFrame(() => {
      setTimeout(() => {
        botao.textContent = novoTexto;
        document.documentElement.style.setProperty('--button-color', novaCor);
      }, 300);
    });
  });
});
