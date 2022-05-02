import React from "react";

const Pro =(props)=>{
    return(
        <>
        <div className=" flex flex-col justify-around h-60 w-1/2">
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <p className="text-xl">{props.detail}</p>
             
             <button className="bg-yellow-400 p-4 rounded-md w-60 font-bold text-xl">Check Out !</button>
           
        </div>
        
        </>
    );
}

export default Pro;