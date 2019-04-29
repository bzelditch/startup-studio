import {EventEmitter} from "events";
import dispatcher from "../../dispatcher"
import * as VideoActionConstants from '../../actions/videos/VideoActionConstants'
import randomMaterialColor from 'random-material-color'
import {Avatar} from '@material-ui/core';
import React from "react";

function getCurrentDatePlusDays(days) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate.toLocaleDateString('en-US', options);
}

class CoachStore extends EventEmitter {
  constructor() {
    super();

    this.coachDatabase =[
      {
        coachId: 1,
        firstName: "Gigi",
        lastName: "Rosenburg",
        createTimestamp: getCurrentDatePlusDays(-10),
        avatarColor: randomMaterialColor.getColor({text: "Gigi Rosenburg"}),
        profileImage: require('../../static/images/coaches/GigiRosenberg.jpeg'),

        specialties: ["Media Presentations"],
        workExperience: ["Professor at UCLA","Ted X speaker"],
        responseTime: "24 Hours",
        videoLink: 'GXoYll6Wbe0',
        rating: 4.68,

        intro: "As a consultant and public speaking coach, I draw upon my background in theater, psychology, visual art, production management, storytelling and corporate communications. I teach ambition artists how to get stuff done in the direction of true north, wherever that may be. And I teach public speakers how to get standing ovations. ",
      },
      {
        coachId: 2,
        firstName: "Julia",
        lastName: "Crenshaw",
        createTimestamp: getCurrentDatePlusDays(-20),
        avatarColor: randomMaterialColor.getColor({text: "Julia Crenshaw"}),
        profileImage: require('../../static/images/coaches/JuliaCrenshaw.jpeg'),

        specialties: ["Startup Pitches"],
        workExperience: ["BoxGroup", "Union Square Ventures"],
        responseTime: "24 Hours",
        videoLink: '02yv-Xf77SQ',
        rating: 4.78,

        intro: "In New York City, I worked for 15 years for VC firms. As vice-president at BoxGroup and a partner at Union Square Ventures, I have had experience seeing and evaluating many pitch presentations.",
      },
      {
        coachId: 3,
        firstName: "Milton",
        lastName: "Hinton",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Milton Hinton"}),
        profileImage: require('../../static/images/coaches/MiltonHinton.jpeg'),

        specialties: ["Acting", "Delivery Skills"],
        workExperience: ["Harvard University"],
        responseTime: "24 Hours",
        videoLink: 'fh28oGbPmr4',
        rating: 4.76,

        intro: "",
      },
    ];

    this.nextCoachId = this.coachDatabase.length + 1;
  }

  getAll() {
    return this.coachDatabase;
  }

  getCoachAvatarById(coachId) {
    const coachDetails = this.getCoachDetailsById(coachId)
    const avatarStyle = {
      backgroundColor: coachDetails.avatarColor,
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: coachDetails.avatarColor,
    };

    if (coachDetails.profileImage) {
      return <Avatar src={coachDetails.profileImage} style={avatarStyle}/>
    }


    return <Avatar style={avatarStyle}>{coachDetails.firstName.charAt(0)}</Avatar>
  }

  getCoachDetailsById(coachId){
    const coachDetails = this.coachDatabase.find(c => c.coachId === coachId )
    return coachDetails;
  }


  handleActions(action) {
    console.log("coach handleActions")
    switch(action.type) {

    }
  }
}

const coachStore = new CoachStore;
dispatcher.register(coachStore.handleActions.bind(coachStore));
export default coachStore;
