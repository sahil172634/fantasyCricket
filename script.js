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
let firstTeam,secTeam,tossLoseTeam,tossWinTeam,currentTeam;

function tossWin(){
    firstTeam=document.getElementById("team1").value;
    secTeam=document.getElementById("team2").value;
    if(firstTeam.toUpperCase()==secTeam.toUpperCase()){
        alert("You have to Enter Different team name.")
    }else{
        if(tosswin==0){
            document.getElementById("winnerTeam").innerHTML=firstTeam+ " is won the Toss.....Create your team."
            currentTeam=firstTeam
            tossWinTeam = firstTeam;
            tossLoseTeam= secTeam
            console.log(currentTeam)
                              
        }else{
            document.getElementById("winnerTeam").innerHTML=secTeam+ " is won the Toss.....Create your team."    
            currentTeam=secTeam
            tossWinTeam = secTeam
            tossLoseTeam = firstTeam;
            console.log(currentTeam)
        }
        document.getElementById("selectTeam").style.display='block';
        document.getElementById("FantasyCricket").style.display='none';
        showBatsman();
    }
}

let batPlayer=[] 
let bowlPlayer=[]
let WicketKeeper=[]

batPlayer= player.filter(item=>item.playingRole==="Batsman")
bowlPlayer=player.filter(item=>item.playingRole=="Bowler")
WicketKeeper=player.filter(item=>item.playingRole=="Wicketkeeper")

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

