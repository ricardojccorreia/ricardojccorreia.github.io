/* ============================================================================
   JOGO — dados do percurso (rascunho; confirmar o que está marcado "?")
   Fontes: CV SIGARRA FMUP (jun. 2025), certidões permanentes no Drive,
   registos da Salut.ia no Drive. Alunos sem nomes: só tipo e anos.
   Regras: mestrado = ajudante (escudo) durante 1 ano; doutoramento = 4 anos.
   ========================================================================== */

const GAME_START = 2000;      // início da vida académica (Assistente, FMUP)
const BIRTH_YEAR = 1974;      // idade entra no peso

// Empresas co-fundadas: data de constituição (certidão permanente)
const G_COMPANIES = [
  {name:"VirtualCare",      date:"2012-10-01", src:"certidão"},
  {name:"HealthySystems",   date:"2013-02-05", src:"certidão"},
  {name:"PharmaDataHub",    date:"2023-12-27", src:"certidão (PDH, Lda)"},
  {name:"Opvance",          date:"2024-01",    src:"? NIPC próximo do da PDH; confirmar data"},
  {name:"Nexalyse",         date:"2025-03-07", src:"certidão"},
  {name:"Salut.ia",         date:"2026-03",    src:"abertura da empresa (Brasil)"},
  {name:"Ciência e Letras", date:null,         src:"? data por confirmar"}
];

// Cargos (início–fim; null = em curso)
const G_ROLES = [
  {name:"Assistente",                         from:"2000-02", to:"2008-07"},
  {name:"Professor Auxiliar",                 from:"2008-07", to:"2023-01"},
  {name:"Professor Associado",                from:"2023-02", to:null},
  {name:"Diretor do Mestrado em Informática Médica", from:"2012-09", to:"2015-02"},
  {name:"Diretor do Mestrado em Informática Médica", from:"2020-09", to:"2024-02"},
  {name:"Codiretor do Mestrado em Informática Médica", from:"2024-02", to:"2024-11"},
  {name:"Presidente das comissões do MIM",    from:"2020-09", to:"2024-10"},
  {name:"Presidente da e-MAIS",               from:null,      to:null},   // ? datas
  {name:"HL7 Portugal",                       from:null,      to:null}    // ? cargo e datas
];

// Orientações (tipo, ano de conclusão; em curso = ano de início). Extraído do CV
// SIGARRA de forma automática — pode haver pequenas falhas; confirmar.
const G_SUPERVISIONS_DONE = [
  ["M",2010],["M",2010],["M",2010],["M",2010],["M",2011],["M",2011],["M",2011],["M",2011],
  ["M",2012],["M",2013],["D",2016],["M",2016],["M",2017],["M",2018],["M",2018],["M",2018],
  ["D",2019],["M",2019],["M",2019],["M",2019],["M",2020],["M",2020],["M",2021],["M",2022],
  ["D",2023],["M",2023],["D",2024],["D",2024],["M",2024]
];
const G_SUPERVISIONS_ONGOING_START = [
  ["D",2020],["D",2020],["D",2021],["D",2022],["D",2022],["D",2023],["D",2024],["D",2025],
  ["M",2020],["M",2022],["M",2022],["M",2022],["M",2023],["M",2023]
];
