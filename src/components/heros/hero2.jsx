import React from 'react'
import whatch from '../asset/watch.png'
import './hero2.css'

function Hero2() {
    return (
        <div className="main2">
            <div className="left2">
                <div className="discription2">
                    <div className="date2">december 10-28</div>
                    <h4>Nike Air Max Exceed Running Shoes</h4>
                    <p> orange and blue offer bold style with vibrant colors,.</p>
                </div>
                <button>Learn More</button>
            </div>
            <div className="rite2">
                <img src={whatch} alt="" />
            </div>
        </div>
    )
}

export default Hero2
