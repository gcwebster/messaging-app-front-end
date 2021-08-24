import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import MessagePage from "./pages/message";
import RegisterPage from "./pages/register";

const routing = () => (
  <Router>
    <Switch>
      <Route path="/messages">
        <MessagePage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>{routing()}</React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
