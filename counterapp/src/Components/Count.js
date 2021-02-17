import React, { useState } from 'react'

function Count(){
    const [entryCount,setEntryCount]=useState(0);
    const [exitCount,setExitCount]=useState(0);

    return(
        <div>
            <h2>{entryCount} People Entered</h2>
            <button onClick={()=> setEntryCount(entryCount+1)}>Login </button>
            <h2>{exitCount} People Left.</h2>
            <button onClick={()=> setExitCount(exitCount+1)}>Exit </button>
        </div>
    );
}

export default Count;