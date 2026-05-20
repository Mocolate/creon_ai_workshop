# Per-attendee notes — facilitator reference

> Brief notes on each attendee with a worksheet. The participant-facing instructions live in the individual worksheet files (`01_aga.md`, etc.). This file holds the *why* behind each worksheet, the use cases we triaged, and the honest risks worth knowing on the day.

---

## Aga (Agnieszka) → `01_aga.md`

**Profile.** Operations Director at James Windows (PL). Polish, English level very good. Handles HR, quality control, machinery/maintenance, administration, export, tax, SEZ reporting, SODI. Uses Optima for bookkeeping.

**She pre-scoped her own session.** Sent three structured emails to Pawel with attachments — real HR onboarding pack, the 2026 bonus calculation rules with three sample timesheets, and the verified April 2026 bonus summary. These materials anchor her worksheet directly.

**Use cases triaged:**
- ✅ Quality check feedback aggregation → Path 1 (her strongest emotional use case)
- ✅ HR onboarding document generation → Path 2 (her actual templates anchor this)
- ⚠️ Maintenance scheduling → Path 3 (workable one-off; long-term wants a real system)
- ✅ Bonus calculation, 3-component, ~70 employees → Path 4 (advanced, Code Execution). Verifiable against the April result she sent. Best Code Execution demo of the day.
- ❌ Intrastat / SODI, Optima UI, WPS integration → not workshop scope

**Risks on the day.**
- Real personal data in her HR pack. She's on her own laptop with her own license, so no leak risk — but worth giving her physical space during Path 2.
- Path 4 is advanced and could eat her afternoon. Make sure she leaves with at least one Project from any path.
- Bonus calc is high-stakes if she uses Claude's output for real pay. Worksheet has hard caveats — reinforce.

**Follow-up.** If Path 4 lands, real Xelerit conversation: productising the bonus flow for ~70 employees. Concrete integration opportunity surfacing from her own session.

---

## Sandra → `02_sandra.md`

**Profile.** Decade+ at Creon. Backs up Geoffrey. Sole NL HR. Uses Exact Online for salary. Already uses Copilot for emails.

**Why she matters.** Institutional weight in the room — if Sandra adopts, others follow.

**Use cases triaged:**
- ✅ HR document drafting (vacancies, announcements, policy comms) → Path 1 + Path 3
- ✅ Tracking Dutch employment-law changes → Path 2 (Legal Radar) — her stated pain point
- ⚠️ Direct Exact Online access → parking lot

**Risks on the day.**
- Copilot comparison questions. Be honest: Copilot stronger inside Word/Excel; Claude stronger for longer reasoning and Projects. Don't pretend Claude wins universally.
- Legal accuracy. Path 2 uses web search on Dutch employment law — Claude can be confidently wrong. Worksheet has explicit "verify, not legal advice" framing; reinforce verbally if she's enthusiastic.

**Follow-up.** Informal. Watch whether the HR Assistant Project gets used for actual vacancies.

---

## Sofia → `03_sofia.md`

**Profile.** Admin team of 4, mostly part-time. Daily: order processing (ERP import, payment check, address check, production remarks), customer email handling, delivery list assembly, payment processing, customer contact.

**Why she matters.** High-volume structured work with email at the centre. The Project she builds has team leverage — once it works, the other 3 admin staff get it for free on the Team plan.

**Use cases triaged:**
- ✅ Customer email triage and drafting → Path 1 (spine of her day)
- ✅ Cross-source consistency check → Path 2 (the most cognitively tiring part of her work)
- ✅ Truck delivery list with routing/scheduling → Path 3 (Code Execution)
- ❌ Direct ERP / Mollie / bank UI access → parking lot

**Risks on the day.**
- AI-replacing-jobs anxiety. Sofia leads 4 part-timers on high-volume order work. Frame Claude as removing tedious parts so the team handles more orders better, not so the team gets smaller. Worth tuning Mara's floating tone accordingly.
- Path 2 framing risk: easy to oversell as "Claude does the checking for you." It doesn't — it shrinks cognitive load, doesn't remove the check. Worksheet handles this; reinforce verbally if needed.

**Follow-up.** The Customer & Order Support Project, if shared with her team, is the most "viral" asset of the day. Track whether the team-plan sharing happens.

---

## Amber → `04_amber.md`

**Profile.** 3 years at Creon, started in customer service. Currently: marketing, website, promotions, social media. Active on Instagram, TikTok, influencer collab. Customer support post-delivery in afternoons.

**Why she's different.** Already an LLM user — uses ChatGPT for emails and Claude for quick HTML visualizations to send to developers. Her ceiling is much higher than anyone else's. The risk is *underpitching* her.

**Use cases triaged:**
- ✅ Brand voice extraction → Warm-up (output is a reusable `creon_brand_voice.md` she uses across every path)
- ✅ Instagram drafting with her voice → Path 1
- ✅ 90-day social media strategy co-design → Path 2 (strategy thinking, not content)
- ✅ Customer call prep → Path 3 (highest-leverage path nobody else is doing)
- ⚠️ Visual mockups for developer handoff → Path 4, *intentionally de-emphasized.* She's already doing this; vibe-coding overwhelm risk is real even for engineers.

