import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";

function App() {
  const store = createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
