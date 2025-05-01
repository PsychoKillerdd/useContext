import { useContext } from "react"
import { BudgetContex } from "../context/BudgetContext"

export const useBudget = () => {
    const contex = useContext(BudgetContex)
    if(!contex){
        throw new Error('Deberias usar el BudgetContext para esta operacion')

    }
    return contex
}