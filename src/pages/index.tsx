import Head from 'next/head';
import Header from '@/components/Header'; // já criado antes
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const produtosPrincipais = [
    {
      id: 1,
      name: '指輪',
      description: 'いい指輪だぜ',
      image: '/produto-a.jpg',
      link: 'https://www.amazon.co.jp/dp/XXXXXXX',
    },
    {
      id: 2,
      name: 'ネックレス',
      description: 'きれいなネックレス',
      image: '/produto-b.jpg',
      link: 'https://www.amazon.co.jp/dp/YYYYYYY',
    },
    {
      id: 3,
      name: '耳飾り',
      description: 'きれいな耳飾り',
      image: '/produto-c.jpg',
      link: 'https://www.amazon.co.jp/dp/ZZZZZZZ',
    },
  ];

  return (
    <>
      <Head>
        <title>Yozolaan | 日本のお得商品セレクション</title>
        <meta name="description" content="Yozolaanは、日本市場向けのおすすめ商品を紹介するモバイルファーストなサイトです。" />
      </Head>

      {/* HEADER */}
      <Header />

      {/* CONTAINER INTRODUÇÃO */}
      <main className="pt-20 px-4 pb-10 max-w-md mx-auto text-center">
        <section className="bg-[var(--background)] border rounded-xl p-6 shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Yozolaanへようこそ</h1>
          <p className="text-sm text-[var(--foreground)]">
            日本のお得商品をセレクトして、Amazonなどで簡単に購入できるリンクを提供しています。
          </p>
        </section>

        {/* SCROLL HORIZONTAL DE PRODUTOS */}
        <section className="mt-10 text-left">
          <h2 className="text-lg font-bold text-[var(--foreground)] mb-2">🛍️ 注目の商品</h2>
          <div className="overflow-x-auto flex space-x-4 pb-2">
            {produtosPrincipais.map((product) => (
              <div key={product.id} className="min-w-[250px] flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-[var(--foreground)] p-4 border-t bg-[var(--background)]">
        &copy; 2025 Yozolaan. Todos os direitos reservados.
      </footer>
    </>
  );
}
