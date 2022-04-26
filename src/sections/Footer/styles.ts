import styled from "styled-components";

export const Footer = styled.footer`

  background: ${(props) => props.theme.colors.bgPanel};
  
  .dev {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    align-items: center;
    background: ${(props) => props.theme.colors.bg};
  }

  .dev .i {
    margin-top: 30px;
    font-weight: normal;
  }

  .dev .i a {
    color: var(--color-headings);
    font-size: 3rem;
  }
`;
