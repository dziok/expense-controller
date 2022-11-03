import React, { useState, useEffect } from 'react'
import { AddExpense } from './addexpense/Addexpense.component'
import { ExpenseList } from './expenseList/ExpenseList.component'
import { ExpenseStatistics } from './ExpenseStatistics/ExpenseStatistics.component'
import { useAppStyle } from './App.style'
import { ExpenseTypes } from './constants/expenseType'

export type DataProps = {
  date: string,
  day: number,
  name: string,
  type: ExpenseTypes,
  value: string,
  time: number
}

export const App = () => {
  const [data, setData] = useState<DataProps[]>([])
  const [valueError, setValueError] = useState(false)
  const [typeError, setTypeError] = useState(false)
  const classes = useAppStyle()

  useEffect(() => {
    const newData = localStorage.getItem('data1')
    if (newData === null) {
      localStorage.setItem('data1', JSON.stringify(data))
    } else {
      setData(JSON.parse(newData))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('data1', JSON.stringify(data))
  }, [data])

  const deleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData(data.filter((item) => { return item.time !== Number(e.currentTarget.parentNode?.parentElement?.id) }))
  }

  const handleClick = (nameValue: string, numberValue: string, typeValue: ExpenseTypes | '') => {
    console.log(typeError, valueError, typeValue, numberValue, nameValue)
    if (numberValue !== '' && typeValue) {
      const date = new Date()
      const currentDate = String(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear())
      const currentDay = Number(date.getDate())
      const currentTime = Number(date.getTime())

      setValueError(false)
      setTypeError(false)
      if (nameValue === "") {
        setData(data => [...data, {
          'name': '[unnamed]',
          'value': numberValue,
          'type': typeValue,
          'date': currentDate,
          'day': currentDay,
          'time': currentTime
        }])
      }
      else {
        setData(data => [...data, {
          'name': nameValue,
          'value': numberValue,
          'type': typeValue,
          'date': currentDate,
          'day': currentDay,
          'time': currentTime
        }])
      }

    }
    else {
      if (numberValue === "") setValueError(true)
      if (!typeValue) setTypeError(true)
    }
  }

  return (
    <div className={classes.appForm} >
      <div className={classes.topContainer}>
        <AddExpense
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