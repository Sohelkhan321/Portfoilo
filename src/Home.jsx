import React from "react";
import {HashLink as Link } from 'react-router-hash-link';

const Home = () => {
  return (
    <>
      <div id='Home' className="bg-green-200 h-screen  flex"> 
        <div className="flex flex-col items-center justify-center space-y-28">
          <h1 className="font-bold text-7xl ">
            
            HEY, I'am <span className="text-green-600">Sohel Khan</span>
          </h1>


         <div className=" flex flex-col items-center  justify-between  space-y-4 m-2" >
          <p className="text-2xl">
            A <span className="text-yellow-400">Frontend</span> focused Web
            Developer building the Frontend of{" "}
            <span className="text-yellow-400">Website</span> and Web
            Applications that leads to the success of the overall project.
          </p>

          <p className="text-xl space-y-4">
            I'm a web developer from Southampton, UK. Currently lead developer
            at a local agency, Fhoke. In my spare time I <span className="text-indigo-400 font-bold"> enjoy DIY, gaming and
            building </span> my own projects. My preferred tools are <span className="text-indigo-400 font-bold"> PHP, Laravel and
            Vue.js</span>.
          </p>
          <p className="text-xl space-y-4">
            I'm a web developer from Southampton, UK. Currently lead developer
            at a local agency, Fhoke. In my spare time I <span className="text-indigo-400 font-bold"> enjoy DIY, gaming and
            building </span> my own projects. My preferred tools are <span className="text-indigo-400 font-bold"> PHP, Laravel and
            Vue.js</span>.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
