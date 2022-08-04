import styles from './Family.css';
// import { InputControl } from '../Forms/FormControls/';
import DeleteButton from '../Forms/DeleteButton';
// import { useEffect, useRef, useState } from 'react';
import { useFamilyActions } from '../state/hooks/fuzzyBunny.js';

export default function Family({ family }) {
  const { remove } = useFamilyActions();

  const handleRemove = async () => {
    const message = `Are you sure you want to remove family ${family.name}?`;
    if (confirm(message)) {
      await remove(family.id);
    }
  };

  return (
    <li className={styles.Family}>
      <h1>{family.name}</h1>
      <DeleteButton onClick={handleRemove} />
    </li>
  );
}
