// várak
let castle = {
  src: "./várak/castle.jpg",
  hover_src: "./hősök/Castle_heroes.JPG",
};
let conflux = {
  src: "./várak/conflux.jpg",
  hover_src: "./hősök/Conflux_heroes.JPG",
};
let cove = {
  src: "./várak/cove.jpg",
  hover_src: "./hősök/Cove_heroes.JPG",
};
let dungeon = {
  src: "./várak/dungeon.png",
  hover_src: "./hősök/Dungeon_heroes.JPG",
};
let fortress = {
  src: "./várak/fortress.jpg",
  hover_src: "./hősök/Fortress_heroes.JPG",
};
let inferno = {
  src: "./várak/inferno.jpg",
  hover_src: "./hősök/Inferno_heroes.JPG",
};
let necropolis = {
  src: "./várak/necropolis.jpg",
  hover_src: "./hősök/Necropolis_heroes.JPG",
};
let rampart = {
  src: "./várak/rampart.jpg",
  hover_src: "./hősök/Rampart_heroes.JPG",
};
let stronghold = {
  src: "./várak/stronghold.jpg",
  hover_src: "./hősök/Stronghold_heroes.JPG",
};
let tower = {
  src: "./várak/tower.jpg",
  hover_src: "./hősök/Tower_heroes.JPG",
};

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

$("button").click(() => {
  $("#sajat-csapat, #ellenseg")
    .children()
    .each(function () {
      $(this).remove();
    });

  let scenario = [];

  let numOfPlayers = $("#numOfPlayers")
    .val()
    .split("")
    .map((val) => {
      let nums = [];
      if (!isNaN(val)) {
        nums.push(val);
      }
      return nums.join("");
    })
    .join("");

  numOfPlayers =
    parseInt(numOfPlayers) > teams.length || numOfPlayers === ""
      ? teams.length - 2
      : parseInt(numOfPlayers);

  $("#numOfPlayers").val(numOfPlayers);

  while (scenario.length < numOfPlayers + 2) {
    let team = randomTeam();

    if (scenario.indexOf(team) === -1) {
      scenario.push(team);
    } else {
      continue;
    }

    if (scenario.length <= 2) {
      $("#sajat-csapat").append(
        `<img src=${team.src} 
        onmouseover="this.src='${team.hover_src}'" 
        onmouseout="this.src='${team.src}'" 
        style="height:auto; width: 47vw; margin:15px;">`
      );
    } else {
      $("#ellenseg").append(
        `<img src=${team.src} 
        onmouseover="this.src='${team.hover_src}'" 
        onmouseout="this.src='${team.src}'" 
        style="height:auto; width: 46vw; margin:15px;">`
      );
    }
  }

  if (numOfPlayers <= teams.length || numOfPlayers.length >= 1) {
    $(".random-varak").css("opacity", "1");
    $("h3").css("opacity", "1");
    $("#numOfPlayers").blur();
  }

  if (numOfPlayers === 0) {
    $("#ellenseg").css("opacity", "0");
    $("#ellenseg-label").css("opacity", "0");
  } else {
    $("#ellenseg-label").css("opacity", "1");
    $("#ellenseg").css("opacity", "1");
  }
});

$("body").keydown(function (e) {
  if (e.keyCode == 13) {
    $("button").click();
  }
});
