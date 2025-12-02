import { useRef } from "react"

function Quote({quote,ref}){
    function handleh3(){
        console.log(ref.current)
    }
    return(
        <div>
            <h1>Quote of the day </h1>
            <div>
             {quote.map((q,i)=>(
                <h3 key={i} ref={ref} onChange={handleh3}>{q.q}</h3>
             ))}
            </div>
        </div>
    )
}

export default Quote