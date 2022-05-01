import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <div id="about" className="bg-indigo-300  h-screen">
        <div className=" bg-green-600 flex flex-col   justify-around  items-center space-y-8 ">
          <h1 className="font-bold text-4xl">About me</h1>
          <button className="bg-yellow-400 w-20 rounded-md">..</button>
          <p className="text-xl">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>



        {/* <div className=" flex  flex-col items-center justify-between   h-screen">
          <h1 className="bg-gray-400 font-bold text-xl">HTML</h1>
          <h1 className="bg-red-300 font-bold text-xl ">css</h1>
          <h1 className="bg-yellow-800 font-bold text-xl  ">react</h1>
        </div> */}

       
         <div className="flex flex-col justify-center items-center space-y-12 ">

             <h1 className="text-2xl font-bold mt-8">Get to know me!</h1>
          <div className="flex flex-col  items-center justify-between space-y-4 ">
             <p className="text-xl">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications for both web and mobile view that leads to the success of the overall project.</p>
             <p className="text-xl">I discovered my passion for coding during my training time at CODEYOGI.</p>
             <p className="text-xl">I'm open to Job opportunities where I can contribute, learn and grow. You can find me at contact.</p>
             <p className="text-xl">I discovered my passion for coding during my training time at CODEYOGI.</p>
             <p className="text-xl">I'm open to Job opportunities where I can contribute, learn and grow. You can find me at contact.</p>
             <p className="text-xl">I discovered my passion for coding during my training time at CODEYOGI.</p>
            
           </div>

           <button className="bg-yellow-400 rounded-md p-4 w-40">CONTECT</button>
         </div>



      </div>
    </>
  );
};

export default About;
