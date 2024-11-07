# Conversor de Moedas

Um aplicativo de conversão de moedas que utiliza a API ExchangeRate-API para buscar taxas de câmbio em tempo real. Os usuários podem inserir o valor e escolher as moedas de origem e destino para realizar a conversão.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Diferenças em Relação ao Projeto Anterior](#diferencas-em-relacao-ao-projeto-anterior)
- [GIF](#gif)
- [Projeto antigo](#projeto-antigo)

## Visão Geral

Este projeto é uma versão aprimorada de um conversor de moedas básico. A diferença principal em relação à versão anterior é que ele utiliza a API ExchangeRate-API para buscar taxas de câmbio em tempo real, garantindo que os valores convertidos estejam sempre atualizados. A interface também foi aprimorada para uma experiência visual moderna e atraente.

## GIF

![conversor22](https://github.com/user-attachments/assets/6857c813-6c21-4eb0-b7d9-6526746a707d)


## Diferenças em Relação ao Projeto Anterior

Na versão anterior do projeto, as taxas de câmbio eram definidas manualmente e exigiam atualizações periódicas para manter a precisão das conversões. Com a nova versão:

- Atualização Automática: O sistema agora usa uma API externa, ExchangeRate-API, para obter taxas de câmbio atualizadas automaticamente, o que elimina a necessidade de atualizações manuais.

- Precisão e Confiabilidade: Como os valores são obtidos em tempo real, o usuário pode confiar que está obtendo uma conversão precisa, especialmente útil em momentos de flutuação de câmbio.

- Interface Modernizada: A interface recebeu uma reformulação visual, utilizando gradientes e elementos dinâmicos, como o símbolo de moeda ajustável e placeholder dinâmico, para uma experiência mais intuitiva e agradável.

## Funcionalidades

- Conversão de moedas entre Dólar (USD), Euro (EUR) e Real (BRL).
- Atualização dinâmica do símbolo da moeda com base na moeda selecionada.
- Mensagem de erro em caso de falha na obtenção da taxa de câmbio.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- [ExchangeRate-API](https://www.exchangerate-api.com) 

## Projeto antigo

- https://github.com/juliadutraves/conversor-moeda