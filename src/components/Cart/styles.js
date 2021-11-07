import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    rootCon: {
        padding: '30px',
    },
    title: {
        marginTop: '5%',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'underline',
    },
    cartDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
    text: {
        padddingTop: '50px',
        color: 'primary',
        display: 'inline-block',
        position: 'relative',
        zIndex: 0,
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',

        /* '&::after': {
            content: '" "',
            position: 'absolute',
            left: '50%',
            bottom: '-20%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f50057',
            width: '50%',
            height: '0.4rem',
            zIndex: 1,
        }, */
    },
}));
