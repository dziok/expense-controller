import React, { ChangeEvent, useState, useEffect } from 'react'
import { AddExpense } from './addexpense/Addexpense.component'
import { ExpenseList } from './expenseList/ExpenseList.component'
import { SelectChangeEvent } from '@mui/material/Select'
import { ExpenseStatistics } from './ExpenseStatistics/ExpenseStatistics.component'
import { useAppStyle } from './App.style'
import { ExpenseTypes } from './constants/expenseType'

export type DataProps = {
  date: string,
  day: number,
  name: string,
  type: ExpenseTypes,
  value: string
}
type StatisticsList = Record<ExpenseTypes, DataProps[]>

export const App = () => {
  const [data, setData] = useState<DataProps[]>([])
  const [nameValue, setNameValue] = useState('')
  const [numberValue, setNumberValue] = useState('')
  const [typeValue, setTypeValue] = useState<ExpenseTypes | ''>('')
  const [valueError, setValueError] = useState(false)
  const [typeError, setTypeError] = useState(false)
  const classes = useAppStyle()

  // const STATUCADSDFSDF = data.filter(expense => expense.type === SELECTED_TYPE)

  useEffect(() => {
    const newData = localStorage.getItem('data1')
    if (newData === null) {
      localStorage.setItem('data1', JSON.stringify(data))
    } else {
      setData(JSON.parse(newData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('data1', JSON.stringify(data))
  }, [data])

  const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value)
  }
  const numberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberValue(e.target.value)
  }
  const typeChange = (e: SelectChangeEvent) => {
    setTypeValue(e.target.value as ExpenseTypes)
  }
  const deleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target, 'ytrdf')
  }
  const handleClick = () => {
    if (numberValue !== '' && typeValue) {
      const date = new Date()
      const currentDate = String(date.getDate() + ':' + (date.getMonth() + 1) + ':' + date.getFullYear())
      const currentDay = Number(date.getDate())

      setValueError(false)
      setTypeError(false)
      setData(data => [...data, {
        'name': nameValue,
        'value': numberValue,
        'type': typeValue,
        'date': currentDate,
        'day': currentDay
      }])

      setNameValue('')
      setNumberValue('')
      setTypeValue('')


    }
    else {
      if (numberValue === "") setValueError(true)
      if (typeValue) setTypeError(true)
    }
  }

  // useEffect(() => {
  //   data.map((item, index) => {
  //     if (statisticsList[item.type].length == 0) {
  //       console.log('zrób pusty')
  //       // statisticsList[item.type].push({ 'value': Number(item.value), 'date': item.day })
  //       setStatisticsList(statisticsList => ({
  //         ...statisticsList, [item.type]: [{
  //           'value': item.value,
  //           'date': String(item.day),
  //           'day': item.day,
  //           'name': item.name,
  //           'type': item.type
  //         }]
  //       }))
  //     }
  //     else {
  //       if (statisticsList[item.type][statisticsList[item.type].length - 1].day === item.day) {
  //         console.log('dodaj')
  //         // statisticsList[item.type][statisticsList[item.type].length - 1].value += Number(item.value)
  //         setStatisticsList(statisticsList => ({
  //           ...statisticsList, [item.type]: [{
  //             'value': Number(statisticsList[item.type][statisticsList[item.type].length - 1].value) + Number(item.value),
  //             'date': String(item.day),
  //             'day': item.day,
  //             'name': item.name,
  //             'type': item.type
  //           }]
  //         }))
  //       }
  //       else {
  //         console.log('zrób nowy')
  //         // statisticsList[item.type].push({ 'value': Number(item.value), 'date': item.day })
  //       }
  //     }
  //     console.log(statisticsList)
  //   })
  // }, [data])

  return (
    <div className={classes.appForm} >
      <div className={classes.topContainer}>
        <AddExpense
          typeChange={typeChange}
          numberChange={numberChange}
          nameChange={nameChange}
          nameValue={nameValue}
          numberValue={numberValue}
          typeValue={typeValue}
          handleClick={handleClick}
          valueError={valueError}
          typeError={typeError}
        />
        <ExpenseList
          data={data}
          deleteClick={deleteClick}
        />
      </div>
      <div className={classes.bottomContainer}>
        <ExpenseStatistics
          data={data}
        />
      </div>
    </div>
  )
}