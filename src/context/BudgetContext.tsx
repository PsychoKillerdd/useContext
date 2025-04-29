import { useReducer,createContext,Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer,BudgetState,initialState } from "../reducers/budget-reducers"
type BudgetContexProps = {
    state: BudgetState
    dispatch:Dispatch<BudgetActions>
}
type BudgetProviderProps = {
    children:ReactNode
}
export const BudgetContex = createContext<BudgetContexProps>(null!)
export const BudgetProvider = ({children}:BudgetProviderProps) => {
const [state,dispatch] = useReducer(budgetReducer,initialState)
    return(
        <BudgetContex.Provider
        value={{
            state,dispatch
        }}>
            {children}
        </BudgetContex.Provider>
    )
}