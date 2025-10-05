import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-10 text-gray-900">Our Products</h1>
      <ProductList />
    </main>
  );
}
