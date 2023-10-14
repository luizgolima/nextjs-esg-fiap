import { Header } from "@/app/shared";
import bgImage from "../public/bg-image.jpeg";

export default function Home() {
  return (
      <>
          <Header />
          <main className="h-screen w-full bg-gray-50
                           flex flex-col items-center">
            <header style={{ backgroundImage: `url(${bgImage.src})` }}
                    className="w-screen bg-center bg-cover flex flex-col justify-center items-center mb-8 py-20">
                <h1 className="text-6xl font-bold mb-2 bg-green-800 border-2 border-gray-200 opacity-90 text-gray-50 py-4 px-8 rounded">Embrace ESG</h1>
                <h3 className="text-2xl font-bold">Junte-se a esta causa</h3>
            </header>
              <div aria-label="Area de cards"
                   className="w-1/2 flex justify-center items-center gap-4">
                  <section
                      aria-label="Card de pontos"
                      title="Veja quantos pontos você tem"
                      className="h-[400px] w-[600px] shadow-lg rounded3 p-4 hover:scale-105 active:scale-100
                                      transition-all flex flex-col justify-center items-center">
                      <p className="text-gray-950 text-center mb-4">Você ainda não tem pontos</p>
                      <h3 className="text-9xl text-gray-950 text-center mb-4">0</h3>
                      <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100
                                         transition-all text-gray-950 font-bold py-3 px-6 rounded">
                          Entrar ou fazer cadastro
                      </button>
                  </section>
                  <section
                      aria-label="Card explicando como funciona o sistema de pontuação"
                      title="Veja como funciona o sistema de pontuação"
                      className="h-[400px] w-[600px] shadow-lg rounded3 p-4 hover:scale-105 active:scale-100
                                      transition-all flex flex-col justify-center items-center">
                      <h3 className="text-3xl text-gray-950 text-center mb-4">
                          Sistema de pontuação
                      </h3>
                      <p className="w-4/5 text-gray-950 text-center mb-4">
                          Ganhe pontos ao participar de atividades ESG e troque por brindes
                      </p>
                      <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100
                                         transition-all text-gray-950 font-bold py-3 px-6 rounded">
                          Veja como funciona
                      </button>
                  </section>
                  <section
                      aria-label="Card para ver histórias de participantes"
                      title="Veja as histórias dos participantes do programa"
                      className="h-[400px] w-[600px] shadow-lg rounded3 p-4 hover:scale-105 active:scale-100
                                      transition-all flex flex-col justify-center items-center">
                      <h3 className="font-bold text-2xl text-gray-950 text-center mb-4">
                          Veja as histórias dos participantes do programa
                      </h3>
                      <p className="w-4/5 text-gray-950 text-center mb-4">
                          O nosso programa conta com 1000+ participantes que já estão fazendo a diferença
                      </p>
                      <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100
                                         transition-all text-gray-950 font-bold py-3 px-6 rounded">
                          Veja suas histórias
                      </button>
                  </section>
              </div>
          </main>
      </>
  )
}
