# Demo prompts — morning plenary

> All prompts in the order they're shown. Each demo: what it's for, setup, the prompt to copy, what to say, what to avoid, fallback. Items 1, 2, 8, 11 and 12 of Pawel's morning structure (*What is AI / What is Claude / Verify outputs / Connectors / Cowork*) are conceptual — no prompts to copy. Those are spoken intros, not demos.

---

## 1. Tell me about Creon

**For:** opening *"what can Claude do for you?"* moment. Shows Claude does real research and synthesises.

**Setup:** Fresh chat. **Web search ON.**

**Prompt:**

```
Tell me about Creon Online — the windows and doors company in
Hardinxveld-Giessendam, the Netherlands. Who they are, what they
sell, what makes them distinctive. Keep it under a page.
```

**Why this prompt is shaped this way.** The disambiguation (*windows and doors in Hardinxveld-Giessendam*) matters — there's another Creon in Tilburg that builds control rooms. Without it, Claude may pull the wrong company. "Under a page" keeps the result readable on screen.

**Say after:** *"Claude is reading their own company back to them, from public sources, in one go. It's not perfect — notice [point out anything wrong] — but it took 10 seconds. Imagine doing this for a competitor, a customer, a potential supplier."*

**Avoid:** Don't read the full output aloud. Project it and point.

**Fallback:** If web search returns weak results, pivot to *"this is a fresh search every time — sometimes the public sources are thin. Useful to know what Claude can and can't see."*

---

## 2. Angry email to Geoffrey

**For:** show tone control. Also: levity, breaks the formality of the room early.

**Setup:** Fresh chat (or continue from Demo 1 to show conversation continuity).

**Prompt:**

```
Draft an email to Geoffrey, the CEO of Creon. I am furious.
He still hasn't paid an invoice that has been outstanding for
two months. I want my money. The email should be professional
but he should know I'm angry. Two short paragraphs.
```

**Optional follow-up turn (recommended — sells the demo):**

```
Now soften the tone — make it firm but warm. He's a long-term partner.
```

**Say after:** *"Claude is helping you find the version you actually want. The first draft is rarely the answer. We'll come back to this — it's called iteration."*

**Avoid:**
- Don't run without Geoffrey in the room — the joke needs him present. If he's late, swap "Geoffrey" for a fictitious name.
- Don't apologise for the angry framing. It works because it's real — most people have had to send a *"where's my money"* email.

**Fallback:** If Geoffrey reacts coolly, pivot quickly: *"and you can do this for any kind of email — congratulations, apologies, declining a meeting"* — and move on.

---

## 3. Skills — file creation off vs on

**For:** show the visible difference Code Execution / File Creation makes. Same prompt, two outputs: markdown table vs real `.xlsx`.

**Setup:**
- Two tabs open in Claude.
- Tab 1: **Settings → Feature Preview → Code Execution / File Creation OFF.**
- Tab 2: **Same setting ON.**
- Or toggle live for drama.

**Prompt (same for both):**

```
Make me an Excel comparing three Creon product ranges: standard PVC
windows, premium aluminium windows, and rolling shutters. Columns:
typical price range, target customer, key selling point, warranty.
Three rows. Be brief but specific.
```

**Demo 1 — off.** Run the prompt. Claude returns a markdown table on screen.
> *"This is useful. I can read it. But it's not an Excel file. I can't open it in Excel. I can't send it to a colleague who wants to add a column."*

**Demo 2 — on.** Run the same prompt. Claude writes code, runs it, a real `.xlsx` appears in the chat with a download link.
> *"Same prompt. Different result. Claude wrote Python, ran it, produced a real Excel file. Click — it opens in Excel. This is the difference between Claude knowing about Excel and Claude making Excel."*

**Say after:** *"You'll see this again this afternoon. Aga has a path where Claude builds a maintenance schedule as a real Excel. Lisette has a future path where Claude reconciles transactions in real Python. The pattern is: get the output you actually want, not just the description of it."*

**Avoid:**
- Don't pre-set the prompt anywhere visible. Type it live.
- Don't open the Excel mid-demo to inspect contents. The *file existing* is the point, not the contents.

**Fallback:** If file creation misbehaves, say *"OK, that's the live-demo gods reminding us this is still preview. Here's what it looks like when it works"* — and show a pre-prepared screenshot. **Pre-arrange a screenshot on your phone or laptop folder.**

---

## 4. Prompt engineering — task → +context → +format

**For:** the recipe. Same task improves dramatically when you add the missing pieces. Use this as the foundation everyone refers back to.

**Setup:** Fresh chat. **No web search, no file creation, no Project.** Prompt quality alone matters.

**Run all three stages in the same chat so the room watches each addition land.**

