import React from 'react'
import './Featured.css'
import h1 from '../../assets/1.jpg'
import h2 from '../../assets/2.jpg'
import h3 from '../../assets/3.jpg'
import h11 from '../../assets/11.jpg'
import h5 from '../../assets/5.jpg'
import h6 from '../../assets/6.jpg'
import h7 from '../../assets/7.jpg'
import h9 from '../../assets/9.jpg'
import h10 from '../../assets/10.jpg'


const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={h1} alt='' />
                <img src={h2} alt='' />
                <img src={h3} alt='' />
                <img src={h5} alt='' />
                <img src={h7} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>

                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$20/night</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

            {/* Section section */}
            <div className='container'>
                <img className='order-2' src={h6} alt='' />
                <img className='order-3' src={h7} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={h9} alt='' />


                <img className='order-4' src={h10} alt='' />
                <img className='order-5' src={h11} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>

                        
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>

                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$25/night</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured