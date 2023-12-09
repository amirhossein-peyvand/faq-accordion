import { useMediaQuery } from "react-responsive";
import "./sass/App.scss";
import mobileBg from "./assets/background-pattern-mobile.svg";
import desktopBg from "./assets/background-pattern-desktop.svg";
import Card from "./components/Card";

function App() {
  const isGreaterThan600px = useMediaQuery({ query: "(min-width:600px)" });

  return (
    <div className="app">
      <section className="bg">
        <img src={isGreaterThan600px ? desktopBg : mobileBg} alt="background" />
      </section>
      <Card />
    </div>
  );
}

export default App;
