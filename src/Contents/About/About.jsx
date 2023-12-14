import React from "react";


function About(){
    return(
    <div className="about-section">
      <h1>Our Team</h1>
         <div className="profile-container">
        <div className="profile">
            <div className="profile-picture">
                <img src="self.png" alt="Swasthik Acharya"/>
            </div>
            <div className="name-container">
                <h1>Swasthik Acharya</h1>
                <h3>Yoga Instructor</h3>
            </div>           
        </div>
        <div className="profile">
            <div className="profile-picture">
                <img src="naga.jpg" alt="Swasthik Acharya"/>
            </div>
            <div className="name-container">
                <h1>Nagashayana</h1>
                <h3>Yoga Instructor</h3>
            </div>           
        </div>
    </div>
    </div>

    )
}

export default About;