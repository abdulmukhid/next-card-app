import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <ProductList />
    </main>
  );
}
