import React from "react";

const About_Skills =()=>{

    return(
        <>
          <div id="about">

              <div className="bg-gray-200 h-screen">

                  <div className="flex flex-col justify-around h-40 items-center mb-12">
                   <h1 className="text-4xl font-bold">ABOUT ME</h1>
                   <div className="bg-yellow-400 w-16 rounded-full text-center">...</div>
                   <p className="text-2xl">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
                  </div>

                  
                  


                  
                  <div className="flex ">

                   <div className="w-1/2 flex flex-col justify-between ml-4 mt-2 space-y-8 sm:flex flex-col">
                      <h1 className="text-3xl font-bold">Get to know me!</h1>
                      <div className="flex flex-col justify-evenly h-40 space-y-4 ">         
                          <p className="text-xl">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications for both web and mobile view that leads to the success of the overall project. Check out some of my work in the Projects section.</p>
                          <p className="text-xl">I discovered my passion for coding during my training time at CODEYOGI.</p>
                          <p className="text-xl">I'm open to Job opportunities where I can contribute, learn and grow. You can find me at contact.</p>
                      </div>
                      <button className="bg-yellow-400 font-bold text-2xl rounded-md p-3 w-40">CONTACT</button>
                   </div>
 



                  <div className=" ml-8 ">
                      <div className="flex flex-col justify-center items-start  space-y-4 ">
                      <h1 className="text-2xl font-bold text-center ml-4">My Skills</h1>

                          <div>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold">HTML</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >CSS</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >JAVASCRIPT</button>
                       </div>
                       <div>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold">React</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >Git</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >Github</button>
                      <button className="bg-indigo-300 p-4 rounded-md m-2 font-bold" >Tailwind Css</button>
                        </div>
                      
                      </div>

                  </div>
                  </div>
















 
              </div>
          </div>

        </>
    )
}

export default About_Skills ;