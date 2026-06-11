const user =
JSON.parse(
localStorage.getItem("user")
);

if(user){

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

}

const coursesContainer =
document.getElementById(
"courses-list"
);

if(
coursesContainer &&
typeof courses !== "undefined"
){

coursesContainer.innerHTML =

courses.map(course =>

`
<div class="course-card">

<h3>${course.title}</h3>

<p>${course.description}</p>

<a href="curso.html?id=${course.id}">
Acessar Curso
</a>

</div>
`

).join("");

}
