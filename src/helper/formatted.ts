import { isSameMonth, isSameYear, parse } from "date-fns";
import { ListCardType } from "../screens/Home";

export function formatedValue(value: number | string) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function getTotalForTypes(items:ListCardType[]){
    let totalUp = 0
    let totalDown = 0
    items?.forEach(item => {
        const value = parseFloat(item.value)
        if(item.type === 'up'){
            totalUp += value
        }else{
            totalDown += value
        }
    })
    return {
        totalUp: formatedValue(totalUp),
        totalDown: formatedValue(totalDown),
        total: formatedValue(totalUp - totalDown)
    }
}

export function getTransactionsByMouth(transactions: ListCardType[], selectedDate: Date){
    const value = transactions.filter(transaction => 
        transaction.type == 'down' && 
        isSameMonth(parse(transaction.date, "dd/MM/yyyy", new Date()), selectedDate) && 
        isSameYear(parse(transaction.date, "dd/MM/yyyy", new Date()), selectedDate)
    )

    return value
}