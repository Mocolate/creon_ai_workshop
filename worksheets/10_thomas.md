# Worksheet — Thomas

**Welcome to your afternoon.** This worksheet is built around the marketing data you already work with — Google Ads, Meta, LinkedIn, soon TikTok — and the harder questions that don't show up in any single platform's dashboard. The goal is for you to leave with at least one working tool that helps you see things in the data you couldn't easily see before.

You'll do a short warm-up to feel how Claude works with your numbers, then **pick one of three paths**. Each one ends with something you can take back to your work.

**Before you start — getting things into Claude.** You don't have to copy-paste everything. In any chat window you can:

- Drag and drop files (PDFs, Word, Excel, images) straight in.
- Click the paperclip / attachment button to upload from your computer.
- Paste screenshots directly with Ctrl+V or Cmd+V — handy for grabbing the structure of something without retyping.
- On phone or tablet, attach photos from your camera roll or take one on the spot.

Use whatever's easiest for the thing in front of you.

---

## Warm-up — Ask Claude what stands out in last month's data *(~15 min)*

**You'll need:** a recent monthly export from one of your platforms — Google Ads or Meta is fine. Campaign-level data with the usual columns: spend, impressions, clicks, conversions, CTR, CPA, by campaign or ad set.

**Step 1.** Open a new chat in Claude.

**Step 2.** Upload your export. Then ask:

> *"This is last month's [Google Ads / Meta] data for Creon. Read through it and tell me: what jumps out? What's working unusually well, what's underperforming, and is there anything you notice that I might miss looking at this in the platform dashboard?"*

**Step 3.** When Claude responds, push back:

> *"You said [campaign X] is underperforming — show me the specific numbers you're basing that on. What's your benchmark for 'underperforming'?"*

This matters. Claude can be confidently vague. Make it cite the rows.

**Step 4.** One more follow-up:

> *"Now group the campaigns into 2 or 3 buckets based on patterns you see — not by my naming convention, by actual performance behaviour. What groups would you draw?"*

**What you just did.** Gave Claude a flat export and got back something closer to a read of the data — what's grouped with what, what's an outlier, what deserves attention. That's the move you'll build on in Path 1.

---

## Pick a path

Three paths below. Each ends with a working tool. **Not sure where to start? Try Path 1** — it's the most universally useful for your day-to-day. Path 3 is more advanced and uses a different Claude feature (Code Execution) — it's the one tied to Creon's seasonality question, so worth a try if you have the time and the historical data on hand.

---

### Path 1 — Build your Marketing Performance Project *(~25 min)*

**You'll leave with:** a Claude Project that knows Creon's products, your campaign structure, and your platform mix — ready for the recurring "what's happening with our ads right now" question.

#### Step 1. Create the Project.
- In Claude, click **Projects** in the left sidebar, then **New project**.
- Name it: **Thomas — Marketing Performance**.

#### Step 2. Upload your materials.
Upload what you have handy:

- Last 1–3 months of exports from each platform (Google Ads, Meta, LinkedIn).
- A short description of Creon's product lines and what each campaign is targeting — even a few bullet points typed straight into the Project instructions is enough.
- Anything else you reference often when reviewing performance.

#### Step 3. Give the Project its instructions.
Paste this into the **Custom instructions** field and adjust:

> *"You help me review and analyse Creon's paid marketing performance across Google Ads, Meta, LinkedIn, and soon TikTok.*
>
> *When I paste or upload data, do the following:*
> *1. Read it carefully and tell me what stands out — both positive and concerning.*
> *2. Always cite the specific campaigns and numbers you're basing your read on. Never make claims you can't point to in the data.*
> *3. Group findings by significance — lead with what actually matters, not what's easy to say.*
> *4. When you make a recommendation, also tell me what you'd want to know before acting on it. I want to act on data, not on guesses.*
>
> *Be honest when something is ambiguous — don't manufacture insight where there isn't one. 'I don't see a clear pattern here' is a valid answer."*

#### Step 4. Test it fresh.
Open a new chat **inside the Project**. Paste a fresh data export. See what comes out.

#### Step 5. Refine.
Push back on anything that's too generic:

> *"'CTR could be improved' isn't useful. Which specific campaigns, and what would you compare them against?"*
>
> *"You're treating brand and prospecting campaigns the same — they shouldn't be benchmarked against each other. Adjust."*

Update the Project instructions every time you find a rule that should be permanent.

**Important:** Claude doesn't know your strategy unless you tell it. Its first reads will be generic; they get sharper as you correct it.

#### Stretch goal
Add this instruction: *"At the end of every monthly review, suggest the 3 most useful experiments to run next month — be specific about budget shifts, creative changes, or audience tests."*

---

### Path 2 — Cross-platform comparison *(~25 min)*

**You'll leave with:** a workflow that lets you compare performance across Google Ads, Meta, and LinkedIn on the same question — without staring at three dashboards side by side.

This path is for the moments when you want to ask "where is our money working hardest right now" and get an honest answer that crosses platforms.

#### Step 1. Open a new chat (inside your Path 1 Project if you did it, or a fresh chat).

#### Step 2. Upload one month of data from each platform.
Three separate files is fine — Claude will read all of them.

#### Step 3. Ask the comparison question.

> *"Here's last month's data from Google Ads, Meta, and LinkedIn. I want a side-by-side comparison.*
>
> *Build me a single table with: platform, total spend, total conversions, blended CPA, and your read of how each platform is performing relative to the others.*
>
> *Then, separately: which platform did our money work hardest on last month, and why? Be specific about what 'hardest' means — different platforms aren't directly comparable, so tell me what comparison you're making and what its limits are."*

#### Step 4. Push on what's missing.
Claude will produce a table. Read it critically:

