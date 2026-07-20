# Software Overview: Make / Play / Setup

_Source: `manual_software_overview.md` (Rainbow Robotics RB Cobot Docs — this describes the base cobot UI structure that RB-X is built on)_

## Main screen — three menus
- **Make** — where you actually create programs (task sequences). Robot only moves while a movement-related button is held (adjustable in Setup > Interface).
- **Play** — where a created program is simply executed.
- **Setup** — where parameters are configured (collision sensitivity, installation angle, workspace, tool settings, system log, I/O functions, coordinate systems, etc.). See [Setup Menu Reference](/software/setup-menu-reference.md).

## Power off
Touch the power button (bottom right) → power-off window appears. **UI Shutdown** closes the program; if the robot is activated and connected, robot power shuts down too. **Screen Lock** makes the screen unresponsive to touch — unlock via the "Slide to unlock" arrow (drag right).

## Make screen layout
- **Left icons** — program-structure editing: copy/paste/save/delete/comment.
- **Right icons** — robot jogging (Jog) and related settings.
- **Middle icons** — program-structuring functions.
- **Bottom icons** — program save/load, play, speed control bar.

## Play screen
Load and execute teaching files (programs). Repeat count set in **Setup > Interface**. Total accumulated playback time shown bottom-left.

## Startup screen
- **Intro** — shown while the app loads.
- **Login** — factory-default password **0000**. Password/auto-login configured at **Setup > Security**.

For the RB-X-specific software workflow (jog control, program view, welder setup, extension menu, teaching methods), see [RB X Software Guide](/software/rb-x-guide.md).
