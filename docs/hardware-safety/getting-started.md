# Getting Started and Startup

_Source: `manual_start.md`, `manual_starting_the_robot.md` (Rainbow Robotics RB Cobot Docs)_

## Turning the control box on/off
Power spec: **AC 100–240V single phase (50–60Hz)** or **DC 48V**.

**On:**
1. Press the AC/DC power switch at the bottom of the control box.
2. Press the main power switch at the top.
3. LCD shows **"Please Wait"** during initial boot.
4. LCD changes to **"default"** once ready.

**Off:** hold the main power switch for a few seconds.

## Turning on the tablet PC
Ensure the tablet is connected to the control box and running the manufacturer app. Don't perform unnecessary screen operations while booting. Power button is top-left on the tablet.

## Robot operation (Play screen)
- Risk assessment and all safety requirements must be satisfied before operating.
- Robot initialization can fail if not properly installed, payload not set accurately, or an initialization error occurs.
- **The robot physically moves immediately when Play is pressed** — read all operation-related sections carefully.
- To move to Make or Setup, the running program must be terminated first.
- The USB cable between tablet and control box can be unplugged during operation.

**Procedure:**
1. Check the connection icon between tablet and control box.
2. Open the desired project.
3. Press the Play (▷) button at the bottom to run.
4. If a dialog pops up (current position ≠ initial position), press and hold **Approach** to move to the initial position.
5. If "number of repeat" isn't set, the program repeats indefinitely — set it via **Count** at the top.
6. Motion speed can be adjusted mid-operation.

## Robot status check (Play screen elements)
Program flow tree · 3D viewer · 3D view angle changer · system/variable monitor · Play/Pause/Stop/Velocity slider.

## Troubleshooting while operating
| Issue | Detail | Resolution |
|---|---|---|
| **Out Collision** | OUT = overcurrent from current sensor; ACC/GYR = sudden vibration detected | Remove the external cause, then press **Halt** (end task) or **Resume** (continue). **"TOK TOK"**: lightly tapping the arm twice while paused has the same effect as Resume. |
| **Self Collision** | Robot moved outside the designated work area, or approached a collision-risk motion | Use the teaching button to manually move to a normal position, then review the taught motion/work range. In Simulation mode on Make: use motion buttons, temporarily switch to Real mode, or press the teaching button to recover. |
| **Alarm Message** | An `Alarm` command was reached in the program | Dialog pops up — press **Resume** or **Halt**. |
| **Tablet PC Disconnection** | Control box ↔ tablet disconnected, or main power (220V) forcibly cut | Replace the USB cable if damaged; try a different USB port if the connection is inconsistent. |
| **Interruption of external power supply** | Power to the robot arm interrupted (e.g. E-STOP pressed) | After restoring the E-STOP switch normally, re-initialize the robot. |
| **Joint Controller Errors** | See table below | Robot stops automatically |

### Joint controller error types
| Error | Cause |
|---|---|
| **BIG** | Difference between reference input and encoder value exceeds factory threshold |
| **JAM** | Encoder value doesn't change, but current supplied exceeds factory threshold |
| **CUR** | Current exceeds maximum current threshold |
| **Temperature** | Temperature exceeds maximum threshold |
| **Mode** | Main controller software version differs from joint controller version |

See [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for the field precedent on JAM-type recurrence (possible solenoid switch failure) and collision/jam severity branching (direct-teach vs. Release Joint).
