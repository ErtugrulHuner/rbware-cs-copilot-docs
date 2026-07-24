# ESAB EDGE R

_Source: RBW ESAB EDGE R setup notes._

Communication protocol: **Modbus TCP** (Fieldbus). See [Welding Machine Interface](/communication-interfaces/welding-machine-interface) for how this compares to other brands.

## Cabling on the machine

![ESAB EDGE R cabling — WiFi dongle port and Modbus TCP Ethernet port](/esab/edge-r-cabling.jpg)

The EDGE R has two relevant connection points on the front panel:
- **ESAB WiFi dongle port** — for the ESAB web interface (esab.local)
- **Modbus TCP Ethernet cable port** — for robot communication

## Using the web interface alongside robot communication

You can use the **same Ethernet cable** to connect to the `esab.local` welder web interface — but doing so will cause the robot to **lose connection** while that cable is used for the web interface instead.

To use both the web interface and Modbus TCP **at the same time**, there are two options:

1. **(Suggested)** Use a wireless dongle for the ESAB web interface, and keep the Ethernet cable dedicated to Modbus TCP.
2. Use two Ethernet cables — one for the ESAB web interface, one for Modbus TCP — both connected to the router. Since the router's LAN ports are limited, this requires an **unmanaged switch** connected to the router's LAN ports to get at least 4 more ports; connect the ESAB web interface cable to the same router through the switch.

## Machine setup

### Robot setup → Fieldbus

![Robot setup screen showing Fieldbus setup (Modbus/TCP) and Direct I/O status signals](/esab/edge-r-robot-setup.png)

- **Fieldbus setup**: `Modbus/TCP`
- **Device map**: `Standard PLUS (40 Bytes)`
- **Direct I/O status signals**:
  - Collision detection: `Active HIGH`
  - Touch sense: `Active HIGH`

### Weld system setup

![Weld system setup screen](/esab/edge-r-weld-system-setup.png)

| Field | Value |
|---|---|
| Weld busy | Pre flow, arc on and post flow |
| Torch remote button F1 | Wire inching – forward |
| Torch remote button F2 | Wire inching – reverse |
| Pull wire drive unit | Off |
| Water cooling | Auto |
| Gas purge after air clean → Gas purge | Auto |
| Gas purge after air clean → Time | 7.0 s |
| Wire inching forward speed | 9.0 m/min |
| Wire inching forward length | 15 mm |
| Wire retract | Off |
| Retract delay | 1.0 s |
| Retract length | 20 mm |
| Power source name | RBW-Esab |
| Wire feeder name | RoboFeed |

### General setup

![General setup screen](/esab/edge-r-general-setup.png)

| Field | Value |
|---|---|
| Language | English (GB) |
| Unit of measurement | Metric |
| Theme | Dark |

### Fieldbus network settings

![Fieldbus IP settings screen — Modbus/TCP protocol, IP address, subnet mask, gateway](/esab/edge-r-fieldbus-ip-settings.png)

- **Protocol**: Modbus TCP
- **Automatic (DHCP) configuration**: off (static IP used)
- Set **IP number**, **Subnet mask**, and **Default gateway** to match the RBW network.

## RBW suggested setup

- Use the **ESAB WiFi dongle** for the ESAB welder web interface (screen).
- Use an **Ethernet cable** to the router's LAN port for Modbus TCP.
- Once the wireless dongle is connected to the same router the robot is connected to, open `esab.local` in a browser from the same tablet used for RB-X.
- Keep **RB-X** and the **ESAB web interface** open separately (in two windows/tabs) so the customer can access both the welder panel and RB-X easily at the same time.
