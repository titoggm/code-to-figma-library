/**
 * diff.ts
 *
 * Compares the values Figma holds against the values Storybook holds for one
 * component, and reports every difference. Code wins: Storybook is the
 * reference and Figma is the copy.
 *
 * Status: not set up. Claude writes this with the user the first time a build
 * is run. See the setup step in /figma-components. Write the test first.
 *
 * Inputs
 *   - Storybook JSON, produced by read-storybook.ts
 *   - Figma JSON, read from the open Figma file, using the same keys
 *   - A fields file listing each compared field, its type (color, px, text,
 *     and so on) and its tolerance
 *
 * Output
 *   - Every difference, one per line: field, Storybook value, Figma value
 *
 * Exit code
 *   - 0 when nothing differs
 *   - non-zero when anything differs
 *
 * Rules
 *   - Deterministic. No AI in the comparison.
 *   - Read only. Never change code or Figma from this script.
 *   - Which differences to fix is decided with the user, not here.
 */
