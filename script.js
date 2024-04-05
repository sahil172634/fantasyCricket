let br = '<br>';
let sp = '&nbsp';
let player = [
  {
    name: 'Virat Kohli',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Jasprit Bumrah',
    playingRole: 'Bowler',
    credit: 12,
  },
  {
    name: 'Rohit Sharma',
    playingRole: 'Batsman',
    credit: 11,
  },
  {
    name: 'Yuzvendra Chahal',
    playingRole: 'Bowler',
    credit: 9,
  },
  {
    name: 'Mohammed Shami',
    playingRole: 'Bowler',
    credit: 8,
  },
  {
    name: 'Suryakumar Yadav',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Prasidh Krishna',
    playingRole: 'Bowler',
    credit: 7,
  },
  {
    name: 'Hardik Pandya',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Shikhar Dhawan',
    playingRole: 'Batsman',
    credit: 8,
  },
  {
    name: 'Ravindra Jadeja',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Arshdeep Singh',
    playingRole: 'Bowler',
    credit: 6,
  },
  {
    name: 'Ravichandran Ashwin',
    playingRole: 'Bowler',
    credit: 11,
  },
  {
    name: 'Deepak Chahar',
    playingRole: 'Bowler',
    credit: 9,
  },
  {
    name: 'Ruturaj Gaikwad',
    playingRole: 'Batsman',
    credit: 8,
  },
  {
    name: 'Deepak Hooda',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Ishan Kishan',
    playingRole: 'Bowler',
    credit: 10,
  },
  {
    name: 'Shreyas Iyer',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Venkatesh Iyer',
    playingRole: 'Wicketkeeper',
    credit: 9,
  },
  {
    name: 'Dinesh Karthik',
    playingRole: 'Wicketkeeper',
    credit: 11,
  },
  {
    name: 'Kuldeep Yadav',
    playingRole: 'Bowler',
    credit: 9,
  },
  {
    name: 'Bhuvneshwar Kumar',
    playingRole: 'Bowler',
    credit: 12,
  },
  {
    name: 'Mohammed Siraj',
    playingRole: 'Bowler',
    credit: 10,
  },
  {
    name: 'Devdutt Padikkal',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Rishabh Pant',
    playingRole: 'Wicketkeeper',
    credit: 10,
  },
  {
    name: 'Moeen Ali',
    playingRole: 'Bowler',
    credit: 9,
  },
  {
    name: 'James Anderson',
    playingRole: 'Bowler',
    credit: 12,
  },
  {
    name: 'Jonny Bairstow',
    playingRole: 'Batsman',
    credit: 11,
  },
  {
    name: 'Sam Billings',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Stuart Broad',
    playingRole: 'Bowler',
    credit: 9,
  },
  {
    name: 'Rory Burns',
    playingRole: 'Bowler',
    credit: 8,
  },
  {
    name: 'Jos Buttler',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Zak Crawley',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Sam Curran',
    playingRole: 'Bowler',
    credit: 8,
  },
  {
    name: 'Tom Curran',
    playingRole: 'Bowler',
    credit: 7,
  },
  {
    name: 'Chris Jordan',
    playingRole: 'Bowler',
    credit: 11,
  },
  {
    name: 'Jack Leach',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Liam Livingstone',
    playingRole: 'Batsman',
    credit: 12,
  },
  {
    name: 'Reece Topley',
    playingRole: 'Bowler',
    credit: 11,
  },
  {
    name: 'David Willey',
    playingRole: 'Wicketkeeper',
    credit: 9,
  },
  {
    name: 'Joe Root',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Ben Stokes',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Pat Cummins',
    playingRole: 'Bowler',
    credit: 11,
  },
  {
    name: 'Aaron Finch',
    playingRole: 'Batsman',
    credit: 10,
  },
  {
    name: 'Cameron Green',
    playingRole: 'Batsman',
    credit: 9,
  },
  {
    name: 'Josh Hazlewood',
    playingRole: 'Bowler',
    credit: 9,
  },
  {
    name: 'Travis Head',
    playingRole: 'Wicketkeeper',
    credit: 8,
  },
  {
    name: 'Usman Khawaja',
    playingRole: 'Batsman',
    credit: 11,
  },
  {
    name: 'Marnus Labuschagne',
    playingRole: 'Bowler',
    credit: 10,
  },
  {
    name: 'Nathan Lyon',
    playingRole: 'Bowler',
    credit: 9,
  },
];
let tosswin = Math.floor(Math.random() * 2);
let firstTeam, secTeam, tossLoseTeam, tossWinTeam, currentTeam;

