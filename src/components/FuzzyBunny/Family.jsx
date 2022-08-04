import styles from './Family.css';
import { InputControl } from '../Forms/FormControls';
import DeleteButton from '../Forms/DeleteButton';
import { useEffect, useState, useRef } from 'react';
import { useFamilyActions } from '../state/hooks/fuzzyBunny.js';

export default function Family({ family }) {
  const { remove, update } = useFamilyActions();

  const handleEdit = async (edited) => {
    await update(family.id, edited);
  };

  const handleRemove = async () => {
    const message = `Are you sure you want to remove family ${family.name}?`;
    if (confirm(message)) {
      await remove(family.id);
    }
  };

  return (
    <li className={styles.Family}>
      <div>
        <EditableHeader initialValue={family.name} onEdit={handleEdit} />
      </div>
      <img src={family.avatar} />
      <DeleteButton onClick={handleRemove} />
    </li>
  );
}

function EditableHeader({ initialValue, onEdit }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);
  const [name, setName] = useState(initialValue);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing) {
      ref.current.focus();
    }
  }, [editing]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleEdit = async () => {
    setEditing(false);
    if (name === initialValue) return;
    await onEdit({ name });
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <header>
      {editing ? (
        <InputControl
          ref={ref}
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h2 onDoubleClick={handleDoubleClick}>{name}</h2>
      )}
    </header>
  );
}
