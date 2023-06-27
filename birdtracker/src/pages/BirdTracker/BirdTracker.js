import './BirdTracker.scss'
import snipe from '../../assets/images/snipe.jpg'
import add from '../../assets/icons/icons8-add-grey.png'

function BirdTracker() {
    return (
        <main className='birdtracker'>
            <div className='birdtracker__icon-bar'>
                <img src={add} alt='add a bird' className='birdtracker__add__icon'/>
                <input
                    className='birdtracker__search-bar'
                    type='search'
                    placeholder='Search here'>
                </input>
            </div>
            <div className='birdtracker__container'>
                <img className='birdtracker__image' src={snipe} alt='Bird pic' />
                <div className='birdtracker__subcontainer'>
                    <h2 className='birdtracker__heading'>Wilson's Snipe</h2>
                    <h3 className='birdtracker__scientific__name'>Gallinago delicata</h3>
                </div>
            </div>
            <div className='birdtracker__container'>
                <img className='birdtracker__image' src={snipe} alt='Bird pic' />
                <div className='birdtracker__subcontainer'>
                    <h2 className='birdtracker__heading'>Wilson's Snipe</h2>
                    <h3 className='birdtracker__scientific__name'>Gallinago delicata</h3>
                </div>
            </div>
            <div className='birdtracker__container'>
                <img className='birdtracker__image' src={snipe} alt='Bird pic' />
                <div className='birdtracker__subcontainer'>
                    <h2 className='birdtracker__heading'>Wilson's Snipe</h2>
                    <h3 className='birdtracker__scientific__name'>Gallinago delicata</h3>
                </div>
            </div>
        </main>
    )
}
export default BirdTracker