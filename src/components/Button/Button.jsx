import styles from './button.module.css';

const Button = ({ text, color, textColor }) => {
  return (
    <button 
      className={styles.button} 
      style={{backgroundColor: color, color: textColor}}
    >
      {text}
    </button>
  );
};

export default Button;
