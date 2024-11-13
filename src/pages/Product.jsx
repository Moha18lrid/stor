import React, { useContext } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'

function Product() {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product =all_product.find((e)=>e.id===Number(productId))
    console.log(productId)
  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product
