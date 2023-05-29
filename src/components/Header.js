import Logo from '../assets/logo.png';
import '../app.css';

export const Header = () => {
  return(
    <div className='header'>
        <div className='brand'>
            <img src={Logo} alt='task keeper logo' />
            <span>Task Keeper</span>
        </div>
        <div className='bg'>
            <span className='neutral dot'></span>
            <span className='dark dot'></span>
            <span className='med-dark dot'></span>
            <span className='gradient dot'></span>
        </div>
    </div>
  )
}