### Stage 1 — Just the task (deliberately vague)

```
Write something to send to our customers about the new product.
```

Run. Generic output.

> *"This is what most people do. Output is fine, but could be about any company in any industry. Let's add context."*

### Stage 2 — Task + context (same chat)

```
Same task but with context: "Our company" is Creon, we sell windows
and doors via a webshop in the Netherlands. The new product is a
colour-matched aluminium frame range. Our customers tend to be
homeowners renovating their houses, mid-budget. Our voice is
practical and warm, not corporate.
```

Run. Noticeably more Creon-specific.

> *"Better. But still no idea what format I actually want."*

### Stage 3 — Task + context + format (same chat)

```
And: format it as an email. Subject line, three short paragraphs,
one clear CTA at the end. Length around 120 words.
```

Run. Usable output.

**Land the point:**
> *"Three iterations. Same idea. Three very different outputs. The recipe is: **task, context, format**. If you remember nothing else from this morning, remember those three words."*

**Avoid:**
- Don't apologise for the vague Stage 1 prompt. It's vague on purpose — the contrast teaches.
- Don't read every word of every output aloud. Point to key phrases.

---

## 5. Iterate

**For:** the first answer is rarely the final answer. Real prompting is a conversation.

**Setup:** Fresh chat.

**Initial prompt:**

```
Write a short email apology to a customer whose Creon window order
arrived two days late due to a delivery issue. Friendly tone, offer
a small gesture as compensation. Around 100 words.
```

Run. Fine but generic.

**Turn 2 — variants:**

```
Give me two more versions: one shorter and more direct, one warmer
and a bit longer.
```

Run.

> *"I'd never have written either of those from scratch. But now that I see them, I can pick the one that fits."*

**Turn 3 — iterate on the chosen one:**

```
I like version 2. But drop the "we hope this finds you well" — too
formal. And cut the second paragraph by half.
```

Run.

**Land the point:**
> *"This is the actual workflow. Not 'write the perfect prompt.' It's 'have a conversation until you have what you wanted.'"*

**Avoid:** Don't run extra rounds to "perfect" it. Two iterations is enough.

---

## 6. Let Claude ask you questions

**For:** the single most reused pattern in the afternoon worksheets. The most underused move in prompting generally.

**Setup:** Fresh chat.

**Prompt:**

```
I need to write an internal announcement to staff about a new policy:
we're switching from Friday casual dress to all-week casual dress.
Before you write anything, ask me up to 7 questions about the
situation, the tone, the audience, and anything else you need.
```

Run. Claude produces a list of questions.

**Pawel reads the questions aloud, then answers them in the chat. Paraphrase briefly:**

> *"Tone is light but professional. Audience is everyone at Creon — production, office, sales. The policy starts in two weeks. Reason: we want to feel more relaxed and modern. Yes, exceptions for client-facing meetings."*

Run. Claude produces the announcement.

**Land the point:**
> *"This is the single most useful pattern in this whole workshop. You'll see it referenced in nearly every worksheet this afternoon. Whenever a task feels complex or you're not sure where to start — let Claude interview you. Saves you 20 minutes of staring at a blank screen."*

---

## 7. Multilingual demo

**For:** showing that Claude handles all three languages in one conversation, holding context across them. The "click moment" of the morning for Aga, Anita and the Dutch staff.

**Setup:** Fresh chat. **Pick one flow — don't run all three.** Flow A is recommended.

### Flow A — Cross-lingual context (recommended)

**Turn 1 (Polish):**

```
Mam pracownika, który spóźnił się dwa razy w tym miesiącu i wziął
jeden dzień urlopu na żądanie. Jakie pytania powinienem zadać,
zanim porozmawiam z nim o tym?
```

*("I have an employee who was late twice this month and took one personal-leave day. What questions should I ask before talking to him about it?")*

**Turn 2 (Dutch, same chat):**

```
OK. Schrijf nu een korte, vriendelijke uitnodiging aan deze
medewerker voor het gesprek. Hou het kort en neutraal.
```

*("OK. Now write a short, friendly invitation for the conversation. Keep it brief and neutral.")*

**Turn 3 (English, same chat):**

```
Now give me a one-line summary I can send to HR explaining why I'm
having the conversation.
```

**Say after:** *"Notice — Claude held the context across all three languages. The Dutch invitation referenced the Polish situation. The English summary referenced both. This is one conversation, three audiences. None of this would have worked in three separate Google Translate runs."*

### Flow B — Document in one language, output in another

