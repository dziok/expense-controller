import { DataProps } from '../App'

export type ExpenseStatisticsProps = {
    data: DataProps[]
}
export type ExpensesForDay = {
    value: number,
    day: number,
    date: string,
    time: number
}