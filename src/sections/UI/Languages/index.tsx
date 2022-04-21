import { Linguagens } from "./styles";

const Linguagem: React.FC = () => {
  const tecnologias = [
    {
      tec: "HTML5"
    },
    {
      tec: "CSS3"
    },
    {
      tec: "JavaScript/JQuery"
    },
    {
      tec: "SASS"
    },
    {
      tec: "Bootstrap"
    },
    {
      tec: "ReactJS"
    },
    {
      tec: "Styled-Components"
    },
    {
      tec: "TypeScript"
    },
    {
      tec: "PHP"
    },
    {
      tec: "MySQL"
    },
    {
      tec: "NodeJS"
    },
    {
      tec: "Visual Studio Code"
    },
    {
      tec: "Figma"
    }
  ];
  return (
    <Linguagens>
      <ul>
        {tecnologias.map((value, index) => {
          return <li key={index}>🎓 {value.tec}</li>;
        })}
      </ul>
    </Linguagens>
  );
};

export default Linguagem;
