import Link from "next/link";
import React from "react";
const footer = () => {
  return (
    <div className="bg-base-100 pt-10">
<footer
  className="bg-auto text-center dark:bg-neutral-600 h-fit lg:text-left">
  <div className="container p-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-4">      
      <div className="mb-6">
        <h5
          className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Site Map
        </h5>
        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Home</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Blogs</a>
          </li>
          
        </ul>
      </div>
      <div className="mb-6">
        <h5
          className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Website_Examples
        </h5>

        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Link 4</a>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h5
          className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Developkit
        </h5>

        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Website Development</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Machine Learning</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Computer Hardware Consulting</a>
          </li>
          <li>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200"
              >Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>


   
</footer>
      <div className="flex-1">
        <p>Developed By Xueliang Chen with React and Next @2023</p>
      </div>
    </div>
  );
};
export default footer;