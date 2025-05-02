import { categories } from "../db/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { DraftExpense, Expense, category } from '../types/index';




export default function ExpenseForm() {
   const [expense,SetEexpense] =  useState<DraftExpense>({
    amount:0,
    expenseName:'',
    category:"",
    date: new Date()

   })

  return (
    <form action="">
        <legend
        className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
            Nuevo Gasto
        </legend>

        <div className="flex flex-col gap-2">
            <label htmlFor="eName" className="text-xl">Nombre Gasto:</label>
            <input 
            type="text"
            id="eName"
            placeholder="Anade el nombre del gasto"
            className="bg-slate-100 p-2"
            name="eName"
            value={expense.expenseName}
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-xl">Cantidad del gasto:</label>
            <input 
            type="number"
            id="amount"
            placeholder="gasto"
            className="bg-slate-100 p-2"
            name="amount"
            value={expense.amount}
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-xl">Categoria:</label>
            <select 
            id="category"
            className="bg-slate-100 p-2"
            name="category"
            value={expense.category}
             >
                <option value="">
                    ---Seleccione---
                </option>
                {categories.map(category => (
                    <option value={category.id} key={category.id}>   
                        {category.name}</option>
                ))}

                </select>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-xl">Fecha gasto:</label>
            <DatePicker
                className="bg-slate-100 p-2 border-0"
                value={expense.date}
            />
           
        </div>

        <input 
        type="submit" 
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'registrar Gasto'}/>

    </form>    

)
}
