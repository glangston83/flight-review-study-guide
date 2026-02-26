// acronyms.js - Aviation Acronyms Question Bank
const acronymQuestions = [
    {
        q: "What does the acronym NWKRAFT stand for regarding preflight action (14 CFR 91.103)?",
        options: [
            "NOTAMs, Weather, Known ATC delays, Runway lengths, Alternates, Fuel requirements, Takeoff/landing distances",
            "Night operations, Weather, Knots, Route, Altitude, Fuel, Time en route",
            "NOTAMs, Weight and balance, Known ATC delays, Runway lengths, Airspace, Fuel, Taxi routing"
        ],
        answer: "NOTAMs, Weather, Known ATC delays, Runway lengths, Alternates, Fuel requirements, Takeoff/landing distances",
        explanation: "Before beginning a flight, the PIC must become familiar with all available information concerning that flight, memorized easily as NWKRAFT.",
        ref: "14 CFR 91.103"
    },
    {
        q: "The acronym 'A TOMATO FLAMES' helps you remember the required VFR Day instruments. What does the 'A' and the first 'T' stand for?",
        options: [
            "Altimeter and Tachometer",
            "Airspeed indicator and Turn coordinator",
            "Attitude indicator and Temperature gauge"
        ],
        answer: "Altimeter and Tachometer",
        explanation: "A TOMATO FLAMES: Altimeter, Tachometer, Oil temp, Manifold pressure, Airspeed, Temp gauge (liquid cooled), Oil pressure, Fuel gauge, Landing gear position, Anti-collision lights, Magnetic compass, ELT, Seatbelts.",
        ref: "14 CFR 91.205(b)"
    },
    {
        q: "For VFR Night flight, you need 'A TOMATO FLAMES' plus 'FLAPS'. What does FLAPS stand for?",
        options: [
            "Fuses, Landing light, Anti-collision lights, Position lights, Source of power",
            "Flaps, Landing gear, Alternator, Pitot heat, Strobes",
            "Fuses, Landing gear, Attitude indicator, Position lights, Source of power"
        ],
        answer: "Fuses, Landing light, Anti-collision lights, Position lights, Source of power",
        explanation: "FLAPS covers the extra night requirements. Note: The Landing light is only required if the aircraft is operated for hire.",
        ref: "14 CFR 91.205(c)"
    },
    {
        q: "To ensure your aircraft is airworthy, it must undergo regular inspections. What does the acronym 'AVIATES' stand for?",
        options: [
            "Airworthiness Directives, VOR (30 days), Inspections (Annual/100hr), Altimeter/Pitot-Static (24mo), Transponder (24mo), ELT (12mo), Static system",
            "Airframe, VOR, Instruments, Altimeter, Transponder, Engine, Systems",
            "Annual, VOR, Inspections, Airworthiness, Transponder, Emergency equipment, Servicing"
        ],
        answer: "Airworthiness Directives, VOR (30 days), Inspections (Annual/100hr), Altimeter/Pitot-Static (24mo), Transponder (24mo), ELT (12mo), Static system",
        explanation: "AVIATES is the standard checklist to ensure an aircraft has all its required chronological inspections completed before you fly.",
        ref: "14 CFR 91.409"
    },
    {
        q: "Before taking off, you must brief your passengers. The acronym 'SAFETY' helps cover the requirements. What do the 'S' and 'A' stand for?",
        options: [
            "Seatbelts and Air vents",
            "Seatbelts/Shoulder harnesses and Air sickness/Air vents",
            "Smoking and Altitude"
        ],
        answer: "Seatbelts/Shoulder harnesses and Air sickness/Air vents",
        explanation: "SAFETY: Seatbelts/Shoulder harnesses, Air sickness/Air vents, Fire extinguisher, Exit/Emergencies, Traffic/Talking, Your questions.",
        ref: "14 CFR 91.107"
    },
    {
        q: "The IMSAFE checklist ensures the pilot is fit for flight. What does it stand for?",
        options: [
            "Illness, Medication, Stress, Alcohol, Fatigue, Emotion/Eating",
            "Instrument currency, Medical, Sleep, Altitude, Fuel, Emergencies",
            "Illness, Medical certificate, Stress, Airspace, Fatigue, Environment"
        ],
        answer: "Illness, Medication, Stress, Alcohol, Fatigue, Emotion/Eating",
        explanation: "IMSAFE is a personal minimums checklist to ensure you are physically and mentally prepared to act as Pilot in Command.",
        ref: "FAA Risk Management Handbook"
    },
    {
        q: "What does the 'ARROW' acronym represent?",
        options: [
            "The documents that must be on board the aircraft: Airworthiness, Registration, Radio license (intl), Operating limitations, Weight and balance",
            "The preflight flow: Airframe, Rudder, Radios, Oil, Windows",
            "The emergency engine restart checklist: Airspeed, Radios, Run-up, Oil pressure, Weather"
        ],
        answer: "The documents that must be on board the aircraft: Airworthiness, Registration, Radio license (intl), Operating limitations, Weight and balance",
        explanation: "ARROW is the standard memory aid to ensure you have the legally required documents on board the aircraft before taking off.",
        ref: "14 CFR 91.9 / 91.203"
    },
    {
        q: "In aeronautical decision making, the 'DECIDE' model is used to manage risks in flight. What does it stand for?",
        options: [
            "Detect, Estimate, Choose, Identify, Do, Evaluate",
            "Determine, Evaluate, Correct, Inspect, Descend, Execute",
            "Detect, Evaluate, Climb, Identify, Descend, Execute"
        ],
        answer: "Detect, Estimate, Choose, Identify, Do, Evaluate",
        explanation: "The DECIDE model provides a continuous loop process for identifying a hazard, making a choice, taking action, and evaluating the result.",
        ref: "FAA-H-8083-25"
    }
];