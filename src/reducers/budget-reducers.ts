import { DraftExpense } from "../types"
import { Expense } from '../types/index';
import {v4 as uuidv4} from 'uuid'

export type BudgetActions = 
{type:'add-budget',payload:{budget:number   }} | 
{type:'show-modal'} |
{type:'hide-modal'} |
{type:'add-expense',payload:{expense:DraftExpense}} 

const createExpense = (draftExpe:DraftExpense ) : Expense => {
    return{
        ...draftExpe,id: uuidv4()
    }


}
export type BudgetState  = {
    budget:number
    modal:boolean
    expense:Expense[]
}
export const initialState:BudgetState = {
    budget:0,
    modal:false,
    expense:[],
}
export const budgetReducer = (
    state:BudgetState = initialState,
    action:BudgetActions
) => {

    if(action.type === 'add-budget')
        return{
                ...state,
                budget:action.payload.budget
        }
    if(action.type === 'show-modal')
        return{
                ...state,
                modal:true
        }
    if(action.type === 'hide-modal')
        return{
                ...state,
                modal:false
        }
    if(action.type === 'add-expense'){
        const expenses = createExpense(action.payload.expense)    

        return{
                ...state,
                expense:[...state.expense,expenses],
                modal:false
        }
    }



    return state
}