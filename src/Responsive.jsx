import React from "react";

const Responsive =()=>{

    return(
        <>

       <div id='about'>

              <div className="flex flex-col justify-around h-40 items-center mt-12 space-y-8">
                   <h1 className="text-4xl font-bold">ABOUT ME</h1>
                   <div className="bg-yellow-400 w-16 rounded-full text-center">...</div>
                   <p className="text-2xl text-center m-2">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
              </div>



             <div className=" md:flex flex-row">

              <div className="w-full flex flex-col justify-between items-center mt-12 space-y-12 ">
                      <h1 className="text-3xl font-bold mt-12">Get to know me!</h1>
                      <div className="flex flex-col justify-evenly  mt-4 space-y-6 ml-3  ">         
                          <p className="text-xl">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications for both web and mobile view that leads to the success of the overall project. Check out some of my work in the Projects section.</p>
                          <p className="text-xl">I discovered my passion for coding during my training time at CODEYOGI.</p>
                          <p className="text-xl">I'm open to Job opportunities where I can contribute, learn and grow. You can find me at contact.</p>
                      </div>
                      <button className="bg-yellow-400 font-bold text-2xl rounded-md p-3 w-40 mt-12 mb-12">CONTACT</button>
               </div>



             
             
                <div className="flex flex-col justify-center   space-y-4   mt-12">
                      <h1 className="text-2xl font-bold text-center  ">My Skills</h1>

                          <div className="flex flex-wrap m-4 ">
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold">HTML</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >CSS</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >JAVASCRIPT</button>
                       
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold">React</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >Git</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >Github</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >Tailwind Css</button>
                        </div>
                      
                 </div>
                   <hr className=""></hr>
              </div>






       </div>
        
        </>
    );
}

export default Responsive;