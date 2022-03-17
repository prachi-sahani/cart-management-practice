import { useCardManagementContext } from "../context/cart-management-context";

export function ProductCard({ product }){
  const {  addToCart } = useCardManagementContext();
    return(
        <div className="px-2">
          <h3>Name: {product.name}</h3>
          <p>Price: {product.price}</p>
          <button className="btn-basic btn-primary btn-sm" onClick={ () => addToCart(product) }>Add To Cart</button>
          <hr></hr>
        </div>
    );
}