function getTossteamName(toosWin, tossLose) {
  document.getElementById('winnerTeam').innerHTML = toosWin + ' is won the Toss.....Create your team.';
  currentTeam = toosWin;
  tossWinTeam = toosWin;
  tossLoseTeam = tossLose;
  console.log(currentTeam);
}
function tossWin() {
  firstTeam = document.getElementById('team1').value;
  secTeam = document.getElementById('team2').value;
  if (firstTeam.toUpperCase() == secTeam.toUpperCase()) {
    alert('You have to Enter Different team name.');
  } else {
    if (tosswin == 0) {
      getTossteamName(firstTeam, secTeam);
    } else {
      getTossteamName(secTeam, firstTeam);
    }
    document.getElementById('selectTeam').style.display = 'block';
    document.getElementById('FantasyCricket').style.display = 'none';
    showPlayers('Batsman');
  }
}

function showPlayerAsPerPlayingRole(playerArray, mainArray) {
  document.getElementById('showPlayer').innerHTML = null;
  for (let temp of mainArray) {
    let playerInclude = playerArray.some((member) => member.name == temp.name);
    document.getElementById('showPlayer').innerHTML +=
      temp.name +
      br +
      temp.playingRole +
      br +
      temp.credit +
      sp +
      `<button id= "${temp.name}" onclick="addPlayerHandler('${temp.name}',${temp.credit})"${
        playerInclude ? ' disabled' : ' '
      }>Add</button>` +
      sp +
      `<button id= "${temp.name}${temp.credit}"  onclick="removePlayerHandler('${temp.name}')" ${
        playerInclude ? ' ' : ' disabled'
      }>Remove</button>` +
      br;
  }
}

function remove1stTeamPlayers(playerArray, mainArray) {
  for (let selectedPlayer of playerArray) {
    let findindex = mainArray.findIndex((n) => n.name == selectedPlayer.name);
    console.log(findindex);
    findindex >= 0 && mainArray.splice(findindex, 1);
  }
}

function showPlayers(playingRole) {
  let mainArray = player.filter((item) => item.playingRole === playingRole);
  if (currentTeam == tossWinTeam) {
    showPlayerAsPerPlayingRole(tossWinTeam11, mainArray);
  } else {
    remove1stTeamPlayers(tossWinTeam11, mainArray);
    showPlayerAsPerPlayingRole(tossLoseTeam11, mainArray);
  }
}

function displaySummery(teamArray) {
  for (let temp of teamArray) {
    document.getElementById('showPlayer').innerHTML += temp.name + br + temp.playingRole + br + temp.credit + br;
    let opt = temp.name;
    let el = document.createElement('option');
    let el2 = document.createElement('option');
    el.textContent = opt;
    el2.textContent = opt;
    document.getElementById('selectCaptain').appendChild(el);
    document.getElementById('selectVC').appendChild(el2);
  }
}
function displayTeamsummery() {
  document.getElementById('showPlayer').innerHTML = null;
  document.getElementById('showPlayer').innerHTML +=
    br +
    ` <lable>Captain : </lable ><select id="selectCaptain"></select> &nbsp; 
      <lable>Vice-Captain : </lable> <select id="selectVC"></select>` +
    sp +
    sp +
    `<button  id="nextbtn"  onclick="next()">NEXT</button>` +
    br +
    br;
  if (currentTeam == tossWinTeam) {
    displaySummery(tossWinTeam11);
  } else {
    displaySummery(tossLoseTeam11);
  }
}

let creditScore = 0;
let tossWinTeam11 = [];
let tossLoseTeam11 = [];
let member;

