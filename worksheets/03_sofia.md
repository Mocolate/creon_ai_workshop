# Worksheet — Sofia

**Welcome to your afternoon.** This worksheet is built around the work your admin team does every day — customer emails, order checking, delivery lists. The goal is for you to leave today with at least one working assistant that takes some of that repeating work off your plate. Not to replace you — to give you more time for the orders and customers that actually need your attention.

You'll start with a short warm-up, then **pick one of three paths**. Each ends with something you can use in your daily work.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:
- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

---

## Warm-up — Triage a batch of customer emails *(~15 min)*

**You'll need:** a batch of recent customer emails. Pull 10–15 from your inbox covering different types (delivery questions, change requests, payment questions, complaints). If sorting takes more than a minute, just grab the last 10 emails you got — variety helps but isn't critical for the warm-up to work.

**Step 1.** Open a new chat in Claude.

**Step 2.** Paste your batch of emails. Then say:

> *"These are customer emails I received recently. For each one, classify it on three dimensions:*
> *1. Type (delivery question / change request / payment question / complaint / other)*
> *2. Urgency (urgent / today / this week / no rush)*
> *3. What I need to do (reply / forward / FYI only)*
>
> *Give me the results as a table."*

**Step 3.** Then ask for drafted replies:

> *"Now draft a reply for each one, in Dutch. Keep them concise and friendly."*

**Step 4.** Refine. Pick one or two and say:

> *"For the delivery questions, make the replies shorter — one short paragraph each."*
>
> *"For the complaints, warm them up a bit. Always offer a concrete next step."*

**What you just did.** Claude classified and drafted replies for a whole batch of emails in one go, leaving you to edit rather than write. The Project in Path 1 turns this into something you reuse instead of redoing every time.

---

## Pick a path

Three paths below. **Not sure where to start? Try Path 1** — it builds the assistant most directly tied to your daily email work.

---

### Path 1 — Build your Customer & Order Support Project *(~25 min)*

**You'll leave with:** a Claude Project that handles customer emails in your team's tone with your process baked in. Whenever you need it: paste an email, get a draft, edit, send.

#### Step 1. Create the Project.
- Click **Projects** in the left sidebar, then **New project**.
- Name it: **Sofia — Customer & Order Support**.

#### Step 2. Upload your materials.
A few things help Claude work the way you do:

- Your **email templates** — the standard responses you use most often. Claude can pick the right one for each email instead of you having to.
- 2 or 3 examples of **replies you've actually sent** — so Claude picks up your tone on top of the templates.
- A short description of your workflow: what you check before sending, what kinds of customer questions you handle most, the rough categories of orders or situations that need different handling.
- A list of common customer questions and how your team usually answers them, if you have it written down anywhere.

**If you don't have your workflow written down:** start a chat and *tell* Claude how you work — what you check, the categories of situations you handle, anything else useful. Then ask Claude to *"write this up as a clean reference document I can upload to my Project."* Upload that.

#### Step 3. Give the Project its instructions.
Paste this into the **Custom instructions** box and tweak as you like:

> *"You help me handle customer emails about orders, deliveries and installations for Creon.*
>
> *Defaults:*
> *- Reply in Dutch unless the customer wrote in another language.*
> *- When a template fits, use it as the starting point and personalise it to the customer and situation. State which template you used at the top of the draft. Don't send templates word-for-word.*
> *- Use the friendly, professional tone of the example replies I've uploaded.*
> *- For complaints, always offer a concrete next step — never just an apology.*
>
> *Thread awareness: if I paste a thread where I've already contacted this customer about the same issue, vary the phrasing — don't send the same wording twice. For repeated issues (e.g. a delivery delayed a second time), escalate the tone and offer something more substantial than the first response.*
>
> *When I paste a customer email together with order details I've checked, compare the two and flag any mismatch before drafting.*
>
> *Always remind me at the bottom of your draft if there's something I should double-check before sending."*

