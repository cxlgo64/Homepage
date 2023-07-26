import Image from 'next/image'
import React from "react";
import "./galley.css"
const galley = () => {
  return (
    <div className="grid1 image-grid">
        
          {[
            ['img1','/DSC03396.jpg'],
            ['img2','/DSC03458.jpg'],
            ['img3','/DSC03488.jpg'],
            ['img4','/DSC03499.jpg'],
            ['img5','/DSC03500.jpg'],
            ['img6','/DSC03525.jpg'],
            ['img7','/DSC03560.jpg'],
          ].map(([title,srcs])=>(
            <div className="grid-block1" key={title}>
              <div className="title">
        <a href="#" className="title-link hover:opacity-100 hover:top-[-16px] hover:left-[-16px]">
            <Image className="title-img title-img1 "
            key={srcs}
            src={srcs}
            alt={title}
            width={400}
            height={300}
            priority />
            </a>
            </div>
      </div>
          ))}
        </div>
      
      
      
  );
};
export default galley;