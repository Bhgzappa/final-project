import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddPatient from "./screens/AddPatient";
import Patients from "./screens/Patients";
import Header from "./components/Header";
import Home from "./containers/Home";
import { Container } from "react-bootstrap";
import About from "./screens/About";
import Services from "./screens/Services";

function App() {
  return (
    <main>
      <Header />
      <Container>
      <h2 className="text-center font-bold">WELCOME, PLEASE SIGN IN/SIGN UP</h2>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/patients" component={Patients} />
          <Route path="/addpatient" component={AddPatient} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;