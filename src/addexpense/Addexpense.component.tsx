import React, { ChangeEvent, useState } from 'react';
import { useAddExpenseStyle } from './AddExpense.style'
import { MenuItem, FormControl, FormHelperText, TextField, Select, SelectChangeEvent, Typography, Button, InputLabel, InputAdornment } from '@mui/material'
import { expenseType, ExpenseTypes } from '../constants/expenseType'

type nameValueProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    typeChange: (e: SelectChangeEvent) => void,
    numberChange: (e: ChangeEvent<HTMLInputElement>) => void,
    nameChange: (e: ChangeEvent<HTMLInputElement>) => void,
    nameValue: string,
    numberValue: string,
    typeValue: ExpenseTypes | '',
    valueError: boolean,
    typeError: boolean
}

export const AddExpense = ({ typeValue, nameValue, numberValue, nameChange, typeChange, numberChange, handleClick, valueError, typeError }: nameValueProps) => {
    const classes = useAddExpenseStyle()

    return (
        <div className={classes.addExpenseForm} >
            <div className={classes.header}><Typography variant='h4' >Add Expense</Typography></div>
            <div className={classes.inputForm}>

                <TextField focused size="small" variant='outlined' label="name" value={nameValue} onChange={nameChange} className={classes.input} />
                <TextField helperText="*required" error={valueError} size="small" variant='outlined' type='number' label="value"
                    value={numberValue} onChange={numberChange} className={classes.input}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">$</InputAdornment>,
                    }} />
                <FormControl size="small" >
                    <InputLabel id="demo-simple-select-label">type</InputLabel>
                    <Select
                        error={typeError}
                        label="type"
                        labelId='demo-simple-select-label'
                        size="small"
                        variant='outlined'
                        className={classes.input}
                        onChange={typeChange}
                        value={typeValue}>
                        {expenseType.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText error={typeError}>*required</FormHelperText>
                    <Button className={classes.button} variant='outlined' color='secondary' onClick={handleClick}>
                        Add
                    </Button>
                </FormControl>
            </div>
        </div>
    )
} 