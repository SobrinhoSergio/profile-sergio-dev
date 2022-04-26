import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { DARK } from "../../constants/theme";
import useToggleTheme from "../../hooks/useToggleTheme";

import { Header } from "./styles";

import Logo from "../UI/Logo";
import Burger from "../UI/Burger";
import Navbar from "../UI/Navbar";

import Container from "../../components/Container";


const HeaderSection: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useToggleTheme();

  return (
    <Header>
      <Container>
        <section className="header">
          <Logo />

          <Switch
            onChange={toggleTheme}
            checked={title === DARK}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
          />

          <Burger />
          
        </section>
      </Container>
      <Navbar />
    </Header>
  );
};

export default HeaderSection;
