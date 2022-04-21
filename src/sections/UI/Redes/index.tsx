import { GrGithub, GrLinkedin, GrInstagram, GrFacebook } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

const Home: React.FC = () => {
  const icone = [
    {
      i: <GrGithub />
    },
    {
      i: <GrLinkedin />
    },
    {
      i: <GrInstagram />
    },
    {
      i: <GrFacebook />
    },
    {
      i: <FaWhatsapp />
    }
  ];
  return (
    <ul>
      {icone.map((value, index) => {
        return (
          <li key={index}>
            <a href="#"> {value.i}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
