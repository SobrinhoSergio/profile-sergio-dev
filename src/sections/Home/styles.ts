import styled from "styled-components";
import { bg2 } from "../../assets";

export const Home = styled.main`
  background-image: url(${bg2});
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

  .principal h2{
    font-size: 4.5rem;
    margin: 25px 0;
    color: var(--color-headings);
    font-style: italic;
}


  .principal h1 {
    font-size: 3.5rem;
    color: #c4c1b3;
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
