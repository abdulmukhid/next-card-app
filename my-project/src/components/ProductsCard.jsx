import Image from "next/image";

export default function ProductCard({ image, title, description }) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="object-cover w-full h-64"
        priority   // 👈 This makes Next.js preload this image
      />

      {/* Content */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-md text-gray-600 mb-4">{description}</p>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </div>
  );
}
