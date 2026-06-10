function startJourney(){

const user = {

name:"Aventureiro",

xp:0,

level:1,

streak:0

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

window.location.href =
"dashboard.html";

}
