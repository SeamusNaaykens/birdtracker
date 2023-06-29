import './Birdpage.scss'
import snipe from '../../assets/images/snipe.jpg'
import waterIcon from '../../assets/icons/icons8-water-48.png'
import bugIcon from '../../assets/icons/icons8-bug-50.png'
import groundNester from '../../assets/images/ground-nester.png'

function Birdpage() {
    return (
        <div className='birdpage'>
            <div className='birdpage__wrapper'>
                <div className='birdpage__image__wrapper'>
                    <img className='birdpage__image' src={snipe} alt='Bird picture' />
                    <div className='birdpage__icon__wrapper'>
                        <div className='birdpage__icon__container'>
                            <p className='birdpage__icon-title'>Habitat</p>
                            <img src={waterIcon} alt='water/shore' className='birdpage__identifier-icon' />
                        </div>
                        <div className='birdpage__icon__container'>
                            <p className='birdpage__icon-title'>Diet</p>
                            <img src={bugIcon} alt='insect' className='birdpage__identifier-icon' />
                        </div>
                        <div className='birdpage__icon__container'>
                            <p className='birdpage__icon-title'>Nest Type</p>
                            <img src={groundNester} alt='ground nester' className='birdpage__identifier-icon' />
                        </div>
                    </div>
                </div>
                <div className='birdpage__container--main'>
                    <div className='birdpage__subcontainer'>
                        <h2 className='birdpage__title'>Wilson's Snipe</h2>
                        <h3 className='birdpage__scientific'>Gallinago delicata</h3>
                    </div>
                    <div className='birdpage__subcontainer'>
                        <h3 className='birdpage__heading'>Sighting Notes</h3>
                        <div className='birdpage__sightings__container'>
                            <input className='birdpage__sightings__input' type='textarea' placeholder='Enter your sighting details'></input>
                            <button className='birdpage__button'>Post</button>
                            <div className='birdpage__sightings__subcontainer'>
                                <p className='birdpage__content'>I saw a Wilson's Snipe near Priddis Valley Road in Calgary, AB picture taken on a post.</p>
                                <p className='birdpage__content--date'>02/07/2023</p>
                            </div>
                            <div className='birdpage__sightings__subcontainer'>
                                <p className='birdpage__content'>I saw a Wilson's Snipe near Priddis Valley Road in Calgary, AB picture taken on a post.</p>
                                <p className='birdpage__content--date'>02/07/2023</p>
                            </div>
                            <div className='birdpage__sightings__subcontainer'>
                                <p className='birdpage__content'>I saw a Wilson's Snipe near Priddis Valley Road in Calgary, AB picture taken on a post.</p>
                                <p className='birdpage__content--date'>02/07/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='birdpage__section'>
                <h3 className='birdpage__heading'>Classification</h3>
            </div>
            <div className='birdpage__section'>
                <h3 className='birdpage__heading'>Habitat</h3>
            </div>
            <div className='birdpage__section'>
                <h3 className='birdpage__heading'>Behaviour</h3>
            </div>
        </div>
    )
}
export default Birdpage