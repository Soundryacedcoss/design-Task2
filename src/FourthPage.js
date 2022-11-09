import React from 'react'
import img1 from './image/Screenshot_2022-11-09_18-08-07 (1).png'
import img2 from './image/Screenshot_2022-11-09_18-08-07 (2).png'
import img3 from './image/Screenshot_2022-11-09_18-08-07.png'
export const FourthPage = () => {
  return (
    <div className='ForthPage'>
        <div className='ForthPageDiv'>
            <div className='CardDiv'>
            <img src={img1} alt="" />
                <p>"This is our dream home and this is really a dream come true for us!! Thanks a lot for your help and quick responses."</p>
                <p></p>
            </div>
            <div className='CardDiv'>
            <img src={img2} alt="" />
                <p>"Thank you promptly sorting out the issues we have been having."</p>
                <p></p>
            </div>
            <div className='CardDiv'>
            <img src={img3} alt="" />
                <p>"I can say that I cannot relate to other people's disappointment when buying a home"</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

// "This is our dream home and this is really a dream come true for us!! Thanks a lot for your help and quick responses."