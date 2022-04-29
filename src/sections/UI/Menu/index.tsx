import { Menu } from "./styles";

import Redes from "../Redes";
import DarKMode from '../DarkMode';

type Props = {
  open: boolean;
};

function MenuSocial(props: Props) {
  return (
    <Menu open={props.open}>
      <Redes />
      <DarKMode />
    </Menu>
  );
}

export default MenuSocial;
