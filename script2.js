let br= "<br>"
let sp="&nbsp"

let tosswin=Math.floor(Math.random()*2)
let firstteam,secTeam,tossloseteam,tosswinteam,currentteam;

function Tosswin(){
    firstteam=document.getElementById("team1").value;
    secTeam=document.getElementById("team2").value;
    
    if(firstteam.toUpperCase()==secTeam.toUpperCase()){
        alert("You have to Enter Different team name.")
    }else{
        if(tosswin==0){
            document.getElementById("winnerteam").innerHTML=firstteam+ " is won the Toss.....Create your team."
            currentteam=firstteam
            tosswinteam = firstteam;
            tossloseteam= secTeam
            console.log(currentteam)
                              
        }else{
            document.getElementById("winnerteam").innerHTML=secTeam+ " is won the Toss.....Create your team."    
            currentteam=secTeam
            tosswinteam = secTeam
            tossloseteam = firstteam;
            console.log(currentteam)
        }
        document.getElementById("selcetteam").style.display='block';
        document.getElementById("FantasyCricket").style.display='none';
        showbatsman();
    }
}
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
let batplayer=[] 
let bowlplayer=[]
let WicketKeeper=[]

batplayer= player.filter(item=>item.playingRole==="Batsman")
bowlplayer=player.filter(item=>item.playingRole=="Bowler")
WicketKeeper=player.filter(item=>item.playingRole=="Wicketkeeper")
function show(playerArray,mainArray){
    for(let temp of mainArray){
        let playerinclude = playerArray.some((member)=>member.name==temp.name)
        document.getElementById("showbatsmann").innerHTML+=temp.name+br+temp.playingRole+br+temp.credit+sp+
        `<button id= "${temp.name}" onclick="addplayer('${temp.name}',${temp.credit})"${playerinclude ? " disabled":" "}>Add</button>`+sp+
        `<button id= "${temp.name}${temp.credit}"  onclick="Removeplayer('${temp.name}')" ${ playerinclude ? " ":" disabled"}>Remove</button>`+br;                    
    } 
}

function remove1stTeamPlayers(playerArray,mainArray){
  for(let selectedPlayer of playerArray){
    let findindex=  mainArray.findIndex(n=>n.name==selectedPlayer.name);
    console.log(findindex) 
    findindex>=0 && mainArray.splice(findindex,1)               
  }
}

function showbatsman(){
    document.getElementById("showbatsmann").innerHTML=null
    if(currentteam==tosswinteam){
        show(TossWinteam11,batplayer)
    }else{    
        remove1stTeamPlayers(TossWinteam11,batplayer)
        show(TossLoseteam11,batplayer)
    }
} 

function showbowler(){
    document.getElementById("showbatsmann").innerHTML=null
    if(currentteam==tosswinteam){
      show(TossWinteam11,bowlplayer)
    }else{     
        remove1stTeamPlayers(TossWinteam11,bowlplayer)
        show(TossLoseteam11,bowlplayer)
    }
        
}
function showwecketkeeper(){
    document.getElementById("showbatsmann").innerHTML=null
    if(currentteam==tosswinteam){
      show(TossWinteam11,WicketKeeper)
    }else{
      remove1stTeamPlayers(TossWinteam11,WicketKeeper)
        show(TossLoseteam11,WicketKeeper)
    }
}

