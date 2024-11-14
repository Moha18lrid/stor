import React, { useContext } from 'react'
import './Breadcrum.css'
import { ShopContext } from '../context/ShopContext'

const Breadcrum = (props) => {
    const {product} = props
    const {AddToCard} = useContext(ShopContext)
    return (
        <div className='mai-Breadcrum'>
            <div class="container">
                <div class="single-product">
                    <div class="row">
                        <div class="col-6">
                            <div class="product-image">
                                <div class="product-image-main">
                                    <img src={product.image} alt="" id="product-main-image" />
                                </div>
                                <div class="product-image-slider">
                                    <img src={product.image} alt="" class="image-list" />
                                    <img src={product.image} alt="" class="image-list" />
                                    <img src={product.image} alt="" class="image-list" />
                                    <img src={product.image} alt="" class="image-list" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="breadcrumb">
                                <span><a href="#">Home</a></span>
                                <span><a href="#">Product</a></span>
                                <span class="active">T-shirt</span>
                            </div>

                            <div class="product">
                                <div class="product-title">
                                    <h2>Half Sleve T-shirt for Men</h2>
                                </div>
                                <div class="product-rating">
                                    <span><i class="bx bxs-star"></i></span>
                                    <span><i class="bx bxs-star"></i></span>
                                    <span><i class="bx bxs-star"></i></span>
                                    <span><i class="bx bxs-star"></i></span>
                                    <span><i class="bx bxs-star"></i></span>
                                    <span class="review">(47 Review)</span>
                                </div>
                                <div class="product-price">
                                    <span class="offer-price">$99.00</span>
                                    <span class="sale-price">$129.00</span>
                                </div>

                                <div class="product-details">
                                    <h3>Description</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                                </div>
                                <div class="product-size">
                                    <h4>Size</h4>
                                    <div class="size-layout">
                                        <input type="radio" name="size" value="S" id="1" class="size-input" />
                                        <label for="1" class="size">S</label>

                                        <input type="radio" name="size" value="M" id="2" class="size-input" />
                                        <label for="2" class="size">M</label>

                                        <input type="radio" name="size" value="L" id="3" class="size-input" />
                                        <label for="3" class="size">L</label>

                                        <input type="radio" name="size" value="XL" id="4" class="size-input" />
                                        <label for="4" class="size">XL</label>

                                        <input type="radio" name="size" value="XXL" id="5" class="size-input" />
                                        <label for="5" class="size">XXL</label>
                                    </div>
                                </div>
                                <div class="product-color">
                                    <h4>Color</h4>
                                    <div class="color-layout">
                                        <input type="radio" name="color" value="black" class="color-input" />
                                        <label for="black" class="black"></label>
                                        <input type="radio" name="color" value="red" class="color-input" />
                                        <label for="red" class="red"></label>

                                        <input type="radio" name="color" value="blue" class="color-input" />
                                        <label for="blue" class="blue"></label>
                                    </div>
                                </div>
                                <span class="divider"></span>

                                <div class="product-btn-group">
                                    <div class="button buy-now"><i class='bx bxs-zap' ></i> Buy Now</div>
                                    <div onClick={()=>{AddToCard(product.id)}} class="button add-cart" ><i class='bx bxs-cart' ></i> Add to Cart</div>
                                    <div class="button heart"><i class='bx bxs-heart' ></i> Add to Wishlist</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrum