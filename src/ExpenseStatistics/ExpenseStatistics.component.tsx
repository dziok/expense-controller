import React, { ChangeEvent, useState } from 'react'
import { useExpenseStatisticsStyle } from './ExpenseStatistics.style'
import { Select, MenuItem, SelectChangeEvent, Button, Typography, Box } from '@mui/material'
import { expenseType, ExpenseTypes } from '../constants/expenseType'
import { statisticsList } from '../constants/statisticsList'
import { DataProps } from '../App'

type ExpenseStatisticsProps = {
    data: DataProps[]
}
type ExpansesForDay = {
    value: number,
    day: number
}
export const ExpenseStatistics = ({ data }: ExpenseStatisticsProps) => {  //zmiń any !!!!!!
    const classes = useExpenseStatisticsStyle()
    const [SelectValue, setSelectValue] = useState<ExpenseTypes>('food and hygiene')
    let biggestValue = 0
    let currentItemHeight = 0

    const SelectChange = (e: SelectChangeEvent) => {
        setSelectValue(e.target.value as ExpenseTypes)
    }

    console.log(data, expenseType)
    const statistiscData = data.filter((item, index) => {
        return item.type === SelectValue
    })

    const groupedExpenses: ExpansesForDay[] = statistiscData.reduce((prev, curr) => {
        const dayArrayIndex = prev.findIndex((item) => {
            return item.day === curr.day
        })

        if (dayArrayIndex !== -1) {
            prev[dayArrayIndex].value += Number(curr.value)
            return prev
        }

        return [...prev, {
            value: Number(curr.value),
            day: curr.day
        }]
    }, [] as ExpansesForDay[])

    console.log(groupedExpenses)

    return (
        <div className={classes.ExpenseStatisticsForm}>
            <div className={classes.header}>
                <Select
                    size="small"
                    value={SelectValue}
                    className={classes.statisticsSelect}
                    onChange={SelectChange}>
                    {expenseType.map((item, index) => (
                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
                <Typography variant='h4'>Statistics</Typography>
            </div>
            <div className={classes.statisticsContainer}>
                {groupedExpenses.map((item, index) => {
                    if (item.value > biggestValue) {
                        biggestValue = item.value
                        currentItemHeight = 85
                    }
                    else {
                        currentItemHeight = (item.value * 85) / biggestValue
                    }

                    return <Box sx={{ height: currentItemHeight + '%' }} key={index} className={classes.singleDayStatisticsContainer}>
                        <Typography> {item.value}$</Typography>
                        <Typography> {item.day} </Typography>
                    </Box>
                })}
            </div>
        </div>
    )
} 