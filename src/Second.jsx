import React from "react";

function Second (){
    return(
        <>
         <div className="bg-yellow-100 flex flex-col text-center space-y-3 p-4 h-screen">
               
            <h1 className="text-5xl font-bold text-gray-400"> ----------What We Do------------- </h1>
             <p className="text-xl font-bold  text-gray-800">Through our custom Agile development method, we bring your mobile and web app ideas to reality.</p>
             <p className="text-xl  font-bold text-gray-800" >We stand out for our top development skills but we are much more than that. We are a genuine strategic business partner.</p>

        </div>
          


        <div className="bg-yellow-600 flex flex-col text-center space-y-3 p-4">
            <h1 className="text-5xl font-bold text-gray-400"> -------End-to-end Application Development---------- </h1>
   
            <div className="flex flex-col  justify-self-start m-4">
                <p className=" text-white text-xl">We cover all the bits and pieces needed to develop top-notch, innovative digital products. From strategy to product design, including Front-end and Back-end services, we got your back. We code to very high standards and test continuously, which creates easy to maintain high-quality products.</p>
            </div>

         </div>

        </>
    );
}

export default Second ;