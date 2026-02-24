// ppl.js - Private Pilot Question Bank
const pplQuestions = [
    {
        q: "To act as Pilot in Command, what specific items must you have in your physical possession or readily accessible in the aircraft?",
        options: ["Pilot Certificate, Medical Certificate, Logbook", "Pilot Certificate, Medical Certificate (or BasicMed), Government-issued Photo ID", "Pilot Certificate, Government-issued Photo ID, Flight Review Endorsement"],
        answer: "Pilot Certificate, Medical Certificate (or BasicMed), Government-issued Photo ID",
        explanation: "You must hold your pilot certificate, a valid medical (or BasicMed), and a photo ID.",
        ref: "14 CFR 61.3"
    },
    {
        q: "What is the minimum fuel reserve required by the FAA for a VFR day flight?",
        options: ["Enough to fly to the destination, plus 20 minutes at normal cruise speed", "Enough to fly to the destination, plus 30 minutes at normal cruise speed", "Enough to fly to the destination, plus 45 minutes at normal cruise speed"],
        answer: "Enough to fly to the destination, plus 30 minutes at normal cruise speed",
        explanation: "Day VFR requires reaching the first point of intended landing, plus 30 minutes at normal cruising speed.",
        ref: "14 CFR 91.151"
    },
    {
        q: "What is the minimum fuel reserve required for a VFR night flight?",
        options: ["30 minutes", "45 minutes", "60 minutes"],
        answer: "45 minutes",
        explanation: "Night VFR requires enough fuel to fly to the destination plus 45 minutes at normal cruise speed.",
        ref: "14 CFR 91.151"
    },
    {
        q: "Which aircraft has the right-of-way over all other engine-driven aircraft?",
        options: ["An airplane on final approach", "An airship", "A glider"],
        answer: "A glider",
        explanation: "A glider has the right-of-way over an airship, airplane, or rotorcraft due to its lack of an engine.",
        ref: "14 CFR 91.113"
    },
    {
        q: "Unless otherwise authorized, what is the maximum indicated airspeed permitted below 10,000 feet MSL?",
        options: ["200 knots", "250 knots", "288 knots"],
        answer: "250 knots",
        explanation: "The general speed limit below 10,000' MSL is 250 knots.",
        ref: "14 CFR 91.117"
    },
    {
        q: "Unless otherwise authorized, what is the maximum indicated airspeed within Class B airspace?",
        options: ["200 knots", "250 knots", "No speed limit inside Class B"],
        answer: "250 knots",
        explanation: "Inside Class B airspace, the limit is 250 knots. Underneath a Class B shelf, the limit drops to 200 knots.",
        ref: "14 CFR 91.117"
    },
    {
        q: "You are flying a magnetic heading of 180° at a VFR cruising altitude above 3,000' AGL. Which altitude is legal?",
        options: ["4,500 feet MSL", "5,500 feet MSL", "6,000 feet MSL"],
        answer: "4,500 feet MSL",
        explanation: "For headings 180°-359° (Westbound), the rule is Even Thousands + 500 feet.",
        ref: "14 CFR 91.159"
    },
    {
        q: "Under VFR in Class E airspace below 10,000 feet MSL, what are the standard minimum visibility and cloud clearance requirements?",
        options: ["1 SM visibility; Clear of clouds", "3 SM visibility; 500' below, 1,000' above, 2,000' horizontal", "5 SM visibility; 1,000' below, 1,000' above, 1 SM horizontal"],
        answer: "3 SM visibility; 500' below, 1,000' above, 2,000' horizontal",
        explanation: "This is the standard '3-152' rule for controlled airspace below 10,000' MSL.",
        ref: "14 CFR 91.155"
    },
    {
        q: "How frequently must an aircraft's transponder be tested and inspected to operate in controlled airspace?",
        options: ["Every 12 calendar months", "Every 24 calendar months", "During every Annual inspection"],
        answer: "Every 24 calendar months",
        explanation: "ATC transponders must be tested and inspected within the preceding 24 calendar months.",
        ref: "14 CFR 91.413"
    },
    {
        q: "To carry passengers, what is the recency of experience requirement for a private pilot?",
        options: ["3 takeoffs and landings in the preceding 90 days in the same category, class, and type of aircraft", "A flight review in the preceding 24 calendar months", "3 takeoffs and landings to a full stop within the preceding 60 days"],
        answer: "3 takeoffs and landings in the preceding 90 days in the same category, class, and type of aircraft",
        explanation: "You must have made 3 takeoffs and landings within the preceding 90 days. For tailwheel aircraft or night operations, they must be to a full stop.",
        ref: "14 CFR 61.57"
    },
    {
        q: "For the purpose of carrying passengers at night, when must your 3 required full-stop landings be accomplished?",
        options: ["Between sunset and sunrise", "From 1 hour after sunset to 1 hour before sunrise", "From the end of evening civil twilight to the beginning of morning civil twilight"],
        answer: "From 1 hour after sunset to 1 hour before sunrise",
        explanation: "Night currency for carrying passengers must be logged during the period from 1 hour after sunset to 1 hour before sunrise.",
        ref: "14 CFR 61.57"
    },
    {
        q: "What documents must be on board the aircraft prior to flight? (Hint: ARROW)",
        options: ["Airworthiness Certificate, Registration, Radio License, Operating Limitations, Weight and Balance", "Airworthiness Certificate, Registration, Repair Logs, Operating Handbook, Weight and Balance", "Airworthiness Certificate, Registration, Radio License, Owner's Manual, Weather Briefing"],
        answer: "Airworthiness Certificate, Registration, Radio License, Operating Limitations, Weight and Balance",
        explanation: "ARROW stands for Airworthiness, Registration, Radio Station License (if international), Operating Limitations, and Weight/Balance data.",
        ref: "14 CFR 91.9 / 91.203"
    },
    {
        q: "What is the validity period of a Third-Class Medical Certificate for a pilot under age 40?",
        options: ["24 calendar months", "60 calendar months", "12 calendar months"],
        answer: "60 calendar months",
        explanation: "If under age 40 when examined, a 3rd class medical is valid until the end of the 60th month. If 40 or older, it expires after 24 months.",
        ref: "14 CFR 61.23"
    },
    {
        q: "What is the minimum safe altitude anywhere?",
        options: ["500 feet AGL", "An altitude allowing, if a power unit fails, an emergency landing without undue hazard to persons or property on the surface", "1,000 feet above the highest obstacle"],
        answer: "An altitude allowing, if a power unit fails, an emergency landing without undue hazard to persons or property on the surface",
        explanation: "The blanket rule for 'anywhere' is that you must be able to make an emergency landing without creating an undue hazard on the surface.",
        ref: "14 CFR 91.119"
    },
    {
        q: "Over congested areas, what is the minimum safe altitude?",
        options: ["500 feet above the surface", "1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet", "1,500 feet above the highest obstacle"],
        answer: "1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet",
        explanation: "Over a city, town, or settlement, you must be 1,000 feet above the highest obstacle within 2,000 feet of the aircraft.",
        ref: "14 CFR 91.119"
    },
    {
        q: "If you change your permanent mailing address, how long do you have to notify the FAA Airmen Certification Branch before your certificate privileges are suspended?",
        options: ["14 days", "30 days", "90 days"],
        answer: "30 days",
        explanation: "You may not exercise the privileges of your pilot certificate after 30 days from moving unless you have notified the FAA of your new address.",
        ref: "14 CFR 61.60"
    },
    {
        q: "No person may act as a crewmember of a civil aircraft with a blood alcohol concentration (BAC) of what level or higher?",
        options: ["0.08 percent", "0.04 percent", "0.02 percent"],
        answer: "0.04 percent",
        explanation: "The FAA limit is 0.04% BAC, and you must also have at least 8 hours from bottle to throttle.",
        ref: "14 CFR 91.17"
    },
    {
        q: "What is the 'bottle to throttle' rule for alcohol consumption?",
        options: ["8 hours", "12 hours", "24 hours"],
        answer: "8 hours",
        explanation: "No person may act as a crewmember within 8 hours after the consumption of any alcoholic beverage.",
        ref: "14 CFR 91.17"
    },
    {
        q: "When must flight crewmembers be provided with and use supplemental oxygen?",
        options: ["For flights above 10,000 feet MSL", "For flights above 12,500 feet MSL up to 14,000 feet MSL for more than 30 minutes", "For all flights above 15,000 feet MSL regardless of time"],
        answer: "For flights above 12,500 feet MSL up to 14,000 feet MSL for more than 30 minutes",
        explanation: "Crew must use oxygen if between 12,500' and 14,000' MSL for a duration greater than 30 minutes.",
        ref: "14 CFR 91.211"
    },
    {
        q: "At what altitude must EVERY occupant of the aircraft be provided with supplemental oxygen?",
        options: ["12,500 feet MSL", "14,000 feet MSL", "15,000 feet MSL"],
        answer: "15,000 feet MSL",
        explanation: "Above 15,000 feet MSL, every occupant (passengers included) must be provided with supplemental oxygen.",
        ref: "14 CFR 91.211"
    },
    {
        q: "When are passengers required to have their seatbelts fastened?",
        options: ["At all times during the flight", "During taxi, takeoff, and landing", "Only during turbulence"],
        answer: "During taxi, takeoff, and landing",
        explanation: "Passengers must be briefed and have their seatbelts fastened during surface movement, takeoff, and landing.",
        ref: "14 CFR 91.107"
    },
    {
        q: "If two aircraft are converging at the same altitude (not head-on), which aircraft has the right of way?",
        options: ["The aircraft on the left", "The aircraft on the right", "The faster aircraft"],
        answer: "The aircraft on the right",
        explanation: "When aircraft of the same category are converging, the aircraft to the other's right has the right-of-way.",
        ref: "14 CFR 91.113"
    },
    {
        q: "If two aircraft are approaching head-on, what action should be taken?",
        options: ["Both aircraft should alter course to the left", "Both aircraft should alter course to the right", "The larger aircraft has the right of way"],
        answer: "Both aircraft should alter course to the right",
        explanation: "When approaching head-on, or nearly so, each pilot of each aircraft shall alter course to the right.",
        ref: "14 CFR 91.113"
    },
    {
        q: "What does a steady green light signal from the control tower mean to an aircraft in flight?",
        options: ["Cleared to land", "Return for landing", "Airport unsafe, do not land"],
        answer: "Cleared to land",
        explanation: "A steady green light gun signal to an aircraft in flight means 'Cleared to land'.",
        ref: "14 CFR 91.125"
    },
    {
        q: "What does a flashing red light signal from the control tower mean to an aircraft taxiing on the ground?",
        options: ["Stop", "Taxi clear of the runway in use", "Return to starting point on airport"],
        answer: "Taxi clear of the runway in use",
        explanation: "On the ground, a flashing red signal means taxi clear of the runway in use. A steady red means stop.",
        ref: "14 CFR 91.125"
    },
    {
        q: "When must the battery in an Emergency Locator Transmitter (ELT) be replaced or recharged?",
        options: ["Every 12 calendar months", "After 1 hour of cumulative use or when 50% of its useful life has expired", "During every 100-hour inspection"],
        answer: "After 1 hour of cumulative use or when 50% of its useful life has expired",
        explanation: "ELT batteries must be replaced after 1 cumulative hour of use, or when 50% of their useful life has expired.",
        ref: "14 CFR 91.207"
    },
    {
        q: "Which incident requires immediate notification to the NTSB?",
        options: ["In-flight generator failure", "Flight control system malfunction", "Ground collision causing $5,000 in damage"],
        answer: "Flight control system malfunction",
        explanation: "NTSB 830.5 lists specific incidents requiring immediate notification, including flight control system malfunctions, in-flight fires, and turbine rotor failures.",
        ref: "NTSB 830.5"
    },
    {
        q: "What are the dimensions of typical Class C airspace?",
        options: ["Surface to 4,000 AGL, 5 NM core radius, 10 NM shelf radius", "Surface to 2,500 AGL, 4 NM radius", "Surface to 10,000 MSL, 10 NM core radius"],
        answer: "Surface to 4,000 AGL, 5 NM core radius, 10 NM shelf radius",
        explanation: "Class C generally consists of a 5 NM radius core (surface to 4,000 AGL) and a 10 NM radius shelf area (1,200 to 4,000 AGL).",
        ref: "AIM 3-2-4"
    },
    {
        q: "What equipment is required to enter Class B airspace?",
        options: ["Two-way radio and Mode C/S transponder with ADS-B Out", "Two-way radio only", "No specific equipment if flying VFR"],
        answer: "Two-way radio and Mode C/S transponder with ADS-B Out",
        explanation: "Class B requires a two-way radio, an operable transponder with altitude reporting, and ADS-B Out equipment.",
        ref: "14 CFR 91.225 / 91.131"
    },
    {
        q: "What action is required prior to entering Class B airspace?",
        options: ["Establish two-way radio communications", "Receive an explicit ATC clearance to enter", "Squawk VFR 1200"],
        answer: "Receive an explicit ATC clearance to enter",
        explanation: "Unlike Class C or D (which only require establishing two-way comms), Class B requires an explicit clearance.",
        ref: "14 CFR 91.131"
    },
    {
        q: "During the day in Class G airspace below 1,200 feet AGL, what are the VFR weather minimums?",
        options: ["1 SM visibility and Clear of Clouds", "3 SM visibility and 1,000' above clouds", "5 SM visibility and Clear of Clouds"],
        answer: "1 SM visibility and Clear of Clouds",
        explanation: "Class G during the day below 1,200 AGL requires only 1 statute mile visibility and to remain clear of clouds.",
        ref: "14 CFR 91.155"
    },
    {
        q: "What are the requirements to operate under Special VFR (SVFR) at night?",
        options: ["1 SM visibility, clear of clouds", "The pilot must be instrument rated and the aircraft equipped for IFR", "Special VFR is not permitted at night"],
        answer: "The pilot must be instrument rated and the aircraft equipped for IFR",
        explanation: "To accept a Special VFR clearance between sunset and sunrise, the pilot must hold an instrument rating and the airplane must be IFR equipped.",
        ref: "14 CFR 91.157"
    },
    {
        q: "To avoid wake turbulence when landing behind a large aircraft, the pilot should:",
        options: ["Fly below the large aircraft's flight path and land before its touchdown point", "Fly above the large aircraft's flight path and land beyond its touchdown point", "Land precisely on the large aircraft's touchdown point"],
        answer: "Fly above the large aircraft's flight path and land beyond its touchdown point",
        explanation: "Wake turbulence sinks, so staying above the heavy aircraft's path and landing beyond where it touched down avoids the vortices.",
        ref: "AIM 7-3-6"
    },
    {
        q: "In what conditions is radiation fog most likely to form?",
        options: ["Warm, moist air blowing over a cold surface", "Calm, clear nights with high humidity", "During a cold front passage with high winds"],
        answer: "Calm, clear nights with high humidity",
        explanation: "Radiation fog forms when the ground cools rapidly on clear, calm nights, cooling the surrounding air to its dewpoint.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "In what conditions is advection fog most likely to form?",
        options: ["Calm, clear nights inland", "Warm, moist air moving over a colder surface, typically requiring some wind", "When rain falls through a temperature inversion"],
        answer: "Warm, moist air moving over a colder surface, typically requiring some wind",
        explanation: "Advection fog forms when warm, moist air is pushed over a cold surface. It requires wind to move the air mass.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What temperature and humidity conditions are most conducive to carburetor icing?",
        options: ["Temperatures below 0°F (-18°C) with low humidity", "Temperatures between 20°F and 70°F (-7°C to 21°C) with high humidity", "Temperatures above 90°F (32°C) with high humidity"],
        answer: "Temperatures between 20°F and 70°F (-7°C to 21°C) with high humidity",
        explanation: "Carb ice can occur at surprisingly warm temperatures (up to 70°F) if humidity is high, due to the temperature drop in the venturi of the carburetor.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "An airplane stall occurs when:",
        options: ["The airspeed drops below the stall speed", "The critical angle of attack is exceeded", "The engine loses power"],
        answer: "The critical angle of attack is exceeded",
        explanation: "A stall is strictly a function of the angle of attack. An airplane can stall at any airspeed or attitude if the critical angle of attack is exceeded.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What is a spin?",
        options: ["An aggravated stall resulting in autorotation about the vertical axis", "A rapid descent in a spiral dive", "A maneuver used to lose altitude quickly without gaining airspeed"],
        answer: "An aggravated stall resulting in autorotation about the vertical axis",
        explanation: "A spin is an aggravated stall where one wing is more stalled than the other, causing a yawing motion that results in autorotation.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What is the load factor in a level, 60-degree banked turn?",
        options: ["1.5 Gs", "2.0 Gs", "3.0 Gs"],
        answer: "2.0 Gs",
        explanation: "In a 60-degree level turn, the load factor doubles, meaning you feel twice your normal weight, and stall speed increases significantly.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "Floating caused by ground effect is most pronounced when the aircraft is:",
        options: ["Less than one wingspan above the surface", "Higher than one wingspan above the surface", "At a high angle of attack at high altitudes"],
        answer: "Less than one wingspan above the surface",
        explanation: "Ground effect restricts the downward deflection of the airstream, decreasing induced drag. It is most noticeable within one wingspan's distance from the ground.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "Which instrument operates on the principle of gyroscopic precession?",
        options: ["Airspeed indicator", "Turn coordinator", "Vertical speed indicator (VSI)"],
        answer: "Turn coordinator",
        explanation: "The turn coordinator uses a canted gyro that responds to yaw and roll through gyroscopic precession. The airspeed and VSI are pitot-static instruments.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What instruments rely on the pitot-static system?",
        options: ["Altimeter, Airspeed Indicator, Vertical Speed Indicator", "Attitude Indicator, Turn Coordinator, Heading Indicator", "Tachometer, Oil Pressure, Manifold Pressure"],
        answer: "Altimeter, Airspeed Indicator, Vertical Speed Indicator",
        explanation: "The Altimeter, VSI, and Airspeed Indicator all require static pressure. The Airspeed Indicator also requires ram air from the pitot tube.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "If the pitot tube becomes blocked but the static port remains clear, which instrument will be affected?",
        options: ["Altimeter", "Airspeed Indicator", "Vertical Speed Indicator"],
        answer: "Airspeed Indicator",
        explanation: "The airspeed indicator is the only instrument that relies on pitot (ram air) pressure. If blocked, it will act like an altimeter as the aircraft climbs/descends.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "When accelerating on an East or West heading, what magnetic compass error occurs?",
        options: ["The compass will indicate a turn toward the North", "The compass will indicate a turn toward the South", "The compass will lag behind the actual turn"],
        answer: "The compass will indicate a turn toward the North",
        explanation: "The acronym is ANDS: Accelerate North, Decelerate South. This applies when on East or West headings.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "When turning from a Northerly heading, what magnetic compass error occurs?",
        options: ["The compass will lead the turn", "The compass will lag behind the turn and initially indicate a turn in the opposite direction", "No error occurs"],
        answer: "The compass will lag behind the turn and initially indicate a turn in the opposite direction",
        explanation: "The acronym is UNOS: Undershoot North, Overshoot South. When turning from North, the compass lags and initially shows a turn in the wrong direction.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What is standard temperature and pressure at sea level?",
        options: ["15°C and 29.92\" Hg", "20°C and 30.00\" Hg", "0°C and 29.92\" Hg"],
        answer: "15°C and 29.92\" Hg",
        explanation: "Standard atmospheric conditions at sea level are 15 degrees Celsius (59 Fahrenheit) and 29.92 inches of mercury.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What does the 'A' in the PAVE personal minimums checklist stand for?",
        options: ["Airspace", "Aircraft", "Attitude"],
        answer: "Aircraft",
        explanation: "PAVE stands for Pilot, Aircraft, enVironment, and External Pressures.",
        ref: "FAA Risk Management Handbook"
    },
    {
        q: "How often are METARs normally issued?",
        options: ["Every 12 hours", "Every 6 hours", "Hourly"],
        answer: "Hourly",
        explanation: "METARs are routine surface observations typically issued on an hourly basis, usually between 50 minutes past the hour and the top of the hour.",
        ref: "AIM 7-1-30"
    },
    {
        q: "What is the standard valid area for a TAF (Terminal Aerodrome Forecast)?",
        options: ["A 5 statute mile radius from the center of an airport runway complex", "A 10 nautical mile radius from the airport center", "The entire airspace sector covered by an ARTCC"],
        answer: "A 5 statute mile radius from the center of an airport runway complex",
        explanation: "A TAF provides a forecast of expected weather conditions within a 5 SM radius of the center of an airport's runway complex.",
        ref: "AIM 7-1-30"
    },
    {
        q: "What is engine detonation?",
        options: ["The spontaneous, explosive ignition of the fuel/air mixture inside the cylinders", "The ignition of the fuel/air mixture prior to the spark plug firing", "The gradual accumulation of carbon deposits on the spark plugs"],
        answer: "The spontaneous, explosive ignition of the fuel/air mixture inside the cylinders",
        explanation: "Detonation is an explosive, uncontrolled ignition of fuel, often caused by using a lower fuel grade than required or excessively high engine temperatures.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What causes the left-turning tendency known as P-factor?",
        options: ["The gyroscopic precession of the spinning propeller", "The descending blade of the propeller taking a larger 'bite' of air than the ascending blade at high angles of attack", "The corkscrewing slipstream of air striking the left side of the vertical stabilizer"],
        answer: "The descending blade of the propeller taking a larger 'bite' of air than the ascending blade at high angles of attack",
        explanation: "P-factor (asymmetric thrust) occurs at high angles of attack because the descending blade has a higher angle of attack relative to the relative wind, creating more thrust on the right side of the propeller.",
        ref: "FAA-H-8083-25"
    },
    {
        q: "What must a pilot do before entering Class D airspace?",
        options: ["Obtain an explicit ATC clearance (e.g., 'Cleared to enter')", "Establish two-way radio communications with the control tower", "Squawk a discrete transponder code provided by ATC"],
        answer: "Establish two-way radio communications with the control tower",
        explanation: "Unlike Class B airspace which requires a specific clearance, entering Class D only requires two-way radio comms to be established (the controller responds with your callsign).",
        ref: "14 CFR 91.129"
    },
    {
        q: "What does an alternating white and green rotating airport beacon indicate at night?",
        options: ["A civilian land airport", "A military airport", "A water airport"],
        answer: "A civilian land airport",
        explanation: "Civilian land airports use alternating white and green flashes. Military airports use two white flashes followed by one green flash.",
        ref: "AIM 2-1-9"
    },
    {
        q: "During the preflight, you discover the aircraft's altitude indicator is inoperative. Who is responsible for determining if the aircraft is safe for flight?",
        options: ["An FAA-certified A&P mechanic", "The aircraft owner or operator", "The Pilot in Command"],
        answer: "The Pilot in Command",
        explanation: "While the owner is responsible for maintaining the aircraft, the Pilot in Command is ultimately responsible for determining if the aircraft is in condition for safe flight prior to departure.",
        ref: "14 CFR 91.7"
    },
    {
        q: "What is a characteristic of a cold front?",
        options: ["A steady, long-lasting light rain over a large area", "Towering cumulus or cumulonimbus clouds, heavy rain, and poor visibility", "Widespread stratus clouds and smooth air"],
        answer: "Towering cumulus or cumulonimbus clouds, heavy rain, and poor visibility",
        explanation: "Cold fronts force warm, moist air up rapidly, creating unstable conditions, thunderstorms, and heavy precipitation.",
        ref: "AC 00-6B"
    }
];