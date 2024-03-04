import { React } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children }){
    return createPortal(
        <div clasName="Modal">
            { children }
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };