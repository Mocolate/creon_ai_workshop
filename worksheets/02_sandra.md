# Worksheet — Sandra

**Welcome to your afternoon.** This worksheet is built around the HR and operations work you do every day — vacancies, policies, internal communications, and tracking the rules that keep changing on you. The goal is for you to leave today with at least one working assistant tied to your real materials, ready to use in your daily work.

You'll do a short warm-up exercise to introduce a Claude pattern that's worth knowing, then **pick one of three paths**. Each path ends with something you can take back to your job.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:
- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

---

## Warm-up — Let Claude interview you on a vacancy refresh *(~15 min)*

This is to teach you a Claude move that's worth knowing: instead of telling Claude everything upfront, ask it to ask *you* the questions first. You'll use this pattern in two of the three paths.

#### Step 1. Open a new chat in Claude.

#### Step 2. Paste a recent vacancy from Creon and ask Claude to interview you.

> *"This is a recent vacancy we used at Creon. I want to refresh it for a new role — same level but different position. Before you rewrite anything, ask me up to 7 questions about what's different for the new role."*

#### Step 3. Answer the questions Claude asks.
Be brief — single lines are fine.

#### Step 4. When you've answered, say:

> *"Good. Now produce the refreshed vacancy."*

**What you just did.** Asked Claude to interview you instead of trying to predict what it needs upfront. This pattern shows up again in two of the three paths.

---

## Pick a path

Three paths below. Each one ends with a working tool. **Not sure where to start? Try Path 1** — it's the most universally useful for your role.

---

### Path 1 — Build your Creon HR Assistant *(~25 min)*

**You'll leave with:** a Claude Project that knows your HR materials and your tone — ready for vacancies, internal announcements, policy summaries and the day-to-day HR writing you do.

#### Step 0 — Gather your materials (max 5 min)
More materials help Claude match your tone, but don't let gathering eat your whole path.

**Minimum to start with** (find these first, then move on):
- One recent vacancy (the one from the warm-up works).
- One example of something you've written in your voice — an internal announcement, an HR email, a policy summary.

**Ideal additions** (if quick to find — set a 5-min total cap for gathering):
- The employee handbook or its most-used sections.
- The sick-leave and parental-leave policies.
- A couple more examples of internal announcements or HR emails you're happy with.
- Anything else you find yourself opening repeatedly when writing.

You can always upload more later — Projects let you add files anytime.

#### Step 1. Create the Project.
- In Claude, click **Projects** in the left sidebar, then **New project**.
- Name it: **Sandra — Creon HR**.

#### Step 2. Upload your materials.
Upload what you gathered in Step 0. Start with the minimum; add the rest if you have them.

#### Step 3. Give the Project its instructions.
Paste this into the **Custom instructions** box and adjust:

> *"You help me with HR work for Creon. You hold our templates, policies and tone-of-voice examples in this Project.*
>
> *Defaults:*
> *- Reply in Dutch unless I write to you in another language.*
> *- Use the tone of voice in the uploaded example announcements.*
> *- For vacancies, follow our vacancy template structure.*
> *- For policy questions, ground your answer in the uploaded handbook and quote the relevant section.*
>
> *When a topic touches on Dutch employment law (retirement, sick leave, parental leave, termination), always flag it as something I should verify with a legal advisor before acting. Never give a confident legal opinion.*
>
> *Before drafting longer documents, ask me up to 5 questions if anything important is unclear."*

#### Step 4. Test it.
Start a new chat inside the Project. Try something you'd actually do soon:

> *"Draft a short internal announcement explaining we're moving the team meeting from Monday morning to Tuesday afternoon, effective from next month."*

Or:

> *"I need to send a friendly reminder to managers about logging holiday requests before the end of the year. Draft something."*

#### Step 5. Refine.
The tone won't be perfect first try. Tell Claude what to adjust:

> *"This sounds too formal — match the example in [filename]."*
>
> *"Always end internal announcements with a single warm closing line, not a corporate sign-off."*

Update the Project instructions with anything you discover so it doesn't make the same mistake twice.

