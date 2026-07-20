# Setup Menu Reference

_Source: `manual_setup.md` (Rainbow Robotics RB Cobot Docs). Menu names/labels below are the on-screen labels — keep them exact and untranslated when replying to customers._

## Set-up (Cobot) — General
- Collision sensitivity (lower = stops at weaker impacts; can be toggled off).
- Robot activity area (Workspace) — 3D visualized limits; exceeding it triggers a self-collision stop; can be toggled off.
- **Collision Detection Protection Mode**: General Stop (stop immediately) / Evasion Stop (reverse then stop) / Free Drive Stop (switch to direct teaching after collision) — step-adjustable.
- **Pause Deceleration Amount**, **Droop Compensation** (for tool-flange-mounted load sag), **Control Box Robot Model** display.
- Installation angle (manual entry via gravitational direction vector, Global coordinate system).
- Tool Flange Default Output Voltage (0/12/24V), Direct Teaching Button enable, Vibration Sensor toggle.
- **Joint Limit** — set per-joint angle limits.

## Set-up (Coordinate)
Configure up to **3 user-defined coordinate systems**, each via 3-point setting relative to the robot base:
- **P1** — origin.
- **P2** — any point on the X-axis (set as far from P1 as possible).
- **P3** — any point on the XY plane (determines Z-axis direction).

