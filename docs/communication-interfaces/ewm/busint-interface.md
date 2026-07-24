# EWM — BUSINT Interface

_Source: EWM operating instructions — BUSINT X11 (099-008225-EW501) and BUSINT XQ 4.0 (099-004526-EW501)._

Communication protocol: **Fieldbus – EthernetIP**. See [Welding Machine Interface](/communication-interfaces/welding-machine-interface) for how this compares to other brands.

## What BUSINT is

**BUSINT** is EWM's fieldbus interface for digital welding power sources. It bridges the welding machine's internal system bus to an external fieldbus network, using an interchangeable module matched to the fieldbus protocol in use. The interface supports cyclical data communication as a communication adapter and, on the EthernetIP module, the "Common Industrial Protocol" (CIP).

## Interface versions

| Version | Compatible machines |
|---|---|
| **BUSINT X11** | Phoenix, alpha Q, Phoenix XQ, Titan XQ |
| **BUSINT XQ 4.0** | Titan XQ, Phoenix XQ |

BUSINT X11 has extensive control options fully supported by the welding parameter software **PC300.NET**; using PC300.NET is recommended for setup wherever possible.

## Available fieldbus module types

BUSINT is modular — the specific fieldbus protocol used depends on which interface module is fitted. Both versions support a similar range of protocols:

| Module | Notes |
|---|---|
| Interbus-S (optical fibre) | BUSINT X11 only |
| CANopen | — |
| CAN DeviceNet | — |
| Profibus | — |
| Profinet | — |
| **EthernetIP** | On BUSINT X11, EthernetIP and Modbus/TCP are combined in a single module. On BUSINT XQ 4.0, EthernetIP is its own dedicated module, separate from Modbus. |
| Modbus / Modbus TCP | See note above — combined with EthernetIP on X11, separate module on XQ 4.0 |
| EtherCAT | Uses the CANopen over Ethernet standard (DS301 v4.02) as its application interface |

## EthernetIP module

![BUSINT XQ 4.0 EthernetIP module — display elements](/ewm/busint-xq4-ethernetip-module.jpg)

### Module specification

The EthernetIP module supports cyclical data communication as a communication adapter and also supports the "Common Industrial Protocol" (CIP).

### Connection

The module connects via a standard RJ-45 connector. It features a dual switch with equal connections — both port 1 and port 2 can be used for connection, allowing line structures to be created.

### LED indicators

**Network status LED:**

| Signal | Description |
|---|---|
| Off | Offline, no network provision |
| Green | Online, one or more existing connections |
| Green, short flashing | Online, no existing connection |
| Red | Duplicate IP address |
| Red, short flashing | One or more connections expired |

**Module status LED:**

| Signal | Description |
|---|---|
| Off | No function |
| Green | Normal operation, scanner in RUN state |
| Green, short flashing | No configuration, scanner in idle mode |
| Red | Scanner in Exception mode |
| Red, short flashing | Different configuration |

**Connection / activity LED (per port):**

| Signal | Description |
|---|---|
| Off | No connection |
| Green | Connection exists (100 Mbit), no communication |
| Flickering green | Data communication (100 Mbit) |
| Yellow | Connection exists (10 Mbit), no communication |
| Flickering yellow | Data communication (10 Mbit) |

### Setting the IP address

One way of setting the IP address is via the module's address/DIP switch. Using this method, the address range is limited to the `192.168.0.X` network, where X is the value encoded by the switch (BCD-coded across the individual switch positions, values 1, 2, 4, 8, 16, etc. — the last address octet is the sum of the activated switch values).

Alternatively, the **Ipconfig** tool searches the network for BUSINT interfaces without needing a network address set on the module first. Detected interfaces are listed (BUSINT X11 units identify themselves as "EWM BUSINT X11"); double-click the target module to configure it.

## BUSINT X11 — combined EthernetIP / Modbus/TCP module

On BUSINT X11, EthernetIP and Modbus/TCP share a single physical module rather than separate modules. The module's Network status LED behavior differs depending on which protocol is active:

**EtherNet/IP mode:**

| Signal | Description |
|---|---|
| Off | No power or no IP address assigned |
| Green | Online, one or more connections established |
| Green, flashing | Online, no connections established |
| Red | Duplicate IP Address |
| Red, flashing | One or more connections have expired |

**Modbus/TCP mode:**

| Signal | Description |
|---|---|
| Off | No connections established |
| Green, flashing | Connections are established |

![BUSINT X11 combined EthernetIP/Modbus module — display elements](/ewm/busint-x11-ethernetip-module.jpg)
