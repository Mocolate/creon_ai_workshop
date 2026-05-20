# Worksheet — Geoffrey

**Welkom bij je middag.** Deze worksheet ontmoet je waar het meeste van je werk daadwerkelijk leeft: in je hoofd, tussen twee-minuten-beslissingen, in gesprekken en e-mails die je amper kunt afmaken. Het doel is niet je te overtuigen dat AI magie is. Het is om je te laten zien of — in 2 tot 3 uur — Claude je meetbare tijd kan besparen op twee specifieke dingen: requirements uit je hoofd in handen van je developers krijgen, en beslissingen gestructureerd krijgen voor ze je verlaten.

Je doet een korte warming-up die iets concreets oplevert, en **kiest dan één van twee paden**. Elk eindigt met iets dat je deze week kunt gebruiken.

**Voor je begint — dingen in Claude krijgen.** Je hoeft niet alles te kopiëren en plakken. In elk chatvenster kun je:
- Bestanden (PDF's, Word, Excel, afbeeldingen) erin slepen.
- Op de paperclip- / bijlageknop klikken om vanaf je computer te uploaden.
- Screenshots direct plakken met Ctrl+V of Cmd+V — handig om snel de structuur van iets te pakken zonder over te typen.
- Op telefoon of tablet foto's bijvoegen uit je galerij of er één maken op het moment zelf.

Gebruik wat het makkelijkst is voor wat je voor je hebt.

Een notitie over deze worksheet: hij is ontworpen om *jou te laten beslissen* of Claude je tijd verdient. Push terug. Als iets niet landt, vertel het ons. Je hoeft de worksheet niet af te krijgen — je hoeft alleen weg te gaan met een duidelijk antwoord, hoe dan ook.

---

## Warming-up — Maak van een half-gevormd idee iets waar een developer mee aan de slag kan *(~10 min)*

Kies iets dat je het devteam wilde communiceren en wat nog in je hoofd zit — een feature die je wilt, een procesverandering, een bug die je blijft opmerken. Hoeft niet groot te zijn.

#### Stap 1. Open een nieuwe chat in Claude.

#### Stap 2. Vertel Claude erover zoals je het een collega bij de koffie zou vertellen.
Structureer het niet. Filter het niet. Twee tot drie minuten praten (je kunt dicteren als je laptop een microfoon heeft, of gewoon snel en ongrammaticaal typen — zinnen doen er niet toe). Eindig met iets als:

> *"Dat is het — het ruwe idee. Ik wil dat een developer hier mee aan de slag kan zonder met vijf vragen bij me terug te komen."*

#### Stap 3. Vraag Claude om jou vragen te stellen.
> *"Voor je dit structureert, stel me 5 tot 7 vragen die een developer beantwoord zou willen hebben voor hij aan het werk gaat. Dek alles wat ik vaag liet."*

Beantwoord de vragen, kort.

#### Stap 4. Vraag om de gestructureerde versie.
> *"Produceer nu een one-pager brief die ik aan een developer kan sturen. Voeg toe: wat het is, waarom het ertoe doet, hoe succes eruit ziet, edge cases om op te letten, alles wat buiten scope is."*

#### Stap 5. Wees eerlijk.
Kijk naar wat Claude produceerde. Twee vragen:
- Zou je devteam dit daadwerkelijk begrijpen en aan het werk gaan zonder vervolggesprek?
- Kostte dit minder tijd dan je normaal zou besteden aan hetzelfde zelf te schrijven?

Als ja op beide, is dit patroon iets waard voor jou. Als nee, vertel ons waarom voor je verder gaat.

---

## Kies een pad

Twee paden hieronder. **Pad 1** is de requirements/PO-workflow op schaal — gebouwd zodat je het kunt gebruiken elke keer dat je iets met dev te delen hebt. **Pad 2** is voor chaos in beweging — de inbox, de 2-minuten-beslissingen, de dingen waar je geen tijd voor hebt om goed over na te denken.

---

### Pad 1 — Bouw je CEO-naar-Dev-Translator *(~30 min)*

**Je vertrekt met:** een Claude Project dat je half-gevormde ideeën omzet in developer-ready specs met acceptatiecriteria en edge cases — sneller dan dezelfde brief zelf schrijven.

#### Stap 1. Maak het Project.
- Klik op **Projects** in de linkerbalk, dan op **New project**.
- Noem het: **Geoffrey — Dev Specs**.

#### Stap 2. Brief Claude over hoe je devteam werkt.
Start een nieuwe chat binnen het Project. Vertel Claude:

> *"Ik werk met een klein development-team. Ik wil jou gebruiken om ideeën in mijn hoofd om te zetten in specs waar ze mee aan de slag kunnen zonder bij me terug te komen voor verduidelijking.*
>
> *Laat me je vertellen hoe we vandaag werken: [leg uit — wat ze bouwen, wat voor features ik meestal vraag, waar mijn devteam meestal mee worstelt als mijn requirements aankomen, hoe 'goede' acceptatiecriteria er voor mij uitzien].*
>
> *Stel me dan 5 tot 8 vervolgvragen over alles wat ik weggelaten heb — inclusief welk detailniveau mijn developers verwachten, waar ze meestal op pushback geven, en alles wat specifiek is voor hoe we werken."*

Beantwoord de vragen.

#### Stap 3. Laat Claude de referentienotities van het Project schrijven.
> *"Op basis van wat ik je vertelde, schrijf een one-pager referentiedocument over mijn devteam, mijn product en hoe goede specs er voor ons uitzien. Ik sla het op in het Project zodat toekomstige runs dit als context hebben."*

Sla het document op — plak het in de kennis van het Project of upload het als bestand.

#### Stap 4. Geef het Project zijn staande instructies.
Plak dit en pas aan:

> *"Je helpt me ideeën in mijn hoofd omzetten in specs waar mijn devteam mee aan de slag kan.*
>
> *Als ik een idee beschrijf, is je taak:*
> *1. Stel me 5 tot 7 vragen om de gaten in te vullen in wat ik je vertelde — focus op wat een developer nodig zou hebben dat ik niet gezegd heb.*
> *2. Na mijn antwoorden, produceer een one-pager brief met deze secties: Wat het is, Waarom het ertoe doet, Acceptatiecriteria (hoe ziet 'done' eruit — testbaar, niet vaag), Edge cases om op te letten, Out of scope (wat we NIET bouwen).*
> *3. Stel 2 tot 3 specifieke testcases voor dingen die ik zelf zou willen verifiëren als het gebouwd is.*
>
> *Toon: helder, concreet, niet corporate. Schrijf voor developers, niet voor executives.*
>
> *Verzin nooit business-logica die ik je niet verteld heb. Als iets onduidelijk is, vraag voor je gokt."*

#### Stap 5. Test het cold.
Start een verse chat binnen het Project. Pik een tweede idee dat je wilde communiceren. Praat het door (ruw is goed). Kijk wat eruit komt.

Lees de brief die Claude produceerde kritisch:
- Zijn de acceptatiecriteria daadwerkelijk testbaar, of zijn het vage aspiraties?
- Heeft Claude edge cases gevangen waar je niet aan gedacht zou hebben?
- Staat er iets in waar een developer pushback op zou geven als onduidelijk?

#### Stap 6. Verfijn.
Vertel het Project:

> *"Deze brief is goed maar acceptatiecriteria moeten specifieker. Kijk naar AC #2 — 'gebruiker kan inloggen' is geen criterium. Herschrijf het als iets dat een developer als pass/fail kan verifiëren."*

> *"Edge cases zijn te generiek. Ze moeten specifiek zijn voor ons product. Bijvoorbeeld, hier is een edge case die ik van jou zou verwachten: [specifiek voorbeeld]."*

Update de staande instructies elke keer dat je iets ziet dat een permanente regel zou moeten zijn.

#### Stretch goal — het testplan
Als een brief goed is, voeg toe: *"Produceer nu een testplan dat ik aan een tester kan overhandigen (of zelf kan gebruiken om het te testen als ik een 10-minuten dev-omgeving had, die ik nog niet heb). Dek het happy path en de edge cases. Elke test in pass/fail-format."*

Een helder testplan dat geschreven is voor development start verandert hoe het devteam werkt — zelfs als je de tests zelf niet kunt draaien.

#### Meer dat je kunt doen met hetzelfde Project
Als het Project je devteam en product kent, kan dezelfde setup verschillende andere vervelende taken aan. Probeer er één:

**Slechte bugreports herschrijven.**
Plak een gefrustreerde *"het ding is kapot"*-e-mail van een klant, of je eigen 20-seconden-beschrijving van iets dat niet werkt.

> *"Maak hier een schone bugreport van: reproduceerbare stappen, verwacht vs actueel gedrag, severity, alles wat ik een developer zou willen laten weten voor hij gaat debuggen. Als iets onduidelijk is uit wat ik je gaf, lijst de vragen die ik moet beantwoorden voor versturen."*

**Door dev geschreven specs reviewen op gaten.**
Soms schrijft het devteam de spec en jij keurt het goed. Plak het.

> *"Dit is een spec die mijn devteam schreef. Review het alsof je mij was — wat ontbreekt, wat zou een klant opmerken dat dit niet adresseert, welke edge cases zijn niet gedekt, wat zou ik verduidelijkt willen hebben voor goedkeuring? Wees specifiek, niet generiek."*

**"Waarom we dit niet doen"-antwoorden opstellen.**
Je hebt besloten nee te zeggen tegen een feature-verzoek. Plak het verzoek + je one-liner-reden.

> *"Stel een antwoord op dat dit feature-verzoek afwijst. Beleefd, specifiek over waarom (gebruik mijn reden — verzacht het niet in corporate-speak), en bied één alternatief als er een is. Houd het kort."*

Deze gebruiken allemaal hetzelfde Project — geen setup. Probeer er één die relevant is voor vandaag.

---

### Pad 2 — Triage in beweging *(~25 min)*

**Je vertrekt met:** een herbruikbaar patroon voor het constant-onderbroken ritme van je dag — e-mails, beslissingen, dingen die je hoofd moeten verlaten voor ze jou verlaten.

Dit is een ander probleem dan Pad 1. Pad 1 is *deliberaat* — je gaat zitten met een idee en produceert een spec. Pad 2 is *reactief* — er is net iets in je inbox geland en je hebt 90 seconden voor het volgende ding aankomt.

#### Stap 1. Open een nieuwe chat in Claude.
Dit pad heeft geen Project nodig. Het patroon werkt in elke chat.

#### Stap 2. Probeer het op een echte e-mail die je vandaag kreeg.
Pik een e-mail van vanochtend die *een of andere* actie van jou vraagt — doorsturen, delegeren, beslissing, antwoord. Eén waar je nog niet mee bezig was. Plak hem.

> *"Hier is een e-mail die ik net ontving. In onder 5 regels: vertel me welke actie dit van mij vraagt, wie er nog (eventueel) bij betrokken moet worden, en hoe de kleinste versie van 'dit afhandelen' eruit ziet. Stel nog geen antwoord op."*

Lees wat Claude zegt. Heeft het correct geïdentificeerd wat de e-mail nodig heeft?

#### Stap 3. Als de actie "antwoorden" is, krijg een concept.
> *"OK, stel het antwoord op. Twee versies: kort en direct, of warmer met één zin context. Beide in mijn stem — ik laat je zo zien hoe je die leert."*

Kies de versie die je daadwerkelijk zou versturen. Bewerk. Verstuur.

#### Stap 4. Probeer dit op 3 tot 5 meer e-mails van vanochtend.
Het patroon is hetzelfde. Triage → optioneel concept → bewerken → versturen.

Bekijk het ritme. De Claude-versie is plak → triage → optioneel concept → bewerken → versturen. Dat is meetbaar korter dan de lees-besluit-schrijf-review-verstuur-lus die je anders zou draaien.

Time jezelf op een paar. Wees eerlijk of dit meetbaar tijd bespaart.

#### Stap 5. Leer Claude je stem (optioneel, maar 5 min waard).
Na een paar concepten zal je gemerkt hebben dat Claude niet helemaal klinkt als jou. Repareer het:

> *"Hier zijn 3 tot 5 e-mails die ik recent verstuurd heb die precies klinken als ik. [Plak ze.] Vanaf nu, als je antwoorden voor me opstelt, match deze stem. Lijst de regels die je gaat volgen zodat ik alles wat fout is kan corrigeren."*

Push terug op de regels die Claude lijst. *"Eigenlijk begin ik e-mails nooit met 'Hoop dat het goed gaat' — laat dat weg"* etc.

Vanaf nu gebruikt elk antwoord-concept deze regels.

#### Stap 6. Beslis.
Na 30 minuten van dit, vraag jezelf: zou je dit een uur doen morgenochtend?

Als ja, is dit patroon de moeite waard om bij te houden. Als nee, vertel ons waarom voor je gaat.

---

## Wat we vandaag bewust niet gedaan hebben

Een paar dingen kwamen op in de conversatie die niet op deze worksheet staan — hier is waarom elk van de worksheet af is en waar het in plaats daarvan heen gaat.

- **De frictie met de dev-testomgeving.** Een dev-omgeving opzetten om wijzigingen te testen, bestanden erin en eruit krijgen, de afhankelijkheid van developers om dingen te verifiëren die je idealiter zelf zou checken — dat kwam allemaal op in de conversatie. **Het is een echt probleem, en het is groter dan Claude.** Claude kan betere testplannen schrijven (Pad 1 stretch goal), maar het kan geen authenticators installeren of bestanden voor je kopiëren. Dit hoort op het parking-lot-bord — het is een proces- en infrastructuurconversatie om goed met Xelerit en Bart te hebben, niet iets om in 90 minuten hier op te lossen.

- **Alles dat echte klantdata raakt.** Niets op deze worksheet vraagt je iets gevoeligs te uploaden. Het chaotische-input → spec-patroon werkt even goed met ideeën als met documenten.

- **Doen alsof Claude magie is.** Dat is het niet. Je gaat plekken vinden waar het dingen fout heeft, je context verkeerd begrijpt of iets generieks produceert. De worksheet is opgezet zodat je kunt testen of het patroon zijn plek verdient — niet zodat je ons op ons woord moet geloven.

---

## End-of-day check

Voor je weggaat, beslis:
- [ ] Bespaart het warm-up-patroon (chaotische input → vragen → gestructureerde output) je tijd vs hetzelfde zelf schrijven?
- [ ] Zo ja, heb je één werkend Project (Pad 1) of een herbruikbare workflow (Pad 2) — of beide — die je morgen daadwerkelijk zou openen?
- [ ] Iets dat je op het parking-lot-bord wilt voor Xelerit-follow-up? (Het testomgeving-probleem staat er al — wat nog meer?)

Als je antwoord op de eerste vraag "nee" is, vertel het ons voor je weggaat. Dat is ook nuttig voor ons.

Pawel en Mara zijn de hele middag in de buurt.