#### Stretch goal
Add an instruction: *"When I ask you to write something I might want to translate into another language, after producing the Dutch version, ask me whether I want it translated."*

---

### Path 2 — Build your HR Legal Radar *(~25 min)*

**You'll leave with:** a workflow for tracking what's changed in Dutch employment law and what it means for Creon's current materials.

This one tackles the recurring *"is this still current?"* question that creeps up whenever something in employment law shifts. Claude with web search isn't a lawyer, but it's a serious accelerator for the research half.

#### Step 1. Open a new chat in Claude.
Make sure **Web Search** is enabled in Settings → Feature Preview.

#### Step 2. Ask the radar question.
Pick a topic you've been wondering about. Then paste something like:

> *"Search for changes in Dutch employment law over the last 6 months that affect [retirement / sick leave / parental leave / fixed-term contracts — pick one].*
>
> *Summarise as a table with these columns: Change, Effective date, Source (with link), What this means in practice for me as an employer."*

#### Step 3. Cross-check against your own materials.
Once you have the table, follow up:

> *"Now, given these changes, review my current [vacancy template / sick-leave policy / whatever you uploaded]. Quote the specific section, then suggest what should be updated. If a section is fine as-is, say so."*

#### Step 4. Save the result.
Ask Claude to package it as a single document:

> *"Combine the change summary and the policy review into one document with clear sections. Add a 'date this was checked' line at the top so I know how fresh this is."*

You can save the response or ask Claude to create an Artifact (a clean document you can download).

#### Step 5. Make it a habit.
Bookmark this chat. Every few months — or whenever a colleague says "I heard something changed" — come back and rerun the radar. Save each version with a date.

**Important and non-negotiable:** Claude can be confidently wrong about regulations. Always verify the source it cites, and always check with your legal advisor before changing actual policy. This is a research aid — *not* a legal opinion.

#### Stretch goal
Create a Project called **Sandra — Legal Radar** with the same instructions and your current policies uploaded. Then you can quickly rerun the radar without re-explaining context each time.

---

### Path 3 — Draft a new vacancy from scratch with deep questioning *(~20 min)*

**You'll leave with:** a polished vacancy ready to publish, built by letting Claude interview you in depth before it writes a single line.

An extended version of the warm-up: deeper questioning, sharper output.

#### Step 1. Pick a real role.
Choose one you actually need to hire for soon, or one you'd want a template for.

#### Step 2. Open a new chat in Claude.

#### Step 3. Start with deep reverse-prompting.
Paste:

> *"I need to write a vacancy for a new role at Creon. Before you write anything, interview me. Ask me up to 12 questions covering: the role and its responsibilities, the team it joins, must-have skills vs nice-to-haves, salary band, culture fit, growth path, and anything else you think I should clarify before you write."*

#### Step 4. Answer honestly and briefly.
Don't write essays — single sentences are fine. The point is to think clearly, not write twice.

#### Step 5. Get the draft.
> *"Now produce the vacancy."*

#### Step 6. Iterate.
Variations to ask for:
> *"Now give me a shorter version — half the length."*
>
> *"Now make it more enthusiastic without sounding salesy."*
>
> *"Now produce an English version for international candidates."*

#### Step 7. Save the conversation.
Next time you hire, start a new chat the same way — let Claude interview you, then produce the vacancy.

#### Stretch goal
After the vacancy is done, ask:
> *"Suggest 3 places this role would be best advertised, and one short LinkedIn post I could share to my own network promoting it."*

---

## What we deliberately didn't do today

- **Direct access to Exact Online for salary processing.** Claude can't currently drive the Exact interface. Worth talking to us about — this is the kind of thing that goes on the "Beyond Claude alone" board.

---

## End-of-day check

Before you leave today, make sure:
- [ ] You have at least one working Project (Path 1 is the most universally useful) you can open the next time you need it.
- [ ] You've added any materials Claude was missing during testing.
- [ ] You have a clear next step — e.g., "next vacancy goes through the Project."

If you didn't finish your path, take this worksheet home.

Pawel and Mara are around all afternoon.
