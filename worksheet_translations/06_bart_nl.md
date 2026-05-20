# Worksheet — Bart

**Welkom bij je middag.** Inbox-triage op leadniveau is een van de meest universele dagelijkse klussen: e-mails komen binnen, beslissingen worden genomen over wie er één behandelt, en aan het einde van de dag is het makkelijk de draad kwijt te raken over wat er echt toe deed. Deze worksheet bouwt een assistent voor precies dat — en een beetje meer. Het doel is dat je vandaag weggaat met een werkende inbox-triage-assistent die respecteert hoe je team daadwerkelijk werkt.

Je doet een korte warming-up en **kiest dan één van drie paden**. Elk eindigt met iets dat je mee terug kunt nemen naar je werk.

**Voor je begint — dingen in Claude krijgen.** Je hoeft niet alles te kopiëren en plakken. In elk chatvenster kun je:
- Bestanden (PDF's, Word, Excel, afbeeldingen) erin slepen.
- Op de paperclip- / bijlageknop klikken om vanaf je computer te uploaden.
- Screenshots direct plakken met Ctrl+V of Cmd+V — handig om snel de structuur van iets te pakken zonder over te typen.
- Op telefoon of tablet foto's bijvoegen uit je galerij of er één maken op het moment zelf.

Gebruik wat het makkelijkst is voor wat je voor je hebt.

---

## Warming-up — Triage een echte dag aan e-mails *(~15 min)*

**Stap 1.** Open een nieuwe chat in Claude.

**Stap 2.** Plak ongeveer een dag aan binnenkomende e-mails — een stuk of 20 — uit je inbox. Zeg dan:

> *"Dit zijn de e-mails die ik op één dag ontving. Classificeer elke op drie dimensies:*
> *1. Urgentie (urgent / vandaag / deze week / kan wachten)*
> *2. Type (klacht / vraag / order-issue / intern / overig)*
> *3. Actie nodig (beantwoorden / doorsturen / alleen ter info)*
>
> *Output als tabel."*

**Stap 3.** Als je de tabel hebt, vraag verder:

> *"Groepeer ze nu. Wat is de daadwerkelijke vorm van deze dag aan inbox? Wat domineerde mijn aandacht? Was er iets dat sneller geëscaleerd had moeten worden?"*

**Wat je net gedaan hebt.** De mentale triage van een hele dag inbox samengebracht in één run. De "vorm"-vraag telt meer dan de tabel zelf — het is het deel dat je niet zo makkelijk kunt doen door losse e-mails te lezen.

---

## Kies een pad

Drie paden hieronder. **Weet je niet waar te beginnen? Probeer Pad 1** — het is de inbox-routing-assistent.

---

### Pad 1 — Bouw je Inbox Routing Assistant *(~30 min)*

**Je vertrekt met:** een Claude Project dat binnenkomende e-mails neemt en je vertelt naar wie je elke moet routeren — rekening houdend met je teamroster, expertise-gebieden en huidige beschikbaarheid.

Het meeste dat deze routing laat werken zit in je hoofd, niet in documenten — dus je leert het Project door conversatie in plaats van uploads.

#### Stap 1. Maak het Project.
- Klik op **Projects** in de zijbalk, dan op **New project**.
- Noem het: **Bart — Inbox Triage**.

#### Stap 2. Brief Claude over je team.
Start een nieuwe chat binnen het Project. Vertel Claude over je team in gewone taal:

> *"Ik wil een routing-assistent bouwen voor binnenkomende e-mails. Laat me mijn team beschrijven:*
>
> *- [Naam of code], behandelt [expertise], typisch beschikbaar [patroon]*
> *- [Naam of code], behandelt [expertise], typisch beschikbaar [patroon]*
> *- ...*
>
> *Routing-regels die ik vandaag volg:*
> *- Pre-delivery-e-mails (orderwijzigingen, leveringstijdvragen, installatievragen) gaan naar Sofia's administratie-team.*
> *- Post-delivery-e-mails (klantenservice, klachten, after-sales) gaan naar Amber — maar alleen 's middags. Haar ochtenden zijn voor marketingwerk. Post-delivery urgent in de ochtend escaleert naar mij.*
> *- [Voeg andere regels uit je hoofd toe.]*
>
> *Stel me nu 5–8 vervolgvragen om zeker te zijn dat je mijn routing-logica begrijpt. Dek alles wat ik misschien weggelaten heb — edge cases, wat te doen als iemand er niet is, hoe om te gaan met dubbelzinnigheid."*

Beantwoord de vragen.

#### Stap 3. Laat Claude het referentiedocument schrijven.
> *"Op basis van wat ik je net vertelde, schrijf een one-pager routing-referentie. Ik sla die op in het Project zodat toekomstige runs het als context hebben."*

Sla het document op in het Project — upload het als bestand, of plak het in de kennis van het Project.

#### Stap 4. Geef het Project zijn staande instructies.
Plak dit en pas aan:

> *"Je helpt me binnenkomende e-mails triëren voor routing naar mijn team. Je hebt het teamroster en de routing-regels in je kennis.*
>
> *Voor elke e-mail die ik plak, stel voor:*
> *1. Urgentie.*
> *2. De juiste persoon of team om naar te routeren.*
> *3. Eventuele context die de ontvanger nodig heeft om het af te handelen.*
>
> *Als ik je vertel wie er vandaag uit is, of wie beperkte tijd heeft, neem dat mee.*
>
> *Leg je routing-aanbeveling altijd in één regel uit. Wees bondig.*
>
> *Als een e-mail eruit ziet als een patroon in plaats van een eenmalig iets (vergelijkbaar met andere die je recent gezien hebt), markeer dat expliciet en vertel me waarom."*

#### Stap 5. Test het cold.
Start een verse chat binnen het Project. Plak een batch e-mails. Voeg een echt preamble toe zoals:

> *"Context voor vandaag: Sofia is met verlof tot vrijdag. Amber heeft de hele middag een meeting. Ik heb ~2 uur focustijd midden in de ochtend."*

Kijk hoe het routet.

#### Stap 6. Verfijn.
De eerste routing-pass mist waarschijnlijk iets. Vertel het Project:

> *"Je routeerde [X] naar Y maar ik zou Y nooit zoiets sturen. Voeg een regel toe: routeer [type] nooit naar Y."*
>
> *"Je urgentie-oordelen zijn te voorzichtig. Behandel 'zo snel mogelijk' als 'deze week' tenzij de klant expliciet zegt geblokkeerd te zijn."*

Update het referentiedocument elke keer dat je een regel ziet die permanent zou moeten zijn.

#### Stretch goal
Voeg deze instructie toe: *"Eén keer per week, als ik om een 'routing review' vraag, vat samen welke soorten e-mails ik heb gerouteerd en naar wie — en stel regels voor die geüpdatet zouden moeten worden op basis van patronen die je hebt gezien."*

---

### Pad 2 — End-of-day inbox-synthese *(~25 min)*

**Je vertrekt met:** een workflow die een dag aan inbox omzet in een end-of-day-briefing — wat er gebeurde, wat ertoe deed, wat morgen follow-up nodig heeft.

#### Stap 1. Open een nieuwe chat in Claude (of blijf binnen je Pad 1-Project — beide werken).

#### Stap 2. Gebruik deze standaard-prompt.

> *"Hier zijn alle e-mails die ik vandaag afhandelde: [plak].*
>
> *Geef me een end-of-day-briefing:*
> *1. De 3 belangrijkste dingen die vandaag gebeurden.*
> *2. Eventuele opkomende patronen of terugkerende issues waar ik me bewust van moet zijn.*
> *3. Iets waar ik morgen op moet opvolgen.*
> *4. Iets dat Geoffrey of Sandra zouden moeten weten.*
>
> *Stel me dan 3 vragen over vandaag om alles naar boven te halen wat je gemist kunt hebben door alleen de e-mails te lezen."*

#### Stap 3. Beantwoord de 3 vragen.
Dit is het unieke deel van het patroon. Claude leest de e-mails — *jij* kent de meetings, gesprekken en context die de e-mails niet vangen. De vragen dwingen je toe te voegen wat ontbrak.

#### Stap 4. Vraag om de finale versie.
> *"Produceer nu de finale end-of-day-briefing als schoon document, met wat ik je vertelde erin verwerkt."*

Als je dit patroon vertrouwt, is het een dagelijkse gewoonte: plak de inbox van de dag aan het einde van de dag, beantwoord de vragen, sla de briefing op.

#### Stretch goal — geautomatiseerde versie
Als toekomstige stap (niet voor vandaag): dezelfde logica zou kunnen draaien als geplande taak die je inbox elke avond automatisch leest via de Outlook/Gmail-connector. De moeite waard om op te zetten als je de handmatige workflow een paar weken gebruikt hebt. We hebben dit geparkeerd op het "Beyond Claude alone"-bord voor een mogelijke Xelerit-integratieconversatie.

---

### Pad 3 — Klacht-patroon-intelligence *(~25 min)*

**Je vertrekt met:** de mogelijkheid om vragen te stellen over weken of maanden aan klachten — wat is ons top klachttype deze maand, trendt iets omhoog, krijgt het nieuwe product meer issues dan het oude.

Dit is het **operationele beeld**. Geen enkele e-mail toont het.

#### Stap 1. Maak een apart Project.
- Noem het: **Bart — Complaint Intelligence**.

Dit is gescheiden van het Project van Pad 1 omdat de use case anders is: routing vs analyse. Houd ze schoon.

#### Stap 2. Upload je klachten-corpus.
Trek klacht-e-mails of klacht-samenvattingen uit je inbox — zo ver terug als je snel kunt pakken. Een paar weken is genoeg om mee te beginnen; hoe rijker het corpus, hoe beter het patroon-vinden.

#### Stap 3. Geef het Project zijn instructies.

> *"Je bevat onze klachten-historie voor analyse.*
>
> *Als ik een vraag stel, baseer je antwoord op de data in dit Project.*
>
> *Als ik vraag om aantallen, percentages of volumes — geef ze, maar voeg de kanttekening toe dat je een kleine marge fout kunt zitten op exacte getallen (je bent geen database). De patronen en thema's die je identificeert zullen accuraat zijn; de specifieke aantallen mogelijk niet.*
>
> *Citeer altijd 2 of 3 specifieke voorbeelden om elke claim die je maakt over een patroon te ondersteunen.*
>
> *Als je iets niet kunt beantwoorden uit de geüploade data, zeg dat duidelijk."*

#### Stap 4. Test met echte vragen.
Stel 5 tot 6 operationele vragen die je momenteel niet makkelijk kunt beantwoorden:

> *"Wat waren de top 3 klachttypes over deze periode?"*
>
> *"Zijn er klachten die lijken terug te komen van dezelfde klant of over dezelfde productvariant?"*
>
> *"Als je één ding moest markeren dat lijkt te verslechteren, wat zou het zijn?"*
>
> *"Is er een klachttype dat we goed afhandelen — minder ervan in de loop van de tijd?"*

#### Stap 5. Lees de antwoorden kritisch.
Voor volume-/aantal-vragen zal Claude bij benadering juist zitten maar niet exact. Gebruik het om te identificeren **wat te onderzoeken** — niet om cijfers voor rapportage te produceren. (Daarvoor zou je Code Execution willen, dat echte code schrijft om dingen te tellen. Vraag ons erover als het een behoefte wordt.)

#### Stretch goal
Zet een maandelijkse gewoonte op: aan het einde van elke maand upload je de klachten van die maand naar het Project. Na een paar maanden vraag: *"Vergelijk de laatste 3 maanden. Wat is veranderd?"*

---

## Wat we vandaag bewust niet gedaan hebben

- **Live Cowork-demo's.** Cowork (geplande taken, bestandsbeheer) is een nuttige functie maar trager dan verwacht in live demo's, en we wilden de momentum behouden. De moeite waard om op je eigen tempo te verkennen — wijs je er graag op wanneer dan ook.
- **API- en MCP-werk.** Een ander soort sessie. Als je daarheen wilt, kunnen we apart tijd vrijmaken — buiten het workshopformat.
- **Automatische inbox-integratie.** De stretch goal in Pad 2 — Claude die je inbox direct leest — is doenlijk met connectors, maar de moeite waard om bewust op te zetten in plaats van tijdens een drukke middag. Op het parking-lot-bord voor een vervolgconversatie.

---

## End-of-day check

Voor je weggaat, zorg dat:
- [ ] Je minstens één werkend Project hebt (Pad 1 sterk aanbevolen).
- [ ] Je teamroster-details toegevoegd hebt die Claude miste tijdens het testen.
- [ ] Je weet wat de volgende concrete stap is — bv. "Routeer de volgende 10 e-mails door het Project."

Als Pad 2 of 3 je oog trok maar je er niet aan toe kwam — neem dit mee naar huis. Beide werken buiten de workshop.

Pawel en Mara zijn de hele middag in de buurt.
