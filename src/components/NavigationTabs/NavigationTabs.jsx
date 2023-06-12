import { useDispatch } from 'react-redux';
import styles from './navigationTabs.module.css';
import { setCurrentTab } from '../../services/actions/cardActions';
import { ReactComponent as WindowsIcon } from '../../images/Windows.svg'; 
import { ReactComponent as WindowsIconActive } from '../../images/Windows-active.svg'
import { ReactComponent as WindowsIconDark } from '../../images/Windows-dark.svg'
import { ReactComponent as IosIcon } from '../../images/iOS.svg';
import { ReactComponent as IosIconActive } from '../../images/iOS-active.svg';
import { ReactComponent as IosIconDark } from '../../images/iOS-dark.svg';
import { ReactComponent as AndroidIcon } from '../../images/Android.svg';
import { ReactComponent as AndroidIconActive } from '../../images/Android-active.svg';
import { ReactComponent as AndroidIconDark } from '../../images/Android-dark.svg';
import { ReactComponent as MacOsIcon } from '../../images/macOS.svg';
import { ReactComponent as MacOsIconActive } from '../../images/macOS-active.svg';
import { ReactComponent as MacOsIconDark } from '../../images/macOS-dark.svg';
import { ReactComponent as IconAll } from '../../images/All.svg';
import { ReactComponent as IconAllActive } from '../../images/All-active.svg';
import { ReactComponent as IconAllDark } from '../../images/All-active.svg';
import { ReactComponent as FreeTools } from '../../images/Free-tools.svg';
import { ReactComponent as FreeToolsActive } from '../../images/Free-tools-active.svg';
import { ReactComponent as FreeToolsDark } from '../../images/Free-tools-dark.svg';

const NavigationTabs = ({ type, theme }) => {

  const dispatch = useDispatch();

  const onTabClick = (type) => {
    dispatch(setCurrentTab(type))
  };

  /* const setActive = ({type}) => {type === 'Windows' ? styles.tabBtn : styles.tabBtn_active; */

  if(theme === 'dark') {
    return (
      <section className={styles.navigationTabs_dark}>
        <ul className={styles.navigationTabs__tabsList}>
        <li className={styles.navigationTabs__tabItem}>
            { type === 'All' 
              ? <button className={styles.tabBtn_active} onClick={() => onTabClick('All')}>
                  <IconAllActive /> All 
                </button>
              : <button className={styles.tabBtn_dark} onClick={() => onTabClick('All')}>
                  <IconAllDark /> All 
            </button>
            }
          </li>
          <li className={styles.navigationTabs__tabItem}>
            { type === 'Windows' 
              ? <button className={styles.tabBtn_active} onClick={() => onTabClick('Windows')}>
                  <WindowsIconActive /> Windows 
                </button>
              : <button className={styles.tabBtn_dark} onClick={() => onTabClick('Windows')}>
                  <WindowsIconDark /> Windows 
                </button>
            }
          </li>
          <li className={styles.navigationTabs__tabItem}>
            { type === 'MacOs' 
              ? <button className={styles.tabBtn_active} onClick={() => onTabClick('MacOs')}>
                  <MacOsIconActive /> macOS 
                </button>
              : <button className={styles.tabBtn_dark} onClick={() => onTabClick('MacOs')}>
                  <MacOsIconDark /> macOS 
                </button>
            }
          </li>
          <li className={styles.navigationTabs__tabItem}>
            { type === 'Android' 
              ? <button className={styles.tabBtn_active} onClick={() => onTabClick('Android')}>
                  <AndroidIconActive /> Android 
                </button>
              : <button className={styles.tabBtn_dark} onClick={() => onTabClick('Android')}>
                  <AndroidIconDark /> Android 
                </button>
            }
          </li>
          <li className={styles.navigationTabs__tabItem}>
            { type === 'iPhone & iPad' 
                ? <button className={styles.tabBtn_active} onClick={() => onTabClick('iPhone & iPad')}>
                    <IosIconActive /> iPhone & iPad 
                  </button>
                : <button className={styles.tabBtn_dark} onClick={() => onTabClick('iPhone & iPad')}>
                    <IosIconDark /> iPhone & iPad 
                  </button>
              }
          </li>
          <li className={styles.navigationTabs__tabItem}>
            { type === 'Free tools' 
                ? <button className={styles.tabBtn_active} onClick={() => onTabClick('Free tools')}>
                  <FreeToolsActive /> Free tools 
                </button>
                : <button className={styles.tabBtn_dark} onClick={() => onTabClick('Free tools')}>
                  <FreeToolsDark /> Free tools 
              </button>
              }
          </li>
        </ul>
      </section>
    );
  }


  return (
    <section className={styles.navigationTabs}>
      <ul className={styles.navigationTabs__tabsList}>
      <li className={styles.navigationTabs__tabItem}>
          { type === 'All' 
            ? <button className={styles.tabBtn_active} onClick={() => onTabClick('All')}>
              <IconAllActive /> All 
            </button>
            : <button className={styles.tabBtn} onClick={() => onTabClick('All')}>
             <IconAll /> All 
          </button>
          }
        </li>
        <li className={styles.navigationTabs__tabItem}>
          { type === 'Windows' 
            ? <button className={styles.tabBtn_active} onClick={() => onTabClick('Windows')}>
              <WindowsIconActive /> Windows 
            </button>
            : <button className={styles.tabBtn} onClick={() => onTabClick('Windows')}>
             <WindowsIcon /> Windows 
          </button>
          }
        </li>
        <li className={styles.navigationTabs__tabItem}>
          { type === 'MacOs' 
            ? <button className={styles.tabBtn_active} onClick={() => onTabClick('MacOs')}>
              <MacOsIconActive /> macOS 
            </button>
            : <button className={styles.tabBtn} onClick={() => onTabClick('MacOs')}>
              <MacOsIcon /> macOS 
          </button>
          }
        </li>
        <li className={styles.navigationTabs__tabItem}>
          { type === 'Android' 
            ? <button className={styles.tabBtn_active} onClick={() => onTabClick('Android')}>
              <AndroidIconActive /> Android 
            </button>
            : <button className={styles.tabBtn} onClick={() => onTabClick('Android')}>
              <AndroidIcon /> Android 
          </button>
          }
        </li>
        <li className={styles.navigationTabs__tabItem}>
          { type === 'iPhone & iPad' 
              ? <button className={styles.tabBtn_active} onClick={() => onTabClick('iPhone & iPad')}>
                <IosIconActive /> iPhone & iPad 
              </button>
              : <button className={styles.tabBtn} onClick={() => onTabClick('iPhone & iPad')}>
                <IosIcon /> iPhone & iPad 
            </button>
            }
        </li>
        <li className={styles.navigationTabs__tabItem}>
          { type === 'Free tools' 
              ? <button className={styles.tabBtn_active} onClick={() => onTabClick('Free tools')}>
                <FreeToolsActive /> Free tools 
              </button>
              : <button className={styles.tabBtn} onClick={() => onTabClick('Free tools')}>
                <FreeTools /> Free tools 
            </button>
            }
        </li>
      </ul>
    </section>
  );
};

export default NavigationTabs;
