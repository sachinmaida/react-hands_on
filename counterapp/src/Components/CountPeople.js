import React, { Component } from 'react'

class CountPeople extends Component{
    constructor(){
        super();
        this.state={
            entrycount:0,
            exitcount:0,
            c:0
        };
        
    }

    updateEntry(){
        this.setState(()=>{
            return {entrycount:this.state.entrycount +1}
        });
    }

    updateExit(){
        this.setState(()=>{
            return {exitcount:this.state.exitcount+1}
        });
    }
    render(){
        
        return (
            <div>
                <h1>{this.state.entrycount} People entered!!</h1>
                     <button type="button" onClick={this.updateEntry}>Update Entry</button>
                <h1>{this.state.entrycount} People Left!!</h1>
                     <button type="button" onClick={this.updateExit}>Update Exit</button>
            </div>
        );
    }
}

export default CountPeople;