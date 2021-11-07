import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
        paddingTop: '20px',
    },
    rootCon: {
        padding: '30px',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
        backgroundColor: '#fff',
        boxShadow: '0 0.5rem 1.5rem rgba(0, 0, 0, 0.15)',
        borderRadius: '1rem',
        textAlign: 'center',
        transition: 'all 300ms ease-in-out',
    },
    image: {
        width: 300,
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    rootCard: {
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
    CardActions: {
        justifyContent: 'space-around',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    Button: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-around',
    },
    text: {
        color: 'primary',
        fontSize: '3rem',
        display: 'inline-block',
        position: 'relative',
        zIndex: 0,
        '&::after': {
            content: '" "',
            position: 'absolute',
            left: '50%',
            bottom: '-20%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f50057',
            width: '50%',
            height: '0.4rem',
            zIndex: 1,
        },
    },
}));
