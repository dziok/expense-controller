import { makeStyles, createStyles } from '@mui/styles'

export const useAddExpenseStyle = makeStyles(({ palette, breakpoints }) => createStyles(({
    addExpenseForm: {
        width: '15%',
        backgroundColor: palette.secondary.main,
        [breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '110px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
    },
    input: {
        width: '13vw',
        borderRadius: '5px',
        [breakpoints.down('md')]: {
            width: '30vw',
        },
    },
    button: {
        width: '60px',
        height: '40px',
        borderRadius: '100px',
        backgroundColor: palette.primary.main,
        margin: '20px',
        '&:hover': {
            backgroundColor: palette.primary.dark,
        },
        [breakpoints.down('md')]: {
            width: '80px',
            height: '40px',
            margin: '0px',
        },
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '5% 0 5% 0',
        [breakpoints.down('md')]: {
            display: 'none'
        },

    },
    inputForm: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '50%',
        justifyContent: 'space-between',
        [breakpoints.down('md')]: {
            flexDirection: 'row',
            alignItems: 'baseline',
            width: '100%',
            justifyContent: 'space-around',
            height: 'auto',
        },
    }
})))