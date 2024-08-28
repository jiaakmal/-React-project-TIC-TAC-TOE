import { useState } from "react";

export default function Player({name,symbol}){

    const [isEditing , setIsEditing]=useState(false)

const clickHandler=()=>{
    setIsEditing(true);

}  
let playerName=<span className="player-name">{name}</span>

 if(isEditing){
    return(
        playerName= <input type="text"  required/>
 
    );
 }

   
    return(
<li>
          {playerName}
          <span className="player-symbol">{symbol}</span>
         <button onClick={clickHandler}>{isEditing ? 'save'  : 'edit'}</button>
        </li>
    );

   }