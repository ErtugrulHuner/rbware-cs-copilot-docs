# Multi-Pass Feature

_Source: `RB-X_Multi-Pass_Feature_Guide_ENG.md` (Ver 2.0.3, updated 2026-02-20). Korean version: `RB-X_Multi-Pass_Feature_Guide_KOR.md`. Repeats a weld path with offsets — for thick materials / multi-layer joints._

## Precautions
- Must be used together with a welding command, or acceleration/deceleration errors may occur.
- The **sign of the Z-axis input value** depends on the welding-path teaching direction — always verify with the finger coordinate-system check method (below) before entering a value.
- Multi-pass must be applied **after all teaching is complete** (including weaving). If the taught steps change afterward (point/welding-condition/weaving-condition changes), **delete and re-apply** the multi-pass step — it won't update automatically.

## Determining the Z-axis sign (finger check method)
1. Point the right hand's index finger (X+) along the welding direction.
2. With the index finger fixed on the welding direction, orient the hand so the middle finger points toward the **P.out** point.
3. With that hand shape, the thumb points down → thumb direction = **Z+**.
4. If the multi-pass path should go toward the direction opposite the thumb, enter the **Z value and Retract Distance as negative**.
5. If the welding direction is reversed, redo the check — the thumb may now point up, making the multi-pass direction Z+.
6. Apply the sign determined this way to both the **Z value** and the **Retract Distance** fields in the Multi Pass settings window.

For a fillet weld, the three required points are: Welding Start Point, Welding End Point, and **P.Out Point** (registered in Multi-Pass settings) — these three define the coordinate system that the finger check confirms.

## How to use
1. Teach the general welding program first (e.g. a 3-point straight weld with Weld Start / Weld End).
2. **Extension menu > Multi Pass**.
3. **Range (Line Number)** — select the range to apply multi-pass to. Must include the *entire* welding step, from the weld-start command through the weld-end command.
4. **P.out {Get}** — move the robot to the welding start point, press **Get** to open the Jog window, move the robot **more than 10mm** in the direction the multi-pass should be generated, then **Apply**.
5. **Pass 1 Y/Z values** — enter the offset along Y and Z from the taught reference weld line (apply the sign determined by the finger check). **Add Pass** adds further passes as needed.
6. **Retract Distance** — the Z-axis distance to retract on the return between passes, to avoid dragging through the built-up weld bead. Sign must match the finger-check result.
7. A **MultiPass step** is created right after the weld-termination command in the program. To re-apply, delete the existing MultiPass step first, then redo the process.
