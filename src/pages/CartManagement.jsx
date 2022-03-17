import { CartItemCard } from "../Components/CartItemCard";
import { useCardManagementContext } from "../context/cart-management-context"

export function CartManagement(){
    const { cartList } = useCardManagementContext();
    return(
        <div className="m-3">
            <h2 className="heading h2">My Cart</h2>
            {cartList.map(
                cartItem => (
                    <CartItemCard key={cartItem.id} cartItem={ cartItem }/>
                )
            )}
        </div>
    )
}