function addPlayers(teamArray) {
  document.getElementById(`${member.name}`).setAttribute('disabled', true);
  document.getElementById(`${member.name}${member.credit}`).removeAttribute('disabled');
  teamArray.push(member);
  creditScore += member.credit;
  document.getElementById('credit').innerHTML = 'Credit : ' + creditScore;
}

function validationForAddingPlayer(teamArray, credit) {
  let batsman = teamArray.filter((item) => item.playingRole === 'Batsman');
  let bowler = teamArray.filter((item) => item.playingRole == 'Bowler');
  let wks = teamArray.filter((item) => item.playingRole == 'Wicketkeeper');
  if (credit + creditScore <= 100) {
    if (member.playingRole == 'Batsman' && batsman.length > 4) {
      alert('Can not add more than 5 batsman');
    } else if (member.playingRole == 'Bowler' && bowler.length > 4) {
      alert('Can not add more than 5 bowler');
    } else if (member.playingRole == 'Wicketkeeper' && wks.length > 0) {
      alert('Can not add more than 5 Wicketkeeper');
    } else {
      addPlayers(teamArray);
    }
  } else {
    alert('credit should be less than or equal to 100');
  }
}
function addPlayerHandler(name, credit) {
  member = player.find((play) => play.name == name);
  if (currentTeam == tossWinTeam) {
    validationForAddingPlayer(tossWinTeam11, credit);
    console.log(tossWinTeam11);
  } else {
    validationForAddingPlayer(tossLoseTeam11, credit);
    console.log(tossLoseTeam11);
  }
}
function removePlayer(teamArray) {
  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].name == member.name) {
      document.getElementById(`${member.name}`).removeAttribute('disabled');
      document.getElementById(`${member.name}${member.credit}`).setAttribute('disabled', true);
      teamArray.splice(i, 1);
      creditScore -= member.credit;
      document.getElementById('credit').innerHTML = 'Credit : ' + creditScore;
    }
  }
}
function removePlayerHandler(playerName) {
  member = player.find((play) => play.name === playerName);
  if (currentTeam == tossWinTeam) {
    removePlayer(tossWinTeam11);
    console.log(tossWinTeam11);
  } else {
    removePlayer(tossLoseTeam11);
    console.log(tossLoseTeam11);
  }
}
let team1Cap, team1ViceCap, team2Cap, team2ViceCap;
function nextValidation(teamArray) {
  let captain = document.getElementById('selectCaptain').value;
  let viceCaptain = document.getElementById('selectVC').value;
  if (teamArray.length != 11) {
    alert('please select  11 player first for first team');
    return false;
  } else if (captain == viceCaptain) {
    alert('same player not should be a captain  and vice-captain both..');
    return false;
  } else {
    return true;
  }
}
function next() {
  if (currentTeam == tossWinTeam) {
    team1Cap = document.getElementById('selectCaptain').value;
    team1ViceCap = document.getElementById('selectVC').value;
    if (nextValidation(tossWinTeam11)) {
      creditScore = 0;
      document.getElementById('winnerTeam').innerHTML = 'Now ' + tossLoseTeam + ' Create your team.';
      document.getElementById('credit').innerHTML = 'Credit : ' + creditScore;
      currentTeam = tossLoseTeam;
      showPlayers('Batsman');
    }
  } else {
    team2Cap = document.getElementById('selectCaptain').value;
    team2ViceCap = document.getElementById('selectVC').value;
    if (nextValidation(tossLoseTeam11)) {
      currentTeam = tossWinTeam;
      document.getElementById('selectTeam').style.display = 'none';
      document.getElementById('startMatch').style.display = 'block';
      playMatch();
    }
  }
}
let tossWinTeamPoint = {
  teamRun: 0,
  teamPoints: 0,
  teamWicket: 0,
  teamOver: 0,
};
let tossLoseTeamPoint = {
  teamRun: 0,
  teamPoints: 0,
  teamWicket: 0,
  teamOver: 0,
};
let shot = ['Wicket'];
let point;
let overCount = 0.0;
let ball = 1;
let currentDate;
let currentBatsman;
let currentBowler;
let shotType;

