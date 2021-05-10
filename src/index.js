import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CaseStudyTwitter from 'components/pages/CaseStudyTwitter';
import CaseStudyMada from 'components/pages/CaseStudyMada';
import CaseStudyBaymade from 'components/pages/CaseStudyBaymade';
import Home from 'components/pages/Home';
import About from 'components/pages/About';

import Footer from 'components/common/Footer';
import Header from 'components/common/Header';

import styles from './index.css';
import './index.css';
import './legacy-global.gcss';
import './global.gcss';

function App() {
  return (
    <div className={styles.app}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/case-study/protweet">
            <Header />
            <CaseStudyTwitter />
            <Footer />
          </Route>
          <Route path="/case-study/mada">
            <Header />
            <CaseStudyMada />
            <Footer />
          </Route>
          <Route path="/case-study/baymade">
            <Header />
            <CaseStudyBaymade />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
