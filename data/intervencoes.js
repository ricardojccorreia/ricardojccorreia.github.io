/* ============================================================================
   INTERVENÇÕES — registo único de palestras, comunicações, aulas e workshops.
   Lido por /intervencoes/, pela página inicial e por /GenAI/pedido.html.

   Para acrescentar uma intervenção, copie um bloco e preencha:
     id        identificador único e estável (usado em pedido.html?slides=ID
               e no Apps Script — não mudar depois de publicado)
     date      "AAAA-MM-DD" (datas futuras aparecem em "Próximas")
     type      invited | talk | workshop | lecture | panel
     title / title_en, event / event_en, place / place_en
     tags      temas curtos (ex.: "GenAI", "Interoperabilidade", "Educação")
     access    public (url direto) | form (slides por pedido) | none (sem slides)
     url       só para access:"public" — caminho a partir da raiz do site
     video, doi            opcionais
     citation / citation_en opcionais (senão é gerada automaticamente)
   NUNCA colocar aqui o link de download das apresentações "a pedido":
   esse link vive só no Apps Script (GenAI/apps-script/Code.gs).
   ========================================================================== */

// Tradução dos temas para a versão inglesa (os não listados mantêm-se)
const INTERVENTION_TAGS_EN = {"Interoperabilidade":"Interoperability","Colaboração":"Collaboration","Educação":"Education","Formação":"Training"};

const INTERVENTIONS = [
  {
    id: "ufg-uporto-2026-09-29",
    date: "2026-09-29",
    type: "talk",
    title: "Pesquisa e Colaboração UFG–U.Porto",
    title_en: "Research and Collaboration UFG–U.Porto",
    event: "Universidade Federal de Goiás",
    event_en: "Federal University of Goiás",
    place: "Goiânia, Brasil",
    place_en: "Goiânia, Brazil",
    tags: ["Interoperabilidade", "Colaboração"],
    access: "none"
  },
  {
    id: "icimth-2026-ai-health-education",
    date: "2026-07-03",
    type: "invited",
    title: "IA na Educação em Saúde",
    title_en: "AI in Health Education",
    event: "ICIMTH 2026",
    event_en: "ICIMTH 2026",
    place: "Atenas, Grécia",
    place_en: "Athens, Greece",
    tags: ["GenAI", "Educação"],
    access: "form",
    citation: "Cruz-Correia, R. (2026). <i>IA na Educação em Saúde</i> [Apresentação convidada]. ICIMTH 2026 — International Conference on Informatics, Management and Technology in Healthcare, Atenas, Grécia. https://ricardojccorreia.github.io/intervencoes/",
    citation_en: "Cruz-Correia, R. (2026). <i>AI in Health Education</i> [Invited presentation]. ICIMTH 2026 — International Conference on Informatics, Management and Technology in Healthcare, Athens, Greece. https://ricardojccorreia.github.io/intervencoes/"
  },
  {
    id: "u-porto-admin-2026-06-16",
    date: "2026-06-16",
    type: "workshop",
    title: "IA no Trabalho Administrativo",
    title_en: "AI in Administrative Work",
    event: "Universidade do Porto",
    event_en: "University of Porto",
    place: "Porto",
    tags: ["GenAI", "Formação"],
    access: "public",
    url: "GenAI/workshop.html"
  }
];
