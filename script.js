let br= "<br>"
let sp="&nbsp"
let player=[
    {
        "name": "Virat Kohli",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Jasprit Bumrah",
        "playingRole": "Bowler",
        "credit": 12
    },
    {
        "name": "Rohit Sharma",
        "playingRole": "Batsman",
        "credit": 11
    },
    {
        "name": "Yuzvendra Chahal",
        "playingRole": "Bowler",
        "credit": 9
    },
    {
        "name": "Mohammed Shami",
        "playingRole": "Bowler",
        "credit": 8
    },
    {
        "name": "Suryakumar Yadav",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Prasidh Krishna",
        "playingRole": "Bowler",
        "credit": 7
    },
    {
        "name": "Hardik Pandya",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Shikhar Dhawan",
        "playingRole": "Batsman",
        "credit": 8
    },
    {
        "name": "Ravindra Jadeja",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Arshdeep Singh",
        "playingRole": "Bowler",
        "credit": 6
    },
    {
        "name": "Ravichandran Ashwin",
        "playingRole": "Bowler",
        "credit": 11
    },
    {
        "name": "Deepak Chahar",
        "playingRole": "Bowler",
        "credit": 9
    },
    {
        "name": "Ruturaj Gaikwad",
        "playingRole": "Batsman",
        "credit": 8
    },
    {
        "name": "Deepak Hooda",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Ishan Kishan",
        "playingRole": "Bowler",
        "credit": 10
    },
    {
        "name": "Shreyas Iyer",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Venkatesh Iyer",
        "playingRole": "Wicketkeeper",
        "credit": 9
    },
    {
        "name": "Dinesh Karthik",
        "playingRole": "Wicketkeeper",
        "credit": 11
    },
    {
        "name": "Kuldeep Yadav",
        "playingRole": "Bowler",
        "credit": 9
    },
    {
        "name": "Bhuvneshwar Kumar",
        "playingRole": "Bowler",
        "credit": 12
    },
    {
        "name": "Mohammed Siraj",
        "playingRole": "Bowler",
        "credit": 10
    },
    {
        "name": "Devdutt Padikkal",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Rishabh Pant",
        "playingRole": "Wicketkeeper",
        "credit": 10
    },
    {
        "name": "Moeen Ali",
        "playingRole": "Bowler",
        "credit": 9
    },
    {
        "name": "James Anderson",
        "playingRole": "Bowler",
        "credit": 12
    },
    {
        "name": "Jonny Bairstow",
        "playingRole": "Batsman",
        "credit": 11
    },
    {
        "name": "Sam Billings",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Stuart Broad",
        "playingRole": "Bowler",
        "credit": 9
    },
    {
        "name": "Rory Burns",
        "playingRole": "Bowler",
        "credit": 8
    },
    {
        "name": "Jos Buttler",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Zak Crawley",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Sam Curran",
        "playingRole": "Bowler",
        "credit": 8
    },
    {
        "name": "Tom Curran",
        "playingRole": "Bowler",
        "credit": 7
    },
    {
        "name": "Chris Jordan",
        "playingRole": "Bowler",
        "credit": 11
    },
    {
        "name": "Jack Leach",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Liam Livingstone",
        "playingRole": "Batsman",
        "credit": 12
    },
    {
        "name": "Reece Topley",
        "playingRole": "Bowler",
        "credit": 11
    },
    {
        "name": "David Willey",
        "playingRole": "Wicketkeeper",
        "credit": 9
    },
    {
        "name": "Joe Root",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Ben Stokes",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Pat Cummins",
        "playingRole": "Bowler",
        "credit": 11
    },
    {
        "name": "Aaron Finch",
        "playingRole": "Batsman",
        "credit": 10
    },
    {
        "name": "Cameron Green",
        "playingRole": "Batsman",
        "credit": 9
    },
    {
        "name": "Josh Hazlewood",
        "playingRole": "Bowler",
        "credit": 9
    },
    {
        "name": "Travis Head",
        "playingRole": "Wicketkeeper",
        "credit": 8
    },
    {
        "name": "Usman Khawaja",
        "playingRole": "Batsman",
        "credit": 11
    },
    {
        "name": "Marnus Labuschagne",
        "playingRole": "Bowler",
        "credit": 10
    },
    {
        "name": "Nathan Lyon",
        "playingRole": "Bowler",
        "credit": 9
    }
    ]