function displaySummery(array){
    for(let temp of array){
        document.getElementById("showsummrry") .innerHTML+=temp.name+br+temp.playingRole+br+temp.credit+br
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
    document.getElementById("showsummrry").innerHTML=null; 
    document.getElementById("showsummrry") .innerHTML+=br+` <lable>Captain : </lable ><select id="selectCaptain"></select> &nbsp; 
    <lable>Vice-Captain : </lable> <select id="selectVC"></select>`+ sp+sp+`<button  id="nextbtn"  onclick="next()">NEXT</button>`+br+br
    if(currentteam==tosswinteam){
      displaySummery(TossWinteam11)
    }else{
      displaySummery(TossLoseteam11)
      
    }
    document.getElementById("showwicketkeeper").style.display='none';
    document.getElementById("showbatsmann").style.display='none';
    document.getElementById("showbowler").style.display='none';
    document.getElementById("showsummrry").style.display='block';   
}
let creditscore=0
let seccreditscore=0
let TossWinteam11=[], team1Batsman=[] , team1Bowler=[], team1Wk=[]
let TossLoseteam11=[] , team2Batsman=[] , team2Bowler=[], team2Wk=[]
function addplayer(name,credit) {
    let member = player.find((play)=>play.name==name);
    if(currentteam==tosswinteam)
        if(credit+creditscore<=100){
            if(member.playingRole=="Batsman"){
                if(team1Batsman.length<5){
                        document.getElementById(`${member.name}`).setAttribute("disabled", true)
                        document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
                        team1Batsman.push(member)
                        creditscore+=member.credit;
                        document.getElementById("batsmanbtn").value = "Batsman : "+team1Batsman.length;
                        document.getElementById("credit").innerHTML="Credit : "+creditscore
                        // console.log(team1Batsman)
                }else{
                    alert("Can not add more than 5 Batsman")
                }
            }else if(member.playingRole=="Bowler"){
                if(team1Bowler.length<5){
                        document.getElementById(`${member.name}`).setAttribute("disabled", true)
                        document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
                        team1Bowler.push(member)
                        creditscore+=member.credit;
                        document.getElementById("credit").innerHTML="Credit : "+creditscore
                        document.getElementById("bowlerbtn").value = "Bowler : "+team1Bowler.length;                            
                        // console.log(team1Bowler)
                }else{
                    alert("Can not add more than 5 Bowler")
                }   
            }else if(member.playingRole=="Wicketkeeper"){
                if(team1Wk.length<1){
                    document.getElementById(`${member.name}`).setAttribute("disabled", true)
                    document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
                    team1Wk.push(member)
                    creditscore+=member.credit;
                    document.getElementById("credit").innerHTML="Credit : "+creditscore
                    // console.log(team1Wk)
                    document.getElementById("wKbtn").value = "Wicketkeeper : "+team1Wk.length;

                }else{
                    alert("you can add only 1 Wicketkeeper")
                }   
            } 
        TossWinteam11=[...team1Batsman,...team1Bowler,...team1Wk]
        console.log(TossWinteam11) 
        }else{
            alert("credit should be less than or equal to 100")
        }
    else{
        
        if(credit+seccreditscore<=100){
            if(member.playingRole=="Batsman"){
                if(team2Batsman.length<5){
                        document.getElementById(`${member.name}`).setAttribute("disabled", true)
                        document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
                        team2Batsman.push(member)
                        seccreditscore+=member.credit;
                        document.getElementById("batsmanbtn").value = "Batsman : "+team2Batsman.length;
                        document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                        // console.log(team2Batsman)
                }else{
                    alert("Can not add more than 5 Batsman")
                }
            }else if(member.playingRole=="Bowler"){
                if(team2Bowler.length<5){
                        document.getElementById(`${member.name}`).setAttribute("disabled", true)
                        document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
                        team2Bowler.push(member)
                        seccreditscore+=member.credit;
                        document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                        document.getElementById("bowlerbtn").value = "Bowler : "+team2Bowler.length;                            
                        // console.log(team2Bowler)
                }else{
                    alert("Can not add more than 5 Bowler")
                }   
            }else if(member.playingRole=="Wicketkeeper"){
                if(team2Wk.length<1){
                    document.getElementById(`${member.name}`).setAttribute("disabled", true)
                    document.getElementById(`${member.name}${member.credit}`).removeAttribute("disabled")
                    team2Wk.push(member)
                    seccreditscore+=member.credit;
                    document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                    // console.log(team2Wk)
                    document.getElementById("wKbtn").value = "Wicketkeeper : "+team2Wk.length;

                }else{
                    alert("you can add only 1 Wicketkeeper")
                }   
            } 
        TossLoseteam11=[...team2Batsman,...team2Bowler,...team2Wk]
        console.log(TossLoseteam11) 
        }else{
            alert("credit should be less than or equal to 100")
        }
    }
}   
function Removeplayer(name){
    let players = player.find((play) => play.name===name) ;  
    if(currentteam==tosswinteam){
        if(players.playingRole=="Batsman"){
            for(let i=0 ; i<team1Batsman.length ; i++){
                if (team1Batsman[i].name == players.name){
                    document.getElementById(`${players.name}`).removeAttribute("disabled")
                    document.getElementById(`${players.name}${players.credit}`).setAttribute("disabled", true)
                    team1Batsman.splice(i, 1)
                    creditscore-=players.credit;
                    document.getElementById("credit").innerHTML="Credit : "+creditscore
                }                    
            }
            document.getElementById("batsmanbtn").value = "Batsman : "+team1Batsman.length;
            console.log(team1Batsman)
        }else if(players.playingRole=="Bowler"){
            for(let i=0 ; i<team1Bowler.length ; i++){
                if (team1Bowler[i].name == players.name){
                    document.getElementById(`${players.name}`).removeAttribute("disabled")
                    document.getElementById(`${players.name}${players.credit}`).setAttribute("disabled", true)
                    team1Bowler.splice(i, 1)
                    creditscore-=players.credit;
                    document.getElementById("credit").innerHTML="Credit : "+creditscore
                }                     
            }
            document.getElementById("bowlerbtn").value = "Bowler : "+team1Bowler.length;
            console.log(team1Bowler)
        }else if(players.playingRole=="Wicketkeeper"){
            for(let i=0 ; i<team1Wk.length ; i++){
                if (team1Wk[i].name == players.name){
                    document.getElementById(`${players.name}`).removeAttribute("disabled")
                    document.getElementById(`${players.name}${players.credit}`).setAttribute("disabled", true)
                    team1Wk.splice(i, 1)
                    creditscore-=players.credit;
                    document.getElementById("credit").innerHTML="Credit : "+creditscore
                }                    
            }
            document.getElementById("wKbtn").value = "Wicketkeeper : "+team1Wk.length;
            console.log(team1Wk)
        }
        TossWinteam11=[...team1Batsman,...team1Bowler,...team1Wk]
        console.log(TossWinteam11) 
    }else{
        if(players.playingRole=="Batsman"){
            for(let i=0 ; i<team2Batsman.length ; i++){
                if (team2Batsman[i].name == players.name){
                    document.getElementById(`${players.name}`).removeAttribute("disabled")
                    document.getElementById(`${players.name}${players.credit}`).setAttribute("disabled", true)
                    team2Batsman.splice(i, 1)
                    seccreditscore-=players.credit;
                    document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                }                    
            }
            document.getElementById("batsmanbtn").value = "Batsman : "+team2Batsman.length;
            console.log(team2Batsman)
        }else if(players.playingRole=="Bowler"){
            for(let i=0 ; i<team2Bowler.length ; i++){
                if (team2Bowler[i].name == players.name){
                    document.getElementById(`${players.name}`).removeAttribute("disabled")
                    document.getElementById(`${players.name}${players.credit}`).setAttribute("disabled", true)
                    team2Bowler.splice(i, 1)
                    seccreditscore-=players.credit;
                    document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                }                     
            }
            document.getElementById("bowlerbtn").value = "Bowler : "+team2Bowler.length;
            console.log(team2Bowler)
        }else if(players.playingRole=="Wicketkeeper"){
            for(let i=0 ; i<team2Wk.length ; i++){
                if (team2Wk[i].name == players.name){
                    document.getElementById(`${players.name}`).removeAttribute("disabled")
                    document.getElementById(`${players.name}${players.credit}`).setAttribute("disabled", true)
                    team2Wk.splice(i, 1)
                    seccreditscore-=players.credit;
                    document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                }                    
            }
            document.getElementById("wKbtn").value = "Wicketkeeper : "+team2Wk.length;
            console.log(team1Wk)
        }
        TossLoseteam11=[...team2Batsman,...team2Bowler,...team2Wk]
        console.log(TossLoseteam11) 
    }
}
let team1Captain, team1ViceCaptain,team2Captain,team2ViceCaptain;     
function next(){
        if(currentteam==tosswinteam) {
            team1Captain= document.getElementById("selectCaptain").value;
            team1ViceCaptain=document.getElementById("selectVC").value 
            if(TossWinteam11.length!=11){
                alert("please select  11 player first for first team")
                return;
            }else if(team1Captain==team1ViceCaptain){
                alert("same player not should be a captain  and vice-captain both for first team")
                return;
            }else{
                
                document.getElementById("winnerteam").innerHTML="Now "+tossloseteam+ " Create your team." 
                document.getElementById("batsmanbtn").value = "Batsman : "+team2Batsman.length;
                document.getElementById("bowlerbtn").value = "Bowler : "+team2Bowler.length;
                document.getElementById("wKbtn").value = "Wicketkeeper : "+team2Wk.length;
                document.getElementById("credit").innerHTML="Credit : "+seccreditscore
                currentteam=tossloseteam 
                console.log(currentteam)
                showbatsman()
            }
        }else{
            team2Captain= document.getElementById("selectCaptain").value;
            team2ViceCaptain=document.getElementById("selectVC").value
            if(TossLoseteam11.length!=11){
                alert("please select  11 player first for sec team")
                return;
            }else if(team2Captain==team2ViceCaptain){
                alert("same player not should be a captain  and vice-captain both for sec team")
                return;
            }else{
                currentteam=tosswinteam
                document.getElementById("selcetteam").style.display='none';
                document.getElementById("startMatch").style.display='block';  
                TossWinteam11.forEach((obj)=>{
                    obj.run=0
                    obj.four=0
                    obj.six=0
                    obj.wicket=0
                    obj.point=0
                    obj.ballplayed=0
                    obj.isbat="Not-Out"
                    obj.dotbal=0
                })
                TossLoseteam11.forEach((obj)=>{
                    obj.run=0
                    obj.four=0
                    obj.six=0
                    obj.wicket=0
                    obj.point=0
                    obj.ballplayed=0
                    obj.isbat="Not-Out"
                    obj.dotbal=0
                })
                playmatch();  
            }
        }
        console.log(team1Captain)
        console.log(team1ViceCaptain)
        console.log(team2Captain)
        console.log(team2ViceCaptain)
    }
    
    let tosswinTeamPoint={
        teamrun:0,
        teampoints:0,
        teamWicket:0,
        teamOver:0
    }
    let tossLoseTeamPoint={
        teamrun:0,
        teampoints:0,
        teamWicket:0,
        teamOver:0
    }
    function playmatch() {
        document.getElementById('batTeamName').innerHTML=tosswinteam +"(BATTING)"
        document.getElementById('captain').innerHTML="Captain : "+team1Captain 
        document.getElementById('vice-captain').innerHTML="Vice-Captian : "+team1ViceCaptain 
        document.getElementById('batteamPoint').innerHTML="Points :"+0
        document.getElementById('teamRuns').innerHTML="Runs :"+0
        document.getElementById('Wicket').innerHTML="Wicket :"+0
        document.getElementById('currentbatsman').innerHTML=TossWinteam11[0].name
        playerrun()
        document.getElementById('BowlTeamName').innerHTML=tossloseteam+"(BOWLING)"
        document.getElementById('captain2').innerHTML="Captain : "+team2Captain 
        document.getElementById('vice-captain2').innerHTML="Vice-Captian : "+team2ViceCaptain 
        document.getElementById('over').innerHTML="Overs :"+0
        document.getElementById('BowlteamPoint').innerHTML="Points :"+0
        document.getElementById('bowlerName').innerHTML=TossLoseteam11[5].name
    }
    let shot=[1,2,3,4,6,'Dot','Wicket']
    let count=0.0;
    let ball=1
    let currentDate
    let currentbatsman
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
        currentbatsman=document.getElementById('currentbatsman').innerText;
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
        if(currentteam==tosswinteam){
            firstinnig()
        }
         else{
             secInnings()
         }  
        ball++
            //   console.log("Ball "+count+" - " +currentDate+" - "+shortType)
    }
    function firstinnig(){
        if(count<=5&&tosswinTeamPoint.teamWicket<10) { 
            if(typeof(shotType)=="number"){
                tosswinTeamPoint.teamrun=tosswinTeamPoint.teamrun+shotType
                        
                if(shotType==4){
                    currentbatsman===team1Captain ? tosswinTeamPoint.teampoints+=10:
                    currentbatsman==team1ViceCaptain ? tosswinTeamPoint.teampoints+=7.5: tosswinTeamPoint.teampoints+=5;

                }else if(shotType==6){
                    currentbatsman==team1Captain? tosswinTeamPoint.teampoints+=16:
                    currentbatsman==team1ViceCaptain? tosswinTeamPoint.teampoints+=12: tosswinTeamPoint.teampoints+=8;

                }else if(shotType==1||shotType==2||shotType==3){
                    currentbatsman==team1Captain? tosswinTeamPoint.teampoints+=shotType*2:
                    currentbatsman==team1ViceCaptain? tosswinTeamPoint.teampoints+=shotType*1.5: tosswinTeamPoint.teampoints+=shotType;
                        
                }
                for(let obj of TossWinteam11){
                    if(obj.name===currentbatsman){
                        obj.run+=shotType
                        obj.ballplayed+=1
                        if(shotType==4){
                            currentbatsman==team1Captain?obj.point+=10:
                            currentbatsman==team1ViceCaptain? obj.point+=7.5:obj.point+=5
                            obj.four+=1
                        }else if(shotType==6){
                            currentbatsman==team1Captain?obj.point+=16:
                            currentbatsman==team1ViceCaptain? obj.point+=12:obj.point+=8
                            obj.six+=1
                        }else if(shotType==1||shotType==2||shotType==3){
                            currentbatsman==team1Captain?obj.point+=shotType*2:
                            currentbatsman==team1ViceCaptain? obj.point+=shotType*1.5:obj.point+=shotType  
                        }
                        document.getElementById('currentbatsmanRun').innerHTML=obj.run
                        document.getElementById("playerPoints").innerHTML=obj.point
                        document.getElementById('ball').innerHTML=obj.ballplayed
                        document.getElementById('Six').innerHTML=obj.six
                        document.getElementById('fours').innerHTML=obj.four
                        break;
                    }
                }
                console.log(tosswinTeamPoint)
            }else{
                if(shotType=="Wicket"){
                    currentBowler==team2Captain?tossLoseTeamPoint.teampoints+=20:
                    currentBowler==team2ViceCaptain?tossLoseTeamPoint.teampoints+=15:tossLoseTeamPoint.teampoints+=10

                    for(let obj of TossWinteam11){
                        if(obj.name==currentbatsman){
                            obj.isbat="Out"
                            if(obj.run==0){
                                currentbatsman==team1Captain?tosswinTeamPoint.teampoints -=4:
                                currentbatsman==team1ViceCaptain?tosswinTeamPoint.teampoints-=3:
                                tosswinTeamPoint.teampoints-=2

                                currentbatsman==team1Captain?obj.point -=4:currentbatsman==team1ViceCaptain?obj.point-=3:
                                obj.point-=2
                            }
                        }
                    }
                    for(let obj of TossLoseteam11){
                        if(obj.name==currentBowler){
                            currentBowler==team2Captain?obj.point+=20:currentBowler==team2ViceCaptain?obj.point+=15:obj.point+=10
                            obj.wicket+=1
                            break
                        }
                    }
                    let index=TossWinteam11.findIndex(item=>item.name===currentbatsman)+1
                    document.getElementById('currentbatsman').innerHTML=TossWinteam11[index].name
                    tosswinTeamPoint.teamWicket=tosswinTeamPoint.teamWicket+1  
                    playerrun()   
                }else if(shotType=="Dot"){
                        currentBowler==team2Captain?tossLoseTeamPoint.teampoints+=2:
                        currentBowler==team2ViceCaptain?tossLoseTeamPoint.teampoints+=1.5:tossLoseTeamPoint.teampoints+=1

                        for(let obj of TossLoseteam11){
                        
                            if(obj.name==currentBowler){
                                currentBowler==team2Captain?obj.point+=2:currentBowler==team2ViceCaptain?obj.point+=1.5:obj.point+=1
                                obj.dotbal+=1
                                break
                            }
                        } 
                }
                        console.log(tosswinTeamPoint)
            }
            if(count==1||count==2||count==3||count==4){
                let index=TossLoseteam11.findIndex(item=>item.name===currentBowler)+1
                document.getElementById('bowlerName').innerHTML=TossLoseteam11[index].name
            }
            tossLoseTeamPoint.teamOver=count
            console.log(tossLoseTeamPoint,"Tosslose")
            document.getElementById("batteamPoint").innerHTML="Points : "+tosswinTeamPoint.teampoints
            document.getElementById("teamRuns").innerHTML="Runs: "+tosswinTeamPoint.teamrun
            document.getElementById("Wicket").innerHTML="Wicket : "+tosswinTeamPoint.teamWicket

            document.getElementById("BowlteamPoint").innerHTML="Points : "+tossLoseTeamPoint.teampoints
            document.getElementById('over').innerHTML="Overs :"+count
            document.getElementById("information").innerHTML+="Ball "+ball+" - " +currentDate+" - "+shotType+br


        }
        else{            
            currentteam=tossloseteam;
            count=0
            document.getElementById('batTeamName').innerHTML=tossloseteam +"(BATTING)"
            document.getElementById('batteamPoint').innerHTML="Points :"+tossLoseTeamPoint.teampoints
            document.getElementById('teamRuns').innerHTML="Runs :"+tossLoseTeamPoint.teamrun
            document.getElementById('Wicket').innerHTML="Wicket :"+tossLoseTeamPoint.teamWicket
            document.getElementById('currentbatsman').innerHTML= TossLoseteam11[0].name
            document.getElementById('captain').innerHTML="Captain : "+team2Captain 
            document.getElementById('vice-captain').innerHTML="Vice-Captian : "+team2ViceCaptain 
            playerrun()
            document.getElementById('BowlTeamName').innerHTML=tosswinteam+"(BOWLING)"
            document.getElementById('captain2').innerHTML="Captain : "+team1Captain 
            document.getElementById('vice-captain2').innerHTML="Vice-Captian : "+team1ViceCaptain 
            document.getElementById('over').innerHTML="Overs :"+tosswinTeamPoint.teamOver
            document.getElementById('BowlteamPoint').innerHTML="Points :"+tosswinTeamPoint.teampoints
            document.getElementById('bowlerName').innerHTML=TossWinteam11[5].name
            document.getElementById("information").innerHTML=null
            ball=0
            alert("First innings over")
        }
} 
function secInnings(){
    if(count<=5) {
            if(typeof(shotType)=="number"){
                tossLoseTeamPoint.teamrun=tossLoseTeamPoint.teamrun+shotType

                if(shotType==4){
                    currentbatsman===team2Captain ? tossLoseTeamPoint.teampoints+=10:
                    currentbatsman==team2ViceCaptain ? tossLoseTeamPoint.teampoints+=7.5: tossLoseTeamPoint.teampoints+=5;
                    
                }else if(shotType==6){
                    currentbatsman==team2Captain? tossLoseTeamPoint.teampoints+=16:
                    currentbatsman==team2ViceCaptain? tossLoseTeamPoint.teampoints+=12: tossLoseTeamPoint.teampoints+=8;
                    
                }else if(shotType==1||shotType==2||shotType==3){
                    currentbatsman==team2Captain? tossLoseTeamPoint.teampoints+=shotType*2:
                    currentbatsman==team2ViceCaptain? tossLoseTeamPoint.teampoints+=shotType*1.5: tossLoseTeamPoint.teampoints+=shotType;
                    
                }
                for(let obj of TossLoseteam11){
                    if(obj.name===currentbatsman){
                        obj.run+=shotType
                        obj.ballplayed+=1
                        if(shotType==4){
                            currentbatsman==team2Captain?obj.point+=10:
                            currentbatsman==team2ViceCaptain? obj.point+=7.5:obj.point+=5
                            obj.four+=1
                            
                        }else if(shotType==6){
                            currentbatsman==team2Captain?obj.point+=16:
                            currentbatsman==team2ViceCaptain? obj.point+=12:obj.point+=8
                            obj.six+=1
                            
                        }else if(shotType==1||shotType==2||shotType==3){
                            currentbatsman==team2Captain?obj.point+=shotType*2:
                            currentbatsman==team2ViceCaptain? obj.point+=shotType*1.5:obj.point+=shotType  
                        }
                        document.getElementById('currentbatsmanRun').innerHTML=obj.run
                        document.getElementById("playerPoints").innerHTML=obj.point
                        document.getElementById('ball').innerHTML=obj.ballplayed
                        document.getElementById('Six').innerHTML=obj.six
                        document.getElementById('fours').innerHTML=obj.four
                        break;
                    }
                }
                console.log(tossLoseTeamPoint)
            }else{
                if(shotType=="Wicket"){
                    currentBowler==team1Captain?tosswinTeamPoint.teampoints+=20:
                    currentBowler==team1ViceCaptain?tosswinTeamPoint.teampoints+=15:tosswinTeamPoint.teampoints+=10  
                        
                    for(let obj of TossWinteam11){
                        if(obj.name==currentBowler){
                            currentBowler==team1Captain?obj.point+=20:currentBowler==team1ViceCaptain?obj.point+=15:obj.point+=10
                            obj.wicket+=1
                            break
                        }
                    } 
                    for(let obj of TossLoseteam11){
                        if(obj.name==currentbatsman){
                            obj.isbat="Out"
                            if(obj.run==0){
                                currentbatsman==team2Captain?tossLoseTeamPoint.teampoints-=4:
                                currentbatsman==team1ViceCaptain?tossLoseTeamPoint.teampoints-=3:
                                tossLoseTeamPoint.teampoints-=2

                                currentbatsman==team2Captain?obj.point -=4:currentbatsman==team2ViceCaptain?obj.point-=3:
                                obj.point-=2
                            }
                        }
                    }     
                    let index=TossLoseteam11.findIndex(item=>item.name===currentbatsman)+1
                    document.getElementById('currentbatsman').innerHTML=TossLoseteam11[index].name 
                    playerrun()
                    tossLoseTeamPoint.teamWicket=tossLoseTeamPoint.teamWicket+1  
                             
                }else if(shotType=="Dot"){
                    currentBowler==team1Captain?tosswinTeamPoint.teampoints+=2:
                    currentBowler==team1ViceCaptain?tosswinTeamPoint.teampoints+=1.5:tosswinTeamPoint.teampoints+=1
                    
                    for(let obj of TossWinteam11){
                        
                        if(obj.name==currentBowler){
                            obj.dotbal+=1
                            currentBowler==team1Captain?obj.point+=2:currentBowler==team1ViceCaptain?obj.point+=1.5:obj.point+=1
                            break
                        }
                    } 
                }
                console.log(tossLoseTeamPoint)
            }
            if(count==1||count==2||count==3||count==4){
                let index=TossWinteam11.findIndex(item=>item.name===currentBowler)+1
                document.getElementById('bowlerName').innerHTML=TossWinteam11[index].name
            }
            document.getElementById("batteamPoint").innerHTML="Points : "+tossLoseTeamPoint.teampoints
            document.getElementById("teamRuns").innerHTML="Runs: "+tossLoseTeamPoint.teamrun
            document.getElementById("Wicket").innerHTML="Wicket : "+tossLoseTeamPoint.teamWicket
            document.getElementById("BowlteamPoint").innerHTML="Points : "+tosswinTeamPoint.teampoints
            document.getElementById('over').innerHTML="Overs :"+count
            document.getElementById("information").innerHTML+="Ball "+ball+" - " +currentDate+" - "+shotType+br
    } else{
        alert("Second Innings over")
        document.getElementById("startMatch").style.display='none';
        document.getElementById("scroebord").style.display='block';
        scorebord()
    }   
}
    function playerrun(){
        document.getElementById('currentbatsmanRun').innerHTML=0
        document.getElementById('ball').innerHTML=0
        document.getElementById('fours').innerHTML=0
        document.getElementById('Six').innerHTML=0
        document.getElementById("playerPoints").innerHTML=0
    }
    function scorebord(){
    if(tosswinTeamPoint.teampoints>tossLoseTeamPoint.teampoints){
        document.getElementById('winerteam').innerHTML=tosswinteam+ " is won the match"
    }else{
        document.getElementById('winerteam').innerHTML=tossloseteam+ " is won the match"
    }
    document.getElementById("1st inning").innerHTML=`1st inning - ${tosswinteam}` +  `(${tosswinTeamPoint.teamWicket}-${tosswinTeamPoint.teamrun})  Points:(${tosswinTeamPoint.teampoints})`
    document.getElementById("2nd inning").innerHTML=`2nd inning - ${tossloseteam}`+  `(${tossLoseTeamPoint.teamWicket}-${tossLoseTeamPoint.teamrun}) Points:(${tossLoseTeamPoint.teampoints})`

    for(let obj of TossWinteam11){
    
        document.getElementById("team1batting").innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.isbat}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.run}</td>
                                                            <td>${obj.ballplayed}</td>
                                                            <td>${obj.four}</td>
                                                            <td>${obj.six}</td></tr>`;
        
        if(obj.playingRole=="Bowler"){
            document.getElementById('team1bowling').innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.dotbal}</td>
                                                            <td>${obj.wicket}</td></tr>`;
        }
    }
    for(let obj of TossLoseteam11){
        
            document.getElementById("team2batting").innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.isbat}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.run}</td>
                                                            <td>${obj.ballplayed}</td>
                                                            <td>${obj.four}</td>
                                                            <td>${obj.six}</td></tr>`;
            
        if(obj.playingRole=="Bowler"){
            document.getElementById('team2bowling').innerHTML+=`<tr><td>${obj.name}</td>
                                                            <td>${obj.point}</td>
                                                            <td>${obj.dotbal}</td>
                                                            <td>${obj.wicket}</td></tr>`;
        }
    }
}   