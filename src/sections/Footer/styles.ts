import styled from "styled-components";

export const Footer = styled.footer`
  .dev {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    align-items: center;
    background-color: var(--bg);
  }

  .email {
    margin-top: 30px;
  }

  .email a {
    color: var(--color-headings);
    font-size: 3rem;
    text-decoration: underline;
  }
`;
