import styled from "styled-components";
import { bg } from "../../assets";

export const Home = styled.main`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: color;
  background-attachment: fixed;
  padding: 250px 0;
  width: 100%;

  .principal {
    text-transform: uppercase;
    text-align: center;
  }

  .principal h2 {
    font-size: 4.5rem;
    margin: 25px 0;
    color: #3664ff;
  }

  .principal h1 {
    font-size: 3.5rem;
    color: #c4c1b3;
  }

  #maquina::after {
    content: "|";
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes scroll-down {
    0% {
      opacity: 0;
      transform: translate3d(0, -15px, 0);
    }
    30% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
    }
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
