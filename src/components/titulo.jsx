export default function Card({titulo, nota}) {
    return (
        <div className="flex flex-col items-center w-48 ">
        <img className="rounded" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yBYDzzmNoT5uXkXo3NGatLIANYK.jpg" alt="" />
        <span className="text -lg font-bold line-clamp-1">
            {titulo}
            </span>
        <div>
            <i></i>
            <span>{nota}</span>
        </div>
        <a href="" className="bg-red-500 text-white w-full rounded text-center">Detalhes</a>
        </div>
    )
}