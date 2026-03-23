const workouts = [
    { name: "HIIT Fat Burn", img: "https://uploads.onecompiler.io/43tarkw9q/44f8fubjd/fat%20burn.jfif", exercises:[
        { name:"Burpees", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/burpee.jfif" }, { name:"Mountain Climbers", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/mountain%20climbers.jpg" },
        { name:"Jump Squats", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/jump%20squat.jfif" }, { name:"Push-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/push%20up.jfif" },
        { name:"High Knees", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/high%20kneees.jpg" }
    ]},
    { name: "Cardio Blast", img: "https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/cardio%20blast.jfif", exercises:[
        { name:"Jumping Jacks", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/jumpimg.jfif" }, { name:"Butt Kicks", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/butt%20kicks.jfif" },
        { name:"Skaters", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/sk.jfif" }, { name:"Tuck Jumps", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/jl.jfif" },
        { name:"Shadow Boxing", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/shadow%20%20boxing.jfif" }
    ]},
    { name: "Full Body Burn", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/full%20body%20burn.jpg", exercises:[
        { name:"Squat Thrusts", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/222.jfif" }, { name:"Plank Jacks", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/444.jfif" },
        { name:"Lunge Jumps", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/000.jfif" }, { name:"Bear Crawls", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/987.jfif" },
        { name:"Star Jumps", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/4.jfif" }
    ]},
    { name:"Treadmill Training", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/tredmile%20traning.jpg", exercises:[
        {name:"Incline Walk", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/1.jfif"}, {name:"Sprint Intervals", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/2.jfif"},
        {name:"Side Shuffles", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/side%20s.jfif"}, {name:"Backward Run", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/b.jfif"},
        {name:"Hill Sprints", img:"https://uploads.onecompiler.io/43tarkw9q/44f7p5pmy/5.jfif"}
    ]},
    { name:"Jump Rope Workout", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/jump%20rope.jfif", exercises:[
        {name:"Basic Jump", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/basic%20jump.jfif"}, {name:"Double Unders", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/double.jfif"},
        {name:"Cross Rope", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/cross.jfif"}, {name:"High Knees Jump", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/nn.jfif"},
        {name:"Side Swing", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/side%20swing.jfif"}
    ]},
    { name:"Cycling Routine", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/cycling%20routine.png", exercises:[
        {name:"Sprint Cycles", img:"https://uploads.onecompiler.io/43tarkw9q/44f7wuybk/1111.jfif"}, {name:"Standing Climb", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/standing%20climb.jfif"},
        {name:"Cadence Drills", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/cardence.jfif"}, {name:"Hill Repeats", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/hill.jfif"},
        {name:"Interval Sprints", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/interval.jfif"}
    ]},
    { name:"Zumba Dance", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fubjd/zumba.png", exercises:[
        {name:"Salsa Steps", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/salsa.jfif"}, {name:"Mambo Shuffle", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/mambo.jfif"},
        {name:"Cha Cha Slide", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/cha%20cha%20slide.jfif"}, {name:"Merengue March", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/march.jfif"},
        {name:"Cumbia Cross", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/cumbia%201.jfif"}
    ]},
    { name:"Core Crusher", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/core%20crusher.jfif", exercises:[
        {name:"Russian Twists", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/russian%201.jfif"}, {name:"Bicycle Crunches", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/bicycle.jfif"},
        {name:"Flutter Kicks", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/flutter%20kicks.jfif"}, {name:"Dead Bugs", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/dead%20bugs.jfif"},
        {name:"Hollow Hold", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/holow%20hold.jfif"}
    ]},
    { name:"Fat Burning Yoga", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fubjd/yogafat.png", exercises:[
        {name:"Sun Salutations", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/eee.jfif"}, {name:"Warrior Flows", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/wf.jfif"},
        {name:"Chair Pose Hold", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/chair.jfif"}, {name:"Boat Pose", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/boat.jfif"},
        {name:"Plank to Down Dog", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/plank%20to%20dowm.jfif"}
    ]},
    { name:"Boxing Cardio", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/bc.png", exercises:[
        {name:"Jab Cross Combo", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/jab.jfif"}, {name:"Speed Bag", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/speed.jfif"},
        {name:"Heavy Bag Punches", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/heavy.jfif"}, {name:"Footwork Drills", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/footwork.jfif"},
        {name:"Hook Uppercut", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/hook.jfif"}
    ]},
    { name:"Stair Climber", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/stair.jfif", exercises:[
        {name:"High Knees Climb", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/high%20knees%20climb.jfif"}, {name:"Side Step Up", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/sss.jfif"},
        {name:"Cross Over Steps", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/cro.jfif"}, {name:"Lunge Climbs", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/77.jfif"},
        {name:"Sprint Steps", img:"https://uploads.onecompiler.io/43tarkw9q/44f7vm7xh/sprint%20steps.jfif"}
    ]},
    { name:"Abs Shred", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/abs%20sherd.jfif", exercises:[
        {name:"V-Ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/v.jfif"}, {name:"Leg Raises", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/leg.jfif"},
        {name:"Oblique Crunches", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/oblique.jfif"}, {name:"Plank Hip Dips", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/plank%20hip.jfif"},
        {name:"Hanging Knee Tucks", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/hanging.jfif"}
    ]},
    { name:"Lower Body Burn", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/lower%20body%20burn.jfif", exercises:[
        {name:"Bulgarian Split Squats", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/bulahrin.jfif"}, {name:"Jump Lunges", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/jump%20lungs.jfif"},
        {name:"Wall Sits", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/wall123.jfif"}, {name:"Side Lunges", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/side%20lungs1.jfif"},
        {name:"Donkey Kicks", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/donkey.jfif"}
    ]},
    { name:"Upper Body Burn", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/upper%20body%20burn.jfif", exercises:[
        {name:"Battle Rope Slams", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/battle.jfif"}, {name:"Push-up Variations", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/push%20up.jfif"},
        {name:"Pike Push-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/pike.jfif"}, {name:"Tricep Dips", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/triceps.jfif"},
        {name:"Arm Circles", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/arm.jfif"}
    ]},
    { name:"Tabata Workout", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/tabata%20workout.jfif", exercises:[
        {name:"Air Squats", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/air.jfif"}, {name:"Push-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/push%20up.jfif"},
        {name:"Burpees", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/burpee.jfif"}, {name:"Mountain Climbers", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/mountain%20climbers.jpg"},
        {name:"Jumping Jacks", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/j.jfif"}
    ]},
    { name:"Morning Fat Burn", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/ff.png", exercises:[
        {name:"Shadow Boxing", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/shadow%20%20boxing.jfif"}, {name:"Bodyweight Squats", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/bodyweight.jfif"},
        {name:"Push-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/push%20up.jfif"}, {name:"Plank Variations", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/plank%20variations.jfif"},
        {name:"High Knees", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/nn.jfif"}
    ]},
    { name:"Evening Cardio", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/evening%20cardio.png", exercises:[
        {name:"Dance Cardio", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/dance.jfif"}, {name:"Kettlebell Swings", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/kettlebll.jfif"},
        {name:"Battle Ropes", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/battle%20rope.jfif"}, {name:"Box Jumps", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/box%20jump.jfif"},
        {name:"Rowing Sprints", img:"https://uploads.onecompiler.io/43tarkw9q/44f8263gu/rowing%20sprint.jfif"}
    ]},
    { name:"Metabolic Boost", img:"https://uploads.onecompiler.io/43tarkw9q/44f6e2qdy/matabolic%20boost.png", exercises:[
        {name:"Kettlebell Clean", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/k.jfif"}, {name:"Thrusters", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/t.jfif"},
        {name:"Renegade Rows", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/r.jfif"}, {name:"Turkish Get-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/turkush.jfif"},
        {name:"Medicine Ball Slams", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/m.jfif"}
    ]},
    { name:"Sweat Session", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/session.png", exercises:[
        {name:"Sandbag Cleans", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/s.jfif"}, {name:"Sled Pushes", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/sled.jfif"},
        {name:"Farmer Carry", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/f.jfif"}, {name:"Wall Balls", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/www.jfif"},
        {name:"Rope Climbs", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/rrr.jfif"}
    ]},
    { name:"Extreme Fat Burn", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/pp.png", exercises:[
        {name:"Devil Press", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/d.jfif"}, {name:"Pistol Squats", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/p.jfif"},
        {name:"Handstand Push-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/h.jfif"}, {name:"Muscle-ups", img:"https://uploads.onecompiler.io/43tarkw9q/44f8ef6mw/muscle.jfif"},
        {name:"Rope Slams", img:"https://uploads.onecompiler.io/43tarkw9q/44f8fhp2v/rr.jfif"}
    ]}
];

// --- Exercise Steps (can extend for all) ---
const exerciseSteps = {
    // HIIT Fat Burn
    "Burpees": [
        "Stand with feet shoulder-width apart, arms relaxed at sides.",
        "Squat down and place hands on the floor in front of you.",
        "Kick your feet back into a plank position.",
        "Perform a push-up, lowering chest toward the floor.",
        "Jump your feet back toward hands and explode upward with arms overhead."
    ],
    "Mountain Climbers": [
        "Start in a plank position with hands under shoulders.",
        "Drive your right knee toward your chest.",
        "Switch legs quickly, bringing left knee forward while right leg returns.",
        "Alternate legs at a fast pace, keeping hips low.",
        "Engage your core and maintain a straight back throughout."
    ],
    "Jump Squats": [
        "Stand with feet shoulder-width apart.",
        "Lower into a squat keeping chest upright and knees behind toes.",
        "Explosively jump up, reaching arms overhead.",
        "Land softly into a squat position, absorbing impact with knees.",
        "Repeat the jump continuously at controlled pace."
    ],
    "Push-ups": [
        "Place hands slightly wider than shoulders.",
        "Keep your body straight from head to heels.",
        "Lower chest to the floor keeping elbows at 45 degrees.",
        "Push back up to full arm extension.",
        "Maintain core tight and spine neutral throughout."
    ],
    "High Knees": [
        "Stand tall with feet hip-width apart.",
        "Run in place bringing knees up to waist or higher.",
        "Pump arms in sync with leg movement.",
        "Maintain fast, steady pace.",
        "Keep core engaged and back straight throughout."
    ],

    // Cardio Blast
    "Jumping Jacks": [
        "Stand upright with feet together, arms at sides.",
        "Jump feet out while raising arms overhead.",
        "Jump back to starting position with feet together.",
        "Maintain continuous motion at steady pace.",
        "Keep knees slightly bent during landings."
    ],
    "Butt Kicks": [
        "Stand tall and jog in place.",
        "Kick heels toward glutes with each step.",
        "Swing arms naturally for balance.",
        "Keep torso upright and core engaged.",
        "Land softly on the balls of feet with light impact."
    ],
    "Skaters": [
        "Start in a slight squat stance.",
        "Leap to the right landing on right foot.",
        "Cross left foot behind right while swinging arms for balance.",
        "Push off right foot and leap to the left side.",
        "Maintain low, controlled position throughout."
    ],
    "Tuck Jumps": [
        "Stand with feet hip-width apart.",
        "Lower slightly into a squat.",
        "Explosively jump upward bringing knees to chest.",
        "Land softly into a squat with knees bent.",
        "Repeat continuously with controlled rhythm."
    ],
    "Shadow Boxing": [
        "Stand in fighting stance, feet staggered.",
        "Throw jabs, crosses, hooks, and uppercuts in combination.",
        "Move side-to-side or pivot to simulate opponent movement.",
        "Keep hands up to protect face.",
        "Maintain continuous movement for cardio effect."
    ],

    // Full Body Burn
    "Squat Thrusts": [
        "Start standing upright with feet shoulder-width apart.",
        "Squat down and place hands on the floor.",
        "Kick feet back into plank position.",
        "Jump feet back toward hands.",
        "Stand up and repeat motion continuously."
    ],
    "Plank Jacks": [
        "Start in high plank position.",
        "Jump feet outward like a jumping jack.",
        "Return feet together quickly.",
        "Keep hips stable and core tight.",
        "Repeat at a controlled pace for desired duration."
    ],
    "Lunge Jumps": [
        "Start in a lunge position, right leg forward.",
        "Lower back knee toward floor slightly.",
        "Jump explosively and switch legs mid-air.",
        "Land softly in lunge with left leg forward.",
        "Continue alternating legs rhythmically."
    ],
    "Bear Crawls": [
        "Start on hands and feet, hips low, knees off floor.",
        "Move right hand and left foot forward simultaneously.",
        "Then move left hand and right foot forward.",
        "Keep core engaged and back flat.",
        "Continue crawling forward or backward as desired."
    ],
    "Star Jumps": [
        "Start in a squat position.",
        "Jump explosively upward while extending arms and legs outward.",
        "Land softly back into squat.",
        "Maintain continuous jumping rhythm.",
        "Keep chest upright and core engaged."
    ],

    // Treadmill Training
    "Incline Walk": [
        "Set treadmill to a moderate incline.",
        "Walk upright with shoulders relaxed.",
        "Swing arms naturally for balance and pace.",
        "Maintain steady walking pace.",
        "Avoid leaning forward or holding handles excessively."
    ],
    "Sprint Intervals": [
        "Warm up with light jogging for 5 minutes.",
        "Sprint at maximum effort for 20–30 seconds.",
        "Slow down to a walk or jog for recovery for 1–2 minutes.",
        "Repeat sprint/walk cycles 6–10 times.",
        "Cool down with light walking and stretching."
    ],
    "Side Shuffles": [
        "Stand in athletic stance with knees slightly bent.",
        "Shuffle sideways 10–15 steps to the right.",
        "Turn and shuffle back to the left.",
        "Keep hips low and chest up.",
        "Maintain quick foot movement without crossing feet."
    ],
    "Backward Run": [
        "Stand upright and look forward.",
        "Run backward using controlled steps.",
        "Pump arms naturally.",
        "Keep knees lifted slightly higher than normal.",
        "Maintain steady pace and posture."
    ],
    "Hill Sprints": [
        "Find a hill with moderate incline.",
        "Sprint uphill with maximum effort.",
        "Drive knees and pump arms for momentum.",
        "Walk back down for recovery.",
        "Repeat 5–10 times based on fitness level."
    ],

    // Jump Rope Workout
    "Basic Jump": [
        "Hold rope handles in each hand.",
        "Swing rope over head and jump over it with both feet.",
        "Land softly on balls of feet.",
        "Maintain consistent rhythm.",
        "Keep elbows close to sides and wrists controlling rope."
    ],
    "Double Unders": [
        "Jump higher than normal and swing rope under feet twice before landing.",
        "Control rope with wrists and keep elbows tight.",
        "Focus on timing and rhythm.",
        "Land softly on balls of feet.",
        "Repeat continuously for set duration or reps."
    ],
    "Cross Rope": [
        "Cross rope handles in front while jumping.",
        "Jump through the loop and then uncross.",
        "Repeat pattern with steady rhythm.",
        "Keep core engaged and posture upright.",
        "Maintain smooth wrist control for rope swing."
    ],
    "High Knees Jump": [
        "Jump rope while lifting knees high toward chest.",
        "Maintain fast pace and light landings.",
        "Pump arms to maintain balance.",
        "Keep core tight and back straight.",
        "Repeat continuously for duration or reps."
    ],
    "Side Swing": [
        "Swing rope to one side of your body.",
        "Jump lightly over it with both feet.",
        "Alternate sides with steady rhythm.",
        "Control rope with wrists and keep elbows in.",
        "Repeat continuously for set time or reps."
    ],
    // Cycling Routi
"Sprinters": [
    "Warm up on the bike at moderate pace for 5 minutes.",
    "Pedal as fast as possible for 30 seconds.",
    "Recover at an easy pace for 1 minute.",
    "Repeat sprint/recovery cycles 8–10 times.",
    "Cool down with 5 minutes of easy cycling."
],
"Standing Climb": [
    "Stand on pedals and maintain firm grip on handlebars.",
    "Pedal at a steady pace while keeping core tight.",
    "Focus on smooth pedal strokes.",
    "Alternate between seated and standing every 2 minutes.",
    "Maintain proper posture without hunching."
],
"Cadence Drills": [
    "Set bike to flat resistance.",
    "Pedal at high cadence (90–110 rpm) for 1 minute.",
    "Recover at lower cadence for 30 seconds.",
    "Repeat 6–8 cycles.",
    "Maintain smooth and controlled pedal movement."
],
"Hill Repeats": [
    "Set resistance simulating a hill.",
    "Pedal with strong, consistent effort for 2–3 minutes.",
    "Recover at easy pace for 2 minutes.",
    "Repeat hill/recovery cycles 5–6 times.",
    "Focus on maintaining proper form and posture."
],
"Interval Sprints": [
    "Warm up for 5 minutes at moderate pace.",
    "Sprint at max effort for 20–30 seconds.",
    "Recover at easy pace for 1–2 minutes.",
    "Repeat 6–10 times.",
    "Cool down and stretch after completion."
],

// Zumba Dance
"Salsa Steps": [
    "Stand with feet shoulder-width apart.",
    "Shift weight from one foot to the other while stepping forward/back.",
    "Add arm movements coordinated with foot steps.",
    "Maintain rhythm with upbeat music.",
    "Repeat continuously for cardio effect."
],
"Mambo Shuffle": [
    "Step forward with right foot, then back with left.",
    "Add a quick hip sway for each step.",
    "Coordinate arm swings with foot movement.",
    "Keep movements sharp and light on feet.",
    "Repeat pattern continuously with rhythm."
],
"Cha Cha Slide": [
    "Follow basic side-to-side and forward/back steps.",
    "Include cha-cha rhythm by quick triple steps.",
    "Move arms naturally for balance.",
    "Keep knees slightly bent and core engaged.",
    "Perform continuously with music beat."
],
"Merengue March": [
    "March in place or forward with quick steps.",
    "Rotate hips in sync with each step.",
    "Swing arms naturally for rhythm.",
    "Maintain upright posture throughout.",
    "Repeat continuously for cardio effect."
],
"Cumbia Cross": [
    "Step side-to-side with slight forward/back motion.",
    "Cross feet in front or behind for variation.",
    "Add arm movements for coordination.",
    "Maintain light, bouncy footwork.",
    "Repeat pattern continuously with music."
],

// Core Crusher
"Russian Twists": [
    "Sit on floor with knees bent, feet lifted slightly.",
    "Hold hands together or with a weight.",
    "Twist torso to the right, then left.",
    "Keep core engaged and back straight.",
    "Repeat for desired reps maintaining control."
],
"Bicycle Crunches": [
    "Lie on back, hands behind head, knees lifted.",
    "Bring right elbow toward left knee while straightening right leg.",
    "Switch sides, bringing left elbow to right knee.",
    "Continue alternating in controlled motion.",
    "Avoid pulling on neck; use core muscles."
],
"Flutter Kicks": [
    "Lie on back, legs extended, hands under glutes.",
    "Lift legs slightly off floor.",
    "Alternate small up/down kicks rapidly.",
    "Keep core tight and lower back pressed to floor.",
    "Continue for desired duration or reps."
],
"Dead Bugs": [
    "Lie on back with arms extended up and knees bent 90°.",
    "Lower right arm and left leg toward floor slowly.",
    "Return to starting position.",
    "Repeat with opposite arm and leg.",
    "Keep core engaged and spine neutral."
],
"Hollow Hold": [
    "Lie on back, arms extended overhead.",
    "Lift shoulders and legs slightly off floor.",
    "Keep lower back pressed into floor.",
    "Hold position while breathing steadily.",
    "Maintain tension in core for desired time."
],

// Fat Burning Yoga
"Sun Salutations": [
    "Start standing, feet together, arms at sides.",
    "Inhale, raise arms overhead and look up.",
    "Exhale, fold forward into Uttanasana.",
    "Step back into plank and lower down (Chaturanga).",
    "Flow through upward dog, downward dog, and back to standing."
],
"Warrior Flows": [
    "Step one foot forward into lunge.",
    "Raise arms overhead, palms together.",
    "Hold, then flow into reverse warrior with back arm down.",
    "Switch sides and repeat sequence.",
    "Maintain steady breathing throughout."
],
"Chair Pose Hold": [
    "Stand with feet together.",
    "Bend knees and sink hips as if sitting on a chair.",
    "Raise arms overhead, keeping shoulders relaxed.",
    "Hold for 30–60 seconds.",
    "Engage core and keep chest lifted."
],
"Boat Pose": [
    "Sit on floor, knees bent, feet lifted off floor.",
    "Extend arms forward parallel to floor.",
    "Balance on sit bones, spine straight.",
    "Hold for 30–60 seconds, keeping core engaged.",
    "Breathe steadily and avoid rounding back."
],
"Plank to Down Dog": [
    "Start in high plank.",
    "Push hips up and back into downward dog.",
    "Keep heels toward floor and spine long.",
    "Return to plank and repeat flow.",
    "Engage core and maintain smooth breathing."
],

// Boxing Cardio
"Jab Cross Combo": [
    "Stand in fighting stance.",
    "Throw jab with lead hand, cross with rear hand.",
    "Rotate hips and shoulders naturally.",
    "Keep hands up to protect face.",
    "Repeat in controlled, rhythmic pattern."
],
"Speed Bag": [
    "Stand in front of speed bag platform.",
    "Hit bag with alternating fists in a circular rhythm.",
    "Maintain small, fast movements.",
    "Keep elbows slightly bent and hands relaxed.",
    "Continue for desired duration maintaining rhythm."
],
"Heavy Bag Punches": [
    "Stand in boxing stance in front of heavy bag.",
    "Throw punches: jab, cross, hook, uppercut.",
    "Pivot feet and rotate hips for power.",
    "Maintain controlled breathing.",
    "Continue with combinations for set time."
],
"Footwork Drills": [
    "Move forward, backward, and sideways in fighting stance.",
    "Stay light on feet and maintain balance.",
    "Coordinate punches with steps.",
    "Keep eyes forward and core engaged.",
    "Repeat continuously for agility and endurance."
],
"Hook Uppercut": [
    "Stand in boxing stance.",
    "Throw a hook with lead hand, then uppercut with rear hand.",
    "Rotate torso and pivot feet for power.",
    "Keep hands guarding face between punches.",
    "Repeat combination at controlled speed."
],

// Stair Climber
"High Knees Climb": [
    "Step onto first stair with right foot.",
    "Drive left knee up toward chest.",
    "Alternate legs quickly with controlled motion.",
    "Use arms for balance and momentum.",
    "Maintain rhythm for cardio effect."
],
"Side Step Up": [
    "Stand sideways to stairs.",
    "Step up with right foot, then left follows.",
    "Step back down in reverse order.",
    "Repeat continuously at steady pace.",
    "Keep core engaged and back upright."
],
"Cross Over Steps": [
    "Step right foot across body onto step.",
    "Bring left foot to meet right.",
    "Step down reversing crossover.",
    "Maintain controlled balance and posture.",
    "Repeat for duration or reps."
],
"Lunge Climbs": [
    "Step forward onto stair with right foot.",
    "Drop back knee into lunge while on stair.",
    "Push up through front leg and switch legs.",
    "Continue alternating lunge steps.",
    "Keep torso upright and core engaged."
],
"Sprint Steps": [
    "Sprint up stairs as fast as possible.",
    "Use arms for momentum.",
    "Land softly and maintain light foot contact.",
    "Walk down stairs slowly for recovery.",
    "Repeat sprint cycles for desired sets."
],

// Abs Shred
"V-Ups": [
    "Lie on back with arms overhead.",
    "Simultaneously lift legs and torso to touch hands to feet.",
    "Lower slowly back to starting position.",
    "Keep core tight and avoid arching lower back.",
    "Repeat for controlled reps."
],
"Leg Raises": [
    "Lie flat on back, hands under glutes.",
    "Lift legs straight up toward ceiling.",
    "Lower legs slowly without touching floor.",
    "Keep core engaged and lower back pressed to floor.",
    "Repeat with controlled movement."
],
"Oblique Crunches": [
    "Lie on back with knees bent, feet on floor.",
    "Twist torso to bring right elbow toward left knee.",
    "Switch sides, bringing left elbow toward right knee.",
    "Keep movements controlled and deliberate.",
    "Avoid pulling neck; engage obliques."
],
"Plank Hip Dips": [
    "Start in forearm plank.",
    "Rotate hips to dip gently to right side.",
    "Return to center and dip left side.",
    "Maintain plank alignment.",
    "Continue alternating sides rhythmically."
],
"Hanging Knee Tucks": [
    "Hang from pull-up bar with arms extended.",
    "Bring knees up toward chest in controlled motion.",
    "Lower legs slowly without swinging.",
    "Engage core throughout exercise.",
    "Repeat for desired reps maintaining control."
],

// Lower Body Burn
"Bulgarian Split Squats": [
    "Stand in front of bench, one foot behind on bench.",
    "Lower hips until front thigh is parallel to floor.",
    "Push through front heel to rise back up.",
    "Keep torso upright and core engaged.",
    "Repeat for reps, then switch legs."
],
"Jump Lunges": [
    "Start in lunge position.",
    "Jump explosively and switch legs mid-air.",
    "Land softly in lunge position with opposite leg forward.",
    "Keep chest upright and core tight.",
    "Repeat alternately for desired reps."
],
"Wall Sits": [
    "Lean back against wall with feet shoulder-width apart.",
    "Lower hips until knees are at 90 degrees.",
    "Hold position, keeping back flat against wall.",
    "Engage core and quads.",
    "Maintain hold for desired duration."
],
"Side Lunges": [
    "Stand tall with feet together.",
    "Step right leg out to side and bend knee while keeping left leg straight.",
    "Push back to center and repeat on left side.",
    "Keep chest upright and core engaged.",
    "Alternate sides continuously."
],
"Donkey Kicks": [
    "Start on hands and knees.",
    "Lift right leg toward ceiling keeping knee bent.",
    "Lower leg without touching floor.",
    "Repeat with left leg.",
    "Maintain core stability and controlled motion."
],

// Upper Body Burn
"Battle Rope Slams": [
    "Grab battle ropes in each hand.",
    "Lift ropes overhead and slam down forcefully.",
    "Maintain slight bend in knees and core engaged.",
    "Perform continuous slams at steady pace.",
    "Keep shoulders relaxed and controlled."
],
"Push-up Variations": [
    "Perform standard push-ups.",
    "Alternate with wide, diamond, or incline push-ups.",
    "Maintain straight back and core engagement.",
    "Lower chest fully in each variation.",
    "Push back up to complete repetition."
],
"Pike Push-ups": [
    "Start in downward dog position.",
    "Lower head toward floor by bending elbows.",
    "Push back up to start position.",
    "Keep core tight and legs straight.",
    "Repeat with controlled movement."
],
"Tricep Dips": [
    "Sit on edge of bench or chair, hands gripping edge.",
    "Lower body by bending elbows to 90 degrees.",
    "Push through palms to lift back up.",
    "Keep elbows close to body.",
    "Repeat for desired reps maintaining form."
],
"Arm Circles": [
    "Extend arms to sides at shoulder height.",
    "Rotate arms forward in small controlled circles.",
    "Reverse direction after set duration.",
    "Keep shoulders down and relaxed.",
    "Maintain steady pace for endurance."
],

// Tabata Workout
"Air Squats": [
    "Stand with feet shoulder-width apart.",
    "Lower into squat keeping chest upright.",
    "Push through heels to stand back up.",
    "Maintain controlled rhythm.",
    "Repeat continuously for Tabata intervals."
],
"Push-ups": [
    "Perform standard push-ups.",
    "Keep core engaged and spine neutral.",
    "Lower chest to floor fully.",
    "Push back up with control.",
    "Maintain continuous movement during interval."
],
"Burpees": [
    "Perform standard burpee as previously described.",
    "Maintain proper form.",
    "Repeat continuously during Tabata interval.",
    "Focus on explosive movement.",
    "Keep breathing controlled."
],
"Mountain Climbers": [
    "Perform mountain climbers as previously described.",
    "Keep core engaged.",
    "Maintain fast, steady pace.",
    "Avoid hips rising.",
    "Repeat continuously for duration."
],
"Jumping Jacks": [
    "Perform jumping jacks continuously.",
    "Maintain upright posture.",
    "Keep knees slightly bent during landing.",
    "Move arms fully overhead each rep.",
    "Maintain rhythm for Tabata interval."
],

// Morning Fat Burn
"Shadow Boxing": [
    "Perform shadow boxing as previously described.",
    "Maintain steady movement.",
    "Throw punches with controlled power.",
    "Keep hands up and core engaged.",
    "Continue for desired duration."
],
"Bodyweight Squats": [
    "Stand with feet shoulder-width apart.",
    "Lower hips into squat keeping chest upright.",
    "Push through heels to stand back up.",
    "Keep knees behind toes.",
    "Repeat continuously for reps or time."
],
"Push-ups": [
    "Perform standard push-ups.",
    "Engage core and keep back straight.",
    "Lower chest fully, then push up.",
    "Maintain controlled motion.",
    "Repeat for desired reps."
],
"Plank Variations": [
    "Perform standard plank on forearms or hands.",
    "Alternate side plank, plank with shoulder taps, or plank with leg lifts.",
    "Keep core tight and back straight.",
    "Maintain steady breathing.",
    "Hold each variation for set duration."
],
"High Knees": [
    "Run in place lifting knees to hip level.",
    "Pump arms in coordination.",
    "Keep torso upright.",
    "Maintain fast, controlled pace.",
    "Continue for set time or reps."
],

// Evening Cardio
"Dance Cardio": [
    "Follow choreographed dance moves or freestyle.",
    "Keep continuous movement to raise heart rate.",
    "Engage arms and legs fully.",
    "Maintain rhythm with music.",
    "Repeat sequences for duration."
],
"Kettlebell Swings": [
    "Hold kettlebell with both hands.",
    "Swing kettlebell between legs and up to chest or overhead.",
    "Use hips for power, not arms.",
    "Maintain straight back and engaged core.",
    "Repeat controlled swings for reps."
],
"Battle Ropes": [
    "Perform alternating waves or double waves with battle ropes.",
    "Keep core tight and knees slightly bent.",
    "Maintain rhythm for cardiovascular effect.",
    "Engage shoulders and arms fully.",
    "Repeat continuously for duration."
],
"Box Jumps": [
    "Stand in front of sturdy box or platform.",
    "Jump explosively onto box landing softly.",
    "Step back down carefully.",
    "Repeat continuously with controlled jumps.",
    "Keep knees slightly bent upon landing."
],
"Rowing Sprints": [
    "Sit on rowing machine with proper posture.",
    "Push legs, lean back slightly, pull handle to chest.",
    "Return to starting position smoothly.",
    "Perform maximum-effort sprints for set intervals.",
    "Maintain controlled breathing and rhythm."
],

// Metabolic Boost
"Kettlebell Clean": [
    "Stand with feet shoulder-width apart, kettlebell on floor.",
    "Swing kettlebell between legs and up to shoulder.",
    "Catch it with elbow close to body.",
    "Lower kettlebell safely and repeat.",
    "Engage hips and core for power."
],
"Thrusters": [
    "Hold dumbbells at shoulders.",
    "Perform squat keeping chest upright.",
    "Explosively press weights overhead on standing.",
    "Lower weights to shoulders, repeat.",
    "Maintain controlled, fluid motion."
],
"Renegade Rows": [
    "Start in high plank with dumbbells.",
    "Row right dumbbell toward torso keeping hips stable.",
    "Lower slowly, repeat with left dumbbell.",
    "Engage core throughout.",
    "Maintain straight back and controlled movement."
],
"Turkish Get-ups": [
    "Lie on floor holding weight above shoulder.",
    "Roll to elbow, then to hand.",
    "Push hips off floor into lunge.",
    "Stand up keeping weight overhead.",
    "Reverse steps to return to floor."
],
"Medicine Ball Slams": [
    "Hold medicine ball overhead.",
    "Engage core and slam ball to floor with force.",
    "Catch or pick up ball quickly.",
    "Repeat continuously for reps or duration.",
    "Maintain proper posture and controlled movements."
],

// Sweat Session
"Sandbag Cleans": [
    "Squat and grab sandbag.",
    "Lift sandbag to chest in explosive motion.",
    "Stand fully upright.",
    "Lower sandbag and repeat.",
    "Keep core tight and knees aligned."
],
"Sled Pushes": [
    "Lean forward on sled handles.",
    "Push sled with legs in controlled, continuous motion.",
    "Maintain low body position.",
    "Drive through heels for power.",
    "Repeat for distance or time."
],
"Farmer Carry": [
    "Hold weights in each hand.",
    "Walk straight for distance maintaining posture.",
    "Keep core engaged and shoulders down.",
    "Avoid swinging weights.",
    "Repeat for multiple laps or sets."
],
"Wall Balls": [
    "Hold medicine ball at chest.",
    "Squat and explode upward throwing ball at target.",
    "Catch ball and repeat squat.",
    "Maintain chest upright and core tight.",
    "Repeat for desired reps."
],
"Rope Climbs": [
    "Grab rope with hands and legs.",
    "Use legs to assist in climbing efficiently.",
    "Pull body up hand over hand.",
    "Descend carefully controlling speed.",
    "Repeat if multiple climbs are required."
],

// Extreme Fat Burn
"Devil Press": [
    "Start with dumbbells on floor.",
    "Perform burpee, lifting dumbbells during jump.",
    "Press dumbbells overhead.",
    "Lower to floor and repeat.",
    "Maintain controlled motion throughout."
],
// Extreme Fat Burn (continued)
"Pistol Squats": [
    "Stand on one leg with the other leg extended forward.",
    "Lower body slowly into a squat while keeping extended leg off the floor.",
    "Keep chest upright and core engaged.",
    "Push through heel to stand back up.",
    "Repeat with controlled movement, then switch legs."
],
"Handstand Push-ups": [
    "Kick up into a handstand against a wall for support.",
    "Lower head toward floor by bending elbows slowly.",
    "Push back up to handstand position.",
    "Keep core tight and body aligned.",
    "Repeat carefully maintaining balance and control."
],
"Muscle-ups": [
    "Grab pull-up bar with overhand grip.",
    "Pull yourself up explosively, transitioning from pull-up to dip over bar.",
    "Press up until arms are fully extended above bar.",
    "Lower slowly back down with control.",
    "Engage shoulders, arms, and core throughout."
],
"Rope Slams": [
    "Grab battle rope handles firmly.",
    "Lift ropes overhead and slam forcefully to the ground.",
    "Engage core and bend knees slightly for power.",
    "Perform continuous slams maintaining rhythm.",
    "Avoid hunching shoulders; maintain controlled posture."
]
};
// --- JS Functions ---
let currentWorkout = null;

document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.getElementById('workoutsGrid');
    workouts.forEach(workout=>{
        const card=document.createElement('div');
        card.className='card';
        card.innerHTML=`
            <img src="${workout.img}" alt="${workout.name}" class="workout-img" />
            <div class="workout-name">${workout.name}</div>
            <button class="view-details-btn">View Details</button>
        `;
        card.querySelector('.view-details-btn').addEventListener('click', e=>{
            e.stopPropagation();
            showWorkoutDetails(workout);
        });
        card.addEventListener('click', ()=>showWorkoutDetails(workout));
        grid.appendChild(card);
    });
});

function showWorkoutDetails(workout){
    currentWorkout=workout;
    document.getElementById('modalWorkoutTitle').textContent=workout.name;
    const exercisesGrid=document.getElementById('exercisesGrid');
    exercisesGrid.innerHTML='';
    workout.exercises.forEach(exercise=>{
        const exerciseCard=document.createElement('div');
        exerciseCard.className='exercise-card';
        exerciseCard.innerHTML=`
            <img src="${exercise.img}" alt="${exercise.name}" class="exercise-img" />
            <div class="exercise-name">${exercise.name}</div>
            <button class="steps-btn">Detail Steps</button>
        `;
        exerciseCard.querySelector('.steps-btn').addEventListener('click', e=>{
            e.stopPropagation(); e.preventDefault();
            showExerciseSteps(exercise.name);
        });
        exercisesGrid.appendChild(exerciseCard);
    });
    document.getElementById('workoutModal').classList.add('active');
}

function closeWorkoutModal(){ document.getElementById('workoutModal').classList.remove('active'); }
function showExerciseSteps(name){
    document.getElementById('stepsTitle').textContent=name;
    const stepsList=document.getElementById('stepsList'); stepsList.innerHTML='';
    if(exerciseSteps[name]){ exerciseSteps[name].forEach((s,i)=>{
        const li=document.createElement('li'); li.innerHTML=`<strong>${i+1}.</strong> ${s}`;
        stepsList.appendChild(li);
    });}else{ stepsList.innerHTML='<li>No steps available.</li>'; }
    document.getElementById('stepsModal').classList.add('active');
}
function closeStepsModal(){ document.getElementById('stepsModal').classList.remove('active'); }

document.getElementById('workoutModal').addEventListener('click', e=>{
    if(e.target.id==='workoutModal'){ closeWorkoutModal(); }
});
document.getElementById('stepsModal').addEventListener('click', e=>{
    if(e.target.id==='stepsModal'){ closeStepsModal(); }
});
document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){ closeWorkoutModal(); closeStepsModal(); }
});