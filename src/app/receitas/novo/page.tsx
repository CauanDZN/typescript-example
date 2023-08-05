'use client'

import { DIFICULDADE, ReceitasInterface } from "@/app/types/receitas"
import { useState } from "react"

export default function NovaReceita() {
    const [receita, setReceita] = useState<ReceitasInterface | null>()

    const [modoPreparo, setModoPreparo] = useState<string>('')
    const [tempoPreparo, setTempoPreparo] = useState<string>('')
    const [dificuldade, setDificuldade] = useState<DIFICULDADE>(1)

    const onSubmit = () => {
        setReceita({
            modoPreparo
        })
    }

    return (
            <form>
                <input type="text" value={modoPreparo} onChange={e => setModoPreparo(e.target.value)} />
                <input type="text" value={tempoPreparo} onChange={e => setTempoPreparo(e.target.value)} />
                <select name="" id="" value={dificuldade} onChange={e => setDificuldade(Number(e.target.value))} />
                    {
                        Object.entries(DIFICULDADE).map(
                            ([chave, valor]) => {
                                return (
                                    <option value={valor}>{chave}</option>
                                )
                            }
                        )
                    }
            </form>
    )
}