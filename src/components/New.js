import React, {useState} from "react";

function New(){

    const [value, setValue] = useState("");
    return(
        <div>
            <h1>{value}</h1>
            <input type="text" onChange={(event) =>{
                setValue(event.target.value);
            }} />
        </div>
    )
}

export default New;
