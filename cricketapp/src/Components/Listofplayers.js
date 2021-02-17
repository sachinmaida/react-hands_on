import React, { Component } from 'react'


export const players=[{name:"Rohit Sharma",score:100},
                {name:"Quinton Dcock",score:65},
                {name:"David Warner",score:37},
                {name:"Bumrah",score:8},
                {name:"Kane Williamon",score:78},
                {name:"Bairstow",score:35},
                {name:"Ms Dhoni",score:17},
                {name:"Jofra Archer",score:22},
                {name:"Joe root",score:21},
                {name:"Devilliers",score:57},
                {name:"Chahal",score:12}];

function OddPlayers([first,,third,,fifth,,seventh]){
    return (
       <div>
           <li>First:{first.name}</li>
           <li>Third:{third.name}</li>
           <li>Fifth:{fifth.name}</li>
           <li>Seventh:{seventh.name}</li>
       </div>
   );
}  

function  EvenPlayers([,Second,,Fourth,,Sixth,,Eighth]){
    return (
       <div>
           <li>Second:{Second.name}</li>
           <li>Fourht:{Fourth.name}</li>
           <li>Sixth:{Sixth.name}</li>
           <li>Eighth:{Eighth.name}</li>
       </div>
   );
}

class Listofplayers extends Component{   
    render(){
        return(
            
            <div>
                <h1>List of Players</h1>
                {
                    players.map((item)=>{
                        return(
                            <div>
                                <li>Mr.{item.name} <span>{item.score}</span></li>
                            </div>
                        );
                    })
                }
                <h1>Player with score less than 70</h1>
                {
                    players.map((item)=>{
                        if(item.score<=70){
                            return(
                                <div>
                                    <li>Mr.{item.name} <span>{item.score}</span></li>
                                </div>
                            );
                        }
                    })
                }
                <h1>Odd Players</h1>
                {
                    OddPlayers(players)
                }
                <h1>Even Players</h1>
                {
                    EvenPlayers(players)
                }
            </div>
        );
    }
}

export default Listofplayers;