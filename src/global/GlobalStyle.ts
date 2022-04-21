import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #161616;
  --bg-panel: #181818;
  --color-headings: #0077ff;
  --color-text: #fff;
  --branco: #fff;
  --amarelo: #fdd20d;
  --azul: #0445f7;
  --azul-forte: #003957;
  --sombra: #191919;
  --cinza: #aeaeae;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

button {
  cursor: pointer;
}

html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
  /*scroll-behavior: smooth;
    scroll-padding-top: 90px;*/
}

body {
  background-color: var(--bg-panel);
  color: var(--color-text);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

.destaque {
  color: var(--color-headings);
}
`;

export default GlobalStyles;
