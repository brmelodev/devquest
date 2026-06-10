const user =
JSON.parse(
localStorage.getItem("user")
);

document
.getElementById("player-card")
.innerHTML =

`
<div class="card">

<h2>${user.name}</h2>

<p>XP: ${user.xp}</p>

<p>Nível: ${user.level}</p>

<p>Sequência: ${user.streak} dias 🔥</p>

</div>
`;
