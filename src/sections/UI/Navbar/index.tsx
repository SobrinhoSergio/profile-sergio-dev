import * as S from "./styles";

import { animateScroll } from 'react-scroll'
 
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
    },
    {
      name: "Contact",
      link: "#contact"
    }
  ];
  
  return (
    <S.Navbar>
      <S.NavMenu>
        {linksMenu.map((value, index) => {
          return (
            <S.NavItem key={index}>
              <S.NavLink 
                to={value.link}
		smooth={true}
		duration={500}
                spy={true}
                exact={true}
                offset={-80}
                                
              > 
                {value.name}
              </S.NavLink>
            </S.NavItem>
          );
        })}
      </S.NavMenu>
    </S.Navbar>
  );
};

export default MenuLinks;
