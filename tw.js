// tw.js - Tailwheel & UPRT Question Bank
const twQuestions = [
    {
        q: "What is the primary design characteristic of tailwheel airplanes that makes them less forgiving of pilot error on the ground?",
        options: ["The Center of Gravity (CG) is located behind the main landing gear", "The main landing gear is narrower than tricycle gear airplanes", "The rudder is less effective at low speeds"],
        answer: "The Center of Gravity (CG) is located behind the main landing gear",
        explanation: "Because the CG is behind the main wheels, inertia creates a tendency for the tail to swing forward (ground loop) if directional control is not maintained.",
        ref: "Tailwheel Training Doc"
    },
    {
        q: "According to the Upset Recovery Template, what is the immediate action after disconnecting the autopilot?",
        options: ["Apply full power", "Apply forward column/stick pressure to unload the airplane", "Roll wings level"],
        answer: "Apply forward column/stick pressure to unload the airplane",
        explanation: "Unloading the wing (reducing Angle of Attack) is critical before rolling to prevent a stall or structural overstress.",
        ref: "UPRT Doc"
    },
    {
        q: "What is a common mistake pilots make during the rollout in a tailwheel airplane?",
        options: ["Holding the stick back too firmly", "Failure to hold the stick back (elevator up)", "Using too much aileron into the wind"],
        answer: "Failure to hold the stick back (elevator up)",
        explanation: "In a 3-point attitude, the stick must be held full back to keep the tailwheel planted and steerable.",
        ref: "Tailwheel Lesson 2"
    },
    {
        q: "When calculating crosswind components using the graph, what two values do you need?",
        options: ["Wind velocity and runway length", "The angle between the wind and runway, and the wind velocity", "The wind direction and magnetic variation"],
        answer: "The angle between the wind and runway, and the wind velocity",
        explanation: "You intersect the radial line (angle) with the arc (velocity) to read the headwind and crosswind components.",
        ref: "Crosswind Graph"
    },
    {
        q: "What is the primary goal of Upset Prevention and Recovery Training (UPRT) compared to aerobatics?",
        options: ["To teach precision maneuvering for competition", "To overcome startle and stress to prevent Loss of Control In-flight (LOC-I)", "To learn how to perform spins for fun"],
        answer: "To overcome startle and stress to prevent Loss of Control In-flight (LOC-I)",
        explanation: "Aerobatics is intentional; UPRT focuses on recovering from unintentional and unexpected events.",
        ref: "UPRT Doc"
    },
    {
        q: "In a tailwheel airplane, what causes a 'ground loop'?",
        options: ["The gyroscopic precession of the propeller", "Inertia acting on the CG located behind the main wheels", "Excessive braking on the inside wheel"],
        answer: "Inertia acting on the CG located behind the main wheels",
        explanation: "If the aircraft swerves, the CG momentum continues forward, attempting to overtake the main wheels.",
        ref: "Tailwheel Lesson 1"
    },
    {
        q: "What is the correct recovery procedure for a wheel landing bounce?",
        options: ["Force the aircraft back onto the runway", "Hold attitude and add power (or go-around)", "Retract flaps immediately"],
        answer: "Hold attitude and add power (or go-around)",
        explanation: "Forcing the nose down will cause a prop strike or worse bounce. Stabilize with power and attitude, or go around.",
        ref: "Tailwheel Lesson 3"
    },
    {
        q: "According to the Upset Recovery Template, why do we 'unload' (push forward) before rolling upright?",
        options: ["To increase airspeed", "To reduce the G-load and Angle of Attack to prevent stalling during the roll", "To gain altitude"],
        answer: "To reduce the G-load and Angle of Attack to prevent stalling during the roll",
        explanation: "Rolling while loaded (high G) increases the stall speed and can lead to an accelerated stall.",
        ref: "UPRT Doc"
    },
    {
        q: "What pilot action is required to legally act as PIC of a tailwheel airplane?",
        options: ["A logbook endorsement from an authorized instructor", "Passing a new FAA written exam", "10 hours of solo flight time"],
        answer: "A logbook endorsement from an authorized instructor",
        explanation: "14 CFR 61.31(i) requires flight training and a one-time logbook endorsement.",
        ref: "14 CFR 61.31"
    },
    {
        q: "When taxiing a tailwheel airplane with a strong quartering tailwind from the left, how should the controls be positioned?",
        options: ["Stick back, aileron left", "Stick forward (dive away), aileron right", "Stick neutral, aileron neutral"],
        answer: "Stick forward (dive away), aileron right",
        explanation: "Dive away from tailwinds. Stick forward to keep the tail from lifting, aileron right (down on the left) to keep the wind from lifting the wing.",
        ref: "Tailwheel Handling"
    },
    {
        q: "What are the three phases of a spin?",
        options: ["Entry, Incipient, Developed", "Stall, Drop, Rotation", "Incipient, Rotation, Recovery"],
        answer: "Entry, Incipient, Developed",
        explanation: "The standard phases of a spin are Entry, Incipient (just starting), and Fully Developed.",
        ref: "CFI Spin Training"
    },
    {
        q: "A 'spiral dive' is distinct from a spin because:",
        options: ["The airspeed is low and constant in a spiral", "The airspeed is increasing rapidly in a spiral", "The wings are level in a spiral"],
        answer: "The airspeed is increasing rapidly in a spiral",
        explanation: "A spin is a stall (low airspeed). A spiral is a high-speed descent where the wing is flying but banked steeply.",
        ref: "CFI Spin Training"
    },
    {
        q: "During a wheel landing, what control input is typically used at the moment of touchdown to 'stick' the landing?",
        options: ["Full back pressure", "Slight forward pressure", "Neutral pressure"],
        answer: "Slight forward pressure",
        explanation: "Slight forward pressure reduces the angle of attack, preventing the aircraft from ballooning back into the air.",
        ref: "Tailwheel Lesson 2"
    },
    {
        q: "What is a major risk factor mentioned in the UPRT curriculum?",
        options: ["Flying at night", "Startle response and panic", "Engine failure"],
        answer: "Startle response and panic",
        explanation: "UPRT specifically trains to mitigate the 'startle' factor which can lead to freezing or incorrect inputs.",
        ref: "UPRT Doc"
    },
    {
        q: "Which instrument is primary for determining if you are in a spin versus a spiral?",
        options: ["Altimeter", "Airspeed Indicator", "Turn Coordinator / Turn & Slip"],
        answer: "Airspeed Indicator",
        explanation: "In a spin, airspeed is low (stalled). In a spiral, airspeed is increasing rapidly.",
        ref: "CFI Spin Training"
    },
    {
        q: "How does the primary objective of Upset Prevention and Recovery Training (UPRT) differ from Aerobatic training?",
        options: ["Aerobatics focuses on safe recovery from upsets, while UPRT focuses on continuous loops", "Aerobatics focuses on precision maneuvering capability, while UPRT focuses on safe, effective recovery from aircraft upsets", "There is no difference; both focus on precision maneuvering"],
        answer: "Aerobatics focuses on precision maneuvering capability, while UPRT focuses on safe, effective recovery from aircraft upsets",
        explanation: "The primary objective of Aerobatics is precision maneuvering capability, whereas UPRT's primary objective is safe, effective recovery from aircraft upsets.",
        ref: "Tailwheel Syllabus: Aerobatics vs. UPRT Flight Training Methods"
    },
    {
        q: "What physical sensations should a pilot expect and be prepared for during initial UPRT?",
        options: ["A complete lack of G-forces during all maneuvers", "Being upside down, experiencing various G-forces, and potentially feeling sick", "Only positive G-forces similar to a steep turn"],
        answer: "Being upside down, experiencing various G-forces, and potentially feeling sick",
        explanation: "UPRT means you will be upside down, experience various G forces, and at first, you will feel sick.",
        ref: "UPRT Expectations"
    },
    {
        q: "According to the UPRT curriculum, what is a general rule for pilots regarding visual cues and instrument indications?",
        options: ["Always trust your physical senses over the instruments", "Any time visual cues or instrument indications differ from basic flight maneuver expectations, the pilot should assume an upset and cross-check", "Ignore the instruments if the visual horizon is obscured"],
        answer: "Any time visual cues or instrument indications differ from basic flight maneuver expectations, the pilot should assume an upset and cross-check",
        explanation: "Any time visual cues or instrument indications differ from basic flight maneuver expectations, the pilot should assume an upset and cross-check to confirm the attitude, instrument error or instrument malfunction.",
        ref: "UPRT General Rules"
    },
    {
        q: "When an inexperienced pilot encounters an unexpected abnormal flight attitude, how do they typically react?",
        options: ["With intelligent and deliberate control inputs", "By immediately consulting the autopilot", "With instinctive and abrupt muscular effort, which can be hazardous"],
        answer: "With instinctive and abrupt muscular effort, which can be hazardous",
        explanation: "The reaction of an inexperienced or inadequately trained pilot to an unexpected abnormal flight attitude is usually instinctive rather than intelligent and deliberate. Such a pilot often reacts with abrupt muscular effort.",
        ref: "UPRT Introduction"
    },
    {
        q: "What is listed as a common mistake during UPRT (Lesson 1)?",
        options: ["Using the rudder too aggressively", "Overloading the airplane, incorrect control inputs, and delay in taking action", "Failing to retract the flaps"],
        answer: "Overloading the airplane, incorrect control inputs, and delay in taking action",
        explanation: "Common mistakes for UPRT 1 include overloading the airplane, incorrect control inputs, and a delay in taking action.",
        ref: "UPRT Lesson 1 Debrief"
    },
    {
        q: "What is the primary prerequisite expectation before a student begins the tailwheel endorsement training?",
        options: ["The student must have 100 hours of tailwheel simulator time", "The student must be working toward their solo", "The student already knows how to fly (no pre-solo or non-PPL pilots)"],
        answer: "The student already knows how to fly (no pre-solo or non-PPL pilots)",
        explanation: "The expectation with this endorsement is you already know how to fly. We are unable to endorse pre-solo or non-PPL pilots.",
        ref: "Tailwheel Endorsement Expectations"
    }
];