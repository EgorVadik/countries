import Header from './components/Header'
import { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Country from './components/Country'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <Router>
                <div className={`font-nunitoSans ${darkMode ? 'dark' : ''}`}>
                    <div className='bg-veryLightGray dark:bg-veryDarkBlue min-h-screen'>
                        <Header
                            toggleDarkMode={toggleDarkMode}
                            darkMode={darkMode}
                        />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/:name' element={<Country />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}
