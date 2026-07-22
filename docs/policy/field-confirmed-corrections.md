# Field-Confirmed Corrections and Precedents

Corrections and precedents confirmed in the field by **Jude (RB-Ware CS)**. These **override or supplement** the manuals where they conflict, because Rainbow Robotics-origin documentation doesn't always match RB-Ware's actual shipped product.

## The three apps — don't conflate them
| App | Role |
|---|---|
| **RB-X** | RB-Ware's own, actively developed app (Android/Windows). **Default recommendation for all customers.** When a feature exists in both RB-X and RainbowApp, always lead with the RB-X path. |
| **RainbowApp** | Rainbow Robotics' base app. Use **only** for functions RB-X can't do: joint/관절 initialization for maintenance, admin page access, socket/TCP-IP communication (RB-X has **no** socket feature at all), and a few other RainbowApp-only functions. Say so explicitly when recommending it. |
| **J_Interface** | RB-Ware's original, now-**deprecated** Windows app (predecessor to RB-X). Not in the knowledge base, no longer developed/bug-fixed. If a customer reports a J_Interface crash/freeze: don't diagnose the bug — first suggest freeing Windows resources (close other programs, maximize RAM/CPU) to reduce frequency, then recommend upgrading to RB-X. For J_Interface-only functionality needs, escalate to info@rb-ware.com. |

**A-code exception:** activation error codes (A7, A17, A20–31, A58, A131, etc.) are confirmed identical between Rainbow Robotics docs and RB-X — cite directly without caveating.

## Windows version — instability policy (per Jude/RB-Ware, 06.07.2026)
RB-Ware considers the Windows app **unstable** and is not officially planning to fix newly discovered Windows-version issues.
1. First recommend restarting the app or restarting Windows (resolves most cases).
2. Where appropriate, recommend migrating to the Android version as soon as possible.

**Never call the Windows build "RB-X" alone** — RB-X is the shared software name across Android and Windows. When discussing the Windows-specific build/issues, always say "the Windows version" explicitly.

## Default IPs
- Standard: **192.168.0.100**
- Kolarc welder setups: **192.168.1.100**
- The **10.0.2.7** address in some Rainbow-origin docs (e.g. Set-up (Socket/Serial) in the cobot manual) is **not used in practice** — don't cite it. If troubleshooting doesn't resolve with either default, ask the customer what's actually configured.

