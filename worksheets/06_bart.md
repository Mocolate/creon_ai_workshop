# Worksheet — Bart

**Welcome to your afternoon.** Inbox triage at the lead level is one of the most universal day-to-day jobs: emails come in, decisions get made about who handles each one, and at the end of the day it's easy to lose track of what actually mattered. This worksheet builds an assistant for exactly that — and a bit more. The goal is for you to leave today with a working inbox triage assistant that respects how your team actually works.

You'll do a short warm-up, then **pick one of three paths**. Each ends with something you can take back to your job.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:
- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

---

## Warm-up — Triage a real day of emails *(~15 min)*

**Step 1.** Open a new chat in Claude.

**Step 2.** Paste roughly a day's worth of incoming emails — about 20 — from your inbox. Then say:

> *"These are the emails I received in one day. For each, classify on three dimensions:*
> *1. Urgency (urgent / today / this week / no rush)*
> *2. Type (complaint / question / order issue / internal / other)*
> *3. Action needed (reply / forward / FYI only)*
>
> *Output as a table."*

**Step 3.** Once you have the table, follow up:

> *"Now group them. What's the actual shape of this day's inbox? What dominated my attention? Was there anything that should have been escalated faster?"*

**What you just did.** Compressed the mental triage of a full day's inbox into one pass. The "shape" question matters more than the table itself — it's the part you can't do as easily by reading individual emails.

---

## Pick a path

Three paths below. **Not sure where to start? Try Path 1** — it's the inbox routing assistant.

---

### Path 1 — Build your Inbox Routing Assistant *(~30 min)*

**You'll leave with:** a Claude Project that takes incoming emails and tells you who to route each one to — factoring in your team roster, expertise areas, and current availability.

Most of what makes this routing work lives in your head, not in documents — so you'll teach the Project through conversation rather than uploads.

#### Step 1. Create the Project.
- Click **Projects** in the sidebar, then **New project**.
- Name it: **Bart — Inbox Triage**.

#### Step 2. Brief Claude on your team.
Start a new chat inside the Project. Tell Claude about your team in plain language:

> *"I want to build a routing assistant for incoming emails. Let me describe my team:*
>
> *- [Name or code], handles [expertise], typically available [pattern]*
> *- [Name or code], handles [expertise], typically available [pattern]*
> *- ...*
>
> *Routing rules I follow today:*
> *- Pre-delivery emails (order changes, delivery time questions, installation questions) go to Sofia's Administration team.*
> *- Post-delivery emails (customer support, complaints, after-sales) go to Amber — but only in the afternoons. Her mornings are for marketing work. Post-delivery urgent in the morning escalates to me.*
> *- [Add other rules from your head.]*
>
> *Now ask me 5–8 follow-up questions to make sure you understand my routing logic. Cover anything I might have left out — edge cases, what to do when someone's out, how to handle ambiguity."*

Answer the questions.

#### Step 3. Have Claude write the reference document.
> *"Based on what I just told you, write a one-page routing reference. I'll save it into the Project so future runs have it as context."*

Save the document into the Project — either upload it as a file, or paste it into the Project's knowledge.

#### Step 4. Give the Project its standing instructions.
Paste this and adjust:

