// ./conactform.tsx
import React from "react";
const Contactform = () => {
  return (
    <div className="form mx-20 lg:grid-cols-2 justify-between" id="contact_form">
        <div className="">
          <h1 className=" text-center text-4xl rounded-2xl lg:bg-[url('/DSC03499.jpg')] text-black-700 lg:text-orange-700">CONTACT ME!</h1></div>
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