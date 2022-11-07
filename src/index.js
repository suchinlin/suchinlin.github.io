import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import {
  HashRouter,
  useLocation,
  Switch,
  Route
} from "react-router-dom";

// import CaseStudyTwitter from 'components/pages/CaseStudyTwitter';
// import CaseStudyHealthTracker from 'components/pages/CaseStudyHealthTracker';
// import CaseStudyMada from 'components/pages/CaseStudyMada';
import Home from 'components/pages/Home';
// import About from 'components/pages/About';

import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import ScrollToTop from 'components/common/ScrollToTop';

import logo from "assets/svgs/logo.svg";

// import './legacy-global.gcss';
import './global.gcss';
import './index.css';

import styles from './index.css';

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
