# Worksheet — Agnieszka (Aga)

**Welcome to your afternoon.** This worksheet is built around the work you do every day at the production site — HR, quality, maintenance, and the documents that come with all of it. The goal is for you to leave today with at least one working assistant that you can actually use tomorrow morning.

You'll do a short warm-up exercise to get the feeling of how Claude works, then **pick one of four paths**. Each path ends with something you can take back to your job. If you finish early, do another path. The paths you don't finish here, you can finish at home — they're yours to keep.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:
- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

---

## Warm-up — Find the patterns in a stack of quality remarks *(~15 min)*

**You'll need:** a batch of recent quality inspection remarks. Pull a week or month's worth from wherever they live — emails, paper notes, the WPS system. 10–15 entries is plenty. Don't reformat; messy is fine.

This is to get a feel for how Claude handles a pile of messy notes and gives you back something useful.

**Step 1.** Open a new chat in Claude.

**Step 2.** Paste the full batch of quality remarks. Then ask:

> *"Read all of these quality inspection remarks. Group them by employee. For each employee, list the issues that came up."*

**Step 3.** When Claude responds, follow up with:

> *"Now zoom out. Across all of these remarks, what patterns do you see? What types of issues are most common? Are there any issues that keep coming back?"*

**Step 4.** One more follow-up:

> *"If you were me, what would you do first based on this?"*

**What you just did.** You gave Claude messy text and got back structure. In Path 1 you'll set that up as a Project so it happens every time without re-explaining.

---

## Pick a path

Four paths below. Each one ends with a working tool you can use after today. **Not sure where to start? Try Path 1** — it's the one most directly tied to your day-to-day. Path 4 is more advanced and uses a different Claude feature (Code Execution) — it's tied to one of the harder problems you handle, so worth a try if you have time.

---

### Path 1 — Build your Quality Coaching Co-pilot *(~25 min)*

**You'll leave with:** a Claude Project that turns the inspectors' messy notes into per-employee coaching plans in about five minutes.

#### Step 1. Create the Project.
- In Claude, click **Projects** in the left sidebar, then **New project**.
- Name it: **Aga — Quality & Coaching**.

#### Step 2. Upload your materials.
Upload everything you have that's relevant:
- The batch of quality remarks from the warm-up (or a representative sample).
- The existing taxonomy of quality issue types, if you have one written down anywhere.
- Examples of past coaching notes or conversations that went well — the tone you want to keep using.

#### Step 3. Give the Project its instructions.
In the Project's **Custom instructions** box, paste this and adjust as you like:

> *"You help me synthesize quality inspection remarks into constructive coaching plans for employees on the production floor.*
>
> *When I paste a batch of remarks, do the following:*
> *1. Group them by employee.*
> *2. For each employee, identify the patterns and the type of issue.*
> *3. Suggest a focus area for improvement.*
> *4. Draft a short coaching note I can use as a starting point for a one-on-one conversation. Tactful, specific, and constructive — never accusatory.*
> *5. Always offer concrete, actionable improvement steps — not vague advice.*
>
> *Use the uploaded examples to match my tone. When in doubt, ask me before guessing."*

