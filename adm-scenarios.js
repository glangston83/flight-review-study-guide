// adm-scenarios.js - Aeronautical Decision Making & Scenarios Question Bank
const admQuestions = [
    {
        q: "Under the PAVE risk management checklist, what does the 'E' stand for, and what is an example of it?",
        options: ["Environment: Deteriorating weather along the route of flight", "External Pressures: A passenger who insists on getting home for a meeting", "Emergencies: Experiencing an alternator failure in flight"],
        answer: "External Pressures: A passenger who insists on getting home for a meeting",
        explanation: "PAVE stands for Pilot, Aircraft, enVironment, and External Pressures. 'Get-there-itis' and passenger expectations are common external pressures.",
        ref: "FAA Risk Management Handbook"
    },
    {
        q: "According to AC 61-98E, what is the fundamental nature of a Flight Review?",
        options: ["A formal pass/fail checkride evaluated against ACS standards", "An instructional service designed to assess knowledge and skills, and create a personal proficiency plan", "A test of basic VFR maneuvers that must be passed within 60 minutes"],
        answer: "An instructional service designed to assess knowledge and skills, and create a personal proficiency plan",
        explanation: "A Flight Review is not a test. You cannot 'fail' it. It is an instructional evaluation tailored to the pilot's specific flying habits.",
        ref: "AC 61-98E"
    },
    {
        q: "You are planning a flight and have a mild head cold. You take an over-the-counter decongestant. Under the IMSAFE checklist, are you legal to fly?",
        options: ["Yes, as long as it is an over-the-counter medication", "No, unless you receive explicit permission from an Aviation Medical Examiner (AME)", "No, many over-the-counter medications cause drowsiness and cognitive impairment"],
        answer: "No, many over-the-counter medications cause drowsiness and cognitive impairment",
        explanation: "The 'M' in IMSAFE stands for Medication. Any medication that affects your faculties or causes drowsiness makes you unfit to act as PIC.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "Scenario: You are flying your Zenith 650B on a VFR cross-country. You notice clouds building ahead and the ceiling dropping. You think, 'I can push through this, I've done it before.' What hazardous attitude are you exhibiting, and what is the antidote?",
        options: ["Invulnerability; Antidote: 'It could happen to me.'", "Macho; Antidote: 'Taking chances is foolish.'", "Impulsivity; Antidote: 'Not so fast, think first.'"],
        answer: "Invulnerability; Antidote: 'It could happen to me.'",
        explanation: "Believing that accidents only happen to other people is the hazardous attitude of Invulnerability. The antidote is recognizing that you are also susceptible.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What are the components of the 5P Model used for Single-Pilot Resource Management (SRM)?",
        options: ["Pilot, Plane, Passengers, Plan, Programming", "Pilot, Performance, Preflight, Passengers, Proficiency", "Pressure, Plan, Powerplant, Passengers, Proficiency"],
        answer: "Pilot, Plane, Passengers, Plan, Programming",
        explanation: "The 5Ps are used to evaluate the pilot's situation at key decision points: Pilot, Plane, Passengers, Plan, and Programming (avionics/GPS).",
        ref: "FAA Risk Management Handbook"
    },
    {
        q: "Scenario: You are returning to Creve Coeur (1H0) from the west. The sun is setting, and you have 40 minutes of fuel left. The airport is reporting 3 SM visibility and mist. What is the safest application of Aeronautical Decision Making (ADM)?",
        options: ["Continue to the destination but increase airspeed to arrive before dark", "Divert immediately to Spirit of St. Louis (SUS) or another nearby airport reporting clear skies", "Contact ATC and declare an emergency to get priority handling into 1H0"],
        answer: "Divert immediately to Spirit of St. Louis (SUS) or another nearby airport reporting clear skies",
        explanation: "Combining low fuel, encroaching night, and marginal weather creates a high-risk scenario. Good ADM dictates breaking the chain of events by diverting to a safe, known alternate before an emergency develops.",
        ref: "FAA Risk Management Handbook"
    },
    {
        q: "In the DECIDE model for aeronautical decision making, what does the 'I' represent?",
        options: ["Identify solutions", "Implement the decision", "Investigate the outcome"],
        answer: "Identify solutions",
        explanation: "The DECIDE model is: Detect a change, Estimate the need to react, Choose a desirable outcome, Identify actions to control the change, Do the necessary action, and Evaluate the effect.",
        ref: "FAA-H-8083-25"
    }
];