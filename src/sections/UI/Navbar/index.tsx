import { Navbar } from "./styles";

const MenuLinks: React.FC = () => {
  const linksMenu = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "Sobre",
      link: "#sobre"
    },
    {
      name: "Habilidades",
      link: "#hab"
    },
    {
      name: "Tecnologias",
      link: "#tec"
    }
  ];
  return (
    <Navbar>
      <ul className="menu">
        {linksMenu.map((value, index) => {
          return (
            <li key={index}>
              <a href={value.link}> {value.name}</a>
            </li>
          );
        })}
      </ul>
    </Navbar>
  );
};

export default MenuLinks;
