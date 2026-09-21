Este ficheiros já existem como placeholders (imagens cinzentas com
texto e um pequeno vídeo a preto) só para o projeto arrancar sem
erros no Vite. Substitui-os pelos teus ficheiros reais, mantendo
sempre o MESMO NOME (ou então muda também a referência em Home.vue):

- hero.mp4         -> o vídeo de abertura (usado em src/views/Home.vue)
- hero-poster.jpg  -> imagem estática mostrada enquanto o vídeo carrega
- concept.jpg      -> imagem da secção "O Conceito"
- team.jpg         -> imagem de fundo da secção "Equipa" na home

Nas páginas Pratos.vue e Equipa.vue, as fotos dos pratos e da equipa
estão como placeholders (losangos cinzentos, sem ficheiro) -- substitui
os elementos `<div class="...__media">` / `<div class="...__photo">`
por tags <img> apontando para as tuas próprias fotos quando as tiveres.
