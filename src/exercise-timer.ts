type RootExcercise = SimpleExercise | Superset;

type SimpleExercise = Exercise | Rest | Stopwatch | Burst;

interface Exercise {
  type: "work";
  time?: number;
  name: string;
  link?: string;
}

interface Rest {
  type: "rest";
  time: number;
  grace?: number;
}

interface Stopwatch {
  type: "stopwatch";
  name: string;
  link?: string;
}

interface Burst {
  type: "burst";
  time: number;
  name: string;
  link?: string;
}

interface Superset {
  type: "superset";
  activities: SimpleExercise[];
  repeat: number;
}
const beep = new Audio(
  "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
);
const chord = new Audio(
  "data:audio/wav;base64,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"
);

type Programme = ProgrammeMenu | RootExcercise[];
type ProgrammeMenu = { [s: string]: Programme };

const allProgrammes: ProgrammeMenu = {
  "Warm-up": {
    Upper: [
      { type: "work", name: "Nerve glides" },
      { type: "work", name: "Foam roll back" },
      { type: "work", name: "Thoracic extensions & rotations" },
      { type: "rest", time: 15 },
      { type: "work", name: "Dead Hang (Left)", time: 10 },
      { type: "rest", time: 5 },
      { type: "work", name: "Dead Hang (Right)", time: 10 },
      { type: "work", name: "Halos (25lbs; 10)" },
      { type: "rest", time: 15 },
      {
        type: "work",
        name: "Lunge Side Rotation (Wall+Yoga Block; Left)",
        time: 20,
      },
      { type: "rest", time: 10 },
      {
        type: "work",
        name: "Lunge Side Rotation (Wall+Yoga Block; Right)",
        time: 20,
      },
      { type: "work", name: "Band pulls" },
      { type: "work", name: "Train Tracks" },
      { type: "rest", time: 15 },
      { type: "work", name: "Static Front Rack", time: 30 },
    ],
    Lower: [
      { type: "work", name: "Foam roll back" },
      { type: "work", name: "Massage feet" },
      { type: "work", name: "Thoracic extensions & rotations" },
      { type: "work", name: "Vertical Wall Hamstring stretch", time: 90 },
      { type: "rest", time: 15 },
      { type: "work", name: "Frog stretch", time: 60 },
      { type: "rest", time: 15 },
      {
        type: "work",
        name: "Couch Stretch (Left)",
        time: 60,
      },
      { type: "rest", time: 5 },
      {
        type: "work",
        name: "Couch Stretch (Right)",
        time: 60,
      },
      { type: "rest", time: 15 },
      { type: "work", name: "Floating Stand on Block (Left)", time: 30 },
      { type: "rest", time: 5 },
      { type: "work", name: "Floating Stand on Block (Right)", time: 30 },
      { type: "work", name: "Put on Squat Shoes" },
      { type: "rest", time: 5 },
      { type: "work", name: "Deep squat", time: 120 },
    ],
  },
  "Jaw & Neck": [
    { type: "rest", time: 60 },
    {
      type: "superset",
      repeat: 15,
      activities: [
        { type: "work", time: 5, name: "Cervial Lift" },
        { type: "rest", time: 3 },
      ],
    },
  ],
  "Jaw & Neck 2": [
    {
      type: "superset",
      repeat: 4,
      activities: [
        { type: "rest", time: 60 },
        { type: "work", time: 15, name: "Lying Stare (Left)" },
        { type: "rest", time: 10 },
        { type: "work", time: 15, name: "Lying Stare (Left)" },
        { type: "rest", time: 10 },
        { type: "work", name: "Side Rotations (Kneeling)" },
      ],
    },
  ],
  Physiotherapy: {
    "Foot Strength": [
      {
        type: "work",
        name: "Alternate Toe Lifts (15)",
      },
      {
        type: "work",
        name: "Toe Spreads (15)",
      },
      { type: "rest", time: 10 },
      {
        type: "work",
        time: 40,
        name: "Dynamic Stability (Dumbbell Pass; Left)",
      },
      { type: "rest", time: 10 },
      {
        type: "work",
        time: 40,
        name: "Dynamic Stability (Dumbbell Pass; Right)",
      },
      { type: "rest", time: 10 },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Toe Jumps (120bpm)", time: 20 },
          { type: "rest", time: 40 },
        ],
      },
    ],
    "Pec/Rib Irritation": [
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Full Can Hold", time: 30 },
          { type: "rest", time: 60 },
        ],
      },
      { type: "work", name: "3 Position Overhead Carry" },
    ],
  },
  Tabata: [
    {
      type: "superset",
      activities: [
        { type: "work", name: "Work", time: 20 },
        { type: "rest", time: 10 },
      ],
      repeat: 8,
    },
  ],

  "Will Wave-loaded": {
    "Day 1": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Dual Arm Trap 3 Raise (4-6; 2-0-2-4)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Elevated Pike Push Up (4-6; 2-0-2-4)" },
          { type: "rest", time: 30 },
        ],
      },
      { type: "work", name: "Barbell Overhead Press (Light 7; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Overhead Press (Light 5; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Overhead Press (Light 3; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Overhead Press (Heavy 7; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Overhead Press (Heavy 5; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Overhead Press (Heavy 3; 3-0-1-0)" },
      { type: "rest", time: 90 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Single Arm DB Row (10-12; 3-0-1-1)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Single Arm Overhead Tricep Extension (10-12; 3-1-1-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
      { type: "stopwatch", name: "Copenhagen Plank (Left)" },
      { type: "stopwatch", name: "Copenhagen Plank (Right)" },
    ],
    "Day 2": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Sigle Leg RDL (4-6)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Single Leg Bridges (4-6)" },
          { type: "rest", time: 30 },
        ],
      },
      { type: "work", name: "Barbell RDL (Light 7; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell RDL (Light 5; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell RDL (Light 3; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell RDL (Heavy 7; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell RDL (Heavy 5; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell RDL (Heavy 3; 3-0-1-0)" },
      { type: "rest", time: 90 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Front-foot Elevated Split Squat (10-12; 3-1-1-0)",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Band-resisted Dead Bug", time: 45 },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Dumbell Calf Raise (10-20; 4-0-4-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 3": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Dumbell Skull Crushers (4-6; 4-0-1-0)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Barbell Z Press (4-6; slow)" },
          { type: "rest", time: 30 },
        ],
      },
      { type: "work", name: "Barbell Bench Press (Light 7; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Bench Press (Light 5; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Bench Press (Light 3; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Bench Press (Heavy 7; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Bench Press (Heavy 5; 3-0-1-0)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Barbell Bench Press (Heavy 3; 3-0-1-0)" },
      { type: "rest", time: 90 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Dumbell Lateral Raise (12; 3-0-3-1)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Side Plank (Left)", time: 20 },
          { type: "rest", time: 5 },
          { type: "work", name: "Side Plank (Right)", time: 20 },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Push Ups" },
          { type: "rest", time: 30 },
        ],
      },
    ],
    "Day 4": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Cossack Squat (4-6)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Beast Pose", time: 30 },
          { type: "rest", time: 30 },
        ],
      },
      { type: "work", name: "Back Squat (Light 7)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Back Squat (Light 5)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Back Squat (Light 3)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Back Squat (Heavy 7)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Back Squat (Heavy 5)" },
      { type: "rest", time: 90 },
      { type: "work", name: "Back Squat (Heavy 3)" },
      { type: "rest", time: 90 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Bulgarian Split Squat (10-12; 3-1-1-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Lunge Isometric (Left)", time: 25 },
          { type: "rest", time: 5 },
          { type: "work", name: "Lunge Isometric (Right)", time: 25 },
          { type: "rest", time: 45 },
        ],
      },
      { type: "work", name: "Reverse Nordic Curl (F)" },
    ],
  },
  "Will Strength 1": {
    "Day 1 (Bench)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Bent Over Reverse DB Fly (10-12; 3-1-1-1)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "1¼ Bench Press (4; Slow)" },
          { type: "rest", time: 75 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Half-Kneeling OHP (6-8; 3-1-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Powell Raise (6-8; 3-1-1-0)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Single Arm Cable Pushdown (25; Medium)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2 (Front Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Front Foot Elevated Split Squat (6-8; 3-1-1-1)",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Front Squat (4; 6-1-X-1)" },
          { type: "rest", time: 90 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Elevated Reverse Lunge (6-8; 3-1-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Single Leg Calf Raise (6-8; 4-4-X-0)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Dynamic Copenhagen Plank (10-12; Medium)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 3 (OHP)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Banded Face Pull with External Rotation (6-8; Slow)",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Pike Pushup Press (2; 4-1-X-1)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Wide Grip Pullup (2; X-X-X-X)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Side Lateral Raise (6-8; 4-0-4-1)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Dual Arm DB Pullover (10-12; Medium)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 4 (Posterior)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front-Loaded Single Leg RDL (6-8; Slow)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Snatch Grip RDL (4; 4-1-x-1)" },
          { type: "rest", time: 90 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Towel Hamstring Curl (6-8; Medium)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Single Foot Elevated Cossack Squat (6-8; 4-0-4-0)",
          },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Hanging Knee Raises (A; 4-1-X-1)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 5 (Arms)": [
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Concentration Curl (5; 3-1-X-1)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Single Arm Cable OH Extension (8-10; 3-3-1-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Alternating DB Curl (6-8; Medium)" },
          { type: "rest", time: 45 },
          { type: "work", name: "DB Skull Crushers (6-8; 4-1-X-1)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
  "Will Hypertrophy 2": {
    "Day 1 Upper": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions and Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Band Shoulder Stretch (Facing Away)" },
      { type: "work", name: "Band Pull with Full Rotation" },
      { type: "work", name: "Band Pull with Shoulder Depressions" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Pike Beast with Elevation and Saw (5)" },
          { type: "rest", time: 30 },
          { type: "work", name: "Train Tracks" },
          { type: "rest", time: 30 },
        ],
      },
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Push Up - Elevated/Eccentric (5; 8-0-X-0)" },
          { type: "rest", time: 75 },
          { type: "work", name: "Powell Raise (10-12; 3-0-1-0)" },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Single Arm Arnold Press (Half-kneeling; 6-8; 3-0-X-2)",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Rocky Chins Using Cable (2 RIR)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "1¼ DB Skull Crushers (6-8; 3-0-2-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Single Arm Trap 3 Raises (6-8; 3-0-1-3)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 1 Lower": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions and Rotations" },
      { type: "work", name: "90/90 Stretch" },
      { type: "work", name: "Half-Kneeling Hip Flexor Stretch on Wall" },
      { type: "work", name: "Single Leg RDL" },
      { type: "work", name: "Hip Airplane" },
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Sissy Squat with Goblet Hold (5; 8-0-X-0)" },
          { type: "rest", time: 75 },
          { type: "work", name: "Towel Hamstring Curl (10-12; 3-0-1-0)" },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Front Foot Elevated Split Squats (6-8; 3-2-X-0)",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Hip Bridge March", time: 40 },
          { type: "rest", time: 45 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Reverse Nordic Curl (6-8)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Tibia Raise (A)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2 Upper": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions and Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Band Shoulder Stretch (Facing Away)" },
      { type: "work", name: "Band Pull with Full Rotation" },
      { type: "work", name: "Band Pull with Shoulder Depressions" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Wall Pushes with Elevations" },
          { type: "rest", time: 30 },
          { type: "work", name: "Train Tracks" },
          { type: "rest", time: 30 },
        ],
      },
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Rack Chin (5; 4-0-X-0)" },
          { type: "rest", time: 75 },
          {
            type: "work",
            name: "Low Elevated Z Press - Single Arm DB (10-12; 3-0-1-0)",
          },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Dual Arm DB Pullover - Neutral Grip (6-8; 3-1-1-0)",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Cable Woodchopper (12-15; 2-0-2-0)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Single Arm Overhead Cable Extension (10-12; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Supported Reverse DB Fly (10-12; 2-0-2-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2 Lower": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions and Rotations" },
      { type: "work", name: "90/90 Stretch" },
      { type: "work", name: "Half-Kneeling Hip Flexor Stretch on Wall" },
      { type: "work", name: "Single Leg RDL" },
      { type: "work", name: "Hip Airplane" },
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Back Squat to Box (5; 8-0-X-0)" },
          { type: "rest", time: 75 },
          { type: "work", name: "2-Point Blank (4-6)" },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Reverse Hyperextension (6-8; 3-0-1-1)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Walking Lunge (6-8)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Hamstring Walkouts", time: 40 },
          { type: "rest", time: 45 },
          { type: "work", name: "Tibia Raises (A)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
  "Arm Hypertrophy": {
    Pinwheels: [
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Pinwheel Curls",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "4 (Will)": [
      {
        type: "superset",
        repeat: 5,
        activities: [
          {
            type: "work",
            name: "Bent Elbow Pronation/Supination (Left)",
            time: 30,
          },
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Bent Elbow Pronation/Supination (Right)",
            time: 30,
          },
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Lat Stretch (Supinated curl with elbows on the bench)",
            time: 30,
          },
          { type: "rest", time: 10 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Pushup (4)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Pushup (4)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Standing Bicep Curl (4)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Standing Bicep Curl (4)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "DB California Press (10-12)" },
          { type: "work", name: "High Cable Bicep (15-20)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Unilateral Cable Bicep Curl in Shortened Position (12-15; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Bicep Chinup (10-12; 2-0-1-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Wrist Curl (12-15; 2-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Wrist Rotation (12-15)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Wrist Lift (12-15)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Elbow Pushup (12)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Real Pushup Position Hold",
            time: 30,
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Elevated Shoulder Isometric Walks", time: 40 },
          { type: "rest", time: 60 },
        ],
      },
    ],

    "2 (Jeff+Will)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Unilateral Cable Bicep Curl in Shortened Position (12-15; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Wide Grip Standing Barbell Curl Against Wall (10-12; 2-0-1-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Bayesian Bicep Curl (12-15; 2-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Bent-over Tricep Cable Pressdown (10-12; 2-0-X-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Tricep Behind-the-head Cable Extension (12-15; 2-0-1-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Elevated Shoulder Isometric Walks", time: 40 },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "1 (Jeff)": [
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Preacher Curl (12-15; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Standing Barbell Curl (6-8; 2-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Bayesian Bicep Curl (12-15; 2-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Tricep Pressdown (10-12; 2-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "DB Neutral Grip Press (12-15; 2-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Gymnast Biceps": [
      { type: "rest", time: 30 },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "90° Hangs", time: 30 },
          { type: "rest", time: 60 },
          { type: "work", name: "Isometric Pushup", time: 30 },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Bar Shuffle", time: 30 },
          { type: "rest", time: 60 },
          { type: "work", name: "Maltese on Safties", time: 30 },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },
  GVT: {
    "Day 1": [
      { type: "work", name: "Foam Roll Back" },
      { type: "work", name: "Thoracic Extension and Rotations" },
      { type: "work", name: "90/90 Stretch" },
      { type: "work", name: "Half-Kneeling Hip Flexor Stretch" },
      { type: "work", name: "Single Leg RDL" },
      { type: "work", name: "Hip Airplane" },
      { type: "work", name: "Wall Leaning Tibia Raises" },
      { type: "work", name: "Seated Hamstring Stretch", time: 120 },
      { type: "rest", time: 15 },
      { type: "work", name: "Vertical Wall Hamstring Stretch", time: 120 },
      { type: "rest", time: 15 },
      { type: "work", name: "Hamstring Strech Kicks (25)" },
      {
        type: "superset",
        repeat: 10,
        activities: [
          { type: "work", name: "Rear Elevated Split Squat (10)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Hamstring Slide (10)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Snatch Grip RDL (6-8)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Protracted Plank", time: 45 },
          { type: "rest", time: 45 },
        ],
      },
    ],

    "Day 2": [
      { type: "work", name: "Foam Roll Back" },
      { type: "work", name: "Thoracic Extension and Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug with Band" },
      { type: "work", name: "Band Shoulder Stretch (Facing Away)" },
      { type: "work", name: "Band Pull with Full Rotation" },
      { type: "work", name: "Band Pull with Shoulder Depressions" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Wall Pushes with Elevations" },
          { type: "rest", time: 30 },
          { type: "work", name: "Train Tracks" },
          { type: "rest", time: 30 },
        ],
      },
      {
        type: "superset",
        repeat: 10,
        activities: [
          { type: "work", name: "Neutral Grip DB Press with Low Incline (10)" },
          { type: "rest", time: 60 },
          { type: "work", name: "High Cable Bicep Curl (10)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Dumbell Pullover (6-8)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Unsupported Seated Dual Bicep Curl (10-12)" },
          { type: "rest", time: 45 },
        ],
      },
    ],

    "Day 3": [
      { type: "work", name: "Foam Roll Back" },
      { type: "work", name: "Thoracic Extension and Rotations" },
      { type: "work", name: "90/90 Stretch" },
      { type: "work", name: "Half-Kneeling Hip Flexor Stretch" },
      { type: "work", name: "Single Leg RDL" },
      { type: "work", name: "Hip Airplane" },
      { type: "work", name: "Wall Leaning Tibia Raises" },
      { type: "work", name: "Seated Hamstring Stretch", time: 120 },
      { type: "rest", time: 15 },
      { type: "work", name: "Vertical Wall Hamstring Stretch", time: 120 },
      { type: "rest", time: 15 },
      { type: "work", name: "Hamstring Strech Kicks (25)" },
      {
        type: "superset",
        repeat: 10,
        activities: [
          { type: "work", name: "Seated Good Morning (10)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Reverse Nordic Curl (10)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Supinated Barbell Row (6-8)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Anti-rotation with Lunge Isometric (Left)",
            time: 45,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Anti-rotation with Lunge Isometric (Right)",
            time: 45,
          },
          { type: "rest", time: 45 },
        ],
      },
    ],

    "Day 4": [
      { type: "work", name: "Foam Roll Back" },
      { type: "work", name: "Thoracic Extension and Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug with Band" },
      { type: "work", name: "Band Shoulder Stretch (Facing Away)" },
      { type: "work", name: "Band Pull with Full Rotation" },
      { type: "work", name: "Band Pull with Shoulder Depressions" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Wall Pushes with Elevations" },
          { type: "rest", time: 30 },
          { type: "work", name: "Train Tracks" },
          { type: "rest", time: 30 },
        ],
      },
      {
        type: "superset",
        repeat: 10,
        activities: [
          {
            type: "work",
            name: "Z Press with Neutral Grip on Yoga Block (10)",
          },
          { type: "rest", time: 60 },
          { type: "work", name: "DB Side Laterals (10)" },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Barbell Floor Press (6-8)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Banded Facepull with External Rotation(10-12)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
  "8×8": {
    "Day 1": [
      { type: "work", name: "Upper Body Rotation" },
      { type: "work", name: "Wall Hamstring Stretch", time: 90 },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Stationary Lunge Stretch w/ Arms Elevated" },
      {
        type: "superset",
        repeat: 8,
        activities: [
          { type: "work", name: "Flat Bench Press (8; Slow Eccentric)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "External Rotation and press w/ light band (8; Control)",
            link: "https://youtu.be/NIK0aJDO7Pk",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Single Arm Cable Extension - OH (10-12;  Medium)",
            link: "https://youtu.be/3s-kqp7Qd3U",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Bent Over DB Fly (10-12; Medium)",
            link: "https://youtu.be/lPt0GqwaqEw",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2": [
      { type: "work", name: "Upper & Lower Body Rotation" },
      { type: "work", name: "Wall Hamstring Stretch", time: 90 },
      { type: "rest", time: 15 },
      { type: "work", name: "Lying Wall Hamstring Stretch", time: 90 },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "BW Calf Raises (25)" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "BW Split Squat (5)" },
          { type: "work", name: "Single Leg RDL (5)" },
        ],
      },
      {
        type: "superset",
        repeat: 8,
        activities: [
          {
            type: "work",
            name: "Barbell RDL (8; Slow Eccentric; Toes Slightly Elevated)",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Single Knee Raise - Hanging (16; Control)",
            link: "https://youtu.be/Cfq7ZAkI7dE",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Barbell Hip Bridges (10-12; Medium)",
            link: "https://youtu.be/5S8SApGU_Lk",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Reverse Lunge - Goblet (10-12; Medium)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 3": [
      { type: "work", name: "Upper Body Rotation" },
      { type: "work", name: "Wall Hamstring Stretch", time: 90 },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Stationary Lunge Stretch w/ Arms Elevated" },
      {
        type: "superset",
        repeat: 8,
        activities: [
          {
            type: "work",
            name: "Dual DB Row - 30° Incline Bench (8; Slow Eccentric)",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Serratus Press (8; Control Tempo)",
            link: "https://youtu.be/p-fjD-vByH0",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Incline DB Curl (10-12; Medium)",
            link: "https://youtu.be/sTY8uNkb7S8",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Cable Trap 3 Raise (10-12; Medium)",
            link: "https://youtu.be/cgJpRxqhwzE",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 4": [
      { type: "work", name: "Upper & Lower Body Rotation" },
      { type: "work", name: "Wall Hamstring Stretch", time: 90 },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "BW Calf Raises (25)" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "BW Split Squat (5)" },
          { type: "work", name: "Single Leg RDL (5)" },
        ],
      },
      {
        type: "superset",
        repeat: 8,
        activities: [
          { type: "work", name: "Back Squat (8; Slow Eccentric)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Half Kneeling Cable Rotation (8; Control)",
            link: "https://youtu.be/qnx_tHFkD0k",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Walking Lunge (10-12; Medium)" },
          { type: "rest", time: 45 },

          { type: "work", name: "Reverse Nordic Curl (A)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
  Westside: {
    "Day 1": [
      { type: "work", name: "Nerve Glides" },
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Bench Press Isometric",
            time: 6,
            link: "https://youtu.be/EEusR5Ts9tE",
          },
          { type: "rest", time: 30 },
          { type: "work", name: "Paused Bench Press (3-5; 3s on chest)" },
          { type: "rest", time: 115 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB Row (12-15)",
            link: "https://youtu.be/mfpWbvBX3FM",
          },
          { type: "rest", time: 75 },
          {
            type: "work",
            name: "Rolling DB Skull Crushers (12-15)",
            link: "https://youtu.be/Vbv1IIhePH4",
          },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Face Pull (12-15)",
            link: "https://youtu.be/owJjmr07C_4",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Reverse Grip Curl (3-0-1-3; 6-8)",
            link: "https://youtu.be/CIGPx1bx0Hs",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 8,
        activities: [
          {
            type: "work",
            name: "Banded Bench Press (3)",
            link: "https://youtu.be/nJEtbI6PpxE",
          },
          { type: "rest", time: 30, grace: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Bent Over DB Fly (8-10)",
            link: "https://youtu.be/lPt0GqwaqEw",
          },
          { type: "rest", time: 60 },
          { type: "work", name: "Barbell OHP (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Supinated Band Pull Aparts (12-15)",
            link: "https://youtu.be/mHWlgqPvyxI",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 3": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Nordic Isometric",
            time: 6,
            link: "https://youtu.be/wBybuUNDIPw",
          },
          { type: "rest", time: 30 },
          {
            type: "work",
            name: "Paused Good Morning (3-5; 1s pause)",
          },
          { type: "rest", time: 115 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Hamstring Walk Outs on roller (A)",
            link: "https://youtu.be/Gyl8qhPuyhk",
          },
          { type: "rest", time: 75 },
          {
            type: "work",
            name: "Garhammer Raise (A)",
            link: "https://youtu.be/bXOaw2yc6nk",
          },
          { type: "rest", time: 75 },
        ],
      },
    ],
    "Day 4": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 8,
        activities: [
          {
            type: "work",
            name: "Banded Barbell RDL (3)",
            link: "https://youtu.be/A0nlkHJqmew",
          },
          { type: "rest", time: 30, grace: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Seated Good Morning (8-10)",
            link: "https://youtu.be/ScBgwqMrv3Q",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Hamstring Slides (8-10)",
            link: "https://youtu.be/aZTm8eqFB0I",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Tibia Toe Raises (25+)",
            link: "https://youtu.be/OPEuhclsTUQ",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 5": [
      {
        type: "work",
        name: "Foam Roll Upper Back",
      },

      {
        type: "work",
        name: "Thoracic Extensions & Thoracic Rotations",
      },

      {
        type: "work",
        name: "Cat Cow",
      },

      {
        type: "work",
        name: "Down Dog",
      },

      {
        type: "work",
        name: "Side Plank",
      },

      {
        type: "work",
        name: "Dead Bug Variations",
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "rest", time: 5 },
          { type: "work", name: "Squat Isometric", time: 6 },
          { type: "rest", time: 30 },
          { type: "work", name: "Paused Back Squat (3-5; 3s at bottom)" },
          { type: "rest", time: 115 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Bulgarian Split Squat (12-15)",
            link: "https://youtu.be/I1Ee3M6SDgQ",
          },
          { type: "rest", time: 75 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Reverse Nordic Curl (8-10)",
            link: "https://youtu.be/Vbv1IIhePH4",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 6": [
      {
        type: "work",
        name: "Foam Roll Upper Back",
      },

      {
        type: "work",
        name: "Thoracic Extensions & Thoracic Rotations",
      },

      {
        type: "work",
        name: "Cat Cow",
      },

      {
        type: "work",
        name: "Down Dog",
      },

      {
        type: "work",
        name: "Side Plank",
      },

      {
        type: "work",
        name: "Dead Bug Variations",
      },
      {
        type: "superset",
        repeat: 8,
        activities: [
          {
            type: "work",
            name: "Back Squat (3)",
          },
          { type: "rest", time: 30, grace: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Poliquin Step Up (12-15)",
            link: "https://youtu.be/AbjXzX0CVhU",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Sigle Leg RDL (12-15)",
            link: "https://youtu.be/dEpUhcbEUGA",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Dead Bug Variation (10-20)",
            link: "https://youtu.be/wCwn7-Z-XjE",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },
  "Strength Endurance": {
    "Day 1": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Bench Press (2)" },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB Unsupported OHP (6-8)",
            link: "https://youtu.be/gUw4EsRTxvQ",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Single Arm Cable Row (12-15; Standing)",
            link: "https://youtu.be/-WwdXO0IC0o",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "DB Skull Crushers (6-8)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Powell Raise (12-15; Floor)",
            link: "https://youtu.be/uzFTTZEosgg",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Seated Hamstring Stretch", time: 60 },
      { type: "rest", time: 15 },
      { type: "work", name: "Vertical Wall Hamstring Stretch", time: 60 },
      { type: "rest", time: 15 },
      {
        type: "superset",
        repeat: 6,
        activities: [
          {
            type: "work",
            name: "Snatch-grip Deadlift (2; Concentric Pause at Low Shin)",
          },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Eccentric DB RDL (6-8; 4s Eccentric)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Single Arm Arc Row (12-15)",
            link: "https://youtu.be/0WeJDM5ZwwE",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Barbell Hip Bridge (6-8)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Tibia Raises (A)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 3": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Barbell OHP (2)" },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB Seated Cuban Press (6-8)",
            link: "https://youtu.be/TwF-75hvDgk",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "DB Row (8-10; Supinating)",
            link: "https://youtu.be/mfpWbvBX3FM",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Push Up (6-8)" },
          { type: "rest", time: 60 },

          {
            type: "work",
            name: "Woodchopper (12; high to low)",
            link: "https://youtu.be/AuDE1MTSEZM",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 4": [
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Back Squat (2)" },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Low Cable Split Squat (6-8)",
            link: "https://youtu.be/AEsgXtOZdp8",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Towel Hamstring Curl (15-20)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "stopwatch",
            name: "Copenhagen Plank (Left)",
            link: "https://youtu.be/HqER3kfFg7Y",
          },
          { type: "rest", time: 30 },
          {
            type: "stopwatch",
            name: "Copenhagen Plank (Right)",
            link: "https://youtu.be/HqER3kfFg7Y",
          },
          { type: "rest", time: 30 },
        ],
      },
    ],
  },
  "Jeff's Comeback Programme": {
    "1 Lower": [
      { type: "work", name: "Nerve glides" },
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Neck Push", time: 60 },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Armpit Stare", time: 60 },
          { type: "work", name: "Star Stare", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Warm-up Back Squat (5)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Back Squat (5)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Step Ups (6)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Nordic Leg Curl (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Standing Calf Raise (12-15)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Shoulder Shrug (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Shoulder Shrug (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Cable Crunch (12-15)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "1 Upper": [
      { type: "work", name: "Nerve glides" },
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Neck Push", time: 60 },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Armpit Stare", time: 60 },
          { type: "work", name: "Star Stare", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Warm-up Bench Press (5)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Bench Press (5)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Warm-up Lat Pulldown (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Lat Pulldown (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Dumbell Fly (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Dumbell Fly (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Bent-over Barbell Row (12-15)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Bent-over Barbell Row (12-15)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Plate Lateral Raise (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Plate Lateral Raise (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "EZ-Bar Bicep Curl (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Dumbell Skull Crusher (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "2 Lower": [
      { type: "work", name: "Nerve glides" },
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Neck Push", time: 60 },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Armpit Stare", time: 60 },
          { type: "work", name: "Star Stare", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Warm-up Deadlift (4)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Deadlift (4)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Towel Slide (12-15)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Seated Calf Raise (15-20)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Seated Calf Raise (15-20)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Hanging Leg Raise (6-10)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "2 Upper": [
      { type: "work", name: "Nerve glides" },
      { type: "work", name: "Foam Roll Upper Back" },
      { type: "work", name: "Thoracic Extensions & Thoracic Rotations" },
      { type: "work", name: "Cat Cow" },
      { type: "work", name: "Down Dog" },
      { type: "work", name: "Side Plank" },
      { type: "work", name: "Dead Bug Variations" },
      { type: "work", name: "Neck Push", time: 60 },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Armpit Stare", time: 60 },
          { type: "work", name: "Star Stare", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Pull Up (6-8)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Warm-up Overhead Press (4)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Overhead Press (4)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Chest-Supported Row (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Chest-Supported Row (10-12)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 1,
        activities: [
          { type: "work", name: "Warm-up Inclined Dumbell Press (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Inclined Dumbell Press (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Facepull (12-15)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          { type: "work", name: "Hammer Curl (8-10)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },
  Reset: {
    "Day 1 (Lower)": [
      { type: "work", name: "Low Front Foot Eleveated Split Squat (12)" },
      { type: "rest", time: 60 },
      { type: "work", name: "Low Front Foot Eleveated Split Squat (12)" },
      { type: "rest", time: 60 },
      { type: "work", name: "Low Front Foot Eleveated Split Squat (10)" },
      { type: "rest", time: 60 },
      { type: "work", name: "Low Front Foot Eleveated Split Squat (8)" },
      { type: "rest", time: 60 },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Zercher Squat (3-3-X-0; 3)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Zercher Squat (3-3-X-0; 3)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Zercher Squat (3-3-X-0; 2)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Split Stance Deadlift (12-15)",
            link: "https://youtu.be/kJX3GTJ8TOc",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Side Lunge - Dynamic Stretch",
            time: 60,
            link: "https://youtu.be/zejTuBTEkfY",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Single Leg Hip Bridge (1-5-2-0; 6-8)",
            link: "https://youtu.be/sLq-xEPIVpk",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],

    "Day 2 (Upper)": [
      {
        type: "work",
        name: "Single Arm DB Row (Elbow Out; 12)",
        link: "https://youtu.be/4rI_UaFPhMY",
      },
      { type: "rest", time: 60 },
      {
        type: "work",
        name: "Single Arm DB Row (Elbow Out; 10)",
        link: "https://youtu.be/4rI_UaFPhMY",
      },
      { type: "rest", time: 60 },
      {
        type: "work",
        name: "Single Arm DB Row (Elbow Out; 8)",
        link: "https://youtu.be/4rI_UaFPhMY",
      },
      { type: "rest", time: 60 },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Pike Push Up (5)",
            link: "https://youtu.be/sposDXWEB0A",
          },
          { type: "rest", time: 15 },
          {
            type: "work",
            name: "Pike Push Up (3)",
            link: "https://youtu.be/sposDXWEB0A",
          },
          { type: "rest", time: 15 },
          {
            type: "work",
            name: "Pike Push Up (2)",
            link: "https://youtu.be/sposDXWEB0A",
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Bench Press (5)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Shoulder Extension (Mobility)",
            time: 60,
            link: "https://youtu.be/pLawSmOJTBw",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB External Rotation (Elbow on Knee; 8-10)",
            link: "https://youtu.be/EAbDldSYUzU",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 3 (Lower)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Towel Hamstring Curl (5)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Towel Hamstring Curl (5)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Towel Hamstring Curl (5)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Towel Hamstring Curl (5)" },
          { type: "rest", time: 60 },
        ],
      },
      { type: "work", name: "Snatch Grip Paused BB RDL (12)" },
      { type: "rest", time: 60 },
      { type: "work", name: "Snatch Grip Paused BB RDL (12)" },
      { type: "rest", time: 60 },
      { type: "work", name: "Snatch Grip Paused BB RDL (10)" },
      { type: "rest", time: 60 },
      { type: "work", name: "Snatch Grip Paused BB RDL (8)" },
      { type: "rest", time: 60 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "DB Walking Lunge (30)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Rack-Assisted Sissy Squat",
            link: "https://youtu.be/Cu2THH1IQDA",
            time: 60,
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Isometric Hip Bridge (Left)",
            link: "https://youtu.be/m3E3CXcLSgw",
            time: 30,
          },
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Isometric Hip Bridge (Right)",
            link: "https://youtu.be/m3E3CXcLSgw",
            time: 30,
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 4 (Upper)": [
      { type: "rest", time: 15 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Table Top Bridge Drill",
            time: 5,
            link: "https://youtu.be/_gwA6gGYHAo",
          },
          { type: "rest", time: 15 },
          {
            type: "work",
            name: "Table Top Bridge Drill",
            time: 5,
            link: "https://youtu.be/_gwA6gGYHAo",
          },
          { type: "rest", time: 15 },
          {
            type: "work",
            name: "Table Top Bridge Drill",
            time: 5,
            link: "https://youtu.be/_gwA6gGYHAo",
          },
          { type: "rest", time: 15 },
          {
            type: "work",
            name: "Table Top Bridge Drill",
            time: 5,
            link: "https://youtu.be/_gwA6gGYHAo",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Push Up (5)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Push Up (5)" },
          { type: "rest", time: 15 },
          { type: "work", name: "Push Up (5)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Unsupported Bent-Over DB Row (15-20)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Banded OH Tricep Extension (20)",
            link: "https://youtu.be/esM_yu_YFHQ",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Powell Raise (2-0-X-6; 6-8)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
  "6×6": {
    "Day 1 (Squats)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Paused Low-bar Back Squat (6; 3-1-X-1)" },
          { type: "rest", time: 120 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Stationary Deficit Lunge (8-10; 3-1-1-0)",
            link: "https://youtu.be/8umEqL9TmJM",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Poliquin Step Up (15-20; 1-0-1-0)",
            link: "https://youtu.be/AbjXzX0CVhU",
          },

          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Side Plank Runners (Left)",
            time: 30,
            link: "https://youtu.be/nhmKDaSYYMU",
          },
          { type: "rest", time: 30 },
          {
            type: "work",
            name: "Side Plank Runners (Right)",
            time: 30,
            link: "https://youtu.be/nhmKDaSYYMU",
          },
          { type: "rest", time: 30 },
        ],
      },
    ],
    "Day 2 (OHP)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          {
            type: "work",
            name: "Overhead Press (6; 3-1-X-1; Pause at eye level on eccentric)",
          },
          { type: "rest", time: 120 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Dual DB Pullover (6-8; 4-1-X-0; Slight Decline)",
            link: "about:",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Side Plank Powell Raise (8-10; 3-1-1-0)",
            link: "https://youtu.be/UoQKGPDt-og",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Reverse Table Top",
            time: 45,
            link: "https://youtu.be/H0Od2TfJl6c",
          },
          { type: "rest", time: 30 },
        ],
      },
    ],

    "Day 3 (Deadlift)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Deadlift/RDL (6; 4-0-X-1)" },
          { type: "rest", time: 120 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Towel Hamstring Curl (Band feet; 2-0-2-0)",
            time: 45,
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Side Lunge (15-20; X-X-X-X)",
            link: "https://youtu.be/HLDhxSqMQyE",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Hip Exernal Rotation (Left)",
            time: 120,
            link: "https://youtu.be/3xu7gbC8qnQ",
          },
          { type: "rest", time: 15 },
          {
            type: "work",
            name: "Hip Exernal Rotation (Right)",
            time: 120,
            link: "https://youtu.be/3xu7gbC8qnQ",
          },
          { type: "rest", time: 30 },
        ],
      },
    ],

    "Day 4 (Chest)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Bench Press (6; 4-0-X-0)" },
          { type: "rest", time: 120 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Bent Over DB Row (8-10; 2-0-2-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "DB Fly (8-10; 3-1-1-0; Slight Decline)",
            link: "https://youtu.be/UoQKGPDt-og",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Shoulder External Rotation - Side Lying (6-8; 4-0-1-1)",
            link: "https://youtu.be/NcUKNykt9DU",
          },
          { type: "rest", time: 30 },
        ],
      },
    ],
  },
  "7-5-3": {
    "Day 1 (Squats)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Back Squat (Low Bar; 7/5/3; 2-0-X-1" },
          { type: "rest", time: 150 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Front Foot-Elevated Split Squats (8-10; 3-2-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Reverse Nordic (8-10; 2-0-2-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Glute Bridge (6-8; 2-0-X-2)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 2 (OHP)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Overhead Press (7/5/3; 2-0-X-1)" },
          { type: "rest", time: 150 },
          {
            type: "work",
            name: "Chin Up (Semi-supinated; Banded; 7/5/3; 2-0-X-1)",
          },
          { type: "rest", time: 150 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Reverse DB Fly (15-20; 2-0-2-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Alternating DB Hammer Curl (8-10; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 3 (Deadlift)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Deadlift (Small deficit; 7/5/3; 2-0-X-1)" },
          { type: "rest", time: 150 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Towel Curls (15-20; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Single Leg Hip Bridge (8-10; 3-0-X-4)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Side Lunge (Alternating; 8-10; 3-0-3-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 4 (Bench)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          {
            type: "work",
            name: "Eccentric Paused Bench Press (7/5/3; 2-1-X-0)",
          },
          { type: "rest", time: 150 },
        ],
      },
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Meadows Row (7/5/3; 2-0-X-1)" },
          { type: "rest", time: 150 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Inclined Power Raise (10-12; 4-1-X-0)",
            link: "https://youtu.be/pzk8QGzP43k",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Unrolling DB Fly (10-12; 3-1-X-0)",
            link: "https://youtu.be/zF8EFGLO6nE",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },
  Contrast: {
    "Day 1 (Squats)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Back Squat (Heavy; 2)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Back Squat (Light; 6)" },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Dead Bug (Banded; 20)",
            link: "https://youtu.be/wCwn7-Z-XjE",
          },
          { type: "rest", time: 40 },
          { type: "work", name: "Reverse Nordic (6-8)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 2 (OHP)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Overhead Press (Heavy; 2)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Overhead Press (Light; 6)" },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Lat Pulldown (8-10)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Powell Raise (Inclined; 8-10)",
            link: "https://youtu.be/pzk8QGzP43k",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 3 (Deadlift)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Banded Deadlift (3)" },
          { type: "rest", time: 120 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Glute Drive (6)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "DB Curl (10-12)" },
          { type: "rest", time: 45 },
          { type: "stopwatch", name: "Side Plank (Left)" },
          { type: "rest", time: 15 },
          { type: "stopwatch", name: "Side Plank (Right)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 4 (Bench)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          { type: "work", name: "Bench Press (Heavy; 2)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Bench Press (Light; 6)" },
          { type: "rest", time: 3 * 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "DB Skull Crusher (Small Decline; 10-12)" },
          { type: "rest", time: 45 },
          { type: "work", name: "DB External Rotation (Knee; 6-8)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
  "54321": {
    "Day 1 (Squat)": [
      ...[5, 4, 3, 2, 1].flatMap<RootExcercise>((i) => [
        { type: "work", name: `Back Squat (${i})` },
        { type: "rest", time: 3 * 60 },
      ]),
      {
        type: "superset",
        repeat: 5,
        activities: [{ type: "work", name: "Back Squat (3; 40%)", time: 60 }],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Single Leg Step-up (12-15)" },
          { type: "rest", time: 40 },
          {
            type: "work",
            name: "Seated Calf Raise (12-15; DBs on Knees; Stay in stretched position)",
          },
          { type: "rest", time: 40 },
        ],
      },
    ],
    "Day 2 (OHP)": [
      ...[5, 4, 3, 2, 1].flatMap<RootExcercise>((i) => [
        { type: "work", name: `Overhead Press (${i})` },
        { type: "rest", time: 3 * 60 },
      ]),
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Overhead Press (3; 40%)", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Facepull (12-15)" },
          { type: "rest", time: 40 },
          {
            type: "work",
            name: "Skull Crusher (12-15; DB 45degree; Touch delt)",
          },
          { type: "rest", time: 40 },
        ],
      },
    ],
    "Day 3 (Deadlift)": [
      ...[5, 4, 3, 2, 1].flatMap<RootExcercise>((i) => [
        { type: "work", name: `Deadlift (${i})` },
        { type: "rest", time: 3 * 60 },
      ]),
      {
        type: "superset",
        repeat: 5,
        activities: [{ type: "work", name: "Deadlift (3; 40%)", time: 60 }],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Dead Bug (20; Alternating limbs)" },
          { type: "rest", time: 40 },
          {
            type: "work",
            name: "Good Morning (12-15; Seated; DB)",
            link: "https://youtu.be/ScBgwqMrv3Q",
          },
          { type: "rest", time: 40 },
        ],
      },
    ],
    "Day 4 (Chest)": [
      ...[5, 4, 3, 2, 1].flatMap<RootExcercise>((i) => [
        { type: "work", name: `Chest Press (${i})` },
        { type: "rest", time: 3 * 60 },
      ]),
      {
        type: "superset",
        repeat: 5,
        activities: [{ type: "work", name: "Chest Press (3; 40%)", time: 60 }],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Lat Pulldown (12-15; Semi-supinated)" },
          { type: "rest", time: 40 },
          { type: "work", name: "Bicep Curl (12-15; DB 45degree)" },
          { type: "rest", time: 40 },
        ],
      },
    ],
  },
  "KILO for OHP & Deadlift": {
    "1 Accumulation 1 (OHP)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Single Arm Overhead Press (Neutral; 10; 4-0-X-0)",
          },
          { type: "rest", time: 90 },
          { type: "work", name: "Chin-up (Supinated; 10; 2-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Flat DB Press (Neutral; 12; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Seated Row (Pronated; 12; 3-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Single Arm French Press (15; 3-0-1-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Bicep Curl (Low Cable; 15; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "1 Accumulation 2 (Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Squat (High Bar; 10; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Front-Foot Elevated Split Squat (12; 3-0-1-0)",
          },
          { type: "rest", time: 75 },
          { type: "work", name: "Hamstring Curl (12; 3-0-1-0)" },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Side Step Up (15; 2-0-2-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Hip Extension (DB/BB; 15; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "1 Accumulation 3 (Dip)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Dip (10; 4-0-X-0)" },
          { type: "rest", time: 90 },
          { type: "work", name: "Pull Up (Pronated; 10; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Dumbbell Press (45° Incline; 12; 3-0-1-0)" },
          { type: "rest", time: 90 },
          { type: "work", name: "Pull Down (45° Away; 12; 3-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "External Rotation (Cable; Elbow at Side; 15; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "DB Lateral Raise (Prone 45° Incline; 15; 2-0-2-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "1 Accumulation 4 (Front Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front Squat (10; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Rack Pull (Snatch grip; 12; 3-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Seated Calf Raise (15; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Plank (Contralateral; 12-20; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "2 Intensification 1 (OHP)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Overhead Press (BB; 2-3; 4-0-2-0)",
          },
          { type: "rest", time: 90 },
          { type: "work", name: "Chin-up (Supinated; 6; 4-0-2-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Flat DB Press (Neutral; 8-10; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Single Arm DB Row (8-10; 3-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Decline DB Skull Crushers (12; 3-0-1-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Standing DB Curl (12; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Intensification 2 (Front Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front Squat (2-3; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Pin Squat (Mid-height; 6; 3-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Reverse Nordics (10-12; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Glute Drive (15; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "2 Intensification 3 (Bench)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Bench Press (2-3; 4-0-X-0)" },
          { type: "rest", time: 90 },
          { type: "work", name: "Chin-up (Neutral; 6; 2-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Seated DB OHP (Supported; 8-10; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Single Arm DB Row (8-10; 3-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "External Rotation (Elbow High; 12; 3-0-1-0)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Trap 3 Raise (Bent Over; Head Supported; 12; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Intensification 4 (Deadlift)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Deadlift (Extended Eccentric; Submax; 5; 6-0-X-0)",
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Front Foot Elevated Split Squat (12; 3-0-1-0)",
          },
          { type: "rest", time: 75 },
          { type: "work", name: "Knee Flexion Hamstring Curl (8-10; 3-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Side Step Up (15; 2-0-2-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Hip Extension (15; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Accumulation 1 (OHP)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Overhead Press (Mid Pinned; 12,8,8,8; 2-2-X-0)",
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Chin-up (Supinated; 8; 2-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Flat DB Press (Neutral; 12; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Seated Row (Pull to Chin; 12; 3-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Tricep Cable Pressdown (15; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Bicep Curl (High Cable; 15; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Accumulation 2 (Front Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front Squat (9; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Front-Foot Flat Split Squat (12; 3-0-1-0)",
          },
          { type: "rest", time: 75 },
          { type: "work", name: "Hamstring Curl (12; 3-0-1-0)" },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Step Down (Heel Elevated; 15; 2-0-2-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Glute Drive (15; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Accumulation 3 (Bench)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Inclined Bench (9; 4-0-X-0)" },
          { type: "rest", time: 90 },
          { type: "work", name: "Chin Up (8; 2-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Decline Dumbbell Press (12; 3-0-1-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Half Kneeling Cable Row(High Cable; 12; 3-0-1-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "French Press(Bi-lateral; 15; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Bicep Curl (Inclined; Arm Behind; 15; 2-0-2-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Accumulation 4 (Front Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front Squat (9; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Rack Pull (11; 3-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Anteior Tib Raise Raise (15; 3-0-1-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Plank (Modified with Hip Lift; 12-20; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3 Accumulation 1 (OHP)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB Overhead Press (Neutral; Standing; 12; 4-0-X-0)",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Straight Arm Pushdown (Unilateral; 12; 4-0-X-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Flat DB Press (Semi-pronated; Fat Grip; 15; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Dual DB Row (Chest Supported; Supinating; 15; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "External Rotation (From Knee; 6-8; 3-1-3-1)",
            link: "https://www.youtube.com/watch?v=M9VV617qy_4",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Wide Stance Walk Out (8)",
            link: "https://www.youtube.com/watch?v=iVYH_xyLIL0",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "3 Accumulation 2 (Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "High Bar Squat (12; 4-0-X-0)" },
          { type: "rest", time: 120 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Front Squat",
            time: 20,
          },
          { type: "rest", time: 120 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Lunge (Deficit; 12/leg)",
            link: "https://www.youtube.com/watch?v=W0wZ-yk6WR4",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Reverse Table Top (12; 3-0-3-0)",
            link: "https://www.youtube.com/watch?v=n4Fn8SGQ-zY",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3 Accumulation 3 (Bench)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Bench Press (Narrow Grip; Pronated; 12; 4-0-X-0)",
          },
          { type: "rest", time: 60 },
          { type: "work", name: "Chin Up (Neutral; AMREP; 4-0-X-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Half-Kneeling Overhead Press (15; 3-0-1-0)" },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Cable Row (Single Arm; Low to High; Supinating; 15; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Side Kick Through (12; 1-0-1-0)",
            link: "https://www.youtube.com/watch?v=1jCudOtlLsc",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Tricep Extension (Cable; Overhead; Unilateral; 12; 3-0-1-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "3 Accumulation 4 (Deadlift)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Good Morning (12; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Bulgarian Split Squat (Dual DB; 5; 3-3-X-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Seated Good Morning (DB; 12; 3-0-1-0)",
            link: "https://www.youtube.com/shorts/cbZeFHwuq-c",
          },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Step Down (TKE Modification; 20; 3-0-1-0)",
            link: "https://www.youtube.com/watch?v=kJVuposhBdg",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Hip Extension (Single Leg; From Bench; 15; 3-0-1-0)",
            link: "https://www.youtube.com/watch?v=K7tLjNNWnZM",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3 Intensification (Inclined Press)": [
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Inclined Press (8; 4-0-X-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Chin Up (Eccentric; 8; 3-0-0-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "DB Press (Decline; Fat Grip; 12; 3-0-1-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Pendelay Row (12; 2-1-X-1)" },
          { type: "rest", time: 45 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "External Rotation (From knee; 6-8; 3-1-3-1)",
            link: "https://youtu.be/M9VV617qy_4",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Pancake Stretch (Cable Assisted; 8; 4-4-4-4)",
            link: "https://youtu.be/tzKMFeZ_K9g",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "3 Intensification (Back Squat)": [
      {
        type: "superset",
        repeat: 5,
        activities: [
          {
            type: "work",
            name: "Squat (Low Bar; 8; 4-0-X-0)",
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Split Squat (Rear Leg Focus; No knee over toe; 8; 3-0-3-0)",
          },
          { type: "rest", time: 75 },
          { type: "work", name: "Hamstring Curl (12; 3-0-1-0)" },
          { type: "rest", time: 75 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Squat to Hamstring Stretch (15; 2-0-2-0)",
            link: "https://youtu.be/1oQSsXhbhjk",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Hip Extension (Banded)",
            link: "https://youtube.com/shorts/IRscvDyN-8A",
            time: 30,
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "3 Intensification (Dip)": [
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Dip (8; 4-0-X-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Pulldown (Dual Arm; 8; 4-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Close Grip Bench Press (Spoto; Fat Grip; 8; 3-3-1-0)",
          },
          { type: "rest", time: 60 },
          { type: "work", name: "DB Row (Standing; Dual Arm; 12; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Scapular Push Up (10; 3-1-3-1)",
            link: "https://youtu.be/5YHZnEsE9hA",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Bird Dog Isometric (Left)",
            link: "https://youtu.be/pL6eIDHttXA",
            time: 20,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Bird Dog Isometric (Right)",
            link: "https://youtu.be/pL6eIDHttXA",
            time: 20,
          },
          { type: "rest", time: 10 },
        ],
      },
    ],
    "3 Intensification (Front Squat)": [
      { type: "rest", time: 20 },
      {
        type: "superset",
        repeat: 5,
        activities: [
          { type: "work", name: "Front Squat (Eccentric)", time: 10 },
          { type: "work", name: "Front Squat (Hold)", time: 10 },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Deadlift (8; 4-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Anterior Tib Raise (15; 3-0-1-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Hip Mobility Drill (10/side)",
            link: "https://youtu.be/qARWIQKokuA",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },
  "GPP 3": {
    "Day 1 (Upper)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Cuban Press (Banded; 15)",
            link: "https://youtu.be/lgAgNLQRigI",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "DB Inclined Press (45°; 12; 3-0-1-0)" },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Side Plank (Left)",
            link: "https://youtube.com/shorts/NnO-oVvOk3Q?feature=share",
            time: 15,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Side Plank (Right)",
            link: "https://youtube.com/shorts/NnO-oVvOk3Q?feature=share",
            time: 15,
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "DB Pullover (Banded; 12; 3-0-3-0)",
            link: "https://youtu.be/pR47sxwYFi4",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Paloff Press (Rotational; 15)",
            link: "https://youtube.com/shorts/B0NIj69AbEk?feature=share",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Side Plank (4-6; Kick-through)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 2 (Lower)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Seated Good Morning (DB; 15; 3-0-3-0)" },
          { type: "rest", time: 10 },
          { type: "work", name: "Back Squat (Banded; Box; 6; X-1-X-1)" },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Copenhagen Plank (Left; Short Lever)",
            time: 30,
            link: "https://youtube.com/shorts/Rwap0_j5i5A?feature=share",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Copenhagen Plank (Right; Short Lever)",
            time: 30,
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "RDL (BB; 8; 3-0-1-0" },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Hindu Squats (20; 2-0-2-0)",
            link: "https://youtube.com/shorts/13fTUq0qxa8?feature=share",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Shoulder Taps (20)",
            link: "https://youtu.be/8rgurWd-PB8",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "Day 3 (Upper)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Bench Press (Football Bar; Banded; 6; X-1-X-1)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Chin Up (Neutral; Eccentric; 5; 5-0-0-0)" },
          { type: "rest", time: 30 },
          {
            type: "work",
            name: "Paloff Hold (Left; Split Stance)",
            time: 30,
            link: "https://youtube.com/shorts/JVPX2fWpNyw?feature=share",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Paloff Hold (Right; Split Stance)", time: 30 },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Cable Row (Unilateral; 12; 3-0-1-0)",
            link: "https://youtu.be/WH7J9jkEqRQ",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Dumbell Bench (Neutral; 12; 3-0-1-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Prone Scorpion Movement Flow (12)",
            link: "https://youtu.be/Ta1wtgZCsVE",
          },
          { type: "rest", time: 30 },
        ],
      },
    ],
    "Day 4 (Lower)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Seated Good Morning (Banded; 15; 3-0-3-0)",
            link: "https://youtube.com/shorts/yICaZ7llVbU?feature=share",
          },
          { type: "rest", time: 30 },
          {
            type: "work",
            name: "Front Foot Elevated Split Squat (Front Heel Elevated; Hamstring to calf; 6; 3-0-1-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front Squat (#1; Lower)", time: 6 },
          { type: "burst", name: "Front Squat (#1; Rise)", time: 6 },
          { type: "work", name: "Front Squat (#2; Lower)", time: 6 },
          { type: "burst", name: "Front Squat (#2; Rise)", time: 6 },
          { type: "work", name: "Front Squat (#3; Lower)", time: 6 },
          { type: "burst", name: "Front Squat (#3; Rise)", time: 6 },
          { type: "work", name: "Front Squat (#4; Lower)", time: 6 },
          { type: "burst", name: "Front Squat (#4; Rise)", time: 6 },
          { type: "work", name: "Front Squat (#5; Lower)", time: 6 },
          { type: "burst", name: "Front Squat (#5; Rise)", time: 6 },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "RDL (Split Stance; 8; 3-0-1-0)",
            link: "https://youtube.com/shorts/eeGUOf8zPX4?feature=share",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Plank (Contralateral; 20; 2-0-2-0)",
            link: "https://youtu.be/-slYZChMfKE",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },
  Hyper: {
    "3 Day 1 (Upper)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          {
            type: "work",
            name: "Landmine Shoulder Press (Single Arm; Split Stance; Protract at top; 6-8/side; 3-0-3-0)",
            link: "https://youtube.com/shorts/p824YTOQoFI",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Good Morning (Stated; DB at chest; Deep breathing; 6-8; 3-0-3-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Lateral Raise (Cable; Low to high; 12-15/side; 2-0-2-0)",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Jefferson Curl (Skill Movement)", time: 45 },
          { type: "work", name: "Jefferson Curl (Weighted; 6)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          {
            type: "work",
            name: "Shoulder Taps (Remain in protraction for whole set)",
            time: 20,
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Skull Crusher (AMRAP; 3-0-3-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3 Day 2 (Lower)": [
      {
        type: "superset",
        repeat: 6,
        activities: [
          {
            type: "work",
            name: "Landmine Goblet Squat (6-8; 3-0-3-0)",
            link: "https://youtu.be/_mfORB47xMs",
          },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Reverse Lunge (Rotation; 12-15/side; 2-0-2-0)",
            link: "https://youtube.com/shorts/gapSUH6eEok?feature=share",
          },
          { type: "rest", time: 20 },
          { type: "work", name: "Paloff Isometric (Left)", time: 30 },
          { type: "rest", time: 5 },
          { type: "work", name: "Paloff Isometric (Right)", time: 30 },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Hip Bridge (Heel Elevated; Hip Extension Focus; Slow)",
            time: 60,
            link: "https://youtu.be/BN3znRssCL4",
          },
          { type: "rest", time: 20 },
          {
            type: "work",
            name: "Reverse Nordic Curl (AMRAP; 5-0-5-0)",
            link: "https://youtube.com/shorts/Dd3SX08tZV4",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 2,
        activities: [
          {
            type: "work",
            name: "Cuban Press (Defranco; 6; 3-1-1-1)",
            link: "https://youtu.be/EMwA266_Nx4",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3 Day 3 (Upper)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "RDL (Split Stance; DB; 8-10/side; 4-0-1-0)" },
          { type: "rest", time: 10 },
          { type: "work", name: "Chin Up (Eccentric Only; 1; 30-0-0-0" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "OHP (Single Arm; Half Kneeling; Band Resisted; 8-10/side; 4-0-1-0)",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Jefferson Curl (Skill Movement)", time: 45 },
          { type: "work", name: "Jefferson Curl (Weighted; 6)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Paloff Rotation (Dynamic Feet; Left)",
            time: 20,
          },
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Paloff Rotation (Dynamic Feet; Right)",
            time: 20,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Rotational Medicine Ball Slam (Soft Ball; Left)",
            time: 20,
          },
          { type: "rest", time: 5 },
          {
            type: "work",
            name: "Rotational Medicine Ball Slam (Soft Ball; Right)",
            time: 20,
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "3 Day 4 (Lower)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Inclined Press (45°; DB; Semi-Pronated; 4-0-1-0)",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Cable Row (Inclined Bench Supported; Single Arm; 8-10/side; 4-0-1-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Lunge with Rotation (Weight Plate; 20)",
            link: "https://youtube.com/shorts/Ssa889qWpY0",
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Cable External Rotation (10-15; 3-0-1-0)",
            link: "https://youtu.be/b7VWVZHU_8M",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "California Press (DB; 8-10; 4-0-1-0",
            link: "https://youtu.be/lUW5Vrp9o04",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Contralateral Plank (From Elbows)", time: 20 },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "4 Day 1 (Upper)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB Press (Decline; Neutral Grip; 10-12; 3-1-X-0)",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Cable Row (Single Arm; Low to High; 10-12; 3-1-X-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "DB Press (15° Incline; Alternating; 12-15; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Powell Raise (Standing; Cable; Single Arm; 12-15; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Paloff Press (Left)",
            time: 30,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Paloff Press (Right)",
            time: 30,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "University Coil Stretch (Left; Wall)",
            time: 5,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "University Coil Stretch (Right; Wall)",
            time: 5,
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "4 Day 2 (Lower)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "RDL (BB; Snatch Grip; 10-12; 3-1-X-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Anti-Rotation (Rope; Static Torso; 15/side; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Kettlebell Swing (Banded; 12-15; 2-0-2-0)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Cossack Squat (Side Lunge; Heel Elevated; 12-15; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Single Leg RDL (Roller on wall; 8-10; Slow tempo)",
          },
          { type: "rest", time: 10 },
          { type: "work", name: "Hip Airplane (Skill exercise; 5-8)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "4 Day 3 (Upper)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Chin Up (Eccentric Only; Neutral Close Grip; 1)",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Overhead Carry (Left; KB; Walking; Single Arm; Elevated)",
            time: 60,
          },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Overhead Carry (Right; KB; Walking; Single Arm; Elevated)",
            time: 60,
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Suitcase Row (Landmine; 12-15; 2-0-2-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Standing Telle Raise (DB; 12-15; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Paloff Press (10/side; 2-0-2-0)" },
          { type: "rest", time: 10 },
          {
            type: "work",
            name: "Landmine University Coil (Isometric BW; 3-5s/side)",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "4 Day 4 (Lower)": [
      { type: "rest", time: 20 },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Split Squat (Left; Isometric; Knee as close to floor as possible)",
            time: 60,
          },
          { type: "rest", time: 20 },
          {
            type: "work",
            name: "Split Squat (Right; Isometric; Knee as close to floor as possible)",
            time: 60,
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Bulgarian Split Squat (Bi Lateral; DB; 10-12; 3-1-X-0)",
          },
          { type: "rest", time: 60 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Sissy Squat (12-15; 2-0-2-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Beast Pose to Kick Through (5/side)" },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Dead Bug (Banded Upper; Lower Movement; 20; Slow tempo)",
          },
          { type: "rest", time: 60 },
        ],
      },
    ],
  },

  Rebuild: {
    "Day 1": [
      {
        type: "work",
        name: "Thoracic Spine Foam Roll Overhead Reach",
        link: "https://youtube.com/shorts/RIFF0SzPkps",
      },
      {
        type: "work",
        name: "Tactical Frog Stretch",
        link: "https://www.youtube.com/shorts/CnaSR5wGfT0",
      },
      ...[5, 3, 3].flatMap<RootExcercise>((i) => [
        { type: "work", name: `Bench Press (Flat; ${i})` },
        { type: "rest", time: 2 * 60 },
      ]),

      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Single Arm Row (Plank Modification; 10; 3-0-3-0)",
            link: "https://www.youtube.com/shorts/Egks86GwCSs",
          },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "California Press (Flat; BB; 12-15; 2-0-2-0)",
            link: "https://www.youtube.com/watch?v=f40WOYyv4Og",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Bicep Curl (BB; Wide Grip; Creating External Rotation; 12-15; 2-0-2-0)",
          },
          { type: "rest", time: 60 },
        ],
      },

      {
        type: "superset",
        repeat: 3,
        activities: [
          {
            type: "work",
            name: "Bird Dog (Emphasis on core; 10-20; 3-0-3-0)",
            link: "https://www.youtube.com/watch?v=QVRtIHp9h-M",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 2": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Good Morning (Seated; DB; 8; 4-0-1-0)" },
          { type: "rest", time: 30 },
          {
            type: "work",
            name: "Plank (Side; Star; 8; 2-0-2-0)",
            link: "https://www.youtube.com/shorts/JZi_sc1kpcg",
          },
          { type: "rest", time: 60 },
        ],
      },
      ...[5, 3, 3].flatMap<RootExcercise>((i) => [
        { type: "work", name: `RDL (BB; ${i})` },
        { type: "rest", time: 2 * 60 },
      ]),
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Leg Curl (Banded; Prone; 12-15; 2-0-2-0)",
            link: "https://www.youtube.com/watch?v=LtTcXXgeRYo",
          },
          { type: "rest", time: 60 },
          {
            type: "work",
            name: "Calf Raise (Single Leg; Modified; AMRAP; 2-0-2-0)",
            link: "https://www.youtube.com/shorts/00LA3bXdgR8",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 3": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Downward Dog to Toe Touch (5/side)",
            link: "https://www.youtube.com/watch?v=rMYnbfYhPNU",
          },
          { type: "rest", time: 30 },
          { type: "work", name: "KB Windmill (5/side)" },
          { type: "rest", time: 60 },
        ],
      },
      ...[5, 3, 3].flatMap<RootExcercise>((i) => [
        { type: "work", name: `OHP (BB; Seated; ${i})` },
        { type: "rest", time: 2 * 60 },
      ]),
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Upright Row (Modified; 12-15; 2-0-2-0)",
            link: "https://www.youtube.com/shorts/kDZPM8OsFmA",
          },
          { type: "rest", time: 45 },
          {
            type: "work",
            name: "Tricep Cable Extension (Single Arm; 12-15; 2-0-2-0)",
          },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "Day 4": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Banded Overhead RNT Squat (Pelvis Position; 5-10)",
            link: "https://www.youtube.com/watch?v=vKzS5LNTJ9w",
          },
          { type: "rest", time: 45 },
        ],
      },
      ...[5, 3, 3].flatMap<RootExcercise>((i) => [
        { type: "work", name: `Back Squat (BB; ${i})` },
        { type: "rest", time: 2 * 60 },
      ]),
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Split Squat (Goblet; Bulgarian in Band; 8)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          {
            type: "work",
            name: "Banded Leg Curl (Single Leg; Prone; 12-15; 2-0-2-0)",
          },
          { type: "rest", time: 45 },
          { type: "work", name: "Calf Raise/Tibia Raise (AMRAP)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
  },
};

const bindings: { [name: string]: () => void } = {};
let active: SimpleExercise[] = [];

document.body.addEventListener("keydown", (event) => {
  const callback = bindings[event.key];
  if (callback) {
    event.preventDefault();
    callback();
  }
});

function showProgrammes(programmes: ProgrammeMenu) {
  for (const prop of Object.getOwnPropertyNames(bindings)) {
    delete bindings[prop];
  }
  while (document.body.hasChildNodes()) {
    document.body.removeChild(document.body.lastChild!);
  }
  for (const [name, exercises] of Object.entries(programmes).sort((a, b) =>
    a[0].localeCompare(b[0])
  )) {
    const selector = document.createElement("button");
    selector.innerText = name;
    if (Array.isArray(exercises)) {
      selector.addEventListener("click", (click) => {
        const newExercises = exercises.flatMap((e) => {
          if (e.type == "superset") {
            const result: SimpleExercise[] = [];
            for (let i = 0; i < e.repeat; i++) {
              result.push(
                ...e.activities.map((a) => {
                  switch (a.type) {
                    case "rest":
                      return a;
                    case "work":
                      return {
                        type: "work" as const,
                        time: a.time,
                        link: a.link,
                        name: `${a.name} [${i + 1}/${e.repeat}]`,
                      };
                    case "burst":
                      return {
                        type: "burst" as const,
                        time: a.time,
                        link: a.link,
                        name: `${a.name} [${i + 1}/${e.repeat}]`,
                      };
                    case "stopwatch":
                      return {
                        type: "stopwatch" as const,
                        name: `${a.name} [${i + 1}/${e.repeat}]`,
                      };
                  }
                })
              );
            }

            return result;
          } else {
            return [e];
          }
        });
        if (active.length > 0 && newExercises.length > 0) {
          const last = active[active.length - 1];
          const first = newExercises[0];
          if (
            first.type == "work" &&
            first.time &&
            last.type == "work" &&
            last.time
          ) {
            active.push({ type: "rest", time: 60 });
          }
        }
        active = active.concat(newExercises);

        if (click.shiftKey) {
          showProgrammes(allProgrammes);
        } else {
          runProgramme(active, remaining(active));
          active = [];
        }
      });
    } else {
      selector.addEventListener("click", () => showProgrammes(exercises));
    }
    document.body.appendChild(selector);
    document.body.appendChild(document.createTextNode(" "));
  }
  if (active.length > 0) {
    const run = document.createElement("button");
    run.innerText = "Run ❯";
    run.addEventListener("click", () => {
      runProgramme(active, remaining(active));
      active = [];
    });
    document.body.appendChild(run);
    const clear = document.createElement("button");
    clear.innerText = "Clear ⌫";
    clear.addEventListener("click", () => {
      active = [];
      showProgrammes(programmes);
    });
    document.body.appendChild(clear);
  }
}
interface Remaining {
  index: number;
  name: string;
  link?: string;
}
function remaining(exercises: RootExcercise[]): Remaining[] {
  const results: Remaining[] = [];
  const seen = new Set<string>();
  let index = 0;
  for (const exercise of exercises) {
    switch (exercise.type) {
      case "work":
      case "burst":
      case "stopwatch":
        const n = exercise.name.split(/[([]/)[0].trim();
        if (!seen.has(n)) {
          seen.add(n);
          results.push({ index, name: n, link: exercise.link });
        }
      case "rest":
        index++;
        break;
      case "superset":
        for (const child of exercise.activities) {
          switch (child.type) {
            case "work":
            case "burst":
            case "stopwatch":
              const n = child.name.split("(")[0].trim();
              if (!seen.has(n)) {
                seen.add(n);
                results.push({ index, name: n, link: child.link });
              }
            case "rest":
              index++;
              break;
          }
        }
        index += exercise.activities.length * (exercise.repeat - 1);
    }
  }

  return results;
}

function runProgramme(exercises: SimpleExercise[], remaining: Remaining[]) {
  while (
    exercises.length > 0 &&
    exercises[exercises.length - 1].type == "rest"
  ) {
    exercises.length--;
  }
  function show(current: number) {
    for (const prop of Object.getOwnPropertyNames(bindings)) {
      delete bindings[prop];
    }
    while (document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild!);
    }
    (current >= exercises.length ||
    exercises[current].type == "burst" ||
    exercises[current].type == "rest"
      ? chord
      : beep
    ).play();
    let cancel: () => void = () => {};
    const doRepeat: () => void = () => {
      cancel();
      show(current);
    };
    const repeat = document.createElement("button");
    repeat.innerText = "⭯ Repeat Step";
    repeat.addEventListener("click", doRepeat);
    document.body.appendChild(repeat);
    bindings["F5"] = doRepeat;

    const doMenu: () => void = () => {
      cancel();
      showProgrammes(allProgrammes);
    };
    const menu = document.createElement("button");
    menu.innerText = "☰ Menu";
    menu.addEventListener("click", doMenu);
    document.body.appendChild(menu);
    bindings["Escape"] = doMenu;
    if (current > 0) {
      const doPrevious: () => void = () => {
        cancel();
        show(current - 1);
      };
      const previous = document.createElement("button");
      previous.innerText = "❮❮ Skip Back";
      previous.addEventListener("click", doPrevious);
      document.body.appendChild(previous);
      bindings["ArrowUp"] = doPrevious;
      bindings["i"] = doPrevious;
    }
    if (current < exercises.length) {
      const doNext: () => void = () => {
        cancel();
        show(current + 1);
      };
      const next = document.createElement("button");
      next.innerText = "Skip Ahead ❯❯";
      next.addEventListener("click", doNext);
      document.body.appendChild(next);
      bindings["o"] = doNext;
    }
    if (current >= exercises.length) {
      const text = document.createElement("h1");
      text.innerText = "DONE!!!";
      document.body.appendChild(text);
      const again = document.createElement("button");
      again.innerText = "Again";
      again.addEventListener("click", () => {
        cancel();
        show(0);
      });
      document.body.appendChild(again);
    } else {
      const text = document.createElement("h1");
      document.body.appendChild(text);
      const exercise = exercises[current];
      switch (exercise.type) {
        case "rest":
          text.innerText = "Rest";
          cancel = showTimer(exercise.time, "#1d3557", exercise.grace, () =>
            show(current + 1)
          );
          break;
        case "work":
          text.innerText = exercise.name;
          if (exercise.link) {
            const link = document.createElement("a");
            link.href = exercise.link;
            link.target = "_blank";
            link.innerHTML = "🔗";
            text.appendChild(link);
          }
          if (exercise.time) {
            cancel = showTimer(exercise.time, "#e63946", undefined, () =>
              show(current + 1)
            );
          } else {
            const doNext: () => void = () => show(current + 1);
            const next = document.createElement("button");
            next.innerText = "Continue ❯";
            next.addEventListener("click", doNext);
            document.body.appendChild(next);
            bindings["ArrowDown"] = doNext;
          }
          break;
        case "burst":
          text.innerText = exercise.name;
          if (exercise.link) {
            const link = document.createElement("a");
            link.href = exercise.link;
            link.target = "_blank";
            link.innerHTML = "🔗";
            text.appendChild(link);
          }
          cancel = showBurstTimer(exercise.time, undefined, () =>
            show(current + 1)
          );
          break;
        case "stopwatch":
          text.innerText = exercise.name;
          if (exercise.link) {
            const link = document.createElement("a");
            link.href = exercise.link;
            link.target = "_blank";
            link.innerHTML = "🔗";
            text.appendChild(link);
          }
          cancel = showStopwatch(() => show(current + 1));
      }
      const inner = document.createElement("div");
      inner.style.backgroundColor = "#a8dadc";
      const outer = document.createElement("div");
      outer.appendChild(inner);
      outer.className = "progress";
      document.body.appendChild(outer);
      inner.style.width = `${((current + 1) / exercises.length) * 100}%`;
    }
    for (const { name, link } of remaining.filter(
      ({ index }) => index > current
    )) {
      const upcoming = document.createElement("p");
      upcoming.innerText = name;
      if (link) {
        const linkNode = document.createElement("a");
        linkNode.href = link;
        linkNode.target = "_blank";
        linkNode.innerHTML = "🔗";
        upcoming.appendChild(linkNode);
      }

      document.body.appendChild(upcoming);
    }
  }
  show(0);
}

function showStopwatch(finished: () => void): () => void {
  const display = document.createElement("p");
  display.innerText = "0";
  let handle: number | null = null;
  let current = 0;
  let last = new Date();

  function tick() {
    const now = new Date();
    current += (now.getTime() - last.getTime()) / 1000;
    last = now;
    display.innerText = Math.floor(current).toString();
  }
  display.addEventListener("click", () => {
    if (handle) {
      window.clearInterval(handle);
    }
    finished();
  });
  document.body.appendChild(display);
  handle = window.setInterval(tick, 100);
  return () => {
    if (handle != null) {
      window.clearInterval(handle);
    }
  };
}

function showTimer(
  defaultTime: number,
  colour: string,
  upgradeTime: number | undefined,
  finished: () => void
): () => void {
  let timeout = defaultTime;
  const display = document.createElement("p");
  const pauseButton = document.createElement("button");
  pauseButton.innerText = "Play/Pause";
  const length = Math.ceil(Math.log10(timeout));
  display.innerText = `${"0".repeat(length)} / ${timeout}`;
  let handle: number | null = null;
  let current = 0;
  let last = new Date();
  const inner = document.createElement("div");
  inner.style.backgroundColor = colour;
  const outer = document.createElement("div");
  outer.appendChild(inner);
  outer.className = "progress";
  document.body.appendChild(outer);
  inner.style.width = "0%";

  function tick() {
    const now = new Date();
    current += (now.getTime() - last.getTime()) / 1000;
    last = now;
    if (current >= timeout) {
      if (handle != null) {
        window.clearInterval(handle);
      }
      finished();
    } else {
      display.innerText = `${"0".repeat(
        length - Math.max(1, Math.ceil(Math.log10(current)))
      )}${Math.floor(current)} / ${timeout}`;
      inner.style.width = `${Math.min(
        100,
        Math.max(0, (current * 100) / timeout)
      )}%`;
    }
  }
  const togglePause: () => void = () => {
    if (handle == null) {
      last = new Date();
      handle = window.setInterval(tick, 100);
    } else {
      current += (new Date().getTime() - last.getTime()) / 1000;
      window.clearInterval(handle);
      handle = null;
    }
  };
  pauseButton.addEventListener("click", togglePause);
  bindings["b"] = togglePause;
  document.body.appendChild(display);
  document.body.appendChild(pauseButton);
  if (upgradeTime) {
    const tired = document.createElement("button");
    tired.innerText = "Please, I'm tired";

    document.body.appendChild(tired);
    tired.addEventListener("click", () => {
      timeout = upgradeTime;
    });
  }
  handle = window.setInterval(tick, 100);
  return () => {
    if (handle != null) {
      window.clearInterval(handle);
    }
  };
}
function showBurstTimer(
  defaultTime: number,
  upgradeTime: number | undefined,
  finished: () => void
): () => void {
  function mixColor(scale: number) {
    return (
      "#" +
      [
        [230, 29],
        [57, 53],
        [70, 87],
      ]
        .map(([a, b]) =>
          Math.trunc(Math.sqrt(a * a * (1 - scale) + b * b * scale)).toString(
            16
          )
        )
        .join("")
    );
  }
  let timeout = defaultTime;
  const display = document.createElement("p");
  const pauseButton = document.createElement("button");
  pauseButton.innerText = "Play/Pause";
  const length = Math.ceil(Math.log10(timeout));
  display.innerText = `${"0".repeat(length)} / ${timeout}`;
  let handle: number | null = null;
  let current = 0;
  let last = new Date();
  const inner = document.createElement("div");
  inner.style.backgroundColor = mixColor(0);
  const outer = document.createElement("div");
  outer.appendChild(inner);
  outer.className = "progress";
  document.body.appendChild(outer);
  inner.style.width = "0%";

  function tick() {
    const now = new Date();
    current += (now.getTime() - last.getTime()) / 1000;
    last = now;
    if (current >= timeout) {
      if (handle != null) {
        window.clearInterval(handle);
      }
      finished();
    } else {
      display.innerText = `${"0".repeat(
        length - Math.max(1, Math.ceil(Math.log10(current)))
      )}${Math.floor(current)} / ${timeout}`;
      inner.style.backgroundColor = mixColor(current / timeout);
      inner.style.width = `${Math.min(
        100,
        Math.max(0, (current * 100) / timeout)
      )}%`;
    }
  }
  pauseButton.addEventListener("click", () => {
    if (handle == null) {
      last = new Date();
      handle = window.setInterval(tick, 100);
    } else {
      current += (new Date().getTime() - last.getTime()) / 1000;
      window.clearInterval(handle);
      handle = null;
    }
  });
  document.body.appendChild(display);
  document.body.appendChild(pauseButton);
  if (upgradeTime) {
    const tired = document.createElement("button");
    tired.innerText = "Please, I'm tired";

    document.body.appendChild(tired);
    tired.addEventListener("click", () => {
      timeout = upgradeTime;
    });
  }
  handle = window.setInterval(tick, 100);
  return () => {
    if (handle != null) {
      window.clearInterval(handle);
    }
  };
}

showProgrammes(allProgrammes);
