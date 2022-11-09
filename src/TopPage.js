import React from 'react'
import img1 from './image/Screenshot_2022-11-09_15-31-50.png'
export const TopPage = () => {
  return (
    <div className='TopPageDiv'>
        <div className='logoDiv'>
        <img src={img1} alt="" />
        <h2>Get A helping hand with your home loan</h2>
        </div>
         <div className='TopPageContentDiv '>
            <div className='Content'>
                We are  responsible for 1 in every 4 bonds granted in South Africa today. Over 70% of our bonds are approved. Our success speaks for itself!
                <br />
                We make the process quick and easy. Just fill in our application form to pre-quality for a home loan and one of our consultants will contact you to complete the process
             </div>
            <div>
                <div className='FormDiv'>
                    <div className='flex inputDiv'>
                        <div >
                        <input type="text" placeholder='tittle' />
                        </div>
                        <div><input type="text" placeholder='first Name' /></div>
                    </div>
                    <div className='flex'>
                        <input type="text" placeholder='Last Name*' />
                        <input type="text" placeholder='Email*' />
                    </div>
                    <div className='flex'>
                        <input type="text" placeholder='Phone no*' />
                        <input type="text" placeholder='Id No*' />
                    </div>
                    <p>Do you have a signed sale agreement*<input type="radio"/> yes<input type="radio"/> No </p> <br />
                    <button className='button'>Prequalify Me</button>
                </div>
            </div>
         </div>
    </div>
  )
}
