import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";

import { Provider } from "react-redux";
import store from "./store";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/book-appointment" component={BookAnAppointment} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
