import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdversal, faAndroid, faArtstation, faDigitalOcean, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAd, faDesktop, faMobile, faShapes } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5"> my services</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">

  <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>  </div>


                <h3>Web Design</h3>
                <p>
                  s dolor do reprehenderit mollit officia nisi est aliquip
                  occaecat occaecat enim dolore. Lorem irure dolore culpa
                  commodo aliqua dolore eu mollit nulla qui esse commodo nulla.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">

                
  <div className="circle"> <FontAwesomeIcon className="icon" icon={faAndroid} size="2x"/>  </div>
                <h3>Android Development</h3>
                <p>
                  s dolor do reprehenderit mollit officia nisi est aliquip
                  occaecat occaecat enim dolore. Lorem irure dolore culpa
                  commodo aliqua dolore eu mollit nulla qui esse commodo nulla.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                
  <div className="circle"> <FontAwesomeIcon className="icon" icon={faShapes} size="2x"/>  </div>
                <h3>Ui/Ux</h3>
                <p>
                  s dolor do reprehenderit mollit officia nisi est aliquip
                  occaecat occaecat enim dolore. Lorem irure dolore culpa
                  commodo aliqua dolore eu mollit nulla qui esse commodo nulla.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                
  <div className="circle"> <FontAwesomeIcon className="icon" icon={faAd} size="2x"/>  </div>
                <h3>Digital Marketing</h3>
                <p>
                  s dolor do reprehenderit mollit officia nisi est aliquip
                  occaecat occaecat enim dolore. Lorem irure dolore culpa
                  commodo aliqua dolore eu mollit nulla qui esse commodo nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Services;
