import { Navbar } from "./styles";

const MenuLinks: React.FC = () => {
  const linksMenu = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "About",
      link: "#about"
    },
    {
      name: "skills",
      link: "#skills"
    },
    {
      name: "Appliance",
      link: "#appliance"
    }
  ];

  return (
    <Navbar>
      <ul className="navbar">
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
