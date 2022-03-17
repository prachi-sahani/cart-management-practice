import { createContext, useContext, useState } from "react";

const CartManagementContext = createContext();

function CartManagementProvider({children}){
    const [cartCount, setCartCount] = useState(0);
    const [cartList, setCartList] = useState([]);

    function updateCartCount(){
        setCartCount(count=> count+1);
    }

    function addToCart(item){
        updateCartCount();
        const isProductInCart = cartList.find(cartItem => cartItem.id === item.id)
        if(isProductInCart){
            setCartList(cartList.map(cartItem => {
                console.log(cartItem)
                if(item.id === cartItem.id){
                    return {...item, quantity:cartItem.quantity+1};
                }
                return cartItem;
            }))
        }
        else{

            setCartList([...cartList,{...item, quantity:1}]);
        }
    }

    return(
        <CartManagementContext.Provider value={{cartCount, cartList, addToCart}}>
            {children}
        </CartManagementContext.Provider>
    )
}

const useCardManagementContext = () => useContext(CartManagementContext);

export { CartManagementProvider, useCardManagementContext };