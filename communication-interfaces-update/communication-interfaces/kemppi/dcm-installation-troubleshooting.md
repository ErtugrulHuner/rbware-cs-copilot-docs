# Kemppi — X5 FastMig / Master M (DCM)

_Source: RBW – Kemppi Welding Machine Connection Troubleshooting Guide, v1.1 (March 2026)._

Communication protocol: **Modbus TCP** (Fieldbus), via the Kemppi **Digital Connectivity Module (DCM)**. See [Welding Machine Interface](/communication-interfaces/welding-machine-interface) for how this compares to other brands.

## 1. System overview

This guide covers the connectivity setup and troubleshooting procedures for the communication link between the Kemppi welding machine and the Rainbow Robotics cobot (RB-X series), facilitated by the **MiniPC (RB-GATEWAY)** through a local area network (LAN) router.

The MiniPC (RB-GATEWAY) acts as the **central server** in this architecture. All other devices — the Kemppi welding machine, the robot controller, and any peripherals — operate as **clients** on the same LAN. Communication between the MiniPC and the Kemppi welding machine is established over **Modbus TCP** via the Kemppi DCM.

### Network architecture — component roles

| Component | Role | Description |
|---|---|---|
| MiniPC (RB-GATEWAY) | Server | Acts as the central communication server. Manages Kemppi connection via Modbus TCP. Handles reconnection logic. |
| Kemppi Welding Machine | Client | Connected to the router via Ethernet. Communicates with MiniPC through the DCM module over Modbus TCP. Must be configured with fixed IP: `192.168.0.10`. |
| Router (LAN) | Network Hub | Provides the local area network (LAN) connecting all devices. All Ethernet cables route through the router. |
| Robot (RB-X) | Client | Rainbow Robotics cobot. Receives welding commands and displays Kemppi connection status indicator (green/red). |
| DCM Module | Interface Bridge | Bridges the Kemppi welding machine bus to Modbus TCP for robot communication. DCM v1 is configured via the Kemppi Cobotics App; DCM 2.0 is configured via a built-in WebUI. |

## 2. DCM configuration

Before attempting any connection, the DCM module on the Kemppi welding machine must be correctly configured. Regardless of DCM version, **two parameters are critical** for the RBW integration:

- The DCM IP address must be set to **`192.168.0.10`**
- The watchdog timeout must be set to **`3000 ms`**

> ⚠ **Critical — both versions.** Regardless of DCM version, the IP address must be `192.168.0.10` and the watchdog timeout must be `3000 ms`. If either setting is incorrect, the MiniPC will fail to connect or will not detect connection failures.

### 2.1 DCM Version 1 setup

DCM v1 settings are configured exclusively through the **Kemppi Cobotics mobile application** (Android). The app connects to the DCM module via **Bluetooth**. DCM v1 supports Modbus TCP natively; for EtherNet/IP, an external fieldbus converter is required.

**Compatible equipment (DCM v1):** X5 FastMig (Auto, AP, APC) with firmware 1.46 or later. Master M 353, 355, 358 with firmware 1.12 or later.

**DCM v1 required settings:**

| Parameter | Required Value | Kemppi Default | Notes |
|---|---|---|---|
| Modbus TCP Interface | ON | OFF | Must be enabled for any robot communication. |
| DCM IP Address | 192.168.0.10 | 192.168.0.10 | Mandatory. MiniPC will not connect if a different IP is assigned. |
| Subnet Mask | 255.255.255.0 | 255.255.255.0 | Standard subnet for /24 network. |
| Watchdog Timeout | 3000 ms | 0 (OFF) | Must **not** be left OFF. Enables connection health monitoring. |
| Configuration Tool | Kemppi Cobotics App | — | Android mobile app. Connects to DCM via Bluetooth. |

**DCM v1 setup procedure:**

1. Install the **Kemppi Cobotics** application from the Google Play Store on an Android device.
2. Power on the Kemppi welding machine and ensure the DCM green LED (B) is lit and the blue LED (C) blinks.
3. Open the Kemppi Cobotics app. The app will scan for available DCM devices via Bluetooth.
4. Select the target DCM from the device list. Press the function button on the DCM briefly to activate the beacon if multiple DCMs are present.
5. Enable **Modbus TCP Interface** (set to ON).
6. Verify the **DCM IP Address** is `192.168.0.10` (this is the default for DCM v1).
7. Set **Watchdog Timeout** to `3000 ms` (default is 0/OFF — must be changed).
8. Connect the Ethernet cable from the DCM to the LAN router.

### 2.2 DCM Version 2.0 setup

DCM 2.0 replaces the Kemppi Cobotics mobile app with a **built-in web-based UI (WebUI)** accessible from any device with a browser. DCM 2.0 supports both Modbus TCP and EtherNet/IP natively, without requiring an external converter. Configuration is performed through WLAN (access point or client mode) or via the Ethernet port (LAN 1).

**Compatible equipment (DCM 2.0):** X5 FastMig (Auto, AP, APC) with firmware 1.58 SP4 or later. Master M 353, 355, 358 with firmware 1.24 SP3 or later. **Note:** DCM 2.0 does not support double wire feeder configurations.

