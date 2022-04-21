import styled from "styled-components";

export const Navbar = styled.nav`
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--bg);
  }

  .menu li {
    transition: all 0.3s;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .menu li:hover {
    transition: all 0.3s;
    background-color: var(--color-headings);
    color: #fff;
  }

  .menu li a {
    font-weight: 600;
    display: inline-block;
    color: var(--color-text);
    font-size: 1.9rem;
    padding: 10px 0;
    width: 100%;
    text-transform: uppercase;
  }

  .menu li a:hover {
    color: var(--branco);
  }

  @media (max-width: 700px){

    .menu{
      flex-direction: column;
      justify-content: center;
    }

    /*.menu li:hover{
      transition: none;
      background-color: transparent;
  }

    .menu li a:hover{
      color: var(--color-text);
  }*/

    .menu li+li{
      border-top: 1px solid var(--bg-panel);
    }

    .menu li a {
      padding: 15px 0;
    }

  }
`;
