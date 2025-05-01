import { formatCurrency } from '../helpers/formatCurrency';
interface AmountDisplayProps  {
    label:string,
    amount:number
}



export default function AmountDisplay({label,amount}:AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold"> 
        <span className="">
        {label}: {''}
        </span> 
       <span className="text-black font-black">
        {formatCurrency(amount)}: {''}
        </span> 
    </p>
  )
}
