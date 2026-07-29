# Fronius — TPS/i (RI FB Inside/i, Modbus TCP)

_Source: Fronius operating instructions — RI FB Inside/i, RI MOD/i CC-M40 Modbus TCP-2P (42,0410,1918)._

Communication protocol: **Fieldbus – Modbus TCP**. See [Welding Machine Interface](/communication-interfaces/welding-machine-interface) for how this compares to other brands.

## Overview

**RI FB Inside/i** is the robot interface built into Fronius TPS/i-series power sources. **RI MOD/i CC-M40 Modbus TCP-2P** is the bus module fitted to that interface for Modbus TCP communication with the robot.

## Connections and indicators on the bus module

### Pin assignment — RJ45 Ethernet connection socket

| Pin | Signal |
|---|---|
| 1 | TX+ |
| 2 | TX- |
| 3 | RX+ |
| 6 | RX- |
| 4, 5, 7, 8 | Not normally in use; connected to each other for signal integrity and terminated via a filter circuit on the ground conductor (PE) |

The module has two RJ45 Ethernet connection sockets (port 1 and port 2).

### Indicators

| LED | Meaning |
|---|---|
| NS (Network Status) | Network-level connection state |
| MS (Module Status) | Module operating state |
| Connection/Activity (port 1) | Link + traffic state for port 1 |
| Connection/Activity (port 2) | Link + traffic state for port 2 |

**LED NS (Network Status):**

| Status | Meaning |
|---|---|
| Off | No supply voltage or no IP address |
| Steady green | Module is in Process Active status or on standby |
| Flashing green | Waiting for connections |
| Steady red | Duplicated IP address, fatal error |
| Flashing red | Timeout in Process Active status |

**LED MS (Module Status):**

| Status | Meaning |
|---|---|
| Off | No supply voltage |
| Steady green | Normal operation |
| Steady red | Main error (exception state, fatal error, etc.) |
| Flashing red | Smaller errors in diagnosis object / IP conflict |

**LED Connection/Activity (per port):**

| Status | Meaning |
|---|---|
| Off | No connection, no activity |
| Steady green | Connection established (100 Mbit/s) |
| Flickering green | Activity (100 Mbit/s) |
| Steady yellow | Connection established (10 Mbit/s) |
| Flickering yellow | Activity (10 Mbit/s) |

## Data transfer properties

| Property | Value |
|---|---|
| Transmission technology | Ethernet |
| Medium | 4×2 Twisted-Pair copper cable — Category 3 (10 Mbit/s) or Category 5 (100 Mbit/s) |
| Transmission speed | 10 Mbit/s or 100 Mbit/s |
| Bus connection | Ethernet RJ45 |

### Configuration parameters

With some robot control units, it may be necessary to enter these parameters so the bus module can communicate with the robot:

| Parameter | Value |
|---|---|
| Vendor Name | Fronius International GmbH |
| Product Code | 0301hex (769dec) |
| Major / Minor Revision | V1.00 |
| Vendor URL | www.fronius.com |
| Product Name | fronius-fb-inside-modbus-2p |
| Model Name | Fronius Modbus-TCP-2-Port |
| User Application Name | Fronius welding controller for the TPS/i series with Modbus-TCP-2-Port |

## Configuring the robot interface

### Function of the DIP switch

The DIP switch on the RI FB Inside/i robot interface sets:
- the process data width
- the node address / IP address

All DIP switch positions are factory-set to **OFF**, equivalent to binary value 0. The **ON** setting is equivalent to binary value 1.

### Configuration of the process data width

The amount of data transferred is defined by the process data width. How much data can be transferred depends on the robot control unit, the number of power sources, and the type of power sources ("Intelligent Revolution" or "Digital Revolution" / Retro Fit).

| DIP 8 | DIP 7 | Configuration |
|---|---|---|
| OFF | OFF | Standard Image — 320 bits |
| OFF | ON | Economy Image — 128 bits |
| ON | OFF | Retro Fit — amount depends on bus module |
| ON | ON | Unused |

(DIP switches 1–6 are not used for process data width.)

### Setting the node address using the DIP switch

The node address is set using DIP switch positions 1 to 6, in binary format, giving a setting range from 1 to 63 in decimal.

