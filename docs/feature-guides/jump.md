# Jump

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Extension Menu 5-4, Latest Update 2026/3/25)._

Jump skips program flow directly to a specific line or label. Its main real-world use is building a **loop** — repeating a block of steps without copy-pasting them.

## Building a loop with Jump
A loop needs two Jump commands:
- **Jump Here** — placed on the line where the repeated block **starts**.
- **Jump To** — placed on the line where the repeated block **ends**; it points back to the "Here" line's label number.

**Example layout:**
```
1  Jump Here, 123
2  Move L, ...
3  Move L, ...
4  Jump To, 123
```
Everything between line 1 and line 4 repeats back to line 1 each time the program reaches the `Jump To` command.

![Example program list showing a Jump Here / Jump To loop](/feature-guides/jump-loop-example.png)

## How to use
1. **Extension menu > Jump**.
2. Choose **Here** (mark this line as the loop start / target) or **To** (mark this line as a jump that goes to a target location).
3. Enter the matching **Target Location** (for To) or the location this "Here" represents.
4. Press **Apply**.

| Jump To dialog | Jump Here dialog |
|---|---|
| ![Jump To dialog — enter Target Location](/feature-guides/jump-to-dialog.png) | ![Jump Here dialog — enter Arrival Location](/feature-guides/jump-here-dialog.png) |

## Caution
If a program containing a Jump command is run using **Custom Start** (starting from a specific line instead of the beginning), the jump may not behave as expected depending on exactly which line was chosen as the start point. Test carefully before relying on Custom Start together with Jump loops.
