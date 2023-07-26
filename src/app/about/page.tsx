'use client'
import Link from 'next/link'
import Image from 'next/image'
import Galley from '../../componet/galley'
import styles from "./page.module.css";
import Map from '../../componet/map';
import { useState } from 'react';


export default function about() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid lg:gap-80'>
        <div id='Personal' className='p-10 border-double border-2 border-orange-600 hover:border-dotted'><div className='bg-white rounded-full inline-block '>
          <Image className="rounded-full" 
          src="/DSC03560.jpg"
          alt="icon"
          width={150}
          height={150}
          priority
          />
          </div>
          <h5 className='text-lg'>Welcome to my Website</h5></div>
          
          {/*details for personal technolog stack */}
        <div><h4 className='text-xl p-5'>Technology Stack</h4>
        {[
            ['Javascript','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
            ['HTML','https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'],
            ['CSS','https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'],
            ['Java','https://dev.java/assets/images/java-affinity-logo-icode-lg.png'],
            ['Python','https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'],
            ['C#','https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'],
            ['Lightroom','https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg'],
          ].map(([skills,logo])=>(
            <div className="flex my-3  items-center"><Image className='ml-10'
            key={logo}
            src={logo}
            alt={skills}
            width={65}
            height={64}
            priority
              
            />
            <p className='ml-2' key={skills}>{skills}
              </p>   
              </div>   
          ))}
          </div>
       
        {/*details for Project experiences */}
        <div><h4 className='text-xl p-5'>Project Experience</h4>
        {[
            ['Javascript','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
            ['HTML','https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'],
            ['CSS','https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'],
            ['Java','https://dev.java/assets/images/java-affinity-logo-icode-lg.png'],
            ['Python','https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'],
            ['C#','https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'],
            ['Lightroom','https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg'],
          ].map(([title,links])=>(
            <div className="grid-row-2 items-center group">
              <a key={links} href={links} className='my-2 rounded-2xl'>
              <Image key={links} className="opacity-100 block w-1/2 h-1/2 transition-opacity rounded-2xl group-hover:opacity-30" 
              src={links}
              alt={title}
              width={100}
              height={100}
              priority
              />
              <h3 className='transition-opacity opacity-0 w-1/2 group-hover:opacity-100 translate-y-[-30px] lg:translate-y-[-80px] text-center bg-blue-300 text-white text-xl' key={title}>{title}</h3> 
             
              </a> 
              </div>   
          ))}</div>

        <div className='col-span-3'>  <h5 className='text-xl p-5'>Galley</h5><Galley></Galley></div>
      </div>
      
    <Map />
    </main>
  )
}
