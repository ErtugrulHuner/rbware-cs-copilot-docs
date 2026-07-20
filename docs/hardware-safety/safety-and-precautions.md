# Robot Safety and Precautions

_Source: `manual_safety_and_precautions.md` (Rainbow Robotics RB Cobot Docs)_

**Always carry these cautions into any customer-facing draft that touches robot movement, collision, or teaching.**

## Emergency Stop
- Press the **EMERGENCY STOP** button to immediately stop the robot arm.
- Re-activate by turning the EMERGENCY STOP button **clockwise**.

### Hand Controller LED status
| LEDs | Meaning |
|---|---|
| L1 green only | Real Robot mode |
| L2 green only | Simulation mode, program running |
| L1 + L2 green | Program running in Real Robot mode |
| L3 red only | Control box hasn't finished booting |
| L1 + L2 green, L3 red | **Collision detected** |

## General safety warnings (selected, always relevant to customer replies)
- Never operate a broken/faulty robot; on a fatal software error, hit the E-STOP and contact the supplier or Rainbow Robotics.
- Don't wear loose clothing/jewelry; tie back long hair.
- Never modify the robot without Rainbow Robotics support — the manufacturer bears no liability for unauthorized modifications.
- Both robot arm and control box generate heat during extended use — **wait at least 1 hour before touching** after long operation, or check the UI temperature reading first.
- Confirm mounting configuration, tool weight/CoG/length, and safety configuration are entered correctly, or teaching/collision detection may not work properly.
- The teaching function should only be used in a safe, hazard-free environment.
- If robot joints move at unsafe speed during direct teaching, the user can force-stop with the emergency switch.
- Don't connect safety equipment to general-use I/O ports — only to safety-related I/O ports.

## Liability & risk assessment
- This manual doesn't cover all peripherals affecting safety — the system installer must comply with national safety regulations.
- The operator/installer of the final system is responsible for: risk assessment, deciding on additional safeguards, proper design/configuration/installation, definition of usage, identifying markings/contacts, and providing technical documentation.
- Risk assessment must follow **ISO 12100**, **ISO 10218-2**, and reference **ISO/TS 15066**, conducted immediately after installation.
- Safety configuration menu covers: I/O settings (safety info output), speed control, and collision detection sensitivity.

## Potential safety issues to flag with customers
Finger/gear stenosis injuries, cuts from sharp tool edges, injury from nearby objects, toxic/harmful substance exposure, collision injury (contusion/fracture), injury from unfastened objects, injury from a dropped/detached tool.

## Safety Controller compliance
RB5-850E, RB3-1200E, RB10-1300E, RB16-900E, RB3-730ES, RB6-920ES, RB20-1900ES all meet **ISO 13849-1 Cat3, PLd**.

## Safety indication levels used in documentation
- **DANGER** — severe harm, serious injury or death if not followed.
- **WARNING** — accident risk, serious injury.
- **CAUTION** — product damage or user injury.

## Shipping & transportation
- At least two people required; transportation damage is **excluded from warranty**.
- Use the manufacturer-provided packaging box; strong vibration/shock can damage the system.
- When lifting by hand, hold the lower part near the base axis. When using a wire rope, secure only at the indicated attachment points.

## Usage & functionality — improper use (not covered by liability)
Explosive environments, medical/life-related uses, human/animal transport, any use without risk assessment, insufficient safety-function performance, use beyond performance/environmental spec.

## User safety — powerless operation (forced back driving)
In an emergency or power-loss situation, the user can push/pull the robot arm to move the joints (forced back driving) — **only while the robot is not powered on**. Excessive force can overload the driving parts; the manufacturer isn't responsible for damage from excessive force.

See also [Robot Safety Functions](/hardware-safety/safety-functions.md) for the formal safety-function specification (STO/SS1/SS2/SOS/etc.) and stop categories.
