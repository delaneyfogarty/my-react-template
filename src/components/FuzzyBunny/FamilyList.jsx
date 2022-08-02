import { useFamilies } from '../state/hooks/fuzzyBunny';
import Family from './Family';

export default function FamilyList() {
  const { families } = useFamilies();

  if (!families) return null;

  return (
    <ul>
      {families.map((family) => (
        <Family key={family.id} family={family} />
      ))}
    </ul>
  );
}
