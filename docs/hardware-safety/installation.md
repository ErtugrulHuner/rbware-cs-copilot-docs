# Robot Installation

_Source: `manual_installation.md` (Rainbow Robotics RB Cobot Docs)_

## Cable connection
1. **Robot arm ↔ control box**: connect the female connector to the robot arm, male to the control box. Check for bent pins.
2. **Power cable**: AC power supply is 100–240 VAC, 50–60 Hz; DC power supply is 48 VDC.
   - **Caution:** never unplug the robot cable, power cable, or teaching pendant while the robot is on. AC/DC peripherals must share a common ground.

## Analog I/O
- Use analog GND closest to the I/O; control box and equipment share the same GND (analog I/O is **not isolated** from the robot control box).
- Use shielded/twisted-pair cable, grounded to the shield on the Power (J12) terminal.
- Voltage mode: 0–10V, 16-bit resolution, both input (AIx-AG) and output (AOx-AG).

## Digital I/O
- All digital I/O complies with **IEC 61131-2**.
- Digital Output (DOx): 0–1A, ≤0.5V drop, ≤0.1mA leak, PNP type.
- Digital Input (DIx): -3 to 30V range; OFF ≤5V, ON 11–30V; 2–15mA at 11–30V; PNP+ type.
- Output is always LOW unless the program is running.
- **Caution:** turn off control box power before wiring I/O. Damage from 24V shorts/incorrect wiring is **not covered by warranty**.

## Safety input configuration
- All safety-related I/O must have multiple backups; only wire safety signals to a **safety PLC**, never a general PLC.
- Emergency stop input = emergency stop of the robot; safety stop input = all safety-level protection.
- **Danger:** never connect a safety signal to a non-safety PLC — risk of serious injury.
- Enabling Device Input (3-position switch) is optional and not provided by Rainbow Robotics; middle (operating) position lets the robot move, pressed = inoperative.

## Installation location & mounting
Recommended: seismic-rated building, no leaks, no flammable/explosive material, constant temperature/humidity, limited dust. Mount with 4× M6 25mm bolts (RB3-730ES) or 4× M8 30mm bolts (other models) — fix firmly, on a surface able to bear the combined weight, fully seated, bolts never disassembled from the arm itself.

## Tool connection
- Secure tool to tool flange with 4× M6 bolts (ISO 9409-1-50-4-M6). Tools/bolts not included.
- I/O connector specs differ by version:
  - **Non-E/E version**: 12-pin M12 connector (Digital Out A/B, VCC, Ground, Digital In A/B, Analog In A/B or Digital In C/D depending on version, RS485+/-, Common Ground).
  - **U version**: 8-pin Binder M8 connectors (A: male, B: female) — RS485 D+/D-, Digital Input 0–5 (PNP), Power(+), Digital Output 0/1, Ground.
- Internal power on the I/O tab can be set to 0V/12V/24V.
- Non-E version tool digital output is NPN (open-collector to GND when disabled); E/U version is PNP (open-collector to VCC when disabled).
- Tool flange supports RS485 serial: baud rates 9600–115200 and 1M, 1 or 2 stop bits, parity None/Even/Odd.
- **Caution:** use a diode to protect against inductive loads on tool outputs.

## Control box I/O overview
Same IEC 61131-2 digital I/O specs as above, exposed via the control box's rear terminal layout for relays, PLCs, or E-STOP buttons.
