# RB-X Software Guide (RB-MIG UI Manual)

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` — RB-X software UI manual (Latest Ver 2.1.0, 2026/3/25). This is the day-to-day welding workflow agents will most often need to reference._

## 1. Program Buttons and Menus (Main Screen Overview)
The RB-MIG UI is broadly split into four areas:
1. **Jog Control** — direct robot control (see **3-1** below).
2. **Program View** — the taught program and its properties (see **3-2** below).
3. **Title & Status bar** — shows the current app version; status/error messages pop up here.
4. **Left Side Bar Menu** — **Connect**, **Setup**, **Extension**, **Tool** buttons. At the bottom of this sidebar are the connected welding machine's manual test buttons: **Gas Check**, **Inching**, and **Back Inching** (reverse inching) — use these to manually check gas flow or feed/retract the wire without running a program.

## 2. Robot Connection
1. Confirm the tablet Wi-Fi and control box are on the same network.
2. **Setup > System Setup**.
3. Select **Welding Type** (**MIG** or **LASER**).
4. Set **Robot Model** to **RB_U** (current version on sale; other versions selectable if applicable).
5. Select **Language**.
6. Enter **Robot IP** (default **192.168.0.100**).
7. Select **Welder Model** (default **Analog**; also **Kemppi** and **Weco**, and per brand guides, Maven/IMT).
8. Click **Connect** — look for the connection-success message. If it fails, recheck IP and Wi-Fi, then retry.
9. Once connected, the robot is in a teachable state.

## 3. Main Screen Description

### 3-1 Jog Control Area
- **Smooth** mode: hold the jog button, robot moves continuously.
- **Pitch** mode: enter a distance, press jog to move exactly that amount; **Set** cycles 3 presets (press-and-hold to edit a preset).
- Coordinate systems: **Base** (moves relative to the robot's base) / **TCP** (relative to the tool tip — must be set up first) / **Joint** (moves each of the 6 joints individually).
- **Robot Controller orientation**: the robot is installed facing the *opposite* direction of its main connector. Based on the **Base** coordinate system: **Z** = up/down, **X** = left/right, **Y** = front/back. The **RX/RY/RZ** buttons rotate around the X/Y/Z axes respectively. Keep this in mind when a customer says the robot is "moving the wrong way" — it usually means their mental frame doesn't match the connector-relative Base frame.
- Bottom buttons: **Play**, **Stop/Pause**, **Move** (go to selected point), **Speed +/-**, **No_Arc** (movement only, no arc), **Custom Start** (start from a selected line).

### 3-2 Program View
- **File name field**: special characters are not allowed except spacing and underbar (`_`); the first character cannot be a number.
- **Open**: opens the file browser — files can be sorted **alphabetically or by date**, searched by name, and marked with a **star** to add them to Favorites.
- **Save**: saves under the currently entered file name. **New**: starts a blank file.
- **Side menu**: **Undo/Redo/Copy/Paste/Cut**, and the core teaching commands: **Move L** (straight line), **Move C** (curve, needs 2+ points), **Move J** (joint-space, most comfortable path), **Weld Start**, **Weld End**.
- **Switch submenu** adds: **Delete**, **Multi** (multi-select), **Skip** (disable a line without deleting it — note: skipping a Move C line causes a play error), **Wait** (pause for time or a digital/analog condition, with Time Out fallback), **Memo** (free-text note on a line, for other operators/agents reading the program later).

## 4. Settings Menu

### 4-1 System Setup
- **Robot Model**, **Welding Type** (MIG/LASER), **Language**, **Robot IP** (default 192.168.0.100), **Welder Model** (Analog / Kemppi / Weco — mandatory for protocol/control-signal compatibility).
- **Use MiniPC** — toggle Mini PC features on/off (keeps the app to basic supported features when off). Shows **MiniPC Version**, with **Rollback** / **Update MiniPC** buttons — keep the MiniPC version matched to the RB-X app version. **Mini PC IP** default is **192.168.0.210**.
- **Use External Axis** — must be enabled here before the [Ext. Axis](/feature-guides/ext-axis.md) extension will control a connected rail.
- **Use Data Transfer** — must be enabled here for the separate Data Transfer feature to work.
- **I/O tab** (within System Setup):
  - **Use Digital Channel for Tool Flange** — for older robots that can't connect to the tool flange connector directly; routes an RB-Ring through the control box's Din signal instead (disables the normal tool flange signal while active).
  - **Digital Output Map** / **Digital Input Map** — shows which DOUT/DIN channels are allocated in the current mode (settings are remembered per mode and won't be duplicated — release existing settings first if you need to reassign a channel).
  - **Ext Digital Output Map** / **Ext Digital Input Map** — same, for an external I/O expansion module.

### 4-2 Utility
- **Basic Posture** / **Packing Posture** — hold to move the robot into position; **check surroundings first — collision risk**.
- **Release Joint** — releases the joints for manual movement. *"Only if something goes wrong... under normal circumstances do not use. Contact your dealer or professional technical support and follow instructions."*

### 4-3 TCP Settings
- **Auto**: register 4 postures where the torch tip touches one physical point (more varied poses = better accuracy) → **Apply** → success/failure message; retry on failure.
- **Manual**: enter **Payload** (weight + center of gravity — required even if TCP is Auto) and **End Effector Center Position** (X/Y/Z auto-filled by Auto TCP; RX/RY/RZ always manual). Use torch manufacturer data if available, otherwise measure directly.

### 4-4 TCP Manager
Lets you save **multiple named TCP/tool profiles** and switch between them quickly, instead of re-entering values every time you change tools.
- Each row holds a **Name**, its **Payload Values** (m_pL, Xc/Yc/Zc_pL), and its **TCP Values** (X/Y/Z/Rx/Ry/Rz_tcp).
- **+ Add Tool** creates a new row; fill it in and press **Save** to store it.
- The bottom of the screen shows the TCP **currently set on the robot** (Robot Values).
- Press **Apply** next to a saved profile to push that profile's values to the robot.

### 4-5 Welding Machine Setup (Analog Welder)
- *Start*: Pre Wait (sec, wait before arc after reaching Weld Start point), **Arc Standby (sec)** (wait for WCR signal after weld command — times out and stops welding/program if not received), Post Wait (sec), Speed (mm/s), Volt. Offset (Curr Offset / User-defined), Curr. (A), Volt. (V).
- *End*: Pre Wait (sec), Volt. Offset, Crater Time (sec) with its own Curr./Volt., Post Wait (sec).
- *Welder channel mapping*: Arc On Ch., **Arc Standby Ch.** (WCR signal), Gas Check Ch., Inching Ch., Reverse Inch. Ch., Curr. Signal Range, Current Ch. + Range, Voltage Ch. + Range.

> **Diagnostic note:** "Arc Standby Ch." and the analog WCR-shunt concept are **Analog-mode only** — they do not apply to digital/Modbus welders (e.g. ESAB Classic), where arc/current status is read over Modbus instead. Confirm communication type (analog vs. digital/Modbus vs. fieldbus/Anybus vs. Ethernet) before advising.

### 4-6 Welding Machine Setup (Kemppi Welder)
- *Start*: Pre Wait, **Arc Standby** (same WCR-timeout behavior as Analog), Post Wait, **Method** (Mem w/ Adj. / Mem w/o Adj. / Manual), Memory (channel number; connected machine shows its mode: 1-MIG/Pulse/Dpulse/etc.), Feed Speed (0.5–25.0 m/min), Volt. (V) (range depends on mode: Voltage 8.0–46.0 or Fine Tuning -10~+10), Robot Speed (mm/s), CraterFill (on/off).
- *End*: Pre Wait (sec).
- See [Welder Integration Kemppi](/welder-integration/kemppi.md) for the brand-specific slide-deck version of this same setup.

## 5. Extension Menu
| Feature | Purpose |
|---|---|
| **5-1 Weaving** | Torch oscillates during welding. Shapes: Trapezoidal, Sine Wave, Triangle, C-Wave, Circle. Set line-number range (auto-inserts Weaving1 Start/End); enter L1–Swing parameters; set Set-Point1/2 via Get/Move/Swap. **Must be inside the welding section to work.** Full guide: [Weaving](/feature-guides/weaving.md). |
| **5-2 Program Call** | Loads a saved program as a subprogram of the current step (registration only — can't be modified after). Full guide: [Program Call](/feature-guides/program-call.md). |
| **5-3 Shift** | Batch-moves taught coordinates. Specify line-number Range; enter Shift Dist. (X/Y/Z) directly, or use Base Point + Move Point + **Get** + **Calc.** to auto-calculate; **Insert** adds as a new point, **Modify** overwrites the existing one. Full guide: [Shift](/feature-guides/shift.md). |
| **5-4 Jump** | Skips program flow to a line/label — used to build loops via **Here** (loop start) / **To** (loop end) addresses. Caution: combining with Custom Start can behave unpredictably depending on the start line. Full guide: [Jump](/feature-guides/jump.md). |
| **5-5 D/A Output** | Add digital (green=ON/red=OFF, per-signal) or analog (0–10V, channel 0–3) output steps to the program. Full guide: [D/A Output](/feature-guides/da-output.md). |
| **5-6 Batch Weld Mod** | Apply one Start/End weld-condition set to every Weld Start/End command within a specified Range at once. Full guide: [Batch Weld Mod](/feature-guides/batch-weld-mod.md). |
| **5-7 Weld Adjust** | Real-time wire feed / fine-tune adjustment during welding. **Kemppi-only in this version** (per manual — "will be updated later"). Memory Add, Feed Speed (m/min), Fine Tune (±10.0), Robot Speed (-100~100%). Full guide: [Weld Adjust](/feature-guides/weld-adjust.md). |
| **5-8 Ext. Axis** | Controls an RB-Ware-provided rail. Mode: Step-by-Step (currently the only mode). Position/Current Position (mm), Speed, **Get** (pull current rail position into target field), **Move** (hold to move to target), Jog Control (X-/X+), **Apply** (adds a Move Rail command — the parent command completes, then the rail sub-command executes). Requires **Use External Axis** enabled in **Settings > 4-1 System Setup**. See [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for the current-vs-legacy Ext. Axis distinction. Full guide: [Ext. Axis](/feature-guides/ext-axis.md). |
| **5-9 Multi Pass** | Repeats a weld path with Y/Z offsets — for thick materials or multi-layer joints. Must be applied after all other teaching is complete. Full guide: [Multi-Pass](/feature-guides/multi-pass.md). |
| **5-10 Repeat** | *(New in v2.1.0.)* Repeats the steps between **Repeat Start** and **Repeat End**. Methods: Infinite Loop, Number (fixed count), Condition (until met). **Infinite loops containing a welding command are only allowed in No_Arc mode.** Full guide: [Repeat](/feature-guides/repeat.md). |

## 6. Tool Menu
- **6-1 Download RB-Log** — press **Get**; log lands in the tablet's `Downloads > RCR_Log` folder (not viewable directly on-screen).
- **6-2 I/O Tester** — replaces the jog area with an I/O display. **Input** tab shows incoming signals (**Digital Input** 0–15, **Tool Flange Input** 0–5, **Analog Input** 0–3). **Output** tab lets you directly turn outputs on/off (click a channel to select it in orange, **On**/**Off** buttons; **Off** turns all channels off in batch; **Analog Output** adds a 0–10V value alongside on/off). **Box/Extension** selector switches the source between the control box's built-in I/O and an external I/O expansion module.

  > **Diagnostic note:** I/O Tester tests a **physical DI/DO port** — it doesn't apply to arc/current feedback read digitally over Modbus/fieldbus. Confirm communication type before recommending it.

- **6-3 Program Scheduler** — register up to 4 `.wsl` programs to P1–P4 buttons, triggered by an assigned external switch/DI. Pressing P1→P2→P3 in sequence auto-chains them (next starts when the previous ends). Steps: **Load** up to 4 files → **Configure Buttons** to assign an external switch (DI) to each program button and to the Pause button → press the red **Upload and Start** button → use the assigned external switch to run/schedule; pause/resume with the pause button. Optionally set an **LED Ch.** per button — an LED wired to that Dout channel then shows the program's running/scheduled state (e.g. blinking while running, solid while scheduled/waiting). **Requires a Mini PC regardless of welder mode** — see [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md).

## 7. Teaching Methods

### Move L (straight line)
- **Outside a welding section**: robot stops precisely at each point, brief pause, then continues — good for general stopovers or safety pauses.
- **Inside a welding section**: smooth continuous movement at constant speed, automatic blending, no stop at intermediate points. To force a stop at a specific point mid-weld, insert a `Wait 0.1` command right after that point.

### Move C (curve)
Recommended **only within a welding section**.
1. Starting point registered as **Move L**.
2. All following curve points registered as **Move C** (minimum 2 points total, e.g. L-C-C-C or L-C-C-C-C).
3. **Weld Start** goes right after the starting point.
4. **Weld End** goes right after the last **Move C**.
