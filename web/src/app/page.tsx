
export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/* Esquerda */}
    <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] relative items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
      {/* Blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      {/* Stripes */}
      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"/>
    </div>
    {/* Direita */}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="flex flex-1 justify-center items-center">
        <p className="text-center leading-relaxed">Registre sua primeira memória :
          <a href="/register" className="text-blue-500 hover:text-blue-700"> Crie Agora</a>
        </p>
      </div>
    </div>
  </main>
}
