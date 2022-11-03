import { makeStyles, createStyles } from '@mui/styles';

export const useAppStyle = makeStyles(({ palette, breakpoints }) => createStyles(({
    appForm: {
        display: 'flex',
        flexDirection: 'column',
        color: '#333333',
        alignItems: 'stretch',
        height: '100vh'
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50%',
        [breakpoints.down('lg')]: {
            height: '60%',
        },
        [breakpoints.down('md')]: {
            flexDirection: 'column',
            height: '70%',
        },

    },
    bottomContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '50%',
        [breakpoints.down('lg')]: {
            height: '40%',
        },
        [breakpoints.down('md')]: {
            height: '30%',
        },

    },
})))