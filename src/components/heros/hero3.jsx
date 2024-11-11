import React from 'react'
import hoodie from '../asset/hoodie.png'
import './hero3.css'

function Hero3() {
    return (
        <div className="main3">
            <div className="left3">
                <div className="discription3">
                    <div className="date3">december 10-28</div>
                    <h4>Nike Air Max Exceed Running Shoes</h4>
                    <p> orange and blue offer bold style with vibrant colors,
                        exceptional comfort through cushioned Air Max technology,
                        and a modern design perfect for everyday wear and athletic activities.</p>
                </div>
                <button>Learn More</button>
            </div>
            <div className="rite3">
                <img src={hoodie} alt="" />
            </div>
        </div>
    )
}

export default Hero3
