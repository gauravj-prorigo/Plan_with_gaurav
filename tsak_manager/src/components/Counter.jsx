import { useState } from "react"

function Counter(){
    const [count ,setcount] = useState(0)
    return(
       <div style={{margin:'20px', border:'2px solid black', padding:'20px',borderRadius:'5px'}}>
        <h1>Counter app</h1>
        <button onClick={()=> setcount(prev => prev +1)} className="btn">Increment</button>
        <p>{count}</p>
        <button onClick={()=> setcount(prev => prev -1)} className="btn">Decrement</button>
       </div>
    )
}


export default Counter