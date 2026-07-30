# Settings Menu

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Section 4, Latest Ver 2.1.0, 2026/3/25). Part of the [RB-X Software Guide](/software/rb-x-guide.md)._

## 4-1 System Setup
- **Robot Model**, **Welding Type** (MIG/LASER), **Language**, **Robot IP** (default 192.168.0.100), **Welder Model** (Analog / Kemppi / Weco — mandatory for protocol/control-signal compatibility).
- **Use MiniPC** — toggle Mini PC features on/off (keeps the app to basic supported features when off). Shows **MiniPC Version**, with **Rollback** / **Update MiniPC** buttons — keep the MiniPC version matched to the RB-X app version. **Mini PC IP** default is **192.168.0.210**.
- **Use External Axis** — must be enabled here before the [Ext. Axis](/feature-guides/ext-axis.md) extension will control a connected rail.
- **Use Data Transfer** — must be enabled here for the separate Data Transfer feature to work.
- **I/O tab** (within System Setup):
  - **Use Digital Channel for Tool Flange** — for older robots that can't connect to the tool flange connector directly; routes an RB-Ring through the control box's Din signal instead (disables the normal tool flange signal while active).
  - **Digital Output Map** / **Digital Input Map** — shows which DOUT/DIN channels are allocated in the current mode (settings are remembered per mode and won't be duplicated — release existing settings first if you need to reassign a channel).
  - **Ext Digital Output Map** / **Ext Digital Input Map** — same, for an external I/O expansion module.

## 4-2 Utility
- **Basic Posture** / **Packing Posture** — hold to move the robot into position; **check surroundings first — collision risk**.
- **Release Joint** — releases the joints for manual movement. *"Only if something goes wrong... under normal circumstances do not use. Contact your dealer or professional technical support and follow instructions."*

## 4-3 TCP Settings
- **Auto**: register 4 postures where the torch tip touches one physical point (more varied poses = better accuracy) → **Apply** → success/failure message; retry on failure.
- **Manual**: enter **Payload** (weight + center of gravity — required even if TCP is Auto) and **End Effector Center Position** (X/Y/Z auto-filled by Auto TCP; RX/RY/RZ always manual). Use torch manufacturer data if available, otherwise measure directly.

## 4-4 TCP Manager
Lets you save **multiple named TCP/tool profiles** and switch between them quickly, instead of re-entering values every time you change tools.
- Each row holds a **Name**, its **Payload Values** (m_pL, Xc/Yc/Zc_pL), and its **TCP Values** (X/Y/Z/Rx/Ry/Rz_tcp).
- **+ Add Tool** creates a new row; fill it in and press **Save** to store it.
- The bottom of the screen shows the TCP **currently set on the robot** (Robot Values).
- Press **Apply** next to a saved profile to push that profile's values to the robot.

## 4-5 Welding Machine Setup (Analog Welder)
- *Start*: Pre Wait (sec, wait before arc after reaching Weld Start point), **Arc Standby (sec)** (wait for WCR signal after weld command — times out and stops welding/program if not received), Post Wait (sec), Speed (mm/s), Volt. Offset (Curr Offset / User-defined), Curr. (A), Volt. (V).
- *End*: Pre Wait (sec), Volt. Offset, Crater Time (sec) with its own Curr./Volt., Post Wait (sec).
- *Welder channel mapping*: Arc On Ch., **Arc Standby Ch.** (WCR signal), Gas Check Ch., Inching Ch., Reverse Inch. Ch., Curr. Signal Range, Current Ch. + Range, Voltage Ch. + Range.

> **Diagnostic note:** "Arc Standby Ch." and the analog WCR-shunt concept are **Analog-mode only** — they do not apply to digital/Modbus welders (e.g. ESAB Classic), where arc/current status is read over Modbus instead. Confirm communication type (analog vs. digital/Modbus vs. fieldbus/Anybus vs. Ethernet) before advising.

## 4-6 Welding Machine Setup (Kemppi Welder)
- *Start*: Pre Wait, **Arc Standby** (same WCR-timeout behavior as Analog), Post Wait, **Method** (Mem w/ Adj. / Mem w/o Adj. / Manual), Memory (channel number; connected machine shows its mode: 1-MIG/Pulse/Dpulse/etc.), Feed Speed (0.5–25.0 m/min), Volt. (V) (range depends on mode: Voltage 8.0–46.0 or Fine Tuning -10~+10), Robot Speed (mm/s), CraterFill (on/off).
- *End*: Pre Wait (sec).
- See [Welder Integration Kemppi](/welder-integration/kemppi.md) for the brand-specific slide-deck version of this same setup, and [Weld Adjust](/feature-guides/weld-adjust.md) for the real-time Kemppi wire feed/fine-tune adjustment feature.
