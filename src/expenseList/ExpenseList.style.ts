import { makeStyles, createStyles } from '@mui/styles'


export const useExpenseListStyle = makeStyles(({ palette, breakpoints }) => createStyles(({
    expenseListForm: {
        width: '84%',
        backgroundColor: palette.secondary.light,
        [breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        },
    },

    header: {
        width: '100%',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },

    expenseDetails: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'left',
        padding: '5px',
        width: '20%',
        height: '100%',
        borderRadius: '5px',
    },
})))