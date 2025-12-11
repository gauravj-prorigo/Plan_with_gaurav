import { memo } from "react"

function Child({arr,handleClcik}){
    console.log("child get re render")
    return(
        <div>
            <h1>Child</h1>
            <p>{arr.length}</p>
            <button onClick = {handleClcik}>click</button>
        </div>
    )
}

export default memo(Child)