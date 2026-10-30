// JavaScript Document
const themaKnop = document.querySelector('button[aria-label="Donker thema"]');

themaKnop.addEventListener("click", wisselThema);

function wisselThema() {
	document.body.classList.toggle("donker-thema");
}