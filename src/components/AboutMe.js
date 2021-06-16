import React from "react";
import author from "../about.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                 <img className="profile-img" src={author} alt="Author..." />
            </div>
         
        </div>

        <div className= "col-lg-6 col-xm-12">
        <h1 className="about-me-heading">
            About me
        </h1>
        <p>
        I am a self motivated mobile app developer. I always intented to
          complete work (project) under the give time period with my best of
          skills and experiences.
          <br />
          I always keep exploring the development of android and ios
          applications using latest technologies as Java and React Native and
          etc..
          <br />
          My goal is to obtain position as a Senior Software Engineer to learn
          and advance my current skill set and improve the services of the
          establishment.
          <br />
          I am skilled In dealing with problems in a resourceful manner and
          negotiating to achieve beneficial agreement.
          <br />I am always enthusiastic to learn and undertake new challenges.
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
  