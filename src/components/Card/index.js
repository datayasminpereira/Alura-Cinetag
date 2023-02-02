import { useFavoritoContext } from 'contexts/Favoritos'
import React from 'react'
import styles from "./Card.module.css"
import iconeFavoritar from "./favoritar.png"
import iconeDesafavoritar from "./desfavoritar.png"
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {

  const { favorito, adicionarFavorito} = useFavoritoContext()

  const ehFavorito = favorito.some((fav) => fav.id === id)

  const icone = !ehFavorito ? iconeFavoritar : iconeDesafavoritar

  return (
    <div className={styles.container}>

        <Link className={styles.link} to={`/${id}`}>
          <img src={capa} alt={titulo} className={styles.capa}></img>
          <h2>{titulo}</h2>
        </Link>

        <img 
            src={icone} 
            alt="Favoritar filme" 
            className={styles.favoritar}
            onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }}>
        </img>
    </div>
  )
}