let tosswin=Math.floor(Math.random()*2)
let firstTeam, secTeam, tossLoseTeam, tossWinTeam, currentTeam;

function getTossteamName(toosWin,tossLose){
    document.getElementById("winnerTeam").innerHTML=toosWin+ " is won the Toss.....Create your team."
    currentTeam=toosWin
    tossWinTeam = toosWin;
    tossLoseTeam= tossLose
    console.log(currentTeam)
}
function tossWin(){
    firstTeam=document.getElementById("team1").value;
    secTeam=document.getElementById("team2").value;
    if(firstTeam.toUpperCase()==secTeam.toUpperCase()){
        alert("You have to Enter Different team name.")
    }else{
        if(tosswin==0){
            getTossteamName(firstTeam,secTeam)                   
        }else{
            getTossteamName(secTeam,firstTeam)
        }
        document.getElementById("selectTeam").style.display='block';
        document.getElementById("FantasyCricket").style.display='none';
        showBatsman();
    }
}
let batPlayer= player.filter(item=>item.playingRole==="Batsman")
let bowlPlayer=player.filter(item=>item.playingRole=="Bowler")
let WicketKeeper=player.filter(item=>item.playingRole=="Wicketkeeper")

function showPlayers(playerArray,mainArray){
    for(let temp of mainArray){
        let playerInclude = playerArray.some((member)=>member.name==temp.name)
        document.getElementById("showPlayer").innerHTML+=temp.name+br+temp.playingRole+br+temp.credit+sp+
        `<button id= "${temp.name}" onclick="addPlayerHandler('${temp.name}',${temp.credit})"${playerInclude ? " disabled":" "}>Add</button>`+sp+
        `<button id= "${temp.name}${temp.credit}"  onclick="removePlayerHandler('${temp.name}')" ${ playerInclude ? " ":" disabled"}>Remove</button>`+br;                    
    } 
}

function remove1stTeamPlayers(playerArray,mainArray){
  for(let selectedPlayer of playerArray){
    let findindex=  mainArray.findIndex(n=>n.name==selectedPlayer.name);
    console.log(findindex) 
    findindex>=0 && mainArray.splice(findindex,1)               
  }
}

function showBatsman(){
    document.getElementById("showPlayer").innerHTML=null
    if(currentTeam==tossWinTeam){
        showPlayers(tossWinTeam11,batPlayer)
    }else{    
        remove1stTeamPlayers(tossWinTeam11,batPlayer)
        showPlayers(tossLoseTeam11,batPlayer)
    }
} 

function showBowler(){
    document.getElementById("showPlayer").innerHTML=null
    if(currentTeam==tossWinTeam){
        showPlayers(tossWinTeam11,bowlPlayer)
    }else{     
        remove1stTeamPlayers(tossWinTeam11,bowlPlayer)
        showPlayers(tossLoseTeam11,bowlPlayer)
    }
        
}
function showWicketkeeper(){
    document.getElementById("showPlayer").innerHTML=null
    if(currentTeam==tossWinTeam){
        showPlayers(tossWinTeam11,WicketKeeper)
    }else{
      remove1stTeamPlayers(tossWinTeam11,WicketKeeper)
      showPlayers(tossLoseTeam11,WicketKeeper)
    }
}

