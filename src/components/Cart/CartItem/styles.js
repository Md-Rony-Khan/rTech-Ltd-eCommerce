import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        // maxWidth: '100%',
        // height: '480px',
        fontFamily: 'Nunito Sans,sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
        boxShadow: '0 0.5rem 1.5rem rgba(0, 0, 0, 0.15)',
        borderRadius: '1rem',
        textAlign: 'center',
        justifyContent: 'center',
        transition: 'all 300ms ease-in-out',
        '&:hover': {
            boxShadow: '0 0.5rem 1.5rem rgba(0, 0, 0, 0.25)',
        },
    },
    media: {
        padding: ' 3px',
        display: 'block',
        marginLeft: ' auto',
        marginRight: 'auto',
        width: '170px!important',
        height: '170px!important',
        backgroundColor: '#f6f2f1',
        transition: 'all 300ms ease-in-out',
        zIndex: 0,
        '&:image': {
            height: '100%',
            justifyContent: 'center',
        },
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardActions: {
        justifyContent: 'space-around',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));
