// várak
let forces = {
  0: {
    // Castle
    src: "./várak/castle.jpg",
    hover_src: "./hősök/Castle_heroes.JPG",
    index: -1,
  },

  1: {
    // Conflux
    src: "./várak/conflux.jpg",
    hover_src: "./hősök/Conflux_heroes.JPG",
    index: -1,
  },

  2: {
    // Cove
    src: "./várak/cove.jpg",
    hover_src: "./hősök/Cove_heroes.JPG",
    index: -1,
  },

  3: {
    // Dungeon
    src: "./várak/dungeon.png",
    hover_src: "./hősök/Dungeon_heroes.JPG",
    index: -1,
  },

  4: {
    // Fortress
    src: "./várak/fortress.jpg",
    hover_src: "./hősök/Fortress_heroes.JPG",
    index: -1,
  },

  5: {
    // Inferno
    src: "./várak/inferno.jpg",
    hover_src: "./hősök/Inferno_heroes.JPG",
    index: -1,
  },

  6: {
    // Necropolis
    src: "./várak/necropolis.jpg",
    hover_src: "./hősök/Necropolis_heroes.JPG",
    index: -1,
  },

  7: {
    // Rampart
    src: "./várak/rampart.jpg",
    hover_src: "./hősök/Rampart_heroes.JPG",
    index: -1,
  },

  8: {
    // Stronghold
    src: "./várak/stronghold.jpg",
    hover_src: "./hősök/Stronghold_heroes.JPG",
    index: -1,
  },

  9: {
    // Stronghold
    src: "./várak/tower.jpg",
    hover_src: "./hősök/Tower_heroes.JPG",
    index: -1,
  },
};

let allForces = Object.keys(forces).length;

let randomTeam = () => {
  let randIndex = Math.floor(Math.random() * allForces);
  return forces[randIndex];
};

$(".random-varak").css("opacity", "0");
$("h3").css("opacity", "0");

$("button").click(() => {
  $("#sajat-csapat, #ellenseg")
    .children()
    .each(function () {
      $(this).remove();
    });

  // Reset
  Object.keys(forces).map((key) => {
    forces[key].index = -1;
  });

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
    parseInt(numOfPlayers) > allForces || numOfPlayers === ""
      ? allForces - 2
      : parseInt(numOfPlayers);

  $("#numOfPlayers").val(numOfPlayers);

  let count = 0;

  while (count < numOfPlayers + 2) {
    let team = randomTeam();

    if (team.index === -1) {
      count++;
      team.index = 0;
    } else {
      continue;
    }

    if (count <= 2) {
      $("#sajat-csapat").append(
        `<img src=${team.src} 
        onmouseover="this.src='${team.hover_src}'" 
        onmouseout="this.src='${team.src}'" 
        style="height:auto; width: 46vw; margin:15px;">`
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

  if (numOfPlayers <= allForces || numOfPlayers >= 1) {
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
