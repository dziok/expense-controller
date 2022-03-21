import { makeStyles, createStyles } from '@mui/styles';

export const useExpenseListStyle = makeStyles(({ palette }) => createStyles(({
    expenseListForm:{
        width: '62.5%',
        height: '450px',
        marginTop: '20px',
        backgroundColor: palette.secondary.main,
        borderRadius: '20px',
        display: 'flex',
        overflowY: 'scroll',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    expense: {
        padding: '10px',
        margin: '15px 15px 0 15px',
        backgroundColor: palette.secondary.dark,
        borderRadius: '10px',
        width: '45%',
        height: '25px',
        display: 'flex',
        flexDirection: 'row',
    },
    header:{
        width: '100%',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})))