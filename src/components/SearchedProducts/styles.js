import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '0 10px 0 10px',
    },
    notFound: {
        flexGrow: 1,
        padding: '0 10px 0 10px',
        height: '200px',
        marginTop: '80px',
    },
    notFoundName: {
        width: '100%',
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',
        padding: '0 0 15px 0',
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        // position: 'relative',
        width: '100%',
    },
    filter: {
        textAlign: 'start',
        display: 'flex',
        justifyContent: 'space-between',
    },
    filterText: {
        width: '100%',
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',
    },
    range: {
        width: '95%',
    },
    Text: {
        textAlign: 'start',
        display: 'flex',
        justifyContent: 'space-between',
    },
    CategoryName: {
        width: '100%',
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',
    },
    ProductAmount: {
        width: '100%',
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
