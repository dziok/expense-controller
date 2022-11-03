import { DataProps } from "../App"
import { DAY } from "../constants/constants"
import { ExpenseTypes } from "../constants/expenseType"
import { ExpensesForDay } from "./ExpanseStatistics.types"


const date = new Date()
export const groupExpenses = (data: DataProps[], SelectValue: ExpenseTypes) => {

    const statistiscData = data.filter((item, index) => {
        return item.type === SelectValue
    })
    const groupedExpenses: ExpensesForDay[] = statistiscData.reduce((prev, curr) => {
        const dayArrayIndex = prev.findIndex((item) => {
            return item.day === curr.day
        })

        if (dayArrayIndex !== -1) {
            prev[dayArrayIndex].value += Number(curr.value)
            return prev
        }
        return [...prev, {
            value: Number(curr.value),
            day: curr.day,
            date: curr.date,
            time: curr.time
        }]
    }, [] as ExpensesForDay[])

    return groupedExpenses
}


export const findBiggestValue = (groupedExpenses: ExpensesForDay[]) => {
    let biggestValue = 0
    groupedExpenses.forEach((item) => {
        if (biggestValue < item.value) biggestValue = item.value
    })
    return biggestValue
}


export const calculateExpensesSum = (groupedExpenses: ExpensesForDay[]) => {
    const sumExpenses = groupedExpenses.reduce((prev, curr) => {
        return curr.value + prev
    }, 0)

    return sumExpenses
}

export const calculateExpensesSumInTimeInterval = (groupedExpenses: ExpensesForDay[], interval: number) => {
    const sumExpensesinInterval = groupedExpenses.reduce((prev, curr) => {
        if (curr.time > date.getTime() - (DAY * interval)) {
            return curr.value + prev
        }
        return prev
    }, 0)

    return sumExpensesinInterval
}