function displaySummery(array){
    for(let temp of array){
        document.getElementById("showPlayer") .innerHTML+=temp.name+br+temp.playingRole+br+temp.credit+br
        let opt = temp.name;
        let el = document.createElement("option");
        let el2 = document.createElement("option");
        el.textContent = opt;
        el2.textContent=opt;
        document.getElementById("selectCaptain").appendChild(el);
        document.getElementById("selectVC").appendChild(el2);
    }
}
function displayTeamsummery(){
      document.getElementById("showPlayer").innerHTML=null; 
      document.getElementById("showPlayer") .innerHTML+=br+` <lable>Captain : </lable ><select id="selectCaptain"></select> &nbsp; 
      <lable>Vice-Captain : </lable> <select id="selectVC"></select>`+ sp+sp+`<button  id="nextbtn"  onclick="next()">NEXT</button>`+br+br
      if(currentTeam==tossWinTeam){
        displaySummery(tossWinTeam11)
      }else{
        displaySummery(tossLoseTeam11)
      }      
}

let creditScore=0
let tossWinTeam11=[]
let tossLoseTeam11=[] 
let member

function addPlayers(teamArray){
    document.getElementById(`${member.name}`).setAttribute("disabled", true)
    document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
    teamArray.push(member)
    creditScore+=member.credit;
    document.getElementById("credit").innerHTML="Credit : "+creditScore
}

function addValidation(teamArray,credit) { 
    let batsman= teamArray.filter(item=>item.playingRole==="Batsman")
    let bowler=teamArray.filter(item=>item.playingRole=="Bowler")
    let wks=teamArray.filter(item=>item.playingRole=="Wicketkeeper")
    if(credit+creditScore<=100){
        if(member.playingRole=="Batsman" && batsman.length < 5){
            addPlayers(teamArray)
        }else if(member.playingRole=='Bowler' && bowler.length < 5){
            addPlayers(teamArray)
        }else if(member.playingRole=='Wicketkeeper'&& wks.length<1){
            addPlayers(teamArray)
        }
        else{
            alert("Can not add more than 5 batsman,5 bowler and 1 Wicketkeeper")
        }
    }else{
        alert("credit should be less than or equal to 100")
    }
        
 }
function addPlayerHandler(name,credit) {
    member = player.find((play)=>play.name==name);
    if(currentTeam==tossWinTeam){
        addValidation(tossWinTeam11,credit)
        console.log(tossWinTeam11) 
    }else{  
        addValidation(tossLoseTeam11,credit)
        console.log(tossLoseTeam11) 
    }
} 
function removePlayer(array){
    for(let i=0 ; i<array.length ; i++){
        if (array[i].name == member.name){
            document.getElementById(`${member.name}`).removeAttribute("disabled")
            document.getElementById(`${member.name}${member.credit}`).setAttribute("disabled", true)
            array.splice(i, 1)
            creditScore-=member.credit;
            document.getElementById("credit").innerHTML="Credit : "+creditScore
        }                    
    }
}  
function removePlayerHandler(name){
    member = player.find((play) => play.name===name) ;  
    if(currentTeam==tossWinTeam){
        removePlayer(tossWinTeam11)
        console.log(tossWinTeam11) 
    }else{
        removePlayer(tossLoseTeam11)
        console.log(tossLoseTeam11) 
    }
}
let team1Cap, team1ViceCap,team2Cap,team2ViceCap;    
function nextValidation(teamArray){
    let captain= document.getElementById("selectCaptain").value;
    let viceCaptain =document.getElementById("selectVC").value
    if(teamArray.length!=11){
        alert("please select  11 player first for first team")
        return false
    }else if(captain==viceCaptain){
        alert("same player not should be a captain  and vice-captain both..")
        return false
    }else{
        return true
    }
} 
function next(){
        if(currentTeam==tossWinTeam) {
            team1Cap= document.getElementById("selectCaptain").value;
            team1ViceCap=document.getElementById("selectVC").value 
            if(nextValidation(tossWinTeam11)){
                creditScore=0
                document.getElementById("winnerTeam").innerHTML="Now "+tossLoseTeam+ " Create your team." 
                document.getElementById("credit").innerHTML="Credit : "+creditScore
                currentTeam=tossLoseTeam 
                showBatsman()
            }
        }else{
            team2Cap= document.getElementById("selectCaptain").value;
            team2ViceCap=document.getElementById("selectVC").value
            if(nextValidation(tossLoseTeam11)){
                currentTeam=tossWinTeam
                document.getElementById("selectTeam").style.display='none';
                document.getElementById("startMatch").style.display='block';
                playMatch();  
            }
        }
    }
    let tossWinTeamPoint={
        teamRun:0,
        teamPoints:0,
        teamWicket:0,
        teamOver:0
    }
    let tossLoseTeamPoint={
        teamRun:0,
        teamPoints:0,
        teamWicket:0,
        teamOver:0
    }
