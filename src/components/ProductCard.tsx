// src/components/ProductCard.tsx

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#FFFDF9]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h4 className="text-lg font-bold text-[#5C4438]">{product.name}</h4>
      <p className="text-sm text-[#6E5843] mb-3">{product.description}</p>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#A67C52] text-white text-sm px-4 py-2 rounded-xl hover:bg-[#916842] transition"
      >
        Amazonで見る
      </a>
    </article>
  );
}
