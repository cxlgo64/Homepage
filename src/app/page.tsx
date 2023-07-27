'use client' //home/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import Contactform from './contactform'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left'>
        <div className='basis-1/2'>
          <h1 className='text-3xl text-left pt-5 pb-5 m-5'>Here is Jonathan(Xueliang) Chen</h1>
          <p className='pt-5 pb-5 pr-20 mb-5 text-xl'>I am a <strong>Web Developer, Software Developer, IT Technology Support, Game Developer and Photograher</strong>. I am happy to help you to expend the possiblity of your business</p>
         <Link href="/about">
          <button className='p-20 m-20 text-center rounded-2xl bg-orange-500 border border-transparent px-5 py-4 transition-colors hover:border-gray-300'>
          Learn More
          </button>
          </Link>
          <button className='p-20 m-20 text-center rounded-2xl bg-orange-500 border border-transparent px-5 py-4 transition-colors hover:border-gray-300'>
          Download CV
          </button>
        </div>
        <div className="basis-1/2 relative inline-block mr-0.5 mb-4 w-96">
          <div className='relative rotate-0 hover:rotate-180 block bg-white'>
            <Image className="rounded-2xl" 
              src="/DSC03560.jpg"
              alt="icon"
              width={1000}
              height={150}
              priority
              />
          </div>
          <div className='back absolute opacity-0 top-0 left-0 w-full h-full rotate-180 hover:rotate-0 hover:opacity-100'>

          </div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-5">
        <Link
          href="/sample_site"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Blogs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out the latest update on my personal idea!
          </p>
        </a>

        <Link
          href="https://github.com/cxlgo64"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
      <Contactform  />
    </main>
  )
}
