import React, { useState } from "react"

function MyCompo(){
    const [name,setName] = useState("Gst");
    const [qut,setqnt] = useState();

// so inshort onchange is used for live update where onclick does not use.
// u can se in this ex..
    const [onclk,onClck] = useState("no");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handlequt(event){
        setqnt(event.target.value);
    }

    const Onclk = (event)=>{
        onClck(event.target.value)
    } 

    return( 
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={qut} onChange={handlequt}/>
            <p>Name: {qut}</p>

            <input type="text" value={onclk} onClick={Onclk}/>
            <p>Name: {onclk}</p>
        </div>
    );
}

export default MyCompo