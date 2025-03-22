import styles from './BlockText.module.css'

import { useContext } from 'react';
import { languageContext } from '../../context/LanguareProvider';

import items from './items';
const BlockText = () => {
    const { language, toggleLanguage } = useContext(languageContext);
    const transformItems = language === 'eng' ? items : [...items].reverse();

    const currentItem = transformItems.find(item => item.value === language);


    return (
        <div className={styles.container}>
            <h2 className={styles.text}>{currentItem.text}</h2>
            <button className={styles.btn} onClick={toggleLanguage}>Switch language</button>
        </div>
    )
}
export default BlockText;