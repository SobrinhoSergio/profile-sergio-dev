import styled from "styled-components";

import { Link } from 'react-scroll'

export const Navbar = styled.nav`
  background: ${(props) => props.theme.colors.bgPanel};
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;   
  }
`;


export const NavItem = styled.li`
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s;
  width: 100%;
 
  &:hover {
    background-color: var(--color-headings);
    transition: all 0.3s;
  }

  a {
    font-weight: 600;
    display: inline-block;
    color: var(--grey);
    font-size: 1.8rem;
    padding: 10px 0;
    width: 100%;
  }

  a:hover {
    color: var(--white);
  }
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  display: inline-block;
  color: var(--grey);
  font-size: 1.8rem;
  padding: 10px 0;
  width: 100%;

  &:hover {
    color: var(--white);
  }

  @media (max-width: 700px) {
    padding: 20px 0;
  }
`;