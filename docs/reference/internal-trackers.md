# Internal Trackers and Files

_Source: project knowledge base spreadsheets, plus CS team conventions._

These are the CS team's live operational files — distinct from the historical [CS Case History Reference](/reference/case-history.md).

## RBWare Customer Service — Solved Issues List
`RBWare_Customer_Service__Solved_Issues_List.xlsx` — single sheet (`Sheet1`) listing resolved customer issues for quick lookup.

## CS Tracker Master
`CS_Tracker_updated_2.xlsx` — the master case tracker: navy header, 14 columns, a master tab plus per-client tabs, and a Summary tab using `COUNTIF` formulas to roll up case status/counts.

## CS Report
`CS_Report_62_67.xlsx` — one sheet per case number (currently sheets **62, 63, 64, 65, 66, 67**), each duplicated from the Case 62 template, giving a detailed per-case report format.

## RBW_Tickets.xlsx
Not included as a standalone project-knowledge file at time of writing, but referenced in CS workflow: a ticket sheet plus an **Improvement Proposals** tab for client-submitted feature requests (e.g. the high-priority arc-start retry + scrape-start request from Van Laar/Jan Willemsen).

## Customer Issues Log
A Word-format log, client-grouped, with the original customer messages preserved in italics for traceability back to the source complaint.

## Sync discipline
All of the above (Tracker Master, CS Report, Customer Issues Log, plus RBW_Tickets.xlsx) must be **kept in sync** whenever a case is added or updated. One issue = one case number; don't merge distinct issues into a single case number.

## File conventions
- Dates stored as **TEXT "YYYY-MM-DD"** (General format) in xlsx files.
- Report headers use date format **2026.06.XX**.
- Docx editing is done by unzip → edit `word/document.xml` → rezip, to preserve formatting.

## Jira
Atlassian Jira project **"RB-Ware Customer Services"** (key: **SCRUM**), Turkish UI, team-managed, at `rb-ware-team.atlassian.net`.
