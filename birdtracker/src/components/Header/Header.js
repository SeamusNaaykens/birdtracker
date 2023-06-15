import './Header.scss'
import logo from '../../assets/images/birdtracker-starter-logo.png'

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <h1 className='header__title'>BirdTracker</h1>
                <img src={logo} alt='BirdTracker logo' className='header__logo'></img>
            </div>
        </header>
    )
}
export default Header