let shot=[1,2,3,4,6,'Dot','Wicket']
let point
let ballCount=0.0;
let ball=1
let currentDate
let currentBatsman
let currentBowler
let shotType

function hitBall(){
    getInformation()
    if(currentTeam==tossWinTeam){
        firstinnig()
    }
    else{
        secInnings()
    }  
    ball++
}
function getInformation(){
    currentDate = new Date().toLocaleString();
    currentBatsman=document.getElementById('currentBatsman').innerText;
    currentBowler=document.getElementById('bowlerName').innerText;
    shotType=shot[Math.floor(Math.random()*shot.length)] 
        
    ballCount=ballCount+0.1
    ballCount=ballCount.toFixed(1)
    ballCount=parseFloat(ballCount)
    if(ballCount==0.6||ballCount==1.6||ballCount==2.6||ballCount==3.6||ballCount==4.6){
        ballCount=Math.round(ballCount)  
    } 
    if(ball==7){
        document.getElementById("information").innerHTML=null
        ball=1
    } 
} 
let batMul, bowlMul;
function addPointToTeam(captain,viceCap,teamObj){
    typeof(shotType)=='number'? teamObj.teamRun=teamObj.teamRun+shotType:"" 
    currentBatsman == captain ? batMul=2 : currentBatsman==viceCap ? batMul=1.5 : batMul=1
    currentBowler == captain ? bowlMul=2 : currentBowler==viceCap ? bowlMul=1.5 : bowlMul=1

    if(shotType==4){
        teamObj.teamPoints+=batMul*5;
    }else if(shotType==6){
        teamObj.teamPoints+=batMul*8;
    }else if(shotType<= 3){
        teamObj.teamPoints+=batMul*shotType;    
    }else if(shotType=='Wicket'){
        teamObj.teamPoints+=bowlMul*10
    }else if(shotType=='Dot'){
        teamObj.teamPoints+=bowlMul*1
    }
}

function addPointToBatsman(teamArray){
    for(let obj of teamArray){
        if(obj.name===currentBatsman){
            obj.run+=shotType
            obj.ballPlayed+=1
            if(shotType==4){
                obj.point+=batMul*5
                obj.four+=1
            }else if(shotType==6){
                obj.point+=batMul*8
                obj.six+=1
            }else if(shotType==1||shotType==2||shotType==3){
                obj.point+=batMul*shotType  
            }
            document.getElementById('currentBatsmanRun').innerHTML=obj.run
            document.getElementById("playerPoints").innerHTML=obj.point
            document.getElementById('ball').innerHTML=obj.ballPlayed
            document.getElementById('Six').innerHTML=obj.six
            document.getElementById('fours').innerHTML=obj.four
            break;
        }
    }
}

function playerDismissalForDuck(teamArray,teamObj) {
    for(let obj of teamArray){
        if(obj.name==currentBatsman){
            obj.isBat="Out"
            if(obj.run==0){
                teamObj.teamPoints-=batMul*2
                obj.point-=batMul*2
            }
        }
    }
}

function changBowler(teamArray) {  
    if(ballCount==1||ballCount==2||ballCount==3||ballCount==4){
        let index=teamArray.findIndex(item=>item.name===currentBowler)+1
        document.getElementById('bowlerName').innerHTML=teamArray[index].name
    }
}

function changBatsman(teamArray) { 
    let index=teamArray.findIndex(item=>item.name===currentBatsman)+1
    document.getElementById('currentBatsman').innerHTML=teamArray[index].name
}

