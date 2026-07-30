# Tool Menu

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Section 6, Latest Ver 2.1.0, 2026/3/25). Part of the [RB-X Software Guide](/software/rb-x-guide.md)._

## 6-1 Download RB-Log
Press **Get**; log lands in the tablet's `Downloads > RCR_Log` folder (not viewable directly on-screen).

## 6-2 I/O Tester
Replaces the jog area with an I/O display.
- **Input** tab shows incoming signals: **Digital Input** (0–15), **Tool Flange Input** (0–5), **Analog Input** (0–3).
- **Output** tab lets you directly turn outputs on/off — click a channel to select it in orange, then **On**/**Off** (Off turns all channels off in batch). **Analog Output** adds a 0–10V value alongside on/off.
- **Box/Extension** selector switches the source between the control box's built-in I/O and an external I/O expansion module.

> **Diagnostic note:** I/O Tester tests a **physical DI/DO port** — it doesn't apply to arc/current feedback read digitally over Modbus/fieldbus. Confirm communication type before recommending it.

## 6-3 Program Scheduler
Registers up to 4 `.wsl` programs to P1–P4 buttons, triggered by an assigned external switch/DI. Pressing P1→P2→P3 in sequence auto-chains them (next starts when the previous ends).

**How to use:**
1. **Load** up to 4 files.
2. **Configure Buttons** to assign an external switch (DI) to each program button and to the Pause button.
3. Press the red **Upload and Start** button.
4. Use the assigned external switch to run/schedule; pause/resume with the pause button.

Optionally set an **LED Ch.** per button — an LED wired to that Dout channel then shows the program's running/scheduled state (e.g. blinking while running, solid while scheduled/waiting).

**Requires a Mini PC regardless of welder mode** — see [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md).
