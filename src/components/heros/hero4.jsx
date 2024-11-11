import React from 'react'
import discount from '../asset/discount.png'
import './hero4.css'

function Hero4() {
    return (
        <div className="main4">
            <div className="left4">
                <div className="discription4">
                    <div className="date4">december 10-28</div>
                    <h4>Nike Air Max Exceed Running Shoes</h4>
                    <p> orange and blue offer bold style with vibrant colors,
                        exceptional comfort through cushioned Air Max technology,
                        and a modern design perfect for everyday wear and athletic activities.</p>
                </div>
                <button>Learn More</button>
            </div>
            <div className="rite4">
                <img src={discount} alt="" />
            </div>
        </div>
    )
}

export default Hero4
