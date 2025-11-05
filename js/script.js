// *****************************
//  Base de questões (40 itens)
// *****************************
// Cada questão: {id, area, tag, enunciado, alternativas[4], correta(0-3)}
const questions = [
  // LINGUAGENS (10)
  {id:1, area:"Linguagens", tag:"interpretacao", enunciado:"Em uma crônica, o narrador afirma: \"Nada é tão urgente quanto parece no calor do momento\". A ideia central expressa é:", alternativas:["A urgência é sempre real.", "A urgência é uma percepção que pode ser exagerada.", "Os problemas desaparecem sozinhos.", "Agir rápido evita qualquer erro."], correta:1},
  {id:2, area:"Linguagens", tag:"gramatica", enunciado:"Assinale a alternativa em que a regência está adequada ao padrão culto:", alternativas:["Assisti o filme ontem.", "Agradeço você pela ajuda.", "Prefiro estudar a descansar.", "Obedeceram o regulamento."], correta:2},
  {id:3, area:"Linguagens", tag:"figuradelinguagem", enunciado:"Em \"a cidade acordou cansada\", ocorre a figura de linguagem:", alternativas:["Metonímia", "Hipérbole", "Prosopopeia (personificação)", "Antítese"], correta:2},
  {id:4, area:"Linguagens", tag:"literatura", enunciado:"O Arcadismo brasileiro valoriza, entre outros aspectos:", alternativas:["O urbano e o excesso", "A vida simples e a natureza", "O misticismo barroco", "A ruptura total com a tradição clássica"], correta:1},
  {id:5, area:"Linguagens", tag:"interpretacao", enunciado:"Num infográfico, o autor usa ícones e setas para explicar um processo. Esse recurso busca principalmente:", alternativas:["Embelezar o texto", "Substituir a leitura", "Facilitar a compreensão visual da informação", "Apresentar opinião implícita"], correta:2},
  {id:6, area:"Linguagens", tag:"gramatica", enunciado:"Assinale a opção com acentuação correta segundo as regras do português:", alternativas:["Ideia, juri, heroico", "Índole, júri, herói", "Indole, júri, heroí", "Índole, juri, heroi"], correta:1},
  {id:7, area:"Linguagens", tag:"generos", enunciado:"Uma tirinha com humor baseado em quebra de expectativa caracteriza-se por:", alternativas:["Predomínio de descrição técnica.", "Narratividade curta com punchline.", "Dissertação argumentativa formal.", "Texto injuntivo com instruções."], correta:1},
  {id:8, area:"Linguagens", tag:"interpretacao", enunciado:"Num anúncio, lê-se: \"Menos plástico, mais futuro\". O efeito de sentido central é:", alternativas:["Contraste e apelo à consciência ambiental.", "Humor pelo absurdo.", "Informação científica neutra.", "Relato histórico."], correta:0},
  {id:9, area:"Linguagens", tag:"semantica", enunciado:"Em \"só sei que nada sei\", a expressão produz sentido de:", alternativas:["Ironia e reconhecimento de limites do conhecimento.", "Certeza absoluta.", "Ambiguidade gramatical.", "Hipérbole afetiva."], correta:0},
  {id:10, area:"Linguagens", tag:"gramatica", enunciado:"Qual frase está de acordo com a norma-padrão quanto à colocação pronominal?", alternativas:["Me empresta o livro?", "Empresta-me o livro?", "Empresta o livro-me?", "O livro empresta-me?"], correta:1},

  // MATEMÁTICA (10)
  {id:11, area:"Matemática", tag:"porcentagem", enunciado:"Um produto com preço R$ 200 teve 15% de desconto. O valor pago foi:", alternativas:["R$ 170,00", "R$ 180,00", "R$ 185,00", "R$ 190,00"], correta:0},
  {id:12, area:"Matemática", tag:"razaoproporcao", enunciado:"Se 3 livros custam R$ 90, quanto custam 5 livros no mesmo preço unitário?", alternativas:["R$ 120", "R$ 130", "R$ 140", "R$ 150"], correta:3},
  {id:13, area:"Matemática", tag:"geometria", enunciado:"Um triângulo de base 10 cm e altura 8 cm tem área:", alternativas:["80 cm²", "40 cm²", "18 cm²", "88 cm²"], correta:1},
  {id:14, area:"Matemática", tag:"estatistica", enunciado:"A média aritmética de 6, 8 e 10 é:", alternativas:["7", "8", "9", "24"], correta:1},
  {id:15, area:"Matemática", tag:"funcao", enunciado:"Em f(x)=2x+3, o valor de f(4) é:", alternativas:["8", "10", "11", "13"], correta:2},
  {id:16, area:"Matemática", tag:"probabilidade", enunciado:"Num dado honesto, a probabilidade de sair número par é:", alternativas:["1/2", "1/3", "2/3", "1/6"], correta:0},
  {id:17, area:"Matemática", tag:"porcentagem", enunciado:"Uma população cresceu 10% e passou a 8800 habitantes. O valor anterior era:", alternativas:["8000", "8200", "880", "9680"], correta:0},
  {id:18, area:"Matemática", tag:"geometria", enunciado:"Um círculo de raio 7 cm tem perímetro aproximado (considere π≈3,14):", alternativas:["≈ 21,98 cm", "≈ 43,96 cm", "≈ 77,00 cm", "≈ 154,00 cm"], correta:1},
  {id:19, area:"Matemática", tag:"graficos", enunciado:"Um gráfico de barras mostra vendas subindo de jan a mar. Conclui-se corretamente que:", alternativas:["Houve tendência de alta no período.", "Março teve menos que janeiro.", "Não há como comparar meses.", "Janeiro foi o pico."], correta:0},
  {id:20, area:"Matemática", tag:"algebra", enunciado:"Resolva 3x−9=0. O valor de x é:", alternativas:["−3", "0", "3", "9"], correta:2},

  // HUMANAS (10)
  {id:21, area:"Humanas", tag:"historia-brasil", enunciado:"A Inconfidência Mineira (1789) foi um movimento que defendia principalmente:", alternativas:["Fim da escravidão imediata.", "Independência e menor carga tributária.", "Proclamação da República.", "Voto feminino universal."], correta:1},
  {id:22, area:"Humanas", tag:"geografia-ambiental", enunciado:"O desmatamento na Amazônia impacta diretamente:", alternativas:["Aumento da umidade local.", "Diminuição de erosão.", "Ciclo hidrológico e regime de chuvas.", "Aumento da biodiversidade."], correta:2},
  {id:23, area:"Humanas", tag:"sociologia", enunciado:"Cidadania ativa envolve:", alternativas:["Apenas votar periodicamente.", "Participação em decisões públicas e fiscalização social.", "Obediência cega às leis.", "Neutralidade política."], correta:1},
  {id:24, area:"Humanas", tag:"filosofia", enunciado:"Para Aristóteles, a virtude está associada ao:", alternativas:["Excesso.", "Defeito.", "Justo meio.", "Prazer imediato."], correta:2},
  {id:25, area:"Humanas", tag:"historia-geral", enunciado:"A Revolução Industrial transformou as cidades ao:", alternativas:["Diminuir a urbanização.", "Aumentar o trabalho artesanal.", "Acelerar a urbanização e a mecanização.", "Eliminar conflitos trabalhistas."], correta:2},
  {id:26, area:"Humanas", tag:"geopolitica", enunciado:"Globalização caracteriza-se por:", alternativas:["Isolamento dos mercados.", "Integração de fluxos de informação, capital e pessoas.", "Fim das diferenças culturais.", "Autarquia econômica universal."], correta:1},
  {id:27, area:"Humanas", tag:"geografia-economia", enunciado:"O PIB mede principalmente:", alternativas:["Distribuição de renda.", "Produção total de bens e serviços.", "Bem-estar subjetivo.", "Inflação anual."], correta:1},
  {id:28, area:"Humanas", tag:"historia-brasil", enunciado:"A Lei Áurea (1888):", alternativas:["Regulou o trabalho assalariado.", "Aboliu a escravidão no Brasil.", "Proclamou a República.", "Criou cotas raciais."], correta:1},
  {id:29, area:"Humanas", tag:"atualidades", enunciado:"Políticas de mobilidade urbana sustentável incentivam:", alternativas:["Prioridade absoluta a carros individuais.", "Transporte público, ciclovias e calçadas seguras.", "Aumento de estacionamentos no centro.", "Velocidades maiores em vias locais."], correta:1},
  {id:30, area:"Humanas", tag:"geografia-populacao", enunciado:"Transição demográfica envolve, em geral:", alternativas:["Queda de mortalidade seguida de queda de natalidade.", "Aumento simultâneo de mortalidade e natalidade.", "Imigração em massa sempre.", "Estagnação populacional imediata."], correta:0},

  // NATUREZA (10)
  {id:31, area:"Natureza", tag:"ecologia", enunciado:"Relação entre abelha e flor é exemplo de:", alternativas:["Comensalismo", "Competição", "Mutualismo", "Parasitismo"], correta:2},
  {id:32, area:"Natureza", tag:"genetica", enunciado:"Em genética mendeliana, o cruzamento de Aa x aa resulta em proporção de fenótipos:", alternativas:["100% dominantes", "50% dominantes e 50% recessivos", "75% dominantes", "25% recessivos"], correta:1},
  {id:33, area:"Natureza", tag:"fisiologia", enunciado:"Hemoglobina está diretamente relacionada ao transporte de:", alternativas:["Glicose", "Oxigênio", "Sais minerais", "Água"], correta:1},
  {id:34, area:"Natureza", tag:"quimica-esteq", enunciado:"A água (H₂O) apresenta ligações do tipo:", alternativas:["Iônicas entre H e O", "Metálicas entre H e O", "Covalentes entre H e O", "Nenhuma ligação"], correta:2},
  {id:35, area:"Natureza", tag:"quimica-solucao", enunciado:"Uma solução com pH 3 é:", alternativas:["Básica forte", "Neutra", "Levemente básica", "Ácida"], correta:3},
  {id:36, area:"Natureza", tag:"fisica-energia", enunciado:"A energia potencial gravitacional de um corpo depende de:", alternativas:["Massa e altura", "Cor do objeto", "Tempo de queda", "Área de contato"], correta:0},
  {id:37, area:"Natureza", tag:"fisica-eletricidade", enunciado:"No circuito elétrico, a resistência equivalente de dois resistores em série é:", alternativas:["Igual à soma das resistências", "Menor que cada uma", "Maior que a soma", "Inversamente proporcional à soma"], correta:0},
  {id:38, area:"Natureza", tag:"ecologia", enunciado:"Bioacumulação refere-se a:", alternativas:["Aumento de biomassa por fotossíntese", "Acúmulo de substâncias tóxicas ao longo da cadeia alimentar", "Diminuição de nutrientes no solo", "Aumento de oxigênio atmosférico"], correta:1},
  {id:39, area:"Natureza", tag:"genetica", enunciado:"O DNA é composto por nucleotídeos que incluem:", alternativas:["Aminoácidos", "Glicerol", "Base nitrogenada, açúcar e fosfato", "Ácidos graxos"], correta:2},
  {id:40, area:"Natureza", tag:"fisica-optica", enunciado:"A reflexão difusa ocorre quando a luz incide em:", alternativas:["Superfície perfeitamente lisa", "Superfície rugosa", "Meio transparente homogêneo", "Vácuo"], correta:1},
];

