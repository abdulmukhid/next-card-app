// src/pages/api/products.js

export default function handler(req, res) {
  const products = [
    {
      id: 1,
      image: "/images/chair.jpg",
      title: "Modern Chair",
      price: "$120",
      rating: 4,
      inStock: true,
      onSale: false,
    },
    {
      id: 2,
      image: "/images/table.jpg",
      title: "Wooden Table",
      price: "$220",
      rating: 5,
      inStock: true,
      onSale: true,
    },
    {
      id: 3,
      image: "/images/sofa.jpg",
      title: "Luxury Sofa",
      price: "$550",
      rating: 3,
      inStock: false,
      onSale: false,
    },
  ];

  res.status(200).json(products);
}
export default function handler(req, res) {
  const products = [
    {
      id: 1,
      image: "/images/chair.jpg",
      title: "Modern Chair",
      price: "$120",
      rating: 4,
      inStock: true,
      onSale: false,
    },
    {
      id: 2,
      image: "/images/table.jpg",
      title: "Wooden Table",
      price: "$220",
      rating: 5,
      inStock: true,
      onSale: true,
    },
    {
      id: 3,
      image: "/images/sofa.jpg",
      title: "Luxury Sofa",
      price: "$550",
      rating: 3,
      inStock: false,
      onSale: false,
    },
  ];

  res.status(200).json(products);
}
