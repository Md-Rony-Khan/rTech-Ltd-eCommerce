/* eslint-disable no-unused-vars */
import { Dialog } from '@material-ui/core';
import SignInOutContainer from './SignInOutContainer';
import useStyles from './styles';

export default function ScrollDialog({ scroll, aOpen, handleClose }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={aOpen}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <SignInOutContainer />
            </Dialog>
        </div>
    );
}
