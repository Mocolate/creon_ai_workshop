# Worksheet — Geoffrey

**Welcome to your afternoon.** This worksheet meets you where most of your work actually lives: in your head, between two-minute decisions, in calls and emails you barely get to finish. The goal isn't to convince you AI is magic. It's to show you whether — in 2 to 3 hours — Claude can save you measurable time on two specific things: getting requirements out of your head and into your developers' hands, and getting decisions structured before they leave you.

You'll do a short warm-up that produces something concrete, then **pick one of two paths**. Each ends with something you can use this week.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:
- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

A note on this worksheet: it's designed to let *you decide* whether Claude earns your time. Push back. If something doesn't land, tell us. You don't have to finish the worksheet — you just need to leave with a clear answer either way.

---

## Warm-up — Turn a half-formed idea into something a developer could act on *(~10 min)*

Pick something you've been meaning to communicate to the dev team that's still in your head — a feature you want, a process change, a bug you keep noticing. Doesn't have to be big.

#### Step 1. Open a new chat in Claude.

#### Step 2. Tell Claude about it the way you'd tell a colleague over coffee.
Don't structure it. Don't filter. Two to three minutes of talking (you can dictate if your laptop has a mic, or just type fast and ungrammatically — sentences don't matter). End with something like:

> *"That's it — the rough idea. I want a developer to be able to act on this without coming back to me with five questions."*

#### Step 3. Ask Claude to ask you questions.
> *"Before you structure this, ask me 5 to 7 questions that a developer would need answered before starting work. Cover anything I left vague."*

Answer the questions, briefly.

#### Step 4. Ask for the structured version.
> *"Now produce a one-page brief I could send to a developer. Include: what it is, why it matters, what success looks like, edge cases to watch for, anything that's out of scope."*

#### Step 5. Be honest.
Look at what Claude produced. Two questions:
- Would your dev team actually understand this and start work without a follow-up call?
- Did this take less time than you'd normally spend writing the same thing yourself?

If yes to both, this pattern is worth something to you. If no, tell us why before moving on.

---

## Pick a path

Two paths below. **Path 1** is the requirements/PO workflow at scale — built so you can use it every time you have something to share with dev. **Path 2** is for chaos in motion — the inbox, the 2-minute decisions, the things you don't have time to think about properly.

---

### Path 1 — Build your CEO-to-Dev Translator *(~30 min)*

**You'll leave with:** a Claude Project that turns your half-formed ideas into developer-ready specs with acceptance criteria and edge cases — faster than writing the same brief yourself.

#### Step 1. Create the Project.
- Click **Projects** in the left sidebar, then **New project**.
- Name it: **Geoffrey — Dev Specs**.

#### Step 2. Brief Claude on how your dev team works.
Start a new chat inside the Project. Tell Claude:

> *"I work with a small development team. I want to use you to turn ideas in my head into specs they can act on without coming back to me for clarification.*
>
> *Let me tell you how we work today: [explain — what they build, what kind of features you usually ask for, what your dev team usually struggles with when your requirements arrive, what 'good' acceptance criteria look like for you].*
>
> *Then ask me 5 to 8 follow-up questions about anything I left out — including what level of detail my developers expect, what they tend to push back on, and anything that's specific to how we work."*

Answer the questions.

#### Step 3. Have Claude write the Project's reference notes.
> *"Based on what I told you, write a one-page reference document about my dev team, my product, and what good specs look like for us. I'll save it into the Project so future runs have this as context."*

Save the document — paste it into the Project's knowledge or upload it as a file.

#### Step 4. Give the Project its standing instructions.
Paste this and adjust:

> *"You help me turn ideas in my head into specs my dev team can act on.*
>
> *When I describe an idea, your job is:*
> *1. Ask me 5 to 7 questions to fill the gaps in what I told you — focus on what a developer would need that I haven't said.*
> *2. After I answer, produce a one-page brief with these sections: What it is, Why it matters, Acceptance criteria (what does 'done' look like — testable, not vague), Edge cases to watch for, Out of scope (what we're NOT building).*
> *3. Suggest 2 to 3 specific test cases for the things I'd want to verify myself once it's built.*
>
> *Tone: clear, concrete, not corporate. Write for developers, not for executives.*
>
> *Never make up business logic I didn't tell you. If something is unclear, ask before guessing."*

#### Step 5. Test it cold.
Start a fresh chat inside the Project. Pick a second idea you've been meaning to communicate. Talk it through (rough is good). See what comes back.

Read the brief Claude produced critically:
- Are the acceptance criteria actually testable, or are they vague aspirations?
- Did Claude catch edge cases you wouldn't have thought to write down?
- Is there anything in there a developer would push back on as unclear?

#### Step 6. Refine.
Tell the Project:

> *"This brief is good but acceptance criteria need to be more specific. Look at AC #2 — 'user can log in' isn't a criterion. Rewrite it as something a developer can verify pass/fail."*

> *"Edge cases are too generic. They should be specific to our product. For example, here's an edge case I'd expect you to surface: [specific example]."*

Update the standing instructions every time you spot something that should be a permanent rule.

#### Stretch goal — the test plan
Once a brief is good, add: *"Now produce a test plan I could hand to a tester (or use to test it myself if I had a 10-minute dev environment, which I don't yet). Cover the happy path and the edge cases. Each test in pass/fail format."*

A clear test plan written before development starts changes how the dev team works — even when you can't run the tests yourself.

#### More you can do with this same Project
Once the Project knows your dev team and product, the same setup handles several other tedious tasks. Try any of these:

**Rewriting bad bug reports.**
Paste a customer's frustrated *"the thing is broken"* email, or your own 20-second description of something that's not working.

> *"Turn this into a clean bug report: reproducible steps, expected vs actual behaviour, severity, anything I'd want a developer to know before they start debugging. If anything is unclear from what I gave you, list the questions I should answer before sending."*

**Reviewing dev-written specs for gaps.**
Sometimes the dev team writes the spec and you approve. Paste it.

> *"This is a spec my dev team wrote. Review it as if you were me — what's missing, what would a customer notice that this doesn't address, what edge cases haven't been covered, what would I want clarified before signing off? Be specific, not generic."*

**Drafting "why we're not doing this" replies.**
You've decided to say no to a feature request. Paste the request + your one-line reason.

> *"Draft a reply declining this feature request. Polite, specific about why (use my reason — don't soften it into corporate-speak), and offer one alternative if there is one. Keep it short."*

These all use the same Project — no setup. Try one that's relevant to today.

---

### Path 2 — Triage in motion *(~25 min)*

**You'll leave with:** a reusable pattern for the constant-interrupt rhythm of your day — emails, decisions, things that need to leave your head before they leave you.

This is a different problem from Path 1. Path 1 is *deliberate* — you sit down with an idea and produce a spec. Path 2 is *reactive* — something just landed in your inbox and you have 90 seconds before the next thing arrives.

#### Step 1. Open a new chat in Claude.
This path doesn't need a Project. The pattern works in any chat.

#### Step 2. Try it on a real email you got today.
Pick an email from this morning that needs *some* action from you — a forward, a delegation, a decision, a reply. One you haven't dealt with yet. Paste it.

> *"Here's an email I just received. In under 5 lines: tell me what action this needs from me, who else (if anyone) needs to be looped in, and what the smallest version of 'handling this' looks like. Don't draft a reply yet."*

Read what Claude says. Did it correctly identify what the email needs?

#### Step 3. If the action is "reply," get a draft.
> *"OK, draft the reply. Two versions: short and direct, or warmer with one sentence of context. Both in my voice — I'll show you how to learn that in a minute."*

Pick the version you'd actually send. Edit. Send.

#### Step 4. Try this on 3 to 5 more emails from this morning.
The pattern is the same. Triage → optional draft → edit → send.

Watch the rhythm. The Claude version is paste → triage → optional draft → edit → send. That's measurably shorter than the read-decide-write-review-send loop you'd otherwise run.

Time yourself on a couple. Be honest about whether this saves measurable time.

#### Step 5. Teach Claude your voice (optional, but worth 5 min).
After a few drafts, you'll have noticed Claude doesn't quite sound like you. Fix it:

> *"Here are 3 to 5 emails I've sent recently that sound exactly like me. [Paste them.] From now on, when you draft replies for me, match this voice. List the rules you'll follow so I can correct anything that's wrong."*

Push back on the rules Claude lists. *"Actually I never start emails with 'Hope this finds you well' — drop that"* etc.

From now on every reply draft uses these rules.

#### Step 6. Decide.
After 30 minutes of this, ask yourself: would you do this for an hour tomorrow morning?

If yes, this pattern is worth keeping. If no, tell us why before you go.

---

## What we deliberately didn't do today

A few things came up in conversation that aren't on this worksheet — here's why each one is off the worksheet and where it goes instead.

- **The dev testing environment friction.** Setting up a dev environment to test changes, getting files in and out of it, the dependency on developers to verify things you'd ideally check yourself — all of that came up in conversation. **It's a real problem, and it's bigger than Claude.** Claude can write better test plans (Path 1 stretch goal), but it can't install authenticators or copy files for you. This belongs on the parking-lot board — it's a process and infrastructure conversation to have with Xelerit and Bart properly, not solving in 90 minutes here.

- **Anything involving real customer data.** Nothing on this worksheet asks you to upload anything sensitive. The chaotic-input → spec pattern works equally well with ideas as it does with documents.

- **Pretending Claude is magic.** It's not. You're going to find places it gets things wrong, misunderstands your context, or produces something generic. The worksheet is set up so you can test whether the pattern earns its place — not so you have to take our word for it.

---

## End-of-day check

Before you leave, decide:
- [ ] Does the warm-up pattern (chaotic input → questions → structured output) save you time vs writing the same thing yourself?
- [ ] If yes, do you have one working Project (Path 1) or a reusable workflow (Path 2) — or both — that you'd actually open tomorrow?
- [ ] Anything you want on the parking-lot board for Xelerit follow-up? (The testing environment problem is already there — what else?)

If your answer to the first question is "no," tell us before you leave. That's useful for us too.

Pawel and Mara are around all afternoon.
