---
name: figma-component-generator
description: Builds components in Figma from code and checks them against Storybook. USE WHEN mirroring a component to Figma, planning Figma properties, building a component set, or comparing a Figma component to Storybook.
---

# Figma Component Generator

Copies components into Figma. Code is the truth. Figma is a copy.

## Config

Fill these in once, before the first run. The command and agents read them from here.

| Setting         | Value                         |
| --------------- | ----------------------------- |
| Components path | `{{PATH_TO_YOUR_COMPONENTS}}` |
| Tokens path     | `{{PATH_TO_TOKENS}}`          |
| Typography path | `{{PATH_TO_TYPOGRAPHY}}`      |
| Storybook URL   | `http://localhost:6006`       |

## Rules

- Code wins. Never change code to match Figma.
- Names match code exactly. A Figma-only value is allowed only if it is labeled and listed in GAPS.md.
- Never invent. If the code doesn’t say it, write it in GAPS.md.
- Skip deprecated variants.
- Storybook is read-only. Never edit stories, config or code. Never install anything.
- Ask before building. Wait for approval of the properties and the variant count.
- Bind colors, sizes, spacing, radius and type to variables. Use a raw value only if no variable exists, and list it in GAPS.md.
- One Figma build at a time.
- Never delete and recreate a variant. Rename and repair.

## Steps

1. **Plan.** `component-planner` reads the code and proposes properties.
2. **Approve.** The user approves the properties, the variant count and the open questions.
3. **Measure.** Read the Storybook values with `scripts/read-storybook.ts`.
4. **Build.** `component-builder` makes the page, the set, the properties and the layout frame.
5. **Compare.** `scripts/diff.ts` checks Figma against Storybook. Fix drifts only after approval.
6. **Document.** Write `.claude/components/<name>/GAPS.md` from `templates/GAPS.md`.

## Files

- `references/tokens-setup.md`: how to mirror tokens and text styles into Figma, before any component.
- `references/property-rules.md`: how code props become Figma properties. Filled in on the first run.
- `references/layout-format.md`: how component sets are laid out on the canvas. Filled in on the first run.
- `references/figma-gotchas.md`: Figma mistakes to avoid. The builder adds to it.
- `scripts/read-storybook.ts`: measures components in Storybook. Set up on the first build.
- `scripts/diff.ts`: compares Storybook values to Figma values. Set up on the first build.
- `templates/GAPS.md`: the template for each component's GAPS.md.

## Example Run

`/figma-components Avatar Badge`

## Keeping this current

When the same correction comes up three times, update this skill.
