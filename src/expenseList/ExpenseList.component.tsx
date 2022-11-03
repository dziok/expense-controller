import React from 'react';
import { useExpenseListStyle } from './ExpenseList.style'
import { DataProps } from '../App'
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper'

type ExpenseListProps = {
    data: DataProps[],
    deleteClick: React.MouseEventHandler<HTMLSpanElement>
}
export const ExpenseList = ({ data, deleteClick }: ExpenseListProps) => {
    const classes = useExpenseListStyle()

    return (
        <TableContainer component={Paper} className={classes.expenseListForm}>
            <Table stickyHeader>
                <TableHead >
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...data].reverse().map((item, index) => {

                        return <TableRow id={String(item.time)}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.value}$</TableCell>
                            <TableCell align="right">{item.type}</TableCell>
                            <TableCell align="right">{item.date}</TableCell>
                            <TableCell align="right">{<Link href="#" color="error" onClick={deleteClick}>delete</Link>}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
} 