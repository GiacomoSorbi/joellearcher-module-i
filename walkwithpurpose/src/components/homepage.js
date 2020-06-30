import React from "react";
import homepageimage from "./images/Walthamstow-Market.jpg";
import homethumbnail1 from "./images/Grandad-Monty.jpg";
import homethumbnail2 from "./images/Nanny-Rose.jpg";
import homethumbnail3 from "./images/Danielle2.jpg";

const Home = props => (
  <div className="main-content">
    <div className="container"></div>
    <h2>{props.webname}</h2>
    <div className="home-image">
      <img
        className="home-image1"
        src={homepageimage}
        alt="woman and man in Walthamstow market"
      />
    </div>

    <div className="home-thumbnail-1">
      <img className="homethumbnail1" src={homethumbnail1} alt="Grandad" />
    </div>

    <div className="home-thumbnail-2">
      <img className="homethumbnail2" src={homethumbnail2} alt="Nanny Rose" />
    </div>

    <div className="home-thumbnail-3">
      <img className="homethumbnail3" src={homethumbnail3} alt="Danielle" />
    </div>
  </div>
);
export default Home;