> *"You help me triage incoming emails for routing to my team. You have the team roster and routing rules in your knowledge.*
>
> *For each email I paste, suggest:*
> *1. Urgency.*
> *2. The right person or team to route to.*
> *3. Any context the recipient will need to handle it.*
>
> *When I tell you who is out today, or who has limited time, factor that in.*
>
> *Always explain your routing recommendation in one line. Be concise.*
>
> *If an email looks like it could be a pattern rather than a one-off (similar to others you've seen lately), flag that explicitly and tell me why."*

#### Step 5. Test it cold.
Start a fresh chat inside the Project. Paste a batch of emails. Add a real preamble like:

> *"Context for today: Sofia is on leave until Friday. Amber has a meeting all afternoon. I have ~2 hours of focus time mid-morning."*

See how it routes.

#### Step 6. Refine.
The first routing pass will probably miss something. Tell the Project:

> *"You routed [X] to Y but I'd never send Y something like that. Add a rule: never route [type] to Y."*
>
> *"Your urgency calls are too cautious. Treat 'as soon as possible' as 'this week' unless the customer explicitly says they're blocked."*

Update the reference document every time you spot a rule that should be permanent.

#### Stretch goal
Add this instruction: *"Once a week, when I ask for a 'routing review', summarise what kinds of emails I've been routing and to whom — and suggest any rules that should be updated based on patterns you've seen."*

---

### Path 2 — End-of-day inbox synthesis *(~25 min)*

**You'll leave with:** a workflow that turns a day's inbox into an end-of-day briefing — what happened, what mattered, what needs follow-up tomorrow.

#### Step 1. Open a new chat in Claude (or stay inside your Path 1 Project — both work).

#### Step 2. Use this standard prompt.

> *"Here are all the emails I handled today: [paste].*
>
> *Give me an end-of-day briefing:*
> *1. The 3 most important things that happened today.*
> *2. Any emerging patterns or recurring issues I should be aware of.*
> *3. Anything I should follow up on tomorrow.*
> *4. Anything Geoffrey or Sandra should know about.*
>
> *Then ask me 3 questions about today to surface anything you might have missed from reading the emails alone."*

#### Step 3. Answer the 3 questions.
This is the unique part of the pattern. Claude reads the emails — *you* know the meetings, calls and context the emails don't capture. The questions force you to add what was missing.

#### Step 4. Ask for the final version.
> *"Now produce the final end-of-day briefing as a clean document, incorporating what I told you."*

Once you trust this pattern, it's a daily habit: paste the day's inbox at the end of the day, answer the questions, save the briefing.

#### Stretch goal — automated version
As a future-state (not for today): the same logic could run as a scheduled task that reads your inbox automatically each evening via the Outlook/Gmail connector. Worth setting up once you've used the manual workflow for a few weeks. We've parked this on the "Beyond Claude alone" board for a possible Xelerit integration conversation.

---

### Path 3 — Complaint pattern intelligence *(~25 min)*

**You'll leave with:** the ability to ask questions across weeks or months of complaints — what's our top complaint type this month, is something trending up, is the new product getting more issues than the old one.

This is the **operational view**. No single email shows it.

#### Step 1. Create a separate Project.
- Name it: **Bart — Complaint Intelligence**.

This is separate from Path 1's Project because the use case is different: routing vs analysis. Keep them clean.

#### Step 2. Upload your complaint corpus.
Pull complaint emails or complaint summaries from your inbox — as far back as you can quickly grab. A few weeks is enough to start; the richer the corpus, the better the pattern-finding.

#### Step 3. Give the Project its instructions.

> *"You hold our complaint history for analysis.*
>
> *When I ask a question, base your answer on the data in this Project.*
>
> *If I ask for counts, percentages or volumes — give them, but caveat that you may be off by a small margin on exact numbers (you're not a database). The patterns and themes you identify will be accurate; the specific counts may not be.*
>
> *Always quote 2 or 3 specific examples to back up any claim you make about a pattern.*
>
> *If you can't answer something from the uploaded data, say so clearly."*

#### Step 4. Test with real questions.
Ask 5 to 6 operational questions you currently can't easily answer:

> *"What were the top 3 complaint types over this period?"*
>
> *"Are there any complaints that seem to recur from the same customer or about the same product variant?"*
>
> *"If you had to flag one thing that seems to be getting worse, what would it be?"*
>
> *"Is there a complaint type that we're handling well — fewer of them showing up over time?"*

#### Step 5. Read the answers critically.
For volume/count questions, Claude will be approximately right but not exactly right. Use it to identify **what to investigate** — not to produce numbers for reporting. (For that, you'd want Code Execution, which writes proper code to count things. Ask us about it if it becomes a need.)

#### Stretch goal
Set up a monthly habit: at the end of each month, upload that month's complaints to the Project. After a few months, ask: *"Compare the last 3 months. What's changed?"*

---

## What we deliberately didn't do today

- **Live Cowork demos.** Cowork (scheduled tasks, file management) is a useful feature but slower than expected in live demos, and we wanted to keep momentum. Worth exploring on your own — happy to point you at it whenever.
- **API and MCP work.** A different kind of session. If you want to go there, we can carve out time separately — outside the workshop format.
- **Automatic inbox integration.** The stretch goal in Path 2 — Claude reading your inbox directly — is doable with connectors, but worth setting up deliberately rather than during a packed afternoon. On the parking-lot board for a follow-up conversation.

---

## End-of-day check

Before you leave, make sure:
- [ ] You have at least one working Project (Path 1 strongly recommended).
- [ ] You've added any team-roster details Claude was missing during testing.
- [ ] You know the next concrete thing — e.g., "Route the next 10 emails through the Project."

If Path 2 or 3 caught your eye but you didn't get to them — take this home. Both work outside the workshop.

Pawel and Mara are around all afternoon.
