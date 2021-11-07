import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    rootCon: {
        padding: '30px',
    },
    title: {
        marginTop: '5%',
    },
    paperStyle: {
        padding: 20,
        width: '100%',
        margin: '0 auto',
    },
    headerStyle: {
        margin: 0,
        padding: '10px 0 10px 0',
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',
    },
    sectionHeaderStyle: {
        margin: 0,
        padding: '10px 0 10px 0',
        textDecoration: 'underline',
        fontFamily: 'Nunito Sans,sans-serif',
        fontWeight: 'bold',
    },

    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
