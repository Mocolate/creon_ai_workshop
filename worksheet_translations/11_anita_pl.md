# Worksheet — Anita

**Witaj na popołudniowej części warsztatu.** Ten worksheet jest zbudowany wokół pracy z przepływem produkcyjnym, którą wykonujesz codziennie — przekształcanie gotowych okien w palety, palet w ładunki ciężarówek, i upewnianie się, że faktury zgadzają się z tym, co rzeczywiście zostało wysłane. Celem jest, żebyś wyszła stąd dziś z co najmniej jednym działającym asystentem, który pomaga z prawdziwym, złożonym planowaniem, które zabiera ci czas.

Zrobisz krótkie ćwiczenie rozgrzewkowe, żeby poczuć, jak działa Claude, a potem **wybierzesz jedną z czterech ścieżek**. Każda ścieżka kończy się czymś, co możesz zabrać do swojej pracy. Jeśli skończysz wcześnie, zrób kolejną. Ścieżek, których nie skończysz tutaj, możesz dokończyć w domu — są twoje.

**Zanim zaczniesz — jak wrzucać rzeczy do Claude.** Nie musisz wszystkiego kopiować i wklejać. W oknie czatu możesz:

- Przeciągnąć i upuścić pliki (PDF, Word, Excel, obrazy) bezpośrednio do okna.
- Kliknąć przycisk spinacza / załącznika, żeby wgrać plik z komputera.
- Wkleić zrzut ekranu bezpośrednio przez Ctrl+V lub Cmd+V — przydatne, gdy chcesz szybko pokazać strukturę czegoś bez przepisywania.
- Na telefonie lub tablecie dołączyć zdjęcia z galerii albo zrobić zdjęcie na miejscu.

Używaj tego, co jest najwygodniejsze dla rzeczy, którą masz przed sobą.

---

## Rozgrzewka — Poproś Claude o przeczytanie ostatniego zamówienia *(~10 min)*

**Będziesz potrzebować:** jednego ostatniego zamówienia z WPS — takiego, które normalnie byś otworzyła, żeby zacząć planować palety lub fakturowanie. Wyeksportuj je lub zrób zrzut ekranu; nie ma znaczenia, które.

**Krok 1.** Otwórz nowy czat w Claude.

**Krok 2.** Wgraj zamówienie. Następnie zapytaj:

> *"To jest zamówienie okien z systemu produkcyjnego Creon. Przeczytaj je i powiedz mi, co tam jest: ile okien, jakie typy, które są BE, a które nie, łączna szerokość, cokolwiek, co wyróżnia się pod kątem wysyłki lub fakturowania."*

**Krok 3.** Powiedz, jeśli coś jest źle lub czegoś brakuje:

> *"Pominąłeś oznaczenia (BE) w 3 ostatnich wierszach — to inne okna. Przeczytaj jeszcze raz."*

**Krok 4.** Jeszcze jedno pytanie:

> *"Gdybyś planował to zamówienie aż do dostawy, co chciałbyś wiedzieć, czego nie ma na tej karcie?"*

**Co właśnie zrobiłaś.** Dałaś Claude prawdziwy dokument i dostałaś z powrotem ustrukturyzowane odczytanie. Ścieżki poniżej budują na tym — różne zadania, ten sam podstawowy ruch.

---

## Wybierz ścieżkę

Cztery ścieżki poniżej. Każda kończy się działającym narzędziem. **Nie wiesz, od czego zacząć?** Ścieżki 1 i 2 to te najcięższe — obie używają funkcji Claude o nazwie **Code Execution**, która wykonuje prawdziwe obliczenia i produkuje prawdziwe pliki Excel. Są bardziej zaawansowane, ale bezpośrednio związane z twoją codzienną pracą. Ścieżka 3 jest lżejsza i do skończenia w 20 minut. Ścieżka 4 jest otwarta — prowadzisz ją sama.

---

### Ścieżka 1 — Planowanie palet z Code Execution *(~30 min, zaawansowane)*

