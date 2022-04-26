import React from "react";

import { Footer } from "./styles";

import Logo from "../UI/Logo";

import Phrase from "../../components/Phrase";
import Container from "../../components/Container";

const FooterSection: React.FC = () => {
  return (
    <Footer>
      <Container>
        <Phrase>" Ainda não cheguei onde eu quero, no entanto, estou cada vez <span className="destaque">mais perto!</span> "</Phrase>
      </Container>
      
      <aside className="dev">
          <Logo />
          <h1 className="i">
            <a href="mailto:sobrinhosergio00@gmail.com">
              Desenvolvido por Sérgio Sobrinho
            </a>
          </h1>
      </aside>
      
    </Footer>
  );
};

export default FooterSection;