// **********************
//  Estado e utilidades
// **********************
const KEY = 'enem_diag_respostas_v1';
let answers = JSON.parse(localStorage.getItem(KEY) || '{}');
const THEME_KEY = 'enem_ui_theme';

const skillLabels = {
  interpretacao:"Interpretação",
  gramatica:"Gramática",
  figuradelinguagem:"Figuras de linguagem",
  literatura:"Literatura (Arcadismo)",
  generos:"Gêneros textuais",
  semantica:"Semântica",
  porcentagem:"Porcentagem",
  razaoproporcao:"Razão e proporção",
  geometria:"Geometria",
  estatistica:"Estatística",
  funcao:"Funções",
  probabilidade:"Probabilidade",
  graficos:"Gráficos e tabelas",
  algebra:"Álgebra",
  'historia-brasil':"História do Brasil",
  'historia-geral':"História Geral",
  'geografia-ambiental':"Geo. Ambiental",
  'geografia-economia':"Geo. Econômica",
  'geografia-populacao':"Geo. População",
  atualidades:"Atualidades",
  sociologia:"Sociologia",
  filosofia:"Filosofia",
  ecologia:"Ecologia",
  genetica:"Genética",
  fisiologia:"Fisiologia Humana",
  'quimica-esteq':"Química (ligações)",
  'quimica-solucao':"Química (soluções)",
  'fisica-energia':"Física (energia)",
  'fisica-eletricidade':"Física (eletricidade)",
  'fisica-optica':"Física (óptica)",
};

