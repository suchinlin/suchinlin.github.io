import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CaseStudyTwitter from 'components/pages/CaseStudyTwitter';
import './index.css';

// import React from "react";
// import ReactDOM from "react-dom";

// import MyImage from './assets/su.png';

// const App = () => {
//   return (
//     <div>
//       <div>Welcome to my-webpack-react-starter</div>
//       <img src={MyImage} />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.querySelector("#root"));
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/">
          <CaseStudyTwitter />
        </Route>

        {/*
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      */}

      </Switch>
    </React.Fragment>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
