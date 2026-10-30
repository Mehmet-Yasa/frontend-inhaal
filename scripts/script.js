// JavaScript Document
const themaKnop = document.querySelector('button[aria-label="Donker thema"]');

themaKnop.addEventListener("click", wisselThema);

function wisselThema() {
	document.body.classList.toggle("donker-thema");
}

const tekstKnop = document.querySelector("footer button:last-of-type");
const html = document.querySelector("html");

tekstKnop.addEventListener("click", wisselTekstgrootte);

function wisselTekstgrootte() {
	html.classList.toggle("grote-tekst");
}