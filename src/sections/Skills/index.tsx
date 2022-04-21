import { Skills } from "./styles";

import Habilidades from "../UI/Habilidades";

import Title from "../../components/Title";
import Container from "../../components/Container";

const SkillsSection: React.FC = () => {
  return (
    <Skills>
      <Container>
        <Title>Habilidades / Skills 💼</Title>
        <Habilidades />
      </Container>
    </Skills>
  );
};

export default SkillsSection;
