# Program Call

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-2, Latest Update 2026/3/25)._

Program Call loads an **already-saved program** and runs it as a subprogram from the current step — useful when the same routine (e.g. a fixed approach move or a repeated weld pattern) is reused across multiple programs, instead of re-teaching it every time.

![Program Call step as it appears in the program list](/feature-guides/program-call-step.png)

## How to use
1. **Extension menu > Program Call**.
2. Select the saved program you want to insert as a subprogram.
3. The command is added to the program list (shown as `Program Call, <program name>`).

## Note
This command is currently **registration-only** — once added, its target program **cannot be edited** from within the calling program. If you need to change which program it calls, delete the Program Call step and add a new one.
