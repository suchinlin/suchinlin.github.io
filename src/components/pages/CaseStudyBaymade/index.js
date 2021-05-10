import React from "react";

import headerImage from "assets/images/case-study-baymade/casestudy-baymade-header.png"
import qualityImage from "assets/images/case-study-baymade/casestudy-baymade-quality.png"
import currentNavImage from "assets/images/case-study-baymade/casestudy-baymade-current-nav.png"
import newNavImage from "assets/images/case-study-baymade/casestudy-baymade-new-nav.png"
import sketchesImage from "assets/images/case-study-baymade/casestudy-baymade-sketches.png"

class CaseStudyBaymade extends React.Component {

  render() {
    return (
      <div className="legacy-body">
        <div className="container content with-content-padding">
          <div className="grey uppercase font-weight-bold">Concept Project</div>
          <h1>Baymade-Beta</h1>
          <p>
            Efficient e-commerce desktop navigation experience for local brick and mortar business
          </p>

          <img className="full-width large-top-margin" src={headerImage} />

          <h2 className="large-top-margin">The Brief</h2>
          <p>
            A local Bay Area business, Baymade, needs to stay in competition against e-commerce
            giants and wants to introduce their own e-commerce shopping experience to their
            customers while still maintaining their local vibe.
          </p>

          <div className="flex-space-between-aligned flex-top-align large-top-margin">
            <div className="flex-item flex-item-50">
              <h2 className="title">Problem</h2>
              <p className="font-weight-bold">
                Confusing navigation and content arrangement
              </p>
              <p>
                "Careful Critic" shoppers already have a comprehensive checklist of criteria to
                go through to determine the quality of a purchase but the current navigation and
                organization alone leaves them feeling confused and frustrated. They need a less
                exhaustive and more satisfying method to finding, trusting, and purchasing Baymade's
                listed merchandise.
              </p>
            </div>
            <div className="flex-item flex-item-50">
              <h2 className="title">Solution</h2>
              <p className="font-weight-bold">
                Pave a Happy Path to an Organized Showroom
              </p>
              <p>
                By changing the information architecture of the website and providing a consistent
                pattern and hierarchy across the various criteria the "careful critic" requires to
                make a purchase, the target user will be able to analyze products more efficiently
                and effectively and thereby be more likely to get to the checkout flow. This can
                potentially not only increase revenue but also increase foot traffic to the store
                as well.
              </p>
            </div>
          </div>


          <img className="baymade-quality-img" src={qualityImage} />
          <p className="grey text-center">Internalizing the needs</p>


          <div className="flex-space-between-aligned flex-top-align large-top-margin">
            <div className="flex-item flex-item-33">
              <h4>Duration</h4>
              <div>Two Weeks</div>
              <br/>
              <h4>Team</h4>
              <div>Solo Project</div>
            </div>

            <div className="flex-item flex-item-33">
              <h4>Methods</h4>
              <div className="method-item">Competitive / Comparative analysis</div>
              <div className="method-item">Usability testing</div>
              <div className="method-item">Information architecture analysis</div>
              <div className="method-item">Content audit</div>
            </div>

            <div className="flex-item flex-item-33">
              <h4>Tools</h4>
              <div>Sketch</div>
              <br/>
              <h4>Deliverable</h4>
              <div>Clickable desktop prototype</div>
            </div>
          </div>

          <div className="flex-space-between-aligned flex-top-align large-top-margin">
            <div className="flex-item flex-item-50">
              <h2 className="title">Client</h2>
              <p className="font-weight-bold">
                Baymade
              </p>
              <p>
                Baymade is a retail gift shop and gallery seeking to connect local artists
                to their community. They sell anything from locally made arts to crafts to
                even workshops and classes and also allows their clients to make reservations
                for private events. They are out to "inspire people to make something of their
                own” and "act a a functional permanent local art and crafts fair”.
              </p>
            </div>
            <div className="flex-item flex-item-50">
              <h2 className="title">Target User</h2>
              <p className="font-weight-bold">
                Careful Critic
              </p>
              <p>
                Most important thing is QUALITY. They seek out familiar brands and, before making
                a purchase, they need to be able to take their time to shop, read and write reviews,
                analyze descriptions and details such as manufacturing standards and materials, and
                compare multiple items.
              </p>
            </div>
          </div>

          <h2 className="large-top-margin">Insights</h2>
          <p className="font-weight-bold">Opening doors of inspiration through empathic design</p>
          <p>
            One approach that worked well on this project was really understanding my target user
            and internalizing what matters to them. In doing so, I was able to understand the
            complex journey my target user must overcome in order to commit to trusting and
            purchasing something which enabled me to design accordingly.
          </p>

          <div className="flex-space-between-aligned flex-top-align large-top-margin">
            <div className="flex-item flex-item-100">
              <img className="case-study-img" src={currentNavImage} />
              <p className="grey">Main points of interest to the target user were too hidden</p>
            </div>
            <div className="flex-item flex-item-100">
              <img className="case-study-img" src={newNavImage} />
              <p className="grey new-nav-margin">New navigation makes points of interest more findable</p>
            </div>
          </div>

          <img className="full-width large-top-margin" src={sketchesImage} />
          <p className="grey text-center">E-commerce experience tailored to the target user</p>

          <h2 className="xlarge-top-margin">Results and Reflections</h2>
          <div className="flex-space-between-aligned flex-top-align">
            <div className="flex-item flex-item-33">
              <p className="font-weight-bold">Less time finding = More time buying</p>
              <p>
                Users, during usability testing, noted being satisfied with the layout of the
                information provided and further, while uncharacteristic of my target user,
                many users during usability testing demonstrated the check-out of an item in
                under 60 seconds from home page to product analysis to checkout confirmation page.
              </p>
            </div>

            <div className="flex-item flex-item-33">
              <p className="font-weight-bold">Card Sort of Products</p>
              <p>
                My design decisions for this sprint were based off of usability findings and
                identified pain-points in the navigation of the existing website. Ideally, a
                card sorting exercise to dictate my new information architecture and site map
                would be my next step to either confirm my design decisions or adjust them to
                what the users would anticipate to find.
              </p>
            </div>

            <div className="flex-item flex-item-33">
              <p className="font-weight-bold">Recruitment</p>
              <p>
                Usability testing with users identifying as consistent as possible with my
                target user, the "careful critic" shopper, would yield more accurate results
                of the satisfaction and effectiveness of the prototype.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

CaseStudyBaymade.propTypes = {
};

CaseStudyBaymade.defaultProps = {};

export default CaseStudyBaymade;
