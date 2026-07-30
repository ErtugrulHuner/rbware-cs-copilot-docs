# D/A Output

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-5, Latest Update 2026/3/25)._

D/A Output adds a digital or analog output-signal step directly into the taught program — for example, to trigger an external device (light, clamp, sensor reset) at a specific point in the sequence.

**Box/Extension**: signals can come from the robot control box's built-in I/O, or from an optional external I/O expansion module — select which one you're using from the dropdown.

![D/A Output settings screen — digital output channels and analog output values](/feature-guides/da-output-settings.png)

## Digital Output
- Click a channel button (0–15) to switch its state:
  - **Green = TRUE (Output ON)**
  - **Red = FALSE (Output OFF)**
- Set all the signals you need, then press **Apply** to add the step.

## Analog Output
- Regulates an analog output voltage between **0–10V**.
- Select the channel you want (0–3) — it highlights in green once active.
- Type the output value directly, or adjust it with the **+ / −** buttons.
- Press **Apply** to add the step.

## Memo
Both Digital and Analog Output steps have an optional memo field — use it to leave a short note explaining what the signal does (not required, but useful for anyone reviewing the program later).

## Example
- Digital Output: select output channel 3, set it ON → adds a step that turns on channel 3 at that point in the program.
- Analog Output: select channel 0, set 5.0V → adds a step that outputs 5V on channel 0 at that point.
