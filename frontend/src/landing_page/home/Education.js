import React from 'react'
  

function Education() {
    return ( 
        <div className='container mt-5'>

        <div className='row'>
            <div className='col-6'>
                <img src='/media/education.svg' style={{width:"70%"}}></img>
          </div>      
        <div className='col-6'>
            <h1 className='mb-3' fs-2> Free and open market education </h1>
            <p> Varsity, the largest online stock market education book in tne wor,ld convering everything from th basics to advanced trading.</p>
            <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>


            <p className='mt-5'>Trading Q&A, the most active trading and investment market related queries.</p>
            <a href='' style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>

        </div>
        </div>
        </div>
    
    );
}

export default  Education;