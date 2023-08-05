import { ReceitasInterface } from "@/app/types/receitas"
import { useState } from "react"

export function NovaReceita() {
    const [receita, setReceita] = useState<ReceitasInterface | null>()

    const [modoPreparo, setModoPreparo] = useState<string>('')

    const onSubmit = () => {
        setReceita({
            modoPreparo
        })
    }

    return (
        <>
            <form onSubmit={}>
                <input type="text" value={modoPreparo} onChange={e => setModoPreparo(e.target.value)} />
            </form>
        </>
    )
}