/* ============================================================================
   TRAJETÓRIA — dados de I&D e publicações (fonte única para index.html e
   trajetoria.html).
   Origem: apresentação "Pesquisa e Colaboração UFG–U.Porto" (set. 2026).
   Publicações: Ciência Vitae + ORCID · projetos: Universidade do Porto + CV.
   Para atualizar: editar os valores abaixo; as páginas são geradas a partir daqui.
   ========================================================================== */

const TL_PERIODS = ["≤ 2008","2009–11","2012–14","2015–17","2018–20","2021–23","2024–26"];

// Títulos de cada período (pt / en)
const TL_TITLE = {
  pt:["Integração de dados hospitalares","Qualidade e segurança dos dados","openEHR e preservação digital","Registos e sensores","Interoperabilidade, privacidade e IA","Investigação clínica digital","IA generativa e EHDS"],
  en:["Hospital data integration","Data quality and security","openEHR and digital preservation","Registries and sensors","Interoperability, privacy and AI","Digital clinical research","Generative AI and the EHDS"]
};

// Projetos-chave de cada período (resumo usado na página inicial)
const TL_KEY = [
  "HSJ.ICU · EDGAR",
  "HR-QoD · DigiScope · OFELIA",
  "openEHR (FCG) · APDIC · Cibersegurança UP",
  "NanoSTIMA · ODISSEIA · REAG",
  "HS.Helios · DigiScope2 · CliKode · eHealth4all@EU",
  "CR Digital · HfPT · AnyMApp · NET4Sleep",
  "QUANTUM · NORTE IA+ · MedGPT · VIGIA"
];

// Áreas: [publicações, projetos iniciados] por período
const TL_AREAS = [
  {pt:"Integração e interoperabilidade (HL7, FHIR, openEHR)", en:"Integration and interoperability (HL7, FHIR, openEHR)", s:{pt:"Interop.",en:"Interop."}, c:"#2563eb", v:[[11,1],[6,2],[13,2],[10,1],[12,3],[6,2],[3,0]]},
  {pt:"Qualidade de dados e registos", en:"Data quality and registries", s:{pt:"Qualidade",en:"Quality"}, c:"#0891b2", v:[[1,1],[5,0],[4,0],[6,2],[5,2],[2,0],[0,1]]},
  {pt:"Segurança, privacidade e acessos", en:"Security, privacy and access", s:{pt:"Segurança",en:"Security"}, c:"#7c3aed", v:[[8,0],[5,2],[5,2],[0,0],[8,2],[5,1],[0,0]]},
  {pt:"IA e ciência de dados", en:"AI and data science", s:{pt:"IA / dados",en:"AI / data"}, c:"#d97706", v:[[1,0],[2,2],[2,0],[2,0],[3,3],[3,3],[4,3]]},
  {pt:"Educação e formação em saúde", en:"Health education and training", s:{pt:"Educação",en:"Education"}, c:"#059669", v:[[5,0],[2,0],[0,0],[2,0],[5,2],[6,0],[7,0]]},
  {pt:"Dispositivos, mHealth e telessaúde", en:"Devices, mHealth and telehealth", s:{pt:"Dispositivos",en:"Devices"}, c:"#dc2626", v:[[5,0],[3,1],[3,1],[6,1],[6,2],[3,2],[2,0]]},
  {pt:"Outros", en:"Other", s:{pt:"Outros",en:"Other"}, c:"#94a3b8", other:true, v:[[3,0],[12,0],[7,0],[3,0],[3,0],[6,0],[0,0]]}
];
const TL_PUB_TOTAL = [28,30,26,22,28,25,11];

const TL_KPIS = [
  {v:"283", pt:"obras no ORCID", en:"works on ORCID"},
  {v:"33",  pt:"projetos de I&D (+3 financiamentos institucionais)", en:"R&D projects (+3 institutional grants)"},
  {v:"5",   pt:"spin-offs da U.Porto co-fundadas", en:"U.Porto spin-offs co-founded"},
  {v:"20",  pt:"anos no Mestrado em Informática Médica", en:"years in the MSc in Medical Informatics"}
];

