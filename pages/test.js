import React from "react"
import { useState,useEffect} from "react"


const Test = () =>{
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    })

    const [count,setCount] = useState(0);
    return (
        <div>
            <p> count : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>
    )
}

export default Test