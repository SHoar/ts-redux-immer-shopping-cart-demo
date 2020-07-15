import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";
// import './index.css';
// import * as serviceWorker from './serviceWorker';
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  root: {
    backgroundColor: "#424242"
  },
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
