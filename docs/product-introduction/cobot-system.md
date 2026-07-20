# Cobot Product Introduction

_Source: `manual_product_introduction.md` (Rainbow Robotics RB Cobot Docs)_

## Overview
The RB product line is a series of collaborative robots designed for regular, continuous, repetitive tasks in dense human environments, usable without additional safety devices in many configurations. Selling points: intuitive UI, external/self-collision detection, space-efficient mounting.

## Control box variants
| Box | Notes |
|---|---|
| Stand Control Box (CB06, CB06-1) | AC input, 10-pin robot arm connector, E-STOP/JOG connector, LCD, boot-up switch, I/O port, USB/LAN |
| Compact Control Box (CB07) | Same connector set, compact layout |
| DC Control Box (CB08) | DC power input, Miniature Circuit Breaker as main switch, 12-pin robot arm connector |

## Robot arm — joint ranges
| Joint | Range |
|---|---|
| J1 | ±360° |
| J2 | ±360° |
| J3 | ±165°/±150° |
| J4 | ±360° |
| J5 | ±360° |
| J6 | ±360° |

## Robot arm parts
Base → J0 Base Joint → J1 Shoulder → J2 Elbow → J3 Wrist 1 → J4 Wrist 2 → J5 Wrist 3 → Tool Flange (for gripper/tool) → Teaching Button (direct teaching) → I/O Connector A/B (Non-E/E: A only; U-Version: A+B) → Robot–Control Box Connector.

## Model reach / dimensions (mm, key models)
| Model | Reach (A) |
|---|---|
| RB3-730ES | 730 |
| RB6-920ES | 920 |
| RB5-850E | 927.7 |
| RB3-1200E | 1200 |
| RB10-1300E | 1300 |
| RB16-900E | 900 |
| RB20-1900ES | 1900 |

Full dimension tables (A–I columns) are in the source manual.

## Pneumatic/electric cable built-in models (EA# / ESA# variants)
Models like RB5-850EA1/EA2, RB3-1200EA1/EA2, RB10-1300EA1/EA2/EA3, RB16-900EA1/EA2, RB6-920ESA1, RB20-1900ESA1/ESA2 carry internal pneumatic tubes (up to 4× 4∅ or 1× 8∅) and, on the "A2" variants, a 12-pin (AWG28) electric line. **Warning:** exceeding defined pneumatic pressure/power specs can damage the hardware — always check the model-specific table before wiring.

## Robot arm LED status
| LEDs lit | Meaning |
|---|---|
| 1 of 3 | Power supplied to arm |
| 2 of 3 | Booted, Simulation mode |
| 3 of 3 | Real Robot mode |
| All blinking | Program running |

## Payload & work area
Payload capacity varies with distance from tool flange to payload center of gravity (see source manual table). Max reach radius by model is listed above. The area directly below/above the robot base is a **singularity point** — restricted for Cartesian (Move L) movement, fine for joint (Move J) movement; using Cartesian coordinates there can cause rapid joint speeds or a stop.

## System configuration
- **Robot Arm** — the physical cobot; supports third-party grippers/tools.
- **Control Box** — runs user programs from the tablet PC; digital/analog I/O for peripherals.
- **E-STOP/Jog Interface** (stand-type box) — emergency stop plus Play/Stop controls.
- **Teaching Pendant/Tablet PC** (optional) — used to set up, program, and teach the arm.

Cable length recommendations: 5m for AC power and robot–control box cable (manufacturer-provided); under 3m for E-STOP/Jog interface cable, shielded LAN, I/O port cables, USB, and wire-pass external lines.

## Tablet PC (optional)
If no tablet PC option is selected, a dedicated app for operating/controlling/teaching is available for download. Tablet setup is required — see the manual's Appendix.
