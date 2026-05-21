# Worksheet — Thomas

**Welkom bij je middag.** Deze worksheet is opgebouwd rond de marketingdata waar je al mee werkt — Google Ads, Meta, LinkedIn, binnenkort TikTok — en de moeilijkere vragen die niet opduiken in het dashboard van één enkel platform. Het doel is dat je weggaat met minstens één werkend tool dat je helpt dingen in de data te zien die je eerder niet makkelijk kon zien.

Je doet een korte warming-up om te voelen hoe Claude met je cijfers werkt, en **kiest dan één van drie paden**. Elk eindigt met iets dat je mee terug kunt nemen naar je werk.

**Voor je begint — dingen in Claude krijgen.** Je hoeft niet alles te kopiëren en plakken. In elk chatvenster kun je:

- Bestanden (PDF's, Word, Excel, afbeeldingen) erin slepen.
- Op de paperclip- / bijlageknop klikken om vanaf je computer te uploaden.
- Screenshots direct plakken met Ctrl+V of Cmd+V — handig om snel de structuur van iets te pakken zonder over te typen.
- Op telefoon of tablet foto's bijvoegen uit je galerij of er één maken op het moment zelf.

Gebruik wat het makkelijkst is voor wat je voor je hebt.

---

## Warming-up — Vraag Claude wat opvalt in de data van vorige maand *(~15 min)*

**Wat je nodig hebt:** een recente maandelijkse export van één van je platforms — Google Ads of Meta is prima. Campagne-niveau data met de gebruikelijke kolommen: spend, impressies, kliks, conversies, CTR, CPA, per campagne of ad set.

**Stap 1.** Open een nieuwe chat in Claude.

**Stap 2.** Upload je export. Vraag dan:

> *"Dit is de [Google Ads / Meta]-data van Creon van vorige maand. Lees ze door en vertel me: wat valt op? Wat werkt ongebruikelijk goed, wat underperformt, en is er iets dat je opmerkt dat ik zou kunnen missen als ik dit in het platform-dashboard bekijk?"*

**Stap 3.** Als Claude antwoordt, push terug:

> *"Je zei dat [campagne X] underperformt — laat me de specifieke cijfers zien waarop je dat baseert. Wat is je benchmark voor 'underperformen'?"*

Dit telt. Claude kan zelfverzekerd vaag zijn. Maak dat het de rijen citeert.

**Stap 4.** Nog één vervolgvraag:

> *"Groepeer nu de campagnes in 2 of 3 buckets op basis van patronen die je ziet — niet op mijn naamgevingsconventie, op echt performance-gedrag. Welke groepen zou je trekken?"*

**Wat je net gedaan hebt.** Claude een platte export gegeven en iets terug gekregen dat dichter bij een echte lezing van de data komt — wat gegroepeerd is met wat, wat een outlier is, wat aandacht verdient. Dat is de zet waar je in Pad 1 op verder bouwt.

---

## Kies een pad

Drie paden hieronder. Elk eindigt met een werkend tool. **Weet je niet waar te beginnen? Probeer Pad 1** — het is het meest universeel bruikbaar voor je dagelijkse werk. Pad 3 is meer gevorderd en gebruikt een andere Claude-feature (Code Execution) — het is degene die direct gekoppeld is aan Creon's seizoensvraag, dus de moeite waard om te proberen als je tijd hebt en de historische data bij de hand.

---

### Pad 1 — Bouw je Marketing Performance Project *(~25 min)*

**Je vertrekt met:** een Claude Project dat Creon's producten kent, je campagnestructuur en je platformmix — klaar voor de terugkerende "wat gebeurt er nu met onze ads"-vraag.

#### Stap 1. Maak het Project.
- Klik in Claude op **Projects** in de linkerbalk, dan op **New project**.
- Noem het: **Thomas — Marketing Performance**.

#### Stap 2. Upload je materialen.
Upload wat je bij de hand hebt:

- Laatste 1–3 maanden aan exports van elk platform (Google Ads, Meta, LinkedIn).
- Een korte beschrijving van Creon's productlijnen en wat elke campagne target — zelfs een paar bullets direct in de Project-instructies getypt is genoeg.
- Alles wat je vaak raadpleegt bij het reviewen van performance.

#### Stap 3. Geef het Project zijn instructies.
Plak dit in het **Custom instructions**-veld en pas aan:

> *"Je helpt me Creon's paid marketing performance reviewen en analyseren over Google Ads, Meta, LinkedIn en binnenkort TikTok.*
>
> *Als ik data plak of upload, doe het volgende:*
> *1. Lees het zorgvuldig en vertel me wat opvalt — zowel positief als zorgwekkend.*
> *2. Citeer altijd de specifieke campagnes en cijfers waarop je je leesactie baseert. Maak nooit claims die je niet kunt aanwijzen in de data.*
> *3. Groepeer bevindingen op belang — leid met wat er echt toe doet, niet met wat makkelijk te zeggen is.*
> *4. Als je een aanbeveling doet, vertel me ook wat je zou willen weten voor je erop handelt. Ik wil handelen op data, niet op gissingen.*
>
> *Wees eerlijk als iets dubbelzinnig is — fabriceer geen inzicht waar het er niet is. 'Ik zie hier geen duidelijk patroon' is een geldig antwoord."*

#### Stap 4. Test het fris.
Open een nieuwe chat **binnen het Project**. Plak een verse data-export. Kijk wat eruit komt.

#### Stap 5. Verfijn.
Push terug op alles wat te generiek is:

> *"'CTR kan beter' is niet nuttig. Welke specifieke campagnes, en waar zou je ze tegen vergelijken?"*
>
> *"Je behandelt brand- en prospecting-campagnes hetzelfde — ze zouden niet tegen elkaar gebenchmarkt moeten worden. Pas aan."*

Update de Project-instructies elke keer dat je een regel vindt die permanent zou moeten zijn.

**Belangrijk:** Claude kent je strategie niet tenzij je het hem vertelt. Zijn eerste leesacties zullen generiek zijn; ze worden scherper naarmate je hem corrigeert.

#### Stretch goal
Voeg deze instructie toe: *"Aan het einde van elke maandelijkse review, stel de 3 nuttigste experimenten voor om volgende maand te doen — wees specifiek over budgetverschuivingen, creative-wijzigingen of audience-tests."*

---

### Pad 2 — Cross-platform vergelijking *(~25 min)*

**Je vertrekt met:** een workflow die je laat vergelijken over Google Ads, Meta en LinkedIn op dezelfde vraag — zonder naar drie dashboards naast elkaar te staren.

Dit pad is voor de momenten waarop je wilt vragen "waar werkt ons geld het hardst op dit moment" en een eerlijk antwoord wilt dat over platforms heen gaat.

#### Stap 1. Open een nieuwe chat (binnen je Pad 1-Project als je dat deed, of een verse chat).

#### Stap 2. Upload één maand data van elk platform.
Drie aparte bestanden is prima — Claude leest ze allemaal.

#### Stap 3. Stel de vergelijkingsvraag.

> *"Hier is data van vorige maand uit Google Ads, Meta en LinkedIn. Ik wil een vergelijking naast elkaar.*
>
> *Bouw me één tabel met: platform, totale spend, totale conversies, blended CPA, en je lezing van hoe elk platform presteert ten opzichte van de andere.*
>
> *Daarna, apart: op welk platform werkte ons geld vorige maand het hardst, en waarom? Wees specifiek over wat 'het hardst' betekent — verschillende platforms zijn niet direct vergelijkbaar, dus vertel me welke vergelijking je maakt en wat de grenzen ervan zijn."*

#### Stap 4. Push op wat er ontbreekt.
Claude zal een tabel produceren. Lees het kritisch:

> *"Je vergeleek op CPA maar Meta heeft een langer attributievenster dan Google. Pas je vergelijking aan of vertel me waarom niet."*
>
> *"LinkedIn heeft minuscuul volume — is de CPA daar statistisch zinvol? Vertel me wat voor sample size je zou willen voor je conclusies trekt."*

Het punt is niet om de discussie met Claude te winnen — het is om de aannames die het maakte naar boven te halen die je anders zou missen.

#### Stap 5. Sla de vergelijkingsstructuur op.
Als je dit maandelijks doet, sla de prompt op. Elke maand wordt: drie bestanden uploaden, dezelfde prompt draaien, een vergelijkbare leesactie krijgen.

#### Stretch goal
Vraag: *"Kijkend naar de laatste 3 maanden over alle drie de platforms, is de relatieve performance verschoven? Welk platform trendt omhoog en welk trendt omlaag?"*

---

### Pad 3 — Seizoensanalyse met Code Execution *(~30 min, gevorderd)*

**Je vertrekt met:** een echte analyse van Creon's seizoenspatroon over 3 jaar data — geproduceerd door Claude die echte Python-code schrijft — plus een concept van hoe ernaar te handelen voor de komende 12 maanden.

**Waarom dit pad apart staat.** Plain Claude is onbetrouwbaar als rekenmachine. Voor een echte numerieke analyse over duizenden rijen data over 3 jaar heb je **Code Execution** nodig — een feature waarbij Claude echte Python-code schrijft en runt op je bestanden. Jij brengt de data; Claude schrijft de code; Python doet de wiskunde.

#### Stap 1. Open een nieuwe chat in Claude.
Zorg dat **Code Execution / File Creation** aanstaat in **Settings → Feature Preview**. Pak Mara of Pawel als je het niet kunt vinden.

#### Stap 2. Upload je historische data.
Je zei dat je ~3 jaar data hebt. Upload zoveel als je gereed hebt:

- Verkoop- of conversiedata per maand (de daadwerkelijke business-uitkomst waar je om geeft).
- Ad spend per platform per maand, als je het geconsolideerd hebt.
- Alles wat over het jaar varieert (productmix, regionale splitsing, klanttype).

Als de data in veel bestanden zit, is dat prima — upload ze allemaal. Claude zoekt uit hoe het ze combineert.

#### Stap 3. Vraag Claude om jou eerst te interviewen.

> *"Ik heb ~3 jaar aan Creon's marketing- en verkoopdata geüpload. Voor je code schrijft, stel me tot 8 vragen om je te helpen de data te begrijpen en wat ik probeer te leren.*
>
> *Specifiek: ik wil Creon's seizoenspatroon begrijpen — wanneer verkopen we wat, en hoe sterk is het seizoenseffect — zodat ik budget-allocatie en creative-timing voor de komende 12 maanden kan plannen."*

Beantwoord de vragen eerlijk. Deze stap is wat een nuttige analyse onderscheidt van een generieke.

#### Stap 4. Vraag Claude om de seizoensanalyse te produceren.

> *"Schrijf nu Python-code om de seizoensgebondenheid in deze data te analyseren.*
>
> *Specifiek:*
> *1. Produceer een duidelijk maandelijks patroon over de 3 jaren — voor elke productcategorie, wanneer piekt de vraag en wanneer dipt het?*
> *2. Kwantificeer het seizoenseffect: ligt de piekmaand 20% boven het gemiddelde, 50%, 2x?*
> *3. Laat me zien of het patroon consistent is over de 3 jaren of dat het verschuift.*
> *4. Markeer alles dat niet past in een schoon seizoensverhaal — afwijkingen, structurele breuken, dingen die het onderzoeken waard zijn.*
>
> *Draai de code en toon me de resultaten zowel als tabel als grafiek. Wees eerlijk over wat de data wel en niet ons vertelt — als het patroon ruizig is, zeg dat dan."*

Kijk naar wat eruit komt. Grafieken en cijfers zouden je intuïtie voor *een deel* ervan moeten matchen; als ze nergens matchen, is er iets mis en zou je Claude moeten vragen je door de data te lopen.

#### Stap 5. Push op de analyse.
Lees het kritisch:

> *"Je zei dat [productcategorie] in mei piekt. Laat me de maandcijfers zien die tot die conclusie leidden — ik wil de 3 meimaanden naast elkaar zien."*
>
> *"Het patroon lijkt zwakker in 2024 dan in 2022. Waarom? Was er een campagne of externe gebeurtenis die dat zou verklaren, of vervaagt het seizoenseffect daadwerkelijk?"*

Push tot je de leesactie vertrouwt.

#### Stap 6. Vraag om het actieplan.

> *"Op basis van deze seizoensanalyse, stel een 12-maandenplan voor me op:*
>
> *- Wanneer moet ik spend verhogen, en ruwweg hoeveel?*
> *- Wanneer moet ik creative verschuiven naar welke productcategorieën?*
> *- Waar zijn de stille maanden die ik zou moeten gebruiken voor testen in plaats van schalen?*
> *- Wat moet ik gedurende het jaar meten om te weten of het seizoenspatroon houdt of breekt?*
>
> *Kader dit als suggesties die ik kan uitvoeren, met de redenering zichtbaar — zodat ik elk ervan kan betwisten."*

#### Stap 7. Sla het werk op.
- Download eventuele bestanden die Claude produceerde (grafieken, tabellen, de analyse zelf).
- Sla de chat op — je wilt er over een paar maanden naar terug en het opnieuw draaien met geüpdatete data.

**Belangrijk en niet-onderhandelbaar:**
- **Verifieer hoe de code je data interpreteert** voor je de conclusies vertrouwt. Vraag Claude *"laat me de eerste 10 rijen zien van hoe je mijn data hebt geïnterpreteerd — heb je de kolommen goed?"*
- **Behandel het actieplan als een startpunt**, niet als een definitief budget. De analyse vertelt je over *de afgelopen 3 jaar*; de komende 12 maanden zijn onzeker. Gebruik de patronen als prior, niet als voorspelling.

#### Stretch goal — combineer met platformmix
Vraag:

> *"Kijkend naar het seizoenspatroon en de cross-platform performance: zou de platformmix per seizoen moeten veranderen? Is er een maand waarin Meta beter werkt dan Google, of omgekeerd?"*

Dat is het soort vraag dat alleen opkomt als je de historische data en de cross-platform-blik op dezelfde plek hebt.

---

## Wat we vandaag bewust niet gedaan hebben

Een paar use cases het vermelden waard maar niet ingebouwd in deze worksheet — en waarom:

- **Directe integratie met ad-platforms.** Claude kan op dit moment de UI van Google Ads / Meta / LinkedIn niet aansturen om wijzigingen te maken. Er zijn mogelijk API- of automatiseringspaden de moeite waard om te verkennen — die gaan op het "Beyond Claude alone"-bord vooraan in de zaal.
- **Volgende maand's CPA voorspellen op basis van deze maand's data.** Verleidelijk, maar Claude (zelfs met Code Execution) is geen forecasting-tool. De eerlijke versie is wat Pad 3 doet: het patroon naar boven halen, je een prior geven, de voorspelling aan jou laten.
- **Geautomatiseerde rapportage.** Je zou je kunnen voorstellen dat Claude je wekelijkse of maandelijkse rapport automatisch samenstelt. Doenlijk, maar een ander soort gesprek — graag bereid om erover te praten na de workshop.

---

## End-of-day check

Voor je vandaag weggaat, zorg dat:
- [ ] Je minstens één werkend Project hebt (Pad 1, of je Pad 3-chat opgeslagen) dat je morgen kunt heropenen.
- [ ] Je het getest hebt met echte data.
- [ ] Je de materialen of context hebt toegevoegd die Claude miste tijdens het testen.
- [ ] Je je concrete volgende stap weet — zelfs "volgende maandelijkse review gaat door het Project" is genoeg.

Als je je pad niet afkreeg, neem deze worksheet mee naar huis en ga verder als je tijd hebt.

Pawel en Mara zijn de hele middag in de buurt — pak ons elk moment.
