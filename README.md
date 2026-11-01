# Mercado Tycoon (protótipo)

Jogo mobile de gerenciar um supermercado, em 3D com câmera de cima. O jogador repõe as prateleiras, atende no caixa, desbloqueia produtos e marcas, amplia a loja e contrata funcionários. A monetização planejada é por anúncios.

## Como jogar

Abra o `index.html` no navegador (celular ou PC).

- **Mover:** arraste o dedo na tela (aparece um joystick) ou use WASD / setas.
- **Repor:** pegue as caixas nos pallets do fundo da loja e leve até o círculo na frente da prateleira.
- **Cobrar:** fique no círculo amarelo do caixa.
- **Desbloquear:** pise nos quadrados verdes.
- **Melhorias:** capacidade de carga, velocidade, tamanho das prateleiras e marcas dos produtos.

## Estações do ano

As árvores e o chão mudam com a estação real, pelo calendário dos EUA (primavera em 20/mar, verão em 21/jun, outono em 22/set, inverno em 21/dez). No inverno cai neve e no outono caem folhas. Para testar uma estação, abra o jogo com `#primavera`, `#verao`, `#outono` ou `#inverno` no fim do endereço.

## Anúncios

Por enquanto os anúncios são simulados (uma tela de 3 segundos) em dois lugares:

- **Dinheiro 2x:** dobra o que entra por 60 segundos.
- **Assistir anúncio:** dá dinheiro na hora.

O vídeo de verdade entra quando o jogo for publicado em um portal (CrazyGames, Poki) ou virar app.

## Tecnologia

Página HTML com Three.js carregado de CDN e os personagens em `models/` (arquivos .glb). O progresso fica salvo no navegador (localStorage).

## Créditos

- Personagens: **Ultimate Animated Character Pack (nov/2019)**, de [Quaternius](https://quaternius.com), licença CC0 (domínio público, uso comercial liberado). Em `models/`, reduzidos para conter só as animações usadas (parado, andando, correndo).
- Cidade: **Ultimate Nature Pack**, **Buildings Pack**, **Textured Building Pack** e **Realistic Car Pack**, de Quaternius (CC0). Em `models/env/`, comprimidos com meshopt.
- Ícones e ícone do app (`assets/`): gerados por IA para o projeto.
- Prateleiras, pallets, balcão, produtos e piso: modelados em código a partir das imagens de referência.
