import { useDispatch } from 'react-redux';
import styles from './card.module.css';
import ReactStars from 'react-stars';
import { changeStarValueActionCreator } from '../../services/actions/cardActions'
import Button from '../Button/Button';
import SpaceLine from '../SpaceLine/SpaceLine';

const Card = ({ name, starValue, reviews, about, price }) => {
  
  const dispatch = useDispatch();

  const changeStarValue = (newValue) => {
    dispatch(changeStarValueActionCreator(newValue))
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__icon}></div>
      <h2 className={styles.card__title}>{name}</h2>
      <div className={styles.card__ratingContainer}>
        <ReactStars 
          value={starValue}
          onChange={(value) => changeStarValue(value)}
        />
        <span className={styles.card__reviesNumber}>{reviews}reviews</span>
      </div>
      <SpaceLine width={'40px'}/>
      <p className={styles.card__about}>{about}</p>
      <p className={styles.card__price}>from<span className={styles.card__price_type_bold}>£{price}</span>/year</p>
      <div className={styles.card__buttonContainer}>
        <Button text={'Lern more'} color='#00A88E' textColor='#FFFFFF' />
        <Button text={'Lern more'} color='#FFFFFF' />
      </div>
    </div>
  );
};

export default Card;