**Wyjdziesz z:** działającym promptem, który bierze listę okien z zamówienia i produkuje plan palet jako prawdziwy plik Excel — mówiąc ci, które okna idą na którą paletę, w którym rzędzie, i jak szeroka jest ostatecznie każda paleta.

**Dlaczego to oddzielna ścieżka.** Planowanie palet ma prawdziwą złożoność kombinatoryczną — żonglujesz szerokościami okien, limitami rzędów, rozróżnieniem BE/nie-BE, wysokością stosowania, grupowaniem zamówień i priorytetem dat. Zwykły Claude nie potrafi niezawodnie rozwiązać takiego problemu z wieloma ograniczeniami w głowie. Ale Claude ma funkcję **Code Execution**, gdzie pisze i uruchamia prawdziwy kod Pythona na twoich danych. To jest właściwe narzędzie do tego.

**Dobra wiadomość:** Geoffrey już przetestował ten prompt i dostał działający plan palet. Będziesz iterować na czymś, co już działa, nie zaczynając od zera.

#### Krok 1. Otwórz nowy czat w Claude.
Upewnij się, że **Code Execution / File Creation** jest włączone w **Settings → Feature Preview**. Złap Marę lub Pawła, jeśli nie możesz tego znaleźć.

#### Krok 2. Wgraj prawdziwą listę okien.
Wyciągnij ostatni eksport zamówienia z WPS — taką listę, z której rzeczywiście planowałabyś palety. Uwzględnij numery zamówień, typy okien (z wyraźnie oznaczonym BE), szerokości, wysokości i daty.

#### Krok 3. Wklej prompt Geoffrey'a.
To jest dokładny prompt, który Geoffrey przetestował. Wklej go słowo w słowo jako początek konwersacji:

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

Claude napisze kod Pythona, uruchomi go na twoich danych i wyprodukuje plik Excel z planem palet.

#### Krok 4. Zweryfikuj wobec tego, co zrobiłabyś ręcznie.
Wybierz jedną lub dwie palety z wyniku Claude'a i sama sprawdź:

- Czy rzędy przestrzegają zasady 3 rzędów / 4 rzędów BE?
- Czy szerokość rzędu sumuje się do mniej niż najszersze okno w tym rzędzie?
- Czy coś jest wyższe niż 240 cm tam, gdzie nie powinno?
- Czy okna z tego samego zamówienia są pogrupowane razem, gdzie to możliwe?

Jeśli coś jest źle, powiedz Claude konkretnie:

> *"Na palecie 3, rząd 2 ma okno 230 cm i okno 90 cm obok siebie — to razem 320 cm, ale najszersze okno ma tylko 230. To jest źle. Sprawdź ponownie zasadę szerokości rzędu."*

#### Krok 5. Iteruj, aż pasuje do twojej oceny.
Pojawią się przypadki brzegowe. Każdy uczy Claude'a czegoś:

> *"Umieściłeś TRANSPORTFRAME na tej samej palecie co zwykłe okna — te powinny być na własnych paletach. Dodaj tę zasadę."*
>
> *"Nie priorytetyzujesz wystarczająco najwcześniejszej daty — okna z 2026-06-02 powinny wszystkie być na pierwszych paletach, ale rozdzieliłeś je na palety 1 i 4. Zapakuj jeszcze raz."*

#### Krok 6. Zapisz działający prompt.
Gdy wyprodukuje plan, któremu ufasz, **zapisz czat**. Planowanie w przyszłym tygodniu staje się: otwórz czat, wgraj nową listę okien, uruchom ten sam prompt.

**Ważne i nienegocjowalne:**
- **Weryfikuj każdy plan palet** wobec własnej oceny, zanim trafi do magazynu. Prompt to punkt wyjścia, nie ostateczna odpowiedź. Twoje odczytanie przypadków brzegowych jest tym, co czyni plan wykonalnym.
- **Dalej dopracowuj prompt**, gdy zauważysz zasady, które powinny być stałe. Każda iteracja sprawia, że uruchomienie w przyszłym tygodniu jest lepsze.

#### Cel rozszerzony — przekazanie zespołowi magazynu
Zapytaj Claude:

