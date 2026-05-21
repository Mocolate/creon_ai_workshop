# Worksheet — Anita

**Welcome to your afternoon.** This worksheet is built around the production-flow work you do every day — turning finished windows into pallets, pallets into truck loads, and making sure invoices match what actually shipped. The goal is for you to leave today with at least one working assistant that helps with the real, complex planning that takes up your time.

You'll do a short warm-up to feel how Claude works, then **pick one of four paths**. Each path ends with something you can use after today. If you finish early, do another. The paths you don't finish here, you can finish at home — they're yours to keep.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:

- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

---

## Warm-up — Ask Claude to read a recent order *(~10 min)*

**You'll need:** one recent order from WPS — the kind you'd normally pull up to start planning pallets or invoicing. Export it or screenshot it; doesn't matter which.

**Step 1.** Open a new chat in Claude.

**Step 2.** Upload the order. Then ask:

> *"This is a window order from Creon's production system. Read it and tell me what's on it: how many windows, what types, which are BE and which are not, total width, anything that stands out for shipping or invoicing."*

**Step 3.** Push back if anything is wrong or missing:

> *"You missed the (BE) markers on the last 3 rows — those are different. Re-read."*

**Step 4.** One more question:

> *"If you were planning this order through to delivery, what would you want to know that isn't on this sheet?"*

**What you just did.** Gave Claude a real document and got back a structured read of it. The paths below build on this — different tasks, same underlying move.

---

## Pick a path

Four paths below. Each ends with a working tool. **Not sure where to start?** Paths 1 and 2 are the heavyweight ones — both use a Claude feature called **Code Execution** that does real calculations and produces real Excel files. They're more advanced but tied directly to your daily work. Path 3 is lighter and finishable in 20 minutes. Path 4 is open-ended — Anita-driven.

---

### Path 1 — Pallet planning with Code Execution *(~30 min, advanced)*

**You'll leave with:** a working prompt that takes a list of windows from an order and produces a pallet plan as a real Excel file — telling you which windows go on which pallet, in which row, and how wide each pallet ends up.

**Why this is its own path.** Pallet planning has real combinatorial complexity — you're juggling window widths, row limits, the BE/non-BE distinction, stacking height, order grouping, and date priority. Plain Claude can't reliably do this kind of multi-constraint problem in its head. But Claude has a feature called **Code Execution**, where it writes and runs real Python code on your data. That's the right tool for this.

**Good news:** Geoffrey has already tested this prompt and got a working pallet plan out of it. You'll be iterating on something that already works, not starting from scratch.

#### Step 1. Open a new chat in Claude.
Make sure **Code Execution / File Creation** is on in **Settings → Feature Preview**. Grab Mara or Pawel if you can't find it.

#### Step 2. Upload a real window list.
Pull a recent order export from WPS — the kind of list you'd actually plan pallets from. Include order numbers, window types (with BE marked clearly), widths, heights, and dates.

#### Step 3. Paste Geoffrey's prompt.
This is the exact prompt Geoffrey tested. Paste it word-for-word as the start of your conversation:

> *We like to create a list how to put windows on a "pallet". To have it in the right order as efficient as possible. What is a pallet:*
>
> *1. Windows are marked with "BE" and without BE. Both are windows, only BE is more slim and therefore more rows of windows will fit on a pallet.*
> *2. A pallet can contain 3 rows of products without BE and 4 rows of products with BE.*
> *3. Write down on which row you put which windows.*
> *4. For example on row 1 you put a windows with 110 cm width. Row 2 you put a window of 100 cm width and row 3 aswell a windows of 100 cm width. The pallet is always same of the widest window minus 10 cm.*
> *5. If you have on row 1 a window of 300 cm width, you can put 2 other windows on row 2 or even 3 windows, as long they together do not pass the 300 cm width.*
> *6. Delivery the output file in xls;*
>
> *Few things to take into account:*
>
> *1. As many windows as possible on the same pallet with the same order number.*
> *2. How strict should same-order grouping be on a pallet? Mix only to fill partials.*
> *3. Should I attempt side-by-side packing per row? Yes including stacking.*
> *4. All dimensions are in centimeters.*
> *5. You are allow to turn a window, but only when height doesnt exceed 240 cm.*
> *6. Preferably windows with the earliest date on the first pallets.*
> *7. You can put on each pallet 3 rows of normal windows or 4 windows which are marked with BE.*
> *8. You can put multiple windows on each other with a maximum of 240 cm height.*
> *9. Please write the width the pallet should be.*
> *10. Please include into the contents the full order number + width / height of the windows.*

Claude will write Python code, run it on your data, and produce an Excel file with the pallet plan.