## Set-up (Devices)
1. **Analog Weld Machine Setting** — welding output parameters as a linear function.
2. **Advanced Analog Welder** — user-discretion welding output parameters.
3. **Digital Weld Machine Setting** — reflected immediately in the Make window.
4. **Gripper Setting** — reflected immediately in the Make window.
5. **Communication I/O Map** — map PLC devices to control-box I/O; usable even when the program isn't running.
6. **External Axis Setting** — external-axis parameters. **Field correction:** the legacy `rail_point1..10.wsl` method described on this page (p.117–118) is no longer used — see [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for the current Ext. Axis method.

## Set-up (Inbox / Frame)
- **Inbox** — position (center point + width) for Inbox 0 and Inbox 1, relative to the robot base; orientation isn't settable.
- **User Coordinate** — same 3-point method as above, or **Method 2**: direct numeric entry without teaching.

## Set-up (Interface)
- Play-screen repeat count; Make-screen safety slider toggle (enabled: bar returns to 0 when released; disabled: speed setting persists after release).
- Jog Smooth-mode speed, Jog Tick-mode movement amount, auto-rotation alignment button visibility, UI speed bar upper limit.
- Direct-teaching sensitivity per joint (higher = less force needed).
- Dedicated jog/E-STOP interface device's Play button role; Make-screen defaults; No Arc button enable.
- **Hand Controller function**: additional button assignment, attachment-status config (recommend keeping the controller mounted for safety).
- **EtherNet/IP, ProfiNet, OPC-UA, REST API** — enable/disable each server/adapter and check status.
- **OnRobot Box** — IP address configuration.
- **Screen Always On** / **Gesture Mode** (swipe between Make/Play/Setup).
- **IP List** — pre-register multiple control-box IPs, switch quickly from the connection page.

## Set-up (I/O 1) — Digital I/O function mapping
Configure per-port trigger type: **R** (rising edge) / **H** (high state) / **F** (falling edge) / **L** (low state). Also lets you label ports.

**Selected Digital Input (Din) special functions** (of 66 total): Start/Stop/Pause Program, Direct Teaching on/off, Speed 100%/0%, Real/Simulation switch, Reset Robot, Disable Collision (high state), Auto Initialization Key, Release Pause after collision, Add Point, Repeat-mode start, Move to Begin Position, Resume Program, Quick Freedrive Change, **Touch Sensing** (rising/falling edge — ports 21/22), No Arc (high state, port 23), Program Start Block, Ext.Joint 0/1/2 Plus/Minus, Safety Speed, User Coord 0/1/2 ← TCP frame, Load & Run Program Table, Start/Stop Prog (Once/Repeat), Reset SOS, Delete Point, Add ARC-On/Off, Speed presets (75/50/25/10%), Block Freedrive Button, Duplex for Safety.

**Selected Digital Output (Dout) special functions** (of 66 total): Program/Robot Running state, External Impact Detected, Direct Teaching Mode Active, mirror a Digital Input or Tool Flange Input signal, Robot Active, Real/Simulation Mode, Robot Initialization Failed, Power to Arm, Collision Detection On/Off, Pause State, Inbox 0/1 Trap, PWM Module, Teaching Pendant Connected, Program Running in Make/Play, Conveyor Mode, Control Box Boot Complete, Force Control Mode, PC Alive Pulse, Speed Slider 100%, Last Program Load result, TCP in Inbox 0/1, Alarm state, Begin posture, Emergency Teaching Enable, Sub.P area run, Hand Controller F1–F4 pressed, Sync with other Dout ports, SOS state, EMG Button state, Robot Speed threshold, Near Joint Limit, Robot Arm under Activating, Under Program Loading.

> Full numbered tables (0–58 inputs, 0–66 outputs) are in `manual_setup.md` — cite exact numbers/labels from there when advising a customer on a specific port.

## Set-up (I/O 2)
- **Pre/Post Program I/O** — outputs to fire automatically at program start/end; control-box analog out (0–10V, channels 0–3); tool-flange digital out (Bypass/0V/12V/24V per port).
- **Boot-up Output/Action** — digital outputs and User Scripts to run just after control-box boot-up, activation, or switching to Real Mode.
- **Tool I/O Special Function** — assign functions to Tool Out 0/1 and Tool In 0–5.

## Set-up (Log) / (Log/Utility)
- **Get/Load** — import a LOG file from control box to tablet, then load it for viewing.
- Filter by: All / Info / Warn / Error / System / Fatal / User. **Mail** sends logs to Rainbow Robotics support (requires Wi-Fi).
- Backup/restore control box settings; view robot arm operating time; view control-box time zone and system (UI) version.
- **Utility** (packaging & emergency recovery):
  - **Packaging position** — hold the button (robot must be activated, all attachments removed) until an alarm confirms the packaging position is reached.
  - **Axis reference reset to factory state** — Step 1: select axis → Step 2: press **Release** (releases brake) → Step 3: align the marked groove and press **Reset**. **Caution: understand this function fully before use; intended for abnormal-operation recovery.** This is the same procedure referenced as "Joint Maintenance/Recovery" — see [Quick Reference](/policy/quick-reference.md).

## Set-up (Online Manual)
Access the Rainbow Web online manual directly from the tablet (requires internet).

## Set-up (Program Table)
Trigger different programs from different digital inputs (vs. the single-DI, single-program **Start Program** function in I/O1).
- Options per slot: Load only / Load + Play Once / Load + Play Repeat.
- Register the `.wsl` file to a program-number slot, then assign a digital input to that slot in **Setup > I/O1**. Example: slot 0 registered → assign a function to Din 0 → the program runs on the falling edge of Din 0.

## Set-up (Security)
- Assign a password per UI screen. **Default password: 0000.**
- To change: enter current password + new password twice → Save. A pop-up means the current password entered was incorrect.
- **Always Keep Screen On** and **Gesture Mode** toggles also live here.

## Set-up (Socket/Serial)
- Assign the control box's IP address. **Default IP in this Rainbow-origin doc is 10.0.2.7 — field-confirmed as NOT used in practice; see [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for the real defaults (192.168.0.100 / 192.168.1.100).**
- **High-speed External Script Mode**: 1.8ms cycle vs. the standard 10ms.
- **Command Port (5000)**, **Data Port (5001)**, **Modbus Server Port (502)**.
- RS485 settings (speed/parity) for tool flange and control box sides separately.

## Set-up (System)
- **General**: UI Robot Model, Time Format (12/24h), Language, Command Icon Language, Advanced Program Operation Mode, Software Update (install/upgrade/downgrade from tablet to control box).
- **Robot Auto Activation**: Disable (manual Activate press) / Auto Activate with Key (any digital input) / Auto Activate without Key (activates on control-box power-on).
- Default Work File, System ID (0–3000), Robot Arm LED Indicator toggle, SOS Mode (Simple/SF), Default Joint-Jog/Linear-Jog speed, External F/T Sensor model, High-Resolution ADC Mode.
- **Software PLC**: On(Always) / On(Idle) / On(Non-Idle) — build logic from input signals, system status/parameters, and communication data to drive output signals.
- **System Configuration**: control box time zone, DI/DO signal inversion per port, tool flange/I/O board usage.
- **User Script Command**: insert custom functions into UI_Script; Save / Test / Load Settings.

## Set-up (Tool List)
Configure the TCP list — select a TCP number, set name/position/center of mass, save.

## Set-up (Tool/TCP)
- **Default Tool**: enter TCP coordinates (X,Y,Z,RX,RY,RZ) relative to the model's TCP coordinate system; enter Mass (kg) and Center of Gravity (mm) — range depends on the robot's rated load; set the tool-area self-collision zone.
- **Tool List**: up to **5** TCP/CoG/payload configurations can be saved.
- **Extra Link-Payload**: for equipment mounted on Shoulder/Elbow (e.g. welding feeders).

## Set-up (Utility)
Same packaging-position and axis-reference-reset functions described under Log/Utility above.

---
See also [RB X Software Guide](/software/rb-x-guide.md) for the RB-X/RB-MIG-specific software workflow built on top of this same underlying UI, and [Touch Sensing](/software/touch-sensing.md) for the DI-triggered Touch Sensing workflow referenced under I/O1 above.