> *"Teraz napisz krótką notatkę dla zespołu magazynu, wyjaśniającą, jak czytać ten plan palet — co oznacza każda kolumna, jak znaleźć konkretne okno na właściwej palecie."*

Jeśli chłopcy nauczą się czytać plan, workflow skaluje się poza ciebie.

---

### Ścieżka 2 — Ładowanie ciężarówek z Code Execution *(~25 min, zaawansowane)*

**Wyjdziesz z:** działającym narzędziem, które bierze listę gotowych do wysyłki palet i mówi ci, które palety załadować na którą ciężarówkę — respektując pojemność ciężarówki (2 × 1300 cm), terminy dostaw i grupowanie klientów.

**Dlaczego to oddzielna ścieżka od Ścieżki 1.** Pakowanie palet to "okna → palety". Ładowanie ciężarówek to "palety → ciężarówki". Oba to problemy bin-packingu, ale z różnymi ograniczeniami. Takie samo podejście z Code Execution.

#### Krok 1. Otwórz nowy czat w Claude.
Upewnij się, że **Code Execution / File Creation** jest włączone.

#### Krok 2. Wgraj listę palet.
Zrzut ekranu lub eksport przeglądu "Finish Pallet" — ten z numerem palety, klientem, centymetrami ładunkowymi, statusem, datą NL.

#### Krok 3. Wyjaśnij Claude'owi ograniczenia.

> *"Planuję ładunki ciężarówek do dostawy. Potrzebuję pomocy w przypisywaniu gotowych palet do ciężarówek.*
>
> *Pojemność ciężarówki: każda ciężarówka ma 2 sloty ładunkowe po 1300 cm każdy (czyli 2600 cm w sumie na ciężarówkę, podzielone na dwie zatoki po 1300 cm).*
>
> *Ograniczenia:*
> *- Tylko palety ze statusem 'Ready from production' mogą być załadowane — nie 'In production'.*
> *- Każda paleta musi być wysłana na czas pod kątem swojej daty NL (terminu dostawy).*
> *- Użyj 'Loading centimeters' jako miary, która wypełnia zatokę ciężarówki, nie 'Centimeters'.*
> *- Grupuj palety tego samego klienta razem, gdzie to możliwe.*
> *- Palety z najwcześniejszą datą NL powinny iść na najwcześniejsze ciężarówki.*
>
> *Zanim napiszesz jakikolwiek kod, zadaj mi do 6 pytań, żeby upewnić się, że rozumiesz dane i wszystkie zasady, których ci nie powiedziałam."*

Odpowiedz na pytania. Tu twoja wiedza operacyjna wypełnia luki.

#### Krok 4. Poproś o plan ciężarówek.

> *"Teraz napisz kod Pythona, który czyta listę palet, stosuje ograniczenia i produkuje plik Excel pokazujący: które palety idą na którą ciężarówkę, w której zatoce, w jakiej kolejności ładowania. Uwzględnij kolumnę z łączną liczbą cm użytych na zatokę, żebym widziała, jak pełna jest każda ciężarówka."*

#### Krok 5. Sprawdź wynik.
Wybierz jeden plan ciężarówki i zweryfikuj:

- Czy dwie zatoki mieszczą się poniżej 1300 cm każda?
- Czy daty NL są wcześniejsze niż dzień odjazdu ciężarówki?
- Czy palety tego samego klienta są razem, gdzie to możliwe?
- Czy jest tam coś, czego nie powinno być (jak palety "In production")?

#### Krok 6. Iteruj.
Pojawią się przypadki brzegowe — powiedz Claude:

> *"Na ciężarówce 2 wymieszałeś palety Creon Online BV z innym klientem. Unikamy tego, chyba że nie możemy inaczej zapełnić ciężarówki. Dodaj to jako zasadę."*
>
> *"Wypełniłeś zatokę 1 do 1290 cm, a zatokę 2 do 800 cm — czy mogłeś przenieść jedną paletę, żeby zbalansować? Pokaż, co jest możliwe."*

#### Krok 7. Zapisz czat.
Jak w Ścieżce 1, zapisz działający czat do planowania w przyszłym tygodniu.