| DIP 6 | DIP 5 | DIP 4 | DIP 3 | DIP 2 | DIP 1 | Node address |
|---|---|---|---|---|---|---|
| OFF | OFF | OFF | OFF | OFF | ON | 1 |
| OFF | OFF | OFF | OFF | ON | OFF | 2 |
| OFF | OFF | OFF | OFF | ON | ON | 3 |
| ON | ON | ON | ON | ON | OFF | 62 |
| ON | ON | ON | ON | ON | ON | 63 |

> **Note:** Whenever the DIP switch settings are changed, the interface must be restarted for the new settings to take effect. Restart = disconnect and reconnect the power supply, or perform the equivalent function on the power source website.

### Setting the IP address

When delivered, node address 0 is set on the DIP switch, corresponding to:
- IP address: `0.0.0.0`
- Subnet mask: `0.0.0.0`
- Default gateway: `0.0.0.0`

There are two ways to set the IP address:
1. **Via the DIP switch**, in the range `192.168.0.xx` (where `xx` = DIP switch position, 1–63).
2. **Via the power source website**, if the DIP switch is set to 0.

> **Note:** If the IP address is later set to greater than 0 using the DIP switch, the corresponding IP address in the range 1–63 is applied the next time the robot interface restarts — this overwrites any node address previously set via a configuration tool.

> **Note:** To reset all network settings to factory defaults: reset all DIP switches to 0, or use the **Restore factory settings** button on the power source website.

### Power source website

The power source has its own website, reachable via its IP address once integrated into a network. Depending on system configuration and software upgrades, it includes: Overview, Update, Screenshot, Backup & Restore, Function Packages, Job-Data, Synergic lines overview, and **RI FB INSIDE/i**.

**To access it:**
1. On the power source: **Default settings → System → Information** — note the power source IP address.
2. Enter the IP address in a browser's address bar.
3. Enter username and password. Factory setting: username `admin`, password `admin`.

## Input and output signals

### Data types

- **UINT16** (unsigned integer) — range 0 to 65535
- **SINT16** (signed integer) — range -32768 to 32767

**Conversion examples:**
- Positive value (SINT16): desired wire feed speed × factor → `12.3 m/min × 100 = 1230dec = 04CEhex`
- Negative value (SINT16): desired arc correction × factor → `-6.4 × 10 = -64dec = FFC0hex`

### Modbus starting address

- Input signals: `0000hex`
- Output signals: `0800hex`

### Input signals (from robot to power source)

Available from firmware V1.6.4 of the RI FB Inside/i onward.

| Bit address | Signal | Activity | Data type | Range / Factor |
|---|---|---|---|---|
| 0 | Welding Start | Rising | — | — |
| 1 | Robot ready | High | — | — |
| 2–6 | Working mode Bit 0–4 | High | — | See Working mode range below |
| 8 | Gas on | Rising | — | — |
| 9 | Wire forward | Rising | — | — |
| 10 | Wire backward | Rising | — | — |
| 11 | Error quit | Rising | — | — |
| 12 | Touch sensing | High | — | — |
| 13 | Torch blow out | Rising | — | — |
| 16 | Welding Simulation | High | — | — |
| 17 | Synchro pulse on | High | — | — |
| 22 | Wire brake on | High | — | — |
| 23 | Torchbody Xchange | High | — | — |
| 25 | Teach mode | High | — | — |
| 56–63 | ExtInput1–8 => OPT_Output 1–8 | High | — | — |
| 64–71 (Word 8) | Welding characteristic- / Job number | — | UINT16 | 0 to 65535, factor 1 |
| 80–95 (Words 10–11) | Wire feed speed command value | — | SINT16 | -327.68 to 327.67 [m/min], factor 100 |
| 96–111 (Words 12–13) | Arclength correction | — | SINT16 | -10.0 to 10.0, factor 10 |
| 112–127 (Words 14–15) | Pulse-/dynamic correction | — | SINT16 | -10.0 to 10.0, factor 10 |
| 128–143 (Words 16–17) | Wire retract correction | — | UINT16 | 0.0 to 10.0, factor 10 |
| 160–175 (Words 20–21) | Process controlled correction | — | — | See Process controlled correction range below |

**Working mode range:**

| Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 | Description |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | Internal parameter selection |
| 0 | 0 | 0 | 0 | 1 | Special 2-step mode characteristics |
| 0 | 0 | 0 | 1 | 0 | Job mode |
| 0 | 1 | 0 | 0 | 0 | 2-step mode characteristics |

