import { chefType } from "./chef"
import { ingredientesType } from "./ingredientes"

export enum DIFICULDADE {
    UM=1,
    DOIS=2,
    TRES=3
}

export interface ReceitasInterface {
    ingredientes: ingredientesType[]
    modoPreparo: string | undefined
    tempo: number
    dificuldade: DIFICULDADE
    img: string
    categoria: string[]
    chef: chefType
}