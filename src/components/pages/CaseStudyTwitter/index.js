import React from "react";
import isEqual from 'lodash/isEqual';
import classnames from 'classnames';
import { bool, shape } from 'prop-types';

import splashImage from "assets/images/case-study-twitter/splash.png";
import apLogo from "assets/images/case-study-twitter/ap_logo.png";
import bbcLogo from "assets/images/case-study-twitter/bbc_logo.png";
import forbesLogo from "assets/images/case-study-twitter/forbes_logo.png";
import ncbiLogo from "assets/images/case-study-twitter/ncbi_logo.png";
import nytLogo from "assets/images/case-study-twitter/nyt_logo.png";
import coronaBubbleImage from "assets/images/case-study-twitter/corona_bubble.png";
import whoRepImage from "assets/images/case-study-twitter/who_representative.png";
import personaImage from "assets/images/case-study-twitter/persona.png";
import twitterMissionImage from "assets/images/case-study-twitter/twitter_mission.png";
import twitterBrandImage from "assets/images/case-study-twitter/twitter_brand.png";
import twitterFeaturesImage from "assets/images/case-study-twitter/twitter_features.png";
import twitterCurrentFlowImage from "assets/images/case-study-twitter/twitter_current_flow.png";
import twitterFrictionZoneImage from "assets/images/case-study-twitter/twitter_friction_zone.png";
import twitterProposedFlowImage from "assets/images/case-study-twitter/twitter_propose_flow.png";
import inspirationCollageImage from "assets/images/case-study-twitter/inspiration_collage.png";
import proTweetIconImage from "assets/images/case-study-twitter/protweet_icon.png";
import proTweetIconIntegrationImage from "assets/images/case-study-twitter/protweet_icon_integration.png";
import wireframeImage from "assets/images/case-study-twitter/wireframe.png";
import proTweetDiagramImage from "assets/images/case-study-twitter/pro_tweet_diagram.png";
import videoContainerImage from "assets/images/case-study-twitter/video_container.png";
import proTweetVideo from "assets/videos/protweet.mov";

import withWindowResize from "components/common/withWindowResize";

import Svg from "components/common/Svg";
import TabTitleSection from "components/common/TabTitleSection";
import CaseStudyCard from "components/common/CaseStudyCard";
import OutroNav from "components/common/OutroNav";
import GridItems from "components/common/GridItems";
import OutroScrollDetector from "components/common/OutroScrollDetector";

import styles from "./index.css";


class CaseStudyTwitter extends React.Component {
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
            <h1 className={`${styles.header} ibm-plex-serif`}>Pro-tweets</h1>
            <h2 className={`${styles.subHeader} ibm-plex-serif`}>
              Evidence-based tweets to tackle the infodemic during the novel
              coronavirus pandemic
            </h2>
            <p className="p-text">A self-motivated, concept project</p>
          </div>
          <div className={styles.splashRightContent}>
            <img className={styles.splashImage} src={splashImage} />
          </div>
        </div>

        <div className={styles.intro}>
          <div className={styles.introInner}>
            <TabTitleSection simple title="Challenge">
              <p className="p-text">
                Reduce the &quot;human cost&quot; of the infodemic by identifying sources of information
                consumption and provide a healthier, easy, and familiar method of information sharing.
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
                    <div className="margin-top-16">May 2020 - 3 weeks</div>
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
                  <div className={styles.introMethodItems}>Brand principles</div>
                  <div className={styles.introMethodItems}>User flow analysis</div>
                  <div className={styles.introMethodItems}>Competitive research</div>
                  <div className={styles.introMethodItems}>Comparative research</div>
                  <div className={styles.introMethodItems}>Mobile first UI design </div>
                  <div className={styles.introMethodItems}>Iconography</div>
                  <div className={styles.introMethodItems}>Interaction design</div>
                  <div className={styles.introMethodItems}>High fidelity prototype</div>
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
                <div className="ibm-plex-serif uppercase font-400 font-400">The bizarre headlines</div>
                <p className="p-text margin-top-16">
                  On March 11, 2020, the W.H.O. raised the novel coronavirus to the highest level of pandemic.
                  Shortly thereafter, bizarre headlines started taking over the news:
                </p>
              </TabTitleSection>
              <div className={styles.discoverHeadlineContainer}>
                <div className="yellow-border-container margin-top-50">
                  <GridItems columns={isMobile ? 1 : 3}>
                    <div>
                      <div className={styles.headlineTitle}>Cleaning product poisonings</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="https://www.nytimes.com/2020/03/24/us/chloroquine-poisoning-coronavirus.html" target="_blank" rel="noopener noreferrer">
                        <img className={styles.headlineLogo} src={nytLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="font-400">Man Fatally Poisons Himself</div>
                          <div className={styles.headlineItemBody}>An Arizona man and his wife ingested a fish tank cleaning additive...</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className={styles.headlineTitle}>Racial tensions and attacks</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7196428/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.headlineLogo} src={ncbiLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="font-400">Corona crisis fuels racially profiled hate in social media</div>
                          <div className={styles.headlineItemBody}>Within first half of March, offensive tweets increases by more than 1000%</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className={styles.headlineTitle}>Medication overdoses</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="https://www.forbes.com/sites/rachelsandler/2020/04/09/hydroxychloroquine-abuse-up-since-trump-first-mentioned-drug-us-poison-centers-say/?sh=3a657da13071" target="_blank" rel="noopener noreferrer">
                        <img className={styles.headlineLogo} src={forbesLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="font-400">Hydroxychloroquine Abuse Up</div>
                          <div className={styles.headlineItemBody}>...the number of hydroxychloroquine exposure cases more than doubled from March 18, 2020 to April 6, 2020</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className={styles.headlineTitle}>Conspiracy theories - &quot;Hoax&quot;</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="https://www.bbc.com/news/stories-52731624" target="_blank" rel="noopener noreferrer">
                        <img className={styles.headlineLogo} src={bbcLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="font-400">Coronavirus: The human cost of misinformation</div>
                          <div className={styles.headlineItemBody}>&quot;We thought the government was using it to distract us...&quot;</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className={styles.headlineTitle}>Alcohol poisonings</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="https://apnews.com/article/fece5d0e017849911aa86c0c07799e6b" target="_blank" rel="noopener noreferrer">
                        <img className={styles.headlineLogo} src={apLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="font-400">False Belief Poison Cures Virus Kills 700 in Iran</div>
                          <div className={styles.headlineItemBody}>... alcohol poisoning killed 728 Iranians... 5,011 people had been poisoned</div>
                        </div>
                      </a>
                    </div>
                  </GridItems>
                </div>
              </div>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  Why are people hurting themselves and each other?<br/>
                  Is there anything I can do?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.define}>
              <TabTitleSection title="Define">
                <div className="ibm-plex-serif uppercase font-400">Infodemic</div>
                <p className="p-text margin-top-16">
                  As per the W.H.O, an infodemic is &quot;too much information including false or misleading information
                  in digital and physical environments during a disease outbreak. It causes confusion and risk-taking
                  behaviors that can harm health. It also leads to mistrust in health authorities and undermines the
                  public health response&quot;.
                </p>

                <div className={`${styles.coronaBubbleContainer} margin-top-50`}>
                  <img src={coronaBubbleImage} />
                </div>

                <div className="ibm-plex-serif uppercase font-400 margin-top-100">Remedy</div>
                <p className="p-text margin-top-16">
                  In February, a W.H.O. representative travelled personally to Silicon Valley to
                  request tech companies to take stronger action against the infodemic.
                </p>

                <div className={`${styles.bbcImageContainer} margin-top-50`}>
                  <a href="https://www.bbc.com/news/technology-51497800" target="_blank" rel="noopener noreferrer">
                    <img src={whoRepImage} />
                  </a>
                  <div className="font-size-10 text-right">source: BBC article</div>
                </div>

                <p className="p-text margin-top-50">
                  This inspired me to ideate for one of the social networking platform giants
                  that people globally frequent for information consumption, Twitter.
                </p>

                <p className="p-text margin-top-50">
                  In medicine, we help people by using and encouraging evidence-based practices
                  and processes. Perhaps by applying the same principle and encouraging evidence-based
                  information sharing we can remedy or at least curb the infodemic effects.
                </p>

                <div className="margin-top-50">
                  <div className="ibm-plex-serif uppercase font-400">The Hypothesis</div>
                  <p className="p-text margin-top-16">
                    By providing an easy and familiar method of evidence-based communication techniques on Twitter,
                    the voices of people that want to spread reliable news can be amplified and also help remind
                    people to share accurate information. In doing this, we can make accurate information
                    more available, findable, and reduce the rates of the &quot;human costs of misinformation&quot;.
                  </p>
                </div>

                <div className="margin-top-50">
                  <div className="ibm-plex-serif uppercase font-400">The Users</div>
                  <p className="p-text margin-top-16">
                    Fundamentally, it goes without having to say that all design decisions should respect the
                    freedom of speech of all users. And, while we can’t control the decisions or the messages
                    those around us put into the world, because we can be responsible of our own decisions and
                    influences, I chose to target Twitter users that want to use a more accurate approach to
                    tweeting and info sharing.
                  </p>
                </div>
              </TabTitleSection>

              <div className="margin-top-50 width-100 text-center">
                <img src={personaImage} />
              </div>

              <div className="margin-top-150">
                <div className="ibm-plex-serif uppercase font-400">Getting to know the brand</div>
                <p className="p-text margin-top-16">
                  Twitter has an established brand and identity - to ideate for them requires my design ideas
                  to be in line with their mission, brand guidelines, and style guidelines.
                </p>
              </div>

              <div className="ibm-plex-serif uppercase font-400 margin-top-50">So, what is twitter and their mission?</div>
              <div className="margin-top-16 text-center">
                <div className={`${styles.missionImageContainer} grey-bg-container`}>
                  <img src={twitterMissionImage} />
                </div>
              </div>

              <div className="ibm-plex-serif uppercase font-400 margin-top-50">What are twitter&apos;s guidelines?</div>
              <div className="margin-top-16 text-center">
                <div className={`${styles.brandImageContainer} yellow-border-container`}>
                  <img src={twitterBrandImage} />
                </div>
              </div>

              <div className="ibm-plex-serif uppercase font-400 margin-top-50">What are some of twitter&apos;s current features?</div>
              <div className="margin-top-16 text-center">
                <div className={`${styles.featuresImageContainer} grey-bg-container`}>
                  <img src={twitterFeaturesImage} />
                </div>
              </div>

              <div className="ibm-plex-serif uppercase font-400 margin-top-50">What is Twitter&apos;s current user Flow?</div>
              <div className="margin-top-16 text-center">
                <div className={`${styles.currentFlowImage} yellow-border-container`}>
                  <img src={twitterCurrentFlowImage} />
                </div>
              </div>

              <div className="ibm-plex-serif uppercase font-400 margin-top-50">Defining potential friction points in user flow</div>
              <div className="margin-top-16 text-center">
                <div className={`${styles.frictionImageContainer} grey-bg-container`}>
                  <img src={twitterFrictionZoneImage} />
                </div>
              </div>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  How can I improve the experience?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.ideate}>
              <TabTitleSection title="Ideate">
                <div className="ibm-plex-serif uppercase font-400">User flow reversal and inspirations</div>
                <p className="p-text margin-top-16">
                  The discoveries above inspired me to reverse the current user flow
                  to allow users to create their tweet first then browse and select
                  evidence to support their tweet based on keywords and hashtags in the tweet.
                </p>
              </TabTitleSection>
              <div className="margin-top-50 uppercase text-center font-400">
                Proposed user flow
              </div>

              <div className="margin-top-16 text-center">
                Task: Tweet factual information with support from a reliable source
              </div>

              <div className={`${styles.proposedImageContainer} margin-top-16`}>
                <img src={twitterProposedFlowImage} />
              </div>

              <p className="p-text margin-top-50">
                I next sought out some inspirations from some competitors to see if I can design an easy and familiar experience for the user.
              </p>

              <div className={`${styles.inspirationImageContainer} margin-top-50`}>
                <img src={inspirationCollageImage} />
              </div>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  Awesome, what can I create?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.create}>
              <TabTitleSection title="Create">
                <div className="ibm-plex-serif uppercase font-400">Pro-Tweets - Name, Icon, UI generation and integration</div>
                <p className="p-text margin-top-16">
                  Pro-tweets is short for professional tweets. This feature would allow users
                  to find supportive tweets from Twitter verified account holders to use as
                  a retweet to ultimately, fact check and put out accurate information into the world.
                </p>

                <div className="ibm-plex-serif uppercase font-400 text-left margin-top-50">The Icon</div>
                <p className="p-text margin-top-16">
                  The icon idea I crafted was intended to evoke feelings of a cross between the keywords of
                  Twitter&apos;s mission and what Pro-tweets&apos; purpose is - to spread factual information.
                  The words and phrases I used to craft were specifically: Science, Centered, Global, Unified, Whole, Professional.
                </p>

                <div className={`${styles.proTweetIconContainer} margin-top-50`}>
                  <img src={proTweetIconImage} />
                </div>

                <div className="ibm-plex-serif uppercase font-400 text-left margin-top-50">Icon Integration</div>
                <p className="p-text margin-top-16">
                  Because, the feature relies on the use of a tweet text field for keywords and
                  hashtags to generate a list, I chose to integrate the icon into the
                  existing tweet/retweet tool bar.
                </p>
                <div className={`${styles.proTweetIconIntegrationContainer} margin-top-50`}>
                  <img src={proTweetIconIntegrationImage} />
                </div>
              </TabTitleSection>

              <div className="ibm-plex-serif uppercase font-400 text-left margin-top-50">New Navigation Flow</div>
              <div className="margin-top-50 text-center">
                <img src={wireframeImage} />
              </div>

              <div className="margin-top-50">
                <GridItems columns={isMobile ? 1 : 2}>
                  <img className={styles.tweetDiagram} src={proTweetDiagramImage} />
                  <div className={styles.tweetDiagramText}>
                    <div className="ibm-plex-serif uppercase font-400">Pro-tweets&quot; highlights</div>
                    <ol>
                      <li className={styles.tweetDiagramListItem}>
                        Pro-Tweets results sourced by similar keywords and hashtags in the user’s tweet.
                      </li>
                      <li className={styles.tweetDiagramListItem}>
                        Horizontally scrollable Pro-Tweets results bar with a selection of Twitter verified, reliable sources - inspired by Instagram stories reel
                      </li>
                      <li className={styles.tweetDiagramListItem}>
                        Vertically scrollable list of tweets from the Twitter verified users with a consistent look of Twitter’s home feed.
                      </li>
                      <li className={styles.tweetDiagramListItem}>
                        The user would use the Twitter brand consistent check icon to select a tweet to attach to own tweet.
                      </li>
                    </ol>
                  </div>
                </GridItems>
              </div>

              <div className="ibm-plex-serif uppercase font-400 margin-top-50">Demostration of prototype</div>
              <div className={styles.videoDemoContainer}>
                {
                  !isMobile ? <img src={videoContainerImage} /> : null
                }
                <div className={styles.videoContainer}>
                  <video controls autoPlay muted loop>
                    <source src={proTweetVideo} />
                    Sorry, your browser doesn&apos;t support embedded videos.
                  </video>
                </div>
              </div>

              <div className={styles.questionDivider}>
                <Svg className={styles.questionSvg} image="question" />
                <div className={styles.questionDividerText}>
                  What was the outcome?<br/>
                  What did I learn?
                </div>
              </div>
            </div>

            <div className="margin-top-150" ref={this.evaluate}>
              <TabTitleSection title="Evaluate">
                <div className="ibm-plex-serif uppercase font-400">Incredible learning experience</div>
                <p className="p-text margin-top-16">
                  Seeing how an established company so clearly and thoroughly defines their brand and
                  guidelines was an incredible learning experience for me. Getting to know and understand
                  their guidelines and applying them towards my design idea really helped me to develop
                  my visual design skills and inspired me to apply a similar approach when designing
                  this case study and my site.
                </p>

                <p className="p-text margin-top-50">
                  I also had a great time ideating to not only potentially better a brand&apos;s
                  image but also to help the global community fight against the pandemic and infodemic.
                </p>
              </TabTitleSection>
            </div>
          </div>
        </OutroScrollDetector>

        <div className={styles.thankNote}>
          Thank you so much for taking the time out to read. <Svg className={styles.heartSvg} image="heart" />
        </div>


        <div className="margin-top-150">
          <div className="divider">
            More Projects
          </div>
          <GridItems columns={ isMobile ? 1 : 2} gap={4}>
            <CaseStudyCard name="mada"/>
            <CaseStudyCard name="baymade"/>
          </GridItems>
        </div>
      </div>
    );
  }
}

CaseStudyTwitter.propTypes = {
  size: shape({ isMobile: bool }).isRequired,
};

CaseStudyTwitter.defaultProps = {};

export default withWindowResize(CaseStudyTwitter);
