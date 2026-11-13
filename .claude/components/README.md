# Components

This folder stores the plan and the gaps for each component we build in Figma. Each component gets its own folder, named in lowercase with dashes, for example `components/button/`.

## What each folder holds

- `PLAN.md`: how the component maps to Figma, written before the build. It lists the properties, the variant count and the open questions.
- `GAPS.md`: written after the build. It lists everything that did not carry over from code to Figma cleanly:
  - What Figma could not express
  - What we were unsure about
  - What we decided, and why
  - What a person should check by hand

## Why we keep them

Code is the source of truth, and Figma is a copy. A copy is never perfect. These files show where the two differ, so nobody has to guess.

They also keep the agent honest. If the code does not say something, the agent writes it down here instead of making it up.

## How they are made

The planner agent writes `PLAN.md`. The builder agent writes `GAPS.md` after every build, using the template in `skills/figma-component-generator/templates/GAPS.md`.

The agent rewrites these files on every build. Put your own notes somewhere else, or they will be lost.
