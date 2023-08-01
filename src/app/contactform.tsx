// conactform.tsx
import React from "react";
const Contactform = () => {
  return (    
    <div id="contact_form" className="form mx-10 mb-10 lg:grid-cols-3 justify-between h-[45vh]">
        <div className="float-left w-1/2 rounded-2xl h-full] pb-10">
          <h2 className=" text-center text-4xl rounded-2xl text-[#fad4a2] bg-[#a73e13] my-8 mx-20  py-2 px-20">CONTACT ME!</h2>
      
          <h3 className=" text-4xl rounded-2xl text-black-700 text-[#fad4a2] bg-[#a73e13] my-8 mx-20 py-2 px-20">Phone Number: 6036098364</h3>
          <h3 className=" text-4xl rounded-2xl text-black-700 text-[#fad4a2] bg-[#a73e13] my-8 mx-20  py-2 px-20">Email Address: <a href="mailto:zero5397@gmail.com"  className=" text-blue-300" >zero5397@gmail.com</a> </h3>
          <h3 className=" text-4xl rounded-2xl text-black-700 text-[#fad4a2] bg-[#a73e13] my-8 mx-20  py-2 px-20">Location: Glengyle Dr. Vienna VA 22181</h3>
         
          </div>
          
        <div className=" grid h-full  lg:text-[#fad4a2] rounded-2xl ">         
          <form action="/send-form" method="post" className="container col-start-1 col-end-2 p-5">        
          <div className="text-xl bg-[#a73e13] rounded-2xl my-8">
            <label form="email" className=" p-2 m-2 pr-3 mr-5">Email Address</label>
            <input type="text" className=" p-2 m-2 rounded-xl text-xl lg:w-[36rem]" id="email" name="email" required  autoComplete="email"/>
          </div>          
          <div className="text-xl bg-[#a73e13] rounded-2xl my-5">
            <label form="fname" className=" p-2 m-2 pr-2 mr-14">Your name</label>
            <input type="text" className=" p-2 m-2 rounded-xl w-auto lg:w-[36rem]" id="fname" name="fname" required autoComplete="given-name"/>
          </div>
          <div className="bg-[#a73e13] rounded-2xl w-auto my-5 py-5">
            <label form="message" className="p-4 mb-16 mr-16 text-xl">Message</label>
            <textarea form="message" className="p-2 m-2 rounded-xl w-auto lg:w-[36rem] h-24" /></div>
              
          <button type="submit" className="text-center p-2 m-2 text-base bg-[#a73e13] w-0.1 h-0.1 border-solid rounded-xl items-center hover:bg-green-400">Submit</button>
          </form>
        </div>
        
    </div>
   
  );
};
export default Contactform;