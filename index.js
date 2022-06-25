fetch(`https://hunterapi.sytes.net/hubi`).then(res => res.json()).then(async (json) => {
document.getElementById("users").textContent = `${json.members}`;
document.getElementById("guilds").textContent = `${json.guilds}`;
document.getElementById("commands").textContent = `${json.commands}`;
document.getElementById("discord").textContent = `${json.discord}`;
document.getElementById("nodejs").textContent = `${json.node}`;
document.getElementById("uptime").textContent = `${json.uptime}`;
})