# Creon AI Workshop — Planning Document

> **Purpose of this file:** the high-level workshop plan — goals, principles, schedule, attendee list, open items. Companion files:
> - **`demo_prompts.md`** — every morning plenary demo with its copy-ready prompt, in presentation order.
> - **`attendee_notes.md`** — per-attendee facilitator notes (why each worksheet exists, use cases triaged, risks).
> - Individual worksheets — `01_aga.md`, `02_sandra.md`, etc.

---

## 1. Workshop overview

| Field | Value |
|---|---|
| **Date** | Thursday 21 May 2026 (one day) |
| **Location** | Xelerit office (home turf — Xelerit hosts) |
| **Host** | Xelerit. Run by Mara + Pawel. |
| **Language** | English for plenary. Worksheets per-person in primary language (Polish for Aga/Anita, Dutch for Sandra/Lisette/Sofia/Amber/Bart, English as master). Mara + Pawel cover all three languages between them. |
| **Audience** | ~11 attendees from Creon (production, online team, leadership). |
| **Starting level** | All beginners with AI in their work. |

### Primary goals
1. Build basic AI literacy across the company.
2. Get specific teams using Claude for real tasks.
3. Identify ongoing automation candidates.

### Success criteria
Every attendee leaves with **at least one concrete, working asset** (Project, saved Artifact, or reusable prompt) tied to their real work — usable in their daily work without needing further setup.

### Parking lot — "Beyond Claude alone"
A flipchart (or shared doc) kept visible during the day. When someone says *"this would be amazing if it just pulled directly from Exact"* or *"if only this happened automatically in WPS"*, it goes on the board. End of day: photograph and save. Follow-up conversation with Geoffrey/Bart in the following week: *"here's what surfaced, what's worth exploring."*

**Integration candidates already visible from the per-person plans:**
- **Lisette →** ERP-integrated transaction matching (PayPal/business card → orders).
- **Bart →** Email triage integrated into Outlook + ERP context, not just a Project.
- **Sofia →** Order/email reconciliation at ERP intake.
- **Aga →** Quality remarks aggregation pipeline feeding into WPS or a coaching dashboard.

### Post-workshop follow-up
**Informal, not productized.** Attendees reach out to Mara or Pawel if questions arise; Mara/Pawel ping back a few weeks in to check whether the assets built are still being used.

Specific follow-ups already identified:
- **Lisette:** Code Execution conversation.
- **Aga:** Quality Coaching Project usage check.
- **Geoffrey + Bart:** parking-lot board → scope conversation.

---

## 1b. Company context

### Creon (the client)
- Custom window/door/shutter/mosquito-mesh manufacturer. **Second-largest in NL.**
- Family business. **Geoffrey de Bruin** (down-to-earth, gets-to-business) is the CEO attending. He set up the PL factory himself.
- **PL factory** in NW Poland — set up for full quality control across the entire product cycle. This is why Aga and Anita are Polish-based attendees.
- 4 product lines: PVC windows/doors, ALU windows/doors, shutters, mosquito pleated screens.
- Three monolithic software systems built/maintained by Xelerit: **online shop**, **ERP** (invoicing, logistics), **WPS** (production processes, light HR like time tracking).

### Xelerit (the host)
- Technology partner. Delivers software and people to clients in NL and PL.
- **Marek** is the team lead for the Creon account at Xelerit.
- Ongoing software relationship: shop, ERP and WPS systems built and maintained by Xelerit.

