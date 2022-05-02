import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Pro from "./Pro";

const Project = () => {
  return (
    <div id="Project">
      
      
      
      <div className="flex flex-col justify-around h-40 items-center mb-12">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
        <div className="bg-yellow-400 w-16 rounded-full text-center">...</div>
        <p className="text-2xl">
          Here you will find some of the projects that I created with each
          project containing its own details .
        </p>
      </div>




       <div className="flex justify-around space-y-8">
        <img src="https://picsum.photos/200" className="rounded-sm  " />
         <Pro
        title="ToDo App"
        detail="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do."
         />
       </div>



       <div className="flex justify-around space-y-8">
        <img src="https://picsum.photos/200" className="rounded-sm  " />
      <Pro
        title="CODEYOGI-Clone "
        detail="It is a clone of https://app.codeyogi.io which i build by using my various skills ."
      />
         </div>




       <div className="flex justify-around space-y-8">
        <img src="https://picsum.photos/200" className="rounded-sm  " />
      <Pro
        title="Ask Jud"
        detail="Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want."
      />
      </div>
    </div>
  );
};

export default Project;
















{
  /* <div className="  flex space-x-16  ">
        <div className="">
          <img
            className="h-56 w-60 ml-4"
            src="https://picsum.photos/200"
            alt=""
            srcset=""
          />
        </div>

        <div className="  flex flex-col space-y-8  m-4">
          <h1 className="font-bold text-3xl ">Todo App</h1>
          <p className="text-xl">
            ToDo List App is a kind of app that generally used to maintain our
            day-to-day tasks or list everything that we have to do.
          </p>
          <div>
           
            <button className="bg-yellow-400 text-center rounded-md p-4">
              Check Out
            </button>
          </div>
        </div>
        
      </div>




      <div className="  flex space-x-16 ">
        <div className="">
          <img
            className="h-56 w-80 ml-4"
            src="https://picsum.photos/200"
            alt=""
            srcset=""
          />
        </div>

        <div className="  flex flex-col space-y-8  m-4 ">
          <h1 className="font-bold text-3xl ">Codeyogi Clone</h1>
          <p className="text-xl">
          It is a clone of https://app.codeyogi.io which i build by using my various skills
          It is a clone of https://app.codeyogi.io which i build by using my various skills
          </p>
          <div>
           
            <button className="bg-yellow-400 text-center rounded-md p-4">
              Check Out
            </button>
          </div>
        </div>
        
      </div>



      <div className="  flex space-x-16  ">
        <div className="">
          <img
            className="h-56 mt-4 ml-4"
            src="https://picsum.photos/200"
            alt=""
            srcset=""
          />
        </div>

        <div className="  flex flex-col space-y-8  m-4 ">
          <h1 className="font-bold text-3xl ">Ask Jud</h1>
          <p className="text-xl">
          Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want.
          </p>
          <div>
           
            <button className="bg-yellow-400 text-center rounded-md p-4">
              Check Out
            </button>
          </div>
        </div>
        
      </div> */
}
