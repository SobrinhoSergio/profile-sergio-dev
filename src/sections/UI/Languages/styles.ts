import styled from "styled-components";

export const Linguagens = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
  }

  ul li {
    font-size: 2rem;
    color: var(--color-text);
    margin: 20px 0;
    background-color: var(--bg);
    padding: 10px;
    cursor: pointer;
    transition: transform 0.5s;
  }

  ul li:hover {
    transform: scale(1.3);
    transition: transform 0.5s;
  }

  @media (max-width: 700px){
    ul {
      row-gap: 2rem;
      grid-template-columns: 100%;
    }
  }
`;
