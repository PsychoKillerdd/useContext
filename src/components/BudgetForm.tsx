import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm() {
  const [budget,setBudget] = useState(0)
  const {dispatch} = useBudget()


  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setBudget(e.target.valueAsNumber)
  }
  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0},[budget]) 
    const hadleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault();
      console.log('anadir presupuesto')
      dispatch({type:'add-budget', payload:{budget} })

    }

    return (
    <form action="" className="space-y-5" onSubmit={hadleSubmit}>
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                Definir Presupuesto
            </label>
        </div>
        <input
        id="budgetID" 
        type="number"
        className="w-full bg-white border border-gray-200 p-2"
        placeholder="Define TU presupuesto"
        name="budget"
        value={budget}
        onChange={hadleChange}
        />
        <input 
        type="submit"
        value='definir presupuesto'
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40" 
        disabled={isValid}
        />
    </form>
  )
}
