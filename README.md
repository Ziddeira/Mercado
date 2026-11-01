# SuperMKT: Supermercado Tycoon

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

## Evolução da loja

1. Água → Salgadinhos → Refrigerante; contratar operador(a) do caixa 1 e o primeiro estoquista.
2. Frutas, Laticínios e Limpeza; abrir o caixa 2 e contratar operador(a); segundo estoquista.
3. **Ampliar a loja** para o lado: Pães, Congelados, Higiene e Café; caixas 3 e 4 com operadores; terceiro estoquista.
4. **Ampliar para os fundos**: o estoque vai para o fundo e abre espaço para:
   - **Banheiros**: os clientes usam, gastam papel e às vezes sujam. Sem papel ou sujo, o cliente vai embora sem pagar. Pegue papel no pallet branco do estoque e fique perto da sujeira para limpar. A **faxineira** faz as duas coisas sozinha.
   - **Lanchonete**: a chapa prepara os lanches; leve-os ao balcão vermelho. Os clientes compram, comem nas mesas e deixam sujeira. **Atendente** leva os lanches ao balcão; **ajudante de mesas** limpa.

## Modo de teste

Abra o jogo com `#teste` no fim do endereço (ex.: `.../#teste` ou `.../#teste-inverno`). Aparece um painel com **+$50.000** e **Liberar tudo**. Tire isso antes de publicar o jogo de verdade.

Zoom: botões **+ / −**, pinça com dois dedos ou roda do mouse.

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

## App Android

O app usa o [Capacitor](https://capacitorjs.com) (identificador `com.ziddeira.supermkt`).

- A cada envio para a `main`, o GitHub Actions monta o **APK de teste** e publica na página **Releases** (versão "teste"), arquivo `SuperMKT-teste.apk`.
- `npm run build:www` monta a pasta `www/` com o three.js local, para o jogo funcionar offline dentro do app.
- Ícone e tela de abertura saem de `resources/`.