Simpler. Less wow but practical. Upload a Dutch document (e.g. a paragraph of Creon's warranty policy), then:

```
Vat dit document samen in 3 zinnen.
```

Then:

```
Now write a customer reply in English explaining the same policy to
an international customer.
```

Optional third turn:

```
Teraz po polsku, dla naszego zespołu produkcji w Polsce.
```

### Flow C — Translate-as-you-go for a real conversation

Most relatable, least impressive. Use as fallback only.

```
Ik ga zo bellen met een Poolse klant die slecht Nederlands spreekt.
De klacht: zijn rolluik werkt niet goed na 3 weken. Geef me een
korte gespreksopzet in het Pools die ik kan voorlezen.
```

Then:

```
Now in English, what should I document afterwards in our system?
```

**After whichever flow:**
- Claude works equally well in Polish, Dutch, English (and many others).
- You can mix languages in a single conversation.
- Project instructions can fix a default: *"Always reply in Dutch unless I write to you in another language."*
- Claude's Polish and Dutch are **good, not perfect** — for customer-facing or formal output, always have a native speaker review tone.

**Avoid:**
- Don't run all three flows.
- Don't ask the room to translate something. The point is Claude doing it.
- Don't pre-translate Polish in front of the room — Aga and Anita should be the ones smiling first when they see their language handled.

---

## 8. Projects — Customer FAQ Assistant

**For:** Projects are the spine of the afternoon. Show what one looks like and the *"Claude quoting the source document"* moment.

**Pre-workshop setup (Pawel, ~15 min the night before):**
1. Grab 3–5 customer-facing pages from `creon-kozijnen.nl` and save as PDF or plain text: delivery info, warranty, returns/complaints, installation FAQ, damage policy.
2. **Projects → New project.** Name: *Creon FAQ Demo* (or *Klantenservice Demo* if running in Dutch).
3. Upload the 3–5 source docs.
4. Add the instructions below.
5. Test with one realistic question — if the answer comes back clean with a quoted clause, you're done.

**Project instructions to paste:**

```
You hold Creon's customer-facing policies. When asked a customer
question, answer based on the uploaded documents. Always quote the
specific clause your answer is based on, so the answer can be
verified. If the documents don't cover the question, say so clearly
— never guess.
```

**On the day (~3 min, live):**

Open the Project. *"This is a Project. I made it in 5 minutes last night. Watch what it does."*

**Prompt:** pick one of:

```
A customer says their window arrived 2 weeks late and they want a
refund. What does our policy actually say?
```

```
Customer is asking what the warranty covers if their rolluik motor
stops working after a year. What do I tell them?
```

The answer should arrive with the relevant clause quoted.

**Land the point:**
> *"Now imagine this loaded with your standard reply templates, your tone of voice, your customer handling rules. That's what Sofia is going to build this afternoon. Same for Sandra with HR policies. Same for Lisette with finance agreements. This pattern is the spine of most of what you'll do today."*

**Avoid:**
- Don't make it longer than 3 minutes.
- Don't show the failure mode ("see, if I ask something not in the docs..."). It muddles the message.
- Don't compare to ChatGPT explicitly. Just show what *this* does.

**Fallback:** If the answer is weak: *"Useful lesson — Projects are only as good as what you put into them. Garbage in, garbage out. The afternoon is about getting yours right."*

---

## 9. "Improve this prompt" — group discussion

**For:** participatory close to the morning. Shows the room how *they* would prompt better, with everyone contributing.

**Setup:** Project the prompt below on screen. Don't run it yet.

**The deliberately mediocre prompt:**

```
Write an email to our customers about our new aluminium window range.
```

Show it to the room. Ask: *"What would you tell me to add or change before I send this to Claude?"*

**Use these as backup discussion prompts if the room is quiet** (don't list them all — let them surface):

| What's missing | Sample question to surface it |
|---|---|
| Audience | *"Existing customers? Prospects? Both?"* |
| Purpose | *"Are we announcing it? Selling it? Inviting them to see it in a showroom?"* |
| Voice / Tone | *"Should this sound like Amber's social posts? More formal? In Dutch?"* |
| What's special | *"What's new about the aluminium range? Pricing? Colour options? Energy rating?"* |
| Format | *"Subject line? Length? Plain text or HTML?"* |
| CTA | *"What do we want them to do — click a link, reply, visit a showroom?"* |
| Constraints | *"Anything we can't say? GDPR? Pricing rules?"* |

**After the room has rewritten the prompt collectively:** Pawel runs both prompts (original and improved) live and shows the two outputs side by side. The difference makes the point better than any lecture would.

**If time is short:** just run the improved one and ask the room *"would you send this?"*

**Why this prompt works as a discussion piece.**
- Looks reasonable at first glance but immediately falls apart when you imagine the actual output.
- Multiple legitimate improvement axes, so different attendees catch different things.
- Creon-flavoured, so the room cares about the answer.
- After improvement, you can actually run the better prompt live.
