import { useState } from 'react';
import Navigation from './Navigation.jsx';
import styles from './SlideoutMenu.css';
import classNames from 'classnames';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.SlideoutMenu, {
    [styles.Open]: isOpen,
  });

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <button className={className} onClick={handleClick}>
      <div className={styles.MenuContainer}>
        <Navigation />
      </div>
    </button>
  );
}
