import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {changeColor} from "../features/theme";
function ChangeColor() {
    const dispatch = useDispatch();

    const [clr,setClr] = useState("");
    return (
        <div>
        <input type="text" value={clr} onChange={(e)=>{
            setClr(e.target.value);
        }} />
            <button onClick={()=>{
                dispatch(changeColor(clr))
            }} >change color</button>
        </div>
    )
}

export default ChangeColor
