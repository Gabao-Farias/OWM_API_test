<h1 align="center">⛅ Teste de API da OpenWeather ⛈️</h1>
<h4 align="center">Projeto usando React Native para demonstrar a API do OpenWeatherMap </h4>

<p align="center">
    <a href="https://reactnative.dev/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width=250px />
    </a>
</p>

<p align="center">
    <a href="https://openweathermap.org/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/OpenWeather-Logo.jpg" width=350px />
    </a>
</p>

<h1 align="center">
 <img src="https://img.shields.io/badge/License-MIT-%23A214D0">
 <img src="https://img.shields.io/github/last-commit/Gabao-Farias/OWM_API_test">
 <img src="https://img.shields.io/github/issues/Gabao-Farias/OWM_API_test">
</h1>

## Sumário
* [Sobre](#ℹ%EF%B8%8F-sobre)
* [Capturas de tela](#%EF%B8%8F-capturas-de-tela)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias e ferramentas envolvidas](#%EF%B8%8F-tecnologias-e-ferramentas-utilizadas)
* [Como instalar?](#-como-instalar)
  * [Ambiente](#-ambiente)
  * [Clone](#-clone)
  * [Dependências](#-dependências)
  * [Dispositivo](#-dispositivo)

### ℹ️ Sobre
Esse é um projeto serve para demonstração e teste da API do OpenWeather.

### 🖼️ Capturas de tela
<h1>
 <img height="500" src="src\assets\Screenshot_20200811-005215_OWM_API_test.jpg">
 <img height="500" src="src\assets\Screenshot_20200811-005222_OWM_API_test.jpg">
 <img height="500" src="src\assets\Screenshot_20200811-005250_OWM_API_test.jpg">
 <img height="500" src="src\assets\Screenshot_20200811-005304_OWM_API_test.jpg">
</h1>

### 🥏 Funcionalidades
* Podes fazer consultas rápidas preestabelecidas sem habilitar a própria localização.
* O botão de atualizar, busca a localização atual do dispositivo (se autorizado...).
* ⚠️ O ícone de condição climática pode não ser exibido para dispositivos IOS.

<p align="center">
  <img src="http://openweathermap.org/img/wn/10d@2x.png" />
</p>

  * Essa imagem provém dessa [URL http](http://openweathermap.org/img/wn/10d@2x.png), porém, por motivos de segurança, IOS só se conecta com requisições https. Veja mais sobre, em https://github.com/facebook/react-native/issues/8520.
* Consulta de previsão de tempo.
* Consulta por digitação da cidade.

### ⚙️ Tecnologias e ferramentas utilizadas
* [React Native](https://reactnative.dev/).
* [OpenWeatherMap API](https://openweathermap.org/).
* [Insomnia](https://insomnia.rest/), ferramenta para testar APIs.

### 🚀 Como instalar?
Se você nunca lidou com algum projeto em React Native antes, deves configurar seu ambiente antes para executá-lo. Caso já tenha configurado, pode começar a partir do [Clone](#clone).

#### Ambiente
Nesse [artigo](https://medium.com/@guilherme_andrade2/instala%C3%A7%C3%A3o-react-native-cli-em-windows-f6c5b59a29cb) é mostrado como instalar o React Native, Node, Python2, jdk, AndroidStudio e, sim, é bastante coisa, mas não se preocupe, pois os passos são bem simples, ou, se achar um vídeo mais conveniente, eu particularmente sugiro [esse](https://www.youtube.com/watch?v=pqHMvj5_Xs0).

#### Clone
Com o ambiente já preparado, faça o clone do repositório.

````
git clone https://github.com/Gabao-Farias/OWM_API_test.git
````

#### Dependências
O projeto possui as seguintes dependências.

````
"dependencies": {
  "@react-native-community/geolocation": "^2.0.2",
  "axios": "^0.19.2",
  "date-fns": "^2.15.0",
  "react": "16.13.1",
  "react-native": "0.63.2",
  "react-native-linear-gradient": "^2.5.6",
  "react-native-vector-icons": "^7.0.0",
  "styled-components": "^5.1.1"
},
````

Instale-as utilizando:

````
npm install @react-native-community/geolocation axios react-native-linear-gradient react-native-vector-icons styled-components date-fns
````

#### Dispositivo
Agora já é possível rodar no seu emulador. Para rodar os comandos certifique-se que já esteja na raíz do projeto.

````
react-native run-android
ou
react-native run-ios
````

Para rodar no dispositivo físico, basta habilitar o **modo desenvolvedor** do smartphone, ligá-lo ao PC com USB e rodar o mesmo comando.

### Autor

<p>
  <a href="https://github.com/Gabao-Farias">
    <img style="border-radius: 15%" width=100 src="https://avatars1.githubusercontent.com/u/61251953?s=460&u=0ab0136d89a2577f4a73f1848bc1f849634d99cd&v=4"/>
  </a>
</p>

Feito com :heart:

<a href="https://www.linkedin.com/in/gabriel-taborda-farias-26b9b8160/">
  <img src="https://img.shields.io/badge/-Gabriel Taborda Farias-0077b5?style=for-the-badge&labelColor=0077b5&logo=linkedin&logoColor=white"/>
</a>

<a href="mailto:gabrielfariasbass@gmail.com">
  <img src="https://img.shields.io/badge/-gabrielfariasbass@gmail.com-c14438?style=for-the-badge&labelColor=c14438&logo=gmail&logoColor=white"/>
</a>

<a href="https://app.rocketseat.com.br/me/gabriel-taborda-farias-1589471319">
  <img src="https://img.shields.io/badge/%F0%9F%9A%80-rocketseat-8257e6?style=for-the-badge&labelColor=121214"/>
</a>
