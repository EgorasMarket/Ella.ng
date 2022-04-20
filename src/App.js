import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";

import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
