import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 0,
        },
    },
});
export default makeStyles({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    rootCon: {
        padding: '0px 30px 0px 30px',
    },
    root: {
        // eslint-disable-next-line no-undef
        flexGrow: 1,
    },
    text: {
        color: 'primary',
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
});
