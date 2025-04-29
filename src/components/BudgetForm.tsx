import { useState } from "react"

export default function BudgetForm() {
  const [budget,setBudget] = useState(0)
  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setBudget(e.target.valueAsNumber)
  }

    return (
    <form action="" className="space-y-5">
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
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase" 
        />


    </form>
  )
}
