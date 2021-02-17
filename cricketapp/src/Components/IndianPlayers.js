import React, { Component } from 'react'
 
export const T20Players=["FirstPlayer","SecondPlayer","ThirdPlayer"];
export const RanjiPlayers=["FourthPlayer","FifthPlayer","SixthPlayer"];
export const PlayersIndia=[...T20Players,...RanjiPlayers];
class IndianPlayers extends Component{
    
    render(){
        return (
            <div>
                <h1>India Players</h1>
                {
                   
                   PlayersIndia.map((item)=>{
                        return(
                            <div>
                                <li>Mr.{item}</li>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default IndianPlayers;