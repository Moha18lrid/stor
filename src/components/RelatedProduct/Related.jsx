import React from 'react'
import './Related.css'
import Item from '../item/item'
import data_product from '../asset/data'

function Related() {
  return (
    <div>
      <div>
      <div className="Related_Product">
        <h1>Related Product</h1>
        <hr />
        <div className="p-items">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} titel={item.name} imag={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Related

