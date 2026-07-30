# Repeat

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-10, Latest Update 2026/3/25). New in v2.1.0 — not present in earlier RB-X software versions._

Repeat runs the steps between a **Repeat Start** command and a **Repeat End** command over and over, based on the method you choose — useful for production runs, testing loops, or any sequence that needs to run multiple times without duplicating steps in the program.

![Example program list showing Repeat Start and Repeat End around a welding sequence](/feature-guides/repeat-step-list-example.png)

## Method types
| Method | Behavior |
|---|---|
| **Infinite Loop** | Repeats indefinitely, until manually stopped. |
| **Number** | Repeats a specific number of times (enter **Repeat Count**). |
| **Condition** | Repeats until a chosen condition becomes true (e.g. a digital input signal). |

![Repeat method selection menu — Infinite Loop, Number, Condition](/feature-guides/repeat-method-menu.png)

## How to use
1. **Extension menu > Repeat**.
2. Select the **Method** and fill in its settings (Repeat Count for Number, or the condition expression for Condition).
3. Press **Repeat Start** to insert the start marker at the current position in the program.
4. Teach or leave in place the steps that should repeat.
5. Press **Repeat End** to insert the end marker after those steps.

## Safety note
For safety, an **Infinite Loop that includes a welding command is only allowed in No_Arc mode**. This prevents a runaway welding loop from running unattended — remove No_Arc only once you're ready to weld, and prefer **Number** or **Condition** for any loop that will actually strike an arc.