**Process controlled correction range:**

| Process | Signal | Data type | Setting range | Unit | Factor |
|---|---|---|---|---|---|
| PMC | Arc length stabiliser | SINT16 | -327.8 to +327.7 (0.0 to +5.0) | Volts | 10 |

### Output signals (from power source to robot)

Available from firmware V1.6.4 of the RI FB Inside/i onward.

| Bit address | Signal | Activity | Data type | Range / Factor |
|---|---|---|---|---|
| 0 | Heartbeat Powersource | High/Low, 1 Hz | — | — |
| 1 | Power source ready | High | — | — |
| 3 | Process active | High | — | — |
| 4 | Current flow | High | — | — |
| 5 | Arc stable- / touch signal | High | — | — |
| 6 | Main current signal | High | — | — |
| 7 | Touch signal | High | — | — |
| 8 | Collisionbox active | Low | — | 0 = collision or cable break |
| 9 | Robot Motion Release | High | — | — |
| 10 | Short circuit timeout | High | — | — |
| 15 | Torch body gripped | High | — | — |
| 16 | Command value out of range | High | — | — |
| 17 | Correction out of range | High | — | — |
| 48–52 | Process Bit 0–4 | High | — | See Welding process range below |
| 56–63 | ExtOutput1–8 <= OPT_Input1–8 | High | — | — |
| 64–71 (Word 8) | Welding voltage | — | UINT16 | 0.0 to 655.35 [V], factor 100 |
| 80–95 (Words 10–11) | Welding current | — | UINT16 | 0.0 to 6553.5 [A], factor 10 |
| 96–111 (Words 12–13) | Wire feed speed | — | SINT16 | -327.68 to 327.67 [m/min], factor 100 |
| 112–127 (Words 14–15) | Actual real value for seam tracking | — | UINT16 | 0 to 6.5535, factor 10000 |
| 128–143 (Words 16–17) | Error number | — | UINT16 | 0 to 65535, factor 1 |
| 160–175 (Words 20–21) | Motor current M1 | — | SINT16 | -327.68 to 327.67 [A], factor 100 |
| 176–191 (Words 22–23) | Motor current M2 | — | SINT16 | -327.68 to 327.67 [A], factor 100 |
| 192–207 (Words 24–25) | Motor current M3 | — | SINT16 | -327.68 to 327.67 [A], factor 100 |

**Welding process range:**

| Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 | Description |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | No process or internal parameter selection |
| 0 | 0 | 0 | 0 | 1 | MIG/MAG Pulse |
| 0 | 0 | 0 | 1 | 0 | MIG/MAG Standard |
| 0 | 0 | 0 | 1 | 1 | MIG/MAG PMC |
| 0 | 0 | 1 | 0 | 0 | MIG/MAG LSC |
| 0 | 0 | 1 | 0 | 1 | MIG/MAG Standard manual |
| 0 | 0 | 1 | 1 | 0 | Electrode |
| 0 | 0 | 1 | 1 | 1 | TIG |

## Modbus — general information

### Protocol description

The MODBUS ADU (Application Data Unit) is built by the client that initiates the transaction. The function code field tells the server what action to carry out; some function codes are supplemented with sub-function codes when multiple actions are needed. A properly received request with no errors returns the requested data; if an error occurs, the response is an **exception response** containing an exception code.

### Data encoding

MODBUS uses big-endian representation: when a numeric value larger than one byte is transmitted, the most significant byte is sent first. Example: a 16-bit register value `1234hex` is sent as `12hex` then `34hex`.

### Application Data Unit (ADU)

Describes how a MODBUS request/response is encapsulated over a MODBUS UDP network (MPAP header + function code + data). All MODBUS/UDP ADUs are sent via UDP on the registered **port 502**.

| Field | Length | Description |
|---|---|---|
| Transaction Identifier | 2 bytes | Used for transaction mapping. The server copies the request's Transaction Identifier into the response. |
| Protocol Identifier | 2 bytes | Used for multiplexing. `0` = Modbus protocol. |
| Length | 2 bytes | Number of following bytes, including Unit Identifier, function code, and data field. |
| Unit Identifier | 1 byte | Used for routing — typically for communication with a serially connected Modbus/Modbus+ slave via a gateway. Value is set by the client and echoed back unchanged by the server. |

