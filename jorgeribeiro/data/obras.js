/* ============================================================================
   JORGE RIBEIRO — obras (fonte única para filme.html e jogo.html)
   Origem: "Curriculo Ribeiro 2022.xlsx" (1999–2022), gerado por script.
   Correções feitas na conversão: gralhas nos títulos e nomes; retirada a linha
   duplicada "Os Pintainhos | Ti Jaquim" (tinha o link do Simplex); "Saari"
   (2008 e 2009) ficou numa só obra.
   Depois de 2022 (OBRAS_EXTRA): recolhido na web, a confirmar com o autor.
   Campos: y ano · t título · tipo · fn função · real realização · prod produtora
           ag agência · cli cliente/artista · url · yt id do YouTube · img cartaz
   ========================================================================== */

const NOME = "Jorge Ribeiro";
const BIRTH_YEAR = 1975;        // Porto, 1975 (ficha de "Isto não é um chapéu"; a confirmar)
const PINGUIM_DESDE = 2018;     // primeira obra com Os Filmes do Pinguim no CV (data de fundação a confirmar)

const OBRAS = [
  {"y": 1999, "t": "Dick Latex", "tipo": "Série", "fn": "Animador", "real": "", "prod": "Magic Toons", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 1999, "t": "Telecel", "tipo": "Spot Publicitário", "fn": "Animador", "real": "", "prod": "Magic Toons", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2000, "t": "Flor", "tipo": "Videoclip", "fn": "Animador", "real": "Manu", "prod": "Mixturas", "ag": "", "cli": "Maria João, Mario Laginha", "url": "https://www.youtube.com/watch?v=8uj9V6nqKpw", "yt": "8uj9V6nqKpw"},
  {"y": 2000, "t": "Angelitos", "tipo": "Série", "fn": "Animador", "real": "", "prod": "Animanostra", "ag": "", "cli": "", "url": "https://youtu.be/-jGoYDR7PZE", "yt": "-jGoYDR7PZE"},
  {"y": 2000, "t": "A Caixa Negra", "tipo": "Curta Metragem", "fn": "Animador", "real": "", "prod": "Animais", "ag": "", "cli": "", "url": "https://vimeo.com/44794641", "yt": ""},
  {"y": 2001, "t": "Enemograma#1 Unidos para sempre", "tipo": "Curta Metragem", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2003, "t": "Summon Up", "tipo": "Videoclip", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/5uIUkXCN3hc", "yt": "5uIUkXCN3hc"},
  {"y": 2003, "t": "How High", "tipo": "Curta Metragem", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2003, "t": "Mute", "tipo": "Videoclip", "fn": "Concepção e animação", "real": "Jorge Oliveira", "prod": "Play Audiovisuais", "ag": "", "cli": "Mute", "url": "https://youtu.be/r2NYfp-YXU4", "yt": "r2NYfp-YXU4"},
  {"y": 2004, "t": "Os Espadinhas - Frases Feitas", "tipo": "Série", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://www.youtube.com/watch?v=Mgu3rRJ13AQ&feature=youtu.be", "yt": "Mgu3rRJ13AQ"},
  {"y": 2004, "t": "Os Espadinhas - Camelo ou Dromedário", "tipo": "Série", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://www.youtube.com/watch?v=SjbVfml2qtc&feature=youtu.be", "yt": "SjbVfml2qtc"},
  {"y": 2004, "t": "Os Espadinhas - Aparelho dos dentes", "tipo": "Série", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://www.youtube.com/watch?v=KSDiggkOM78&feature=youtu.be", "yt": "KSDiggkOM78"},
  {"y": 2005, "t": "Top Ten - Miguel Pereira", "tipo": "Curta Metragem", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2005, "t": "História trágica com final feliz", "tipo": "Curta Metragem", "fn": "Intervalista", "real": "Regina Pessoa", "prod": "Ciclope Filmes", "ag": "", "cli": "", "url": "https://www.youtube.com/watch?v=-HDaoOEUhDI", "yt": "-HDaoOEUhDI"},
  {"y": 2006, "t": "Mozart - ilha das cores", "tipo": "Videoclip Infantil", "fn": "Co-realizador", "real": "Nuno Amorim", "prod": "Animais", "ag": "", "cli": "", "url": "https://vimeo.com/44864385", "yt": ""},
  {"y": 2006, "t": "Os Espadinhas - Karaoke Zethoven", "tipo": "Spot Publicitário", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/eg7kzKUHzpw", "yt": "eg7kzKUHzpw"},
  {"y": 2008, "t": "Simplex 2008 | Histórias", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Governo Português", "url": "https://youtu.be/lRU5yH1yNIM", "yt": "lRU5yH1yNIM"},
  {"y": 2008, "t": "Saari", "tipo": "Série", "fn": "Animador", "real": "Pablo Jordi", "prod": "Sardinha em Lata", "ag": "", "cli": "", "url": "https://youtu.be/c9FLWr3ECAE", "yt": "c9FLWr3ECAE"},
  {"y": 2008, "t": "O Tembo sabe como prevenir a Malária", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "Molho de Brócolos", "ag": "", "cli": "", "url": "https://youtu.be/PSY9M_zIG4c", "yt": "PSY9M_zIG4c"},
  {"y": 2009, "t": "Se o telefone toca", "tipo": "Videoclip", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "M3", "url": "https://www.youtube.com/watch?v=ECq1r7VVZ44", "yt": "ECq1r7VVZ44"},
  {"y": 2009, "t": "Os Pintainhos - As mulheres do monte", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "iPlay", "url": "https://youtu.be/PFh2k9ZIJKU", "yt": "PFh2k9ZIJKU"},
  {"y": 2009, "t": "Os Pintainhos - Trai trai", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "iPlay", "url": "https://youtu.be/HmHlcgxHvw4", "yt": "HmHlcgxHvw4"},
  {"y": 2009, "t": "Os Pintainhos - No alto daquele monte", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "iPlay", "url": "https://youtu.be/SZocjcW4O8s", "yt": "SZocjcW4O8s"},
  {"y": 2009, "t": "Os Pintainhos - Saltam os palhaços", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "iPlay", "url": "https://youtu.be/XRieJXWWw5A", "yt": "XRieJXWWw5A"},
  {"y": 2009, "t": "Os Pintainhos - Ti Joaquim", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "iPlay", "url": "https://youtu.be/0XvZMNYOc68", "yt": "0XvZMNYOc68"},
  {"y": 2010, "t": "Associação na Hora", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "Jorge Oliveira", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://youtu.be/QT2qJ4KY6g0", "yt": "QT2qJ4KY6g0"},
  {"y": 2010, "t": "Empresa na Hora", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://youtu.be/a6BX3-B4rWQ", "yt": "a6BX3-B4rWQ"},
  {"y": 2010, "t": "Empresa Online", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://youtu.be/vymeKzmoLoA", "yt": "vymeKzmoLoA"},
  {"y": 2010, "t": "Casa Pronta", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://youtu.be/MIav2ab_EbM", "yt": "MIav2ab_EbM"},
  {"y": 2010, "t": "Nasce Cidadão", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://youtu.be/y33KpaMbo70", "yt": "y33KpaMbo70"},
  {"y": 2010, "t": "Documento Único Automóvel", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://youtu.be/WinA-np2JLU", "yt": "WinA-np2JLU"},
  {"y": 2010, "t": "Marcas e patentes online", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Ministério da Justiça", "url": "https://www.youtube.com/watch?v=MtkmFg_uW-M", "yt": "MtkmFg_uW-M"},
  {"y": 2010, "t": "Terreiro do Paço", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Câmara Municipal de Lisboa", "url": "https://youtu.be/RYnBCap2bcc", "yt": "RYnBCap2bcc"},
  {"y": 2010, "t": "XFX | Play Hard", "tipo": "Spot Publicitário", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Play Audiovisuais", "ag": "", "cli": "XFX", "url": "https://youtu.be/S9tGGEtPHw0", "yt": "S9tGGEtPHw0"},
  {"y": 2010, "t": "João Ratão | Bom Bom", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/iMDFhEvNZ-I", "yt": "iMDFhEvNZ-I"},
  {"y": 2010, "t": "João Ratão | Chocolate", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/lwdysWiyHfg", "yt": "lwdysWiyHfg"},
  {"y": 2010, "t": "Panda Molarte", "tipo": "Spot Publicitário", "fn": "Animador", "real": "Jorge Oliveira", "prod": "Play Audiovisuais", "ag": "", "cli": "Moltex", "url": "https://youtu.be/Bj5PSpmFtHI", "yt": "Bj5PSpmFtHI"},
  {"y": 2010, "t": "SPGM - Bom pagamento", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "SPGM", "url": "https://youtu.be/wcahcOT9Nho", "yt": "wcahcOT9Nho"},
  {"y": 2010, "t": "SPGM - Boa execução", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "SPGM", "url": "https://youtu.be/JIrTBk521Gw", "yt": "JIrTBk521Gw"},
  {"y": 2010, "t": "SPGM - Empreendedorismo", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "SPGM", "url": "https://youtu.be/yQDgsaAkTso", "yt": "yQDgsaAkTso"},
  {"y": 2010, "t": "SPGM - Empréstimo", "tipo": "Filme institucional", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "SPGM", "url": "https://youtu.be/fv54U_q_wk0", "yt": "fv54U_q_wk0"},
  {"y": 2010, "t": "Tv Tel - Música", "tipo": "Spot Publicitário", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "TVTel", "url": "https://youtu.be/-Oswdd3n72U", "yt": "-Oswdd3n72U"},
  {"y": 2010, "t": "Tv Tel - Jornais", "tipo": "Spot Publicitário", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "TVTel", "url": "https://youtu.be/U5WEUDWL9uk", "yt": "U5WEUDWL9uk"},
  {"y": 2010, "t": "INPI", "tipo": "Filme institucional", "fn": "Supervisor", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Ministério da Justiça", "url": "https://youtu.be/Kd0YnAxETWA", "yt": "Kd0YnAxETWA"},
  {"y": 2010, "t": "Porto Vivo", "tipo": "Spot Publicitário", "fn": "Concepção e animação", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/_KHo3F7V03w", "yt": "_KHo3F7V03w"},
  {"y": 2010, "t": "Boa Noite", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/bK5BWJD4_Ug", "yt": "bK5BWJD4_Ug"},
  {"y": 2010, "t": "Mudo", "tipo": "Videoclip", "fn": "Animador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Per7ume", "url": "https://www.youtube.com/watch?v=LumVbTb4dRs", "yt": "LumVbTb4dRs"},
  {"y": 2010, "t": "As vidas dos outros", "tipo": "Videoclip", "fn": "Realizador", "real": "", "prod": "Sons em Trânsito", "ag": "", "cli": "Anaquim", "url": "https://www.youtube.com/watch?v=l_fNv8k5ZnA", "yt": "l_fNv8k5ZnA"},
  {"y": 2010, "t": "Grupótico", "tipo": "Spot Publicitário", "fn": "Animador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Grupótico", "url": "https://www.youtube.com/watch?v=TJNg1ScpnYg", "yt": "TJNg1ScpnYg"},
  {"y": 2010, "t": "Bricomarché", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Bricomarché", "url": "https://www.youtube.com/watch?v=tx_40G0rJQI", "yt": "tx_40G0rJQI"},
  {"y": 2010, "t": "APOR", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Câmara Municipal do Porto", "url": "https://youtu.be/koyrLBzNhWg", "yt": "koyrLBzNhWg"},
  {"y": 2010, "t": "Entra no Bus", "tipo": "Videoclip Infantil", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/gYT7epDExX4", "yt": "gYT7epDExX4"},
  {"y": 2010, "t": "Cartão Golfe", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Solverde", "url": "https://www.youtube.com/watch?v=UjIP_qYmLhM", "yt": "UjIP_qYmLhM"},
  {"y": 2010, "t": "Linhas de Torres Vedras", "tipo": "Filme institucional", "fn": "", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/cAMJSzrBqCI", "yt": "cAMJSzrBqCI"},
  {"y": 2011, "t": "Praias do Porto", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Câmara Municipal do Porto", "url": "https://youtu.be/HRuu7Z27vdg", "yt": "HRuu7Z27vdg"},
  {"y": 2011, "t": "Phineas e Ferb", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/Vt2IB31dhWo", "yt": "Vt2IB31dhWo"},
  {"y": 2011, "t": "Crackies", "tipo": "Spot Publicitário", "fn": "Animador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Caçarola", "url": "https://youtu.be/gkGQGhADoVs", "yt": "gkGQGhADoVs"},
  {"y": 2011, "t": "Alfa", "tipo": "Videoclip Infantil", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/i0TJyDfBoDU", "yt": "i0TJyDfBoDU"},
  {"y": 2011, "t": "Exploristica", "tipo": "Filme institucional", "fn": "Concepção", "real": "", "prod": "Sociedade Portuguesa de Estatística", "ag": "", "cli": "SPE", "url": "https://youtu.be/OZk5FYYMuuA", "yt": "OZk5FYYMuuA"},
  {"y": 2012, "t": "Be Say Do", "tipo": "Filme institucional", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "OPAL", "cli": "", "url": "https://www.youtube.com/watch?v=Huo3otXl4DA", "yt": "Huo3otXl4DA"},
  {"y": 2012, "t": "Baile das Palavras", "tipo": "Videoclip", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Dona Gi", "url": "https://www.youtube.com/watch?v=GX2oc0t9S1A", "yt": "GX2oc0t9S1A"},
  {"y": 2012, "t": "Vinho Verde", "tipo": "Spot Publicitário", "fn": "Animador", "real": "", "prod": "Play Audiovisuais", "ag": "OPAL", "cli": "", "url": "https://youtu.be/54gztvqgj04", "yt": "54gztvqgj04"},
  {"y": 2012, "t": "Lisboa Limpa - Zoo", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Câmara Municipal de Lisboa", "url": "https://youtu.be/olgxjht06AM", "yt": "olgxjht06AM"},
  {"y": 2012, "t": "Lisboa Limpa - Reciclagem", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Câmara Municipal de Lisboa", "url": "https://youtu.be/2hKL6mdNAEk", "yt": "2hKL6mdNAEk"},
  {"y": 2012, "t": "Lisboa Limpa - Janela", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Câmara Municipal de Lisboa", "url": "https://youtu.be/DgYN336InEc", "yt": "DgYN336InEc"},
  {"y": 2012, "t": "Lisboa Limpa - Evaristo", "tipo": "Spot Publicitário", "fn": "", "real": "", "prod": "Play Audiovisuais", "ag": "BBZ", "cli": "Câmara Municipal de Lisboa", "url": "https://www.youtube.com/watch?v=HKOtnI9CVIA", "yt": "HKOtnI9CVIA"},
  {"y": 2012, "t": "Kali, o pequeno vampiro", "tipo": "Curta Metragem", "fn": "Layout", "real": "Regina Pessoa", "prod": "Ciclope Filmes", "ag": "", "cli": "", "url": "https://youtu.be/lBsHtAh424A", "yt": "lBsHtAh424A"},
  {"y": 2012, "t": "AlPalomar - Castelo de Pombal", "tipo": "Curta Metragem", "fn": "Realizador", "real": "", "prod": "3D On", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2013, "t": "24 Horas no Espaço", "tipo": "Série", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Insizium", "ag": "", "cli": "", "url": "https://youtu.be/4t68UnNaYr0", "yt": "4t68UnNaYr0"},
  {"y": 2013, "t": "Visiokids: Sol: Amigo ou Inimigo?", "tipo": "Série", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Insizium", "ag": "", "cli": "", "url": "https://youtu.be/_hVBUFKvLpY", "yt": "_hVBUFKvLpY"},
  {"y": 2013, "t": "Visiokids: Não há fogo sem oxigénio", "tipo": "Série", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Insizium", "ag": "", "cli": "", "url": "https://youtu.be/-mTrBeKB_-Q", "yt": "-mTrBeKB_-Q"},
  {"y": 2013, "t": "Visiokids: Reduzir, reutilizar, reciclar", "tipo": "Série", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Insizium", "ag": "", "cli": "", "url": "https://youtu.be/K8boBahtWQA", "yt": "K8boBahtWQA"},
  {"y": 2013, "t": "Visiokids: Fuji ou Vesuvio?", "tipo": "Série", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Insizium", "ag": "", "cli": "", "url": "https://youtu.be/B-_6pZ5prpI", "yt": "B-_6pZ5prpI"},
  {"y": 2014, "t": "Viseu & Vinho Dão Festa", "tipo": "Spot Publicitário", "fn": "Animador", "real": "Jorge Oliveira", "prod": "Play Audiovisuais", "ag": "OPAL", "cli": "", "url": "https://youtu.be/rznSjzSKnL4", "yt": "rznSjzSKnL4"},
  {"y": 2015, "t": "Biochar/Ecochar", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "Bairro dos Livros", "ag": "", "cli": "", "url": "https://youtu.be/KBK5ifqW0C8", "yt": "KBK5ifqW0C8"},
  {"y": 2015, "t": "Pirólise Lenta produz biocarvão ecológico", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "Bairro dos Livros", "ag": "", "cli": "", "url": "https://youtu.be/GgTJhvQToU4", "yt": "GgTJhvQToU4"},
  {"y": 2015, "t": "BioPower, carvão para um churrasco ecológico", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "Bairro dos Livros", "ag": "", "cli": "", "url": "https://youtu.be/zNkX2tDBFvk", "yt": "zNkX2tDBFvk"},
  {"y": 2015, "t": "Túnel do tempo", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "Hypercube", "ag": "", "cli": "Edigma", "url": "", "yt": ""},
  {"y": 2016, "t": "Sr. Extraterrestre", "tipo": "Videoclip", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Valentim de Carvalho", "ag": "", "cli": "Gisela João", "url": "https://www.youtube.com/watch?v=X-mFf9dXnUI", "yt": "X-mFf9dXnUI"},
  {"y": 2016, "t": "Faz bem falar de amor", "tipo": "Videoclip", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Cantos da Praça", "ag": "", "cli": "Quinta do Bill", "url": "https://www.youtube.com/watch?v=L8ERBEdfOQs", "yt": "L8ERBEdfOQs"},
  {"y": 2016, "t": "Na livraria mais bonita do mundo", "tipo": "Filme institucional", "fn": "Realizador", "real": "Jorge Ribeiro", "prod": "Bairro dos Livros", "ag": "", "cli": "Livraria Lello", "url": "https://youtu.be/Wk97V5pQ_Ew", "yt": "Wk97V5pQ_Ew", "dur": "2.56 min"},
  {"y": 2016, "t": "Megalítico de Mora", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/LpRsKb8j0VY", "yt": "LpRsKb8j0VY"},
  {"y": 2017, "t": "genérico Animamundi", "tipo": "Filme institucional", "fn": "", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/Dk_luFQgqx8", "yt": "Dk_luFQgqx8"},
  {"y": 2018, "t": "Tipsy Chicken", "tipo": "Videoclip", "fn": "Realizador", "real": "", "prod": "Parir", "ag": "", "cli": "Moonshiners", "url": "https://www.youtube.com/watch?v=-ju_gsZgunE", "yt": "-ju_gsZgunE"},
  {"y": 2018, "t": "Efeito do observador", "tipo": "Videoclip", "fn": "Animador", "real": "", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "Os Azeitonas", "url": "https://www.youtube.com/watch?v=jmv3sX0_NII", "yt": "jmv3sX0_NII"},
  {"y": 2018, "t": "Sotinco Supercredito", "tipo": "Spot Publicitário", "fn": "Animador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "Sotinco", "url": "https://youtu.be/4Llz7SFJMJ8", "yt": "4Llz7SFJMJ8"},
  {"y": 2018, "t": "Pip", "tipo": "Curta Metragem", "fn": "Animação de título", "real": "", "prod": "Studio Kimchi", "ag": "", "cli": "", "url": "https://youtu.be/07d2dXHYb94", "yt": "07d2dXHYb94"},
  {"y": 2019, "t": "O Natal dos pintainhos", "tipo": "Videoclip Infantil", "fn": "Realizador", "real": "", "prod": "Play Audiovisuais", "ag": "", "cli": "", "url": "https://youtu.be/MAB0LjwtaIM", "yt": "MAB0LjwtaIM"},
  {"y": 2019, "t": "Climagir", "tipo": "Filme institucional", "fn": "", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/IIkZ51J8S5Y", "yt": "IIkZ51J8S5Y"},
  {"y": 2019, "t": "Viseu Dão Lafões | O Futuro é amanhã", "tipo": "Filme institucional", "fn": "", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/oo-7cyBNBo8", "yt": "oo-7cyBNBo8"},
  {"y": 2020, "t": "Estrelas", "tipo": "Videoclip", "fn": "Animador", "real": "", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "Tatanka", "url": "https://www.youtube.com/watch?v=TNS-dg8QBRc", "yt": "TNS-dg8QBRc"},
  {"y": 2020, "t": "Isto não é um chapéu", "tipo": "Curta Metragem", "fn": "Realizador", "real": "", "prod": "Animanostra", "ag": "", "cli": "RTP", "url": "https://www.rtp.pt/play/zigzag/p6817/isto-nao-e-um-chapeu", "yt": "", "dur": "26min", "img": "img/isto-nao-e-um-chapeu.jpg"},
  {"y": 2020, "t": "Pizzaboy Roma Mission", "tipo": "Spot Publicitário", "fn": "Co-realizador", "real": "Jorge Oliveira", "prod": "Play Audiovisuais", "ag": "", "cli": "Creative Toys Portugal", "url": "https://youtu.be/y9l2IRsFUzQ", "yt": "y9l2IRsFUzQ", "dur": "20s"},
  {"y": 2020, "t": "Sesnando Davides", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/D8BfGbTn4oQ", "yt": "D8BfGbTn4oQ"},
  {"y": 2020, "t": "Marquês de Pombal", "tipo": "Filme institucional", "fn": "Realizador", "real": "", "prod": "", "ag": "", "cli": "", "url": "https://youtu.be/VW-rVjZWlBg", "yt": "VW-rVjZWlBg"},
  {"y": 2021, "t": "Senhelo Calhim, eu sou cigana", "tipo": "Curta Metragem", "fn": "Realizador", "real": "", "prod": "Universidade Católica", "ag": "", "cli": "Câmara de Matosinhos", "url": "https://youtu.be/8pURCfPr6R8", "yt": "8pURCfPr6R8", "dur": "10 min"},
  {"y": 2021, "t": "Guide Dogs Flash", "tipo": "Curta Metragem", "fn": "Storyboard", "real": "Bruno Simões", "prod": "Studio Kimchi", "ag": "", "cli": "Guide Dogs UK", "url": "https://youtu.be/SgKKZXuiTac", "yt": "SgKKZXuiTac"},
  {"y": 2021, "t": "Star of the season", "tipo": "Spot Publicitário", "fn": "Storyboard", "real": "Bruno Simões", "prod": "Studio Kimchi", "ag": "", "cli": "Nutella", "url": "https://youtu.be/9ElkuE0Iibs", "yt": "9ElkuE0Iibs"},
  {"y": 2021, "t": "A mulher do Médico", "tipo": "Curta Metragem", "fn": "Storyboard artist", "real": "Bruno Simões", "prod": "Animanostra", "ag": "", "cli": "", "url": "https://youtu.be/IOlaFk0PUuA", "yt": "IOlaFk0PUuA"},
  {"y": 2021, "t": "Rita e Eloi", "tipo": "Série", "fn": "Background design", "real": "Rolo", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2022, "t": "As Sete Caixas", "tipo": "Série", "fn": "Co-realizador", "real": "Nuno Amorim", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2022, "t": "Sweet Spot", "tipo": "Curta Metragem", "fn": "Co-realizador", "real": "Paulo Patrício", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2022, "t": "O Natal do Aleixo", "tipo": "Série", "fn": "Diretor artístico", "real": "", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""},
  {"y": 2022, "t": "Master Moley", "tipo": "Série", "fn": "Artista de story", "real": "", "prod": "", "ag": "", "cli": "", "url": "", "yt": ""}
];

const OBRAS_EXTRA = [
  {"y": 2024, "t": "As Sete Caixas (estreia na RTP1)", "tipo": "Série", "fn": "Co-Realizador e música", "real": "Nuno Amorim", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "RTP", "url": "https://www.thetvdb.com/series/as-sete-caixas", "yt": "", "src": "web"},
  {"y": 2025, "t": "Sweet Spot (filme)", "tipo": "Curta Metragem", "fn": "Co-Realizador", "real": "Paulo Patrício", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "", "url": "", "yt": "", "src": "web"},
  {"y": 2025, "t": "Museu da Presidência da República", "tipo": "Filme institucional", "fn": "Produção", "real": "", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "Presidência da República", "url": "", "yt": "", "src": "web"},
  {"y": 2025, "t": "O Lobo que Não Tinha Onde Cair Morto", "tipo": "Curta Metragem", "fn": "Produtor associado", "real": "Ricardo Adrêgo", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "", "url": "", "yt": "", "src": "web"},
  {"y": 2025, "t": "Roupa Velha", "tipo": "Curta Metragem", "fn": "Produtor associado", "real": "Alice Eça Guimarães", "prod": "Os Filmes do Pinguim", "ag": "", "cli": "", "url": "", "yt": "", "src": "web"}
];

const TODAS = OBRAS.concat(OBRAS_EXTRA).sort((a, b) => a.y - b.y);

// Períodos do filme (título, subtítulo, cor da cena)
const PERIODOS = [
  {de: 1999, titulo: "Primeiros traços",          sub: "Animador em séries, curtas e videoclipes",          cor: "#5b7cff"},
  {de: 2004, titulo: "Os Espadinhas",             sub: "A primeira série como realizador",                   cor: "#f0b44a"},
  {de: 2008, titulo: "O Estado em animação",      sub: "Simplex, Empresa na Hora e Os Pintainhos",           cor: "#2fb3bf"},
  {de: 2012, titulo: "Ciência para miúdos",       sub: "Visiokids, Lisboa Limpa e Kali, o pequeno vampiro",  cor: "#6fcf7f"},
  {de: 2016, titulo: "Videoclipes e livrarias",   sub: "Gisela João, Quinta do Bill e a Livraria Lello",     cor: "#ff7f98"},
  {de: 2020, titulo: "Isto não é um chapéu",      sub: "Foxy e Meg na RTP, storyboards para a Nutella",      cor: "#c08cff"},
  {de: 2023, titulo: "Os Filmes do Pinguim",      sub: "As Sete Caixas, Sweet Spot e novas produções",       cor: "#7fb8ff"}
];

// Cor e altura (no jogo) por tipo de obra
const TIPOS = {
  "Spot Publicitário":   {c: "#ffb347", h: 34, s: "Spot"},
  "Videoclip":           {c: "#ff6f91", h: 46, s: "Videoclip"},
  "Videoclip Infantil":  {c: "#ffd23f", h: 42, s: "Infantil"},
  "Filme institucional": {c: "#4fc3d9", h: 52, s: "Institucional"},
  "Série":               {c: "#8fdc7a", h: 64, s: "Série"},
  "Curta Metragem":      {c: "#c08cff", h: 78, s: "Curta"}
};
const realizou = o => /realiza/i.test(o.fn);   // inclui co-realização
// Miniaturas guardadas em img/ (as das obras no YouTube: img/<id>.jpg)
const thumb = o => o.img || (o.yt ? `img/${o.yt}.jpg` : "");