> ⚠ **Critical — DCM 2.0 default IP differs from DCM v1.** DCM 2.0 defaults to **DHCP Server mode** with IP `192.168.2.1` on LAN 1. This is different from the DCM v1 default of `192.168.0.10`. You must change the LAN 1 mode to **Static IP** and set the IP address to `192.168.0.10`, otherwise the MiniPC will not connect.

**DCM 2.0 step-by-step setup:**

| Step | Action |
|---|---|
| 1 | **Connect to DCM 2.0 WebUI.** Connect a PC/tablet to the DCM 2.0 WLAN network. Default SSID: `DCM<serial number>`. Default password: `KemppiDCM<security code>`. Open a browser and navigate to `DCM<serial number>.local` or `192.168.3.1`. |
| 2 | **Configure Network Settings (LAN 1).** Go to Network Settings → LAN 1 → Configure. Change Mode to **Static IP**. Set IP Address to `192.168.0.10`. Set Subnet Mask to `255.255.255.0`. Save. |
| 3 | **Configure Fieldbus Settings.** Go to Fieldbus Settings → Configure. Select Fieldbus Type: **Modbus TCP**. Set Watchdog Timeout to `3000 ms`. Save. |
| 4 | **Connect Ethernet Cable.** Connect a shielded Ethernet cable (min. F/UTP) from the DCM 2.0 Ethernet port to the LAN router. Ensure the CAN cable is connected between DCM 2.0 and the Kemppi welding machine. |
| 5 | **Verify Connection.** In the DCM 2.0 WebUI, go to Cobot Status. Confirm **Communication OK** shows green. Verify the Kemppi connection status on RB-X shows **GREEN**. |

**DCM 2.0 network settings (LAN 1) — required values:**

| Parameter | Required Value | Kemppi Default | Notes |
|---|---|---|---|
| LAN 1 Mode | Static IP | DHCP Server | Must be changed from default. Static IP is required for the MiniPC to locate the DCM at a fixed address. |
| LAN 1 IP Address | 192.168.0.10 | 192.168.2.1 | Mandatory. Must match the IP the MiniPC expects. Do not leave at default. |
| LAN 1 Subnet Mask | 255.255.255.0 | 255.255.255.0 | Standard subnet for /24 network. |
| LAN 1 Gateway | (Leave empty or set router IP) | Empty | Not required for direct LAN communication. |

**DCM 2.0 fieldbus settings — required values:**

| Parameter | Required Value | Kemppi Default | Notes |
|---|---|---|---|
| Fieldbus Type | Modbus TCP | — | Select Modbus TCP for RBW integration. EtherNet/IP is also available natively in DCM 2.0 but is not used in this setup. |
| Watchdog Timeout | 3000 ms | 0 (Disabled) | Must not be left at 0. Range: 0–50000 ms. |

> ℹ **Connecting to the DCM 2.0 WebUI.** Default WLAN (Access Point mode): SSID is `DCM<serial number>`, password is `KemppiDCM<security code>`. Navigate to `DCM<serial number>.local` or `192.168.3.1` in a browser. Alternatively, connect a PC directly to the DCM 2.0 Ethernet port and navigate to `DCM<serial number>.local` or `192.168.2.1`. **Note:** if a PC is connected directly to the Ethernet port, the cobot cannot connect simultaneously — use a network switch or configure via WLAN instead.

### 2.3 DCM version comparison

| Feature | DCM v1 | DCM 2.0 |
|---|---|---|
| Configuration Tool | Kemppi Cobotics mobile app (Android, Bluetooth) | Built-in WebUI (browser-based, WLAN/LAN) |
| Fieldbus Support | Modbus TCP (native). EtherNet/IP requires external fieldbus converter. | Modbus TCP and EtherNet/IP (both native, no converter needed) |
| Network Access | Ethernet port only. Mobile app for settings via Bluetooth. | Ethernet port (LAN 1) + WLAN (access point or client mode) |
| Default LAN IP | 192.168.0.10 | 192.168.2.1 (DHCP Server mode) |
| Required LAN IP (RBW) | 192.168.0.10 (already default) | 192.168.0.10 (must be changed from default) |
| Watchdog Timeout Range | 0–65535 ms (default: 0 = OFF) | 0–50000 ms (default: 0 = Disabled) |
| Required Watchdog (RBW) | 3000 ms | 3000 ms |
| Touch Sensor Support | No | Yes (TouchSensorOn control bit) |
| Compatible Equipment | X5 FastMig (FW 1.46+), Master M 353/355/358 (FW 1.12+) | X5 FastMig (FW 1.58 SP4+), Master M 353/355/358 (FW 1.24 SP3+) |

## 3. External axis configuration

The **External Axis** toggle, found under **Setup → System Set** on the robot controller, directly impacts whether the MiniPC can connect to the Kemppi welding machine.

