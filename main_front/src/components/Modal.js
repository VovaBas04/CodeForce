import React, { useEffect, useState } from 'react';

const Modal = ({open, props, onClose}) => {
    if (!open) return null;
    console.log('MODAL OPEN');
    return(
    <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <p>Неверный логин или пароль</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>

)
}

export default Modal
