import Link from "next/link";


export default function () {
  return (
    <header className="h-28 flex justify-around items-center bg-[#F27E63] text-black">
        <h1 className="text-3xl font-bold py-2 px-4 bg-green-800 text-white rounded border-2 border-gray-200">
            <Link href="/">Embrace ESG</Link>
        </h1>
        <nav>
            <ul className="flex justify-around items-center gap-4">
                <li><Link href="/" className="text-gray-950">Horta Doméstica</Link></li>
                <li><Link href="/" className="text-gray-950">Reciclagem</Link></li>
                <li><Link href="/" className="text-gray-950">Alimentação Saudável</Link></li>
                <li><Link href="/" className="text-gray-950">Atividades Físicas</Link></li>
                <li><Link href="/" className="text-gray-950">Voluntariado</Link></li>
            </ul>
        </nav>
        <button className="bg-white hover:bg-gray-200 hover:scale-105 active:scale-100
                           transition-all text-gray-950 font-bold py-3 px-6 rounded">
            Entrar
        </button>
    </header>
  )
}