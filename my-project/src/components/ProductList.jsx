"use client";
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.price}
        />
      ))}
    </div>
  );
}
