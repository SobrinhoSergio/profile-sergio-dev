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
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dark-mode {
    display: none;
  }

  .redes-sociais{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }

  .redes-sociais li a {
    font-size: 4rem;
    color: var(--color-headings);
  }

  @media (max-width: 700px) {
    
    .redes-sociais{
      height: 80vh;
      justify-content: space-between;
    }

    .dark-mode {
      display: block;
      margin-top: 20px;
    }
  }

`;
