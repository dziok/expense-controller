import { ExpenseTypes } from "../constants/expenseType"

export type NameValueProps = {
    handleClick: (nameValue: string, numberValue: string, typeValue: ExpenseTypes | '') => void,
    valueError: boolean,
    typeError: boolean
}