**Risks on the day.**
- AI-output skepticism. She'll spot generic AI tone immediately. The Brand Voice warm-up is the antidote — do not let her skip it.
- Vibe-coding overwhelm on Path 4. Worksheet has guidance; reinforce verbally if she pushes into it.
- "AI person trap" post-workshop. She'll become more capable than colleagues. Don't let her end up being the team's prompt-writer-for-everyone-else.

**Follow-up.** None specifically scheduled. Worth checking whether her customer-call Project gets adopted — biggest behaviour-change leverage for her.

---

## Lisette → `05_lisette.md`

**Profile.** 9 years in Finance. Daily: process payments, make invoices, consolidate financials across the group. Manual pain points: matching PayPal/card transactions to orders, intercompany cost pass-through, loan agreements, insurance follow-up.

**Why she matters.** 9 years of institutional context = ideal Project candidate. Her Path 1 (Finance Knowledge Vault) is the asset most likely to compound in value over time.

**Use cases triaged:**
- ✅ Document-as-conversational-object (agreements, policies, intercompany cost) → Warm-up + Path 1
- ✅ Transaction matching for verification → Path 2 (framed as cognitive-load reducer, not automation)
- ✅ Consolidated sheet consistency check + narrative drafting → Path 3 (Lisette brings verified figures; Claude flags internal inconsistencies against her rules and drafts the narrative)
- ❌ Direct system access (finance + bank systems) → parking lot
- ❌ Consolidation calculations in plain Claude → reliability risk too high. Code Execution can handle this but deserves its own session.

**Risks on the day — high priority.**
- **Numerical accuracy.** Claude is not a calculator. Anything she'd report as a financial figure must come from her real systems, never from Claude. The whole worksheet is designed around this.
- **Data sensitivity.** Finance data is the most sensitive in the room. She's on Geoffrey's laptop (no leak risk) but may feel exposed processing real consolidation figures next to the CEO. Worth checking in early on her comfort level.
- **Reputational risk for AI generally.** Finance people who get burned by AI stop trusting AI for years. Better she leaves slightly underwhelmed and accurate than overconfident and wrong.

**Where she goes next — Code Execution.** Worksheet teases it but doesn't demo. The honest next step is an informal walkthrough once she's used the Knowledge Vault for a few weeks. **Most important post-workshop follow-up.**

---

## Bart → `06_bart.md`

**Profile.** Self-described as *"Chief Technology, maar zo zou ik mezelf niet noemen"* — humble framing, often signals genuinely capable. 12.5 years at Creon. Now also active in PL. Daily: inbox triage and routing — reads each email, decides urgency, routes based on who's present, available, and expert in the topic.

**Why he matters.** Genuinely valuable use case (inbox triage + complaint intelligence). Not asking for API integrations — wants exactly what Claude is good at.

**Use cases triaged:**
- ✅ Inbox routing assistant → Path 1 (exactly what he described)
- ✅ End-of-day inbox synthesis → Path 2 (uses the "ask me 3 questions" debrief pattern)
- ✅ Complaint pattern intelligence → Path 3 (operational Q&A)
- ⚠️ Scheduled Cowork task version of Path 2 → flagged as future state, not demoed live

**Strategic role on the day.** Let him build his own asset first, then float in the last hour. People help others well after they've felt the magic themselves.

**Risks on the day.** Lowest-risk participant. Only thing to watch: his technical curiosity could pull into API/MCP/Claude Code questions. Acknowledge and offer to follow up informally. Don't get derailed.

**Multiplier.** What Bart builds (inbox routing + complaint intelligence) is a template Sandra, Aga and others could clone for their own teams. Highest-leverage attendee for spreading Claude internally.

**Follow-up.** Conversation with Geoffrey + Bart about the parking lot board — "what surfaced today" becomes "what's worth Xelerit building."

---

## Geoffrey → `09_geoffrey.md`

**Profile.** CEO. Down-to-earth, gets-to-business. Already in conversation with Bart about AI. Participates as a peer with his own worksheet (CEO-as-PO). Pawel opens the day; Geoffrey doesn't.

**Why his worksheet is different.** Built around chaotic input in his head, not pre-prepared documents. The pattern: turning half-formed ideas into structured developer-ready briefs. Two paths only (not three).

**Risks on the day.**
- First-five-minutes risk. If his instinct is *"I can't think of one right now"*, the warm-up stalls. Worth Mara or Pawel ready to help surface something fast in the first 5 minutes.
- He'll be the room's bellwether. If he's engaged, the room is engaged. If he glazes over, everyone notices.

**Follow-up.** Parking-lot board scope conversation with him and Bart.

---

## Anita, Joyce, Elisah, Thomas — no per-attendee worksheet

- **Anita** pairs with Aga in the afternoon and uses Aga's worksheet alongside her. Polish; not confident in English. Pawel anchors.
- **Joyce** arrives at 12:00. Welcome one-pager (`07_joyce_welcome_at_noon.md`) covers the foundations. Joins Amber's marketing/sales track for the afternoon.
- **Elisah** arrives at 12:00. Welcome one-pager (`08_elisah_welcome_at_noon.md`). Joins Sandra's HR/operations track.
- **Thomas** attends. No pre-built worksheet — Mara builds his live during the show & tell at the start of the afternoon, in front of the room.
