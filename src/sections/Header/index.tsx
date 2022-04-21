import React from "react";

import { Header } from "./styles";

import Logo from "../UI/Logo";
import Navbar from "../UI/Navbar";
import DropDown from "../UI/DropDown";

import Container from "../../components/Container";

const HeaderSection: React.FC = () => {
  return (
    <Header>
      <Container>
        <section className="header">
          <Logo />
          <DropDown />
        </section>
      </Container>
      <Navbar />
    </Header>
  );
};

export default HeaderSection;
