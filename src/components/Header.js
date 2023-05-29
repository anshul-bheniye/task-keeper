import {useEffect, useState} from 'react';
import Logo from '../assets/logo.png';
import '../app.css';

export const Header = () => {
  const[theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'med-dark');
  useEffect(()=>{
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  },[theme])
  return(
    <div className='header'>
        <div className='brand'>
            <img src={Logo} alt='task keeper logo' />
            <span>Task Keeper</span>
        </div>
        <div className='bg'>
            <span onClick={()=>setTheme('neutral')} className={theme === 'neutral' ? 'neutral active dot': 'neutral dot'}></span>
            <span onClick={()=>setTheme('dark')} className={theme === 'dark' ? 'dark active dot': 'dark dot'}></span>
            <span onClick={()=>setTheme('med-dark')} className={theme === 'med-dark' ? 'med-dark active dot': 'med-dark dot'}></span>
            <span onClick={()=>setTheme('gradient')} className={theme === 'gradient' ? 'gradient active dot': 'gradient dot'}></span>
        </div>
    </div>
  )
}
