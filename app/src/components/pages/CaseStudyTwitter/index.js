import React from "react";

import splashImage from "assets/images/case-study-twitter/splash.png";

import { getElmHeight, sumList } from "utils/helpers";

import Svg from "components/common/Svg";
import TabTitleSection from "components/common/TabTitleSection";
import OutroNav from "components/common/OutroNav";

import styles from "./index.css";


export default class CaseStudyTwitter extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.discover = React.createRef();
    this.define = React.createRef();
    this.deeperDiscovery = React.createRef();
    this.ideate = React.createRef();

    this.outro = React.createRef();

    this.state = {
      currentStep: 0
    }
  }

  componentDidMount() {
    console.log('this.discover', this.discover.current);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const discoverHeight = getElmHeight(this.discover.current);
    const defineHeight = getElmHeight(this.define.current);
    const deeperDiscoveryHeight = getElmHeight(this.deeperDiscovery.current);
    const ideateHeight = getElmHeight(this.ideate.current);

    const totalOutroScrollable = this.outro.current.scrollHeight + 150; // for the 150 top margin

    const outroStart = window.pageYOffset + this.discover.current.getBoundingClientRect().top;
    const outroScrolled = window.pageYOffset + window.innerHeight - outroStart;

    const discoverPercentage = discoverHeight / totalOutroScrollable * 100;
    const definePercentage = defineHeight / totalOutroScrollable * 100;
    const deeperDiscoveryPercentage = deeperDiscoveryHeight / totalOutroScrollable * 100;
    const ideateHeightPercentage = ideateHeight / totalOutroScrollable * 100;

    const percentList = [
      discoverPercentage,
      definePercentage,
      deeperDiscoveryPercentage,
      ideateHeightPercentage
    ]

    // get the percentage of the outro scrolled based on total outroll scrollable
    const scrolledPercent = outroScrolled / totalOutroScrollable * 100

    // add some padding before considering the section has been scrolled to.
    // start the padding when scrolled 20% into the content
    const minPadding = .80;
    const minDiscoverPercentage = discoverPercentage - (discoverPercentage * minPadding);
    const discoveryStartPoint = minDiscoverPercentage;

    const minDefinePercentage = definePercentage - (definePercentage * minPadding);
    const defineStartPoint = sumList(percentList.slice(0, 1)) + minDefinePercentage;

    const minDeepDiscoveryPercentage = deeperDiscoveryPercentage - (deeperDiscoveryPercentage * minPadding);
    const deepDiscoveryStartPoint = sumList(percentList.slice(0, 2)) + minDeepDiscoveryPercentage;

    const minIdeatePercentage = ideateHeightPercentage - (ideateHeightPercentage * minPadding);
    const ideateStartPoint = sumList(percentList.slice(0, 3)) + minIdeatePercentage;

    const discoverBreakpoint = scrolledPercent + sumList(percentList.slice(1)) > 100;
    const defineBreakpoint = scrolledPercent + sumList(percentList.slice(2)) > 100;
    const deepDiscoveryBreakpoint = scrolledPercent + sumList(percentList.slice(3)) > 100;
    const ideateBreakpoint = scrolledPercent + sumList(percentList.slice(4)) > 100;

    // starting scroll
    if (scrolledPercent > discoveryStartPoint && !discoverBreakpoint) {
      this.setState({ currentStep: 0 });
      console.log('in DISCOVER');
    }

    // scroll percent must be greater than discovery, but less than the rest added up
    if (scrolledPercent > defineStartPoint && !defineBreakpoint) {
      this.setState({ currentStep: 1 });
      console.log('in DEFINE');
    }

    if (scrolledPercent > deepDiscoveryStartPoint && !deepDiscoveryBreakpoint) {
      this.setState({ currentStep: 2 });
      console.log('in DEEP DISCOVERY');
    }

    if (scrolledPercent > ideateStartPoint && !ideateBreakpoint) {
      this.setState({ currentStep: 3 });
      console.log('in IDEATE');
    }
  }

  handleNavClick(step) {
    // ["discover", "define", "deeper discovery", "ideate", "create", "evaluate"]
    switch(step) {
      case "discover":
        this.discover.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "define":
        this.define.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "deeper discovery":
        this.deeperDiscovery.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "ideate":
        this.ideate.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "create":
        this.create.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "evaluate":
        this.evaluate.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  render() {
    const { currentStep } = this.state;

    return (
      <div className={styles.container}>
        <div className="flex-centered">
          <div className={styles.splashLeftContent}>
            <h1 className={`${styles.header} ibm-plex-serif`}>Pro-tweets</h1>
            <h2 className={`${styles.subHeader} ibm-plex-serif`}>
              Evidence-based tweets to tackle the infodemic during the novel
              coronavirus pandemic
            </h2>
            <p className="p-text">A self-motivated, concept project</p>
          </div>
          <img className={styles.splashImage} src={splashImage} />
        </div>

        <div className="section-container">
          <TabTitleSection title="Synopsis">
            <div>Some title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabTitleSection>
        </div>

        <div className="section-container">
          <TabTitleSection title="My usual design process">
            <Svg image="glass" />
          </TabTitleSection>
        </div>

        <div className="section-container">
          <TabTitleSection title="This Project's sequence">
            <div>Some title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabTitleSection>
        </div>

        {/* Start animation  */}
        <div className={styles.outro} ref={this.outro}>
          <div className={styles.outroNavContainer}>
            <div className={styles.outroNavAbsoluteContainer}>
              <OutroNav
                steps={["discover", "define", "deeper discovery", "ideate", "create", "evaluate"]}
                currentStep={currentStep}
                handleClick={this.handleNavClick}
              />
            </div>
          </div>

          <div className="section-container" ref={this.discover}>
            <TabTitleSection>
              <h1>DISCOVER DISCOVER DISCOVER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabTitleSection>
          </div>

          <div className="section-container" ref={this.define}>
            <TabTitleSection>
              <h1>DEFINE DEFINE DEFINE</h1>
              <h1>DEFINE DEFINE DEFINE</h1>
              <h1>DEFINE DEFINE DEFINE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h1>DEFINE DEFINE DEFINE</h1>
              <h1>DEFINE DEFINE DEFINE</h1>
              <h1>DEFINE DEFINE DEFINE</h1>
            </TabTitleSection>
          </div>

          <div className="section-container" ref={this.deeperDiscovery}>
            <TabTitleSection>
              <h1>DEEPER DISCOVERY DEEPER DISCOVERY DEEPER DISCOVERY</h1>
              <h1>DEEPER DISCOVERY DEEPER DISCOVERY DEEPER DISCOVERY</h1>
              <h1>DEEPER DISCOVERY DEEPER DISCOVERY DEEPER DISCOVERY</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabTitleSection>
          </div>

          <div className="section-container" ref={this.ideate}>
            <TabTitleSection>
              <h1>IDEATE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabTitleSection>
          </div>
        </div>

      </div>
    );
  }
}
