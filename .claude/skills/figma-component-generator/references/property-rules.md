<!--

SETUP FILE. Empty until the first run of /figma-components.

The command fills this in with the user, in the main chat. Planners and builders only read it. They never write it.

How it is filled in:

1. Claude reads how this codebase's components take props: variants, booleans, icons, text, children and states.
2. Claude proposes how each kind of prop becomes a Figma property. The choices are: Variant, Boolean, Instance swap, Text or Slot.
3. The user approves or changes the proposal.
4. Claude writes the agreed rules below this comment as a table with three columns: what it is in code, what it becomes in Figma, and notes.

To change a rule later, ask in the main chat. Claude updates this file.

A property or value that exists in Figma but not in code (for example, a state axis) needs the user's approval. Label it Figma-only and list it in GAPS.md.

-->
