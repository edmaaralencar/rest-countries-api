import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'

import Header from './components/Header'

import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyles'

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    return (
        <Router>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <Header setDarkTheme={setIsDarkTheme} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/country/:id' element={<DetailPage />} />
                </Routes>
                <GlobalStyle />
            </ThemeProvider>
        </Router>
    );
}

export default App;
