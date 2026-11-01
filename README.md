# Mercado Tycoon (protótipo)

Jogo mobile de gerenciar um supermercado, em 3D com câmera de cima. O jogador repõe as prateleiras, atende no caixa, desbloqueia produtos e marcas, amplia a loja e contrata funcionários. A monetização planejada é por anúncios.

## Como jogar

Abra o `index.html` no navegador (celular ou PC).

- **Mover:** arraste o dedo na tela (aparece um joystick) ou use WASD / setas.
- **Repor:** pegue as caixas nos pallets do fundo da loja e leve até o círculo na frente da prateleira.
- **Cobrar:** fique no círculo amarelo do caixa.
- **Desbloquear:** pise nos quadrados verdes.
- **Melhorias:** capacidade de carga, velocidade, tamanho das prateleiras e marcas dos produtos.

## Anúncios

Por enquanto os anúncios são simulados (uma tela de 3 segundos) em dois lugares:

- **Dinheiro 2x:** dobra o que entra por 60 segundos.
- **Assistir anúncio:** dá dinheiro na hora.

O vídeo de verdade entra quando o jogo for publicado em um portal (CrazyGames, Poki) ou virar app.

## Tecnologia

Um único arquivo HTML com Three.js carregado de CDN. O progresso fica salvo no navegador (localStorage).
