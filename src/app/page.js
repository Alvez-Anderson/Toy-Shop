"use client"
import Image from 'next/image'
import Card from '@/components/card'
import Titulo from '@/components/titulo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="flex gap-4 justify-between items-end bg-red-500	 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-slate-300 font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>

          Toy Shop
        </h1>
        <a href className= "text-slate-300">Sobre</a>
      </nav>
      
      <titulo>Popular entre meninos</titulo>
      <section className="flex flex-wrap gap-2 p-4">
      <Card titulo = "PlayStation 5" nota="8,5" poster="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABgcIBAUDAf/EAD0QAAEDAwIDAwYKCwAAAAAAAAEAAgMEBREGIRITMQdBYSJRgZGxwQgUFSMkUnFzkqMzQkNVYnKDlKHC0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQEAAwEAAAAAAAAAAAAAAAABAhExEv/aAAwDAQACEQMRAD8AvFERB8JaqCAv58jImsZxuc9wADfPkrm+XLR+9aH+5Z/1QntbrpLfV6feZXMpJ6l0NSAdnt4cgHwz7FG/lSweZi1MdxNrgjuFLNJAynnjm5wc5hjcHAhuxOR47LqVU9lVZ8f1nqHkSF1DSwQNgZ3M4xl2PtLSrWUs0oiIoCIiAiIgIiIKv+EBCX6Wt87R+huDC4+YFjh7SFRnMd5z61oXtvi49AVT8Z5c0Lvs+cas65K3jxF0/B5p/ot+qyN5J4o8/wArc/7K31WPYBBy9JVkx/b18jh9ga1vuKs5ZvVERFAREQEREBERBEe1eLnaCuzMZxC5/wCFpcPYsyrVGvIPjOk7nAc/OU0rNvGNwWVmnLQfOFrEaL7FIuVoOhJGDK+aT81w9ynyh/ZbFyNEWJn1qRrvxZd71MFKCIigIiICIiAiIg83UDOZbnR/XPD6wQsiwnFOw/wg/wCFr29HFKz7wLI1dEKd1TC3pE57B6CR7lvHiNN6FnhZZLbbo3EzUVDStlBaQBxRNI379lLVDdMMENzukY25baRvqgYpkpVERFkEREBERARF+OcGtLnEBoGST3IPOvpxSs+8HsKylqFnDd7tG0dKuoaB/UctM1N+tV5aY7TXwVZgd84YX8QbnON+h6FZ0vEedaV8WNjd5WeuchbnEaHtLeHUOoAOglpx+S1SoKOW6J7b7fXuY4Nknh4SRs7ELOikTHNe0OYQ5pGxByCpVcl0mmhp/o0sUUpIw6WMvaPQHN9q54LlI5mHhjntwC5owHbDcDJwPDJXJqSugo4Z56t4ZBTxl8jj3NAyVTFfPr25VUlxo6C+UzKgNdHHAyQNaz9UbdevXvySrJEXlUXKUM4Ywxr35DXOGQ3brjIz3bZC6LXPNNTfSZIpJgfKdHGYx4eSXOx61QtDPry2VUdyrKC91MdMCZWVEb3NMe3EN+mw692AfOrl0zXxVrY54Hh8U8Yex/1gRkFSyCQoiLKi8vVFLV12nrhR24RmpngdGwSO4W77HfB7sr1EQUdpbTur9LXaWWXTk9TSTN4JPi9RCSMHIc0F+/eMHHVRq4ad1JJquouLdL14p33F1SAeHj4TJx9AcZx4+laWRX1REIdTVlRNim0pfXHPWQU8Y9ZlXy7MrDdrBRV8FzjZFDNPzoIuaHuaSPKzjYdB0PXKmiJsRfVlgqr1UUcDOA0D6mN9a1zsF0bPK4cd/EWtB8MqUDpuiKD8PTplRfSOn6qy1NXDJy20LJ5HUQDskRvPEGkd3CXOA8AFKUQEREH/2Q=="/>
      <Card titulo = "Bicicleta" nota="8,5" poster="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSMRCjC6XQcMmorkviE1yala2uhBRhd-z0PFNZBNDCjEXEzIrbFYVekRWD-kCI-AgUzS9D_vd_BzYzY7b_w0QuOmHurHfqfxoJRDHP57foYnMRdMivNL2_ojSLxqHRHvlx21Oljg_x1w&usqp=CAc"/>
      </section>
      <titulo>Popular entre meninas</titulo>
      <titulo>Para bebês</titulo>


    </main>
  )
}
