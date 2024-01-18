import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'

const Category = () => {
  return (
    <div className='mt-40' id='services'>
        <div className='text-center'>
            <span>CATEGORY</span>
            <h2 className='text-4xl font-bold'>We Offter Best Services</h2>
        </div>
        <div className='sm:flex  flex-col-4 justify-center sm:m-11 sm:space-x-48 p-20 space-y-11  sm:-space-y-1  '>
            <div className=''>
                <div className=' '>
                    <img src={icon1} alt='icon1'/>
                </div>
                <span className='font-bold text-lg'>Calculated Weather</span>
                <p>Built Wicket longer admire<br/>
                    do barton vanity itself do <br/>
                    in it.
                </p>
            </div>
            <div>
                <div className='  '>
                    <img src={icon2} alt='icon1'/>
                </div>
                <span className='font-bold text-lg'>Best Flights</span>
                <p>Engrossed listening.Park<br/>
                    gate sell they west hard<br/>
                    for the.
                </p>
            </div>
            <div>
                <div className='  '>
                    <img src={icon3} alt='icon1'/>
                </div>
                <span className='font-bold text-lg'>Local Events</span>
                <p>Barton vanity itself do in it.<br/>
                    Preferd to mern it <br/>
                    engrossed listening.
                </p>
            </div>
            <div className=''>
                <div className=''>
                    <img src={icon4} alt='icon1'className=''/>
                </div>
                <span className='font-bold text-lg'>Customization</span>
                <p>We deliver outsourced<br/>
                    aviaton services for <br/>
                    military customers.
                </p>
            </div>
        </div>


    </div>
  )
}

export default Category