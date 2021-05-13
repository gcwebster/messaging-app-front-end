import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import MessagePage from "./messagePage";

const routing = () => (
  <Router>
    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route path="/messages">
        <MessagePage />
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