function save(){ localStorage.setItem(KEY, JSON.stringify(answers)); }
function percent(a,b){ return b ? Math.round((a/b)*100) : 0 }

// ****************
//  Tema (dark/light)
// ****************
function applyTheme(theme){
  const root = document.documentElement;
  if(theme === 'light'){
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }
}
function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'dark'));
}
function toggleTheme(){
  const isDark = document.documentElement.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

// ****************
//  Renderização
// ****************
function renderSkillsCloud(){
  const cont = document.getElementById('skillsCloud');
  const tags = [...new Set(questions.map(q=>q.tag))];
  cont.innerHTML = tags.map(t=>`
    <span class="pill-mini inline-flex items-center text-[10px] px-2 py-1 rounded-full border border-slate-700 bg-slate-900/60 text-slate-200">${skillLabels[t]||t}</span>
  `).join('');
}

function renderStats(){
  const total = questions.length;
  const done = Object.keys(answers).length;
  const hits = questions.filter(q=>answers[q.id]===q.correta).length;
  document.getElementById('kpiTotal').textContent = total;
  document.getElementById('kpiDone').textContent = done;
  document.getElementById('kpiHits').textContent = hits;
  document.getElementById('progress').style.width = (done/total*100)+"%";
}

function renderQuiz(){
  const root = document.getElementById('quiz');
  root.innerHTML = '';
  questions.forEach(q=>{
    const marked = answers[q.id];
    const card = document.createElement('article');
    card.className = 'q-card rounded-xl border border-slate-800 bg-slate-900/60 p-4';
    card.innerHTML = `
      <div class="q-title font-bold">${q.id}. <span class="subject-chip">[${q.area}]</span> ${q.enunciado}</div>
      <div class="options grid gap-2 mt-3">
        ${q.alternativas.map((alt,i)=>{
          const isSelected = marked===i;
          const base = 'option cursor-pointer rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 hover:border-blue-400 transition';
          const selected = isSelected ? ' selected ring-2 ring-blue-600 border-blue-400' : '';
          return `<div class="${base}${selected}" data-qid="${q.id}" data-index="${i}">${String.fromCharCode(65+i)}) ${alt}</div>`
        }).join('')}
      </div>
      <div class="footerbar flex items-center justify-between gap-2 mt-3">
        <div class="text-slate-400 text-xs">Habilidade: ${skillLabels[q.tag]||q.tag}</div>
        ${marked!==undefined? `<div class="text-xs">${marked===q.correta?'<span class="text-emerald-500">✔ Correto</span>':'<span class="text-red-500">✘ Incorreto</span>'}</div>`:''}
      </div>
    `;
    root.appendChild(card);
  });
}

