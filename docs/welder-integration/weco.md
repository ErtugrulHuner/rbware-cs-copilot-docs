# Welder Integration: WECO

_Source: `RB-X_WECO_Welder_ENG.md` (RB-X WECO Welder Manual, Ver 2.0.3, updated 2026-02-20). Korean version: `RB-X_WECO_Welder_KOR.md`._

> **Note from the manual itself:** *"This feature is currently in development and may cause problems. Some functions may not work — if you have any questions, please contact the CS team."* Set expectations accordingly when advising a customer on WECO integration; escalate anything not covered here.

## Setup steps
1. Set **MIG**, the correct robot model (normally **RB_U**), and Welder Model = **WECO**. Welding machine, robot, and tablet must be on the same network, using an IP in the **0 range**.
2. Scroll down and press **Apply** — if Apply isn't pressed, the previous setting may remain active.
3. **Set > Welding Set** → the Start page appears; set values as needed. **The manual explicitly recommends not modifying "Arc Standby (sec)."**
4. Unlike "None" mode, **Job mode** retrieves values stored in the welding machine itself; for other welding modes, enter values manually as shown in the UI (example values in the source deck are for testing only, not defaults). Double-pulse and the "kdeepon" function cannot be used at the same time.
5. **Welding Set End page**: values entered here become the default Start/End page values for future Weld Start/Weld End teaching. (The Welder page currently has no functionality.)
5. Teach a simple straight weld to validate the setup: Start point → **Weld start** → End point → **Weld end**. Test while adjusting settings.

## Field-confirmed context
For the broader Kolarc-style "screen lock" and "Job mode vs. sticker process number" confusion pattern (which also comes up with WECO-adjacent setups), see [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md).
