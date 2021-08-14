import React from "react";
import isEqual from 'lodash/isEqual';
import classnames from 'classnames';
import { bool, shape } from 'prop-types';

import heroImage from "assets/case-study-health-tracker/hero.png";

import intervieweeOneImage from "assets/case-study-health-tracker/interviewee_1.png";
import intervieweeTwoImage from "assets/case-study-health-tracker/interviewee_2.png";
import personaInsightsImage from "assets/case-study-health-tracker/persona_insights.png";
import competitorsImage from "assets/case-study-health-tracker/competitors.png";
import wireFrameOne from "assets/case-study-health-tracker/wireframe_1.png";
import wireFrameTwo from "assets/case-study-health-tracker/wireframe_2.png";
import wireFrameThree from "assets/case-study-health-tracker/wireframe_3.png";
import wireFrameFour from "assets/case-study-health-tracker/wireframe_4.png";
import wireFrameFive from "assets/case-study-health-tracker/wireframe_5.png";
import typographyImage from "assets/case-study-health-tracker/typography.png";
import otherAssetsImage from "assets/case-study-health-tracker/other_assets.png";
import navigationAssetsImage from "assets/case-study-health-tracker/navigation_assets.png";
import stickmenImage from "assets/case-study-health-tracker/stickmen.png";

import prototypeVideo from "assets/case-study-health-tracker/prototype.mov";

import withWindowResize from "components/common/withWindowResize";

import Svg from "components/common/Svg";
import IconLabelText from "components/common/IconLabelText";
import TabTitleSection from "components/common/TabTitleSection";
import CaseStudyCard from "components/common/CaseStudyCard";
import OutroNav from "components/common/OutroNav";
import GridItems from "components/common/GridItems";
import OutroScrollDetector from "components/common/OutroScrollDetector";

import styles from "./index.css";


class CaseStudyHealthTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleOutroIndexChange = this.handleOutroIndexChange.bind(this);
    this.handleOutroPercentChange = this.handleOutroPercentChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.discover = React.createRef();
    this.define = React.createRef();
    this.ideate = React.createRef();
    this.create = React.createRef();
    this.evaluate = React.createRef();
    this.outroNav = React.createRef();

    this.state = {
      currentStep: null,
      progress: [],
      transitionOutroNavToNavigation: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const outroNavFromTop = this.outroNav.current.getBoundingClientRect().top;
    const outroNavTopOffset = 20;
    // if scrolling and process navigation is 20px from the top
    if (outroNavFromTop < outroNavTopOffset) {
      this.setState({ transitionOutroNavToNavigation: true });
    } else {
      this.setState({ transitionOutroNavToNavigation: false });
    }
  }

  handleOutroIndexChange(nextIndex) {
    const { currentStep } = this.state;
    if (currentStep !== nextIndex) {
      this.setState({ currentStep: nextIndex });
    }
  }

  handleOutroPercentChange(nextProgress) {
    const { progress } = this.state;
    if (!isEqual(progress, nextProgress)) {
      this.setState({ progress: nextProgress });
    }
  }

  trackFigmaHealthTrackerClick() {
    window.gtag('event', 'figma_healthtracker_cs_link_click');
  }

  handleNavClick(step) {
    switch(step) {
      case "discover":
        this.discover.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "define":
        this.define.current.scrollIntoView({ behavior: "smooth" });
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
    const {
      size: { isMobile }
    } = this.props;
    const { currentStep, progress, transitionOutroNavToNavigation } = this.state;

    const outroNavContainerClass = classnames({
      [styles.outroNavContainer]: true,
      [styles.outroNavStickied]: transitionOutroNavToNavigation,
    });

    return (
      <div className={`${styles.container} with-content-padding`}>
        <div className={styles.splashContainer}>
          <div className={styles.splashLeftContent}>
            <h1 className={`${styles.header} ibm-plex-serif`}>Health Tracker</h1>
            <h2 className={`${styles.subHeader} ibm-plex-serif`}>
              iOS health and fitness dashboard and activity tracker
            </h2>
            <p className="p-text">A mobile-first concept project</p>
          </div>
          <div className={styles.splashRightContent}>
            <img src={heroImage} />
          </div>
        </div>

        <div className={styles.intro}>
          <div className={styles.introInner}>
            <TabTitleSection simple title="Challenge">
              <p className="p-text">
                Create an iOS interface to display a user’s activity history which includes
                any activities tracked or performed with higher-level summary stats and
                actionable insights.
              </p>
            </TabTitleSection>

            <div className={styles.introProcessContainer}>
              <div className={styles.introProcessLeft}>
                <GridItems columns={2} gap={2} alignTop>
                  <div>
                    <div className="ibm-plex-serif font-400">ROLE</div>
                    <div className="margin-top-16">Product Design</div>
                  </div>
                  <div>
                    <div className="ibm-plex-serif font-400">DATE</div>
                    <div className="margin-top-16">2 days</div>
                  </div>
                  <div>
                    <div className="ibm-plex-serif font-400">TEAM</div>
                    <div className="margin-top-16">Solo project</div>
                  </div>
                  <div>
                    <div className="ibm-plex-serif font-400">TOOLS</div>
                    <div className="margin-top-16">Figma</div>
                  </div>
                </GridItems>
              </div>

              <div className={styles.introProcessRight}>
                <div className="ibm-plex-serif font-400">METHODS</div>
                <div className={styles.introMethods}>
                  <div className={styles.introMethodItems}>User research</div>
                  <div className={styles.introMethodItems}>Mobile-first UI design</div>
                  <div className={styles.introMethodItems}>Empathy maps</div>
                  <div className={styles.introMethodItems}>Iconography</div>
                  <div className={styles.introMethodItems}>Behavioral persona</div>
                  <div className={styles.introMethodItems}>Interaction design</div>
                  <div className={styles.introMethodItems}>Competitive research</div>
                  <div className={styles.introMethodItems}>High-fidelity prototype</div>
                </div>
              </div>
            </div>

            <div className="margin-top-50" ref={this.outroNav}>
              <TabTitleSection simple title="Process">
                <div className={outroNavContainerClass}>
                  <OutroNav
                    steps={["discover", "define", "ideate", "create", "evaluate"]}
                    currentStep={currentStep}
                    progress={progress}
                    handleClick={this.handleNavClick}
                  />
                </div>
              </TabTitleSection>
            </div>
          </div>
        </div>

        {/* Start animation  */}
        <OutroScrollDetector
          refs={[
            this.discover,
            this.define,
            this.ideate,
            this.create,
            this.evaluate,
          ]}
          onOutroIndexChange={this.handleOutroIndexChange}
          onOutroIndexPercentScrolledChange={this.handleOutroPercentChange}
        >
          <div className={styles.outro}>
            <div className="margin-top-150" ref={this.discover}>
              <TabTitleSection title="Discover">
                <div className="ibm-plex-serif uppercase font-400 font-400">CHALLENGE AND SCOPE</div>
                <p className="p-text margin-top-16">
                  Create an iOS interface to display a user’s activity history which includes any
                  activities tracked or performed including but not limited to run, sleep, step,
                  heartrate, strength training sessions, and flexibility training sessions data
                  with higher-level summary stats and actionable insights.
                </p>
                <p className="p-text margin-top-16">
                 Design ideas must be grounded in user research and on par with the most current
                 health and fitness data tracking trends.
                </p>
              </TabTitleSection>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  What are my next steps?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.define}>
              <TabTitleSection title="Define">
                <div className="ibm-plex-serif uppercase font-400">
                  PROJECT PLANS, USER RESEARCH - INTERVIEWS, USER PERSONA
                </div>
                <p className="p-text margin-top-16">
                  From my experiences, my best solutions and outcomes always stemmed from good
                  understandings of the “why”’s in peoples’ decisions. For this design challenge,
                  while the “what” was very clear (what the user wants to do when entering the interface),
                    the “why”’s were no where to be found.
                </p>
                <p className="p-text margin-top-16">
                  I was left wondering: “Why does the user track their activities?”, “Why does
                  the user want to see their history of activities?”, “Why does the user want to
                  see higher level summary stats?”, “Why does the user want actionable insights?”
                </p>
                <p className="p-text margin-top-16">
                  So, my next steps became clear - conduct user research to build understanding
                  behind my target user’s “why”’s. Then, through extracted insights, convert my
                  questions of “why” into “how”’s - “How can I best help the user track activities?”,
                  “How can I best help them see their activity histories?”, “How can I best provide
                  their higher level summary stats?”, “How can I best provide them with  actionable
                  insights?”
                </p>
              </TabTitleSection>

              <div className="margin-top-150 text-center font-400">
                Interviewee 1
              </div>
              <div className="margin-top-50 text-center">
                <img style={{maxWidth: 961}} src={intervieweeOneImage} />
              </div>

              <div className="margin-top-150 text-center font-400">
                Interviewee 2
              </div>
              <div className="margin-top-50 text-center">
                <img style={{maxWidth: 977}} src={intervieweeTwoImage} />
              </div>

              <div className="margin-top-150 text-center font-400">
                Persona Insights
              </div>
              <div className="margin-top-50 text-center">
                <img style={{maxWidth: 422}} src={personaInsightsImage} />
              </div>

              <div className="margin-top-150">
                <GridItems columns={isMobile ? 1 : 2} alignTop gap={4}>
                  <div className={styles.iconLabelTextContainer}>
                    <IconLabelText
                      icon={<Svg className={styles.greenIcons} image="greenHeart" />}
                      label="WHAT MATTERS MOST"
                    >
                      <p className="p-text">
                        Measurable, quantifiable evidence of improvement
                      </p>
                    </IconLabelText>
                  </div>
                  <div className={styles.iconLabelTextContainer}>
                    <IconLabelText
                      icon={<Svg className={styles.greenIcons} image="greenExclamation" />}
                      label="BLOCKERS"
                    >
                      <p className="p-text">
                        Irrelevant data and extra work in inputting or analyzing data
                      </p>
                    </IconLabelText>
                  </div>
                  <div className={styles.iconLabelTextContainer}>
                    <IconLabelText
                      icon={<Svg className={styles.greenIcons} image="greenKey" />}
                      label="KEY WORDS TO MY USER"
                    >
                    <p className="p-text">
                      Numbers, Social, Progress, Improvement, Performance, Relevance, Plateau, Trajectory
                    </p>
                    </IconLabelText>
                  </div>
                  <div className={styles.iconLabelTextContainer}>
                    <IconLabelText
                      icon={<Svg className={styles.greenIcons} image="greenQuestion" />}
                      label="SEARCHING FOR ANSWERS TO"
                    >
                      <p className="p-text">
                        How did I perform during my workout or activity?<br/>
                        Am I making improvements in my performance?<br/>
                        What evidence backs my improvements?<br/>
                        How can I keep progressing or improving?
                      </p>
                    </IconLabelText>
                  </div>
                </GridItems>
              </div>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  How can I provide an experience that best satisfies my user’s goals?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.ideate}>
              <TabTitleSection title="Ideate">
                <div className="ibm-plex-serif uppercase font-400">
                  UI IDEATION AND COMPETITIVE RESEARCH
                </div>
                <p className="p-text margin-top-16">
                  To create a satisfying experience for my user, I needed to provide a dashboard of some form that provides my users with a customizable, personal experience that displays the direction of their progress numerically in a grabable, easy-to-analyze method. At the same time, the experience should also be engaging but not distracting from the data.
                </p>
                <p className="p-text margin-top-16">
                  Immediately, I was inspired to go in the direction of graphs, charts, and particularly, interactive line charts with arrows.
                </p>
                <p className="p-text margin-top-16">
                  Some competitors that I looked to for affirmation and inspiration were:
                </p>

                <div className="margin-top-50">
                  <img style={{maxWidth: 751}} src={competitorsImage} />
                </div>
              </TabTitleSection>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  Awesome, what can I create?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.create}>
              <TabTitleSection title="Create">
                <div className="ibm-plex-serif uppercase font-400">
                  KEY WIREFRAMES, PROTOTYPE, DESIGN GUIDE - STYLE GUIDE, COMPONENTS, ICONS
                </div>
                <p className="p-text margin-top-16">
                  Keeping my user in mind and the four questions they want answered when entering
                  the interface, How did I perform during my workout or activity? Am I making
                  improvements in my performance? What evidence backs my improvements? How can
                  I keep progressing or improving?, I created a customizable mobile experience
                  that provides not just the relevant numerical data in an interactive dashboard
                  with custom-made icons but also provides moral support through recognition and
                  social engagement.
                </p>
                <p className="p-text margin-top-16">
                  Further, because the company I completed this design challenge for has a great
                  bank of various health experts they work with, I provided a method for the user
                  to engage with the health experts to empower the user to continue to perform well
                  and meet their fitness and health goals.
                </p>
              </TabTitleSection>

              <div className="margin-top-150 text-center font-400">
                Key Wireframes
              </div>

              <div className="margin-top-50 text-center">
                <div className={styles.wireframesContainer}>
                  <img className={styles.wireframe} src={wireFrameOne} />
                  <img className={styles.wireframe} src={wireFrameTwo} />
                  <img className={styles.wireframe} src={wireFrameThree} />
                  <img className={styles.wireframe} src={wireFrameFour} />
                  <img className={styles.wireframe} src={wireFrameFive} />
                </div>
              </div>

              <div className="margin-top-150 text-center font-400">
                Typography
              </div>
              <div className="margin-top-50 text-center">
                <img style={{maxWidth: 500}} src={typographyImage} />
              </div>

              <GridItems columns={isMobile ? 1 : 2}>
                <div>
                  <div className="margin-top-150 text-center font-400">
                    Navigational Icons
                  </div>
                  <div className="margin-top-50 text-center">
                    <img style={{maxWidth: 500}} src={navigationAssetsImage} />
                  </div>
                </div>
                <div>
                  <div className="margin-top-150 text-center font-400">
                    Other Icons and Assets
                  </div>
                  <div className="margin-top-50 text-center">
                    <img style={{maxWidth: 500}} src={otherAssetsImage} />
                  </div>
                </div>
              </GridItems>

              <div className="margin-top-150 text-center font-400">
                Prototype
              </div>
              <div className={`${styles.videoDemoContainer} margin-top-50`}>
                <video className={styles.demoVideo} controls autoPlay muted loop>
                  <source src={prototypeVideo} />
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </div>

              <div className="text-center margin-top-50">
                <a
                  onClick={this.trackFigmaHealthTrackerClick}
                  className={styles.figmaLink}
                  href="https://www.figma.com/proto/sATRRl0gcRck5H4Pa0NLje/Suchin-Lin's-Health-Tracker-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to play with the prototype in Figma
                </a>
              </div>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  What did usability testing show? What was the feedback?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.evaluate}>
              <TabTitleSection title="Evaluate">
                <div className="ibm-plex-serif uppercase font-400">
                  REFLECTIONS, USABILITY TESTING, AND FEEDBACK
                </div>
                <p className="p-text margin-top-16">
                  As a long-time fitness enthusiast currently training for a double marathon
                  quarantine-comeback, I really enjoyed completing this design challenge.
                  Getting to know how other people meet their health and fitness goals and
                  needs and, especially, designing a customizable interface that was relevant
                  to the users was very invigorating.
                </p>
                <p className="p-text margin-top-16">
                  Usability testing showed that the user was successfully able to complete the
                  design challenge tasks of checking out a history of their activities, analyzing
                  higher-level summary stats, and browsing and acting on actionable insights.
                  The user was also able to answer the 4 key questions of “How did I perform
                  during my workout or activity? Am I making improvements in my performance?
                  What evidence backs my improvements? How can I keep progressing or improving?”
                </p>
                <p className="p-text margin-top-16">
                  The user stated they especially appreciated being able to customize the
                  dashboard to see data that they were specifically looking for to quantify
                  their performance.
                </p>
                <p className="p-text margin-top-16">
                  A presentation and feedback session with the company I completed this design
                  challenge for included praises of thoughtfulness as well as advice on designing
                  with intentionality if straying from consistency, particularly in application
                  of color (ie: solid vs gradient), and optimizing use of Figma when creating
                  components through use of Figma’s Auto-layout feature.
                </p>
                <p className="p-text margin-top-16">
                  With the feedback I received, I looked more into Figma’s Auto-layout feature,
                  found it to be helpful when designing components like buttons, and applied it
                  to some of my existing components in my Figma files. I also continued my research
                  into design systems, design system thinking, and looked at some of my favorite
                  apps and website UI’s and conducted a design exercise for myself of trying to
                  “spell out” the design systems in place.
                </p>
              </TabTitleSection>
            </div>
          </div>
        </OutroScrollDetector>

        <div className="margin-top-150 text-center">
          <img style={{maxWidth: 496}} src={stickmenImage} />
        </div>

        <div className={styles.thankNote}>
          Thank you so much for taking the time out to read. <Svg className={styles.heartSvg} image="heart" />
        </div>


        <div className="margin-top-150">
          <div className="divider">
            More Projects
          </div>
          <GridItems columns={ isMobile ? 1 : 2} gap={4}>
            <CaseStudyCard name="protweet"/>
            <CaseStudyCard name="mada"/>
          </GridItems>
        </div>
      </div>
    );
  }
}

CaseStudyHealthTracker.propTypes = {
  size: shape({ isMobile: bool }).isRequired,
};

CaseStudyHealthTracker.defaultProps = {};

export default withWindowResize(CaseStudyHealthTracker);
