import styles from './offer.module.css';

const Offer = ({ text }) => {
  return (
    <div 
      className={styles.offer}>{text}</div>
  );
};

export default Offer;