> ⚠ **Warning — never enable External Axis unless required.** Do not enable the External Axis toggle unless an actual external axis (linear track or positioner) is physically connected to the system. When enabled, the MiniPC prioritizes connecting to the external axis for 30 seconds each time the Connect button is pressed, completely blocking the Kemppi connection attempt during that window. This results in a **RED** Kemppi status indicator on the RB-X.

| Scenario | Expected Behavior |
|---|---|
| External Axis: **DISABLED** (correct) | MiniPC automatically attempts connection with Kemppi. Auto-reconnection is active. |
| External Axis: **ENABLED** (incorrect for Kemppi) | MiniPC spends 30 seconds trying to connect to a linear track/positioner, blocking the Kemppi connection. Results in RED status on RB-X. |

> ℹ **Correct behavior.** When the External Axis toggle is disabled, the MiniPC automatically attempts to connect to the Kemppi welding machine. If the connection is lost, the MiniPC will continuously retry for up to 30 seconds to re-establish the link without user intervention.

## 4. Automatic reconnection behavior

The MiniPC includes built-in reconnection logic that handles brief interruptions in communication with the Kemppi welding machine.

| Condition | System Behavior |
|---|---|
| Connection lost, restored within 30 seconds | MiniPC automatically re-establishes the Kemppi connection. No user action required. Example: Ethernet cable on DCM is temporarily removed and reconnected within the 30-second window. |
| Connection lost for more than 30 seconds | Auto-reconnection window expires. A full restart of both the Kemppi welding machine and the MiniPC is recommended. |
| Connect button pressed (External Axis enabled) | MiniPC attempts to establish a connection with the external axis (linear track/positioner) for 30 seconds, during which the Kemppi connection is blocked. |

## 5. Troubleshooting matrix

| Symptom | Possible Cause | Resolution |
|---|---|---|
| Kemppi status shows RED on RB-X | External Axis toggle enabled in Setup → System Set. | Disable External Axis toggle. Connection will be attempted automatically. |
| No connection after MiniPC replacement | Ethernet cable not properly seated, faulty router port, or router failure. | 1. Check Ethernet cable between Kemppi and router. 2. Test different router ports. 3. Try a replacement router. |
| Intermittent connection drops | Loose Ethernet cable on DCM or router. Brief network interruptions. | If restored within 30s, MiniPC auto-reconnects. If longer, perform full restart of Kemppi + MiniPC. |
| Connection fails despite correct cabling | Kemppi machine IP is not set to 192.168.0.10, or watchdog timeout is OFF. | Open Kemppi Cobotics App (v1) or DCM 2.0 WebUI (v2). Verify IP is 192.168.0.10 and watchdog is 3000 ms. |
| Connection blocked for ~30 seconds after pressing Connect | External Axis is enabled and MiniPC tries to reach a linear track or positioner. | Disable External Axis. Never enable it unless an actual external axis is physically connected. |
| Connection not recovered after brief cable disconnect | Cable was disconnected for longer than 30 seconds. | Perform full restart: power off Kemppi welding machine and MiniPC, then power on. |
| DCM 2.0: connection fails after upgrade from DCM v1 | DCM 2.0 defaults to DHCP Server mode with IP 192.168.2.1, which differs from the required 192.168.0.10. | Access DCM 2.0 WebUI. Change LAN 1 mode to Static IP. Set IP to 192.168.0.10. Set watchdog to 3000 ms in Fieldbus Settings. |

## 6. Full restart procedure

When the connection loss between the MiniPC and the Kemppi welding machine exceeds 30 seconds, or when other troubleshooting steps have failed, a full system restart is recommended.

1. Power **OFF** the Kemppi welding machine.
2. Power **OFF** the MiniPC (RB-GATEWAY).
3. Verify all Ethernet cables are firmly seated in the router, DCM, and MiniPC.
4. Power **ON** the Kemppi welding machine. Wait for it to fully initialize.
5. Power **ON** the MiniPC (RB-GATEWAY). The MiniPC will automatically attempt connection with Kemppi.
6. Verify the Kemppi connection status on the RB-X shows **GREEN**.

## 7. Quick reference checklist

Use this checklist before initial setup or when verifying system configuration after maintenance or component replacement.

- [ ] Kemppi machine IP is set to `192.168.0.10` (DCM v1: Cobotics App | DCM 2.0: WebUI → Network Settings → LAN 1)
- [ ] DCM 2.0 only: LAN 1 Mode is set to **Static IP** (changed from default DHCP Server)
- [ ] Watchdog Timeout is set to `3000 ms`, not OFF/Disabled (DCM v1: Cobotics App | DCM 2.0: WebUI → Fieldbus Settings)
- [ ] DCM v1: Modbus TCP Interface is set to **ON** | DCM 2.0: Fieldbus Type is set to **Modbus TCP**
- [ ] External Axis toggle is **DISABLED** in Setup → System Set (unless a physical external axis is present)
- [ ] Ethernet cables are securely connected: Kemppi/DCM → Router, MiniPC → Router, Robot → Router
- [ ] Router is powered on and ports are functional
- [ ] Kemppi connection status on RB-X displays **GREEN**
