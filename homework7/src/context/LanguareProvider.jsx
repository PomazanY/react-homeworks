import { useState, createContext } from "react";

export const languageContext = createContext('eng');


const LanguareProvider = ({ children }) => {

    const [language, setLanguage] = useState('eng');

    const toggleLanguage = () => setLanguage(prevLanguage => prevLanguage === 'eng' ? 'ru' : 'eng')
    return (
        <languageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </languageContext.Provider>

    )
}
export default LanguareProvider;