> *"You compared on CPA but Meta has a longer attribution window than Google. Adjust your comparison or tell me why you didn't."*
>
> *"LinkedIn has tiny volume — is the CPA there even statistically meaningful? Tell me what sample size you'd want before drawing conclusions."*

The point isn't to win the argument with Claude — it's to surface the assumptions it made that you'd otherwise miss.

#### Step 5. Save the comparison structure.
If you do this monthly, save the prompt. Each month becomes: upload three files, run the same prompt, get a comparable read.

#### Stretch goal
Ask: *"Looking at the last 3 months across all three platforms, has the relative performance shifted? Which platform is trending up and which is trending down?"*

---

### Path 3 — Seasonality analysis with Code Execution *(~30 min, advanced)*

**You'll leave with:** a real analysis of Creon's seasonal pattern across 3 years of data — produced by Claude writing actual Python code — plus a draft of how to act on it for the next 12 months.

**Why this path is separate.** Plain Claude is unreliable as a calculator. For a real numerical analysis across thousands of rows of data over 3 years, you need **Code Execution** — a feature where Claude writes and runs real Python code on your files. You bring the data; Claude writes the code; Python does the maths.

#### Step 1. Open a new chat in Claude.
Make sure **Code Execution / File Creation** is on in **Settings → Feature Preview**. Grab Mara or Pawel if you can't find it.

#### Step 2. Upload your historical data.
You said you have ~3 years of data. Upload as much of it as you have ready:

- Sales or conversion data by month (the actual business outcome you care about).
- Ad spend by platform by month, if you have it consolidated.
- Anything else that varies over the year (product mix, regional split, customer type).

If the data is in many files, that's fine — upload them all. Claude will figure out how to combine them.

#### Step 3. Ask Claude to interview you first.

> *"I've uploaded ~3 years of Creon's marketing and sales data. Before you write any code, ask me up to 8 questions so you understand the data and what I'm trying to learn.*
>
> *Specifically: I want to understand Creon's seasonal pattern — when do we sell what, and how strong is the seasonal effect — so I can plan budget allocation and creative timing for the next 12 months."*

Answer the questions honestly. This step is what separates a useful analysis from a generic one.

#### Step 4. Ask Claude to produce the seasonality analysis.

> *"Now write Python code to analyse the seasonality in this data.*
>
> *Specifically:*
> *1. Produce a clear monthly pattern across the 3 years — for each product category, when does demand peak and when does it dip?*
> *2. Quantify the seasonal effect: is the peak month 20% above average, 50%, 2x?*
> *3. Show me whether the pattern is consistent across the 3 years or whether it's shifting.*
> *4. Highlight anything that doesn't fit a clean seasonal story — anomalies, structural breaks, things worth investigating.*
>
> *Run the code and show me the results as both a table and a chart. Be honest about what the data does and doesn't tell us — if the pattern is noisy, say so."*

Look at what comes back. Charts and numbers should match your intuition for *some* of it; if they don't match anywhere, something's off and you should ask Claude to walk you through the data.

#### Step 5. Push on the analysis.
Read it critically:

> *"You said [product category] peaks in May. Show me the monthly numbers that led to that — I want to see the 3 Mays side by side."*
>
> *"The pattern looks weaker in 2024 than 2022. Why? Was there a campaign or external event that would explain that, or is the seasonal effect actually fading?"*

Push until you trust the read.

#### Step 6. Ask for the action plan.

> *"Based on this seasonality analysis, draft a 12-month plan for me:*
>
> *- When should I increase spend, and by roughly how much?*
> *- When should I shift creative toward which product categories?*
> *- Where are the quiet months I should use for testing rather than scaling?*
> *- What should I measure as the year goes on to know whether the seasonal pattern is holding or breaking?*
>
> *Frame this as suggestions I can act on, with the reasoning visible — so I can argue with any of it."*

#### Step 7. Save the work.
- Download any files Claude produced (charts, tables, the analysis itself).
- Save the chat — you'll want to come back to it in a few months and re-run with updated data.

**Important and non-negotiable:**
- **Verify the code's reading of your data** before you trust the conclusions. Ask Claude *"show me the first 10 rows of how you interpreted my data — did you get the columns right?"*
- **Treat the action plan as a starting point**, not a final budget. The analysis tells you about *the past 3 years*; the next 12 months are uncertain. Use the patterns as a prior, not a prediction.

#### Stretch goal — combine with platform mix
Ask:

> *"Looking at the seasonal pattern and the cross-platform performance: should the platform mix change by season? Is there a month where Meta works better than Google, or vice versa?"*

That's the kind of question only emerges when you have the historical data and the cross-platform view in the same place.

---

## What we deliberately didn't do today

A few use cases worth flagging but not building into this worksheet — and why:

- **Direct integration with ad platforms.** Claude can't currently drive the Google Ads / Meta / LinkedIn UIs to make changes. There may be API or automation paths worth exploring — that goes on the "Beyond Claude alone" board at the front of the room.
- **Predicting next month's CPA from this month's data.** Tempting, but Claude (even with Code Execution) isn't a forecasting tool. The honest version is what Path 3 does: surface the pattern, give you a prior, leave the prediction to you.
- **Automated reporting.** You could imagine Claude assembling your weekly or monthly report automatically. Doable, but a different kind of conversation — happy to talk about it after the workshop.

---

## End-of-day check

Before you leave today, make sure:
- [ ] You have at least one working Project (Path 1, or your Path 3 chat saved) that you can reopen tomorrow.
- [ ] You've tested it with real data.
- [ ] You've added the materials or context Claude was missing during testing.
- [ ] You know your next concrete step — even "next monthly review goes through the Project" is enough.

If you didn't finish your path, take this worksheet home and continue when you have time.

Pawel and Mara are around all afternoon — grab us anytime.
