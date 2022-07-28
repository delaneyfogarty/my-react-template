import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/FormControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      <form>
        <Fieldset legend="Credentials">
          <InputControl
            label="email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />

          <InputControl
            className={styles.PasswordControl}
            label="password"
            name="password"
            placeholder="choose a password"
            type="password"
            required
          />
        </Fieldset>

        <SelectControl label="what are you?">
          <option>Alien</option>
          <option>Human</option>
          <option>Cat</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" />

        <TextAreaControl label="bio" placeholder="tell us about yourself" />

        <FormButton>Submit</FormButton>
      </form>
    </section>
  );
}
