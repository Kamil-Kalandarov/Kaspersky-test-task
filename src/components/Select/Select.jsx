import styles from './select.module.css';

const Select = () => {
  return (
    <select className={styles.select}>
      <option className={styles.select__option}>All</option>
      <option className={styles.select__option}>Windows</option>
      <option className={styles.select__option}>macOS</option>
      <option className={styles.select__option}>Android</option>
      <option className={styles.select__option}>iPhone & iPad</option>
      <option className={styles.select__option}>Free tools</option>
    </select>
  );
};

export default Select;
