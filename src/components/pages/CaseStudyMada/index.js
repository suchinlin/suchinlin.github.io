import React from "react";

import ImageGallery from 'react-image-gallery';

import pickingCityVideo from "assets/videos/mada-user-picking-city.mov";
import hostGuideVideo from "assets/videos/mada-current-host-guide.mov";
import hostCreateVideo from "assets/videos/mada-host-create.mov";

import madaHeroImage from "assets/images/case-study-mada/casestudy-mada-hero.png";
import intrestToHostImage from "assets/images/case-study-mada/casestudy-mada-interest-to-host.png";
import unsuccessfulImage from "assets/images/case-study-mada/casestudy-mada-unsuccessful.png";
import dropoffPointImage from "assets/images/case-study-mada/casestudy-mada-dropoff-point.png";
import largeQuoteImage from "assets/images/case-study-mada/large-quote.png";
import motivatorChartImage from "assets/images/case-study-mada/casestudy-mada-key-motivator-chart.png";
import challengeChartImage from "assets/images/case-study-mada/casestudy-mada-host-challenge-chart.png";
import overCoronaImage from "assets/images/case-study-mada/casestudy-mada-comm-over-corona.png";
import slide1Image from "assets/images/case-study-mada/casestudy-mada-carousel-navigate-1.png";
import slide2Image from "assets/images/case-study-mada/casestudy-mada-carousel-motivate-2.png";
import slide3Image from "assets/images/case-study-mada/casestudy-mada-carousel-helpcreate-3.png";
import slide4Image from "assets/images/case-study-mada/casestudy-mada-carousel-aggregate-4.png";
import slide5Image from "assets/images/case-study-mada/casestudy-mada-carousel-delegate-5.png";

const images = [
  {
    original: slide1Image,
  },
  {
    original: slide2Image,
  },
  {
    original: slide3Image,
  },
  {
    original: slide4Image,
  },
  {
    original: slide5Image,
  },
];

class CaseStudyMada extends React.Component {

