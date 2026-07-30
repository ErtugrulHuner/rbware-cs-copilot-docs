# Main Screen (Jog Control & Program View)

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Section 3, Latest Ver 2.1.0, 2026/3/25). Part of the [RB-X Software Guide](/software/rb-x-guide.md)._

## 3-1 Jog Control Area
- **Smooth** mode: hold the jog button, robot moves continuously.
- **Pitch** mode: enter a distance, press jog to move exactly that amount; **Set** cycles 3 presets (press-and-hold to edit a preset).
- Coordinate systems: **Base** (moves relative to the robot's base) / **TCP** (relative to the tool tip — must be set up first) / **Joint** (moves each of the 6 joints individually).
- **Robot Controller orientation**: the robot is installed facing the *opposite* direction of its main connector. Based on the **Base** coordinate system: **Z** = up/down, **X** = left/right, **Y** = front/back. The **RX/RY/RZ** buttons rotate around the X/Y/Z axes respectively. Keep this in mind when a customer says the robot is "moving the wrong way" — it usually means their mental frame doesn't match the connector-relative Base frame.
- Bottom buttons: **Play**, **Stop/Pause**, **Move** (go to selected point), **Speed +/-**, **No_Arc** (movement only, no arc), **Custom Start** (start from a selected line).

## 3-2 Program View
- **File name field**: special characters are not allowed except spacing and underbar (`_`); the first character cannot be a number.
- **Open**: opens the file browser — files can be sorted **alphabetically or by date**, searched by name, and marked with a **star** to add them to Favorites.
- **Save**: saves under the currently entered file name. **New**: starts a blank file.
- **Side menu**: **Undo/Redo/Copy/Paste/Cut**, and the core teaching commands: **Move L** (straight line), **Move C** (curve, needs 2+ points), **Move J** (joint-space, most comfortable path), **Weld Start**, **Weld End**. See [Teaching Methods](/software/teaching-methods.md) for how Move L and Move C behave in detail.
- **Switch submenu** adds: **Delete**, **Multi** (multi-select), **Skip** (disable a line without deleting it — note: skipping a Move C line causes a play error), **Wait** (pause for time or a digital/analog condition, with Time Out fallback), **Memo** (free-text note on a line, for other operators/agents reading the program later).
