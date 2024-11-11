import React,{createContext} from 'react'
import all_product from '../asset/all_product'

export const ShopContext = createContext(null)

const ShopContexProvider = (props) => {
    const ContexValue ={all_product}
  return(
    <ShopContext.Provider value={ContexValue}>
        {props.children}
    </ShopContext.Provider>
   )
  }


export default ShopContexProvider;