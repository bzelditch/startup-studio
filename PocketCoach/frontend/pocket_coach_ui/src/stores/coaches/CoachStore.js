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

        specialties: ["Startup Pitch", "Confidence"],
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

        specialties: ["Body Language", "Filler Words"],
        workExperience: ["Harvard University"],
        responseTime: "3 Days",
        videoLink: 'fh28oGbPmr4',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 4,
        firstName: "Matilda",
        lastName: "Langley",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Matilda Langley"}),
        profileImage: require('../../static/images/coaches/MatildaLangley.jpeg'),

        specialties: ["Company Presentation", "Posture", "Tone", "Industry Speech"],
        workExperience: ["Proctor & Gamble"],
        responseTime: "24 Hours",
        videoLink: '3yfFwDq4R5M',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 5,
        firstName: "Hannah",
        lastName: "Cornwall",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Hannah Cornwall"}),
        profileImage: require('../../static/images/coaches/HannahCornwall.jpeg'),

        specialties: ["Interview Answer", "Engagement", "Content"],
        workExperience: ["Google", "Amazon"],
        responseTime: "24 Hours",
        videoLink: 'dvrRfEuXCBw',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 6,
        firstName: "Vanessa",
        lastName: "Williams",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Vanessa Williams"}),
        profileImage: require('../../static/images/coaches/VanessaWilliams.jpeg'),

        specialties: ["Company Presentation", "Gestures", "Accent"],
        workExperience: ["BlueCarts", "Pinterest"],
        responseTime: "3 Days",
        videoLink: '5sMeTEPUeq8',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 7,
        firstName: "Justin",
        lastName: "Francis",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Justin Francis"}),
        profileImage: require('../../static/images/coaches/JustinFrancis.jpeg'),

        specialties: ["Startup Pitch", "Industry Speech", "Presence", "Posture"],
        workExperience: ["Duolingo"],
        responseTime: "24 Hours",
        videoLink: 'dhpeqVroZYg',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 8,
        firstName: "Tim",
        lastName: "Savage",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Tim Savage"}),
        profileImage: require('../../static/images/coaches/TimSavage.jpeg'),

        specialties: ["Company Presentation", "Pacing", "Projection"],
        workExperience: ["Microsoft"],
        responseTime: "24 Hours",
        videoLink: 'lQdFDSjo1b4',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 9,
        firstName: "Bruce",
        lastName: "Mars",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Bruce Mars"}),
        profileImage: require('../../static/images/coaches/BruceMars.jpeg'),

        specialties: ["Company Presentation", "Content", "Tone"],
        workExperience: ["Bain & Co."],
        responseTime: "24 Hours",
        videoLink: 'JGSJykKJl3c',
        rating: 4.76,

        intro: "",
      },
      {
        coachId: 10,
        firstName: "Jerry",
        lastName: "Edwards",
        createTimestamp: getCurrentDatePlusDays(-40),
        avatarColor: randomMaterialColor.getColor({text: "Jerry Edwards"}),
        profileImage: require('../../static/images/coaches/JerryEdwards.jpeg'),

        specialties: ["Sales Pitch", "Industry Speech", "Confidence", "Body Language"],
        workExperience: ["Sequoia Capital", "Google"],
        responseTime: "24 Hours",
        videoLink: 'M35pBdMUCP8',
        rating: 4.76,

        intro: "",
      },
    ];

    this.nextCoachId = this.coachDatabase.length + 1;
    this.union = this.union.bind(this);
    this.intersect = this.intersect.bind(this);
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

  getCoachesBySpecialties(types, goals, times) {
    let specialties = types.concat(goals);
    let matchingCoaches = this.coachDatabase.filter(c => times.indexOf(c.responseTime) > -1);
    if (matchingCoaches.length === 0) return [];
    let union = this.union;
    let intersect = this.intersect;
    return matchingCoaches.sort(function(c1, c2) {
      let j1 = intersect(c1.specialties,specialties).length/union(c1.specialties,specialties).length;
      let j2 = intersect(c2.specialties,specialties).length/union(c2.specialties,specialties).length;
      return j2-j1;
    });
  }

  jaccardSimilarity(l1, l2) {
    let i = this.intersect(l1, l2).length;
    let u = this.union(l1, l2).length;
    return i/u ;
  }

  union(a, b) {
    if (a.length < 1) return b;
    if (b.length < 1) return a;
    return [...new Set([...a, ...b])];
  }

  intersect(a, b) {
    /*if (a.length < 1 || b.length < 1) return [];*/
    console.log("a: ");
    console.log(a);
    console.log("b: ");
    console.log(b);
    return a.filter(function(e) {
      return (b.indexOf(e) > -1);
    });
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
