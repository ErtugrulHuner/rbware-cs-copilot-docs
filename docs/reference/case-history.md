# CS Case History Reference

_Source: `CS_Case_History.md` / `CS_Case_History_anonymized.md` — real customer-service cases handled by RB-Ware's field service engineer, merged from the CS Report and CS Report List. Written in Korean; product names, model numbers, and UI labels are kept exact and untranslated in the source._

## How to use this file
Treat it as **field precedent, not documented procedure** — see [CS Copilot Policy and Workflow](/policy/copilot-policy.md) for the full rule. It records what one engineer did **on-site**, often hands-on hardware repair (opening the control box, swapping a mainboard or Safety board, soldering, replacing connectors, or factory return/입고). Never turn a case resolution into self-service instructions for an operator.

## Record structure
Each case entry follows this format:
- **Category (구분)** — e.g. 장애 (fault) or 장애(입고) (fault, returned to factory)
- **Product (제품명)** — e.g. "RB 제어박스 구형(OLD)", "RB-X v1.0.0"
- **Received (접수일자)** — date received
- **Status (확인)** — e.g. 조치완료 (resolved), with resolution date
- **Customer/contact (거래처·담당자)** — company and contact name (redacted in the anonymized version)
- **Complaint (고객불만내용)** — the reported problem, verbatim
- **Cause (불만원인)** — diagnosis
- **Resolution (처리내용)** — what was actually done
- **Tip (엔지니어 팁)** — the engineer's own generalized troubleshooting advice for similar future cases

## Example (Case 1, illustrative)
Control box wouldn't boot past "Please Wait," monitor showed nothing when connected. Cause: long idle period before power-on. Resolution: mainboard and Safety board were faulty — mainboard replaced, Safety board LAN port re-soldered. Engineer's tip: when a control box won't boot, connect a monitor first to see whether the boot sequence starts at all — if it does but stalls, it's usually a drained mainboard battery (replace) or SSD problem (disk/filesystem damage); if nothing displays at all, it's more likely a mainboard or Safety board fault.

_(This pattern — connect monitor + keyboard to distinguish battery vs. SSD vs. mainboard failure — is the same logic captured in [Field Confirmed Corrections and Precedents](/policy/field-confirmed-corrections.md) under "Control box faults.")_

## Matching a new inquiry to a case
1. Confirm the **product/model, welder, and symptom** genuinely match before relying on a case.
2. Note explicitly in agent notes when a case is being used as precedent (e.g., "Case 12 — similar fire/immersion damage, was returned to Rainbow for inspection") so the agent can weigh it.
3. Remember it's one engineer's field experience on one specific setup — it may not match the customer's exact configuration or software version.
4. If the case points to a hardware fault or internal repair, don't guide the customer through it — route to the local partner/dealer or RB-Ware service.

## Related operational trackers
Live/ongoing case tracking for the current CS team is kept separately from this historical log — see [Internal Trackers and Files](/reference/internal-trackers.md) for the CS Tracker Master, CS Report, Customer Issues Log, and RBW_Tickets structure. **Cases from the pre-62 internal file (e.g. 29, 30, 31, 32, 39, 61) belong to that separate internal history and must not be conflated with the currently tracked case numbers (62+).**
