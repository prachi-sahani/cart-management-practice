import { useState } from "react";
import { ProductCard } from "../Components/ProductCard";

export function ProductListing() {
  const [productList, setProductList] = useState([
    {
      id:1,
      name: "Aloo",
      price: 12,
    },
    {
      id:2,
      name: "Bhindi",
      price: 15,
    },
    {
      id:3,
      name: "Karela",
      price: 20,
    },
    {
      id:4,
      name: "Lauki",
      price: 30,
    },
  ]);
  return (
    <div>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
