fetch(`https://hunterapi.tk/hubi`).then(res => res.json()).then(async (json) => {
document.getElementById("users").textContent = `${json.members}`;
document.getElementById("guilds").textContent = `${json.guilds}`;
document.getElementById("commands").textContent = `${json.commands}`;
document.getElementById("discord").textContent = `${json.discord}`;
document.getElementById("nodejs").textContent = `${json.node}`;
document.getElementById("uptime").textContent = `${json.uptime}`;
})


function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);

