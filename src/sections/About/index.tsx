import { About } from "./styles";

import Button from "../../components/Button";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Container from "../../components/Container";
import RedesSociais from "../UI/Redes";

import ScrollAnimation from "react-animate-on-scroll";

import { profile, curriculo } from "../../assets";

const AboutSection: React.FC = () => {
  return (
    <About id="about">
      <Container>
        <section className="sobre-min">
          <article className="descricao">
          <ScrollAnimation animateIn="fadeInUp">
            <img className="profile-pic" src={profile} alt="Imagem Profile" />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
              <Title>
                Dev. <span className="destaque">Full Stack</span> 💻
              </Title>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <Text>
                Fala, Dev. Meu nome é Sérgio Sobrinho. Sou desenvolvedor Full
                Stack, Trabalho/Estudo deversas tecnologias Back - End, Front -
                End e mais Ferramentas a fim de aprimorar meus conhecimentos em
                programação exponencialmente, para cada vez mais me tornar um
                profissional de exelência! 🗡
              </Text>
            </ScrollAnimation>
           
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <Button>
                <a href={curriculo} target="_blank">
                  Resume 📄
                </a>
              </Button>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <aside className="sociais">
              <RedesSociais />
            </aside>
            </ScrollAnimation>
           
          </article>
        </section>
      </Container>
    </About>
  );
};

export default AboutSection;
