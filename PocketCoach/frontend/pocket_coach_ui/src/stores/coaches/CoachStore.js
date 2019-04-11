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
        profileImage: require('../../static/images/Gigi.jpeg'),
        specialties: ["Media Presentations"],
        workExperience: ["Professor at UCLA","Ted X speaker"],
      },
      {
        coachId: 2,
        firstName: "Julia",
        lastName: "Crenshaw",
        createTimestamp: getCurrentDatePlusDays(-20),
        avatarColor: randomMaterialColor.getColor({text: "Julia Crenshaw"}),
        profileImage: null,
        specialties: ["Startup Pitches"],
        workExperience: ["BoxGroup", "Union Square Ventures"],
      },
      {
        coachId: 3,
        firstName: "Matt",
        lastName: "Bosnahan",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Matt Bosnahan"}),
        profileImage: null,
        specialties: ["Startup Pitches"],
        workExperience: ["Founder of IntelliTech"],
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
