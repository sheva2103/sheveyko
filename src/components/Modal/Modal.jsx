import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_INFO, SHOW_IMAGE, SIGN_IN, setStateModal } from '../../store/slices/modalSlice';
import SignIn from '../forms/SignInForm';
import ShowImage from './ShowImage';
import CloseIcon from '@mui/icons-material/Close';
import ChangeInfoText from './ChangeInfoText';

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 400,
    //width: {xs: 300, sm: 400, md: modalOpen.type === SHOW_IMAGE ? 'auto' : 400},
    width: {xs: 300, sm: 400, md: 'auto'},
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 0,
    outline: 'none',
    backgroundColor: 'rgb(213 232 251)'
    };

    export default function ModalWindow({stateModal}) {
    const isOpen = useSelector(state => state.modal.isOpen)
    const type = useSelector(state => state.modal.type)
    const dispatch = useDispatch()
    const handleClose = () => dispatch(setStateModal({open: false, type: null, linkPhoto: undefined}));

    return (
        <Box >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={isOpen}>
                <Box sx={style}>
                    {isOpen && <CloseIcon sx={{float: 'right', color: 'dark', cursor: 'pointer', padding: '2px'}} onClick={handleClose}/>}
                    {type === SIGN_IN && <SignIn />}
                    {type === SHOW_IMAGE && <ShowImage />}
                    {type === CHANGE_INFO && <ChangeInfoText />}
                </Box>
                </Fade>
            </Modal>
        </Box>
    );
    }