import React from "react";
import { bool, func, shape, string } from 'prop-types';
import { withRouter } from 'react-router-dom';

import withWindowResize from "components/common/withWindowResize";
import Svg from "components/common/Svg";

import resumeFile from "assets/suchin_lin_resume.pdf";
import wallImage from "assets/images/wall.png";
import aboutSuImage from "assets/images/about_su.png";
import nycImage from "assets/images/nyc.png";
import myMethodImage from "assets/images/my_method.png";
import thumbMada from "assets/images/thumb_mada.png";
import thumbWebsiteRebrandImage from "assets/images/thumb_website_rebrand.png";
import thumbHealthTrackerImage from "assets/images/thumb_health_tracker.png";
import thumbLogoDesignImage from "assets/images/thumb_logo_design.png";
import thumbProTweetsImage from "assets/images/thumb_pro_tweets.png";
import thumbBeelovedImage from "assets/images/thumb_beeloved.png";
import thumbDiscordImage from "assets/images/thumb_discord.png";
// import thumbComingSoonImage from "assets/images/thumb_coming_soon.png";

import styles from "./index.css";

const CaseStudyItem = ({
  name,
  link,
  imageSrc
}) => {
  const handleOnClick = () => {
    if (name) {
      window.gtag('event', `casestudy_${name}_click`);
    }
  }
  return (
    <div className={styles.caseStudyItem}>
      {
        link ? (
          <a
            onClick={handleOnClick}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imageSrc} />
          </a>
        ) : <img src={imageSrc} />
      }
    </div>
  );
}

