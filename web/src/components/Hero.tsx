import Image from "next/image";
import memoryspaces from "@/assets/memoryspaces.png";

export function Hero() {
  return(
    <div className="space-y-5">
      <Image src={memoryspaces} alt="MemorySpaces Logo" className="w-[300px] via-violet-50"/>
      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">Suas memórias em um só lugar</h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos, fotos, vídeos e muito mais.
        </p>
      </div>
      <a className="inline-block rounded-full bg-gray-200 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-blue-600 transition-all" href="">GUARDAR LEMBRANÇA</a>
    </div>
  )
}