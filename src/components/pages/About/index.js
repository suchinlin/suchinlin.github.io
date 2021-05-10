import React from "react";

import selfImage from "assets/images/about/about-self.png";
import designImage from "assets/images/about/about-design.png";
import inspirationImage from "assets/images/about/about-inspiration.png";

class About extends React.Component {

  render() {
    return (
      <div className="legacy-body">
        <div className="container content with-content-padding">
          <div className="flex-space-between-aligned srow">
            <div className="flex-item flex-item-50">
              <img className="box-shadow about-photo-375" src={selfImage} />
            </div>
            <div className="flex-item flex-item-50">
              <h2 className="title green">About me</h2>
              <p>
                I'm a UX Designer coming to the tech space with 10 years of professional experience
                in healthcare working as a registered nurse in New York!
              </p>
              <p>
                I was born in Queens, raised in Brooklyn, and am now pursuing my UX dream in San Francisco!
              </p>
            </div>
          </div>

          <div className="flex-space-between-aligned srow">
            <div className="flex-item flex-item-50">
              <h2 className="title green">When I'm not designing</h2>
              <p>
                Find me outdoors hiking, running, and working out!
              </p>
              <p>
                I also have a hobby in modern calligraphy in both English and Korean
                and aspire to one day create a font of my own!
              </p>
              <p>
                Find me at your nearest park, track, or community race pumped up and knocking down miles!
              </p>
            </div>
            <div className="flex-item flex-item-50">
              <img className="box-shadow full-width about-photo-500" src={designImage}/>
            </div>
          </div>

          <div className="flex-space-between-aligned srow flex-top-align">
            <div className="flex-item flex-item-50">
              <h2 className="title green">A few more of my favorite things</h2>
              <ul className="text">
                <li>Pilates</li>
                <li>Doodling</li>
                <li>Eating Yummy Food</li>
                <li>All things Ghibli</li>
              </ul>
            </div>
            <div className="flex-item flex-item-50">
              <h2 className="title green">Upcoming goals</h2>
               <ul className="text">
                  <li>UX Hackathon</li>
                  <li>Chicago Marathon</li>
                  <li>Modern Caligraphy</li>
                  <li>Korean Caligraphy</li>
                </ul>
            </div>
          </div>

          <div className="flex-space-between-aligned srow">
            <div className="flex-item flex-item-50">
              <img className="box-shadow about-photo-375" src={inspirationImage} />
            </div>
            <div className="flex-item flex-item-50">
              <h2 className="title green">Recent Inspiration</h2>
              <p>
                A friend of mine introduced this poem to me and I found it very inspirational
                and applicable to me because not only does it talk about NY and CA but more
                especially about appreciating my journey and where I am in my life.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
};

About.defaultProps = {};

export default About;
