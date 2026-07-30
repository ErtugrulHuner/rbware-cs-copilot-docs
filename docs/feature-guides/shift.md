# Shift

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-3, Latest Update 2026/3/25)._

Shift moves (corrects) a **batch of already-taught points** by the same offset — useful when a fixture or part position has moved slightly and you don't want to re-teach every point one by one.

![Shift settings screen — range, shift distance, base/move point, and jog control](/feature-guides/shift-settings.png)

## How to use
1. **Extension menu > Shift**.
2. **Range (Line Number)** — set the Start and End line numbers that define which taught points the shift will apply to.
3. Enter the offset in one of two ways:
   - **Shift Dist.** — type the distance to move directly, in X, Y, and Z.
   - **Base Point / Move Point** — if it's easier to show than calculate: jog the robot to the *current* position and press **Get** next to Base Point, then jog to the *target* position and press **Get** next to Move Point. Press **Calc.** and the X/Y/Z shift distance is calculated and filled in automatically.
4. Press **Apply** (top right) once Shift Dist. is filled in.
5. Choose how the shift should be applied:
   - **Insert** — keeps the original points untouched and adds the shifted points as a **new** step.
   - **Modify** — overwrites the existing points with the shifted values.

## When to use which
Use **Insert** if you want to keep the original taught points as a backup/reference. Use **Modify** if you're confident the shift is correct and want to replace the points directly.
