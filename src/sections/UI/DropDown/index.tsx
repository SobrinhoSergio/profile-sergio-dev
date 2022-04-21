import { useState } from "react";

import { DropDownMenu } from "./styles";

import RedesSociais from "../Redes";

const Dropdown: React.FC = () => {

  return (
    <DropDownMenu>
      <div className="menu-links">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className="flash">
        <RedesSociais />
      </div>
    </DropDownMenu>
  );
};

export default Dropdown;
