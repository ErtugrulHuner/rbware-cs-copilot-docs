# Touch Sensing

_Source: `RBW_Users_Manual_2024.md` (Chapter 7, "Touch Sensing", pages 118–126) and `manual_setup.md` (I/O1 DI functions 21/22)._

## What it is
Touch Sensing compensates for changes in part geometry or part location using a **nozzle touch** — the robot scans toward the workpiece and uses the touch signal to correct the taught weld position before running the actual weld sequence.

> **Platform note (field-confirmed):** Touch Sensing as described here is **not available on the Android RB-X build**. Rainbow developed a separate feature, **Point Finder**, for Android, which does nozzle-based touch sensing in the background. See [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) and the note on Point Finder below.

## Hardware requirement
Nozzle-based touch sensing requires a **touch-sensing torch** (wire runs through the torch so nozzle contact sends a signal) plus an extra cable from the worktable to the robot. The nozzle wire and table wire are joined through **two relays** forming a circuit: when the nozzle touches the part, the circuit closes and sends a signal to a control-box **Digital Input (DIN)**, which RB-X Touch Sensing reads.

**Important distinction:** a welding machine's own built-in touch-detection signal (e.g. reported over Modbus) serves **wire-based** touch sensing and **cannot** be used for this nozzle-based Touch Sensing — that requires the separate relay circuit described above. A request to feed a welder's Modbus touch-detection signal directly into nozzle-based Touch Sensing is **not possible**.

## Hard limit
**Maximum 3 Touch Sensing sequences per program.** This is a hard limit in RB-X. (Angel/Industritec has been exploring Sub-Program (Sub.P) chaining as an untested potential workaround — see internal case notes; not a documented/validated procedure.)

## Terminology
| Term | Meaning |
|---|---|
| Mode | 2 Point / 3 Point / 4 Point / 5 Point |
| Touch Sensing No | Up to 3 sequences per program; only one mode usable across all of them |
| Scan Dist Limit (mm) | Distance of the scan from the "Get *" point |
| Scan After Dist (mm) | Distance traveled in the opposite direction after a scan |
| Teaching Mode | Used to teach the weld sequence itself |
| Apply | Applies scan results to the program during teaching |
| Get * | Inputs the scan start point |
| Get OP *, * | Inputs an Out Point (determines scan direction — scans run Out Point → Scan points) |
| Scan * | Scans from the Get * point |
| Add * | Adds the Scan * point to the program |
| Move | Moves to the Get * point location (to verify) |
| Point * | A point on the workpiece where a touch is likely |
| Out Point *, * | A point outside Point *, toward which the torch moves after a touch |

## 2-Point workflow (summary)
1. Position TCP ~50mm from Point A → **Get A**.
2. Position TCP ~50mm from Point B → **Get B**.
3. Position TCP ~100mm from the midpoint of A/B → **Get OP A, B**.
4. **Scan A**, **Scan B** → **Apply**.
5. **Add A**, **Add B**.
6. Freedrive to a safe point between the Out Point and the weld-start approach position, teach a **Move L**.
7. **Teaching Mode** on → teach the weld sequence → **Teaching Mode** off.
8. Freedrive to a safe exit point, teach a **Move L**. Close the Touch Sensing window.

3-Point, 4-Point, and 5-Point workflows follow the same Get → Get OP → Scan → Apply → Add → teach-sequence pattern with additional points (A2/B2/C etc.) — see `RBW_Users_Manual_2024.md` pages 123–126 for the full step-by-step for each mode before walking a customer through it.

## Enabling via Digital Input
In **Setup > I/O1**, DI special functions **21 (Rising Edge)** and **22 (Falling Edge)** are both labeled "Touch Sensing" — this is the port that connects the touch-sensing signal output line from the welding machine circuit described above.

## Point Finder (Android)
Point Finder is Rainbow's Android equivalent — nozzle-based touch sensing running in the background to locate weld planes/surfaces, using the same physical relay-circuit concept. Confirm the customer's platform (Android vs. Windows) before deciding whether to reference Touch Sensing (Windows/RB-X desktop concept) or Point Finder (Android).
