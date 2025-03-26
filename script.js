const bilder = [
  "bilder/1.jpg"
  // Du kan lägga till fler: "bilder/andra.jpg", ...
];

const meddelanden = [
  "Jag älskar dig, mamma! ❤️",
  "Tänker på dig varje dag! 🌸",
  "Du är den finaste jag vet! 💖",
  "Kram genom skärmen! 🤗",
  "Ha en fantastisk dag! ☀️"
];

const mammaCitat = [
  "En mors kärlek är evig. 💖",
  "Mamma – den första vän, bästa vän och eviga vän.",
  "Allt jag är, är tack vare dig, mamma. 🌸",
  "Bakom varje framgångsrik person finns en fantastisk mamma.",
  "Att ha en mamma är att ha en skatt utan slut.",
  "En kram från mamma botar allt. 🤗"
];

function dagensIndex(lista) {
  const idag = new Date();
  const start = new Date(2025, 0, 1); // Starta från 1 januari 2025
  const dagarSedanStart = Math.floor((idag - start) / (1000 * 60 * 60 * 24));
  return dagarSedanStart % lista.length;
}

window.onload = () => {
  const bildIndex = dagensIndex(bilder);
  const meddelandeIndex = dagensIndex(meddelanden);

  document.getElementById("dagensBild").src = bilder[bildIndex];
  document.getElementById("meddelande").textContent = meddelanden[meddelandeIndex];

  // Slumpa mamma-citat
  const citatIndex = Math.floor(Math.random() * mammaCitat.length);
  const citatElement = document.createElement("blockquote");
  citatElement.textContent = mammaCitat[citatIndex];
  citatElement.style.fontStyle = "italic";
  citatElement.style.marginTop = "20px";
  citatElement.style.color = "#555";
  document.querySelector(".container").appendChild(citatElement);
};