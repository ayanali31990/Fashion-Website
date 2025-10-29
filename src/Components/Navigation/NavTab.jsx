import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


function NavTab() {

    const hover1 = useRef(null)
    const hover2= useRef(null)
    const hover3 = useRef(null)

  return (
    <div className='flex flex-col items-center justify-center h-screen text-7xl gap-8 text-white bg-black'>
       <Link ref={hover1} onMouseEnter={()=>{

        hover1.current.style.backgroundColor = '#D3FD50'
        hover1.current.style.color = 'black'
        hover1.current.innerText = "LET’S GO HOME"

       }} 
       
       onMouseLeave={() => { 
        hover1.current.style.backgroundColor = 'black' 
       
        hover1.current.style.color = 'white'

        hover1.current.innerText = "HOME"
       }}

       className='border-t-3 border-b-3 pt-3 w-full h-30 text-center' to='/'>HOME</Link>


       <Link ref={hover2} onMouseEnter={()=>{

        hover2.current.style.backgroundColor = '#D3FD50'
        hover2.current.style.color = 'black'

        hover2.current.innerText = "LET’S SEE THE COLLECTION"

       }} 
       
       onMouseLeave={() => { 
        hover2.current.style.backgroundColor = 'black' 
       
        hover2.current.style.color = 'white'

        hover2.current.innerText = "COLLECTONS"
       }}

       className='border-t-3 border-b-3 pt-3 w-full h-30 text-center' to='/projects'>COLLECTIONS</Link>


       <Link ref={hover3} onMouseEnter={()=>{

        hover3.current.style.backgroundColor = '#D3FD50'
        hover3.current.style.color = 'black'

        hover3.current.innerText = "LET’S SEE THE AGENCES"

       }} 
       
       onMouseLeave={() => { 
        hover3.current.style.backgroundColor = 'black' 
       
        hover3.current.style.color = 'white'

        hover3.current.innerText = "AGENCES"
       }}

       className='border-t-3 border-b-3 pt-3 w-full h-30 text-center' to='/agence'>AGENCES</Link>
    </div>
  )
}

export default NavTab