#### Step 4. Verify against what you'd do manually.
Pick one or two pallets from Claude's output and sanity-check them yourself:

- Are the rows respecting the 3-rows / 4-rows-BE rule?
- Does row width add up to less than the widest window in that row?
- Is anything taller than 240 cm where it shouldn't be?
- Are same-order windows grouped together where possible?

If anything's wrong, tell Claude specifically:

> *"On pallet 3, row 2 has a 230 cm window and a 90 cm window side by side — that's 320 cm total but the widest window is only 230. That's wrong. Re-check the row-width rule."*

#### Step 5. Iterate until it matches your judgement.
Edge cases will come up. Each one teaches Claude something:

> *"You put a TRANSPORTFRAME on the same pallet as regular windows — those should be on their own pallets. Add that rule."*
>
> *"You're not prioritising earliest date enough — the 2026-06-02 windows should all be on the first pallets, but you split them across pallets 1 and 4. Re-pack."*

#### Step 6. Save the working prompt.
Once it produces a plan you trust, **save the chat**. Next week's planning becomes: open the chat, upload the new window list, run the same prompt.

**Important and non-negotiable:**
- **Verify each pallet plan** against your judgement before it goes to the warehouse. The prompt is a starting point, not a final answer. Your read of edge cases is what makes the plan workable.
- **Keep refining the prompt** as you spot rules that should be permanent. Each iteration makes next week's run better.

#### Stretch goal — handover to the warehouse team
Ask Claude:

> *"Now write a short note to the warehouse team explaining how to read this pallet plan — what each column means, how to find a specific window on the right pallet."*

If the boys learn to read the plan, the workflow scales beyond you.

---

### Path 2 — Truck loading with Code Execution *(~25 min, advanced)*

**You'll leave with:** a working tool that takes a list of ready-to-ship pallets and tells you which pallets to load on which truck — respecting truck capacity (2 × 1300 cm), delivery deadlines, and customer grouping.

**Why this is separate from Path 1.** Pallet packing is "windows → pallets." Truck loading is "pallets → trucks." Both are bin-packing problems, but with different constraints. Same Code Execution approach.

#### Step 1. Open a new chat in Claude.
Make sure **Code Execution / File Creation** is on.

#### Step 2. Upload the pallet list.
The screenshot or export of the "Finish Pallet" overview — the one with pallet number, customer, loading centimetres, status, NL date.

#### Step 3. Brief Claude on the constraints.

> *"I'm planning truck loads for delivery. I need help assigning ready pallets to trucks.*
>
> *Truck capacity: each truck has 2 loading slots of 1300 cm each (so 2600 cm total per truck, split into two 1300 cm bays).*
>
> *Constraints:*
> *- Only pallets with status 'Ready from production' can be loaded — not 'In production'.*
> *- Each pallet must ship in time for its NL Date (the delivery deadline).*
> *- Use 'Loading centimeters' as the measurement that fills the truck bay, not 'Centimeters'.*
> *- Group same-customer pallets together where possible.*
> *- Pallets with the earliest NL Date should go on the earliest trucks.*
>
> *Before you write any code, ask me up to 6 questions to make sure you understand the data and any rules I haven't told you."*

Answer the questions. This is where your operational knowledge fills in the gaps.

#### Step 4. Ask for the truck plan.

> *"Now write Python code that reads the pallet list, applies the constraints, and produces an Excel file showing: which pallets go on which truck, in which bay, in what loading order. Include a column for total cm used per bay so I can see how full each truck is."*

#### Step 5. Sanity-check the output.
Pick one truck plan and verify:

- Do the two bays each fit under 1300 cm?
- Are the NL Dates earlier than the truck's departure day?
- Are same-customer pallets together where possible?
- Anything in there that shouldn't be (like "In production" pallets)?

#### Step 6. Iterate.
Edge cases will come up — tell Claude:

> *"On truck 2, you mixed Creon Online BV pallets with another customer. We avoid that unless we can't fill the truck otherwise. Add that as a rule."*
>
> *"You filled bay 1 to 1290 cm and bay 2 to 800 cm — could you have moved one pallet to balance it? Show me what's possible."*

#### Step 7. Save the chat.
Like Path 1, save the working chat for next week's planning.

**Important:** the truck plan is your starting point, not a binding instruction. The warehouse team still has the last word on what physically loads. Use this to *propose* the plan; verify before it ships.

#### Stretch goal — combine with the pallet plan
If you finish Path 1 and Path 2 both, ask Claude:

> *"Given the pallet plan from earlier and this truck plan — are there pallets that could have been combined differently to make truck loading more efficient? Where's the friction between the two plans?"*

