import { makeStyles, createStyles } from '@mui/styles';

export const useExpenseStatisticsStyle = makeStyles(({ palette, breakpoints }) => createStyles(({
    ExpenseStatisticsForm: {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
    },
    statisticsSelect: {
        width: '90%',
        margin: '5px'
    },

    singleDayStatisticsContainer: {
        backgroundColor: palette.primary.main,
        margin: '0 10px 0 10px ',
        borderRadius: '5px',
        width: '70px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        color: 'white',
        transition: '0.3s',
        "&:hover": {
            backgroundColor: palette.primary.dark,

        }
    },
    leftContainer: {
        width: '15%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: palette.secondary.main,
        minWidth: '100px'

    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        height: '100%',
        alignItems: 'flex-end',
        overflowX: 'scroll',
    },
    statisticsHeader: {
        margin: '10px',
        [breakpoints.down('md')]: {
            display: 'none'
        },
    },
    Generalstatistics: {
        width: '100%',
        margin: '10px',
        [breakpoints.down('md')]: {
            margin: '5px'
        },
    },
    chartValue: {
        height: '95%',
        width: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        [breakpoints.down('lg')]: {
        },
    },
    chartDayScale: {
        height: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    chartContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    chart: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
})))