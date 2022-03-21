import { makeStyles, createStyles } from '@mui/styles';

export const useExpenseStatisticsStyle = makeStyles(({ palette }) => createStyles(({
    ExpenseStatisticsForm:{
        width: '95%',
        height: '100%',
        backgroundColor: palette.secondary.main,
        margin: '25px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    statisticsSelect:{
        width: '200px',
    },
    statisticsContainer:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        overflowX: 'scroll',
    },
    singleDayStatisticsContainer:{
        backgroundColor: palette.primary.main,
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        width: '50px'
    },
    header:{
        backgroundColor: palette.secondary.dark,
        width: '100%',
        height: '50px',
        borderRadius: '10px 10px 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})))