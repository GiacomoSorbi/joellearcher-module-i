import React from "react";

import joelleprofilepic from "./images/Joelle2.jpg";

const Profile = props => (
  <div className="profile-main">
    <div className="container"></div>
    <div className="profile-image">
      <img
        className="profile-image1"
        src={joelleprofilepic}
        alt="woman posing for camera"
      />
      <div className="profile-text">
        <h2>About me</h2>
      </div>
    </div>
  </div>
);
export default Profile;
