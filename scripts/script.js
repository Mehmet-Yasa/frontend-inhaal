// Maantje knop wisselt tussen licht en donker thema
// Bron: Claude (AI), uitleg en hulp

// Zoek de knop in de HTML die het donker thema activeert
const themaKnop = document.querySelector('button[aria-label="Donker thema"]');

// Als je op de knop klikt, wordt de functie wisselThema uitgevoerd
themaKnop.addEventListener("click", wisselThema);

// Zet de class donker-thema op de body of haal hem weg
function wisselThema() {
	document.body.classList.toggle("donker-thema");
}

// Knop Tekst groter: maakt de tekst groter of weer normaal
// Bron: Claude (AI), uitleg en hulp

// Zoek de knop in de HTML die de tekstgrootte aanpast
const tekstKnop = document.querySelector("footer button:last-of-type");

// Zoek de html tag in de HTML
const html = document.querySelector("html");

// Als je op de knop klikt, wordt de functie wisselTekstgrootte uitgevoerd
tekstKnop.addEventListener("click", wisselTekstgrootte);

// Zet de class grote-tekst op html of haal hem weg
function wisselTekstgrootte() {
	html.classList.toggle("grote-tekst");
}

// Menu knop: opent en sluit het menu
// Bron: FED Oefening JS 3-stap 2 - Hamburger menu (codepen.io/shooft/pen/qEOpvZK), en Claude (AI) uitleg en hulp

// Zoek de menu knop en de nav in de HTML
const menuKnop = document.querySelector('button[aria-label="Menu"]');
const nav = document.querySelector("nav");

// Als je op de knop klikt, wordt de functie toonMenu uitgevoerd
menuKnop.addEventListener("click", toonMenu);

// Zet de class toonMenu op de nav of haal hem weg
function toonMenu() {
	nav.classList.toggle("toonMenu");
}