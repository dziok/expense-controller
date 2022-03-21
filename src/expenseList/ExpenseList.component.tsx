import { Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { classicNameResolver } from 'typescript';
import { useExpenseListStyle } from './ExpenseList.style'

type ExpenseListProps = {
    data: any // Zmienić bo będzie krzyczał 
    deleteClick:any
}
type test = {   //to też zmienić bo się gu wkirwi 
    name: string,
    value: string,
    type: string,
    date: string,
    day: string
}

export const ExpenseList = ({ data, deleteClick }: ExpenseListProps) => {
    const classes = useExpenseListStyle()


    return (
        <div className={classes.expenseListForm}>
            <div className={classes.header}><Typography variant='h4'>Expense list </Typography></div>
            {data.slice(0).reverse().map((item: test, index: string) => {
                return <div key={index} className={classes.expense}>
                    <Typography >{item.name}|</Typography>
                    <Typography >{item.value}$|</Typography>
                    <Typography >{item.type}|</Typography>
                    <Typography >{item.date} </Typography>
                    <div onClick={deleteClick}>usuń</div>
                </div>
            })}
        </div>
    )
} 