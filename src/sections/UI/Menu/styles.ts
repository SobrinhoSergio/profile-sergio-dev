import styled from "styled-components";

interface INav {
  open: boolean;
}

export const Menu = styled.aside<INav>`
  position: fixed;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.bg};
  transition: all 150ms ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }

  ul li a {
    font-size: 4rem;
    color: var(--color-headings);
  }

  @media (max-width: 700px) {
    display: none;
  }

`;
