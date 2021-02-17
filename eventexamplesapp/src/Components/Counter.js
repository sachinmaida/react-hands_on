import React, { Component, useState } from 'react'

function sayWelcome(va){
    alert('Welcome '+va);
}


const Counter=()=>{ 
    const[count,setCount]=useState(0);
    
        return(
            <div>
                <h3>{count}</h3>
                <button onClick={()=> {setCount(count+1);alert("Welcome")}}>Increment</button>
                <button onClick={()=> setCount(count-1)}>Decrement</button>
                <button onClick={()=> sayWelcome("Sachin")}>Say Welcome</button>
                <button onClick={()=> alert("I was clicked")}>Click on me</button>
            </div>
        );
}

export default Counter;