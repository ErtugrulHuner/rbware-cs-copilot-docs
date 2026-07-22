# RB-X Software Guide (RB-MIG UI Manual)

_Source: `RB-MIG_v1_0_0_User_Manual.md` — RB-X software UI manual (Latest Ver 1.0.0, 2025/07/23). This is the day-to-day welding workflow agents will most often need to reference._

## Robot connection
1. Confirm the tablet Wi-Fi and control box are on the same network.
2. **Setup > System Setup**.
3. Set **Robot Model** to **RB_U** (current version on sale; other versions selectable if applicable).
4. Select **Language**.
5. Enter **Robot IP** (default **192.168.0.100**).
6. Select **Welder Model** (default **Analog**; also **Kemppi**, and per brand guides, Maven/WECO/IMT).
7. Click **Connect** — look for the connection-success message. If it fails, recheck IP and Wi-Fi, then retry.

## Main screen layout
- **Jog Control** — direct robot control. Facing the robot opposite its main connector, base X/Y/Z aligns with the robot's movement directions.
  - **Smooth** mode: hold the jog button, robot moves continuously.
  - **Pitch** mode: enter a distance, press jog to move exactly that amount; **Set** cycles 3 presets (press-and-hold to edit a preset).
  - Coordinate systems: **Base** / **TCP** (must be set up first) / **Joint** (per-axis).
  - Bottom buttons: **Play**, **Stop/Pause**, **Move** (go to selected point), **Speed +/-**, **No_Arc** (movement only, no arc), **Custom Start** (start from a selected line).
- **Program View** — file name field + **Open/Save/New**; side menu **Undo/Redo/Copy/Paste/Cut**, and the core teaching commands: **Move L** (straight line), **Move C** (curve, needs 2+ points), **Move J** (joint-space, most comfortable path), **Weld Start**, **Weld End**. **Switch** submenu adds **Delete**, **Multi** (multi-select), **Skip** (disable a line — note: skipping a Move C line causes a play error), **Wait** (pause for time or condition, with Time Out fallback), **Memo**.

## Settings menu
- **4-1 System Setup**: Robot Model, Language, Robot IP (default 192.168.0.100), Welder Model (mandatory for protocol/control-signal compatibility; default Analog).
- **4-2 Utility**: **Basic Posture** and **Packing Posture** (hold to move; check surroundings first — collision risk), **Release Joint** ("only if something goes wrong... under normal circumstances do not use. Contact your dealer or professional technical support and follow instructions.").
- **4-3 TCP Settings**:
  - **Auto**: register 4 postures where the torch tip touches one physical point (more varied poses = better accuracy) → Apply → success/failure message; retry on failure.
  - **Manual**: enter Payload (weight + CoG — required even if TCP is Auto) and End Effector Center Position (X/Y/Z auto-filled by Auto TCP; RX/RY/RZ always manual). Use torch manufacturer data if available, otherwise measure directly.
- **4-4 Welding Machine Setup (Analog Welder)**:
  - *Start*: Pre Wait (sec, wait before arc after reaching Weld Start point), **Arc Standby (sec)** (wait for WCR signal after weld command — times out and stops welding/program if not received), Post Wait (sec), Speed (mm/s), Volt. Offset (Curr Offset / User-defined), Curr. (A), Volt. (V).
  - *End*: Pre Wait (sec), Volt. Offset, Crater Time (sec) with its own Curr./Volt., Post Wait (sec).
  - *Welder channel mapping*: Arc On Ch., **Arc Standby Ch.** (WCR signal), Gas Check Ch., Inching Ch., Reverse Inch. Ch., Curr. Signal Range, Current Ch. + Range, Voltage Ch. + Range.

> **Diagnostic note:** "Arc Standby Ch." and the analog WCR-shunt concept are **Analog-mode only** — they do not apply to digital/Modbus welders (e.g. ESAB Classic), where arc/current status is read over Modbus instead. Confirm communication type (analog vs. digital/Modbus vs. fieldbus/Anybus vs. Ethernet) before advising.
- **4-5 Welding Machine Setup (Kemppi Welder)**:
  - *Start*: Pre Wait, **Arc Standby** (same WCR-timeout behavior as Analog), Post Wait, **Method** (Mem w/ Adj. / Mem w/o Adj. / Manual), Memory (channel number; connected machine shows its mode: 1-MIG/Pulse/Dpulse/etc.), Feed Speed (0.5–25.0 m/min), Volt. (V) (range depends on mode: Voltage 8.0–46.0 or Fine Tuning -10~+10), Robot Speed (mm/s), CraterFill (on/off).
  - *End*: Pre Wait (sec).
  - See [Welder Integration Kemppi](/welder-integration/kemppi.md) for the brand-specific slide-deck version of this same setup.

