import React, { useState, useMemo } from 'react'
import { useExpenseStatisticsStyle } from './ExpenseStatistics.style'
import { Select, MenuItem, SelectChangeEvent, Typography, Box } from '@mui/material'
import { expenseType, ExpenseTypes } from '../constants/expenseType'
import Tooltip from '@mui/material/Tooltip';
import { ExpenseStatisticsProps } from './ExpanseStatistics.types'
import { calculateExpensesSum, calculateExpensesSumInTimeInterval, findBiggestValue, groupExpenses } from './ExpenseStatistics.helpers';

export const ExpenseStatistics = ({ data }: ExpenseStatisticsProps) => {
    const classes = useExpenseStatisticsStyle()
    const [SelectValue, setSelectValue] = useState<ExpenseTypes>('food and hygiene')
    let currentItemHeight = 0

    const handleSelect = (e: SelectChangeEvent) => {
        setSelectValue(e.target.value as ExpenseTypes)
    }
    const groupedExpenses = useMemo(() => {
        return groupExpenses(data, SelectValue)
    }, [SelectValue, data])

    const biggestValue = useMemo(() => {
        return findBiggestValue(groupedExpenses)
    }, [groupedExpenses])

    const sumExpenses = useMemo(() => {
        return calculateExpensesSum(groupedExpenses)
    }, [groupedExpenses])

    const sumExpensesin7days = useMemo(() => {
        return calculateExpensesSumInTimeInterval(groupedExpenses, 5)
    }, [groupedExpenses])

    const sumExpensesin30days = useMemo(() => {
        return calculateExpensesSumInTimeInterval(groupedExpenses, 7)
    }, [groupedExpenses])

    const chartScale = Math.pow(10, biggestValue.toString().length) / 100
    const scaleFunction = (scale: number) => <div>{Math.round(biggestValue * scale / chartScale) * chartScale}</div>
    return (
        <Box className={classes.ExpenseStatisticsForm} >
            <div className={classes.leftContainer}>
                <Typography className={classes.statisticsHeader} variant='h5'>Statistics</Typography>
                <Select
                    size="small"
                    value={SelectValue}
                    className={classes.statisticsSelect}
                    onChange={handleSelect}>
                    {expenseType.map((item, index) => (
                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
                <div className={classes.Generalstatistics}>
                    <Typography>
                        Total:
                        {sumExpenses}$
                    </Typography>
                    <Typography>
                        Last 7 days:
                        {sumExpensesin7days}$
                    </Typography>
                    <Typography>
                        Last 30 days:
                        {sumExpensesin30days}$
                    </Typography>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.chartValue}>
                    {scaleFunction(1)}
                    {scaleFunction(0.8)}
                    {scaleFunction(0.6)}
                    {scaleFunction(0.4)}
                    {scaleFunction(0.2)}
                    <div><sup>value</sup>/<sub>date</sub></div>
                </div>

                <div className={classes.chartContainer}>
                    <div className={classes.chart}>
                        {
                            groupedExpenses.map((item, index) => {
                                if (item.value > biggestValue) {
                                    currentItemHeight = 90
                                }
                                else {
                                    currentItemHeight = (item.value * 90) / biggestValue
                                }
                                return <Tooltip title={item.value} placement="top" key={index}>
                                    <Box sx={{ height: currentItemHeight + '%', }} key={index} className={classes.singleDayStatisticsContainer}></Box>
                                </Tooltip>
                            })}
                    </div>
                    <div className={classes.chartDayScale}>
                        {groupedExpenses.map((item, index) => {
                            return <Typography key={index} align='center' sx={{ width: '80px', height: '5%' }} variant='body2'>{item.date}</Typography>
                        })}
                    </div>
                </div>
            </div>
        </Box>
    )
} 