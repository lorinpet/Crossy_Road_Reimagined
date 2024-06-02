# Dokumentace
## Vývojář - Petr Lorinčík
## Cíl projektu:
### Jako téma semestrální práce jsem si vybral implementaci webové hry. Při implementaci jsem se inspiroval hrou Crossy Road. Cílem bylo vytvořit interaktivní, zábavnou, náročnou hru.
## Postup:
### Téměř všechen kód se nachází v jednom souboru: index.html. Při vývoji aplikace jsem se rozhodl použít rastrovou grafiku skrze Canvas. Herní pole má rozměry 18x14 políček, s tím že na canvasu je vidět pouze 16x12 políček. Sada políček na jedné řadě je reprezentována třídou Chunk, což znamená, že v poli je vždy 14 chunků. Prvních 7 chunků je vždy vygenerovaných stejným předem daným způsobem, všechny ostatní chunky jsou generovány náhodně. Chunky se pohybují po obrazovce určitým tempem, když přestává být chunk vidět na obrazovce, tak je vymazán, a na konci pole je vygenerován nový chunk. Každý chunk má přesně 18 elementů. Elementy se pohybují horizontálně v rámci chunku, s tím že když přestává být element vidět na obrazovce, tak je vymazán, a na konci chunku je vygenerován nový element. Pokud je hráč příliš pomalý, a vypadne z mapy, tak zemře.
### Existují čtyři typy chunků:
#### Plain - Dva typy elementů: louka - hráč může projít | strom - cesta je zablokovaná.
#### Road - Tři typy elementů: prázdná silnice - hráč může projít | auto - zabírá 2 elementy, a pokud tam hráč vstoupí, tak zemře | kamion - zabírá 4 elementy, a pokud tam hráč vstoupí, tak zemře.
#### Rail - Dva typy elementů: prázdná železnice - hráč může projít | vlak - zabírá 40 elementů, a pokud tam hráč vstoupí, tak zemře, a když se vlak blíží, hráč vždy dostává předčasné varování formou železničního semaforu.
#### River - Dva (Čtyři) typy elementů: prázdná řeka - když tam hráč vstoupí, tak zemře | kláda - zabírá 2, 3 nebo 4 elementy, a hráč na ní může bezpečně vstoupit.
## Popis funkčnosti:
### Rozhodl jsem se rozdělit aplikaci na tři stránky:
#### - Hlavní menu, které v sekci nad formulářem zahrnuje svg obrázek kachny a nápis, kolik má hráč highscore pod daným username. Uvnitř formuláře má textové pole, kde uživatel zadává své username. Pod ním je tlačítko na zahájení hry a tlačítko na zobrazení sekce s highscores. Poslední je spínač v dolní části formuláře, který umožňuje vypnout a zapnout hudbu.
#### - Highscores stránka, která zahrnuje stejné svg jako hlavní menu a tlačítko na vstup zpět pod ním. Dále je zde seznam všech hráčů, kteří hru hráli a jejich highscore v seřazeném pořadí od nejlepšího hráče až k nejhoršímu. Informace o highscore u všech hráčů se ukládají v prohlížeči skrze LocalStorage.
#### - Herní stránka, která obsahuje Canvas se samotnou hrou. Herní stránka animuje hru a její průběh. Vlevo nahoře se zobrazuje současné score a celkové highscore. Vpravo nahoře se po započetí hry zobrazuje tlačítko na pozastavení hry a následné možnosti jít zpět, resetovat hru nebo zrušit pozastavení. Pro tyto účely lze také použít tlačítko Esc. Samotnou kachnu, za kterou hráč hraje lze ovládat třemi způsoby: wasd, ↑←↓→ nebo myší tím, že hráč klikne tím směrem od kachny, kterým chce postoupit. Hra také podporuje možnost hrát na mobilním zařízení tím, že se obrazovka otočí o 180 stupňů, pokud je šířka viewportu menší než 4/3 výšky viewportu.
### Credits:
#### Hudba v hlavním menu - Smashing Windshields (Soundtrack ze hry Freddy Fazbear's Pizzeria Simulator)
#### Použité audioefekty v samotné hře - Audio z https://pixabay.com/sound-effects/ editováno pomocí Audacity
#### Použité sprites v samotné hře - Vytvořeno mnou pomocí MS Paint
## Požadovaná funkcionalita:
### Dokumentace:
#### Právě ji čtete :)
### HTML 5
#### Validita - Otestováno přes https://validator.w3.org
#### Validita - Funguje v moderních prohlížečích
#### Semantické značky - HTML značky jsem použil tak, jak mi přišlo vhodné, snad správně
#### Grafika - SVG / Canvas - SVG obrázek kachny na hlavním menu a Canvas pro samotnou hru
#### Média - Audio/Video - HTML obsahuje značku \<audio\>, kde se nachází hudba hlavního menu
#### Formulářové prvky - Je zde formulář pro zadání username hráče, který zahrnuje validace, typy, placeholder i autofocus
#### Offline aplikace - Je (viz sekce Javascript)
### CSS
#### Pokročilé selektory - Jsou použity pseudotřídy i kombinátory selektorů
#### Vendor prefixy - Byly automaticky vygenerovány pomocí https://autoprefixer.github.io
#### CSS3 transformace 2D/3D - Jsou použity pro funkčnost spínače hudby v hlavním menu, a pro rotaci Canvas, pokud nutno
#### CSS3 transitions/animations - Jsou použity transitions pro jemnou animaci zapnutí a vypnutí spínače
#### Media queries - Aktivují se pokud je šířka stránky malá, a pokud je šířka stránky méně než 4/3 výšky stránky
### Javascript
#### OOP přístup - Je zde třída Chunk, jejíž jednotlivé instance tvoří mapu, na které se hraje
#### Použití JS frameworku či knihovny - Pouze čistý JS
#### Použití pokročilých JS API - Je použito LocalStorage pro ukládání highscore hráčů v rámci prohlížeče
#### Funkční historie - Skrze tlačítka zpět/vpřed prohlížeče lze přepínat mezi hlavní stránkou a highscore stránkou
#### Ovládání medií - Přes javascript se v rámci hry přehrávají audio efekty pro zlepšení herního zážitku
#### Offline aplikace - Soubor service-worker.js obsahuje funkcionalitu pro caching aplikace za účelem umožnění spuštění aplikace offline
#### JS práce s SVG - JS updatuje highscore napsané v SVG obrázku na základě highscore současného username
### Ostatní
#### Kompletnost řešení - Hra obsahuje vše, co jsem si přál, a pečlivě jsem ji otestoval
#### Estetické zpracování - Snažil jsem se, ale nemohu objektivně posoudit
