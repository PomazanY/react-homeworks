import { useState, createContext, useEffect } from "react";

export const languageContext = createContext('eng');


const LanguareProvider = ({ children }) => {

    const [language, setLanguage] = useState(()=>{
        return localStorage.getItem('language') || 'eng'
    });

    useEffect(()=>{
        localStorage.setItem('language', language)
    },[language]);

    const toggleLanguage = () => setLanguage(prevLanguage => prevLanguage === 'eng' ? 'ru' : 'eng')
    return (
        <languageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </languageContext.Provider>

    )
}
export default LanguareProvider;