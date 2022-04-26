import styled from "styled-components";

export const Navbar = styled.nav`

  background: ${(props) => props.theme.colors.bgPanel};

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .navbar li {
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s;
    width: 100%;
  }

  .navbar li:hover {
    background-color: #3664ff;
    transition: all 0.3s;
  }

  .navbar li a {
    font-weight: 600;
    display: inline-block;
    color: var(--cinza);
    font-size: 1.8rem;
    padding: 10px 0;
    width: 100%;
  }

  .navbar li a:hover {
    color: #fff;
  }

  @media (max-width: 700px){
    .navbar {
      flex-direction: column;   
    }
    .navbar li a {
      padding: 20px 0;
    }
  }
`;
