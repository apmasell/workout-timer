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
const beep = new Audio(
  "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
);

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
  "Will Strength1 Day 1 (Bench)": [
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
  "Will Strength1 Day 2 (Front Squat)": [
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
  "Will Strength1 Day 3 (OHP)": [
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
  "Will Strength1 Day 4 (Posterior)": [
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
  "Will Strength1 Day 5 (Arms)": [
    {
      type: "superset",
      repeat: 5,
      activities: [
        { type: "work", name: "Concentration Curl (5; 3-1-X-1)" },
        { type: "rest", time: 45 },
        { type: "work", name: "Single Arm Cable OH Extension (8-10; 3-3-1-0)" },
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
};

for (const [name, exercises] of Object.entries(programmes).sort((a, b) =>
  a[0].localeCompare(b[0])
)) {
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
  document.body.appendChild(document.createTextNode(" "));
}

function runProgramme(exercises: SimpleExercise[]) {
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
          cancel = showTimer(exercise.time, "#1d3557", () => show(current + 1));
          break;
        case "work":
          text.innerText = exercise.name;
          if (exercise.time) {
            cancel = showTimer(exercise.time, "#e63946", () =>
              show(current + 1)
            );
          } else {
            const next = document.createElement("button");
            next.innerText = "Next";
            next.addEventListener("click", () => show(current + 1));
            document.body.appendChild(next);
          }
          break;
        case "stopwatch":
          text.innerText = exercise.name;
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
    if (current > 0) {
      const previous = document.createElement("button");
      previous.innerText = "❮";
      previous.addEventListener("click", () => {
        cancel();
        show(current - 1);
      });
      document.body.appendChild(previous);
    }
    const repeat = document.createElement("button");
    repeat.innerText = "⭯";
    repeat.addEventListener("click", () => {
      cancel();
      show(current);
    });
    document.body.appendChild(repeat);
    if (current < exercises.length) {
      const next = document.createElement("button");
      next.innerText = "❯";
      next.addEventListener("click", () => {
        cancel();
        show(current + 1);
      });
      document.body.appendChild(next);
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
  timeout: number,
  colour: string,
  finished: () => void
): () => void {
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
  return () => {
    if (handle != null) {
      window.clearInterval(handle);
    }
  };
}
