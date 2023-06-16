import './Footer.scss'
import facebook from '../../assets/icons/icons8-facebook-100.png'
import instagram from '../../assets/icons/icons8-instagram-100.png'
import twitter from '../../assets/icons/icons8-twitter-100.png'

function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__container'>
                <h4 className='footer__title'>BirdTracker</h4>
                <p className='footer__copyright'>Copyright Seamus Naaykens Designs</p>
                <div className='footer__subcontainer'>
                    <h4 className='footer__title'> Socials</h4>
                    <div className='footer__social-container'>
                        <img src={facebook} alt='facebook icon' className='footer__icon'/>
                        <img src={instagram} alt='instagram icon' className='footer__icon'/>
                        <img src={twitter} alt='twitter icon' className='footer__icon'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer