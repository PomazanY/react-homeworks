import BlockText from '../BlockText/BlockText';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import LanguareProvider from '../../context/LanguareProvider';
import './App.css';

function App() {
  return (
    <LanguareProvider>
      <div className="app">
        <BlockText />
        <LanguageSwitcher />
      </div>
    </LanguareProvider>
  );
}

export default App;
