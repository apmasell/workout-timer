type RootExcercise = SimpleExercise | Superset;

type SimpleExercise = Exercise | Rest | Stopwatch;

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

interface Superset {
  type: "superset";
  activities: SimpleExercise[];
  repeat: number;
}
const beep = new Audio(
  "data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
);

type Programme = ProgrammeMenu | RootExcercise[];
type ProgrammeMenu = { [s: string]: Programme };

const programmes: ProgrammeMenu = {
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
      { type: "rest", time: 5 },
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
        name: "Couch Stretch (Left)",
        time: 30,
      },
      { type: "rest", time: 5 },
      {
        type: "work",
        name: "Couch Stretch (Right)",
        time: 30,
      },
      { type: "rest", time: 5 },
      { type: "work", name: "Deep squat", time: 60 },
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
  "Foot Strength": [
    {
      type: "work",
      name: "Alternate Toe Lifts (15)",
    },
    { type: "rest", time: 10 },
    { type: "work", time: 40, name: "Dynamic Stability (Dumbbell Pass; Left)" },
    { type: "rest", time: 10 },
    {
      type: "work",
      time: 40,
      name: "Dynamic Stability (Dumbbell Pass; Right)",
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
  "Jeff+Will Arm Hypertrophy": [
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
  "Jeff Arm Hypertrophy": [
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
            name: "Overhead Press (BB; Yielding Isometric Mechanical Disadvantage; 6; 4-0-2-0)",
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
          { type: "work", name: "Seated DB Curl (12; 3-0-1-0)" },
          { type: "rest", time: 45 },
        ],
      },
    ],
    "2 Intensification 2 (Front Squat)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Front Squat (8; 4-0-X-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Pin Squat (Mid-height; 8; 3-0-1-0)" },
          { type: "rest", time: 90 },
        ],
      },
      {
        type: "superset",
        repeat: 3,
        activities: [
          { type: "work", name: "Front Step-up (15; 3-0-1-0)" },
          { type: "rest", time: 60 },
          { type: "work", name: "Hip Extension (15; 2-0-2-0)" },
          { type: "rest", time: 60 },
        ],
      },
    ],
    "2 Intensification 3 (Bench)": [
      {
        type: "superset",
        repeat: 4,
        activities: [
          { type: "work", name: "Bench Press (8; 4-0-X-0)" },
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
          { type: "work", name: "External Rotation (DB on knee; 12; 3-0-1-0)" },
          { type: "rest", time: 45 },
          { type: "work", name: "Trap 3 Raise (45° Incline; 12; 3-0-1-0)" },
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
  },
};

function showProgrammes(programmes: ProgrammeMenu) {
  while (document.body.hasChildNodes()) {
    document.body.removeChild(document.body.lastChild!);
  }
  for (const [name, exercises] of Object.entries(programmes).sort((a, b) =>
    a[0].localeCompare(b[0])
  )) {
    const selector = document.createElement("button");
    selector.innerText = name;
    if (Array.isArray(exercises)) {
      selector.addEventListener("click", () =>
        runProgramme(
          exercises.flatMap((e) => {
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
          }),
          remaining(exercises)
        )
      );
    } else {
      selector.addEventListener("click", () => showProgrammes(exercises));
    }
    document.body.appendChild(selector);
    document.body.appendChild(document.createTextNode(" "));
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
      case "stopwatch":
        const n = exercise.name.split("(")[0].trim();
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
    while (document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild!);
    }
    beep.play();
    let cancel: () => void = () => {};
    const repeat = document.createElement("button");
    repeat.innerText = "⭯ Repeat Step";
    repeat.addEventListener("click", () => {
      cancel();
      show(current);
    });
    document.body.appendChild(repeat);
    const menu = document.createElement("button");
    menu.innerText = "☰ Menu";
    menu.addEventListener("click", () => {
      cancel();
      showProgrammes(programmes);
    });
    document.body.appendChild(menu);
    if (current > 0) {
      const previous = document.createElement("button");
      previous.innerText = "❮❮ Skip Back";
      previous.addEventListener("click", () => {
        cancel();
        show(current - 1);
      });
      document.body.appendChild(previous);
    }
    if (current < exercises.length) {
      const next = document.createElement("button");
      next.innerText = "Skip Ahead ❯❯";
      next.addEventListener("click", () => {
        cancel();
        show(current + 1);
      });
      document.body.appendChild(next);
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
            const next = document.createElement("button");
            next.innerText = "Continue ❯";
            next.addEventListener("click", () => show(current + 1));
            document.body.appendChild(next);
          }
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

showProgrammes(programmes);
