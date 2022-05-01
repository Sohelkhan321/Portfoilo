import React from "react";

const Skills = () => {
  return (
    <>
 
 <h1 className="font-bold text-6xl text-center">My Skills</h1>

      <div id="skills" className="bg-green-400 h-screen   flex space-x-4 justify-center items-center space-x-4">
      <div className="mr-8"> <h1 className="font-bold text-6xl text-center">My Skills</h1>
      <h1 className="font-bold text-7xl">==> </h1>


      </div>
           
        <div className="space-y-8  flex flex-col ">
          <h2 className="bg-gray-300 font-bold p-4 rounded-md text-center  "> HTML</h2>
          <h2 className="bg-gray-300 font-bold p-4 rounded-md text-center"> Css</h2>
          <h2 className="bg-gray-300 font-bold p-4 rounded-md  text-center"> Git</h2>
        </div>

        <div  className="space-y-8 flex flex-col" >
          <h2 className="bg-gray-300 font-bold p-4 rounded-md text-center"> Github</h2>
          <h2 className="bg-gray-300 font-bold p-4 rounded-md  text-center"> React</h2>
          <h2 className="bg-gray-300 font-bold p-4 rounded-md  text-center">
           
            Typescript
          </h2>
        </div>


        <div  className="space-y-8 flex flex-col  " >
          <h2 className="bg-gray-300 font-bold p-4 rounded-md text-center"> Github</h2>
          <h2 className="bg-gray-300 font-bold p-4 rounded-md  text-center"> React</h2>
          <h2 className="bg-gray-300 font-bold p-4 rounded-md  text-center">
           
            Typescript
          </h2>
        </div>
      </div>
    </>
  );
};

export default Skills;
