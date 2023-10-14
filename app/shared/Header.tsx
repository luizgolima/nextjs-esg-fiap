'use client'
import Link from "next/link";
import { useState } from "react";

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  return (
    <header className="h-28 w-screen px-4 lg:px-0 flex justify-between lg:justify-around items-center bg-[#F27E63] text-black">
        <h1 className="lg:text-3xl font-bold py-2 px-4
                        bg-green-800 text-gray-50 rounded border-2 border-gray-200">
            <Link href="/">Embrace ESG</Link>
        </h1>
        <nav className={`lg:flex gap-4 ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="h-[100svh] lg:h-auto w-full lg:w-auto absolute top-28 left-16 lg:static lg:top-0
                                   flex flex-col lg:flex-row bg-green-800 lg:bg-[#F27E63] gap-4 z-10">
                <li className="mx-4 lg:mx-auto mt-4 lg:mt-auto">
                    <Link href="/" className="hover:underline text-gray-50 lg:text-gray-950">
                        Horta Doméstica
                    </Link>
                </li>
                <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                    <Link href="/" className="hover:underline text-gray-50 lg:text-gray-950">
                        Reciclagem
                    </Link>
                </li>
                <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                    <Link href="/" className="hover:underline text-gray-50 lg:text-gray-950">
                        Alimentação Saudável
                    </Link>
                </li>
                <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                    <Link href="/" className="hover:underline text-gray-50 lg:text-gray-950">
                        Atividades Físicas
                    </Link>
                </li>
                <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                    <Link href="/" className="hover:underline text-gray-50 lg:text-gray-950">
                        Voluntariado
                    </Link>
                </li>
            </ul>
        </nav>
        <button className="hidden lg:block bg-white hover:bg-gray-200 hover:scale-105 active:scale-100
                           transition-all text-gray-950 font-bold py-3 px-6 rounded">
            Entrar
        </button>
        <button
            id="menu-button"
            className="lg:hidden text-gray-50 lg:text-gray-950 text-4xl focus:outline-none"
            onClick={toggleMenu}
        >
            ☰
        </button>
    </header>
  )
}