#### Step 4. Test it cold.
Start a new chat **inside the Project**. Paste a fresh batch of remarks (ones the Project hasn't seen yet). See what comes out.

#### Step 5. Refine.
The first output rarely matches what you want exactly. Ask for changes:

> *"For employee X, the tone is a bit too formal. Soften it."*
>
> *"Add a section at the end with a one-line action for me as the manager."*
>
> *"The improvement steps for Y are too generic. Make them specific to the issue you described."*

**Important:** every coaching note Claude produces is a *draft for you to review and edit before using*. You're the one who knows your people. Claude does the first pass; you keep the judgment.

#### Stretch goal (if you finish early)
Add a standing instruction to the Project: *"If you see the same pattern across multiple employees, flag it at the top as a potential team-wide training need rather than an individual issue."*

---

### Path 2 — Build your HR Onboarding Pack Generator *(~20 min)*

**You'll leave with:** a Claude Project that produces a complete onboarding document pack for a new hire from a few simple inputs about them.

#### Step 1. Create the Project.
- Name it: **Aga — HR Onboarding**.

#### Step 2. Upload your templates.
You've already emailed us a set of standard HR documents for a new hire — the employment contract, scope of duties, and the declarations/statements document. Use those as your templates. If you have others handy (welcome letter, IT request, equipment list, first-week schedule), add them too.

#### Step 3. Give the Project its instructions.
Paste this into the **Custom instructions**:

> *"You help me prepare onboarding documents for new hires.*
>
> *When I give you the details of a new hire — name, role, start date, department, salary band — generate the complete onboarding pack using the templates I've uploaded.*
>
> *Fill in everything that can be filled in from the inputs. For anything that needs my input, mark it clearly with [REVIEW: …].*
>
> *Default language: Polish. Switch to Dutch or English only when I explicitly ask.*
>
> *Always produce all documents, even if some need review. I'll review the whole pack before sending anything to the new hire."*

#### Step 4. Test it.
Start a new chat inside the Project. Give it a real recent new hire's details. Type something like:

> *"New hire: Anna Nowak, Role: machine operator, Start date: 1 December 2026, Department: Production line A. Generate the full onboarding pack."*

#### Step 5. Refine.
Look at what Claude produced. If a template wasn't followed correctly, tell it:

> *"For the welcome letter, follow my template more closely — the second paragraph in my template should always be about the buddy system."*

Update the Project instructions with anything important you discovered.

**Important:** every document Claude produces is a *draft you review before sending*.

#### Stretch goal — onboarding emails
Add a follow-up prompt template that you can use after the pack is generated:
> *"Now draft the email I'd send to the new hire's manager letting them know the pack is ready, and a separate one to IT with the equipment request."*

#### Stretch goal — CV screening helper
You mentioned wanting a smart recruitment tool, with the honest caveat that CVs are often weak and incomplete. Claude can't fix bad CVs, but it can do the first triage pass for you. Try this in the same Project (or a new chat):

> *"Here's a job description for a [role]. And here's a CV I've received. Assess the fit on a scale of 1-5 and explain. Be honest about what's missing from the CV — don't assume capabilities that aren't stated. List the top 3 questions I should ask in a phone screen to find out what the CV doesn't tell me."*

Test this on 2–3 real CVs you've received recently. The value isn't in Claude making the hiring decision — it's in shrinking a stack of CVs to a focused shortlist faster.

**Important:** Claude's screening is a *first filter*, not a decision. Always read the CVs of the candidates Claude flagged as good fits yourself before inviting anyone for an interview.

---

### Path 3 — Build a Maintenance Schedule Master Document *(~20 min)*

**You'll leave with:** a year-long maintenance schedule as a real Excel file for all buildings and equipment, plus email templates for whoever does each check.

This one is different — it's a one-time deliverable, not a Project. Claude will produce a real Excel file you can open and edit.

#### Step 1. Open a new chat in Claude.
Make sure **Code Execution / File Creation** is enabled in Settings → Feature Preview (Mara or Pawel can help if it isn't).

#### Step 2. Give Claude your inventory.
Paste what you have — buildings, equipment, and the checkup frequency rules. It can be messy. Example:

> *"Here is our inventory of buildings and equipment that need regular maintenance checks:*
> *- Building A: fire extinguishers (annual), emergency lights (quarterly), HVAC filters (every 3 months)…*
> *- Building B: ...*
> *- Forklift 1: inspection every 6 months, certification annually…*
> *…etc."*

#### Step 3. Ask for the master schedule.
Then:

> *"Generate a year-long maintenance schedule as an Excel file. Columns: Date, Location, Equipment, Check type, Responsible party (leave empty for me to fill in), Status (start as 'Planned'), Notes.*
>
> *Spread the work out across the year — don't bunch all the annual checks into January. Color-code the rows by urgency or category if possible."*

Claude will write Python code that produces a real Excel file. You'll get a download link.

#### Step 4. Ask for the email templates.
In the same chat, follow up:

> *"Now draft three email templates I can send to whoever is responsible for each kind of check. One for routine quarterly inspections, one for annual safety certifications, and one for follow-up if a check is overdue. Polish if possible."*

#### Step 5. Save everything.
- Download the Excel file.
- Save the email templates somewhere you can find them again.
- Consider creating a small "Aga — Maintenance" Project later where you upload this Excel and use it as the reference for ongoing planning.

**Important:** the schedule Claude produces is a *starting point you review*. It doesn't know your buildings or your team — you'll need to assign responsible parties, adjust dates around holidays, and add anything it missed.

#### Stretch goal
Once you have the schedule, ask Claude:
> *"Looking at this schedule, where are the busiest weeks? Where would I add extra capacity if I could?"*

---

### Path 4 — Bonus calculation with Code Execution *(~30 min, advanced)*

**You'll leave with:** a working Claude prompt that takes a monthly timesheet and applies your bonus rules — returning a per-employee bonus breakdown you can verify and use as the starting point for the monthly bonus list.

**Why this is separate from the other paths.** Earlier we said bonus calculations were too risky for plain Claude — and that's true. Plain Claude is unreliable as a calculator. But Claude has a feature called **Code Execution**, where it writes and runs real Python code to do the math. For a rules-based calculation like your bonus system, that's the right tool. You bring the rules and the data; Claude writes the code; Python does the maths.

You've already emailed us the materials we need: the bonus rules document (`PREMIE_zasady_2026.docx`), three example timesheets (`Timesheet_2026-4-X.xls`, `-Y.xls`, `-Z.xls`), and the resulting April bonus list (`PREMIE_04_2026.xlsx`). That last file is the *verified answer key* — it lets us check whether Claude got it right.

#### Step 1. Open a new chat in Claude.
Make sure **Code Execution / File Creation** is enabled in Settings → Feature Preview. Grab Mara or Pawel if you can't find it.

#### Step 2. Upload your bonus rules + the three example timesheets.
Don't upload the April bonus list yet — you'll use that to verify Claude got the right answer in Step 4.

#### Step 3. Ask Claude to interview you about the rules.
> *"I've uploaded the bonus rules and three example employee timesheets. Before you write any code, ask me up to 8 questions to make sure you understand the rules correctly. Pay special attention to edge cases — what counts as a late arrival, how holidays are treated, what 'WZ' or 'W' in the timesheet means."*

Answer the questions. The timesheets have abbreviations and edge cases the rules document doesn't fully cover — your knowledge of what they mean is essential.

#### Step 4. Ask Claude to compute the bonuses.
> *"Now write Python code that reads the three timesheets, applies the bonus rules, and outputs a table with: Employee, Attendance bonus, Teamwork bonus, Overtime bonus, Total. Run the code and show me the result."*

Compare what Claude produces against the actual April bonus list (`PREMIE_04_2026.xlsx`) — does it match? If not, where does it disagree, and is Claude wrong or are the timesheets ambiguous?

#### Step 5. Iterate until it's right.
The first version probably won't perfectly match. Your rules have edge cases Claude needs to learn. For each mismatch:

> *"For employee Y you computed [X], but the real answer is [Y]. Walk me through your logic. What rule were you applying?"*

Then correct Claude's understanding and ask it to recompute.

#### Step 6. Save the prompt + the code.
Once Claude's code matches the April result, you have a reusable tool. Each month: upload the new timesheets, ask Claude to run the same code, get the bonus table, verify, done.

**Important and non-negotiable:**
- **Verify every single bonus** against the timesheets manually for the first few months. Claude's code is only as good as the rules it learned — and edge cases will keep appearing.
- **Treat this as an aid, not an authority.** The output is a *draft bonus list* that saves you the typing and the cross-referencing. Final sign-off is yours.

#### Stretch goal — handle the 70-employee case
Once it works for 3 employees, ask:
> *"Now imagine I upload 70 timesheets at once, all in the same folder format. Can you adapt the code to process all of them in one run, and produce a single bonus table sorted by total descending?"*

That's the version that scales — one upload, one run, the whole bonus table at once.

---

## What we deliberately didn't do today

A few use cases we discussed but didn't put on this worksheet — and why:

- **Intrastat / SODI reporting.** Too system-specific and regulatory-sensitive for a workshop demo. Mention it to us 1:1 if you want to explore later.
- **Optima invoice processing.** Claude can't currently drive the Optima interface directly. There may be integration paths worth exploring later.
- **WPS direct integration** (sickness/absence analysis per employee, quality-check errors over time, maintenance tracking through WPS). Claude can't read WPS directly. The Quality Coaching Co-pilot (Path 1) and the manual scheduling work (Path 3) are the manual versions — over time we may explore proper integration. Goes on the "Beyond Claude alone" board.

These all go on the "Beyond Claude alone" board at the front of the room. We'll pick them up afterwards.

---

## End-of-day check

Before you leave today, make sure:
- [ ] You have at least one working Project (Path 1, 2, or 4) that you can open tomorrow.
- [ ] You've tested it with at least one real input.
- [ ] You've added the materials you wished Claude had during testing.
- [ ] You have a clear next step — even if it's "use this Project on an actual fresh batch of quality remarks and see how it does."

If you didn't finish your path, take this worksheet home and continue when you have time.

Pawel and Mara are around the whole afternoon — grab us anytime.
