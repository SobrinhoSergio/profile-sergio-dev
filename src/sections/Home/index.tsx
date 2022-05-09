import { Home } from "./styles";

import Container from "../../components/Container";

const HomeSection: React.FC = () => {
  return (
    <Home id="home">
      <Container>
          <hgroup className="principal">
            <h1>Fala, Dev sou </h1>
            <h2>Sérgio Sobrinho</h2>
            <h1>
              Desenvolvedor de Software <span className="destaque">Jr.</span>
            </h1>
          </hgroup>
      </Container>
    </Home>
  );
};

export default HomeSection;
