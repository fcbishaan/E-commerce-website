import React,{createContext} from "react";
import all_product from "../components/assets/all_product";
import { useState } from "react";
export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());
    
    
   const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
   }
   const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let iteminfo = all_product.find((product) => product.id === Number(item));
            totalamount += iteminfo.new_price * cartItems[item];
        }
    }
    return totalamount;
}
const geetTotalCartItems =() =>{
    let totalItem=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem+= cartItems[item]
        }
    }
}
   const contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
         </ShopContext.Provider>
    )
}

export default ShopContextProvider; 