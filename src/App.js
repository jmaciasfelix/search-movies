import React from 'react';
import { Layout } from './util/Layout';
//Components
import { Header } from './components/Header';
//Context
import { ThemeContext } from './context/Theme';

function App() {
  const [theme, setTheme] = React.useState({ isDark: false });
  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Header setTheme={setTheme} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
