import { makeStyles, createStyles } from '@mui/styles';

export const useAddExpenseStyle = makeStyles(({ palette,}) => createStyles(({
    addExpenseForm: {
        borderRadius: '20px',
        width: '30%',
        backgroundColor: palette.secondary.main,
        marginTop: '20px',
    },
    input: {
        width: '250px',
     //   backgroundColor: palette.secondary.dark,
        borderRadius: '5px',
    },
    button: {
        padding: '10px',
        borderRadius: '10px',
        marginTop: '20px',
        width: '100px',
        backgroundColor: palette.primary.main,
        '&:hover': {
            backgroundColor: palette.primary.dark
        },
    },
    header: {
        width: '100%',
        backgroundColor: palette.secondary.dark ,
        borderRadius: '20px 20px 0 0',
        display: 'flex',
        justifyContent: 'center',
        padding: '5% 0 5% 0'
    },
    inputForm:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '80%',
        justifyContent: 'space-evenly',

    }
})))