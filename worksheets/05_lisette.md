# Worksheet — Lisette

**Welcome to your afternoon.** This worksheet is built around the finance work you do every day — agreements, policies, reconciliations, the documents you keep coming back to. The goal is for you to leave today with at least one working assistant tied to your real materials, ready to use next week.

You'll start with a short warm-up, then **pick one of three paths**. Each ends with something you can actually use.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:
- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

One ground rule: this worksheet is deliberately cautious about numbers. Plain Claude is unreliable as a calculator, so we lean on its strengths (reading documents, finding answers, drafting text) and away from its weaknesses (totals, balances, reconciliation figures). The closing section points to where Claude *can* do real maths — but that's a separate conversation for after the workshop.

---

## Warm-up — Ask your loan agreement a question *(~15 min)*

**You'll need:** one document — a loan agreement, insurance policy, or intercompany cost agreement. Pick whichever you most often look up details from.

**Step 1.** Open a new chat in Claude.

**Step 2.** Upload the document. Then ask:

> *"Read this agreement. Summarise the key terms: who the parties are, the amount, interest rate, repayment schedule, key dates, and any clauses that are unusual or could matter later."*

**Step 3.** Ask 3 specific questions you actually have about it. Real ones — questions you'd have to dig through the document to answer manually. Examples:

> *"When is the next payment due, and what happens if we miss it?"*
>
> *"Can we repay this early? Under what conditions?"*
>
> *"Is there a clause that changes things if interest rates move?"*

For each answer, ask Claude to **quote the specific section** of the agreement it's pulling from.

**Step 4.** One more question:

> *"What questions should I be asking about this agreement that I haven't yet? Things that could matter but might not be obvious."*

**What you just did.** Turned a document you used to dig through into something you can ask. The agreement didn't change — but you can now find things in it without scrolling. That's the foundation of Path 1.

---

## Pick a path

Three paths below. **Not sure where to start? Try Path 1** — the Knowledge Vault Project is the asset most worth having for your role.

---

### Path 1 — Build your Finance Knowledge Vault *(~30 min)*

**You'll leave with:** a Claude Project that holds your key agreements, policies and reference materials — and answers your questions about them.

The Project gets more useful over time. Each new document you add gives it more to work from.

#### Step 1. Create the Project.
- Click **Projects** in the sidebar, then **New project**.
- Name it: **Lisette — Finance Reference**.

#### Step 2. Upload everything reference-y.
Upload:
- Loan agreements.
- Insurance policies.
- Intercompany cost-allocation agreements.
- Any standing reference document you find yourself digging through Outlook or shared drives to find.

Don't worry about over-uploading. The Project handles a lot of context.

#### Step 3. Give the Project its instructions.
Paste this into the **Custom instructions** and adjust:

> *"You hold reference materials for our finance operations. [Adjust this opening line to describe your scope — e.g. 'across our group of companies in NL/BE/PL', or whatever fits.]*
>
> *When I ask a question:*
> *- Find the answer in the uploaded documents.*
> *- Quote the relevant clause or section so I can verify.*
> *- If multiple documents are relevant, list each one with its specific contribution.*
> *- If you can't find an answer in the documents, say so clearly — never guess on contractual or financial matters.*
>
> *Never produce financial figures of your own — counts, sums, balances. If I ask 'how much do we owe?' your answer should always be 'according to [document name], the principal is [X] and the schedule says [Y]' — quoting the document, not calculating.*
>
> *Always remind me to verify the source before acting on anything material."*

#### Step 4. Test it.
Start a new chat inside the Project. Ask 3 to 5 questions you genuinely have right now and can't quickly answer. Real questions, not test ones.

#### Step 5. Watch how it answers.
- Does it quote the right section?
- Does it say "I don't know" when it should?
- Does it remind you to verify?

If anything's off, refine the instructions until the behaviour matches what you want.

#### Step 6. Make it a habit.
Whenever you receive a new agreement or reference document — upload it to this Project. The Vault gets more useful over time. After a few months, you stop having to *dig* for the details you used to remember finding.

**Important framing:** this Project is a *search tool over your own materials*, not a financial advisor. Always verify what it tells you against the source document before acting.

#### Stretch goal
Ask Claude to scan the Project as a whole:
> *"Looking at all the agreements in this Project, what are the next 5 key dates across all of them? Quote each date with the document it comes from."*

---

### Path 2 — Transaction-matching draft *(~25 min)*

**You'll leave with:** a workflow that turns ugly PayPal or business-card exports into a candidate-matches table you only need to **verify**, not build from scratch.

Pick this path if PayPal / card matching is more painful than the document lookup work.

#### Step 1. Open a new chat in Claude.

#### Step 2. Paste your inputs.
Paste:
- The list of transactions from PayPal or the business card export.
- The corresponding list of orders the transactions should match against.

**If you don't have these inputs with you:** describe the matching problem to Claude — what fields are in each source, how a match usually looks, what makes one ambiguous. Ask Claude to *"build a small worked example with 5 made-up transactions and 5 made-up orders, including one obvious match, one clear non-match, and one ambiguous case, so I can see how the workflow runs."* You'll still leave with a pattern to rerun on real data next time.

#### Step 3. Use this prompt.

> *"Match each transaction to the most likely order.*
>
> *Output a table with these columns: Transaction date, Transaction amount, Likely matching order, Confidence (high / medium / low), Reason for the match.*
>
> *Flag any transaction that has no confident match — those are the ones I'll need to investigate myself.*
>
> *Don't invent matches. If there's nothing plausible, say 'no match found' in that row."*