function addPointsToBowler(teamArray) { 
    for(let obj of teamArray){
        if(obj.name==currentBowler){
            if(shotType=='Wicket'){
                obj.point+=bowlMul*10;
                obj.wicket+=1
            }else if(shotType=='Dot'){
                obj.point+=bowlMul*1
                obj.dotBall+=1
            }
            
        }
    }
}
function firstinnig(){
    if(ballCount<=5&&tossWinTeamPoint.teamWicket<10) { 
        if(typeof(shotType)=="number"){
            addPointToTeam(team1Cap,team1ViceCap,tossWinTeamPoint)
            addPointToBatsman(tossWinTeam11)
        }else{
            if(shotType=="Wicket"){
                playerDismissalForDuck(tossWinTeam11,tossWinTeamPoint)
                changBatsman(tossWinTeam11)
                tossWinTeamPoint.teamWicket=tossWinTeamPoint.teamWicket+1  
                playerRun()   
            }
            addPointToTeam(team2Cap,team2ViceCap,tossLoseTeamPoint)
            addPointsToBowler(tossLoseTeam11)
            console.log(tossWinTeamPoint)
        }
        changBowler(tossLoseTeam11)
        updateScoreboard(tossWinTeamPoint,tossLoseTeamPoint)
    }
    else{            
        alert("First innings over")
        updateInfo()
    }
} 
function secInnings(){
    if(ballCount<=5&&tossWinTeamPoint.teamWicket<10) {
        if(typeof(shotType)=="number"){
            addPointToTeam(team2Cap,team2ViceCap,tossLoseTeamPoint)
            addPointToBatsman(tossLoseTeam11)
            console.log(tossLoseTeamPoint)
        }else{
            if(shotType=="Wicket"){
                playerDismissalForDuck(tossLoseTeam11,tossLoseTeamPoint)
                changBatsman(tossLoseTeam11)
                playerRun()
                tossLoseTeamPoint.teamWicket=tossLoseTeamPoint.teamWicket+1                   
            }
            addPointToTeam(team1Cap,team1ViceCap,tossWinTeamPoint)
            addPointsToBowler(tossWinTeam11)
            console.log(tossLoseTeamPoint)
        }
        changBowler(tossWinTeam11)
        updateScoreboard(tossLoseTeamPoint,tossWinTeamPoint)

    }else{
        alert("Second Innings over")
        document.getElementById("startMatch").style.display='none';
        document.getElementById("scroebord").style.display='block';
        scorebord()
    }   
}
    
function scorebord(){
    if(tossWinTeamPoint.teamPoints>tossLoseTeamPoint.teamPoints){
        document.getElementById('winerteam').innerHTML=tossWinTeam+ " is won the match"
    }else{
        document.getElementById('winerteam').innerHTML=tossLoseTeam+ " is won the match"
    }
    document.getElementById("1st inning").innerHTML=`1st inning - ${tossWinTeam}` +  `(${tossWinTeamPoint.teamWicket}-${tossWinTeamPoint.teamRun})  Points:(${tossWinTeamPoint.teamPoints})`
    document.getElementById("2nd inning").innerHTML=`2nd inning - ${tossLoseTeam}`+  `(${tossLoseTeamPoint.teamWicket}-${tossLoseTeamPoint.teamRun}) Points:(${tossLoseTeamPoint.teamPoints})`
    
    creatTable(tossWinTeam11,'team1batting','team1bowling')
    creatTable(tossLoseTeam11,'team2batting','team2bowling')  
   
}   