**Ważne:** plan ciężarówki to twój punkt wyjścia, nie wiążąca instrukcja. Zespół magazynu nadal ma ostatnie słowo co do tego, co fizycznie jest ładowane. Użyj tego, żeby *zaproponować* plan; zweryfikuj, zanim trafi do wysyłki.

#### Cel rozszerzony — połącz z planem palet
Jeśli skończysz zarówno Ścieżkę 1, jak i Ścieżkę 2, zapytaj Claude:

> *"Biorąc pod uwagę plan palet z wcześniejszego i ten plan ciężarówek — czy są palety, które mogły zostać połączone inaczej, żeby ładowanie ciężarówek było bardziej wydajne? Gdzie jest tarcie między tymi dwoma planami?"*

To rodzaj przekrojowego pytania, które tylko ty możesz zadać, gdy oba elementy istnieją.

---

### Ścieżka 3 — Sprawdzanie WZ wobec faktury *(~20 min)*

**Wyjdziesz z:** wielokrotnego użytku promptem, który porównuje WZ z fakturą dla tego samego zamówienia i flaguje wszelkie niezgodności — błędne ilości, błędne ceny, brakujące pozycje.

Ta ścieżka jest lżejsza niż Ścieżki 1 i 2 — używa zwykłego Claude (bez Code Execution), bo praca polega na czytaniu i porównywaniu, nie obliczaniu.

#### Krok 1. Otwórz nowy czat w Claude.

#### Krok 2. Wgraj jedną pasującą parę.
Wybierz ostatnie zamówienie, gdzie masz oba:
- WZ (co rzeczywiście zostało wysłane).
- Fakturę (co zostało zafakturowane).

PDF, zrzut ekranu lub wklejony tekst — wszystko działa.

#### Krok 3. Użyj tego promptu.

> *"Mam WZ i fakturę dla tego samego zamówienia. Porównaj je linia po linii i wyprodukuj tabelę z:*
> *- Pozycja / opis produktu*
> *- Ilość na WZ*
> *- Ilość na fakturze*
> *- Cena jednostkowa na fakturze*
> *- Czy się zgadzają (✓ / niezgodność)*
> *- Krótka notatka dla każdej niezgodności*
>
> *Bądź precyzyjny. Nie podsumowuj — potrzebuję widzieć każdą linię. Jeśli coś pojawia się w jednym dokumencie, ale nie w drugim, wyraźnie to oflaguj."*

#### Krok 4. Zweryfikuj na przypadku, który już znasz.
Spróbuj najpierw na zamówieniu, które już ręcznie sprawdziłaś i wiesz, że się zgadza. Potem spróbuj na takim, gdzie podejrzewasz problem.

Tak **kalibrujesz zaufanie**. Jeśli Claude poprawnie powie "wszystko się zgadza" na czystym przypadku i poprawnie złapie problem w przypadku z problemem, nauczyłaś się, jak bardzo możesz na nim polegać. Jeśli się myli, nauczyłaś się, gdzie nadal musisz patrzeć ręcznie.

#### Krok 5. Zrób z tego coś wielokrotnego użytku.
Zapisz prompt. Każda nowa para staje się: wklej WZ, wklej fakturę, uruchom prompt, dostań tabelę.

**Ważne:** Claude **proponuje**, ty **weryfikujesz**. Chodzi nie o pominięcie sprawdzania — chodzi o przyspieszenie go. Wszystko oflagowane jako niezgodność nadal wymaga twoich oczu na dokumentach źródłowych, zanim podejmiesz działanie.

#### Cel rozszerzony — obsłuż partię
Gdy działa dla jednej pary, spróbuj:

> *"Oto 5 WZ i 5 faktur. Dopasuj je do siebie według numeru zamówienia i wyprodukuj jedną tabelę podsumowującą, pokazującą, które zamówienia mają niezgodności, a które są czyste."*

---

### Ścieżka 4 — Przeformatowywanie plików dla dostawców *(~20 min)*

**Wyjdziesz z:** działającym podejściem do przeformatowywania pliku WPS-do-dostawcy, które dziś robisz ręcznie — kolory, widok, układ.