#### Step 4. Test on a known case.
Start with 10 to 20 transactions where you already know what should match what. Watch Claude's confidence ratings. Are they sensible? Does it correctly flag the genuinely ambiguous cases?

This is how you **calibrate trust**. If Claude is over-confident on a real-life ambiguous case, you know to take its "high confidence" ratings with a grain of salt.

#### Step 5. Use it as a sorting tool.
The point of this is **not** that Claude does the matching for you. The point is that Claude sorts a pile of transactions into:
- The high-confidence matches you can verify quickly.
- The low-confidence or unmatched ones that genuinely need your attention.

You're shrinking cognitive load, not removing the check.

#### Stretch goal
Save the prompt as a reusable pattern. Each new period's exports go through the same workflow.

---

### Path 3 — Consolidated sheet: consistency check and narrative *(~20 min)*

**You'll leave with:** a workflow for getting a second pair of eyes on the consolidated sheet you build for the group — Claude flags where things look inconsistent, and drafts the explanatory narrative around what you've already verified.

This path sidesteps the numerical-accuracy issue cleanly. You bring the figures (already prepared, already verified by you). Claude helps with consistency and writing.

#### Step 1. Open a new chat in Claude.

#### Step 2. Paste the sheet.
Bring the latest version of the consolidated overview you produce for the group — the one that pulls together the key figures across the entities.

**If you don't have it with you:** describe the structure to Claude — which entities are in the sheet, which line items you track for each, how subsidiary figures roll up to the group total, what the comparison is (current vs prior period, vs budget, or whatever you use). Ask Claude to *"build a small worked example with 3 made-up entities so I can see how the workflow runs."* You'll still leave with a pattern to rerun on real data next time.

#### Step 3. Tell Claude what *should* be true, then ask it to check.
This is where finance language matters. Different sheets enforce different relationships — totals that should sum across columns, subsidiary figures that should roll up to a group total, period-over-period comparisons that should balance against an opening figure. **You know what should hold on your sheet. Claude doesn't.**

So spell it out, in your own terms. For example:

> *"Here is our consolidated overview. The relationships I rely on for this sheet are:*
> *- The group total in column X should equal the sum of the subsidiary figures above it.*
> *- For each entity, the figures in the comparison columns should reflect the same accounting basis as the current period.*
> *- [Any other internal-consistency rule that applies to your sheet.]*
>
> *Check each row and column against these rules. Flag any inconsistency. Don't recalculate the figures themselves — just check whether the numbers as presented respect the relationships above.*
>
> *Also flag anything that looks anomalous at a glance — an outlier value, a missing figure, a sign that may be wrong, a unit mismatch.*
>
> *List everything I should double-check before this sheet goes further."*

**Important framing.** Claude is *checking your work for internal consistency*, not *doing the accounting*. The rules it checks against are the ones *you* tell it. You verify any flag against the source.

#### Step 4. Ask for the narrative.
Once the flags are resolved and you're happy with the sheet, ask Claude to draft the text that goes with it:

> *"Now draft the explanatory narrative for this sheet. Audience: senior leadership, 5-minute read. Cover: what's the overall picture across the entities, where things are healthy, where they need attention, anything notable in the period-over-period comparison. Tone: professional, factual, no jargon for jargon's sake.*
>
> *For anything that calls for an explanation of cause, frame it as 'this likely reflects X' — don't assert causes you can't be sure of."*

#### Step 5. Iterate.
- *"Make it shorter."*
- *"More cautious on Entity B's cost line — we don't actually know what's driving it yet."*
- *"Add a section on open questions for the next period."*

#### Step 6. Save the prompt template.
Next month, you reuse this — same consistency rules, same narrative draft, new figures.

#### Stretch goal
Ask Claude to also draft the executive summary email that goes with the sheet — 4 lines, the kind a CEO actually reads.

---

## Where to go next — Code Execution (for after the workshop)

Today we deliberately stayed away from anything where Claude itself produces numbers. The reason: plain Claude is unreliable as a calculator, and finance is the area where being subtly wrong matters most.

**The next step for you specifically is *Code Execution*** — a feature you can turn on in **Settings → Feature Preview**. With it, Claude writes and runs real Python to do calculations, build pivot tables, reconcile transactions, and produce verified figures. It's the same Claude, but for the maths it writes proper code instead of guessing.

This is where finance use cases open up — but it deserves a focused conversation, not a worksheet stretch goal. After you've used your Knowledge Vault for a few weeks and feel comfortable with the basics, just reach out to Mara or Pawel and we'll set up time for an informal walkthrough.

---

## What we deliberately didn't do today

- **Direct interaction with your finance and bank systems.** Claude can't currently drive those interfaces. Several would be good candidates for integration work — they go on the "Beyond Claude alone" board at the front of the room.
- **Consolidation calculations.** Plain Claude shouldn't be doing these. See the Code Execution note above.

---

## End-of-day check

Before you leave, make sure:
- [ ] You have a working **Finance Knowledge Vault** Project (if you did Path 1).
- [ ] You've tested it with 3+ real questions.
- [ ] You've uploaded at least one document you didn't have during testing but realised you needed.
- [ ] You know the next 3 documents you'll upload over the coming weeks.
- [ ] You know to reach out to Mara or Pawel about Code Execution once you've used the Vault for a few weeks and want to push further.

Pawel and Mara are around all afternoon.
