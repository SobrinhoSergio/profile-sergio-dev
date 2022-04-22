import { Menu } from "./styles";

import Redes from "../Redes";

type Props = {
  open: boolean;
};

function MenuSocial(props: Props) {
  return (
    <Menu open={props.open}>
      <Redes />
    </Menu>
  );
}

export default MenuSocial;