function addplayers(teamArray){
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
            addplayers(teamArray)
        }else if(member.playingRole=='Bowler' && bowler.length < 5){
            addplayers(teamArray)
        }else if(member.playingRole=='Wicketkeeper'&& wks.length<1){
            addplayers(teamArray)
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
let team1Captain, team1ViceCaptain,team2Captain,team2ViceCaptain;    
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
            team1Captain= document.getElementById("selectCaptain").value;
            team1ViceCaptain=document.getElementById("selectVC").value
            let checkValidation=nextValidation(tossWinTeam11) 
            if(checkValidation){
                creditScore=0
                document.getElementById("winnerTeam").innerHTML="Now "+tossLoseTeam+ " Create your team." 
                document.getElementById("credit").innerHTML="Credit : "+creditScore
                currentTeam=tossLoseTeam 
                addObjProperty(tossWinTeam11)
                showBatsman()
            }
        }else{
            team2Captain= document.getElementById("selectCaptain").value;
            team2ViceCaptain=document.getElementById("selectVC").value
            if(nextValidation(tossLoseTeam11)){
                currentTeam=tossWinTeam
                document.getElementById("selectTeam").style.display='none';
                document.getElementById("startMatch").style.display='block';
                addObjProperty(tossLoseTeam11)  
                playMatch();  
            }
        }
        console.log(team1Captain)
        console.log(team1ViceCaptain)
        console.log(team2Captain)
        console.log(team2ViceCaptain)
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
        })
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
    function playMatch() {
        document.getElementById('battingTeamName').innerHTML=tossWinTeam +"(BATTING)"
        document.getElementById('captain').innerHTML="Captain : "+team1Captain 
        document.getElementById('vice-captain').innerHTML="Vice-Captian : "+team1ViceCaptain 
        document.getElementById('battingTeamPoint').innerHTML="Points :"+0
        document.getElementById('teamRuns').innerHTML="Runs :"+0
        document.getElementById('Wicket').innerHTML="Wicket :"+0
        document.getElementById('currentBatsman').innerHTML=tossWinTeam11[0].name
        document.getElementById('bowlingTeamName').innerHTML=tossLoseTeam+"(BOWLING)"
        document.getElementById('captain2').innerHTML="Captain : "+team2Captain 
        document.getElementById('vice-captain2').innerHTML="Vice-Captian : "+team2ViceCaptain 
        document.getElementById('over').innerHTML="Overs :"+0
        document.getElementById('bowlingTeamPoint').innerHTML="Points :"+0
        document.getElementById('bowlerName').innerHTML=tossLoseTeam11[5].name
        playerRun()
    }
    let shot=[1,2,3,4,6,'Dot','Wicket']
    let count=0.0;
    let ball=1
    let currentDate
    let currentBatsman
    let currentBowler
    let shotType
        
    function hitBall(){
        // document.getElementById("hitbtn").disabled=true;
        // document.getElementById("hitbtn").innerHTML="Wait  for second";

        // setTimeout(function(){
        //     document.getElementById("hitbtn").disabled=false;
        //     document.getElementById("hitbtn").innerHTML="HIT THE BALL";

        // },1000)
        currentDate = new Date().toLocaleString();
        currentBatsman=document.getElementById('currentBatsman').innerText;
        currentBowler=document.getElementById('bowlerName').innerText;
        shotType=shot[Math.floor(Math.random()*shot.length)] 
        
        count=count+0.1
        count=count.toFixed(1)
        count=parseFloat(count)
        if(count==0.6||count==1.6||count==2.6||count==3.6||count==4.6){
            count=count+0.4;
            count=count.toFixed(1)
            count=parseFloat(count)  
        } 
        
        if(count==1.1||count==2.1||count==3.1||count==4.1){
            document.getElementById("information").innerHTML=null
            ball=1 
        } 
        if(currentTeam==tossWinTeam){
            firstinnig()
        }
         else{
             secInnings()
         }  
        ball++
            //   console.log("Ball "+count+" - " +currentDate+" - "+shortType)
    }
    function firstinnig(){
        if(count<=5&&tossWinTeamPoint.teamWicket<10) { 
            if(typeof(shotType)=="number"){
                tossWinTeamPoint.teamRun=tossWinTeamPoint.teamRun+shotType
                        
                if(shotType==4){
                    currentBatsman===team1Captain ? tossWinTeamPoint.teamPoints+=10:
                    currentBatsman==team1ViceCaptain ? tossWinTeamPoint.teamPoints+=7.5: tossWinTeamPoint.teamPoints+=5;

                }else if(shotType==6){
                    currentBatsman==team1Captain? tossWinTeamPoint.teamPoints+=16:
                    currentBatsman==team1ViceCaptain? tossWinTeamPoint.teamPoints+=12: tossWinTeamPoint.teamPoints+=8;

                }else if(shotType==1||shotType==2||shotType==3){
                    currentBatsman==team1Captain? tossWinTeamPoint.teamPoints+=shotType*2:
                    currentBatsman==team1ViceCaptain? tossWinTeamPoint.teamPoints+=shotType*1.5: tossWinTeamPoint.teamPoints+=shotType;
                        
                }
                for(let obj of tossWinTeam11){
                    if(obj.name===currentBatsman){
                        obj.run+=shotType
                        obj.ballPlayed+=1
                        if(shotType==4){
                            currentBatsman==team1Captain?obj.point+=10:
                            currentBatsman==team1ViceCaptain? obj.point+=7.5:obj.point+=5
                            obj.four+=1
                        }else if(shotType==6){
                            currentBatsman==team1Captain?obj.point+=16:
                            currentBatsman==team1ViceCaptain? obj.point+=12:obj.point+=8
                            obj.six+=1
                        }else if(shotType==1||shotType==2||shotType==3){
                            currentBatsman==team1Captain?obj.point+=shotType*2:
                            currentBatsman==team1ViceCaptain? obj.point+=shotType*1.5:obj.point+=shotType  
                        }
                        document.getElementById('currentBatsmanRun').innerHTML=obj.run
                        document.getElementById("playerPoints").innerHTML=obj.point
                        document.getElementById('ball').innerHTML=obj.ballPlayed
                        document.getElementById('Six').innerHTML=obj.six
                        document.getElementById('fours').innerHTML=obj.four
                        break;
                    }
                }
                console.log(tossWinTeamPoint)
            }else{
                if(shotType=="Wicket"){
                    currentBowler==team2Captain?tossLoseTeamPoint.teamPoints+=20:
                    currentBowler==team2ViceCaptain?tossLoseTeamPoint.teamPoints+=15:tossLoseTeamPoint.teamPoints+=10

                    for(let obj of tossWinTeam11){
                        if(obj.name==currentBatsman){
                            obj.isBat="Out"
                            if(obj.run==0){
                                currentBatsman==team1Captain?tossWinTeamPoint.teamPoints -=4:
                                currentBatsman==team1ViceCaptain?tossWinTeamPoint.teamPoints-=3:
                                tossWinTeamPoint.teamPoints-=2

                                currentBatsman==team1Captain?obj.point -=4:currentBatsman==team1ViceCaptain?obj.point-=3:
                                obj.point-=2
                            }
                        }
                    }
                    for(let obj of tossLoseTeam11){
                        if(obj.name==currentBowler){
                            currentBowler==team2Captain?obj.point+=20:currentBowler==team2ViceCaptain?obj.point+=15:obj.point+=10
                            obj.wicket+=1
                            break
                        }
                    }
                    let index=tossWinTeam11.findIndex(item=>item.name===currentBatsman)+1
                    document.getElementById('currentBatsman').innerHTML=tossWinTeam11[index].name
                    tossWinTeamPoint.teamWicket=tossWinTeamPoint.teamWicket+1  
                    playerRun()   
                }else if(shotType=="Dot"){
                        currentBowler==team2Captain?tossLoseTeamPoint.teamPoints+=2:
                        currentBowler==team2ViceCaptain?tossLoseTeamPoint.teamPoints+=1.5:tossLoseTeamPoint.teamPoints+=1

                        for(let obj of tossLoseTeam11){
                        
                            if(obj.name==currentBowler){
                                currentBowler==team2Captain?obj.point+=2:currentBowler==team2ViceCaptain?obj.point+=1.5:obj.point+=1
                                obj.dotBall+=1
                                break
                            }
                        } 
                }
                        console.log(tossWinTeamPoint)
            }
            if(count==1||count==2||count==3||count==4){
                let index=tossLoseTeam11.findIndex(item=>item.name===currentBowler)+1
                document.getElementById('bowlerName').innerHTML=tossLoseTeam11[index].name
            }
            tossLoseTeamPoint.teamOver=count
            console.log(tossLoseTeamPoint,"Tosslose")
            document.getElementById("battingTeamPoint").innerHTML="Points : "+tossWinTeamPoint.teamPoints
            document.getElementById("teamRuns").innerHTML="Runs: "+tossWinTeamPoint.teamRun
            document.getElementById("Wicket").innerHTML="Wicket : "+tossWinTeamPoint.teamWicket

            document.getElementById("bowlingTeamPoint").innerHTML="Points : "+tossLoseTeamPoint.teamPoints
            document.getElementById('over').innerHTML="Overs :"+count
            document.getElementById("information").innerHTML+="Ball "+ball+" - " +currentDate+" - "+shotType+br


        }
        else{            
            currentTeam=tossLoseTeam;
            count=0
            document.getElementById('battingTeamName').innerHTML=tossLoseTeam +"(BATTING)"
            document.getElementById('battingTeamPoint').innerHTML="Points :"+tossLoseTeamPoint.teamPoints
            document.getElementById('teamRuns').innerHTML="Runs :"+tossLoseTeamPoint.teamRun
            document.getElementById('Wicket').innerHTML="Wicket :"+tossLoseTeamPoint.teamWicket
            document.getElementById('currentBatsman').innerHTML= tossLoseTeam11[0].name
            document.getElementById('captain').innerHTML="Captain : "+team2Captain 
            document.getElementById('vice-captain').innerHTML="Vice-Captian : "+team2ViceCaptain 
            playerRun()
            document.getElementById('bowlingTeamName').innerHTML=tossWinTeam+"(BOWLING)"
            document.getElementById('captain2').innerHTML="Captain : "+team1Captain 
            document.getElementById('vice-captain2').innerHTML="Vice-Captian : "+team1ViceCaptain 
            document.getElementById('over').innerHTML="Overs :"+tossWinTeamPoint.teamOver
            document.getElementById('bowlingTeamPoint').innerHTML="Points :"+tossWinTeamPoint.teamPoints
            document.getElementById('bowlerName').innerHTML=tossWinTeam11[5].name
            document.getElementById("information").innerHTML=null
            ball=0
            alert("First innings over")
        }
} 
function secInnings(){
    if(count<=5) {
            if(typeof(shotType)=="number"){
                tossLoseTeamPoint.teamRun=tossLoseTeamPoint.teamRun+shotType

                if(shotType==4){
                    currentBatsman===team2Captain ? tossLoseTeamPoint.teamPoints+=10:
                    currentBatsman==team2ViceCaptain ? tossLoseTeamPoint.teamPoints+=7.5: tossLoseTeamPoint.teamPoints+=5;
                    
                }else if(shotType==6){
                    currentBatsman==team2Captain? tossLoseTeamPoint.teamPoints+=16:
                    currentBatsman==team2ViceCaptain? tossLoseTeamPoint.teamPoints+=12: tossLoseTeamPoint.teamPoints+=8;
                    
                }else if(shotType==1||shotType==2||shotType==3){
                    currentBatsman==team2Captain? tossLoseTeamPoint.teamPoints+=shotType*2:
                    currentBatsman==team2ViceCaptain? tossLoseTeamPoint.teamPoints+=shotType*1.5: tossLoseTeamPoint.teamPoints+=shotType;
                    
                }
                for(let obj of tossLoseTeam11){
                    if(obj.name===currentBatsman){
                        obj.run+=shotType
                        obj.ballPlayed+=1
                        if(shotType==4){
                            currentBatsman==team2Captain?obj.point+=10:
                            currentBatsman==team2ViceCaptain? obj.point+=7.5:obj.point+=5
                            obj.four+=1
                            
                        }else if(shotType==6){
                            currentBatsman==team2Captain?obj.point+=16:
                            currentBatsman==team2ViceCaptain? obj.point+=12:obj.point+=8
                            obj.six+=1
                            
                        }else if(shotType==1||shotType==2||shotType==3){
                            currentBatsman==team2Captain?obj.point+=shotType*2:
                            currentBatsman==team2ViceCaptain? obj.point+=shotType*1.5:obj.point+=shotType  
                        }
                        document.getElementById('currentBatsmanRun').innerHTML=obj.run
                        document.getElementById("playerPoints").innerHTML=obj.point
                        document.getElementById('ball').innerHTML=obj.ballPlayed
                        document.getElementById('Six').innerHTML=obj.six
                        document.getElementById('fours').innerHTML=obj.four
                        break;
                    }
                }
                console.log(tossLoseTeamPoint)
            }else{
                if(shotType=="Wicket"){
                    currentBowler==team1Captain?tossWinTeamPoint.teamPoints+=20:
                    currentBowler==team1ViceCaptain?tossWinTeamPoint.teamPoints+=15:tossWinTeamPoint.teamPoints+=10  
                        
                    for(let obj of tossWinTeam11){
                        if(obj.name==currentBowler){
                            currentBowler==team1Captain?obj.point+=20:currentBowler==team1ViceCaptain?obj.point+=15:obj.point+=10
                            obj.wicket+=1
                            break
                        }
                    } 
                    for(let obj of tossLoseTeam11){
                        if(obj.name==currentBatsman){
                            obj.isBat="Out"
                            if(obj.run==0){
                                currentBatsman==team2Captain?tossLoseTeamPoint.teamPoints-=4:
                                currentBatsman==team1ViceCaptain?tossLoseTeamPoint.teamPoints-=3:
                                tossLoseTeamPoint.teamPoints-=2

                                currentBatsman==team2Captain?obj.point -=4:currentBatsman==team2ViceCaptain?obj.point-=3:
                                obj.point-=2
                            }
                        }
                    }     
                    let index=tossLoseTeam11.findIndex(item=>item.name===currentBatsman)+1
                    document.getElementById('currentBatsman').innerHTML=tossLoseTeam11[index].name 
                    playerRun()
                    tossLoseTeamPoint.teamWicket=tossLoseTeamPoint.teamWicket+1  
                             
                }else if(shotType=="Dot"){
                    currentBowler==team1Captain?tossWinTeamPoint.teamPoints+=2:
                    currentBowler==team1ViceCaptain?tossWinTeamPoint.teamPoints+=1.5:tossWinTeamPoint.teamPoints+=1
                    
                    for(let obj of tossWinTeam11){
                        
                        if(obj.name==currentBowler){
                            obj.dotBall+=1
                            currentBowler==team1Captain?obj.point+=2:currentBowler==team1ViceCaptain?obj.point+=1.5:obj.point+=1
                            break
                        }
                    } 
                }
                console.log(tossLoseTeamPoint)
            }
            if(count==1||count==2||count==3||count==4){
                let index=tossWinTeam11.findIndex(item=>item.name===currentBowler)+1
                document.getElementById('bowlerName').innerHTML=tossWinTeam11[index].name
            }
            document.getElementById("battingTeamPoint").innerHTML="Points : "+tossLoseTeamPoint.teamPoints
            document.getElementById("teamRuns").innerHTML="Runs: "+tossLoseTeamPoint.teamRun
            document.getElementById("Wicket").innerHTML="Wicket : "+tossLoseTeamPoint.teamWicket
            document.getElementById("bowlingTeamPoint").innerHTML="Points : "+tossWinTeamPoint.teamPoints
            document.getElementById('over').innerHTML="Overs :"+count
            document.getElementById("information").innerHTML+="Ball "+ball+" - " +currentDate+" - "+shotType+br
    } else{
        alert("Second Innings over")
        document.getElementById("startMatch").style.display='none';
        document.getElementById("scroebord").style.display='block';
        scorebord()
    }   
}
    function playerRun(){
        document.getElementById('currentBatsmanRun').innerHTML=0
        document.getElementById('ball').innerHTML=0
        document.getElementById('fours').innerHTML=0
        document.getElementById('Six').innerHTML=0
        document.getElementById("playerPoints").innerHTML=0
    }
    function scorebord(){
    if(tossWinTeamPoint.teamPoints>tossLoseTeamPoint.teamPoints){
        document.getElementById('winerteam').innerHTML=tossWinTeam+ " is won the match"
    }else{
        document.getElementById('winerteam').innerHTML=tossLoseTeam+ " is won the match"
    }
    document.getElementById("1st inning").innerHTML=`1st inning - ${tossWinTeam}` +  `(${tossWinTeamPoint.teamWicket}-${tossWinTeamPoint.teamRun})  Points:(${tossWinTeamPoint.teamPoints})`
    document.getElementById("2nd inning").innerHTML=`2nd inning - ${tossLoseTeam}`+  `(${tossLoseTeamPoint.teamWicket}-${tossLoseTeamPoint.teamRun}) Points:(${tossLoseTeamPoint.teamPoints})`

    for(let obj of tossWinTeam11){
    
        document.getElementById("team1batting").innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.isBat}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.run}</td>
                                                            <td>${obj.ballPlayed}</td>
                                                            <td>${obj.four}</td>
                                                            <td>${obj.six}</td></tr>`;
        
        if(obj.playingRole=="Bowler"){
            document.getElementById('team1bowling').innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.dotBall}</td>
                                                            <td>${obj.wicket}</td></tr>`;
        }
    }
    for(let obj of tossLoseTeam11){
        
            document.getElementById("team2batting").innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.isBat}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.run}</td>
                                                            <td>${obj.ballPlayed}</td>
                                                            <td>${obj.four}</td>
                                                            <td>${obj.six}</td></tr>`;
            
        if(obj.playingRole=="Bowler"){
            document.getElementById('team2bowling').innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.dotBall}</td>
                                                            <td>${obj.wicket}</td></tr>`;
        }
    }
}   