function onOptionClick(e){
  const el = e.target.closest('.option');
  if(!el) return;
  const qid = Number(el.dataset.qid);
  const idx = Number(el.dataset.index);
  answers[qid] = idx; save();
  renderQuiz();
  renderStats();
  scrollToQuestion(qid+1);
}

function scrollToQuestion(nextId){
  const node = [...document.querySelectorAll('.q-card')].find(n=>n.querySelector('.q-title')?.textContent.startsWith(nextId+'.'))
  if(node){ node.scrollIntoView({behavior:'smooth',block:'start'}); }
}

// ****************
//  Diagnóstico
// ****************
function buildReport(){
  // áreas
  const areas = {};
  questions.forEach(q=>{
    areas[q.area] = areas[q.area] || {ok:0,total:0};
    areas[q.area].total++;
    if(answers[q.id]===q.correta) areas[q.area].ok++;
  });
  // skills
  const skills = {};
  questions.forEach(q=>{
    const key=q.tag; skills[key]=skills[key]||{ok:0,total:0};
    skills[key].total++; if(answers[q.id]===q.correta) skills[key].ok++;
  });
  return {areas, skills};
}

function priorityLabel(p){
  if(p>=80) return '<span class="text-emerald-500">Alta (manter)</span>';
  if(p>=60) return '<span class="text-amber-400">Média (reforçar)</span>';
  return '<span class="text-red-500">Crítica (priorizar)</span>';
}

