import { User } from 'lucide-react';
import Image from 'next/image';
import memoryspaces from '../assets/memoryspaces.png';
import {Copyright} from "@/components/Copyright";
export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/* Esquerda */}
    <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] relative items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
      {/* Blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      {/* Stripes */}
      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"/>

      { /* Login */ }
      <a target="_blank" href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex items-center gap-3 text-left hover:text-gray-50 transition-all">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="h-5 w-5 text-gray-500" />
        </div>
        <p className="max-w-[140px] text-sm leading-snug"><span className="underline">Crie sua conta</span> e guarde suas memórias</p>
      </a>
      { /* Hero */ }
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
      {/* CopyRight */}
      <Copyright />
    </div>


    {/* Direita */}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="flex flex-1 justify-center items-center">
        <p className="text-center leading-relaxed">Registre sua primeira memória :
          <a href="/register" className="text-blue-500 hover:text-blue-700 transition-all"> Crie Agora</a>
        </p>
      </div>
    </div>
  </main>
}
