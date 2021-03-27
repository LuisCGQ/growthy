import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Pagina from "./components/Pagina";
import Bolsa from "./components/Bolsa";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import analistas from "./img/analistas.jpg";
import dg from "./img/dg.jpg";
import financieros from "./img/financieros.png";
import programadores from "./img/programadores.jpg";
import bolsa from "./img/bolsa.jpg";
import rh from "./img/rh.jpg";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route
          exact
          path="/direccion"
          render={() => (
            <Pagina
              nombre="Dirección General"
              descripcion="Nuestra Dirección General puede ayudarte a encontrar el mejor camino para crecer tu negocio, asesorandote e impulsando su crecimiento con nuestro equipo de profesionistas"
              imagen={dg}
            />
          )}
        />
        <Route
          exact
          path="/rrhh"
          render={() => (
            <Pagina
              nombre="Recursos Humanos"
              descripcion="Como empresa socialmente responsable gestionamos nuestro capital humano conforme a los marcos legales que garanticen el desarrollo óptimo de nuestro personal manteniendo como principal objetivo el bienestar de todos u cada uno de nuestros colaboradores."
              imagen={rh}
            />
          )}
        />
        <Route
          exact
          path="/programadores"
          render={() => (
            <Pagina
              nombre="Programadores"
              descripcion="Contamos con un equipo de desarrolladores web altamente capacitados que creará no únicamente la mejor imagen para su marca sino también la mejor experiencia para su usuario con la garantía que únicamente growthy investors puede ofrecerles."
              imagen={programadores}
            />
          )}
        />
        <Route
          exact
          path="/financieros"
          render={() => (
            <Pagina
              nombre="Financieros"
              descripcion="En growthy investors promovemos finanzas sanas para un desarrollo sostenible, por lo que implementamos procesos eficientes, dentro del marco jurídico,  para que el proceso de recursos, al igual que el manejo de gastos, sean gestionados con la mayor calidad que apoyarán a la mejora continua de tu empresa y al resguardo del patrimonio institucional."
              imagen={financieros}
            />
          )}
        />
        <Route
          exact
          path="/analistas"
          render={() => (
            <Pagina
              nombre="Analistas"
              descripcion="Nuestro equipo de analistas es capaz de identificar las oportunidades de mejora con un enfoque ágil y de impacto, pues al comprender el comportamiento de sus consumidores de manera oportuna, podemos diseñar la mejor estrategia de mercado para cualquier industria."
              imagen={analistas}
            />
          )}
        />
        <Route
          exact
          path="/bolsa"
          render={() => (
            <Pagina
              nombre="Bolsa de Trabajo"
              descripcion="Revisa nuestra bolsa de trabajo "
              enlace="https://www.linkedin.com/company/growthy-investors/jobs/"
              imagen={bolsa}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
