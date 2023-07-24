import Image from 'next/image'
import React from "react";
const galley = () => {
  return (
    <div className="bg-base-100 grid-flow-row grid ">
        <div className='row-start-1 col-start-1 p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03396.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
        <div className='row-start-1 col-start-2 p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03458.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
        <div className='row-start-1 col-start-3 p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03488.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
        <div className='row-start-2 col-start-1 p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03499.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
        <div className='row-start-2 col-start-2 p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03500.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
        <div className='row-start-2 col-start-3 p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03525.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
        <div className='row-start-3 col-start-1  p-5'>
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DSC03560.jpg"
          alt="galleciy"
          width={300}
          height={300}
          priority />
        </div>
    </div>
  );
};
export default galley;