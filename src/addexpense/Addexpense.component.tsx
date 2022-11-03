import React, { useState, ChangeEvent } from 'react';
import { useAddExpenseStyle } from './AddExpense.style'
import { MenuItem, FormControl, FormHelperText, TextField, Select, Typography, Button, InputLabel, InputAdornment, SelectChangeEvent } from '@mui/material'
import { expenseType, ExpenseTypes } from '../constants/expenseType'
import { NameValueProps } from './AddExpanse.types'

export const AddExpense = ({ handleClick, valueError, typeError }: NameValueProps) => {
    const classes = useAddExpenseStyle()
    const [nameValue, setNameValue] = useState('')
    const [numberValue, setNumberValue] = useState('')
    const [typeValue, setTypeValue] = useState<ExpenseTypes | ''>('')

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value)
    }
    const numberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberValue(e.target.value)
    }
    const typeChange = (e: SelectChangeEvent) => {
        setTypeValue(e.target.value as ExpenseTypes)
        console.log(typeValue)
    }

    const handleSubmit = () => {
        handleClick(nameValue, numberValue, typeValue)
        setTypeValue('')
        setNameValue('')
        setNumberValue('')
    }

    return (
        <div className={classes.addExpenseForm} >
            <div className={classes.header}><Typography variant='h5' >Add Expense</Typography></div>
            <div className={classes.inputForm}>

                <TextField name='expenseName' size="small" variant='outlined' label="name" value={nameValue} onChange={nameChange} className={classes.input} />
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
                </FormControl>
            </div>
            <Button className={classes.button} variant='outlined' color='secondary' onClick={handleSubmit}>
                +
            </Button>
        </div >
    )
} 