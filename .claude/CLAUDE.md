# Project Brain

## Project Overview

A design system that starts in code and is mirrored into Figma through MCP. Code is the source of truth. Figma is a mirror, not a second truth. Where the two differ, Figma is wrong. Claude Code is the hub: one arm reads the repo and Storybook, the other reads and writes the open Figma file (via Figma Console MCP).

The goal is to get the library components into Figma.

## Key Components

- .claude/skills: The component generator skill. `SKILL.md` holds the rules and the Config block. `references/` holds setup files and guides. `scripts/` holds the scripts that read Storybook and compare it to Figma. `templates/` holds the GAPS.md template
- .claude/agents: A read-only planner and a builder that writes to Figma
- .claude/commands: Slash commands that run the agents
- .claude/components: A folder per component with its PLAN.md and GAPS.md
- Storybook: Local site (default localhost:6006) built from the real code in the user's repo. Each component has a stories file next to it
- GAPS.md: Everything that could not be expressed in Figma, was uncertain, or needs a manual check. One at the root, written by the tokens step, and one per component, written by the builder

## Constraints

- Use the repo’s package manager (e.g. bun). Check the lockfile and never mix managers
- Code wins. Never change code to match Figma without explicit approval
- Names match on both sides, spelled identically: components, props, values, tokens, variants. No danger vs error, no Card that is secretly a Panel
- Never touch production or a live library that other files depend on. The code repos are read-only
- Do not install Storybook or new dependencies in a real repo without asking. Propose it instead
- Build order is always: tokens first, then text styles, then two test components (one simple, one awkward, e.g. Button and Alert), then the full library
- Tokens and text styles are a required first step, run manually for now. See `.claude/skills/figma-component-generator/references/tokens-setup.md`. Component builds stop if the Figma file has no variables or text styles
- Tokens: use the same collection and naming as the code, split into primitives and semantic, alias semantic to primitives, scope variables so they are only offered where they belong, use modes where code has them (e.g. light and dark)
- Colors, spacing, radii, sizes and opacity become Figma variables. Typography becomes text styles bound to variables
- Set the code syntax on each Figma variable so it knows its CSS name
- Carry component descriptions from code into Figma, and link each Figma component back to its Storybook page
- Components need complete variants, properties named as in code, auto layout, and bound, scoped tokens
- Anything Figma-only (a property, value or variant) must be labeled and listed in GAPS.md
- Never invent what the source does not say (focus order, error and empty states, screen reader labels, failure behavior). If it is not in the code, record it in GAPS.md
- Always write GAPS.md after any generation run. Include what could not be expressed, what you were unsure about, what you decided and why, and what to check by hand
- Work step by step. Stop and report after each stage, and tell the user if you need anything
- Go one component at a time on existing systems. Do not assume the whole codebase is clean
- Planning can run in parallel. Building in Figma runs one component at a time, after approval
- Measure Storybook before building. Do not guess values
- Existing Figma libraries: compare, do not overwrite. Propose a change list, a generated reference component next to the old one, or a direct fix, and discuss it with the user first. Add a visual note on the canvas next to the component
- Never delete and recreate a variant. Variant keys do not survive, so instances will not reconnect. Rename and repair instead
- Parity checks are deterministic: compare two JSON lists, name against name, property against property, default against default. No AI in the comparison itself
- Parity currently covers structure only (names, props, allowed values, defaults), not visuals or CSS. Say so when reporting results
- Accessibility and other checks run in code, then report findings as notes in Figma next to the affected area, with suggested fixes
- Update the skill when the same correction is made three times

## Commands

Available now:

- `/figma-components` (Mirror components) -- plan and build the named components in Figma from code, then write GAPS.md. Stops if tokens are missing
- Mirror tokens -- manual for now. Run the prompt in `references/tokens-setup.md`, then check the result
