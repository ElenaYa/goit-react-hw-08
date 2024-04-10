import css from './DeleteModal.module.css';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { IoCloseSharp } from "react-icons/io5";

const DeleteModal = ({ value, modalIsOpen, onCloseModal }) => {
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      maxWidth: '800px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '10px',
      borderRadius: '10px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
    },
    overlay: {
      backgroundColor: '#151516db',
    },
  };

  Modal.setAppElement('#root');

  const handleDelete = () => {
    dispatch(deleteContact(value))
      .unwrap()
      .then(() => toast.success('Contact deleted'))
      .catch(() => toast.error('The contact has not been deleted. Reload the page'));
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onCloseModal} style={customStyles}>
      <div className={css.container}>
        <div className={css.btnContainer}>
          <button className={css.close} onClick={onCloseModal}>
            <IoCloseSharp size="30px" fill="#483723" />
          </button>
        </div>
        <p>Do you want to delete this contact?</p>
        <button className={css.button} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;