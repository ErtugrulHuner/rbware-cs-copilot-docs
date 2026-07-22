# Welder Integration: Maven

_Source: `RB-X_Maven_Welder_ENG.md` (RB-X Maven Welder Manual, Ver 2.0.3, updated 2026-02-20). Korean version: `RB-X_Maven_Welder_KOR.md`. Maven is a **laser** welding integration._

## Setup notes
- Welding machine, PC, and robot must share the same network/address/router.
- Must use a **Maven welding machine**; the feeder sits separately in the control box.
- Connect and assign a signal in the welding machine settings, then run the **gas check** function 2–3 times to verify operation before relying on it.

## Setup steps
1. **Setup > System Set**: Welding Type = **LASER**, Welder Model = **MAVEN** → **Apply** (unsaved if Apply isn't pressed).
2. **Welding Set**: configure Start and End pages.

### Start page fields
Wire alignment enable · wire feeding enable · initial gas ejection time (before arc) · **laser weld power** · post-laser wire-send delay · wire feed rate during welding · post-arc/wire-feed wait before robot moves · robot speed in the welding section.

### End page fields
Wait time before ending the arc after reaching the weld-end point · crater laser power · crater time · post-arc gas ejection time before the next (atmosphere) step.

### Welder page (signal assignment, all D.out unless noted)
Arc-on signal · gas signal · wire inheritance signal · wire inverse-indirect signal · relay signal (needed for wire alignment) · relay **input** signal (D.in, needed for wire alignment) · auto-send signal.

Also on the Welder page (A.out):
- Control box analog output range for laser power (normally **10V**).
- Laser power channel + range — 0–10V output proportional to the configured range (e.g. range 0–100, command value 50 → 5V output).
- Feeder speed channel + range (same proportional logic).

## Teaching (simple straight weld)
Start point (before weld) → **Start welding** → End point (before weld end) → **Weld Termination**. A start/end pair is mandatory — a missing command causes an error.

See also [RB X Software Guide](/software/rb-x-guide.md) for general Weaving/Shift/D-A Output extension features that apply on top of this setup, and [Multi Pass Feature](/feature-guides/multi-pass.md) for additional Maven-agnostic features.
