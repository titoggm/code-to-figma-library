/**
 * read-storybook.ts
 *
 * Measures a component as Storybook renders it, so Figma can be built and
 * checked against real values instead of guesses.
 *
 * Status: not set up. Claude writes this with the user the first time a build
 * is run. See the setup step in /figma-components. Write the test first.
 *
 * Inputs
 *   - A config file listing each combination to measure: the props and any
 *     forced states (hover, focus, and so on)
 *   - The repo's Storybook URL
 *   - The browser path, supplied by the user
 *   - The viewport width, set to match the Figma base mode
 *
 * What it does
 *   - Opens the running Storybook story in a headless browser
 *   - For each combination, reads the computed CSS values and the rendered
 *     size of the component
 *
 * Output
 *   - One JSON file, keyed by combination
 *   - The keys must match the keys in the Figma JSON, because diff.ts
 *     compares the two field by field
 *
 * Rules
 *   - Read only. Never change stories, config or code.
 *   - Ask the user before installing anything.
 */
