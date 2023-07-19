// ./conactform.tsx

import React from "react";
const Contactform = () => {
  return (
    <div className="form bg-slate-500">
        
        <div className="grid grid-rows-3 bg-orange-700 p-20 grid-flow-col gap-4 auto-rows-max">
          <h3 className="row-span-3 text-center text-2xl">Contact Me!</h3>
          <form action="/send-data-here" method="post" className="container">
          <div className="row-start-1">
            <div className=" grid grid-rows-2">
              <label form="email" className="row-span-1 text-xl">Email Address:</label>
              <input type="text" id="Email" name="Email" required className="row-span-2"/>
            </div>
          </div>
          <div className="col-span-2 text-xl">
            <div className="grid grid-rows-2">
              <label form="first">First name:</label>
              <input type="text" id="first" name="first" required maxLength={20} autoComplete="given-name"/>
            </div>
          </div>
          <div className="row-span-2 col-span-2 text-xl">
            <div className="grid grid-rows-2">
              <label form="last">Last name:</label>
              <input type="text" id="last" name="last" required maxLength={20} autoComplete="family-name"/>
            </div>
          </div>
          <div className="text-xl">
            <div className="grid grid-rows-1">
            <label form="message">Message:</label>
            <textarea form="message"/>
            </div>
          </div>
          <button type="submit" className="row-span-2 col-span-2 text-center p-10 text-base bg-sky-500 w-1/20 h-1/20 border-solid rounded-full items-center">Submit</button>
          </form>
        </div>
    </div>
  );
};
export default Contactform;