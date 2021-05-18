type RootExcercise = SimpleExercise | Superset;

type SimpleExercise = Exercise | Rest | Stopwatch;

interface Exercise {
  type: "work";
  time?: number;
  name: string;
}

interface Rest {
  type: "rest";
  time: number;
}

interface Stopwatch {
  type: "stopwatch";
  name: string;
}

interface Superset {
  type: "superset";
  activities: SimpleExercise[];
  repeat: number;
}

const programmes: { [s: string]: RootExcercise[] } = {
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

  "Will Wave-loaded 1": [
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
  "Will Wave-loaded 2": [
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
  "Will Wave-loaded 3": [
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
  "Will Wave-loaded 4": [
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
};

for (const [name, exercises] of Object.entries(programmes)) {
  const selector = document.createElement("button");
  selector.innerText = name;
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
      })
    )
  );
  document.body.appendChild(selector);
}

function runProgramme(exercises: SimpleExercise[]) {
  function show(current: number) {
    while (document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild!);
    }
    if (current >= exercises.length) {
      const text = document.createElement("h1");
      text.innerText = "DONE!!!";
      document.body.appendChild(text);
    } else {
      const text = document.createElement("h1");
      document.body.appendChild(text);
      const exercise = exercises[current];
      switch (exercise.type) {
        case "rest":
          text.innerText = "Rest";
          showTimer(exercise.time, "blue", () => show(current + 1));
          break;
        case "work":
          text.innerText = exercise.name;
          if (exercise.time) {
            showTimer(exercise.time, "red", () => show(current + 1));
          } else {
            const next = document.createElement("button");
            next.innerText = "Next";
            next.addEventListener("click", () => show(current + 1));
            document.body.appendChild(next);
          }
          break;
        case "stopwatch":
          text.innerText = exercise.name;
          showStopwatch(() => show(current + 1));
      }
    }
  }
  show(0);
}

function showStopwatch(finished: () => void) {
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
  display.addEventListener("click", () => finished());
  document.body.appendChild(display);
  handle = window.setInterval(tick, 100);
}

function showTimer(timeout: number, colour: string, finished: () => void) {
  const display = document.createElement("p");
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
  display.addEventListener("click", () => {
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
  handle = window.setInterval(tick, 100);
}
