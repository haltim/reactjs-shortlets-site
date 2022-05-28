import React from 'react'
import h16 from '../../assets/16.jpg'
import h17 from '../../assets/17.jpg'
import h18 from '../../assets/18.jpg'
import './Best.css'

const Best = () => {
  return (
    <div className='best'>
            <h1>Find  The Best Apartment For Your Stay</h1>
           
            <div className='container'>
                <img src={h16} alt='' />
                <img src={h17} alt='' />
                <img src={h18} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
  )
}

export default Best