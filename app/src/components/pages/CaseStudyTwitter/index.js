import React from "react";

import splashImage from "assets/images/case-study-twitter/splash.png";
import apLogo from "assets/images/case-study-twitter/ap_logo.png";
import bbcLogo from "assets/images/case-study-twitter/bbc_logo.png";
import forbesLogo from "assets/images/case-study-twitter/forbes_logo.png";
import ncbiLogo from "assets/images/case-study-twitter/ncbi_logo.png";
import nytLogo from "assets/images/case-study-twitter/nyt_logo.png";
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
import proTweetResultFeedImage from "assets/images/case-study-twitter/protweet_result_feed.png";
import videoContainerImage from "assets/images/case-study-twitter/video_container.png";
import proTweetVideo from "assets/videos/protweet.mov";

import Svg from "components/common/Svg";
import TabTitleSection from "components/common/TabTitleSection";
import OutroNav from "components/common/OutroNav";
import GridItems from "components/common/GridItems";
import OutroScrollDetector from "components/common/OutroScrollDetector";

import styles from "./index.css";


export default class CaseStudyTwitter extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleOutroScrollChange = this.handleOutroScrollChange.bind(this);

    this.discover = React.createRef();
    this.define = React.createRef();
    this.deeperDiscovery = React.createRef();
    this.ideate = React.createRef();
    this.create = React.createRef();
    this.evaluate = React.createRef();

    this.state = {
      currentStep: 0
    }
  }

  handleOutroScrollChange(nextStep) {
    const { currentStep } = this.state;
    if (currentStep !== nextStep.index) {
      this.setState({ currentStep: nextStep.index });
    }
  }

  handleNavClick(step) {
    // ["discover", "define", "deeper discovery", "ideate", "create", "evaluate"]
    // todo: when auto scrolling, disable handle scroll and automatically select
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
            <p className="p-text">
              As the novel coronavirus reaches a pandemic level, an infodemic also sweeps over the
              world disturbing the soundness and safety of people&apos;s judgment globally leading to
              harmful life and health decisions with even some fatal outcomes.
            </p>

            <div className="flex-centered margin-top-50">
              <div className="width-50">
                <GridItems columns={2}>
                  <div>
                    <div className="ibm-plex-serif">ROLE</div>
                    <div className="margin-top-16">Product Design</div>
                  </div>
                  <div>
                    <div className="ibm-plex-serif">DATE</div>
                    <div className="margin-top-16">May 2020 - 3 weeks</div>
                  </div>
                  <div>
                    <div className="ibm-plex-serif">TEAM</div>
                    <div className="margin-top-16">Solo project</div>
                  </div>
                  <div>
                    <div className="ibm-plex-serif">TOOLS</div>
                    <div className="margin-top-16">Figma</div>
                  </div>
                </GridItems>
              </div>

              <div className="width-50">
                <div className="ibm-plex-serif">METHODS</div>
                <p className="p-text">
                  Brand principles analysis,  User flow analysis, Competitive analysis, UI design, Icon design, Interaction design, High fidelity prototype
                </p>
              </div>
            </div>
          </TabTitleSection>
        </div>

        <div className="section-container">
          <TabTitleSection title="The Goals">
            <p className="p-text">
              Reduce the &quot;human cost&quot; of the infodemic by identifying sources of information
              people turn to and providing healthier methods of sharing information.
            </p>
          </TabTitleSection>
        </div>

        <div className="section-container">
          <TabTitleSection title="The Process">
            <div className="yellow-border-container">
              <Svg image="process" />
            </div>
          </TabTitleSection>
        </div>

        {/* Start animation  */}
        <OutroScrollDetector
          refs={[
            this.discover,
            this.define,
            this.deeperDiscovery,
            this.ideate,
            this.create,
            this.evaluate,
          ]}
          onOutroChange={this.handleOutroScrollChange}
        >
          <div className={styles.outro}>
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
                <div className="ibm-plex-serif uppercase">The bizarre headlines</div>
                <p className="p-text margin-top-16">
                  On March 11, 2020, the W.H.O. raised the novel coronavirus to the highest level of pandemic.
                  Shortly thereafter, bizarre headlines started taking over the news:
                </p>

                <div className="yellow-border-container margin-top-50">
                  <GridItems columns={3}>
                    <div>
                      <div className="text-center">Cleaning product poisonings</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="" target="_blank" rel="noopener noreferrer">
                        <img src={nytLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="bold">Man Fatally Poisons Himself</div>
                          <div>... ingested a fish tank cleaning additive</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className="text-center">Racial tensions and attacks</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="" target="_blank" rel="noopener noreferrer">
                        <img src={ncbiLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="bold">Corona crisis fuels racially profiled hate in social media</div>
                          <div>Within first half of March, offensive tweets increases by more than 1000%</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className="text-center">Medication overdoses</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="" target="_blank" rel="noopener noreferrer">
                        <img src={forbesLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="bold">Hydroxychloroquine Abuse Up</div>
                          <div>US poison centers see an uptick</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className="text-center">Conspiracy theories - &quot;Hoax&quot;</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="" target="_blank" rel="noopener noreferrer">
                        <img src={bbcLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="bold">Coronavirus: The human cost of misinformation</div>
                          <div>&quot;We thought the government was using it to distract us...&quot;</div>
                        </div>
                      </a>
                    </div>

                    <div>
                      <div className="text-center">Alcohol poisonings</div>
                      <a className={`flex-centered ${styles.headlineItem}`} href="" target="_blank" rel="noopener noreferrer">
                        <img src={apLogo} />
                        <div className={styles.headlineItemText}>
                          <div className="bold">False Belief Poison Cures Virus Kills 700 in Iran</div>
                          <div>... alcohol poisoning killed 728 Iranians... 5,011 people had been poisoned</div>
                        </div>
                      </a>
                    </div>
                  </GridItems>
                </div>

                <div className={styles.questionDivider}>
                  <Svg className={styles.questionSvg} image="question" />
                  <div className={styles.questionDividerText}>
                    Why are people hurting themselves and each other?<br/>
                    Is there anything I can do?
                  </div>
                </div>
              </TabTitleSection>
            </div>

            <div className="section-container" ref={this.define}>
              <TabTitleSection>
                <div className="ibm-plex-serif uppercase">Infodemic</div>
                <p className="p-text margin-top-16">
                  As per the W.H.O, an infodemic is an overabundance of information, both in digital
                  and/or physical forms, some accurate and some not, that makes it hard for people to
                  find reliable sources and accurate guidance when they need it.
                </p>

                <div className="margin-top-50">
                  <div className="pink-bg-text-container">
                    <p className="p-text semi-bold pink-border-container">
                      &quot;too much information including false or misleading information in digital
                      and physical environments during a disease outbreak. It causes confusion and
                      risk-taking behaviors that can harm health. It also leads to mistrust in health
                      authorities and undermines the public health response.&quot; - W.H.O.
                    </p>
                  </div>
                </div>

                <div className="ibm-plex-serif uppercase margin-top-100">Remedy</div>
                <p className="p-text margin-top-16">
                  In February, a W.H.O. representative travelled personally to Silicon Valley to
                  request tech companies to take stronger action against the infodemic.
                </p>

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
                  <div className="pink-bg-text-container">
                    <p className="p-text semi-bold pink-border-container">
                      By providing evidence-based communication techniques on social networking platforms,
                      such as Twitter, we can amplify the voices of people that want to spread reliable
                      news and remind people to share accurate information. In doing this, we can make
                      accurate information more available, findable, and reduce the rates of the
                      &quot;human costs of misinformation&quot;.
                    </p>
                  </div>
                </div>

                <div className={styles.questionDivider}>
                  <Svg className={styles.questionSvg} image="question" />
                  <div className={styles.questionDividerText}>
                    Is my hypothesis appropriate?<br/>
                    Does it fit with Twitter&apos;s Mission?<br/>
                    How would I incorporate it into their platform?
                  </div>
                </div>
              </TabTitleSection>
            </div>

            <div className="section-container" ref={this.deeperDiscovery}>
              <TabTitleSection>
                <div className="ibm-plex-serif uppercase">The user and the brand</div>
                <p className="p-text margin-top-16">
                  With the surface level issues identified, it was important I next clarify
                  my target user, constraints, and delineate my boundaries.
                </p>

                <div className="ibm-plex-serif uppercase margin-top-50">The user</div>
                <p className="p-text pink-border-container margin-top-16">
                  Fundamentally, all design decisions should respect freedom of speech. We can&apos;t control
                  the decisions or kinds of messages those around us choose to put into the world. But,
                  because we can be responsible of our own decisions, messages, and influences, for those
                  that choose a more accurate, evidence-based approach to sharing info on Twitter, design
                  decisions should be easy and familiar for them to find and use.
                </p>

                <div className={styles.personaImageContainer}>
                  <img className="margin-top-50" src={personaImage} />
                </div>

                <div className="ibm-plex-serif uppercase margin-top-50">The brand</div>
                <p className="p-text pink-border-container margin-top-16">
                  Twitter has an established brand and identity - to ideate for them requires my design
                  ideas to be in line with their mission, their brand guidelines, and style guidelines.
                </p>

                <div className="ibm-plex-serif uppercase margin-top-50">What is twitter and their mission?</div>
                <div className="margin-top-16 text-center">
                  <div className="grey-bg-container">
                    <img src={twitterMissionImage} />
                  </div>
                </div>

                <div className="ibm-plex-serif uppercase margin-top-50">What are twitter&apos;s guidelines?</div>
                <div className="margin-top-16 text-center">
                  <div className="yellow-border-container">
                    <img src={twitterBrandImage} />
                  </div>
                </div>

                <div className="ibm-plex-serif uppercase margin-top-50">What are some of twitter&apos;s current features?</div>
                <div className="margin-top-16 text-center">
                  <div className="grey-bg-container">
                    <img src={twitterFeaturesImage} />
                  </div>
                </div>

                <div className="ibm-plex-serif uppercase margin-top-50">What is Twitter&apos;s current user Flow?</div>
                <div className="margin-top-16 text-center">
                  <div className="yellow-border-container">
                    <img src={twitterCurrentFlowImage} />
                  </div>
                </div>

                <div className="ibm-plex-serif uppercase margin-top-50">Friction points in user flow</div>
                <div className="margin-top-16 text-center">
                  <div className="grey-bg-container">
                    <img src={twitterFrictionZoneImage} />
                  </div>
                </div>

                <div className={styles.questionDivider}>
                  <Svg className={styles.questionSvg} image="question" />
                  <div className={styles.questionDividerText}>
                    How can I improve the experience?
                  </div>
                </div>
              </TabTitleSection>
            </div>

            <div className="section-container" ref={this.ideate}>
              <TabTitleSection>
                <div className="ibm-plex-serif uppercase">User flow reversal and inspirations</div>
                <p className="p-text margin-top-16">
                  The deeper discoveries inspired me to reverse the current user flow
                  to allow users to create their tweet first then browse and select
                  evidence to support their tweet based on keywords and hashtags in the tweet.
                </p>

                <div className="margin-top-50 uppercase text-center">
                  Proposed user flow
                </div>

                <div className="margin-top-16 text-center">
                  Task: Tweet factual information with support from a reliable source
                </div>

                <div className="margin-top-16 text-center">
                  <img src={twitterProposedFlowImage} />
                </div>

                <p className="p-text margin-top-50">
                  With my plan of action laid out, I next sought out some inspirations
                  from some competitors to stay in line of the constraints I outlined for
                  myself to make my project&apos;s user experience easy and familiar for the user.
                </p>

                <div className="margin-top-50 text-center">
                  <img src={inspirationCollageImage} />
                </div>

                <div className={styles.questionDivider}>
                  <Svg className={styles.questionSvg} image="question" />
                  <div className={styles.questionDividerText}>
                    Awesome, what can I create?
                  </div>
                </div>
              </TabTitleSection>
            </div>

            <div className="section-container" ref={this.create}>
              <TabTitleSection>
                <div className="ibm-plex-serif uppercase">Pro-Tweets - Name, Icon, UI generation and integration</div>
                <p className="p-text margin-top-16">
                  Pro-tweets is short for professional tweets. This feature would allow users
                  to find supportive tweets from Twitter verified account holders to use as
                  a retweet to ultimately, fact check and put out accurate information into the world.
                </p>

                <div className="margin-top-50 text-center">
                  <GridItems columns={2} gap={4}>
                    <img src={proTweetIconImage} />
                    <div>
                      <div className="ibm-plex-serif uppercase text-left">The Icon</div>
                      <p className="p-text margin-top-16">
                        The icon idea I crafted was intended to evoke feelings of a cross between the keywords of
                        Twitter&apos;s mission and what Pro-tweets&apos; purpose is - to spread factual information.
                        The words and phrases I used to craft were specifically: Science, Centered, Global, Unified, Whole, Professional.
                      </p>
                    </div>
                    <img src={proTweetIconIntegrationImage} />
                    <div>
                      <div className="ibm-plex-serif uppercase text-left">Icon Integration</div>
                      <p className="p-text margin-top-16">
                        Because, the feature relies on the use of a tweet text field for keywords and
                        hashtags to generate a list, I chose to integrate the icon into the
                        existing tweet/retweet tool bar.
                      </p>
                    </div>
                    <img src={proTweetResultFeedImage} />
                    <div className={styles.resultFeedText}>
                      <div className="ibm-plex-serif uppercase text-left">Pro-tweets result feed</div>
                      <p className="p-text margin-top-16">
                        Results bar with a set of options of Twitter verified reliable resources inspired by Instagram stories view
                      </p>
                      <p className="p-text margin-top-16">
                        Vertically scrollable list of tweets from Twitter verified users sourced by similar keywords and hashtags in the tweet
                      </p>
                    </div>
                  </GridItems>
                </div>

                <div className="ibm-plex-serif uppercase margin-top-50">Demostration of prototype</div>
                <div className={styles.videoDemoContainer}>
                  <img src={videoContainerImage} />
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
              </TabTitleSection>
            </div>

            <div className="section-container" ref={this.evaluate}>
              <TabTitleSection>
                <div className="ibm-plex-serif uppercase">Incredible learning experience</div>
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

                <div className={styles.thankNote}>
                  Thank you so much for taking the time out to read. <Svg className={styles.heartSvg} image="heart" />
                </div>
              </TabTitleSection>
            </div>
          </div>
        </OutroScrollDetector>
      </div>
    );
  }
}
