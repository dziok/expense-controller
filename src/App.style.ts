import { makeStyles, createStyles } from '@mui/styles';

export const useAppStyle = makeStyles(({ palette }) => createStyles(({
    appForm: {
        display: 'flex',
        flexDirection: 'column',
        color: '#333333',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    bottomContainer:{
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center'
    }
})))