## External axis (rail) setup — current method only
Do **not** advise the old `rail_point1..10.wsl` registration via "Ext. Axis Setting" (RBW User's Manual p.117–118) — it's legacy/unused.

**Current method:**
- **RB-Ware-provided rail with LS servo motors** → Extension menu → **Ext. Axis** in RB-X (official supported path).
- **Third-party/separate rail** → only possible via the control box's analog/digital I/O signals, if the rail supports it. For digital-output-controlled rails, use Extension menu → **D/A Output** in RB-X to toggle the needed signal at the required program step.

## Kolarc welder — screen lock & Job mode confusion
Two common complaints, with a validated answer template:
1. **Welder screen appears locked while the robot has control.** This is expected behavior (same design as other robot brands), not a bug. A workaround exists but deletes ~20 saved function parameters (arc hot start time, post gas, etc.) — **not recommended**.
2. **Job mode ≠ where the sticker process number goes.** Job mode is a "memory without adjust" mode using the program channel number the customer created on the machine — not the sticker's process number. Sticker process numbers go in **2T/S2T** mode on RB-X.
   - Rule of thumb: sticker process number → 2T/S2T; pre-created program channel → Job mode.

> No Kolarc-specific brand guide exists in the knowledge base (only Kemppi/Maven/WECO/IMT) — flag this gap to the agent when relevant.

## Collision/jam — branch by severity, don't default to Release Joint
- **Minor jam, robot still enabled/powered on** → recommend **direct-teach** (jog free by hand in teaching mode) — simpler and faster.
- **Robot powered off/disabled by the collision** → direct-teach won't work and re-activation is blocked while the collision condition holds, so **Release Joint** is the only option.
  - Path: **RB-X: Setup > Utility > Release Joint** (RainbowApp equivalent: Setup > Log/Utility > Utility > Release Joint — mention only if customer is on RainbowApp).
  - Confirm robot is disabled → select jammed joint → press Release → **manually support/brace the arm before releasing** (it can drop under its own weight, especially shoulder/elbow) → pull the arm free by hand → reboot the controller once clear.
  - Recommend doing this with RB-Ware/dealer technical support on the line.
  - If Release Joint itself fails to free the brake, **stop and escalate immediately** (known open issue).
- If **JAM-type errors recur with no actual collision**, consider **solenoid switch failure** as an alternate root cause (see below) — different fix path (part replacement, not Release Joint).

## Hardware failure diagnostics (field precedent, not in the manuals)

### Robot/arm faults
| Symptom | Cause | Fix path |
|---|---|---|
| Tool flange connector damaged | Physical/collision damage | Source replacement part, swap per manual. **Self-service.** |
| Joint stays locked/won't release, or locks suddenly (JAM-ERROR-type) | Solenoid switch failure | Swap the solenoid switch. **Self-service.** |
| Joint doesn't lock even with power off, audible "딸깍딸깍" clicking + slow sagging | Solenoid switch failure (opposite symptom) | Swap the solenoid switch. **Self-service.** |
| Joint sags/slips down **silently** (no sound) when power is off | Joint friction brake loosened | In Korea: recommend **입고** (factory return), not self-adjustment — brake bolts are Loctite-fixed with no standard torque spec; wrong force can snap the bolt. |
| Joint communication errors | Dust/contact failure in main cable connector or a joint's internal comm wires (yellow/green) | First try air-cleaning connector ends. If unresolved: RainbowApp connection screen → gear icon (top-right) → yellow/orange "W" warning triangle → shows per-joint comm status; a joint shown disconnected likely needs a new comm harness. Route to **출장AS** (on-site) or **입고** (factory return) — not self-service. |

### Control box faults
| Symptom | Diagnostic / fix |
|---|---|
| A50 L2C error | LAN-to-LAN cable (Control-PC ↔ comm-interface board) is hidden behind the front aluminum cover — remove that cover first. |
| Won't boot / stuck at "Please Wait" | Connect a monitor + keyboard. Boot only proceeds with manual input → mainboard battery drained (replace battery). Boot visibly progresses but slow → SSD aging (replace SSD). Neither → mainboard/RAM/CPU issue, isolate by swapping components one at a time. |
| Power/fuse errors | Follow on-screen message first, check both fuse types. If surge tripped all power: fully unplug (including wall/AC "돼지코" connector) and wait 30–40 min before repowering. Still unresolved → check/replace the SMPS. |
| Overheating | Clean vents/replace filter if contaminated, or replace the fan if failed. |
| I/O board failure (signals wired to I/O board don't function) | Replace the I/O board. |

## RB-Ring (4RING) teaching tool
No setup/pairing/calibration/safety documentation exists in the knowledge base — say so plainly if asked.

**Button mapping** (default, may change in future RB-X versions — verify against customer's version if there's a discrepancy):
- **Move L** — registers a Move L step
- **Move C** — registers a Move C step
- **Weld Start** — registers a Weld Start step
- **Weld End** — registers a Weld End step
- **Undo** — press-and-hold both Move L and Move C together (both released simultaneously) triggers Undo instead of registering either move.

**Known hardware fragility:** the RB-Ring connector/flange (near the tool flange) breaks easily in collisions, often alongside the tool flange connector — see Cases 6, 9, 25, 47, RBW-QP-0062/Case 62. Two hardware versions exist (older fixed-cable vs. newer detachable/quick-changer) — **confirm which one via photo before sending parts**. Recommend connector replacement (on-site AS, or self-swap only if customer has the detachable version) and check for debris inside the connector. Do **not** guide customers through self-repair of the wiring (a past self-repair attempt failed and had to be corrected by RB-Ware).

## Mini PC — role and when it's mandatory
Originally just server communication/data collection. It is now the **mandatory safety-critical path** for cutting the weld signal in an emergency...
- **Korean manual/Analog welders** (RB-X > MIG > Analog mode) have their own established emergency-stop system independent of the Mini PC — for basic operation, Mini PC is **optional** there.
- **Exception:** even in Analog mode, **Program Scheduler (Play mode)** and **Ext. Axis** both **require** a Mini PC regardless. Check whether the customer's Analog setup uses either before saying Mini PC is optional.

**Rough regional prior (always confirm from the ticket):** Korean customers mostly use Analog or Laser mode; overseas customers mostly use digital welders, making the Mini PC near-mandatory for them.

## Welder–system interface: fieldbus vs. I/O
Most RB-Ware customer systems use a **fieldbus interface**. When RB-Ware has a fieldbus interface available for a welder, the welder–system interface runs over that fieldbus — there are **no I/O (analog/digital) connections** for the welder–system interface in this configuration. Don't assume, look for, or troubleshoot I/O wiring for the welder interface in these setups; **confirm whether the interface is fieldbus or I/O** before advising on interface connections.

## Error/malfunction inquiries — diagnose environment first
Before jumping to a documented fix, gather (in this order, before the standard "get the essentials" step):
1. When the problem started
2. Whether it's reproducible (every time vs. intermittent)
3. Any recent changes (software update, new peripheral, cabling, welder settings)
4. The exact verbatim on-screen error message
5. Whether the operator already tried what the error message itself suggested, and what happened
