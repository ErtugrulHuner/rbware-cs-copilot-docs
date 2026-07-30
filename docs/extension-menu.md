# RB-X Software Guide (RB-MIG UI Manual)

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` — RB-X software UI manual (Latest Ver 2.1.0, 2026/3/25)._

This guide is split into sections. Start here for the app overview and connection steps, then jump to the section you need:

- **This page** — Program buttons/menus overview, Robot connection
- [Main Screen (Jog Control & Program View)](/software/main-screen.md)
- [Settings Menu (System Setup, TCP, Welding Machine Setup)](/software/settings-menu.md)
- [Extension Menu](/software/extension-menu.md) — Weaving, Shift, Jump, D/A Output, Repeat, etc.
- [Tool Menu](/software/tool-menu.md) — RB-Log, I/O Tester, Program Scheduler
- [Teaching Methods (Move L / Move C)](/software/teaching-methods.md)

## 1. Program Buttons and Menus (Main Screen Overview)
The RB-MIG UI is broadly split into four areas:
1. **Jog Control** — direct robot control. See [Main Screen](/software/main-screen.md).
2. **Program View** — the taught program and its properties. See [Main Screen](/software/main-screen.md).
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
