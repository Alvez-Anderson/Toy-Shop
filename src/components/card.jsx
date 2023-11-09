export default function Card({titulo, nota}) {
    return (
        <div className="flex flex-col items-center w-48 ">
        <img className="rounded" src="https://img.terabyteshop.com.br/produto/g/console-playstation-5-fifa-23-825gb-white-com-1-controle-cfi-1114a01x_153637.png" alt="" />
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