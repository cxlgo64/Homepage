'use client' //about/page.tsx
import Image from 'next/image'
import Galley from '../componet/galley'
import Map from '../componet/map';
import Link from 'next/link';
import Contactform from './contactform'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main>
    <div className="slider_container box-border m-0 p-0  ">
      <div className="leftSlide z-10 ">
        <div className='  text-[#fad4a2]'><h2 className='text-3xl p-5'>Galley</h2></div> 
        <div className='  text-[#fad4a2]'><h2 className='text-3xl p-5'>Project Experience</h2></div>
        <div className='  text-[#fad4a2]'><h2 className='text-3xl p-5'>Technology Stack</h2></div>
        <div className='  text-[#fad4a2] '><h2 className='lg:text-3xl text-xl text-left pt-5 pb-5 m-5'>Here is Jonathan(Xueliang) Chen</h2>
           <button className='p-20 m-20 text-center rounded-2xl bg-orange-500 border border-transparent px-5 py-4 transition-colors hover:border-gray-300'>
          Download CV
          </button>
          </div>

      </div>

      <div className='rightSlide z-8'>
        <div id='Personal' className='right-1 justify-center relative top-1/4 left-20'>
          <Image className="rounded-2xl" 
          src="/DSC03560.jpg"
          alt="icon"
          width={600}
          height={500}
          priority
          />
          <p className='py-5 pr-20 mx-5 text-xl'>I am a <strong>Web Developer, Software Developer, IT Technology Support, Game Developer and Photograher</strong>. I am happy to help you to expend the possiblity of your business</p>
        </div>

          {/*details for personal technolog stack */}
        <div className='right-2  box-border h-full'>
          <div className='inLeft float-left gap-y-72 grid-rows-4 grid-flow-col lg:text-2xl'>
            <div className='py-16 pl-10'><h3>Web Development</h3></div>
            <div className='py-16 pl-10'><h3>Software Development</h3></div>
            <div className='py-16 pl-10'><h3>Game Development</h3></div>
            <div className='py-16 pl-10'><h3>Photographic</h3></div>
          </div>
          <div className='inRight my-16'>
            <div className='inRweb flex'>{[
            ['Javascript','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
            ['HTML','https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'],
            ['CSS','https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'],
            
          ].map(([skills,logo])=>(
            <div className="my-3 flex items-center" key={logo}><Image className='ml-10'
            src={logo}
            alt={skills}
            width={65}
            height={64}
            priority
              
            />
            <p className='ml-2' key={skills}>{skills}
              </p>   
              </div>   
          ))}</div>
          <div className='inRSoft flex my-16'>{[
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
          ))}</div>

          </div>
        
          </div>
       
        {/*details for Project experiences */}
        <div className='right3 grid-flex-rows mt-4 ml-8 justify-center'>
          <div className='lg:grid lg:grid-cols-3 lg:h-48 lg:w-[960px]'>
            <div className="group rounded-lg px-8 border justify-center border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link
              href="/sample_site"
              className='px-5 py-6 h-1/4'
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Website Example{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Please Check out my website projects with different frameworks and Technology used
              </p>
            </Link>
            </div>
            <div className="group rounded-lg px-8 justify-center border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link
            href="https://github.com/cxlgo64"
            className='px-5 py-6 h-1/4'
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Github{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Check Out My Github repo
            </p>
          </Link>
          </div>
          <div className="group rounded-lg px-8 justify-center border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className='px-5 py-6'
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Game{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Check out the game I involved
              </p>
            </a>
          </div>
        </div>
        <div className='grid grid-cols-3 mt-4'>
        {[
            ['Javascript','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
            ['HTML','https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'],
            ['CSS','https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'],
            ['Java','https://dev.java/assets/images/java-affinity-logo-icode-lg.png'],
            ['Python','https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'],
            ['C#','https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'],
            ['Lightroom','https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg'],
          ].map(([title,links])=>(
            <div className="items-center group " key={links}>
              <a key={links} href={links} className=''>
              <Image className="opacity-100 block w-1/2 h-1/2 transition-opacity rounded-2xl group-hover:opacity-30 border-1 p-5" 
              key={title}
              src={links}
              alt={title}
              width={500}
              height={500}
              priority
              />
              <h3 className='transition-opacity opacity-0 my-2 rounded-2xl w-1/2 group-hover:opacity-100 translate-y-[-30px] lg:translate-y-[-70px] text-center bg-blue-300 text-white text-lg' key={title}>{title}</h3> 
             
              </a> 
              </div>   
          ))}</div>
         
          </div>
        <div className='right-4'><Galley /></div>
       

        
        
      </div>
      <div className='action-buttons'>
          
          <button className='upButton'><FontAwesomeIcon icon={faArrowUp} /></button>
          <button className='downButton'><FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
        <script src='./static/button.js' async />
  
    </div>
    <Map /> 
    <Contactform  />
    </main>
  )
}
