# Data Transfer Feature

_Source: `RB-X_Data_Transfer_Guide_ENG.md` (Ver 2.0.3, updated 2026-02-20). Korean version: `RB-X_Data_Transfer_Guide_KOR.md`._

## What it does
Transmits data about a welding program run to a specific server. **The receiving server is not provided by RB-Ware/Rainbow — the customer must prepare it separately.**

## Supported only in Analyst mode
Enable via **Settings > System Settings > Use Data Transfer**.
- Default Mini PC IP for the data-transmission role: **192.168.0.210** (the accompanying Mini PC ships pre-set to this IP).
- The receiving server must be a **UDP socket server**. Example test values: IP **192.168.0.14**, Port **9999**.
- The network must use the **192.168.0.xxx** band.

## Data formats transmitted
| String | Trigger | Fields (pipe-separated) |
|---|---|---|
| `complete` | Program finished playing | A \| B \| C \| D \| E \| F |
| `stopplay` | Program ended mid-playback | A \| B \| C \| D \| E \| F |

Field meanings:
- **A** — file name played.
- **B** — total program runtime.
- **C** — total time welding was actually performed within the program (`no` if No-Arc was used).
- **D** — measured current value (analog input 0) during welding, sampled in 0.5s increments, ×100.
- **E** — measured voltage value (analog input 1) during welding, sampled in 0.5s increments and averaged, ×10.
- **F** — cumulative total number of program runs (accumulates regardless of file name).

**Example:** `complete|test|0:00:09.581577|6.69388|300.0|20.0|37` = execution completed | file name "test" | total runtime | weld time | avg current | avg voltage | 37 total executions.

## Execution
Once configured, data transmits automatically whenever the welding program runs — no manual trigger needed. Transmission happens when the program ends.

See also [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) for the Mini PC's separate, safety-critical role (cutting the weld signal in an emergency) — the two roles use the same physical device but are functionally distinct.
