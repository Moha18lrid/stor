import React from 'react'
import shos from '../asset/shos.png'
import './hero1.css'

function Hero1() {
    return (
        <div className="main1">
            <div className="left">
                <div className="discription">
                    <div className="date">december 10-28</div>
                    <h4>Nike Air Max Exceed Running Shoes</h4>
                    <p> orange and blue offer bold style with vibrant colors,
                        exceptional comfort through cushioned Air Max technology,
                        and a modern design perfect for everyday wear and athletic activities.</p>
                </div>
                <button>Learn More</button>
            </div>
            <div className="rite">
                <img src={shos} alt="" />
            </div>
        </div>
    )
}

export default Hero1
