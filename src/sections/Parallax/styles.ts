import styled from "styled-components";
import { bg1 } from "../../assets";

export const Parallax = styled.section`
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  background-attachment: fixed;
  height: 400px;
`;
