import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

export function DarkModeProvider({ children }){
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        updateDarkMode(!darkMode)
    }

    // 사용자가 로컬 스토리지에서 dark로 설정한 경우(theme 키를 추가하고 값을 dark로 설정한 경우)
    // 로컬 스토리지에 설정이 없고, 브라우저의 기본 설정이 다크 모드인 경우
    useEffect(() => {
        const isDark = localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dart)').matches)
        setDarkMode(isDark)
        updateDarkMode(isDark)
    }, [])

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }else{
                document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}

export const useDarkMode = () => useContext(DarkModeContext)