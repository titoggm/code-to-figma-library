# Tokens and Text Styles Setup

Run this once, before any component. It is a manual step: you run the prompt, then you check the result.

## Why first

Components bind to variables and text styles. If they do not exist, the build stops.

## 1. Find your token paths

Ask Claude: "Where do the design tokens and typography live in this repo?" Write them in the Config block of `SKILL.md`.

Common sources: JSON files, CSS custom properties, a Tailwind config, a theme file. JSON with a raw layer and a semantic layer maps most directly. Other formats need more checking by hand.

## 2. What becomes what

| In code                                | In Figma                                     |
| -------------------------------------- | -------------------------------------------- |
| Colors, spacing, radii, sizes, opacity | Variables                                    |
| Typography                             | Text styles, bound to variables              |
| Raw layer and semantic layer           | Primitives and semantic collections, aliased |
| Themes (for example light and dark)    | Modes                                        |

Also: use the exact names from code, scope each variable to where it belongs, and set the CSS name as the variable's code syntax.

## 3. Run the prompt

Use an empty or test Figma file, never a live library. Fill in the two paths in the Config block first.

> The Figma file is empty and the MCP is connected. Mirror the design tokens from the tokens path in the Config block of `SKILL.md` into Figma, step by step. Use the exact names from code. Create collections that match the code's structure, alias semantic tokens to primitives, scope the variables, and use modes wherever the code has themes. Then create text styles from the typography path in the Config block of `SKILL.md`, bound to variables. Set the code syntax on each variable. Write anything you cannot express to `GAPS.md` in the project root. Then stop and report.

## 4. Check the result

- Every token in code has a variable or text style with the same name.
- Semantic variables alias primitives. Modes hold the right values.
- Scopes are set. Code syntax is set.
- Compare against Storybook. A docs page that lists all tokens works well.
- Read the root `GAPS.md`.

Claude's output is not self-checking. You need to review it in Figma.
