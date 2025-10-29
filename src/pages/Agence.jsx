import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'

function Agence() {
  
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)


  const imageArray = [
    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 28%',
        end:'top -70%',
        pin:true,
        pinSpacing:true,
        pinType:'transform',
        scrub:1,
        onUpdate:function(elem){
          let imageIndex;

          if(elem.progress<1){
          imageIndex = Math.floor(elem.progress * imageArray.length)
          }
          else{
            imageIndex = imageArray.length-1
          }

          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
    <div className='section1 py-1'>
      <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw]  top-60 left-[30vw]'>
        <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='relative font-[font-2]'>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>EXPLORE <br/>
        MORE</h1>
      </div>
      <div className='mt-20 bg-black'>
       <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-900 gap-10 pt-[150px]">
        {imageArray.map((image, index) => (
          <div key={index}>
          
              <div>
                <img className='w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out rounded-4xl' src={image} alt="" />
              </div>
          
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Agence