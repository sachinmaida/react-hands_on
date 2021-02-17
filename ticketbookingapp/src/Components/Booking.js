import React, { Component } from 'react';

class Booking extends Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:false
        };
        this.handleloginclick=this.handleloginclick.bind(this);
        this.handlelogoutclick=this.handlelogoutclick.bind(this);
    }

    handlelogoutclick(){
        this.setState({isLoggedIn:false})
    }

    handleloginclick(){
        this.setState({isLoggedIn:true})
    }
    
    render(){
        let button;
        if(this.state.isLoggedIn){
            button=<button onClick={this.handlelogoutclick}>Logout</button>
        }
        else
        {
            button=<button onClick={this.handleloginclick}>Login</button>
        }

        return(
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function Greeting(props){
    if(props.isLoggedIn){
        return <UserGreeting/>
    }
    else
    {
       return <GuestGreeting/>
    }
}

function UserGreeting(props){
    return(
        <div>
            <h3>Welcome back</h3>
        </div>
    );
}

function GuestGreeting(props){
    return(
        <div>
            <h3>Please sign up</h3>
        </div>
    );
}

export default Booking;