# Error Codes Reference

_Sources: `technical_docs.md` (M-code message table, I/O function definitions, gripper/F-T sensor integration notes), `국문_RB_Service_Manual_v1_220829.pdf` (Korean service manual, illustrated M-code tables with 한글 translations), plus A-code references cross-checked against RB-X per [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md)._

This page is a **navigation aid**, not a full reproduction — the source files contain hundreds of M-codes and detailed I/O function tables. Always pull the exact code text from the source file/section noted before quoting it to a customer.

## Code families
| Prefix | Meaning | Where to look |
|---|---|---|
| **A-codes** (A7, A17, A20–31, A49, A50, A58, A131, etc.) | Activation / boot / joint-servo errors | `technical_docs.md`; confirmed identical to RB-X per Field-Confirmed Corrections — citable directly without caveat. A49 = "Robot Arm Activation Fail: Device Servo On fail — Fail to run Joint 5 (Wrist 3)." A50 L2C = LAN-to-LAN cable issue (behind front aluminum cover). |
| **M-codes** (M1–M200+) | UI/software messages: Touch Sensing (M192–M203), Direct-Teaching Mode (M204–M208), G-code (M209–M221), Safety Parameter (M222–M225), **Digital Welding** (M226–M237, includes M229 "Arc generation signal time-out" for digital/Modbus welders), general communication/program errors (M178–M191) | `technical_docs.md` and `국문_RB_Service_Manual_v1_220829.pdf` (has 한글 translations side-by-side) |
| **BIG / JAM / CUR / Temperature / Mode** | Joint controller errors during operation | `manual_starting_the_robot.md` — see [Getting Started and Startup](/hardware-safety/getting-started.md) |
| **MT_ERR (A32–A37)** | Joint initialization failures | Use the Joint Maintenance/Recovery procedure — see [Quick Reference](/policy/quick-reference.md) |

## Digital Welding message block (M226–M237) — high CS relevance
| Code | Meaning |
|---|---|
| M226 | Welding Machine is not selected — select the welder in Setup menu |
| M227 | Welder information in Setup and Command doesn't match |
| M228 | Sync between welder and robot control box not done |
| **M229** | **Arc generation signal time-out** — this is the digital/Modbus equivalent of the Analog-mode "Arc Standby" timeout |
| M230 | Power ready signal did not arrive |
| M231 | Machine ready signal did not arrive |
| M232 | Error signal coming from the welder |
| M233 | Cannot check the welder's touch-sensing mode |

> **Diagnostic reminder:** before citing any of these, confirm whether the customer's welder is Analog, digital/Modbus, fieldbus/Anybus, or Ethernet — several concepts (Arc Standby Ch., analog DI arc-feedback shunt) only apply to Analog mode, while M229 and Modbus-read arc status apply to digital welders. See [CS Copilot Policy and Workflow](/policy/copilot-policy.md) and [RB X Software Guide](/software/rb-x-guide.md).

## Touch Sensing message block (M192–M203)
Covers: searching speed/acceleration/distance out of range, points too close, outer/perpendicular point setting issues, other-motion-executing conflicts, searching must start at the search-start position, sensor detected/not detected during search, configuration/search must be completed before use, and object movement exceeding the specified range during a scan. See [Touch Sensing](/software/touch-sensing.md) for the underlying workflow these errors relate to.

## Gripper / F-T sensor integration (from `technical_docs.md`)
Supported: Robotiq Hand-E, 2F-85, 2F-140, EPick (all via Make screen > Command Actions > Gripper); Robotiq FT-300 (via Command Actions > Force, calibration/Auto-COM under Make screen > Right Sidebar > Setting; connect power to 24V and ground to GND on the control-box I/O terminal block, communication via USB; set external F/T sensor to "Robotiq F/T300" in Setup > Interface, then reboot); Robotous RFT806A (DC 5V power, CAN bus at 1Mbit/s, Command CAN ID 0xF0, Data CAN IDs 0xF1/0xF2; set external F/T sensor to "Robotous RFT806A" in Setup > Interface, then reboot).

## When a code isn't in this list
Don't guess at a meaning. Search `technical_docs.md` / the Korean service manual PDF for the exact code, cite the exact wording, and flag low confidence if it isn't found — see escalation guidance in [CS Copilot Policy and Workflow](/policy/copilot-policy.md).
