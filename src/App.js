import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />

      <div class="gridbox gridmain">
        <div class="main">
          <h1>Growthy Investors</h1>
          <p>Una empresa dediada a remarcar el potencial del mercado digital</p>
        </div>
      </div>
      <div class="gridbox gridright">
        <div class="right">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una empresa dedicada a hacer crecer la suya de manera
            exponecial en el mercado en el que desee colocarse.
          </p>
          <h2>¿Donde encontrarnos?</h2>
          <p>
            <a href="https://growthyinvestors.com/">growthyinvestors.com</a>
          </p>
          <h2>Contáctanos</h2>
          <p>
            <a href="https://growthyinvestors.com/contact">Contacto</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
