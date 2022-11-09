import React from 'react'
import img1 from './image/Screenshot_2022-11-09_16-27-03.png'
export const MidPage = () => {
  return (
    <div className='MidPage'>
        <div className='midPageHeadDiv'>
            <h2>Get The Ooba advantage</h2>
            <b>Show the estate agent and Seller that you mean business.</b>
        </div>
        <div className=' MidPageContent'>
            <div className='MidPageContent-col1'>
                <b>1. Know your credit profile.</b>
                <p>Banks reject 35% of home loans due to poor credit scores.</p>
                <b>2. Know what you can afford.</b>
                <p> Get an accurate indication of your price ceiling so you can shop within your means.</p>
                <b>3. Assess your financial situation.</b>
                <p>So you understand your monthly bond repayments.</p>
                <b>4. Be empowered.</b>
                <p>Get the big decisions right when choosing your dream home.</p>
            </div>
            <div className='MidPageContent-col2'>
                <img src={img1} alt="" />
                <p>"Thanks to ooba for their great service,</p><p> I will definitely recommend you."</p>
                <p>jack pack, sandton</p>
            </div>
        </div>
    </div>
  )
}
// 1. Know your credit profile.
// Banks reject 35% of home loans due to poor credit scores.
// 2. Know what you can afford.
// Get an accurate indication of your price ceiling so you can shop
// within your means.
// 3. Assess your financial situation.
// So you understand your monthly bond repayments.
// 4. Be empowered.
// Get the big decisions right when choosing your dream home.
// home.
// "Thanks to ooba for their great service, I will
// definitely 