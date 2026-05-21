# Creon × Xelerit AI Workshop

A static site hosting the worksheets from a one-day Claude workshop run for Creon on 21 May 2026 at Xelerit's office.

Each attendee got a personalised worksheet built around their actual day-to-day work — HR, finance, marketing, operations, customer support, leadership. Worksheets cover one short warm-up exercise and 2–4 longer "paths," each ending with something the attendee could use the next morning: a Claude Project, a reusable prompt, a working tool.

## What's on the site

- 7 attendee worksheets, available in English (default) plus one alternate language (Dutch for most; Polish for Aga and Anita).
- Every prompt is a separate copyable code block with a copy button.
- UI language and prompt language are independent settings.

## How it's built

- Static HTML / CSS / vanilla JS — no framework, no build server.
- A Markdown-to-JSON parser converts the source worksheet files into the structured content the site renders. The parser handles paths, steps, prompts, and language variants.
- Deployed via GitHub Pages.

## Repo layout

```
worksheets/              Source markdown, one file per attendee per language
worksheet_translations/  Translated markdown files (NL / PL)
build/                   Markdown → JSON parser (Python)
js/                      Generated content + app logic
css/                     Styles
```

## Why publish this?

Two reasons. One, the attendees may want to come back to their own worksheet without digging through email. Two, the format may be useful as a reference for anyone designing a similar workshop — the specific patterns (warm-up → paths, prompts as copyable blocks, language switching) generalise even though the content is Creon-specific.

## Credits

Workshop designed and run by Mara (Xelerit) and Pawel Bejger (Xelerit) for Creon. Worksheets and translations drafted with Claude; reviewed and edited by the facilitators.

The worksheets reference Creon's real workflows because that's the point — workshops where AI is taught against generic examples don't stick. Content is published with Creon's awareness.
