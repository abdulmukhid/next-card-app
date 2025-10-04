import ProductsCard from "./ProductsCard";

export default function ProductsList() {
  const products = [
    {
      id: 1,
      image: "/images/chair.jpg",
      title: "Modern Chair",
      description: "A stylish and comfortable modern chair.",
    },
    {
      id: 2,
      image: "/images/blanket.jpg",
      title: "Wooden Table",
      description: "A premium quality wooden dining table.",
    },
    {
      id: 3,
      image: "/images/vase.jpg",
      title: "Luxury Sofa",
      description: "Elegant sofa with soft cushions for comfort.",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}
