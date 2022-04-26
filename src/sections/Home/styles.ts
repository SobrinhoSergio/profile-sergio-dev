import styled from "styled-components";
import { bg3 } from "../../assets";

export const Home = styled.main`
  background-image: url(${bg3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  background-attachment: fixed;
  padding: 250px 0;
  width: 100%;

  .principal {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .principal h2{
    font-size: 4.5rem;
    margin: 25px 0;
    color: var(--color-headings);
    font-style: italic;
    border-right: 3px solid rgba(255, 255, 255, 0.75);
    white-space: nowrap;
    overflow: hidden;
    animation: blinkCursor 500ms steps(40) infinite normal, typing 4s steps(40) 1s normal both;
  }

  @keyframes typing {
    from {
        width: 0;
    }
    to {
        /* Altere o Width de acordo com o tamanho do seu texto para utilizar corretamente o efeito */
        width: 9em;
    }
}

@keyframes blinkCursor {
    from {
        border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
        border-right-color: transparent;
    }
}

  .principal h1 {
    font-size: 3.5rem;
    color: var(--cinza);
  }

  @media (max-width: 700px){

    .principal h2{
      font-size: 3.5rem;
      margin: 20px 0;
    }
  
    .principal h1{
      font-size: 2.5rem;
    }
  }
`;