function hitBall() {
  getShotTypeAndDate();
  if (currentTeam == tossWinTeam) {
    firstinnig();
  } else {
    secInnings();
  }
  ball++;
}
function getShotTypeAndDate() {
  currentDate = new Date().toLocaleString();
  currentBatsman = document.getElementById('currentBatsman').innerText;
  currentBowler = document.getElementById('bowlerName').innerText;
  shotType = shot[Math.floor(Math.random() * shot.length)];
  overCount += 0.1;
  overCount = overCount.toFixed(1);
  overCount = parseFloat(overCount);
  if (overCount == 0.6 || overCount == 1.6 || overCount == 2.6 || overCount == 3.6 || overCount == 4.6) {
    overCount = Math.round(overCount);
  }
  if (ball == 7) {
    document.getElementById('information').innerHTML = null;
    ball = 1;
  }
}
let batMul, bowlMul;
function addPointToTeam(captain, viceCap, teamObj) {
  typeof shotType == 'number' ? (teamObj.teamRun = teamObj.teamRun + shotType) : '';
  currentBatsman == captain ? (batMul = 2) : currentBatsman == viceCap ? (batMul = 1.5) : (batMul = 1);
  currentBowler == captain ? (bowlMul = 2) : currentBowler == viceCap ? (bowlMul = 1.5) : (bowlMul = 1);

  if (shotType == 4) {
    teamObj.teamPoints += batMul * 5;
  } else if (shotType == 6) {
    teamObj.teamPoints += batMul * 8;
  } else if (shotType <= 3) {
    teamObj.teamPoints += batMul * shotType;
  } else if (shotType == 'Wicket') {
    teamObj.teamPoints += bowlMul * 10;
  } else if (shotType == 'Dot') {
    teamObj.teamPoints += bowlMul * 1;
  }
}

function addRemovePointToBatsman(teamArray, teamObj, captain, viceCap) {
  currentBatsman == captain ? (batMul = 2) : currentBatsman == viceCap ? (batMul = 1.5) : (batMul = 1);
  for (let obj of teamArray) {
    if (obj.name === currentBatsman) {
      typeof shotType == 'number' ? (obj.run += shotType) : '';
      obj.ballPlayed += 1;
      if (shotType == 4) {
        obj.point += batMul * 5;
        obj.four += 1;
      } else if (shotType == 6) {
        obj.point += batMul * 8;
        obj.six += 1;
      } else if (shotType == 1 || shotType == 2 || shotType == 3) {
        obj.point += batMul * shotType;
      }
      if (shotType == 'Wicket') {
        obj.isBat = 'Out';
        if (obj.run == 0) {
          teamObj.teamPoints -= batMul * 2;
          obj.point -= batMul * 2;
        }
      } else {
        document.getElementById('currentBatsmanRun').innerHTML = obj.run;
        document.getElementById('playerPoints').innerHTML = obj.point;
        document.getElementById('ball').innerHTML = obj.ballPlayed;
        document.getElementById('Six').innerHTML = obj.six;
        document.getElementById('fours').innerHTML = obj.four;
        break;
      }
    }
  }
}
function changBowler(teamArray) {
  if (overCount == 1 || overCount == 2 || overCount == 3 || overCount == 4) {
    let index = teamArray.findIndex((item) => item.name === currentBowler) + 1;
    document.getElementById('bowlerName').innerHTML = teamArray[index].name;
  }
}

function changBatsman(teamArray) {
  let index = teamArray.findIndex((item) => item.name === currentBatsman) + 1;
  document.getElementById('currentBatsman').innerHTML = teamArray[index].name;
}

