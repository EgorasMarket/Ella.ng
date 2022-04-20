import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import BookAnAppointment from "./Pages/AppointmentPage/BookAnAppointment";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book-appointment" component={BookAnAppointment} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