// Projetos (cat: up = U.Porto · up+empresa = com empresas · inst = financiamento institucional)
// role: IR = Investigador Responsável · Co-IR · state: ongoing | closed | null (sem registo)
// title_en / short_en: versão inglesa (rever)
const TL_PROJECTS = [
  {"short": "NORTE IA+", "title": "IA Transparente e Segura para um Futuro Mais Humano e Competitivo", "ref": "NORTE2030-FEDER-02724200", "start": "2025-04", "state": "ongoing", "cat": "up", "role": "", "title_en": "Transparent and safe AI for a more human and competitive future"},
  {"short": "VIGIA", "title": "Vigilância de medicamentos e dispositivos com IA (líder VirtualCare; FMUP, ULSM, PDH)", "ref": "COMPETE2030-FEDER-01194900", "start": "2025-04", "state": "ongoing", "cat": "up+empresa", "role": "", "title_en": "AI surveillance of medicines and medical devices (led by VirtualCare; FMUP, ULSM, PDH)"},
  {"short": "MedGPT", "title": "LLMs clínicos éticos (líder SemLab; FMUP, ISEP, VirtualCare)", "ref": "NORTE2030-FEDER-01414600", "start": "2025-01", "state": "ongoing", "cat": "up+empresa", "role": "", "title_en": "Ethical clinical LLMs (led by SemLab; FMUP, ISEP, VirtualCare)"},
  {"short": "QUANTUM", "title": "Data Quality and Utility Label for HealthData@EU", "ref": "Horizon Europe · 101137057", "start": "2024-01", "state": "closed", "cat": "up", "role": "Co-IR", "title_en": "Data Quality and Utility Label for HealthData@EU"},
  {"short": "NET4Sleep", "title": "Rede I+D+i transfronteiriça para a fenotipagem da apneia do sono", "ref": "Interreg POCTEP · 0043_NET4SLEEP_2_E", "start": "2023-07", "state": "ongoing", "cat": "up", "role": "", "title_en": "Cross-border R&D&I network for sleep apnoea phenotyping"},
  {"short": "HfPT", "title": "PRR – Health From Portugal", "ref": "PRR · Agendas Mobilizadoras", "start": "2022-10", "state": "closed", "cat": "up+empresa", "role": "Co-IR", "title_en": "PRR – Health From Portugal"},
  {"short": "AnyMApp", "title": "Simulador digital anónimo para interações humano–app", "ref": "FCT · EXPL/CCI-COM/0052/2021", "start": "2022-01", "state": "closed", "cat": "up", "role": "", "title_en": "Anonymous digital simulator for human–app interactions"},
  {"short": "IMAGE", "title": "Diagnóstico precoce do adenocarcinoma gástrico", "ref": "NORTE-01-0145-FEDER-000050", "start": "2021-04", "state": "closed", "cat": "up", "role": "", "title_en": "Early diagnosis of gastric adenocarcinoma"},
  {"short": "CR Digital", "title": "Digitalizar a investigação clínica no Norte de Portugal", "ref": "NORTE-01-0145-FEDER-083448", "start": "2021-04", "state": "closed", "cat": "up", "role": "IR", "title_en": "Digitalising clinical research in Northern Portugal"},
  {"short": "RISE (LA)", "title": "Rede de Investigação em Saúde – Laboratório Associado", "ref": "FCT · LA/P/0053/2020", "start": "2021-01", "state": "ongoing", "cat": "inst", "role": "", "title_en": "Health Research Network – Associate Laboratory"},
  {"short": "SMART-HEALTH-4-ALL", "title": "Smart medical technologies for better health and care", "ref": "POCI-01-0247-FEDER-046115", "start": "2020-11", "state": "closed", "cat": "up", "role": "", "title_en": "Smart medical technologies for better health and care"},
  {"short": "COVID-19 Ovar", "title": "Escala de risco COVID-19 (Monte Carlo) – Hospital de Ovar", "ref": "FCT · 098_COVID-19", "start": "2020-05", "state": "closed", "cat": "up", "role": "", "title_en": "COVID-19 risk score (Monte Carlo) – Ovar Hospital"},
  {"short": "PUPP", "title": "Parceria universitária para a prevenção do plágio", "ref": "SSHRC (Canadá)", "start": "2020-04", "state": "closed", "cat": "up", "role": "", "title_en": "University partnership for plagiarism prevention"},
  {"short": "ObsCare WCR", "title": "Worldwide maternal and child care patient record and research", "ref": "NORTE-01-0247-FEDER-038393", "start": "2020-03", "state": "closed", "cat": "up+empresa", "role": "IR", "title_en": "Worldwide maternal and child care patient record and research"},
  {"short": "CliKode", "title": "Codificação clínica automática com IA", "ref": "POCI-05-5762-FSE-000230", "start": "2020-01", "state": "closed", "cat": "up", "role": "", "title_en": "Automatic clinical coding with AI"},
  {"short": "CINTESIS (UID)", "title": "Centro de Investigação em Tecnologias e Serviços de Saúde", "ref": "FCT · UIDB/04255/2020", "start": "2020-01", "state": "closed", "cat": "inst", "role": "", "title_en": "Center for Health Technology and Services Research"},
  {"short": "Audit+", "title": "Auditoria de acessos a sistemas hospitalares", "ref": "POCI-05-5762-FSE-000235", "start": "2020", "state": null, "cat": "up", "role": "IR", "title_en": "Auditing access to hospital information systems"},
  {"short": "eHealth4all@EU", "title": "Interprofessional European eHealth Programme in Higher Education", "ref": "Erasmus+ · 2019-1-DE01-KA203-005040", "start": "2019-09", "state": "closed", "cat": "up", "role": "IR", "title_en": "Interprofessional European eHealth Programme in Higher Education"},
  {"short": "HS.Helios", "title": "Integrador para comunicação e portabilidade de dados de saúde", "ref": "POCI-01-0247-FEDER-034017", "start": "2018-07", "state": "closed", "cat": "up+empresa", "role": "IR", "title_en": "Integrator for health data communication and portability"},
  {"short": "DigiScope2", "title": "Estetoscópio digital para uso clínico", "ref": "POCI-01-0145-FEDER-029200", "start": "2018-07", "state": "closed", "cat": "up", "role": "", "title_en": "Digital stethoscope for clinical use"},
  {"short": "DiAS", "title": "Desidentificação como serviço", "ref": "P2020 / IAPMEI", "start": "2018", "state": null, "cat": "up+empresa", "role": "", "title_en": "De-identification as a service"},
  {"short": "HS.Register", "title": "Demonstrador de registros clínicos", "ref": "FEDER", "start": "2018", "state": null, "cat": "up+empresa", "role": "IR", "title_en": "Clinical registry demonstrator"},
  {"short": "ODISSEIA", "title": "Sistema de informação de doenças oncológicas", "ref": "SAMA", "start": "2017", "state": null, "cat": "up", "role": "IR", "title_en": "Oncology disease information system"},
  {"short": "REAG", "title": "Registro nacional de asma grave", "ref": "Novartis", "start": "2017", "state": null, "cat": "up", "role": "", "title_en": "National severe asthma registry"},
  {"short": "NanoSTIMA", "title": "Macro-to-Nano Human Sensing", "ref": "NORTE-01-0145-FEDER-000016", "start": "2015-07", "state": "closed", "cat": "up", "role": "IR", "title_en": "Macro-to-Nano Human Sensing"},
  {"short": "PEst 2014", "title": "Projeto Estratégico UI 753", "ref": "FCT · PEst-OE/SAU/UI0753/2014", "start": "2014-01", "state": "closed", "cat": "inst", "role": "", "title_en": "Strategic Project UI 753"},
  {"short": "Cibersegurança UP", "title": "Centro de Competências em Cibersegurança e Privacidade da U.Porto", "ref": "NORTE-07-0162-FEDER-000110", "start": "2013-11", "state": "closed", "cat": "up", "role": "", "title_en": "U.Porto Competence Centre in Cybersecurity and Privacy", "short_en": "Cybersecurity UP"},
  {"short": "FCG openEHR", "title": "Sistemas de informação em saúde baseados em openEHR", "ref": "Fundação Calouste Gulbenkian", "start": "2013-01", "state": "closed", "cat": "up", "role": "", "title_en": "openEHR-based health information systems"},
  {"short": "APDIC", "title": "Arquivo e preservação digital de informação clínica", "ref": "MP/P-125997", "start": "2013-01", "state": "closed", "cat": "up", "role": "", "title_en": "Archiving and digital preservation of clinical information"},
  {"short": "ICT for Future Health", "title": "ICT For Future Health", "ref": "NORTE-07-0124-FEDER-000068", "start": "2013-01", "state": "closed", "cat": "up", "role": "", "title_en": "ICT For Future Health"},
  {"short": "SI em saúde + ML", "title": "Otimização de SI em saúde com aprendizagem automática sobre logs", "ref": "FCT · PTDC/EIA-EIA/099920/2008", "start": "2010-05", "state": "closed", "cat": "up", "role": "", "title_en": "Optimising health information systems with machine learning on logs", "short_en": "Health IS + ML"},
  {"short": "OFELIA", "title": "Identidade federada e autorização", "ref": "FCT · PTDC/EIA-EIA/104328/2008", "start": "2010-04", "state": "closed", "cat": "up", "role": "", "title_en": "Federated identity and authorisation"},
  {"short": "Dados multi-institucionais", "title": "Otimização da disponibilidade de dados de saúde multi-institucionais (agentes)", "ref": "FCT · PTDC/EIA-EIA/105352/2008", "start": "2010-03", "state": "closed", "cat": "up", "role": "", "title_en": "Optimising multi-institutional health data availability (agents)", "short_en": "Multi-institutional data"},
  {"short": "DigiScope", "title": "Estetoscópio digital para uso clínico", "ref": "FCT · PTDC/EIA-CCO/100844/2008", "start": "2010-02", "state": "closed", "cat": "up", "role": "", "title_en": "Digital stethoscope for clinical use"},
  {"short": "HR-QoD", "title": "Qualidade dos dados hospitalares", "ref": "FCT · PTDC/SAU-ESA/75660/2006", "start": "2008-09", "state": "closed", "cat": "up", "role": "", "title_en": "Hospital data quality"},
  {"short": "EDGAR", "title": "Construção de ontologias", "ref": "FCT · POSC/EIA/61307/2004", "start": "2005-05", "state": "closed", "cat": "up", "role": "", "title_en": "Ontology construction"}
];

// Índice do período a que pertence um ano
function tlPeriodOf(year){ return year<=2008?0:Math.min(6,Math.floor((year-2009)/3)+1); }
