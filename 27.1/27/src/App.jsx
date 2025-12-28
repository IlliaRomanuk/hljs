import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {ThemeContext, themes} from './components/context';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  const theme = useState(themes.white);
  const [currentThemes] = theme;
    return (
    <ThemeContext.Provider  value={theme}>
      <BrowserRouter>
      <ErrorBoundary>
    <div style ={{background: currentThemes.background, color: currentThemes.color}}>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
    <Footer/>
    </div>
    </ErrorBoundary>
    </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
