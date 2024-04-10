import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import MediaQuery from 'react-responsive';

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <MediaQuery maxWidth={767}>
        <div className={css.container}>
          <button className={css.button} onClick={handleClick}>
            <IoMdMenu size="26px" fill="#483723" />
          </button>
        </div>
        <BurgerMenu toggle={toggle} onClick={handleClick} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <AppBar />
      </MediaQuery>
      {children}
    </header>
  );
};
export default Layout;