import Link from 'next/link'
import Image from 'next/image'
import styles from "./page.module.css";


export default function Sample_home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid gap-20 grid-cols-3'>
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
        <div><h4 className='text-xl p-5'>Technology Stack</h4></div>
        {/*details for Project experiences */}
        <div><h4 className='text-xl p-5'>Project Experience</h4></div>
        <div className='col-span-3'>  <h5 className='text-xl p-5'>Galley</h5><Galley></Galley></div>
      </div>
      
      
    </main>
  )
}
