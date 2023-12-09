import "./sass/App.scss";
import mobileBg from "./assets/background-pattern-mobile.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <section className="bg">
        <img src={mobileBg} alt="mobileBg" />
      </section>
      <Card />
    </div>
  );
}

export default App;
