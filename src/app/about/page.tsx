'use client' //about/page.tsx
import Image from 'next/image'
import Galley from '../../componet/galley'
import Map from '../../componet/map';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function about() {
  return (
    <div className="slider_container box-border m-0 p-0 ">
      <div className="leftSlide">
        <div className=' bg-pink-100'><h2 className='text-xl p-5'>Galley</h2></div> 
        <div className=' bg-pink-200'><h2 className='text-xl p-5'>Project Experience</h2></div>
        <div className=' bg-pink-300'><h2 className='text-xl p-5'>Technology Stack</h2></div>
        <div className=' bg-pink-400'><h2 className='text-lg'>Welcome to my Website</h2></div>
      </div>

      <div className='rightSlide'>
        <div id='Personal' className='right-1 justify-center relative top-1/4 left-20'>
          <Image className="rounded-2xl" 
          src="/DSC03560.jpg"
          alt="icon"
          width={800}
          height={500}
          priority
          />
          <p className=' justify-center mx-20'>more content</p>
          </div>
          
          
          {/*details for personal technolog stack */}
        <div className='right-2'>
        {[
            ['Javascript','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
            ['HTML','https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'],
            ['CSS','https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'],
            ['Java','https://dev.java/assets/images/java-affinity-logo-icode-lg.png'],
            ['Python','https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'],
            ['C#','https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'],
            ['Lightroom','https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg'],
          ].map(([skills,logo])=>(
            <div className="flex my-3  items-center" key={logo}><Image className='ml-10'
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
        <div className='right3 flex mt-10 ml-5'>
        {[
            ['Javascript','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
            ['HTML','https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'],
            ['CSS','https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'],
            ['Java','https://dev.java/assets/images/java-affinity-logo-icode-lg.png'],
            ['Python','https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'],
            ['C#','https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'],
            ['Lightroom','https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg'],
          ].map(([title,links])=>(
            <div className="items-center group w-1/2 h-1/4" key={links}>
              <a key={links} href={links} className='my-2 rounded-2xl'>
              <Image className="opacity-100 block w-1/2 h-1/2 transition-opacity rounded-2xl group-hover:opacity-30 border-2 p-5" 
              key={title}
              src={links}
              alt={title}
              width={300}
              height={200}
              priority
              />
              <h3 className='transition-opacity opacity-0 w-1/2 group-hover:opacity-100 translate-y-[-30px] lg:translate-y-[-70px] text-center bg-blue-300 text-white text-lg' key={title}>{title}</h3> 
             
              </a> 
              </div>   
          ))}
         
          </div>
        <div className='right-4'><Galley></Galley></div>
        

        
        
      </div>
      <div className='action-buttons'>
          
          <button className='upButton'><FontAwesomeIcon icon={faArrowUp} /></button>
          <button className='downButton'><FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
        <script src='./static/button.js' />
    {/* <Map /> */}
    </div>
  )
}
