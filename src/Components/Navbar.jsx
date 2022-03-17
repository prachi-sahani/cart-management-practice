import { useCardManagementContext } from "../context/cart-management-context";

export function Navbar() {
  const {cartCount} = useCardManagementContext();
  return (
    <div className="badge badge-icon-sm m-3">
      <i className="material-icons badge-icon">shopping_cart</i>
      <div className="badge-icon-text bg-green">{cartCount}</div>
    </div>
  );
}
