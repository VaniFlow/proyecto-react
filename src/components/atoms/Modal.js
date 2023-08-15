import React from "react";
import Modal from "react-modal";

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, contentLabel, handleDeleteModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      handleDeleteModal= {handleDeleteModal}
      
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-black">{contentLabel}</h2>
        <div className="flex justify-center gap-2 mt-5">
          <button
            style={{
              backgroundColor: "#F99999",
              padding: ".5rem ",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={onConfirm}
          >
            Eliminar
          </button>
          <button
            style={{
              border: "1px solid #F99999",
              padding: ".5rem ",
              borderRadius: "10px",
              color: "black"
            }}
            onClick={onRequestClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
