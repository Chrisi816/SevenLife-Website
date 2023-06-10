var active = 1;
$("document").ready(function () {
	setInterval(Change, 4000);
});

$(".point1").click(function () {
	active = 1;
	document.getElementById("titeltext").innerHTML =
		"Anfänger Freundliches und Echtes RP";
	document.getElementById(
		"desctext"
	).innerHTML = `Ein anfängerfreundliches und echtes Roleplay (RP) bietet
        eine einladende Umgebung für neue Spieler, die noch keine
        Erfahrung haben. Dabei steht die Authentizität im
        Vordergrund, um eine immersive Erfahrung für alle Teilnehmer
        zu schaffen.`;
	document.querySelector(".point3").style.background = "#64646466";
	document.querySelector(".point2").style.background = "#64646466";
	document.querySelector(".point1").style.background = "white";
});

$(".point2").click(function () {
	active = 2;
	document.getElementById("titeltext").innerHTML =
		"Mach das was du willst und wie du es willst";
	document.getElementById(
		"desctext"
	).innerHTML = `Aus unserem Server kannst du jegliche Jobs auspielen, die von einer illigane Spanne zur legalen reichen. Willst du eher ein Mafia Boss sein? So beantrage doch eine Mafia in unserem Discord`;
	document.querySelector(".point3").style.background = "#64646466";
	document.querySelector(".point1").style.background = "#64646466";
	document.querySelector(".point2").style.background = "white";
});

$(".point3").click(function () {
	active = 3;
	document.getElementById("titeltext").innerHTML =
		"Rp auf einem neuem Niveau";
	document.getElementById(
		"desctext"
	).innerHTML = `Du willst echtes und gutes Roleplay erleben? So bist du auf unserem Server richtig. Durch aussortierungen und funktionen die auf unserem Server sind, wird dir ermöglicht das beste aus deinem RP herauszuholen!`;
	document.querySelector(".point1").style.background = "#64646466";
	document.querySelector(".point2").style.background = "#64646466";
	document.querySelector(".point3").style.background = "white";
});

function Change() {
	if (active == 1) {
		active = 2;
		document.getElementById("titeltext").innerHTML =
			"Anfänger Freundliches und Echtes RP";
		document.getElementById(
			"desctext"
		).innerHTML = `Ein anfängerfreundliches und echtes Roleplay (RP) bietet
    eine einladende Umgebung für neue Spieler, die noch keine
    Erfahrung haben. Dabei steht die Authentizität im
    Vordergrund, um eine immersive Erfahrung für alle Teilnehmer
    zu schaffen.`;
		document.querySelector(".point3").style.background = "#64646466";
		document.querySelector(".point2").style.background = "#64646466";
		document.querySelector(".point1").style.background = "white";
	} else if (active == 2) {
		active = 3;
		document.getElementById("titeltext").innerHTML =
			"Mach das was du willst und wie du es willst";
		document.getElementById(
			"desctext"
		).innerHTML = `Aus unserem Server kannst du jegliche Jobs auspielen, die von einer illigane Spanne zur legalen reichen. Willst du eher ein Mafia Boss sein? So beantrage doch eine Mafia in unserem Discord`;
		document.querySelector(".point3").style.background = "#64646466";
		document.querySelector(".point1").style.background = "#64646466";
		document.querySelector(".point2").style.background = "white";
	} else if (active == 3) {
		active = 1;
		document.getElementById("titeltext").innerHTML =
			"Rp auf einem neuem Niveau";
		document.getElementById(
			"desctext"
		).innerHTML = `Du willst echtes und gutes Roleplay erleben? So bist du auf unserem Server richtig. Durch aussortierungen und funktionen die auf unserem Server sind, wird dir ermöglicht das beste aus deinem RP herauszuholen!`;
		document.querySelector(".point1").style.background = "#64646466";
		document.querySelector(".point2").style.background = "#64646466";
		document.querySelector(".point3").style.background = "white";
	}
}
