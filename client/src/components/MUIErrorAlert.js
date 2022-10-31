import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorAlert() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.unmarkListForDeletion();
    }


    if(store.error)
    {
        return (
            <Alert severity="error"  open={store.listMarkedForDeletion !== null}>
            <AlertTitle>Test</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert> 
        );
    }
    return (
       <div />
    );
}