That's the kind of cross-cutting question only you can ask once both pieces exist.

---

### Path 3 — Delivery note vs invoice check *(~20 min)*

**You'll leave with:** a reusable prompt that compares a delivery note against the invoice for the same order and flags any mismatches — wrong quantities, wrong prices, missing line items.

This path is lighter than Paths 1 and 2 — it uses plain Claude (no Code Execution needed) because the work is reading and comparing, not calculating.

#### Step 1. Open a new chat in Claude.

#### Step 2. Upload one matching pair.
Pick a recent order where you have both:
- The delivery note (what actually shipped).
- The invoice (what was billed).

PDF, screenshot, or pasted text all work.

#### Step 3. Use this prompt.

> *"I have a delivery note and an invoice for the same order. Compare them line by line and produce a table with:*
> *- Item / product description*
> *- Quantity on delivery note*
> *- Quantity on invoice*
> *- Unit price on invoice*
> *- Whether they match (✓ / discrepancy)*
> *- A brief note for any discrepancy*
>
> *Be precise. Don't summarise — I need to see every line. If something appears on one document but not the other, flag it clearly."*

#### Step 4. Verify on a case you already know.
Try this first on an order you've already manually checked and know matches. Then try it on one you suspect has an issue.

This is how you **calibrate trust**. If Claude correctly says "all matches" on the clean case, and correctly catches the issue on the problem case, you've learned how much you can rely on it. If it gets it wrong, you've learned where you still need to look manually.

#### Step 5. Make it reusable.
Save the prompt. Each new pair becomes: paste delivery note, paste invoice, run the prompt, get the table.

**Important:** Claude **proposes**, you **verify**. The point isn't to skip the check — it's to make the check faster. Anything flagged as a discrepancy still needs your eyes on the source documents before you act.

#### Stretch goal — handle a batch
Once it works for one pair, try:

> *"Here are 5 delivery notes and 5 invoices. Match them up by order number and produce one summary table showing which orders have discrepancies and which are clean."*

---

### Path 4 — File reformatting for suppliers *(~20 min)*

**You'll leave with:** a working approach for the WPS-to-supplier file reformatting you do manually today — colours, view, layout.

This path is deliberately open. You know this workflow better than we do — tell Claude what you're trying to achieve and let it help you figure out the shape of the solution.

#### Step 1. Open a new chat in Claude.

#### Step 2. Tell Claude the story.

> *"Every time I send a file to one of our suppliers, I export it from WPS and then have to reformat it manually before sending — change colours, change the view, adjust layout. I want to see if Claude can help.*
>
> *Before I show you anything, let me explain the workflow."*

Then describe it in your own words — what you start with, what the supplier needs, what changes you make every time, why those changes matter.

#### Step 3. Show Claude an example.
Upload the "before" file (the WPS export) and ideally a "after" file (one you've already reformatted, the way the supplier needs it). If you only have the "before," that's fine — describe what the "after" should look like.

#### Step 4. Ask Claude what it can do.

> *"Looking at what I described and the files I uploaded — what can you actually help me with here? Be honest about what's automatable and what isn't."*

This is the most useful question of the path. Claude will tell you whether this is a Code Execution problem (writing code to transform Excel), a step-by-step instruction problem (a checklist you follow), or something in between.

#### Step 5. Try the approach Claude suggests.
Iterate. This path is exploratory — the goal isn't a finished tool today, it's a clear picture of *whether* and *how* this should be automated.

#### What to take away
If you walk out of this path knowing "yes, this is automatable and here's the prompt that does most of it" or "no, this needs human eyes, but here's a checklist that makes it faster" — either is a win.

---

## What we deliberately didn't do today

A few things came up that aren't on this worksheet — and why:

- **Direct WPS integration.** Claude can't drive the WPS interface today. The exports work; that's the bridge for now. Worth a longer conversation about deeper integration — that goes on the "Beyond Claude alone" board.
- **Optimising across the whole production-to-delivery chain.** Pallet planning (Path 1) and truck loading (Path 2) are big enough each on their own. End-to-end optimisation across the whole flow is a project, not a workshop path.
- **Anything that ships automatically without your review.** Every output from these paths is a draft for you to review before it goes to the warehouse, the supplier, or the customer.

---

## End-of-day check

Before you leave today, make sure:
- [ ] You have at least one working tool (a saved chat or Project) that you can reopen tomorrow.
- [ ] You've tested it on real data.
- [ ] You've noted any edge cases that came up during testing.
- [ ] You have a clear next step — even "next week's pallet plan goes through Claude" is enough.

If you didn't finish your path, take this worksheet home and continue when you have time.

Pawel and Mara are around all afternoon — grab us anytime.