const suggestions = {
  interpretacao:"Pratique leitura ativa de textos longos (editoriais, crônicas). Resuma a ideia central e localize tese e argumentos.",
  gramatica:"Revise regência, acentuação e colocação pronominal com 10 questões por dia.",
  figuradelinguagem:"Monte um mapa mental das figuras mais cobradas (metáfora, personificação, antítese).",
  literatura:"Leia resumos do Arcadismo e identifique traços como bucolismo e simplicidade.",
  generos:"Compare estruturas: tirinha (humor + síntese) x artigo (argumentação).",
  semantica:"Treine sentido literal x figurado e ambiguidade controlada.",
  porcentagem:"Refaça problemas de desconto/aumento e juros simples com regra de três.",
  razaoproporcao:"Use tabelas proporcionais e verifique unidades antes de calcular.",
  geometria:"Memorize fórmulas de área/perímetro e resolva questões com desenhos.",
  estatistica:"Interprete médias, medianas e gráficos; destaque unidades e escalas.",
  funcao:"Treine avaliação de f(x) e interpretação de coeficientes em gráficos lineares.",
  probabilidade:"Resolva eventos simples com contagem e frações equivalentes.",
  graficos:"Leia títulos, eixos e legendas antes de inferir tendências.",
  algebra:"Isole a incógnita e confira substituindo o resultado.",
  'historia-brasil':"Monte linha do tempo: Colônia → Império → República, com eventos-chave.",
  'historia-geral':"Relacione revoluções a transformações tecnológicas e sociais.",
  'geografia-ambiental':"Explore impactos do desmatamento no clima e nos recursos hídricos.",
  'geografia-economia':"Entenda indicadores (PIB, inflação, desemprego) e o que cada um mede.",
  'geografia-populacao':"Revise fases da transição demográfica e pirâmides etárias.",
  atualidades:"Leia semanalmente sínteses de mobilidade, clima e tecnologia.",
  sociologia:"Conceitos de cidadania, participação e movimentos sociais.",
  filosofia:"Relembre noções de virtude (Aristóteles) e ética do meio-termo.",
  ecologia:"Revise relações ecológicas e impactos antrópicos.",
  genetica:"Pratique cruzamentos simples (Punnett) e conceitos de DNA/RNA.",
  fisiologia:"funções do sangue, sistemas e trocas gasosas.",
  'quimica-esteq':"Diferencie ligações iônica, covalente e metálica com exemplos.",
  'quimica-solucao':"pH: escala logarítmica; identifique ácidos/bases no cotidiano.",
  'fisica-energia':"Conceitue energia potencial/ cinética e relações com altura/velocidade.",
  'fisica-eletricidade':"Associação de resistores: série soma; paralelo inversos.",
  'fisica-optica':"Reflexão difusa x especular e aplicações práticas."
};

