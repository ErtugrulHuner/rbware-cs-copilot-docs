# Weaving

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-1, Latest Update 2026/3/25)._

Weaving makes the welding torch move side to side (or up and down) in a repeating pattern **while** the robot travels along the weld path — used for wider joints, gap-filling, or root passes where a single straight bead isn't enough.

![Weaving settings screen — shape selection, range, parameters, and set-points](/feature-guides/weaving-settings.png)

## Supported shapes
- Trapezoidal
- Sine Wave
- Triangle
- C-Wave
- Circle

## How to use
1. **Extension menu > Weaving**, then pick a **Weaving Shape**.
2. **Range (Line Number)** — set the start/end line the weaving should apply to. The app automatically inserts a **Weaving1 Start** command before the range and a **Weaving1 End** command after it.
3. Enter the **weaving parameters** (L1, L2, Vel1, Vel2, Bending, Scale, T1–T4, Offset, Swing) — refer to the 3D/side/wave-pattern diagram in the app for what each value controls.
4. **Set-Point1 / Set-Point2** — jog the robot to the point you want, then press **Get** to register the coordinate.
   - **Move**: press and hold to move the robot back to a registered point, to double-check it.
   - **Swap**: swaps Set-Point1 and Set-Point2.
5. Review the settings, then press **Apply** (top right) to finish.

## Caution
The weaving command **must sit inside a welding section** (between Weld Start and Weld End) to work correctly. Adding it outside a welding section will not produce the expected motion.
