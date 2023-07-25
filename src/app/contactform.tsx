// ./conactform.tsx
/*global document*/
import  ReactDOM  from "react-dom";

import React from "react";


const Contactform = () => {
  return (
    
    <div id="root" className="form mx-20 lg:grid-cols-2 justify-between break-after-auto">
        <div className="float-left w-1/2 rounded-2xl h-full lg:bg-[url('/DSC03499.jpg')]">
          <h2 className=" text-center text-4xl rounded-2xl bg-slate-400 text-black-700 lg:text-orange-700 mt-8 mb-8 pt-2 pb-2">CONTACT ME!</h2>
      
          <h3 className=" pl-5 text-4xl rounded-2xl text-black-700 lg:text-orange-700 bg-slate-400 mt-8 mb-8 pt-2 pb-2">Phone Number: 6036098364</h3>
          <h3 className=" pl-5 text-4xl rounded-2xl text-black-700 lg:text-orange-700 bg-slate-400 mt-8 mb-8 pt-2 pb-2">Email Address: <a href="mailto:675994421@qq.com" className=" text-blue-300">QQmail</a> <a href="mailto:zero5397@gmail.com"  className=" text-blue-300" >Gmail</a> </h3>
          <h3 className=" pl-5 text-4xl rounded-2xl text-black-700 lg:text-orange-700 bg-slate-400 mt-8 mb-8 pt-2 pb-2">Location: Glengyle Dr. Vienna VA 22181</h3>
         
          </div>
        <div className="grid p-10 bg-orange-700 rounded-2xl ">
         
          <form action="/send-form" method="post" className="container col-start-1 col-end-2 p-5">
          
          <div className="text-xl ">
          <label form="email" className=" p-2 m-2 pr-3">Email Address</label>
            <input type="text" className=" p-2 m-2 rounded-xl text-xl  w-full" id="email" name="email" required  autoComplete="email"/>
          </div>
          
          
          <div className="text-xl ">
            <label form="fname" className=" p-2 m-2 pr-3">Your name</label>
            <input type="text" className=" p-2 m-2 rounded-xl w-full" id="fname" name="fname" required autoComplete="given-name"/>
          </div>
          <div><label form="message" className="p-2 m-2 pr-7 text-xl  place-items-start">Message</label></div>
          <div><textarea form="message" className="p-2 m-2 rounded-xl w-full" /></div>
          
          <button type="submit" className="text-center p-2 m-2 text-base bg-sky-500 w-0.1 h-0.1 border-solid rounded-xl items-center hover:bg-green-400">Submit</button>
          </form>
        </div>
        
    </div>
   
  );
};
export default Contactform;