function renderResults(){
  const {areas, skills} = buildReport();
  // Áreas
  const tbA = document.querySelector('#tblAreas tbody');
  tbA.innerHTML = '';
  Object.entries(areas).forEach(([area, v])=>{
    const p = percent(v.ok, v.total);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="border-b border-slate-800 p-2">${area}</td><td class="border-b border-slate-800 p-2">${v.ok}/${v.total}</td><td class="border-b border-slate-800 p-2"><div class="bar h-2 rounded-full border border-slate-700 bg-slate-900/60 overflow-hidden"><i class="block h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500" style="width:${p}%"></i></div> <span class="ml-1">${p}%</span></td><td class="border-b border-slate-800 p-2">${priorityLabel(p)}</td>`;
    tbA.appendChild(tr);
  });
  // Skills - ordenar pelas piores
  const tbS = document.querySelector('#tblSkills tbody');
  tbS.innerHTML = '';
  const arr = Object.entries(skills).map(([k,v])=>({k, ...v, p:percent(v.ok,v.total)})).sort((a,b)=>a.p-b.p);
  arr.slice(0,8).forEach(s=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="border-b border-slate-800 p-2">${skillLabels[s.k]||s.k}</td><td class="border-b border-slate-800 p-2">${s.ok}/${s.total}</td><td class="border-b border-slate-800 p-2">${s.p}%</td><td class="border-b border-slate-800 p-2 text-slate-300">${suggestions[s.k]||'Revisão dirigida e prática de questões.'}</td>`;
    tbS.appendChild(tr);
  });
  // Plano de ação
  const plan = document.getElementById('actionPlan');
  plan.innerHTML = '';
  const weak = arr.slice(0,4);
  weak.forEach((s,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `<b>${skillLabels[s.k]||s.k}</b>: ${suggestions[s.k]||''} → <span class="pill-mini">Meta: 20 questões/dia (30 min)</span>`;
    plan.appendChild(li);
  });
  const extra = document.createElement('li');
  extra.innerHTML = `<b>Simulado semanal</b>: 30-40 questões cronometradas. Revisar erros com a técnica do “por que errei?”.`;
  plan.appendChild(extra);

  // Mostrar seção
  document.getElementById('results').classList.remove('hidden');
  window.scrollTo({top: document.getElementById('results').offsetTop - 20, behavior:'smooth'});
}

// ****************
//  Export & reset
// ****************
function exportJSON(){
  const payload = {answers, timestamp: new Date().toISOString(), report: buildReport()};
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'diagnostico-enem.json'; a.click();
  URL.revokeObjectURL(url);
}

function resetAll(){
  if(!confirm('Apagar todas as respostas e recomeçar?')) return;
  answers = {}; save(); renderQuiz(); renderStats();
  document.getElementById('results').classList.add('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ****************
//  Listeners init
// ****************
function init(){
  initTheme();
  renderSkillsCloud();
  renderQuiz();
  renderStats();
  document.body.addEventListener('click', onOptionClick);
  const themeBtn = document.getElementById('btnTheme');
  if(themeBtn){ themeBtn.addEventListener('click', toggleTheme); }
  document.getElementById('btnFinish').addEventListener('click', ()=>{
    const total = questions.length;
    const done = Object.keys(answers).length;
    if(done < total){
      if(!confirm(`Tu respondeu ${done}/${total}. Quer finalizar mesmo assim?`)) return;
    }
    renderResults();
  });
  document.getElementById('btnExport').addEventListener('click', exportJSON);
  document.getElementById('btnReset').addEventListener('click', resetAll);
}

document.addEventListener('DOMContentLoaded', init); 