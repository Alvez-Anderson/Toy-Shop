"use client"
import Image from 'next/image'
import Card from '@/components/card'
import Titulo from '@/components/titulo'
import { useEffect, useState } from 'react'

export default function Home() {

  const[brinquedos, setBrinquedos] = useState([])
  const[brinquedosMeninas, setBrinquedosMeninas] = useState([])
  

  const options = {
    method: 'GET',
    headers:{
      accept: 'application/json'
    }
  }

  useEffect(() => {
    fetch('http://localhost:3005/brinquedos_meninos', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setBrinquedos(data); // Atualize o estado com os dados obtidos
    })
    .catch(err => console.error(err));

  }, [])

  useEffect(() => {
    fetch('http://localhost:3005/brinquedos_meninas', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setBrinquedosMeninas(data); // Atualize o estado com os dados obtidos
    })
    .catch(err => console.error(err));

  }, [])
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="flex gap-4 justify-between items-end bg-red-500	 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-slate-300 font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
          <path stroke-linecap="round" strokeLinejoin-="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>

          Toy Shop
        </h1>
        <a href ="#"  className= "text-slate-300">Sobre</a>
      </nav>
      
      <titulo>Popular entre meninos</titulo>
      <section className="flex flex-wrap gap-2 p-4">
         {brinquedos && brinquedos.map(brinquedo => <Card key={brinquedo.id} brinquedo={brinquedo} />)}
      </section>

      <titulo>Popular entre meninas</titulo>
      <section className="flex flex-wrap gap-2 p-4">
         {brinquedosMeninas && brinquedosMeninas.map(brinquedo => <Card key={brinquedo.id} brinquedo={brinquedo} />)}
      </section>

    </main>
  )
}
