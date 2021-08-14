import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from 'history';
import {
  // BrowserRouter as Router,
  HashRouter,
  useLocation,
  Switch,
  Route
} from "react-router-dom";

import CaseStudyTwitter from 'components/pages/CaseStudyTwitter';
import CaseStudyMada from 'components/pages/CaseStudyMada';
import Home from 'components/pages/Home';
import About from 'components/pages/About';

import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import ScrollToTop from 'components/common/ScrollToTop';

import logo from "assets/svgs/logo.svg";

import styles from './index.css';
import './index.css';
import './legacy-global.gcss';
import './global.gcss';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.gtag('event', 'screen_view', {
      app_name: 'SuchinPortfolio',
      screen_name: location.hash || location.pathname
    });
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: location.hash || location.pathname
    });
  }, [location]);

  return (
    <div className={styles.app}>
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href={logo}/>
      </Helmet>
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
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById("root")
);
