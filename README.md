<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lcoalves/silhouette-flooding-challenge?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/lcoalves">
    <img alt="Made by Lucas Alves" src="https://img.shields.io/badge/made%20by-Lucas%20Alves-%2304D361">
  </a>

  <a href="https://github.com/lcoalves/silhouette-flooding-challenge/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/lcoalves/silhouette-flooding-challenge?style=social">
  </a>
</p>

### Desafio
Imagine um array de inteiros onde cada posição contém a altura de uma silhueta:

![image](https://github.com/lcoalves/silhouette-flooding-challenge/blob/main/.github/silhouette.png)

O objetivo deste desafio é descobrir o quanto de água caberia se a despejarmos do topo, como
demonstrado no desenho abaixo:

![image](https://github.com/lcoalves/silhouette-flooding-challenge/blob/main/.github/silhouette-filled.png)

A resposta neste caso seria: `0 + 0 + 8 + 5 + 0 + 6 + 5 + 8 + 4 = 36`

O desafio consiste em desenvolver um programa que receba uma entrada com as especificações das silhuetas, seguindo o formato:
- A primeira linha contém um número N (onde 1 ≤ N ≤ 100) com o número de casos do arquivo, sendo cada caso composto por 2 linhas
- A primeira linha de cada caso contém o tamanho do array
- A segunda linha de cada caso contém o array sendo cada posição separada por um espaço

O resultado deve conter o acúmulo de água em cada caso do arquivo.

Exemplo:

![image](https://github.com/lcoalves/silhouette-flooding-challenge/blob/main/.github/example.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [NodeJS](https://nodejs.org/en/) - Environment runtime
- [Yarn](https://yarnpkg.com/getting-started/install) - Packager manager

What things you need to install the software and how to install them

https
```
git clone https://github.com/lcoalves/silhouette-flooding-challenge.git
```
ssh
```
git clone git@github.com:lcoalves/silhouette-flooding-challenge.git
```

### Installing

A step by step series of examples that tell you how to get a development env running

#### Databases
First install dependencies
```
cd silhouette-flooding-challenge && yarn
```
Next open the code
```
code .
```

#### Usage
Start execution
```
yarn dev
```

## Authors

* **Lucas Alves** - *IT Development Specialist* - [GitHub profile](https://github.com/lcoalves)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/lcoalves/ignite-corrigindo-o-codigo/blob/master/LICENSE) file for details

## Acknowledgments

* Node
