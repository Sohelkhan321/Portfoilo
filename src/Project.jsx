import React from "react";
import {HashLink as Link } from 'react-router-hash-link';

const Project = () => {
  return (
    <div id='work'>
      <div className="  flex space-x-16  ">
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
        
      </div>
    </div>
  );
};

export default Project;