### Creon's email and customer flow
A specific operational fact that affects several worksheets (Bart's most directly, but also Sofia's and Amber's):

```
Order placed
     ↓
SOFIA's team (Administration) — handles emails from order → delivery
   • Order changes
   • Delivery time questions
   • Installation questions
     ↓
Delivery happens
     ↓
AMBER — handles customer support post-delivery
   • Only in afternoons (mornings = marketing)
```

Bart's routing assistant Project bakes this rule in: pre-delivery → Sofia's team, post-delivery → Amber (afternoons), with an explicit note about Amber's morning unavailability.

---

## 2. Core design principles

These principles guide every per-person worksheet and the day's schedule.

### Principle 1 — Lasting deliverables, not demos
Each attendee builds something they will use later in their daily work. No throwaway exercises. Pre-workshop document requests are designed to give them the materials they need to populate their asset (Project templates, voice examples, reference docs), not just to fuel the exercises.

### Principle 2 — Branching worksheets, not linear
Each person's worksheet follows this shape:

```
Warm-up (everyone does)
        ↓
Pick one (or more) of:
  Path 1 → Lasting asset A
  Path 2 → Lasting asset B
  Path 3 → Lasting asset C
```

Paths are **labeled by outcome, not letter**: *"Build your assistant", "Build your tool", "Set up recurring help"* — phrased per person. Each path is self-contained and produces a usable deliverable. Time estimates on each path so people calibrate.

**Default for the indecisive:** every worksheet has a small *"Not sure where to start? Try Path 1"* note.

**"Too many options" is intentional.** Leftover paths are take-home work — the worksheet keeps giving value past the workshop day.

### Principle 3 — Human in the loop, always
Every exercise framing emphasizes: Claude produces a first draft, suggestion, or second pair of eyes. The person reviews, edits, decides. Especially important for Amber (skeptical of eliminating the human touch), critical for Lisette (finance outputs), and core for the whole room — particularly for customer-facing or legally-relevant work.

### Principle 4 — Avoid risky demos
We skip use cases where Claude could be confidently wrong with real-world consequences in front of the room:
- Specific legal or regulatory advice (mention as exploration, don't demo).
- Bonus/salary calculations with real numbers.
- Direct ERP/banking/payment system interaction.
- Anything involving real customer PII or financials in the prompt window.
- **Cowork live demos** — newness + fragility + slow execution = wrong feature for a plenary first impression. Mentioned only, not demoed.

### Principle 5 — Personalised worksheets per attendee
Different worksheet for every person Mara has spoken to. Difficulty and depth tuned to where they're starting — Amber gets pushed harder than Sofia, Bart is trusted with fewer hand-holding steps, Lisette gets explicit anti-overconfidence caveats. The personalisation extends to language (Principle 6) and to which paths are even offered (e.g. Amber's vibe-coding path is deliberately de-emphasized).

### Principle 6 — Worksheets in the participant's primary language
- **Polish staff (Aga, Anita):** worksheets in Polish.
- **Dutch staff (Sandra, Lisette, Sofia, Amber, Bart, Joyce, Elisah):** worksheets in Dutch.
- **English version exists as the master** — what Mara and Pawel both work from when helping any attendee.
- **Plenary is in English.** Mara and Pawel cover all three languages between them, so live help during exercises happens in whichever language the attendee prefers.

*Why per-person primary language rather than bilingual side-by-side:* parallel-text worksheets double visual density and get skimmed. Worksheets are meant to feel like a guide people glance at while doing things, not a document they study.

---

## 3. The day — facilitators and schedule

### Facilitators

**Mara.** MSc in AI. 10 years at Philips spanning AI scientist → engineer → product owner → product manager. Heavy personal Claude Code usage over the past year. Strong theoretical and practical background.

**Pawel Bejger.** CEO of Xelerit. Hands-on. Polish anchor for Aga and Anita.

### Roles on the day
- **Pawel opens** the day with a general intro to LLMs and Claude, then runs the **plenary presentations** through the morning.
- **Mara opens the afternoon** with a short intro talk on how the worksheets were made (see below).
- **Mara** runs the **afternoon worksheets** — guides attendees through their personalised paths.
- Both float during exercises, switching to Polish, Dutch or English as needed.

### Schedule (kanban — work the topics in order, finishing what fits)

| Block | Time | What happens |
|---|---|---|
| Session 1 | 09:30 – 10:45 | Morning plenary — work through demos in order (see `demo_prompts.md`) |
| Break | 10:45 – 11:00 | |
| Session 2 | 11:00 – 12:15 | Morning plenary continues |
| Break | 12:15 – 12:30 | |
| Lunch | 12:30 – 13:30 | Elisah and Joyce arrive — buddy briefing over lunch |
| Session 3 | 13:30 – 14:45 | Mara's intro talk → show & tell with Thomas → worksheets |
| Break | 14:45 – 15:00 | |
| Session 4 | 15:00 – 16:15 | Worksheets continue → end-of-day recap |

**Kanban principle:** we go through the topics in order. If we run out of time on a topic, we move on. Worksheets that don't get finished can be completed later — they're self-contained and take-home.

### Mara's intro talk (~3 minutes, opens the afternoon practical session)
**Goal:** model the *pattern* of working with Claude before attendees experience it themselves. Frame Claude as a thinking partner that respects human authority — not a magic content generator.

**Structure:**
1. *"I want to tell you how the worksheets you're about to use got made — because the process is itself the lesson."*
2. *"I had a conversation with Claude over several days about each of you, your roles, your problems. Claude didn't write the worksheets. Claude asked me hard questions, proposed options, pushed back on weak ideas, and helped me think more clearly. I made the decisions."*
3. *"What you're about to do in your worksheets is the same pattern, smaller scale. Bring a real problem. Claude asks questions. You iterate. You end up with something you couldn't have built alone in the same time — but you also couldn't have built without your own judgment."*
4. *"The most useful Claude behavior I learned in this process: asking it to interview me first. Watch for that pattern today."*

**Concrete example to use — pick one:**
- *Finance-vocabulary correction (Lisette's Path 3).* Claude originally framed a consistency check around *"income − costs = profit"* — clean-looking but loose under finance scrutiny (which "income"? which "profit"? Which layer of the P&L?). Mara pushed back from domain knowledge; Claude rewrote with proper consolidation vocabulary (*entities*, *period-over-period*, *subsidiary figures rolling up to a group total*). Lesson: AI's surface-level competence ≠ domain rigour. The human judgment was the unlock.
- *Template emphasis dial-down (Sofia's Path 1).* Claude initially built the path around email templates as the single most important upload. Mara said "too much, dial it down." Claude restructured so templates sit as one of several inputs, not the headline. Lesson: iteration moves output closer to what a human actually wants.
- *Privacy scrub (multiple worksheets).* Claude wrote in things attendees had said in intake conversations, quoted back at them. Mara flagged the surveillance vibe; Claude scrubbed every direct quote, every replay of intake notes. Lesson: human judgment about *what's appropriate to say* is something AI doesn't have on its own.

**Privacy line to include:** *"I won't show you the actual planning document — it contains specific details about each of you that should stay private. But I'll show you the kind of conversation that produced it."*

**Failure modes to avoid:**
- Don't overclaim ("Claude built this whole workshop!") — undersells Mara's role and makes attendees suspect they couldn't replicate it.
- Don't show the planning .md publicly — it contains real notes about HR practices, finance details, and internal context.
- Keep it to 3 minutes.

### Pre-workshop materials: nothing was sent
Workshop scheduled too close to attendees' travel for a meaningful prep email. **Mitigation:** attendees find their data live during the workshop. They're on company laptops with full email/drive access — pulling 10 emails or 3 documents takes 5 minutes. Worksheets have been reworded toward finding-it-now, with verbal-fallback options where bringing data would otherwise stall a path.

### Other day-of decisions
- **Parking lot board.** Flipchart visible all day. "Beyond Claude alone — ideas for deeper integration." End of day: photographed and saved.
- **End-of-day recap format.** Open call — whoever wants to share goes first. *What did you learn? What blew your mind? Anything you want to show?* No forced going-around-the-room. Mara/Pawel jump in only if the silence gets long.
- **License status check.** Most have working access. Worth verifying at the door — anyone whose login fails wastes 15 minutes of opening time.

---

## 4. Attendee list

Quick reference. Full plans in `attendee_notes.md`.

| Name | Role | Status |
|---|---|---|
| **Geoffrey de Bruin** | CEO | See `attendee_notes.md`. Participating as a peer; has his own worksheet. |
| **Sandra** | COO; backs up Geoffrey; NL HR | See `attendee_notes.md`. Decade+ at Creon. Already uses Copilot. |
| **Bart** | CTO | See `attendee_notes.md`. Self-effacing but knowledgeable. Has been talking with Geoffrey about AI. |
| **Amber** | Marketing manager | See `attendee_notes.md`. Most AI-experienced attendee. |
| **Lisette** | Finance — bookkeeping / controlling | See `attendee_notes.md`. 9 years at Creon. Deepest institutional context. |
| **Sofia** | Administration — order processing | See `attendee_notes.md`. High-volume structured work; team of 4. |
| **Anita** | Head of office (production) | Pairs with Aga in the afternoon, no separate worksheet. Polish; not confident in English. |
| **Aga (Agnieszka)** | Production: HR / quality / maintenance / admin | See `attendee_notes.md`. Broad-scope role, high Claude leverage. Polish. English level very good. |
| **Elisah** | Logistics manager | No personal worksheet. Joins Sandra's track after lunch (arrives ~12:00). Welcome one-pager prepared. |
| **Joyce** | Sales support | No personal worksheet. Joins Amber's track after lunch (arrives ~12:00). Welcome one-pager prepared. |
| **Thomas** | External AdWords/CRO specialist | Attending. No pre-built worksheet — covered by Mara's live show & tell at the start of the afternoon. |

