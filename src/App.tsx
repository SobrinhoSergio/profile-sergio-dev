import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Main from "./sections/Main";
import GlobalStyle from "./global/GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
