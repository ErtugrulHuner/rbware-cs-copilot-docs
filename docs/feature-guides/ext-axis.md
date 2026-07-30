# Ext. Axis

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-8, Latest Update 2026/3/25)._

Ext. Axis controls an external rail (linear track) that the robot is mounted on or works alongside — currently supplied as a side-rail accessory. **Use External Axis** must be enabled in **System Setup** before this menu will work with a connected rail.

![Ext. Axis settings screen — position, current position, speed, and jog control](/feature-guides/ext-axis-settings.png)

## Mode
Currently only **Step-by-Step** mode is available.

## Fields
| Field | What it does |
|---|---|
| **Position** | Target position (mm) to move the rail to. |
| **Current Position** | The rail's actual live position (mm). Shows a red warning icon if the rail isn't connected/detected. |
| **Speed** | Speed (mm/s) the rail moves at. |
| **Get** | Pulls the rail's current position into the Position field — useful for confirming where it is before moving it further. |
| **Move** | Press and hold to move the rail to the target Position at the set Speed. |
| **Jog Control (X-/X+)** | Manually drive the rail in either direction at the set Speed. **Reverse** button flips which direction X-/X+ move. |
| **Apply** | Adds a **Move Rail** command to the program. |

## How the command executes
When a Move Rail step runs, the **parent command completes first**, and then the sub-command (the rail move) executes after it — the rail move is not simultaneous with the parent step.
