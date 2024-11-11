import React, { useContext } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import Item from '../components/item/item'
import './Category.css'
import dropdown_icon from '../components/asset/dropdown_icon.png'

const Category = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='category'>
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="category_Shop">
        <div className="line1">
          <p>
            <span>Showing 1-12</span>out of 36 product
          </p>
          <button>
            sort by <img src={dropdown_icon} alt="" />
          </button>
        </div>
        <div className="category_items">
          {all_product.map((item, i) => {
            if (props.category == item.category)
              return <Item key={i} id={item.id} titel={item.name} imag={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Category