import React from 'react'
import Hero1 from '../components/heros/hero1';
import Hero2 from '../components/heros/hero2';
import Hero3 from '../components/heros/hero3';
import Hero4 from '../components/heros/hero4';
import './shop.css'
import Popular from '../components/popular/popular';

export const Shop = () => {
    return (
        <>
        <div className='shop'>
            <div className="firstparte">
            <div className="first-ads"><Hero1 /></div>
            <div className="forthe-ads"><Hero4 /></div>
            </div>
            <div className="secendparte">
                <div className="secend-ads"><Hero2 /></div>
                <div className="therd-ads"><Hero3 /></div>
            </div>
        </div>
        <Popular/>
        </>
    )
}


export default Shop;