# Batch Weld Mod

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-6, Latest Update 2026/3/25)._

Batch Weld Mod applies **one set of weld condition values** to every **Weld Start** and **Weld End** command within a chosen line range, all at once — instead of opening and editing each Weld Start/End command individually.

![Batch Weld Mod settings screen — range and Weld Start/End parameters](/feature-guides/batch-weld-mod-settings.png)

## How to use
1. **Extension menu > Batch Weld Mod**.
2. Enter the **Range** (Start / End line numbers). The app shows how many Weld Start and Weld End commands fall inside that range.
3. Fill in the **Weld Start Parameters** (Pre Wait, Robot Speed, Curr., Volt., etc.) and switch to the **End** tab to fill in the End parameters (Post Wait, etc.).
4. Press **Apply**. All Weld Start / Weld End commands in the specified range are updated to the values you entered.

## When this is useful
Handy after teaching a long multi-segment weld and realizing the current or speed needs to change across the whole program (or a large section of it) — one edit instead of dozens.
