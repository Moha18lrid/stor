import React,{createContext, useState} from 'react'
import all_product from '../asset/all_product'

export const ShopContext = createContext(null)
const GetDifultCart = () =>{
  let card = {}
  for (let index = 0; index < all_product.length+1; index++) {
    card[index] = 0
  }
  return card
}
const ShopContexProvider = (props) => {
    const [CardItems,SetCardItems]  = useState(GetDifultCart())
    const AddToCard = (ItemsId)=>{
      SetCardItems((prev)=>({...prev,[ItemsId]:prev[ItemsId]+1}))
      console.log(CardItems)
    }
    const DileteFromcard = (ItemsId)=>{
      SetCardItems((prev)=>({...prev,[ItemsId]:prev[ItemsId]-1}))
    }
    const GetTotalAmount = ()=>{
      let total=0
      for(const i in CardItems){
        if(CardItems[i]>0){
          let pinfo= all_product.find((product)=>product.id===Number(i))
          total+=pinfo.new_price*CardItems[i]
        } 
      }
      return total
    }
    const GetTotalItems = ()=>{
      let total=0
      for(const i in CardItems){
        if(CardItems[i]>0){
          total+=CardItems[i]
        } 
      }
      return total
    }
    const ContexValue ={GetTotalItems,GetTotalAmount,all_product,CardItems,AddToCard,DileteFromcard}
    
  return(
    <ShopContext.Provider value={ContexValue}>
        {props.children}
    </ShopContext.Provider>
   )
  }


export default ShopContexProvider;