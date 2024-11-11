import React from 'react'
import './popular.css'
import Item from '../item/item'
import img from '../asset/product_3.png'
import img2 from '../asset/product_1.png'
import data_product from '../asset/data'
//<Item key={1} id={1} titel={'Titel'} imag={img} new_price={25} old_price={30} />

function Popular() {
  return (
    <div>
      <div className="popular">
        <h1>Popular For Women</h1>
        <hr />
        <div className="p-items">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} titel={item.name} imag={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
         
        </div>
      </div>
    </div>
  )
}

export default Popular
