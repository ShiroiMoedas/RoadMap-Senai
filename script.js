const data = [
  {
    title: "🚀 Chegada ao SENAI",
    matheus:
      "Cheguei com experiência prática e técnica, mas precisava desenvolver a parte profissional e teórica.",
    pedro: "Cheguei com informática básica e pouca experiência em programação.",
    question: "Como vocês chegaram ao curso?",
  },

  {
    title: "🗣 Comunicação",
    matheus: "Aprendi a me comunicar melhor profissionalmente.",
    pedro: "Foi uma das áreas que mais impactou minha evolução.",
    question: "Quem aqui gosta de apresentar trabalhos?",
  },

  {
    title: "🧠 Lógica de Programação",
    matheus: "Fortaleci minha base teórica.",
    pedro: "Comecei a entender como resolver problemas através da programação.",
    question: "Alguém já programava antes?",
  },

  {
    title: "🗄️ Banco de Dados",
    matheus: "Entendi a importância da estrutura dos dados.",
    pedro: "Descobri como sistemas armazenam informações.",
    question: "Onde vocês acham que ficam os dados do Instagram?",
  },

  {
    title: "💡 Criatividade e Ideação",
    matheus: "Aprendi a pensar em soluções.",
    pedro: "Minha criatividade foi muito estimulada.",
    question: "Que problema vocês resolveriam usando tecnologia?",
  },

  {
    title: "⚡ Python",
    matheus: "Aprendi novas formas de desenvolver soluções.",
    pedro: "Comecei a quebrar a cabeça com códigos maiores.",
    question: "Qual foi o primeiro programa que vocês fizeram?",
  },

  {
    title: "☕ Desenvolvimento de Sistemas",
    matheus:
      "Foi onde comecei a enxergar áreas específicas como Cybersegurança.",
    pedro: "Aprendi muito sobre lógica e desenvolvimento.",
    question: "Quem pretende seguir carreira em tecnologia?",
  },

  {
    title: "📐 Modelagem",
    matheus: "Percebi a importância do planejamento.",
    pedro: "Aprendi que um sistema começa antes do código.",
    question: "Programar é a primeira etapa de um sistema?",
  },

  {
    title: "🎓 Formação",
    matheus: "Saio mais preparado e interessado em Cybersegurança.",
    pedro: "Levo aprendizados para qualquer área profissional.",
    question: "Onde vocês querem estar daqui a dois anos?",
  },
];

function showContent(index) {
  document
    .querySelectorAll(".step")
    .forEach((el) => el.classList.remove("active"));

  document.querySelectorAll(".step")[index].classList.add("active");

  document.getElementById("content").innerHTML = `

<h2>${data[index].title}</h2>

<div class="card">
<h3>Matheus Gustavo</h3>
<p>${data[index].matheus}</p>
</div>

<div class="card">
<h3>Pedro Neri</h3>
<p>${data[index].pedro}</p>
</div>

<div class="question">
${data[index].question}
</div>

`;
}
