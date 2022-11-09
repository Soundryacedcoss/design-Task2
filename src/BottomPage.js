import React from 'react'
import img1 from './image/box_img1.png'
import img2 from './image/box_img2.png'
import img3 from './image/box_img3.png'
import img4 from './image/box_img4.png'
import img5 from './image/box_img5.png'

export const BottomPage = () => {
  return (
    <div className='BottomPage'>
        <h2 className='BottomHead'>Reason to usa Ooba</h2>
          <div className='bottompageRow2'>
            <div className='BottomPageBox'>
                <img className='Image' src={img1} alt="" />
                <p>Expert Advoice</p>
            </div>
            <div className='BottomPageBox'>

                <img  className='Image' src={img2} alt="" />
                <p>Our services is completely free</p></div>
            <div className='BottomPageBox'>
                <img className='Image' src={img3} alt="" />
                <p>70% of applications approved</p></div>
            <div className='BottomPageBox'>
                <img className='Image' src={img4} alt="" />
                <p> can apply with upto 8 bank</p></div>
            <div className='BottomPageBox'> <img className='Image' src={img5} alt="" />
                <p>we handle the paper work</p></div>
          </div>
          <button className='button2'>I am ready,prequalify me</button>
    </div>
  )
}
// can apply with upto 8 bank Our Service is completely free
