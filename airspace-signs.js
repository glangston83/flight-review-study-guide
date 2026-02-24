// airspace-signs.js - Visual Figures Question Bank
const visualQuestions = [
    {
        q: "Refer to the figure. What does this sign indicate?",
        image: "images/runway-holding.png", 
        options: ["You are approaching a runway holding position", "You are on taxiway 15-33", "Runway 15-33 is closed"],
        answer: "You are approaching a runway holding position",
        explanation: "A red background with white text indicates a mandatory instruction sign. You must hold short and receive ATC clearance before crossing.",
        ref: "AIM 2-3-8"
    },
    {
        q: "Refer to the figure. What does this runway marking signify?",
        image: "images/displaced-threshold.png",
        options: ["A closed runway", "A displaced threshold", "A taxiway lead-in line"],
        answer: "A displaced threshold",
        explanation: "White arrows pointing to a solid white line indicate a displaced threshold. The area behind the threshold is available for taxiing, the takeoff roll, and the landing rollout, but not for touchdown.",
        ref: "AIM 2-3-3"
    },
    {
        q: "Refer to the figure. What does this airport sign indicate?",
        image: "images/location-sign.png",
        options: ["You are approaching taxiway Alpha", "You are currently located on taxiway Alpha", "Taxiway Alpha is closed"],
        answer: "You are currently located on taxiway Alpha",
        explanation: "A black square background with a yellow letter is a Location Sign. The phrase to remember is: 'Black square, you're there.'",
        ref: "AIM 2-3-9"
    },
    {
        q: "Refer to the figure. What kind of airspace does this solid magenta line indicate?",
        image: "images/class-c-magenta.png",
        options: ["Class B airspace", "Class C airspace", "Class D airspace"],
        answer: "Class C airspace",
        explanation: "A solid magenta line on a VFR Sectional indicates Class C airspace. A solid blue line is Class B, and a dashed blue line is Class D.",
        ref: "VFR Sectional Legend"
    },
    {
        q: "Refer to the figure. What is the meaning of the dashed magenta line surrounding this airport?",
        image: "images/class-e-surface.png",
        options: ["Class E airspace starting at the surface", "Class E airspace starting at 700 feet AGL", "A National Security Area"],
        answer: "Class E airspace starting at the surface",
        explanation: "A dashed magenta line indicates Class E airspace that extends from the surface upward to the overlying airspace. You must have 3 SM visibility and standard cloud clearances to operate VFR here.",
        ref: "VFR Sectional Legend"
    },
    {
        q: "Refer to the figure. What does this airport sign mean?",
        image: "images/ils-critical.png",
        options: ["Instrument Landing System critical area holding position", "ILS frequency change required", "Military staging area"],
        answer: "Instrument Landing System critical area holding position",
        explanation: "When the weather is below 800-foot ceilings or 2 miles visibility, ATC will instruct you to hold short of this sign so your aircraft does not block the ILS signal for landing aircraft.",
        ref: "AIM 2-3-8"
    },
    {
        q: "Refer to the figure. What does this ground marking indicate?",
        image: "images/closed-runway.png",
        options: ["Helicopter landing pad", "Closed runway or taxiway", "Target for parachute drops"],
        answer: "Closed runway or taxiway",
        explanation: "A yellow cross (X) placed on a runway or taxiway indicates that it is closed to all aircraft operations.",
        ref: "AIM 2-3-6"
    },
    {
        q: "Refer to the figure. What does this sign indicate?",
        image: "images/no-entry.png",
        options: ["Do not enter; typically identifies a one-way taxiway or intersection", "Vehicles are prohibited, but aircraft may enter", "The runway threshold is ahead"],
        answer: "Do not enter; typically identifies a one-way taxiway or intersection",
        explanation: "A red sign with a white circle and a horizontal white line is a 'No Entry' sign. It identifies paved areas where aircraft are prohibited from entering.",
        ref: "AIM 2-3-8"
    },
    {
        q: "Refer to the figure. What does this black sign with a white number indicate?",
        image: "images/distance-remaining.png",
        options: ["Runway distance remaining in thousands of feet", "Taxiway 3 is ahead", "The weight bearing capacity of the runway is 30,000 lbs"],
        answer: "Runway distance remaining in thousands of feet",
        explanation: "A black sign with a white numeral indicates the runway distance remaining in thousands of feet. For example, a '3' means 3,000 feet of runway is left.",
        ref: "AIM 2-3-13"
    },
    {
        q: "Refer to the figure. What does this yellow sign with black arrows indicate?",
        image: "images/taxiway-direction.png",
        options: ["The direction of intersecting taxiways leading out of an intersection", "The direction to the nearest active runway", "A mandatory hold short point"],
        answer: "The direction of intersecting taxiways leading out of an intersection",
        explanation: "A yellow sign with black text and arrows is a Taxiway Direction sign. It tells you which way to turn to get onto the designated taxiway.",
        ref: "AIM 2-3-10"
    }
];