## Modbus — functions

### 03dec (03hex) — Read Holding Registers

Reads the contents of a contiguous block of holding registers (limited to 1–4 registers in the Special Data area). Registers are addressed starting at zero (register 1–16 is addressed as 0–15). Response data is packed as two bytes per register, high-order byte first.

**Request:** Function code (1 byte, `03hex`) · Starting Address (2 bytes) · Quantity of Registers (2 bytes, 1–125 / `7Dhex`)

**Response:** Function code (1 byte, `03hex`) · Byte Count (2 × N) · Register value (N × 2 bytes)

**Error:** Error code (1 byte, `83hex`) · Exception code (1 byte, `01`/`02`/`03`/`04`)

**Example — reading register `E011hex` (Gas preflow):**

| Field | Request | Response |
|---|---|---|
| Transaction Identifier | `00 01` | `00 01` |
| Protocol Identifier | `00 00` | `00 00` |
| Length | `00 06` | `00 05` |
| Unit Identifier | `00` | `00` |
| Function code | `03` | `03` |
| Starting Address | `00 11` | — |
| No. of Registers | `00 01` | — |
| Byte Count | — | `02` |
| Register value | — | `08 98` (= 2200dec) |

### 06dec (06hex) — Write Single Register

Writes a single holding register. The normal response echoes the request after the register has been written.

**Request / Response:** Function code (1 byte, `06hex`) · Register Address (2 bytes) · Register Value (2 bytes)

**Error:** Error code (1 byte, `86hex`) · Exception code (1 byte)

**Example — writing `898hex` (2200dec) to register `E011hex` (Gas preflow):**

| Field | Request | Response |
|---|---|---|
| Transaction Identifier | `00 01` | `00 01` |
| Length | `00 06` | `00 06` |
| Function code | `06` | `06` |
| Register Address | `00 11` | `00 11` |
| Register Value | `08 98` | `08 98` |

### 16dec (10hex) — Write Multiple Registers

Writes a block of contiguous registers (1–20). Data is packed as two bytes per register. The normal response returns the function code, starting address, and quantity of registers written.

**Request:** Function code (1 byte, `10hex`) · Starting Address (2 bytes) · Quantity of Registers (2 bytes) · Byte Count (1 byte, 2×N) · Register Values (N×2 bytes)

**Response:** Function code (1 byte, `10hex`) · Starting Address (2 bytes) · Quantity of Registers (2 bytes, 1–123 / `7Bhex`)

**Error:** Error code (1 byte, `90hex`) · Exception code (1 byte)

**Example — writing two registers (`F00Bhex`–`F00Chex`):**

| Field | Request | Response |
|---|---|---|
| Length | `00 11` | `00 11` |
| Function code | `10` | `10` |
| Starting Address | `00 0B` | `00 0B` |
| Quantity of Registers | `00 02` | `00 02` |
| Byte Count | `04` | — |
| Register Values | `7F FF` `7F FF` | — |

### 23dec (17hex) — Read/Write Multiple Registers

Performs a write then a read in a single transaction. Holding registers are addressed starting at zero.

**Request:** Function code (1 byte, `17hex`) · Read Starting Address (2 bytes) · Quantity to Read (2 bytes) · Write Starting Address (2 bytes) · Quantity to Write (2 bytes) · Write Byte Count (1 byte, 2×N) · Write Registers Value (N×2 bytes)

**Response:** Function code (1 byte, `17hex`) · Byte Count (1 byte, 2×N) · Read Registers Value (N×2 bytes)

**Error:** Error code (1 byte, `97hex`) · Exception code (1 byte)

**Example — reading six registers while writing three registers:**

| Field | Request | Response |
|---|---|---|
| Length | `00 11` | `00 0F` |
| Function code | `17` | `17` |
| Read Starting Address | `01 00` | — |
| Quantity to Read | `00 06` | — |
| Write Starting Address | `00 00` | — |
| Quantity to Write | `00 03` | — |
| Write Byte Count | `06` | — |
| Write Registers Value | `01 FA` `02 FB` `03 FC` | — |
| Byte Count | — | `0C` |
| Read Registers Value | — | `00 FE` `0A CD` `00 01` `00 03` `00 0D` `00 FF` |
