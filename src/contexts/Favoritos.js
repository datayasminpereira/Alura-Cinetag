import { createContext, useContext, useState } from "react";

// objeto contexto
export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

// componente para provar
export default function FavoritosProvider({ children }){

    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

// hook personalizado usando o objeto contexto
export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext)

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id) // retorna true ou false

        let novaLista = [...favorito]

        if(!favoritoRepetido) { // so entra se "favoritoRepetido" for false 
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }

        // so vem pra se "favoritoRepetido" for true
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id)
        return setFavorito(novaLista)

    }

    return {
        favorito,
        adicionarFavorito
    }
}