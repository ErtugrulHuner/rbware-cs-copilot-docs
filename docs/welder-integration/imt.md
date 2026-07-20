# Welder Integration: IMT

_Source: `RB-X_IMT_Welder_ENG.md` (RB-X IMT Welder Manual, Ver 2.0.3, updated 2026-02-20). Korean version: `RB-X_IMT_Welder_KOR.md`. IMT is a **laser** welding integration using an IMT wire feeder._

## Setup notes
- Welding machine, PC, and robot must share the same network/address/router.
- Must use an **IMT wire feeder**.
- Run the personality / reverse-personality function 2–3 times to confirm a normal connection before relying on it.

## Setup steps
1. **Setup > System Set**: Welding Type = **LASER**, Welder Model = **IMT** → **Apply** (without pressing Apply, settings revert to the previous configuration).
2. **Welding Set**: configure Start and End pages.

### Start page fields
Wire alignment enable · wire feeding enable · wait time before the arc occurs · **laser weld intensity** · post-laser wire-send delay · wire feed rate during welding · post-arc/wire-feed wait before the robot moves · robot speed in the welding section.

### End page fields
Wait time before ending the arc after reaching the weld-end point · crater laser power · crater time · post-arc robot atmosphere-step duration.

### Welder page (signal assignment)
- Arc-on signal (D.out), gas signal (D.out).
- **Reverse** speed and time (**Back time**) — performed at the end of welding.
- Relay signal (D.out) and relay input signal (D.in) — needed for the wire alignment function.
- **Forward/invoke** speed and time (**Fwd time**) — performed after the reverse indication at the end of welding.
- Control box output range (A.out) for current value (normally **10V**); current value channel + range (proportional 0–10V output, same logic as Kemppi/Maven).
- Voltage value channel + range (same proportional logic).

## Teaching (simple straight weld)
Start point (before weld) → **Start welding** → End point (before weld end) → **Weld Termination**. A start/end pair is mandatory — a missing command causes an error.
