import styles from './LanguageSwitcher.module.css'; 
import { useContext } from 'react';
import { languageContext } from '../../context/LanguareProvider';

const LanguageSwitcher = () => {
    const { toggleLanguage } = useContext(languageContext);

    return (
        <button className={styles.btn} onClick={toggleLanguage}>
            Switch language
        </button>
    );
};

export default LanguageSwitcher;