#### Step 4. Test it.
Start a new chat **inside the Project**. Paste a fresh customer email (one the Project hasn't seen). See what comes out.

#### Step 5. Refine.
Push back on anything that's off:

> *"This is too formal. Match the warmth of my example in [filename]."*
>
> *"Don't use 'Geachte heer/mevrouw' — we always use the customer's first name."*
>
> *"Keep replies under 4 lines unless there's a real reason to go longer."*

Update the Project instructions with anything important you discover.

**Important:** every draft Claude writes is yours to review and edit before sending. You are the one who knows the customer. Claude saves you the typing — you keep the judgment.

#### Stretch goal — share with your team
Once your Project works the way you want, share it with your direct colleagues. On the Team plan, a shared Project means everyone replies with the same tone and the same process. Click the share button at the top of the Project.

---

### Path 2 — Build your cross-check assistant *(~20 min)*

**You'll leave with:** a standing pattern that gives you a second pair of eyes on the cross-checking you do today — comparing what's in one source against what's in another, catching the mismatches that cost time later.

This builds *on top of* Path 1 if you've done it, or as a standalone if not.

#### Step 1. Open a chat (inside your Project if you did Path 1, otherwise a fresh chat).

#### Step 2. Let Claude interview you on what you actually cross-check.
Instead of guessing at your workflow, type:

> *"Part of my daily work at Creon admin is cross-checking information across different sources before processing an order. I want to set up a workflow where you help me spot mismatches.*
>
> *Before we start: ask me up to 6 questions to understand what I actually cross-check — which sources, what kinds of mismatches matter, what 'clean' looks like, and what kinds of mistakes are most costly when they slip through."*

Answer Claude's questions briefly. You're filling in the gaps in something only *you* know.

#### Step 3. Ask for the checker.
Once you've answered:

> *"Now build me a reusable prompt I can use whenever I'm about to process an order. It should take the information from the different sources I just described, list any mismatches clearly, suggest a resolution for each, and rate confidence (high / medium / low). If everything matches, say so clearly so I know it's truly clean."*

Save Claude's prompt somewhere you can paste it next time.

#### Step 4. Test it on three cases.
Run the prompt on:
- A clean case (where you already know nothing is wrong).
- An obvious mismatch (data clearly contradicts itself).
- A subtle one (something *might* be off, the kind that takes you a few minutes to spot manually).

**The clean case is the most important test.** If Claude invents a discrepancy that isn't there, you've learned it can't be trusted on real work. If it correctly says "all clean," you've learned how confident to be when it flags something later. Don't skip this step.

#### Step 5. Add the pattern to your Project.
If you did Path 1, take Claude's prompt and **add it as a standing instruction** to your Project — so any future cross-check happens automatically when you paste the relevant sources.

**Important framing:** Claude **proposes**, you **verify**. The point isn't to skip the check — it's to shrink the cognitive load from "examine everything yourself" to "verify the confident matches and investigate the flagged ones."

#### Stretch goal
Once the basic checker works, try a batch of 10 orders at once and see if Claude can flag the few that need attention out of a mostly-fine pile.

---

### Path 3 — Truck delivery list: routing and scheduling *(~25 min)*

**You'll leave with:** a workflow that turns the inputs you have into a structured delivery list — ordered, routed and scheduled — ready to hand off to the drivers.

Pick this path if delivery list assembly is what most of your week revolves around — the routing decisions, the scheduling logic, the choice of who delivers what and when.

#### Step 1. Open a new chat in Claude.
Make sure **Code Execution / File Creation** is enabled (so Claude can produce real Excel files).

#### Step 2. Upload your inputs.
- The PDFs you usually read from.
- The Excel with shipment data.
- Any side notes or remarks you also have to reference.

**If you don't have the inputs with you:** describe the process out loud to Claude — what files you usually combine, what the columns look like, what the final list should contain. Ask Claude to *"build a small example based on what I told you, with 5 made-up deliveries, so I can see how the workflow would work next week with real data."* You'll still leave with a workflow you can run next time.

#### Step 3. Describe what you actually want, including routing and scheduling.

> *"I need to produce a weekly truck delivery list. Today the process is manual — I read these inputs, decide which orders go on which truck on which day, sort them by route, and build the final list.*
>
> *Help me automate the assembling, routing and scheduling part.*
>
> *Here's what the final list should contain: [list the columns — e.g. order number, customer name, delivery address, scheduled date, route order, special remarks].*
>
> *For routing and scheduling: group deliveries logically by region and by day. If two deliveries are close together geographically, they should be on the same truck. Ask me about any rules I have for which days certain regions get served, or constraints I need you to respect."*

Answer Claude's questions on the routing rules.

#### Step 4. Iterate on format.
The first version probably won't match your real format. Refine:

> *"Add a column for X."*
>
> *"Sort by route order within each day, not by order number."*
>
> *"Group rows visually by region — empty row between regions."*

#### Step 5. Save the prompt to reuse.
Once it produces what you want, save the chat. Next week, you can come back, upload the new week's inputs, and rerun the same prompt.

#### Stretch goal
Ask Claude to also draft a short cover note for the drivers — *"this week we have X deliveries, Y are special-handling, Z need to be done before 10am"* — based on the data it sees.

---

## What we deliberately didn't do today

- **Direct ERP imports / Mollie / bank environment.** Claude can't currently drive these interfaces. There may be integration paths worth exploring — those go on the "Beyond Claude alone" board at the front of the room.
- **Decisions that affect real orders without you in the loop.** In principle Claude could automate more of your workflow, but anything that touches real orders needs you reviewing before it goes through. That's a workflow we'd want to validate carefully over time, not something we set up in a workshop.

---

## End-of-day check

Before you leave, make sure:
- [ ] You have at least one working Project (Path 1 strongly recommended) you can open the next time you need it.
- [ ] You've tested it with a real, fresh email.
- [ ] You've added any examples or rules Claude was missing.
- [ ] You know the next thing you'll try — e.g., "Next email you handle goes through the Project."

If you didn't finish your path, take this worksheet home.

Pawel and Mara are around all afternoon.
