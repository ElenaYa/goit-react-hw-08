import { FaPhoneAlt, FaUser } from "react-icons/fa";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import css from './Contact.module.css';


export default function Contact ({ data: { name, number, id }}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.contactContainer}>
        <p className={css.text}>
          <FaUser className={css.icon}/>
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
     
          <button type="button" className={css.button} 
          onClick={openModal}>Delete</button>
          <DeleteModal value={id} modalIsOpen={modalIsOpen} onCloseModal={closeModal}/>
    </div>
  );
}