import styles from './spaceLine.module.css';

const SpaceLine = ({ width }) => {
  return (
    <div className={styles.spaceLine} style={{width: width}}></div>
  );
};

export default SpaceLine;
