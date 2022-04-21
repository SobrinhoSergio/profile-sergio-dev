import { Habilidades } from "./styles";

import Text from "../../../components/Text";

const Hab: React.FC = () => {
  const skills = [
    {
      title: "Programação",
      description:
        "Desenvolvimento de Sistemas Web, Front/Back End com a utilização de várias tecnologias"
    },

    {
      title: "Mobile",
      description:
        "Desenvolvimento de Aplicativos e Sistemas Web responsivos para a melhor experiência do usuário, em qualquer tipo de dispositivos."
    },

    {
      title: "Skills",
      description:
        "Bom desempenho em equipe, boa comunicação e focado. Aprendizado rápido, e resolução de problemas com metodologias de sucesso."
    }
  ];
  return (
    <Habilidades>
      {skills.map((value, index) => {
        return (
          <div key={index} className="habilidade">
            <div className="conhecimento">
              <h3>{value.title}</h3>
              <Text>{value.description}</Text>
            </div>
          </div>
        );
      })}
    </Habilidades>
  );
};

export default Hab;
