import { useState } from 'react';
import { useFamilyActions } from '../state/hooks/fuzzyBunny';
import { InputControl, FormButton } from '../Forms/FormControls';

export default function AddFamily() {
  const { add } = useFamilyActions();
  const [name, setName] = useState('');

  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="add a family"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <FormButton>🔍</FormButton>
    </form>
  );
}