  render() {
    return (
      <div className="legacy-body">
        <div className="container content with-content-padding">
          <div className="pre-headline font-weight-bold">Client Project</div>
          <h1>Materializing Hosts' Motivations</h1>
          <p>
            Getting MADA hosts from potential to actual
          </p>

          <div className="text-center">
            <img className="two-third-width large-top-margin" src={madaHeroImage} />
            <p className="grey">
              Make America Dinner Again (MADA) - Dinners where people gather to socialize, humanize, depolarize our communities and country!
            </p>
          </div>

          <div className="green text text-center large-top-margin large-bottom-margin">
            The Short
          </div>

          <div className="pre-headline large-top-margin">The Brief</div>
          <h4>Plenty of Guests, Not Enough Hosts</h4>
          <p>
            There are more people who register to attend MADA dinners as guests than those who
            register to express interest to host a MADA dinner. And even among those who express
            interest in hosting a dinner, many often do not follow through to actually hosting.
          </p>

          <div className="flex-space-between-aligned flex-top-align large-top-margin">
            <div className="flex-item flex-item-25">
              <h5>Team Project</h5>
              <div className="list-top-spacing">Suchin Lin</div>
              <div className="list-top-spacing">Melis Ogutcu</div>
              <div className="list-top-spacing">Malina Cheeneebash</div>
            </div>

            <div className="flex-item flex-item-25">
              <h5>Team Goals</h5>
              <div className="list-top-spacing">Understand host's journey</div>
              <div className="list-top-spacing">Identify potential barriers</div>
            </div>

            <div className="flex-item flex-item-25">
              <h5>Tools</h5>
              <div className="list-top-spacing">Figma</div>
              <div className="list-top-spacing">Whimsical</div>
              <div className="list-top-spacing">Google Forms</div>
            </div>

            <div className="flex-item flex-item-25">
              <h5>Duration</h5>
              <div className="list-top-spacing">3 week design sprint</div>
            </div>
          </div>

          <div className="flex-space-between-aligned flex-top-align large-top-margin">
            <div className="flex-item flex-item-50">
              <div className="pre-headline font-weight-bold">Problem</div>
              <h4>Can't Finish What Hasn’t Started</h4>
              <p>
                To go from potential to actual, hosts need a better way to find the information they need to host a
                dinner, address their concerns about hosting a dinner, and keep their motivations up.
              </p>
            </div>
            <div className="flex-item flex-item-50">
              <div className="pre-headline font-weight-bold">Solution</div>
              <h4>Materialize Motivations</h4>
              <p>
                Re-designed desktop experience that helps keep potential hosts motivated
                to host a dinner and enables them to begin the host journey on MADA's website
                while they're actively motivated, curious and looking for information on hosting!
              </p>
            </div>
          </div>

          <div className="flex-space-between-aligned flex-top-align large-top-margin text-center">
            <div className="flex-item flex-item-100">
              <div className="pre-headline font-weight-bold">Prototype</div>
              <h4>Host Motivation Materializing</h4>
              <div className="text-center medium-top-margin">
                <video height="428" className="video" controls autoPlay muted loop>
                  <source src={hostCreateVideo} />
                </video>
                <p className="grey text-center">
                  Step by step materialization of the motivation hosts bring with them to the MADA website
                </p>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="green text text-center large-top-margin large-bottom-margin">
            The Full Case Study
          </div>

          <div className="large-top-margin pre-headline font-weight-bold">Kickoff</div>
          <h4>The Three Phases of Hosting</h4>
          <p>
            Per the project brief and especially after our kickoff meeting with our
            client, my team and I understood that Make America Dinner Again dinner
            hosts go through 3 different phases during their host journey - PRE, INTRA, and
            POST phases.
          </p>

          <div className="flex-space-between-aligned flex-top-align large-top-margin sub-content">
            <div className="flex-item flex-item-33">
              <h4 className="uppercase text-center grey">Pre</h4>
              <p className="small-font text-center">
                During the Pre-host phase, potential hosts <strong className="text">discover</strong> Make America Dinner
                Again and <strong className="text">search</strong> for ways they can host their own dinner.
              </p>
              <p className="small-font text-center">
                Hosts would ideally either <u className="text">register</u> to host a MADA dinner on our client's
                website, personally <u className="text">reach out</u> to our client by email or social media, or
                just download all the available material on our client’s website and begin
                the <u className="text">host journey on their own</u>.
              </p>
            </div>

            <div className="flex-item flex-item-33">
              <h4 className="uppercase text-center grey">Intra</h4>
              <p className="small-font text-center">
                The intra-host phase is the more arduous, but exciting <strong className="text">climax</strong> phase where a
                potential host becomes an actual host and must both <u className="text">organize and facilitate</u>
                the MADA dinner.
              </p>
            </div>

            <div className="flex-item flex-item-33">
              <h4 className="uppercase text-center grey">Post</h4>
              <p className="small-font text-center">
                Last, but not least, the post-host phase is, as implied, the phase <strong className="text">after </strong>
                the MADA dinner <strong className="text">completion</strong>.
              </p>
              <p className="small-font text-center">
                During this phase hosts decide things like <u className="text">sharing their dinner experience</u> on
                social media, <u className="text">following up</u> with guests, providing <u className="text">feedback</u> to our client on how
                their dinner went, and/or, hopefully, anticipating or <u className="text">planning another</u>
                future MADA dinner event.
              </p>
            </div>
          </div>

          <div className="large-top-margin text">
            As confirmed by survey responders, somewhere between the Pre and Intra phase, many hosts
            were abandoning their original intent to host - we wanted to find out the WHY.
          </div>

          <div className="flex-space-between-aligned flex-align small-top-margin sub-content">
            <div className="flex-item flex-item-50">
              <img className="case-study-img" src={intrestToHostImage} />
            </div>
            <div className="flex-item flex-item-50">
              <img className="case-study-img" src={unsuccessfulImage} />
            </div>
          </div>
          <p className="grey text-center medium-top-margin">
            83.3% of survey responders were unsuccessful to host
          </p>

          <div className="large-top-margin pre-headline font-weight-bold">Assessment</div>
          <h4>Sooner Than the Latter</h4>
          <div className="flex-space-between-aligned flex-top-align">
            <div className="flex-item flex-item-66">
              <p>
                Through our preliminary research, <i>ie: heuristic evaluation, content audit and
                information architeture analysis</i>, my team and I hypothesized that perhaps the
                potential barriers users are experiencing to actually getting to host a dinner
                are not in the latter but occurring more sooner - in the "Pre" phase.
              </p>
              <p className="medium-top-margin">
                Usability testing of our client’s website confirmed our hypothesis.
                Users were given a scenario, that they are motivated to host a MADA dinner,
                and were tasked to register on the MADA website to host a dinner.
              </p>
            </div>
            <div className="flex-item flex-item-33">
              <div className="text small-bottom-margin font-weight-bold dark-grey">Heuristic Evaluation</div>
              <div className="font-weight-bold xsmall-font dark-grey">Findability</div>
              <p className="xsmall-font dark-grey">
                Users could not find the type form corresponding to their needs
              </p>
              <div className="font-weight-bold xsmall-font dark-grey">Clarity</div>
              <p className="xsmall-font dark-grey">
                Call-to-action buttons are labeled less intuitively
              </p>
              <div className="font-weight-bold xsmall-font dark-grey">Learnability</div>
              <p className="xsmall-font dark-grey">
                Users could not immediately identify or learn call-to-actions or host-related information
              </p>
              <div className="font-weight-bold xsmall-font dark-grey">Error Manageability</div>
              <p className="xsmall-font dark-grey">
                Users could not change the wrong typeform they entered
              </p>
            </div>
          </div>

          <div className="text small-top-margin">
            Users were unable to find the correct typeform questionnaire for registraton to even begin
            the process to host.
          </div>

          <div className="flex-space-between-aligned small-top-margin flex-top-align">
            <div className="flex-item flex-item-100">
              <div className="text-center">
                <img className="case-study-img drop-off-img" src={dropoffPointImage} />
              </div>
            </div>
          </div>

          <div className="flex-space-between-aligned small-top-margin">
            <div className="flex-item flex-item-50">
              <p>
                We uncovered that because the various typeforms were hidden behind buttons that
                were grouped together and because the host typeform questionnaire was hidden behind
                "Host in a NEW CITY", potential hosts were entering data into the wrong
                questionnaires and, far too late into the wrong form, finding out they were
                in the wrong place.
              </p>
            </div>
            <div className="flex-item flex-item-50 text-center">
              <video height="269" className="video" controls autoPlay muted loop>
                <source src={pickingCityVideo} />
              </video>
            </div>
          </div>

          <div className="flex-space-between-aligned large-top-margin">
            <div className="flex-item flex-item-50 text-center">
              <video height="269" className="video" controls autoPlay muted loop>
                <source src={hostGuideVideo} />
              </video>
            </div>
            <div className="flex-item flex-item-50">
              <p>
                Further, still driven to host a dinner, users returned to the website and deferred
                to the Host Guide for information and signs on registering but even upon arriving
                there, the robust and lengthy guide presenting too much information too early in the process
                exacerbated their confusion and frustration.
              </p>
            </div>
          </div>

          <div className="large-top-margin">
            <div className="quote-box">
              <img className="quote-img" src={largeQuoteImage} />
              <p>This homepage does not speak to me as a host</p>
            </div>
            <div className="quote-box left-25">
              <img className="quote-img" src={largeQuoteImage} />
              <p>It was too much information for me and I couldn't easily find the information I needed</p>
            </div>
            <div className="quote-box left-50">
              <img className="quote-img" src={largeQuoteImage} />
              <p>I was confused on where to start. I saw my city on the first thing at the page, I selected San Francisco</p>
            </div>
            <div className="quote-box left-75">
              <img className="quote-img" src={largeQuoteImage} />
              <p>I felt no connection with MADA. I was not sure where they are helping</p>
            </div>
          </div>

          <p className="small-top-margin">
            It became very clear, potential hosts need a better way to find the right information about hosting at the right time and a way to stay motivated through their journey.
          </p>

          <div className="large-top-margin pre-headline font-weight-bold">Planning</div>
          <h4>Motivate, and Materialize</h4>
          <p>
            With the insight gained through our research, and with the understanding that a
            behavioral change occurs at the convergence of motivation, ability, and a prompt,
            we distilled our client’s existing database of typeform* responses, sent out a survey,
            and conducted user interviews and aimed to gain a deeper level of empathy of our potential hosts.
          </p>
          <div className="text small-top-margin">
            We distilled their primary motivators and biggest potential barriers to be:
          </div>

          <div className="flex-space-between-aligned flex-top-align small-top-margin sub-content">
            <div className="flex-item flex-item-50 text-center">
              <h5 className="text-center small-top-margin">1. What are their primary motivators?</h5>
              <img className="case-study-img" src={motivatorChartImage} />
              <p className="grey text-center top-marign-43">
                Potential hosts are motivated to unify their communities and country, meet people
                and talk, and, of course, eat delicious food together!
              </p>
            </div>
            <div className="flex-item flex-item-50 text-center">
              <h5 className="text-center small-top-margin">2. What are their biggest barriers?</h5>
              <img className="case-study-img" src={challengeChartImage} />
              <p className="grey text-center">
                The most common barriers potential hosts feel they will face are issues with recruiting
                dinner guests, facilitating conversations, and matters regarding locations.
              </p>
            </div>
          </div>

          <p className="dark-grey small-font text-center small-top-margin">
            <i>
              *Typeform is an online, form-building software used to build anything from quizzes
              to questionnaires to surveys.
            </i>
          </p>

          <div className="large-top-margin pre-headline font-weight-bold">Intervention</div>
          <h4>Prompt-Production Despite Pandemic</h4>
          <div className="flex-space-between-aligned flex-top-align">
            <div className="flex-item flex-item-66">
              <p>
                Despite the shelter in place protocol in effect consequent of the novel coronavirus,
                we were dedicated to our developments and commited to maintain communication
                with each other and, most importantly, with our client on our findings and pivoted
                to an online platform to proceed with production.
              </p>
            </div>
            <div className="flex-item flex-item-33">
              <img className="case-study-img" src={overCoronaImage}/>
            </div>
          </div>
          <p className="small-top-margin">
            Through design studio sessions and further research for inspiration from competitors
            and comparators, such as Living Room Conversations, we organically applied the motivation,
            ability, and prompt principle, and developed a desktop experience that focuses on
            motivating and also proactive engagement of the motivations.
          </p>

          <p className="small-top-margin">
            We spread out several visual and verbal cues to not only heighten the anticipation to
            host but also appease the pre-existing concerns that the hosts carry with them even before
            getting to host.
          </p>

          <p className="small-top-margin">
            We also simplified the steps to hosting and displayed it in a host-dominant section on
            the front page.
          </p>


          <div className="small-top-margin">
            <ImageGallery
              showBullets
              items={images}
              autoPlay
              showThumbnails={false}
              showFullscreenButton={false}
            />
          </div>

          <div className="pre-headline font-weight-bold large-top-margin">Results and Reflections</div>
          <div className="flex-space-between-aligned flex-top-align">
            <div className="flex-item flex-item-33">
              <h4>Successful Start</h4>
              <p>
                Usability testing of our design revealed that users were able to successfully
                begin the host journey and locate the information they needed to follow through.
              </p>
            </div>

            <div className="flex-item flex-item-33">
              <h4>Guest Flow</h4>
              <p>
                For this design sprint, we focused on potential hosts who haven’t started the
                host process and consequently developed the beginnings of a guest flow. Our next design process would be to elaborate
                on the guest flow sequence.
              </p>
            </div>

            <div className="flex-item flex-item-33">
              <h4>COVID-19</h4>
              <p>
                Due to the impact of the novel coronavirus on social interactions, some users
                responded with wishes to conduct MADA dinners virtually.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

CaseStudyMada.propTypes = {
};

CaseStudyMada.defaultProps = {};

export default CaseStudyMada;
