# Welder Integration: Kemppi

_Source: `RB-X_KEMPPI_Welder_ENG.md` (RB-X Kemppi Welder Manual, Ver 2.0.3, updated 2026-02-20). Korean version: `RB-X_KEMPPI_Welder_KOR.md`._

## Network
Welder and robot must be on the **same network/address/router**. If the welding machine and robot disconnect intermittently, a full shutdown + reboot of the welding machine typically reconnects them.

## Setup steps
1. **Setup > System Set**: Welding Type = **MIG**, Welder Model = **Kemppi** → press **Apply** (changes only take effect on Apply).
2. **Setup > Welding Set**: configure Start and End pages.

### Start page fields
| Field | Meaning |
|---|---|
| (wait time) | Wait time for the arc to occur — typically recommended **3 seconds** |
| (pre-arrival wait) | Wait time before the robot arrives at the weld start point and generates the arc |
| (post-arc wait) | After the arc occurs, how long the robot waits before it starts moving |
| Method | See below — Mem w/ Adj. / Mem w/o Adj. / Manual |
| Memory channel | The memory channel to use |
| Feed Speed | Wire feed rate |
| Voltage | Welding voltage value |
| Robot Speed | Robot speed in the welding section |
| Dynamic | Controls arc response (higher = faster, lower = softer); in Mem w/Adj. this acts as Fine Tune |

**Three welding-command methods:**
1. **Mem w/ Adj.** — based on conditions stored in memory; Fine Tune, Feed Speed, Dynamic etc. remain adjustable.
2. **Mem w/o Adj.** — uses only what's stored in memory; only Robot Speed is adjustable in the UI.
3. **Manual** — user enters all values directly.

### End page
Mirrors the Start page, but the pre-wait sets the time **before the arc ends** (rather than before it starts).

## Teaching (simple straight weld)
Start point (before weld) → **Weld Start** → End point (after weld) → **Weld End**. A Weld Start/Weld End command must always be paired — a missing command causes an error.

## Extension feature: Weld Adjust
Real-time adjustment during welding (Kemppi-only in this version — planned for other welders later):
- **Memory Add** — welder memory channel to apply.
- **Feed Speed (m/min)** — wire feed speed.
- **Fine Tune** — calibrates weld voltage within **±10.0**.
- **Robot Speed (%)** — scales robot speed **-100 to 100%** (e.g. 5mm/s base at 100% → 10mm/s; at 50% → 7.5mm/s).

See also [RB X Software Guide](/software/rb-x-guide.md) (sections 4-5 and 5-7) for the same settings described in the general RB-MIG UI manual.