function creatTable(teamArray,batDivID,bowlDivId) { 
    for(let obj of teamArray){
        document.getElementById(batDivID).innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.isBat}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.run}</td>
                                                            <td>${obj.ballPlayed}</td>
                                                            <td>${obj.four}</td>
                                                            <td>${obj.six}</td></tr>`;
        
        if(obj.playingRole=="Bowler"){
            document.getElementById(bowlDivId).innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.dotBall}</td>
                                                            <td>${obj.wicket}</td></tr>`;
        }
    }
 }
 function addObjProperty(array){
    array.forEach((obj)=>{
        obj.run=0
        obj.four=0
        obj.six=0
        obj.wicket=0
        obj.point=0
        obj.ballPlayed=0
        obj.isBat="Not-Out"
        obj.dotBall=0
        obj.isBall=false
    })
}
 function playerRun(){
    document.getElementById('currentBatsmanRun').innerHTML=0
    document.getElementById('ball').innerHTML=0
    document.getElementById('fours').innerHTML=0
    document.getElementById('Six').innerHTML=0
    document.getElementById("playerPoints").innerHTML=0
}
function playMatch() {
    document.getElementById('battingTeamName').innerHTML=tossWinTeam +"(BATTING)"
    document.getElementById('captain').innerHTML="Captain : "+team1Cap 
    document.getElementById('vice-captain').innerHTML="Vice-Captian : "+team1ViceCap 
    document.getElementById('battingTeamPoint').innerHTML="Points :"+0
    document.getElementById('teamRuns').innerHTML="Runs :"+0
    document.getElementById('Wicket').innerHTML="Wicket :"+0
    document.getElementById('currentBatsman').innerHTML=tossWinTeam11[0].name
    document.getElementById('bowlingTeamName').innerHTML=tossLoseTeam+"(BOWLING)"
    document.getElementById('captain2').innerHTML="Captain : "+team2Cap 
    document.getElementById('vice-captain2').innerHTML="Vice-Captian : "+team2ViceCap 
    document.getElementById('over').innerHTML="Overs :"+0
    document.getElementById('bowlingTeamPoint').innerHTML="Points :"+0
    document.getElementById('bowlerName').innerHTML=tossLoseTeam11[5].name
    addObjProperty(tossWinTeam11)
    addObjProperty(tossLoseTeam11)  
    playerRun()
}
 function updateScoreboard(team1Obj,team2Obj) { 
    team2Obj.teamOver=ballCount
    console.log(team2Obj,"Tosslose")
    document.getElementById("battingTeamPoint").innerHTML="Points : "+team1Obj.teamPoints
    document.getElementById("teamRuns").innerHTML="Runs: "+team1Obj.teamRun
    document.getElementById("Wicket").innerHTML="Wicket : "+team1Obj.teamWicket
    document.getElementById("bowlingTeamPoint").innerHTML="Points : "+team2Obj.teamPoints
    document.getElementById('over').innerHTML="Overs :"+ballCount
    document.getElementById("information").innerHTML+="Ball "+ball+" - " +currentDate+" - "+shotType+br
 }
function updateInfo(){
    currentTeam=tossLoseTeam;
    ballCount=0
    document.getElementById('battingTeamName').innerHTML=tossLoseTeam +"(BATTING)"
    document.getElementById('battingTeamPoint').innerHTML="Points :"+tossLoseTeamPoint.teamPoints
    document.getElementById('teamRuns').innerHTML="Runs :"+tossLoseTeamPoint.teamRun
    document.getElementById('Wicket').innerHTML="Wicket :"+tossLoseTeamPoint.teamWicket
    document.getElementById('currentBatsman').innerHTML= tossLoseTeam11[0].name
    document.getElementById('captain').innerHTML="Captain : "+team2Cap 
    document.getElementById('vice-captain').innerHTML="Vice-Captian : "+team2ViceCap 
    playerRun()
    document.getElementById('bowlingTeamName').innerHTML=tossWinTeam+"(BOWLING)"
    document.getElementById('captain2').innerHTML="Captain : "+team1Cap 
    document.getElementById('vice-captain2').innerHTML="Vice-Captian : "+team1ViceCap 
    document.getElementById('over').innerHTML="Overs :"+tossWinTeamPoint.teamOver
    document.getElementById('bowlingTeamPoint').innerHTML="Points :"+tossWinTeamPoint.teamPoints
    document.getElementById('bowlerName').innerHTML=tossWinTeam11[5].name
    document.getElementById("information").innerHTML=null
    ball=1
}