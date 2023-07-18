// ./conactform.tsx

import React from "react";
const Contactform = () => {
  return (
    <div className="form bg-base-500">
        
        <div className="grid grid-rows-1 bg-orange-700 p-10">
        <h3>Contact Me!</h3>
     <form action="/send-data-here" method="post" className="container">
        <div className="grid grid-rows-1">
        <label form="email">Email Address:</label>
        <input type="text" id="Email" name="Email" required/>
        </div>
        <div className="grid grid-rows-1">
        <label form="first">First name:</label>
        <input type="text" id="first" name="first" required maxLength={20} autoComplete="given-name"/>
        </div>
        <div className="grid grid-rows-1">
        <label form="last">Last name:</label>
        <input type="text" id="last" name="last" required maxLength={20} autoComplete="family-name"
/>
        </div>
        <div className="grid grid-rows-1">
        <label form="message">Message:</label>
        <textarea
            form="message"
          rows={5} 
        />
        </div>
        <button type="submit" className="flex-none text-center p-10 text-xl bg-white w-2/5 border-solid rounded-full items-center">Submit</button>
        </form>
        </div>
    </div>
  );
};
export default Contactform;