# Robot Safety Functions

_Source: `manual_safety_function.md` (Rainbow Robotics RB Cobot Docs)_

## Applied standards
IEC 61508 (parts 1–7), IEC 60204-1:2016, IEC 61000-6-1/6-2/6-7, IEC 61326-3-1:2017, IEC 61800-5-1/5-2, IEC 62061:2005, ISO/TS 15066:2016, ISO 10218-1/-2:2011, ISO 12100:2010, ISO 13849-1/-2.

## Emergency Stop Switch
- Designated **stop category 1**.
- Cancel by turning the switch clockwise.
- Additional E-STOP switches can be added via the control panel.
- **E-STOP is a secondary protective device, not a risk-reduction method** — don't rely on it as the primary safeguard.

## Safety functions (all PL d, Category 3)
| Group | Functions |
|---|---|
| Safety stopping | SF.1 STO, SF.2 SS1, SF.3 SS2 |
| Safety monitoring | SF.4 SOS, SF.5 SLP, SF.6 SLS, SF.7 SLA, SF.8 SLI, SF.9 SLT, SF.10 RPL, SF.11 TSL, SF.12 CBPL |
| Emergency stop | SF.13 EMS1, SF.14 EMS2 |
| Protective stop | SF.15 PRS, SF.16 HSS, SF.17 SSS |

Key definitions:
- **STO** — cuts motor power (uncontrolled stop, category 0).
- **SS1** — controlled deceleration then STO (category 1); RB Series uses **SS1-t** (time-controlled).
- **SS2** — controlled deceleration then SOS (category 2); RB Series uses **SS2-t**.
- **SOS** — holds position while powered, resists external force.
- **SLP/SLS/SLA/SLI/SLT** — limit position/speed/acceleration/increment/torque respectively.
- **RPL/TSL/CBPL** — limit TCP/body spatial region, TCP speed, and control-box power respectively.
- **EMS1** — teaching-pendant E-STOP switch → SF.2 stop mode.
- **EMS2** — control-box special I/O E-STOP input → SF.2 stop mode.
- **PRS** — user protective device via control-box I/O → SF.2 stop mode.
- **HSS** — user protective device via control-box I/O → SF.1 stop mode.
- **SSS** — user protective device via control-box I/O → SF.3 stop mode.

## Stop categories (IEC 60204-1)
| Category | Effect | Notes |
|---|---|---|
| **0 [STO]** | Immediate power-off | Joint brake wear risk — avoid unless unavoidable; restart required |
| **1 [SS1]** | Max deceleration, then power off | Restart required |
| **2 [SS2]** | Max deceleration, then SOS (holds position while powered) | No power cut — usable immediately after clearing the danger |

**Caution:** per ISO 10218-1 §5.5.2/5.5.3 — emergency stop must use category 0 or 1; protective stop must include at least one of category 0/1; category 2 can be used for *additional* protective stops.

## Operation modes
- **Initialize Mode (Set-up)** — peripheral/robot settings before motion; motor not yet powered (powered via activation).
- **Auto Mode (Play)** — predefined tasks with no user intervention; motor powered; safety functions active; requires password to enter automatic mode (**not set by default at shipment** — set one).
- **Manual Mode (Make)** — user-driven direct teaching/program editing; motor powered; robot moves only while the safety slide bar is actively held (deactivated by default at shipment — must be enabled). A 3-position enabling device, if used, must follow ISO 10218-1 §5.8.3.

## Safety device mounting / ports
16-port redundant safety-dedicated contact terminal, up to 4 external devices:
- **EMO** — extra emergency stop switch (IEC 60947-5-5 compliant) → stop category 1.
- **PRS** — protective stop device(s), per ISO 10218-2 §5.3.8.3 → stop category 1.
- **HSS** — protective stop device(s) → stop category 0.
- **SSS** — protective stop device(s) → stop category 2.

## Environmental limits (from source table)
Max storage temp 60°C · min operating temp 0°C · min storage temp -5°C · max humidity 80% · min humidity 20%.

See also [Robot Safety and Precautions](/hardware-safety/safety-and-precautions.md) for general warnings and [Setup Menu Reference](/software/setup-menu-reference.md) for where these are configured in the UI.
