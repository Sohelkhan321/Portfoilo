import React from "react";
// import {HashLink as Link } from 'react-router-hash-link';

function Top() {
  return (
    <>
      <div  id="top" className="bg-green-300 flex h-screen">
        <div className="flex flex-col  justify-self-start m-4">
          <h1 className="font-bold text-white text-7xl">
            The Leading Mobile & Web App Development Partner
          </h1>
          <button className="bg-yellow-600 rounded-full p-4 mt-4  text-3xl w-60 ">
           
            Get in Touch
          </button>
        </div>
        <div>
    
         <img src="https://picsum.photos/200"/>
          <h1 className="text-9xl">Photo</h1>
        </div>
      </div>
    </>
  );
}

export default Top;
