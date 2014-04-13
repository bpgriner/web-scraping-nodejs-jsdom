// Ben Griner
// April 12, 2014

// NodeJS app that performs some selective web scraping from Yahoo's golf
// leaderboard using jsdom & jQuery

// If the structure of the HTML on Yahoo's leaderboard page changes, the jQuery
// select statements will need to be updated.

var jsdom = require("jsdom");

jsdom.env(
  "http://sports.yahoo.com/golf/pga/leaderboard",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {

    var playerRows = window.$("div#leaderboardtable table.sportsTable tbody tr");
    console.log("there are", playerRows.length, "player rows");

    var playersAndScores = [];

    playerRows.each(function() {

      var playerName = window.$(this).find("td.player a").text();
      var playerScore = window.$(this).find("td.total").text().trim();

      if (playerScore == "-") {
        playerScore = "MC";
      }

      var playerJson = {
        player: playerName,
        score: playerScore
      }

      playersAndScores.push(playerJson);
    });    

    console.log("there are", playersAndScores.length, "players with scores in the array");

    var playersAndScoresLength = playersAndScores.length;
    for (var i = 0; i < playersAndScoresLength; i++) {
      console.log(playersAndScores[i]);
    }

  }
);