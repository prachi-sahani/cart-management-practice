export function CartItemCard({ cartItem }){
    return(
        <div>
            <h3>{cartItem.name}</h3>
            <p>{cartItem.price}</p>
            <p>{cartItem.quantity}</p>

        </div>
    )
}