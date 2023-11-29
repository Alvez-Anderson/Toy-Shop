"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from 'react';

export default function Card({brinquedo}) {

    const [favorito, setFavorito] = useState(false)
    const {nome, preco, imagem} = brinquedo

    function favoritar(){
        setFavorito(true)
    }

    function desfavoritar(){
        setFavorito(false)
    }

    return (
        <div className="flex flex-col items-center w-48 relative">
            {
                favorito ? 
                <FavoriteIcon onClick={desfavoritar} className='text-red-700 absolute top-2 right-2'/>:
                <FavoriteBorderIcon onClick={favoritar} className='text-white cursor pointer absolute top-2 right-2'/>
            }
        <img className="rounded" src={imagem} alt="" />
        <span className="text -lg font-bold line-clamp-1">
            {nome}
            </span>
        <div>
            <i></i>
            <span>{preco}</span>
        </div>
        <a href="#" className="bg-blue-400 text-white w-full rounded text-center">Detalhes</a>
        </div>
    )
}