Ta ścieżka jest celowo otwarta. Znasz ten workflow lepiej niż my — powiedz Claude'owi, co chcesz osiągnąć, i pozwól mu pomóc ci wymyślić kształt rozwiązania.

#### Krok 1. Otwórz nowy czat w Claude.

#### Krok 2. Opowiedz Claude'owi historię.

> *"Za każdym razem, gdy wysyłam plik do jednego z naszych dostawców, eksportuję go z WPS i potem muszę go ręcznie przeformatować przed wysłaniem — zmienić kolory, zmienić widok, dostosować układ. Chcę zobaczyć, czy Claude może pomóc.*
>
> *Zanim cokolwiek ci pokażę, pozwól mi wyjaśnić workflow."*

Potem opisz to własnymi słowami — od czego zaczynasz, czego potrzebuje dostawca, jakie zmiany robisz za każdym razem, dlaczego te zmiany mają znaczenie.

#### Krok 3. Pokaż Claude'owi przykład.
Wgraj plik "przed" (eksport z WPS) i najlepiej plik "po" (jeden, który już przeformatowałaś, w sposób, jaki dostawca potrzebuje). Jeśli masz tylko "przed", to też w porządku — opisz, jak powinno wyglądać "po".

#### Krok 4. Zapytaj Claude, co potrafi zrobić.

> *"Patrząc na to, co opisałam, i pliki, które wgrałam — w czym możesz mi tu rzeczywiście pomóc? Bądź szczery co do tego, co jest do zautomatyzowania, a co nie."*

To najbardziej użyteczne pytanie ścieżki. Claude powie ci, czy to problem Code Execution (pisanie kodu do transformacji Excela), problem instrukcji krok po kroku (lista kontrolna, którą realizujesz), czy coś pomiędzy.

#### Krok 5. Spróbuj podejścia, które Claude zasugeruje.
Iteruj. Ta ścieżka jest eksploracyjna — celem nie jest skończone narzędzie dzisiaj, jest jasny obraz *czy* i *jak* to powinno być zautomatyzowane.

#### Co zabrać z tej ścieżki
Jeśli wyjdziesz z tej ścieżki wiedząc "tak, to jest do zautomatyzowania i oto prompt, który robi większość" lub "nie, to wymaga ludzkich oczu, ale oto lista kontrolna, która to przyspiesza" — każde jest wygraną.

---

## Czego celowo nie zrobiliśmy dziś

Kilka rzeczy, które się pojawiły, ale nie znalazły się w tym worksheetie — i dlaczego:

- **Bezpośrednia integracja z WPS.** Claude nie może obecnie sterować interfejsem WPS. Eksporty działają; to most na razie. Warto dłuższej rozmowy o głębszej integracji — idzie na tablicę "Beyond Claude alone".
- **Optymalizacja w całym łańcuchu produkcja-do-dostawy.** Planowanie palet (Ścieżka 1) i ładowanie ciężarówek (Ścieżka 2) są wystarczająco duże każde z osobna. Optymalizacja end-to-end w całym przepływie to projekt, nie ścieżka warsztatowa.
- **Wszystko, co wysyła automatycznie bez twojego przeglądu.** Każdy wynik z tych ścieżek to wersja robocza do twojego przeglądu, zanim trafi do magazynu, dostawcy lub klienta.

---

## Sprawdzenie na koniec dnia

Zanim wyjdziesz dziś, upewnij się:
- [ ] Masz co najmniej jedno działające narzędzie (zapisany czat lub Project), które możesz otworzyć jutro.
- [ ] Przetestowałaś je na prawdziwych danych.
- [ ] Zanotowałaś przypadki brzegowe, które pojawiły się podczas testowania.
- [ ] Masz jasny następny krok — choćby "plan palet w przyszłym tygodniu idzie przez Claude."

Jeśli nie skończyłaś swojej ścieżki, zabierz ten worksheet do domu i kontynuuj, gdy będziesz miała czas.

Pawel i Mara są przez całe popołudnie — złap nas w każdej chwili.
