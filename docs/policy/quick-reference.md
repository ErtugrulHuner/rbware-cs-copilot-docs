# Quick Reference

## Software
- **RB-X**: single license covering MIG/TIG, laser welding, grinding, plasma cutting; runs on Android & Windows; welder-agnostic.
- Default robot IP: **192.168.0.100** (standard) / **192.168.1.100** (Kolarc setups). See [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) — never cite 10.0.2.7.
- Robot model to select: **RB_U** (current version on sale).

## Welder support
Brand integration guides exist for **Kemppi, Maven, WECO, IMT**; an **Analog** mode is also documented. Use the matching brand guide for welder questions. No Kolarc-specific brand guide exists yet — flag the gap.

## Key features
Touch Sensing, Offset (Copy & Paste), Advanced Weaving, Program Scheduler, Multi-Pass, RB-RING (4RING) teaching tool.

## Ports (RB-X software, per RB-X_Data_Transfer / RB-MIG manual)
- Command Port: **5000**
- Data Port: **5001**
- Modbus Server Port: **502**
- Data Transfer UDP server example: IP 192.168.0.14, Port **9999** (customer-provided server)
- Data Transfer Mini PC default IP: **192.168.0.210**

## Cobot models
RB3-1200, RB5-850, RB6-1700 / RB6-920ES, RB10-1300, RB16-900, RB20-1900 (also RB3-730ES). See [Cobot Product Introduction](/product-introduction/cobot-system.md) for arm dimensions/payload/reach.

## Contacts
- **info@rb-ware.com** · HQ Goyang-si, Korea · RBW USA, Dover, DE.
- Escalation chain: **Mehmet** (field/technical) → **Can Berk / Jude** (Rainbow Robotics) → **Erdem** (dev).

## Default passwords
- UI login (RB cobot docs / RainbowApp): **0000**
- RainbowApp admin: **1234** (per CS memory/team convention — confirm current value if in doubt)

## Stop categories (safety)
| Category | Effect |
|---|---|
| 0 (STO) | Immediate power-off; brake wear risk; restart required |
| 1 (SS1) | Decelerate to max, then power off; restart required |
| 2 (SS2) | Decelerate to max, then SOS (holds position, powered); resume immediately after clearing danger |

## Joint / robot fault quick index
See [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for full diagnostics.
- A49 = Device Servo On fail — Joint 5 (Wrist 3); check welding-machine power supply adequacy, not just robot.
- A32–A37 = MT_ERR (joint initialization failures) → Joint Maintenance/Recovery procedure.
- A50 L2C = LAN-to-LAN cable behind front aluminum cover.
- BIG / JAM / CUR / Temperature / Mode errors = joint controller errors, see [Robot Operation and Troubleshooting](/hardware-safety/getting-started.md).

## Joint Maintenance/Recovery procedure
RainbowApp → Setup > Log/Utility > Utility > Joint Maintenance/Recovery → check **Activate** → select joint number → **Release** (releases brake) → manually rotate joint until zero-point mark/scale lines up → **Reset** → reboot control box and verify.
