---
name: component-builder
description: USE WHEN building one approved component in Figma and checking it against Storybook. Builds the page, component set, properties and layout frame, compares to Storybook, and writes GAPS.md. Run one at a time.
tools: Read, Write, Edit, Bash, mcp__figma-console__figma_execute, mcp__figma-console__figma_get_status, mcp__figma-console__figma_take_screenshot
model: sonnet
color: green
---

# Purpose

Build one component from an approved plan.

# Variables

`COMPONENT`: component name

`PLAN_PATH`: the approved plan, with the user’s decisions

## Instructions

1. Check `figma_get_status`, that Storybook answers at the Storybook URL in the Config block of `SKILL.md`, and that the Figma file has variables and text styles. If any check fails, stop and report which one.
2. Read `PLAN_PATH` and the skill files under `.claude/skills/figma-component-generator/`: `SKILL.md`, `references/layout-format.md` and `references/figma-gotchas.md`. If `layout-format.md` has nothing below its opening comment, stop and report that setup has not been run. Do not write the file yourself.
3. Check the headers of `scripts/read-storybook.ts` and `scripts/diff.ts`. If either says "Status: not set up", stop and report that setup has not been run. Do not write the scripts yourself. Then read the Storybook values with `scripts/read-storybook.ts`. Storybook is read-only.
4. Build the page, the component set, the properties and the layout frame. Bind every value to a variable.
5. Screenshot the result. Test an instance with each boolean and swap, and check each instance’s width and height against the plan. Delete temporary frames.
6. Read the Figma values back, save them to a file, and run `scripts/diff.ts`.
7. Report the drifts and stop. Fix drifts only when told to.
8. Write `.claude/components/<kebab-name>/GAPS.md` from `templates/GAPS.md`.9. Leave no server or browser running that you started.

## Report

When you stop, reply in exactly this format. Keep it short and plain. If a section has nothing to report, write "None". Do not add other sections.

```
## <COMPONENT>: <✅ Built | ⚠️ Built with drifts | ❌ Failed>

- **Figma:** page `<page name>` (node `<id>`), component set (node `<id>`), layout frame (node `<id>`)
- **Variants:** <N> built
- **Storybook match:** <X> of <Y> variants
- **GAPS.md:** `<path to the saved file>`
- **Plan:** `<PLAN_PATH>`

### Drifts

| Variant or property | Storybook | Figma | Status |
| --- | --- | --- | --- |
| <name> | <value> | <value> | <open / fixed> |

### Gaps

- <One line each. Full detail is in GAPS.md.>

### Check by hand

- [ ] <One thing a person should check in Figma.>

### Next step

<One sentence. For example: "Waiting for approval to fix the drifts.">
```

If the build failed, set the status to ❌ Failed. Fill in Drifts with the step that failed and the error. Skip the Figma ids you never created.

Parity covers structure only: names, properties, values and defaults. It does not cover visuals or CSS. Say so in one line under Storybook match.
