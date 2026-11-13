<!--

SETUP FILE. Empty until the first run of /figma-components.

The command fills this in with the user, in the main chat. Planners and builders only read it. They never write it.

How it is filled in:

1. Claude asks how variants should be laid out on the canvas. The user answers one of two ways:
   - Describe it: frame name, grid, cell size, labels, guides and colors.
   - Share a screenshot of a layout they like, from any design system. They save it in the project root and give Claude the file name.
2. For a screenshot, Claude writes down what it sees: frame name, grid, cell size, labels, guides and colors.
3. The user confirms the notes.
4. Claude writes the final layout below this comment.

Every component after that uses this layout, so all pages look the same. To change it, ask in the main chat. Claude updates this file.

-->
