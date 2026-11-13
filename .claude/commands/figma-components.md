---
description: Plans and builds components in Figma. Plans run together. Builds run one at a time.
argument-hint: <component names> [--plan-only]
allowed-tools: Read, Write, Bash, Agent, mcp__figma-console__figma_execute, mcp__figma-console__figma_get_status, mcp__figma-console__figma_take_screenshot
model: sonnet
---

# Figma Components

Plans one or more components together, then builds them one at a time.

## Variables

`ARGS`: $ARGUMENTS, the full text after the command

`COMPONENTS`: the component names in `ARGS`, separated by spaces or commas. Ignore anything that starts with --.

`PLAN_ONLY`: true if --plan-only appears anywhere in `ARGS`

## Instructions

- Do NOT use AskUserQuestion. Ask in plain text.
- Read `.claude/skills/figma-component-generator/SKILL.md` first.

## Steps

1. **Check.**
   - Each name must exist under the components path in the Config block of `SKILL.md`.
   - Storybook must answer at the Storybook URL in the same Config block.
   - Figma must be connected, and the file must have at least one variable collection and one text style (check with `figma_execute`).

   If anything fails, say which check failed and stop. If Storybook is down, tell the user to start it. If tokens are missing, point to `.claude/skills/figma-component-generator/references/tokens-setup.md`.
2. **Setup.** Work with the user in this chat.

   **a. Reference files.** Read `references/property-rules.md` and `references/layout-format.md`. A file is empty if it has nothing below its opening comment. For each empty file, follow the steps in its comment and save the agreed result in the file. Do not plan until both are filled in.

   **b. Scripts.** Skip this with `--plan-only`. Read the two scripts in `scripts/`. A script is a stub if its header says "Status: not set up". Do not build until both scripts are set up. For each stub, in this order:
   1. `read-storybook.ts`: propose a headless browser (Playwright). Ask before installing anything. Ask which package manager, where to install it, which browser to use and which viewport width.
   2. Write the test first, using the repo's test runner. If there is none, ask which to use. Run it and confirm it fails.
   3. Write the script until the test passes.
   4. Run the script on one real component and check the output with the user.
   5. `diff.ts`: list the fields to compare and their tolerances with the user. Repeat steps 2 to 4. Test it with two small JSON files: one identical pair, which must exit 0, and one pair with known differences, which must exit non-zero and print each one.
   6. Replace the "Status: not set up" line in each script header with "Status: set up".
3. **Plan.** Send every component-planner in one message so they run together. Wait for all.
4. **Review, one component at a time.** Show one plan: properties, variant count, and questions with recommendations. Wait for approval.
5. **Build.** Send component-builder for that component and wait. With PLAN_ONLY, skip this step.
6. **Report.** Show matches, drifts and gaps. Ask which drifts to fix, apply them, and read back.
7. **Next.** Only then show the next plan. Never start a build before the previous one is reported.
8. **Finish.** Show one table: component, variants, matches, open items.
