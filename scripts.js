// várak
let castle = "./várak/castle.jpg";
let conflux = "./várak/conflux.jpg";
let cove = "./várak/cove.jpg";
let dungeon = "./várak/dungeon.jpg";
let fortress = "./várak/fortress.jpg";
let inferno = "./várak/inferno.jpg";
let necropolis = "./várak/necropolis.jpg";
let rampart = "./várak/rampart.jpg";
let stronghold = "./várak/stronghold.jpg";
let tower = "./várak/tower.jpg";

let teams = [
  castle,
  conflux,
  cove,
  dungeon,
  fortress,
  inferno,
  necropolis,
  rampart,
  stronghold,
  tower,
];

let randomTeam = () => {
  let randIndex = Math.floor(Math.random() * teams.length);
  return teams[randIndex];
};

$(".random-varak").css("opacity", "0");
$("h3").css("opacity", "0");

$("#invisible").click(() => {
  $("#sajat-csapat, #ellenseg")
    .children()
    .each(function () {
      $(this).remove();
    });

  let scenario = [];
  let numOfPlayers = 2 + parseInt($("#numOfPlayers").val());

  while (scenario.length < numOfPlayers) {
    let team = randomTeam();

    if (scenario.indexOf(team) === -1) {
      scenario.push(team);
    } else {
      continue;
    }

    if (scenario.length <= 2) {
      $("#sajat-csapat").append(
        `<img src=${team} style="height:300px; width: auto; margin-left:10px;">`
      );
    } else {
      $("#ellenseg").append(
        `<img src=${team} style="height:300px; width: auto; margin:10px;">`
      );
    }
  }

  $(".random-varak").css("opacity", "1");
  $("h3").css("opacity", "1");
  $("#numOfPlayers").blur();
});

$("body").keydown(function (e) {
  if (e.keyCode == 13) {
    $("#invisible").click();
  }
});
