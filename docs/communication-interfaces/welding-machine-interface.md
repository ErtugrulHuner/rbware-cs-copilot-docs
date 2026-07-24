# Welding Machine Interface

_Source: RBW welding machine integration compatibility table._

## Why this matters

RBW systems communicate with the welding power source using a specific **connection type** and **communication protocol**, which differs by brand and sometimes by model. Before a system ships or a new integration is configured, the correct communication module and protocol must be confirmed against the table below — sending or configuring the wrong protocol (for example, a Modbus TCP module for a machine that requires Ethernet/IP) will prevent the robot and welding machine from communicating correctly, and will require the correct module to be identified and swapped in afterward.

**Always confirm the exact welder brand and model with the customer before shipment, and cross-check it against this table.**

## Communication types explained

| Type | Description |
|---|---|
| **Fieldbus – Ethernet/IP** | An industrial Ethernet protocol. The welding machine and robot control box exchange structured data (start/stop, current, voltage, status) over a standard Ethernet connection. |
| **Fieldbus – Modbus TCP** | Another industrial Ethernet-based protocol, using a different data/register structure than Ethernet/IP. Not interchangeable with Ethernet/IP — the two require different configuration on both the robot and the welding machine side. |
| **I/O (Advanced)** | Communication over discrete digital/analog I/O lines, typically through a dedicated interface module (e.g. an RI I/O compatibility box or SAM-style adapter) that exposes more signals than a basic remote-control connection (e.g. current/voltage feedback, touch sensing, gas check). |
| **I/O (Standard)** | Basic communication via the welding machine's remote control plug or trigger switch — arc-on/off and similar basic signals only, no advanced feedback. |

## Supported welding machines

| Brand | Origin | Model | Connection Type | Protocol |
|---|---|---|---|---|
| ESAB | Europe | Aristo 500ix | Fieldbus | Ethernet/IP |
| ESAB | Europe | Aristo Mig 4004i | Fieldbus | Ethernet/IP |
| ESAB | Europe | EDGE R | Fieldbus | Modbus TCP |
| Kemppi | Finland | X5 | Fieldbus | Modbus TCP |
| Kemppi | Finland | Master M | Fieldbus | Modbus TCP |
| Fronius | Austria | TPS/i | Fieldbus | Modbus TCP |
| Fronius | Austria | TransSteel (RI I/O Compatibility) | I/O (Advanced) | I/O (Advanced) |
| EWM | Germany | Phenix XQ, Titan XQ | Fieldbus | **Ethernet/IP** |
| Kolarc | Turkey | XM Series | Fieldbus | Modbus TCP |
| Parweld | Turkey | APT+ | Fieldbus | Modbus TCP |
| Weco | Italy | PowerPulse | Fieldbus | Modbus TCP |
| MegMeet | China | MegWave | Fieldbus | Ethernet/IP |
| MegMeet | China | Artsen II Series | I/O (Advanced) | I/O (Advanced) |
| Aotai | China | Various | I/O (Advanced) | I/O (Advanced) |
| GYS | France | Neopulse Series (with SAM-1A module) | I/O (Advanced) | I/O (Advanced) |
| Lincoln Electric | United States | Any with a Remote Control Plug | I/O | I/O |
| Miller | United States | Any with a Remote Control Plug | I/O | I/O |
| REHM | Germany | Any with a Remote Control Plug | I/O | I/O |
| OTC Daihen | Japan | Any with a Remote Control Plug | I/O | I/O |
| Others | — | Any welder with a Remote Control Plug or trigger switch | I/O | I/O |


## Planned support (not yet available)

| Brand | Origin | Model | Connection Type | Protocol |
|---|---|---|---|---|
| Miller | United States | AutoDeltaweld | Fieldbus | Modbus TCP |
| GYS | France | *(model TBD)* | Fieldbus | Modbus TCP |

These integrations are planned but not yet released — do not commit to a delivery date for them without checking current status first.
