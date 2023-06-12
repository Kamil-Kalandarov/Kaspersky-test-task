import { useSelector } from 'react-redux';
import styles from './app.module.css';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Offer from '../Offer/Offer';
import SpaceLine from '../SpaceLine/SpaceLine';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import Select from '../Select/Select';

const App = () => {

  const slides = useSelector(store => store.cardReducer.slides);
  const currentTab = useSelector(store => store.cardReducer.currentTab);
  const theme = useSelector(store => store.themeReducer.theme);
  console.log(theme);

  return (
    <>
      <main className={theme === 'dark' ? styles.app_dark : styles.app}>
        <section className={styles.app__content}>
          <div className={styles.app__hexagon}></div>
          <Header />
          <Offer text={'If you need an Special Offer Block'} size={'412px'} fontSize={'21px'} />
          <h1 className={theme === 'dark' ? styles.app__title_dark : styles.app__title}>
            <span className={theme === 'dark' ? styles.app__title_bold_dark : styles.app_title_bold}>Lorem ipsm</span>
            dolor sit amet
          </h1>
          <SpaceLine width={'64px'}/>
          <p className={theme === 'dark' ? styles.app__textContent_dark : styles.app__textContent}>
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus eleifend mi eu faucibus. 
            Aliquam erat volutpat. Pellentesque dui nisl, consectetur sit amet hendrerit at, commodo ac nunc.
          </p>
          <section className={styles.app__tabsContainer}>
          <NavigationTabs slides={slides} type={currentTab} theme={theme}/>
          </section>
          <section className={styles.app__selectContainer}>
            <Select />
          </section>
        </section>
        {/* <section className={styles.app__tabsContainer}>
          <NavigationTabs slides={slides} type={currentTab} />
        </section>
        <section className={styles.app__selectContainer}>
          <Select />
        </section> */}
        <section className={styles.app__slider}>
          <Slider slides={slides} currentTab={currentTab}/>
        </section>
      </main>
    </>
  );
};

export default App;
