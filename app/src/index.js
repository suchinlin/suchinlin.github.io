import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CaseStudyTwitter from 'components/pages/CaseStudyTwitter';
import styles from './index.css';
import './index.css';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/">
          <CaseStudyTwitter />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