function addPointsToBowler(teamArray) {
  for (let obj of teamArray) {
    if (obj.name == currentBowler) {
      if (shotType == 'Wicket') {
        obj.point += bowlMul * 10;
        obj.wicket += 1;
      } else if (shotType == 'Dot') {
        obj.point += bowlMul * 1;
        obj.dotBall += 1;
      }
    }
  }
}
function firstinnig() {
  if (overCount <= 5 && tossWinTeamPoint.teamWicket < 10) {
    if (typeof shotType == 'number') {
      addPointToTeam(team1Cap, team1ViceCap, tossWinTeamPoint);
    } else {
      addPointToTeam(team2Cap, team2ViceCap, tossLoseTeamPoint);
      addPointsToBowler(tossLoseTeam11);
      if (shotType == 'Wicket') {
        changBatsman(tossWinTeam11);
        tossWinTeamPoint.teamWicket += 1;
        ResetPlayerRunsAndPoints();
      }
      console.log(tossWinTeamPoint);
    }
    addRemovePointToBatsman(tossWinTeam11, tossWinTeamPoint, team1Cap, team1ViceCap);
    changBowler(tossLoseTeam11);
    updateScoreboard(tossWinTeamPoint, tossLoseTeamPoint);
  } else {
    alert('First innings over');
    updateInfo();
  }
}
function secInnings() {
  if (overCount <= 5 && tossLoseTeamPoint.teamWicket < 10) {
    if (typeof shotType == 'number') {
      addPointToTeam(team2Cap, team2ViceCap, tossLoseTeamPoint);
      console.log(tossLoseTeamPoint);
    } else {
      addPointToTeam(team1Cap, team1ViceCap, tossWinTeamPoint);
      if (shotType == 'Wicket') {
        changBatsman(tossLoseTeam11);
        ResetPlayerRunsAndPoints();
        tossLoseTeamPoint.teamWicket += 1;
      }
      addPointsToBowler(tossWinTeam11);
      console.log(tossLoseTeamPoint);
    }
    addRemovePointToBatsman(tossLoseTeam11, tossLoseTeamPoint, team2Cap, team2ViceCap);
    changBowler(tossWinTeam11);
    updateScoreboard(tossLoseTeamPoint, tossWinTeamPoint);
  } else {
    alert('Second Innings over');
    document.getElementById('startMatch').style.display = 'none';
    document.getElementById('scroebord').style.display = 'block';
    scorebord();
  }
}
function scorebord() {
  if (tossWinTeamPoint.teamPoints > tossLoseTeamPoint.teamPoints) {
    document.getElementById('winerteam').innerHTML = tossWinTeam + ' is won the match';
  } else {
    document.getElementById('winerteam').innerHTML = tossLoseTeam + ' is won the match';
  }
  document.getElementById('1st inning').innerHTML =
    `1st inning - ${tossWinTeam}` +
    `(${tossWinTeamPoint.teamWicket}-${tossWinTeamPoint.teamRun})  Points:(${tossWinTeamPoint.teamPoints})`;
  document.getElementById('2nd inning').innerHTML =
    `2nd inning - ${tossLoseTeam}` +
    `(${tossLoseTeamPoint.teamWicket}-${tossLoseTeamPoint.teamRun}) Points:(${tossLoseTeamPoint.teamPoints})`;

  creatTable(tossWinTeam11, 'team1batting', 'team1bowling');
  creatTable(tossLoseTeam11, 'team2batting', 'team2bowling');
}
function creatTable(teamArray, batDivID, bowlDivId) {
  for (let obj of teamArray) {
    document.getElementById(batDivID).innerHTML += `<tr><td>${obj.name}</td>
                                                            <td>${obj.isBat}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.run}</td>
                                                            <td>${obj.ballPlayed}</td>
                                                            <td>${obj.four}</td>
                                                            <td>${obj.six}</td></tr>`;
    if (obj.playingRole == 'Bowler') {
      document.getElementById(bowlDivId).innerHTML += `<tr><td>${obj.name}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.dotBall}</td>
                                                            <td>${obj.wicket}</td></tr>`;
    }
  }
}
function addObjProperty(array) {
  array.forEach((obj) => {
    obj.run = 0;
    obj.four = 0;
    obj.six = 0;
    obj.wicket = 0;
    obj.point = 0;
    obj.ballPlayed = 0;
    obj.isBat = 'Not-Out';
    obj.dotBall = 0;
    obj.isBall = false;
  });
}
function ResetPlayerRunsAndPoints() {
  document.getElementById('currentBatsmanRun').innerHTML = 0;
  document.getElementById('ball').innerHTML = 0;
  document.getElementById('fours').innerHTML = 0;
  document.getElementById('Six').innerHTML = 0;
  document.getElementById('playerPoints').innerHTML = 0;
}
function updateScoreboard(team1Obj, team2Obj) {
  team2Obj.teamOver = overCount;
  console.log(team2Obj, 'Tosslose');
  document.getElementById('battingTeamPoint').innerHTML = 'Points : ' + team1Obj.teamPoints;
  document.getElementById('teamRuns').innerHTML = 'Runs: ' + team1Obj.teamRun;
  document.getElementById('Wicket').innerHTML = 'Wicket : ' + team1Obj.teamWicket;
  document.getElementById('bowlingTeamPoint').innerHTML = 'Points : ' + team2Obj.teamPoints;
  document.getElementById('over').innerHTML = 'Overs :' + overCount;
  document.getElementById('information').innerHTML += 'Ball ' + ball + ' - ' + currentDate + ' - ' + shotType + br;
}
function updateInfo() {
  currentTeam = tossLoseTeam;
  overCount = 0;
  document.getElementById('battingTeamName').innerHTML = tossLoseTeam + '(BATTING)';
  document.getElementById('battingTeamPoint').innerHTML = 'Points :' + tossLoseTeamPoint.teamPoints;
  document.getElementById('teamRuns').innerHTML = 'Runs :' + tossLoseTeamPoint.teamRun;
  document.getElementById('Wicket').innerHTML = 'Wicket :' + tossLoseTeamPoint.teamWicket;
  document.getElementById('currentBatsman').innerHTML = tossLoseTeam11[0].name;
  document.getElementById('captain').innerHTML = 'Captain : ' + team2Cap;
  document.getElementById('vice-captain').innerHTML = 'Vice-Captian : ' + team2ViceCap;
  ResetPlayerRunsAndPoints();
  document.getElementById('bowlingTeamName').innerHTML = tossWinTeam + '(BOWLING)';
  document.getElementById('captain2').innerHTML = 'Captain : ' + team1Cap;
  document.getElementById('vice-captain2').innerHTML = 'Vice-Captian : ' + team1ViceCap;
  document.getElementById('over').innerHTML = 'Overs :' + tossWinTeamPoint.teamOver;
  document.getElementById('bowlingTeamPoint').innerHTML = 'Points :' + tossWinTeamPoint.teamPoints;
  document.getElementById('bowlerName').innerHTML = tossWinTeam11[5].name;
  document.getElementById('information').innerHTML = null;
  ball = 1;
}
function playMatch() {
  document.getElementById('battingTeamName').innerHTML = tossWinTeam + '(BATTING)';
  document.getElementById('captain').innerHTML = 'Captain : ' + team1Cap;
  document.getElementById('vice-captain').innerHTML = 'Vice-Captian : ' + team1ViceCap;
  document.getElementById('battingTeamPoint').innerHTML = 'Points :' + tossWinTeamPoint.teamPoints;
  document.getElementById('teamRuns').innerHTML = 'Runs :' + tossWinTeamPoint.teamRun;
  document.getElementById('Wicket').innerHTML = 'Wicket :' + tossWinTeamPoint.teamWicket;
  document.getElementById('currentBatsman').innerHTML = tossWinTeam11[0].name;
  document.getElementById('bowlingTeamName').innerHTML = tossLoseTeam + '(BOWLING)';
  document.getElementById('captain2').innerHTML = 'Captain : ' + team2Cap;
  document.getElementById('vice-captain2').innerHTML = 'Vice-Captian : ' + team2ViceCap;
  document.getElementById('over').innerHTML = 'Overs :' + tossLoseTeamPoint.teamOver;
  document.getElementById('bowlingTeamPoint').innerHTML = 'Points :' + tossLoseTeamPoint.teamPoints;
  document.getElementById('bowlerName').innerHTML = tossLoseTeam11[5].name;
  addObjProperty(tossWinTeam11);
  addObjProperty(tossLoseTeam11);
  ResetPlayerRunsAndPoints();
}
