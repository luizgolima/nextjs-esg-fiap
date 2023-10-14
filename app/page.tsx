import { Header } from "@/app/shared";
import bgImage from "../public/bg-image.jpeg";

export default function Home() {
  return (
      <>
          <Header />
          <main className="w-full bg-gray-50 flex flex-col items-center">
              <header style={{backgroundImage: `url(${bgImage.src})`}}
                      className="w-screen bg-center bg-cover flex flex-col justify-center items-center mb-8 py-20">
                  <h1 className="bg-green-800 opacity-90 rounded border-2 border-gray-200
                                 font-bold text-2xl lg:text-6xl text-gray-50 mb-2 py-4 px-8">
                      Embrace ESG
                  </h1>
                  <h3 className="lg:text-2xl font-bold">Junte-se a esta causa</h3>
              </header>
              <div aria-label="Area de cards"
                   className="w-1/2 sm:w-screen sm:px-8 flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                  <section
                      aria-label="Card de pontos"
                      title="Veja quantos pontos você tem"
                      className="h-[350px] w-[300px] lg:h-[400px] lg:w-1/3 shadow-lg rounded3 p-4 hover:scale-105 active:scale-100
                                      transition-all flex flex-col justify-center items-center">
                      <p className="text-gray-950 text-center mb-4">Você ainda não tem pontos</p>
                      <h3 className="text-9xl text-gray-950 text-center mb-4">0</h3>
                      <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100
                                         transition-all text-gray-950 font-bold py-2 px-4 rounded">
                          Entrar ou cadastre-se
                      </button>
                  </section>
                  <section
                      aria-label="Card explicando como funciona o sistema de pontuação"
                      title="Veja como funciona o sistema de pontuação"
                      className="h-[350px] w-[300px] lg:h-[400px] lg:w-1/3 shadow-lg rounded3 p-4 hover:scale-105 active:scale-100
                                      transition-all flex flex-col justify-center items-center">
                      <h3 className="font-bold lg:text-3xl text-gray-950 text-center mb-4">
                          Sistema de pontuação
                      </h3>
                      <p className="w-4/5 text-gray-950 text-center mb-4">
                          Ganhe pontos ao participar de atividades ESG e troque por brindes
                      </p>
                      <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100
                                         transition-all text-gray-950 font-bold py-2 px-4 rounded">
                          Veja como funciona
                      </button>
                  </section>
                  <section
                      aria-label="Card para ver histórias de participantes"
                      title="Veja as histórias dos participantes do programa"
                      className="h-[350px] w-[300px] lg:h-[400px] lg:w-1/3 shadow-lg rounded3 p-4 hover:scale-105 active:scale-100
                                      transition-all flex flex-col justify-center items-center">
                      <h3 className="font-bold lg:text-3xl text-gray-950 text-center mb-4">
                          Histórias dos participantes do programa
                      </h3>
                      <p className="w-4/5 text-gray-950 text-center mb-4">
                          O nosso programa conta com 1000+ participantes que já estão fazendo a diferença
                      </p>
                      <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100
                                         transition-all text-gray-950 font-bold py-2 px-4 rounded">
                          Veja suas histórias
                      </button>
                  </section>
              </div>
          </main>
      </>
  )
}