CaseStudyItem.propTypes = {
  name: string.isRequired,
  link: string.isRequired,
  imageSrc: string.isRequired,
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.workToggle = this.workToggle.bind(this);
    this.trackHomeResumeClick = this.trackHomeResumeClick.bind(this);
    this.trackHomeEmailClick = this.trackHomeEmailClick.bind(this);
    this.about = React.createRef();
    this.work = React.createRef();
    this.contact = React.createRef();
    this.state = {
      aboutSectionImageOffset: 0,
      caseStudy: {
        uxui: false,
        brand: false,
        digital: false,
        // form: false,
        // icon: false,
      }
    }
  }

  componentDidMount() {
    const { location: { hash }, history } = this.props;
    window.addEventListener('scroll', this.handleScroll);
    if (hash === '#work') {
      this.work.current.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => history.push('/'), 0);
    }
    if (hash === '#about') {
      this.about.current.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => history.push('/'), 0);
    }
    if (hash === '#contact') {
      this.contact.current.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => history.push('/'), 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    const { location: { hash }, history  } = this.props;
    if (prevProps.location.hash !== hash) {
      if (hash === '#work') {
        this.work.current.scrollIntoView({ behavior: "smooth" });
        window.setTimeout(() => history.push('/'), 0);
      }
      if (hash === '#about') {
        this.about.current.scrollIntoView({ behavior: "smooth" });
        window.setTimeout(() => history.push('/'), 0);
      }
      if (hash === '#contact') {
        this.contact.current.scrollIntoView({ behavior: "smooth" });
        window.setTimeout(() => history.push('/'), 0);
      }
    }
  }

  handleScroll () {
    const aboutSectionFromTop = this.about.current.getBoundingClientRect().top;
    const aboutSectionPercentageIn = (1 - (aboutSectionFromTop / window.innerHeight)) * 100;
    const aboutSectionScrollOffset = 100 - aboutSectionPercentageIn;

    if (aboutSectionPercentageIn >= 0 && aboutSectionPercentageIn <= 100) {
      this.setState({aboutSectionImageOffset: (aboutSectionScrollOffset * 10) + 100})
    }

    if (aboutSectionPercentageIn > 100) {
      this.setState({aboutSectionImageOffset: 100})
    }
  }

  workToggle(type) {
    const { caseStudy } = this.state;
    window.gtag('event', `works_dropdown_${type}_click`);
    const caseStudyState = Object.keys(caseStudy).reduce((initial, item) => {
      if (type === item) {
        // turned off
        return {
          ...caseStudy,
          [type]: !caseStudy[type]
        }
      }

      return {
        ...caseStudy,
        [type]: !caseStudy[type]
      }

    }, { ...caseStudy });

    this.setState({
      caseStudy: caseStudyState
    })
  }

  trackHomeResumeClick() {
    window.gtag('event', 'home_resume_click');
  }

  trackHomeEmailClick() {
    window.gtag('event', 'home_email_click');
  }

  render() {
    // const {
    //   size: { isMobile }
    // } = this.props;

    const {
      aboutSectionImageOffset,
      caseStudy,
    } = this.state;

    return (
      <div className={styles.home}>
        <h1 className={`${styles.header} ${styles.restrict1440}`}>
          Hello! I’m Suchin Lin, a UX Designer. <br />
          And, I&apos;m bringing my love & passion for helping people with <span className={styles.thoughtful}>thoughtful</span> solutions from healthcare to now design.
        </h1>

        <div className={styles.wallImageContainer}>
          <img className={styles.wallImage} src={wallImage} />
        </div>

        <section className={`${styles.worksContainer} ${styles.restrict1440}`} ref={this.work}>
          <h1 className={styles.worksHeader}>Works</h1>
          <div className={styles.workItem}>
            <a onClick={() => this.workToggle('uxui')}>
              UX/UI
            </a>
            {
              caseStudy.uxui ? (
                <div className={styles.caseStudyContainer}>
                  <CaseStudyItem
                    imageSrc={thumbDiscordImage}
                    link="https://www.behance.net/gallery/163441563/Discord-Dashboard-Concept"
                    name="discord"
                  />
                  <CaseStudyItem
                    imageSrc={thumbHealthTrackerImage}
                    link="https://www.behance.net/gallery/156368307/iOS-Health-Tracker-App"
                    name="health_tracker"
                  />
                  <CaseStudyItem
                    imageSrc={thumbProTweetsImage}
                    link="https://www.behance.net/gallery/156366863/Protweets-Feature-Design-Concept"
                    name="protweets"
                  />
                  <CaseStudyItem
                    imageSrc={thumbMada}
                    link="https://www.behance.net/gallery/157245147/UX-Research-Case-Study-for-MADA"
                    name="mada"
                  />
                </div>
              ) : null
            }
          </div>
          <div className={styles.workItem}>
            <a onClick={() => this.workToggle('brand')}>
              Brand
            </a>
            {
              caseStudy.brand ? (
                <div className={styles.caseStudyContainer}>
                  <CaseStudyItem
                    imageSrc={thumbBeelovedImage}
                    link="https://www.behance.net/gallery/158101341/Custom-Brand-Design-for-client"
                    name="beeloved"
                  />
                  <CaseStudyItem
                    imageSrc={thumbWebsiteRebrandImage}
                    link="https://www.behance.net/gallery/155867613/My-Portfolio-Redesign-2022-Edition"
                    name="portfolio_rework"
                  />
                </div>
              ) : null
            }
          </div>
          <div className={styles.workItem}>
            <a onClick={() => this.workToggle('digital')}>
              Digital Art
            </a>
            {
              caseStudy.digital ? (
                <div className={styles.caseStudyContainer}>
                  <CaseStudyItem
                    imageSrc={thumbLogoDesignImage}
                    link="https://www.behance.net/gallery/156359817/Crafting-My-Personal-Logo"
                    name="personal_logo"
                  />
                </div>
              ) : null
            }
          </div>
          {/*
          <div className={styles.workItem}>
            <a onClick={() => this.workToggle('form')}>
              Form Design
            </a>
            {
              caseStudy.form ? (
                <div className={styles.caseStudyContainer}>
                  <CaseStudyItem
                    imageSrc={thumbComingSoonImage}
                  />
                </div>
              ) : null
            }
          </div>
          <div className={styles.workItem}>
            <a onClick={() => this.workToggle('icon')}>
              Iconography
            </a>
            {
              caseStudy.icon ? (
                <div className={styles.caseStudyContainer}>
                  <CaseStudyItem
                    imageSrc={thumbComingSoonImage}
                  />
                </div>
              ) : null
            }
          </div>
          */}
        </section>

        <section className={styles.aboutMe} ref={this.about}>
          <h2 className={`${styles.aboutMeHeader} ${styles.restrict1440}`}>About me</h2>
          <div className={styles.aboutMeContent}>
            <div className={`${styles.aboutMeTextContainer} ${styles.restrict1440}`}>
              <div className={styles.aboutMeText}>
                Inspired <span className={styles.byTextOne}>by<span className={styles.byTextRight}>similarities</span></span>
              </div>
              <div className={styles.aboutMeText}>
                Intrigued
                <span className={styles.byTextTwo}>by<span className={styles.byTextRight}>differences</span></span>
              </div>
              <div className={styles.aboutMeText}>
                Impelled <span className={styles.byTextThree}>by<span className={styles.byTextRight}>human needs</span></span>
              </div>
              <div className={styles.aboutMeImageContainer} style={{ top: `${aboutSectionImageOffset}px` }}>
                <img className={styles.aboutImage} src={aboutSuImage} />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.myStory} ${styles.restrict1440}`}>
          <Svg className={styles.quoteSvg} image="quoteYellow" />
          <div className={styles.myStoryHeader}>
            Every great design begins <br />
            with an even greater story.
          </div>
          <div className={styles.myStorySubHeader}>
            Lorinda Mamo
          </div>

          <div className={styles.myStoryContainer}>
            <div className={styles.myStoryLeft}>
              <img className={styles.nycImage} src={nycImage} />
            </div>
            <div className={styles.myStoryRight}>
              <div className={styles.storyRightHeader}>
                <strong className={styles.myStoryTitle}>MY STORY</strong> begins in New York City.
              </div>
              <p className={styles.storyText}>
                Helping people and brightening someone’s day has always brought me great joy.
              </p>
              <p className={styles.storyText}>
                Naturally, I looked for career opportunities where I can immerse myself in doing just that and went into healthcare straight out of highschool to work as a Registered Nurse.
              </p>
              <p className={styles.storyText}>
                This experience was incredibly rewarding and enriching to my soul.
              </p>
              <p className={styles.storyText}>
                For almost 10 years, I cared and advocated for many patients and families enduring their darkest, most trying times and got to meet and work alongside a lot of inspirational people to help our patients persevere.
              </p>
              <p className={styles.storyText}>
                But, with every interaction, both with colleagues and patients, I was left wanting to be able to do more, beyond the bedside, beyond the hospital’s walls, to prevent health scares, increase work outcomes, and just overall improve peoples’ quality of life.
              </p>
              <p className={styles.storyText}>
                And, that’s how I discovered <strong>User Experience Design</strong>.
              </p>
              <p className={styles.storyText}>
                My career mission is to continue to lend a thoughtful helping hand to those around me and apply my full range of skills to make great designs that deliver high impact on the improvement of people’s quality of life.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.myMethodContainer}>
          <img className={styles.myMethodImage} src={myMethodImage} />
        </div>

        <section className={`${styles.myMethods} ${styles.restrict1440}`}>
          <div className={styles.methodText}>
            DIS <br />
            COV <br />
            ER
          </div>
          <div className={styles.methodText}>
            DE <br />
            FI <br />
            NE
          </div>
          <div className={styles.methodText}>
            ID <br />
            EA <br />
            TE
          </div>
          <div className={styles.methodText}>
            CR <br />
            EA <br />
            TE
          </div>
          <div className={styles.methodText}>
            EVA <br />
            LUA <br />
            TE
          </div>
        </section>

        <section className={styles.restrict1440}>
          <h2 className={styles.skillsHeader}>Skills</h2>
          <div className={styles.skillsTools}>
            <div className={styles.skillsToolsItem}>
              UX/UI Design <br />
              Interaction Design <br />
              Design-System Thinking <br />
              Agile Framework
            </div>
            <div className={styles.skillsToolsItem}>
              User Research <br />
              Competitive Research <br />
              Comparative Research <br />
              Personas and Archetypes
            </div>
            <div className={styles.skillsToolsItem}>
              Empathy Maps <br />
              Journey Maps <br />
              Storyboards <br />
              Sketching
            </div>
            <div className={styles.skillsToolsItem}>
              Wireframing <br />
              Prototyping <br />
              Usability Testing <br />
              Iconography
            </div>
          </div>

          <h2 className={styles.toolsHeader}>Tools</h2>
          <div className={styles.skillsTools}>
            <div className={styles.skillsToolsItem}>
              Figma <br />
              Canva <br />
              Sketch <br />
              Invision
            </div>
            <div className={styles.skillsToolsItem}>
              Procreate <br />
              Miro <br />
              Trello <br />
              Clickup
            </div>
            <div className={styles.skillsToolsItem}>
              Typeform <br />
              Survey Monkey <br />
              Google Suite <br />
              Google Analytics
            </div>
            <div className={styles.skillsToolsItem}>
              <span className={styles.toolsYellowBlock} />
            </div>
          </div>
        </section>

        <div className={styles.resumeButtonContainer}>
          <a
            onClick={this.trackHomeResumeClick}
            className={styles.resumeButton}
            target="_blank"
            rel="noopener noreferrer"
            href={resumeFile}
          >
            Download my resume
          </a>
        </div>

        <div className={styles.connectTextContainer} ref={this.contact}>
          <div className={`${styles.connectText} ${styles.restrict1440}`}>
            Let&apos;s Connect
          </div>
        </div>

        <div className={`${styles.feedbackContainer} ${styles.restrict1440}`}>
          <div className={styles.feedbackHeader}>
            Got feedback or a cool project you want to explore with me? - I’d 💛 to hear from you!
          </div>
          <div className={styles.emailContainer}>
            <a
              onClick={this.trackHomeEmailClick}
              className={styles.emailText}
              href="mailto:suchinUX@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              suchinUX@gmail.com
            </a>
          </div>
        </div>


      </div>
    );
  }
}

Home.propTypes = {
  size: shape({ isMobile: bool }).isRequired,
  location: shape({ hash: string }).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
};

Home.defaultProps = {};

export default withWindowResize(withRouter(Home));
