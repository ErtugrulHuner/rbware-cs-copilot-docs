# Teaching Methods (Move L / Move C)

_Source: `RB-X_v2_1_0_User_Manual_ENG.md` (Sections 7–8, Latest Ver 2.1.0, 2026/3/25). Part of the [RB-X Software Guide](/software/rb-x-guide.md)._

## Move L (straight line)
- **Outside a welding section**: robot stops precisely at each point, brief pause, then continues — good for general stopovers or safety pauses.
- **Inside a welding section**: smooth continuous movement at constant speed, automatic blending, no stop at intermediate points. To force a stop at a specific point mid-weld, insert a `Wait 0.1` command right after that point.

## Move C (curve)
Recommended **only within a welding section**.
1. Starting point registered as **Move L**.
2. All following curve points registered as **Move C** (minimum 2 points total, e.g. L-C-C-C or L-C-C-C-C).
3. **Weld Start** goes right after the starting point.
4. **Weld End** goes right after the last **Move C**.
