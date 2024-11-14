import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../asset/cart_cross_icon.png'
import './CardItem.css'
const CardItem = () => {
    const { GetTotalAmount,DileteFromcard,all_product, CardItems } = useContext(ShopContext)

    return (
        <div className='CardItem'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Titel</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {all_product.map((e) => {
                        if (CardItems[e.id] > 0) {
                            return <tr>
                                <th><img className='product_Cart_item' src={e.image} alt="" /></th>
                                <th>{e.name}</th>
                                <th>${e.new_price}</th>
                                <th>{CardItems[e.id]}</th>
                                <th>${e.new_price * CardItems[e.id]}</th>
                                <th><img onClick={()=>{DileteFromcard(e.id)}} src={remove_icon} alt="" /></th>
                            </tr>
                        }
                    }

                    )}
                </tbody>
            </table>
            <div className="decend_part">
                <div className="third">
                    <div className="chekout">
                        <div className="card_item_chckout">
                            <p>Prodyc Price</p>
                            <p>${GetTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="card_item_chckout">
                            <p>Shiping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="card_item_chckout">
                            <h3>Total Price</h3>
                            <h3>${GetTotalAmount()}</h3>
                        </div>

                    </div>
                    <button>Check out</button>
                </div>
                <div className="promo_code">
                    <input type="text" placeholder='Enter Promo Code If You Have' />
                    <button>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default CardItem