## Extension Menu
| Feature | Purpose |
|---|---|
| **5-1 Weaving** | Torch oscillates during welding. Shapes: Trapezoidal, Sine Wave, Triangle, C-Wave, Circle. Set line-number range (auto-inserts Weaving1 Start/End); enter L1–Swing parameters; set Set-Point1/2 via Get/Move/Swap. **Must be inside the welding section to work.** |
| **5-2 Program Call** | Loads a saved program as a subprogram of the current step (registration only — can't be modified after). |
| **5-3 Shift** | Batch-moves taught coordinates. Specify line-number Range; enter Shift Dist. (X/Y/Z) directly, or use Base Point + Move Point + **Get** + **Calc.** to auto-calculate; **Insert** adds as a new point, **Modify** overwrites the existing one. |
| **5-4 Jump** | Skips program flow to a line/label — used to build loops via **Here** (loop start) / **To** (loop end) addresses. Caution: combining with Custom Start can behave unpredictably depending on the start line. |
| **5-5 D/A Output** | Add digital (green=ON/red=OFF, per-signal) or analog (0–10V, channel 0–3) output steps to the program. |
| **5-6 Batch Weld Mod** | Apply one Start/End weld-condition set to every Weld Start/End command within a specified Range at once. |
| **5-7 Weld Adjust** | Real-time wire feed / fine-tune adjustment during welding. **Kemppi-only in this version** (per manual — "will be updated later"). Memory Add, Feed Speed (m/min), Fine Tune (±10.0), Robot Speed (-100~100%). |
| **5-8 Ext. Axis** | Controls an RB-Ware-provided rail. Mode: Step-by-Step (currently the only mode). Position/Current Position (mm), Speed, **Get** (pull current rail position into target field), **Move** (hold to move to target), Jog Control (X-/X+), **Apply** (adds a Move Rail command — the parent command completes, then the rail sub-command executes). See [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for the current-vs-legacy Ext. Axis distinction. |

## Tool menu
- **6-1 Download RB-Log** — press **Get**; log lands in the tablet's `Downloads > RCR_Log` folder (not viewable directly on-screen).
- **6-2 I/O Tester** — replaces the jog area with an I/O display. **Input** tab shows incoming sensor/equipment signals; **Output** tab lets you directly turn outputs on/off (click a channel to select it in orange, **On**/**Off** buttons; **Off** turns all channels off in batch). Analog Output adds a 0–10V value alongside on/off.

  > **Diagnostic note:** I/O Tester tests a **physical DI/DO port** — it doesn't apply to arc/current feedback read digitally over Modbus/fieldbus. Confirm communication type before recommending it.

- **6-3 Program Scheduler** — register up to 4 `.wsl` programs to P1–P4 buttons, triggered by an assigned external switch/DI. Pressing P1→P2→P3 in sequence auto-chains them (next starts when the previous ends). Steps: **Load** up to 4 files → assign external switch per button (no delete function — reset after re-initialization if you need to remove one) → press the red **Upload and Start** button → use the assigned external switch to run/schedule; pause/resume with the pause button. **Requires a Mini PC regardless of welder mode** — see [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md).

## Teaching methods
### Move L (straight line)
- **Outside a welding section**: robot stops precisely at each point, brief pause, then continues — good for general stopovers or safety pauses.
- **Inside a welding section**: smooth continuous movement at constant speed, automatic blending, no stop at intermediate points. To force a stop at a specific point mid-weld, insert a `Wait 0.1` command right after that point.

### Move C (curve)
Recommended **only within a welding section**.
1. Starting point registered as **Move L**.
2. All following curve points registered as **Move C** (minimum 4 points total, e.g. L-C-C-C or L-C-C-C-C).
3. **Weld Start** goes right after the starting point.
4. **Weld End** goes right after the last **Move C**.
