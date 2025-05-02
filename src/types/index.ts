export type Expense = {
    id:string
    amount:number,
    expenseName:string,
    category:string,
    date:Value
}
export type DraftExpense = Omit<Expense,'id'>
type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type category = {
    id: string;
    name: string;
    icon: string;
}