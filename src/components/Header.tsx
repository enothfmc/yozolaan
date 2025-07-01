// src/components/Header.tsx
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md bg-[#F9F6F1] sticky top-0 z-50">
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="メニューを開く">
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-[#5C4438]" />
          <span className="block w-6 h-0.5 bg-[#5C4438]" />
          <span className="block w-6 h-0.5 bg-[#5C4438]" />
        </div>
      </button>
      <h1 className="text-lg font-bold text-[#5C4438] absolute left-1/2 transform -translate-x-1/2">
        Yozolaan
      </h1>
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#F9F6F1] border-t z-40 shadow-md">
          <ul className="p-4 space-y-2 text-[#5C4438]">
            <li><a href="#" className="block hover:text-[#A67C52]">ホーム</a></li>
            <li><a href="#produtos" className="block hover:text-[#A67C52]">商品一覧</a></li>
            <li><a href="#" className="block hover:text-[#A67C52]">お問い合わせ</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
