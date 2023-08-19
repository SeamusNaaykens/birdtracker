import './Homepage.scss'
import tracker from '../../assets/icons/icons8-gps-64.png'
import bucket from '../../assets/icons/icons8-bucket-64.png'
import goal from '../../assets/icons/icons8-goal-64.png'
import Carousel from '../../components/Carousel/Carousel'
import { birds } from '../../components/Data/Data'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <main className='homepage'>
            <div className='homepage__description'>
                <h1 className='homepage__title'>Welcome to BirdTracker!</h1>
                <p className='homepage__description--content'>This application has been designed to document your experiences and sightings out in the field. Inspired by the excellent apps created by Cornell University, BirdTracker aims to be both an informative resource and a personlized digital journal of your highlights out in the field. Start exploring by creating an account above and clicking on the main application features below. Happy birding! </p>
            </div>
            <div className='homepage__content'>
                <div className='homepage__wrapper'>
                    <Link to={'/birdtracker'} className='homepage__link'>
                        <div className='homepage__container'>
                            <img src={tracker} alt='birdtracker icon' className='homepage__icon' />
                            <h2 className='homepage__heading'>BirdTracker</h2>
                        </div>
                    </Link>
                    <Link to={'/bucketlist'} className='homepage__link'>
                        <div className='homepage__container'>
                            <img src={bucket} alt='bucketlist icon' className='homepage__icon' />
                            <h2 className='homepage__heading'>Bucketlist</h2>
                        </div>
                    </Link>
                    <div className='homepage__container'>
                        <img src={goal} alt='achievements icon' className='homepage__icon' />
                        <h2 className='homepage__heading'>Achievements</h2>
                    </div>
                </div>
                <Carousel images={birds} />
            </div>
        </main>
    )
}
export default Homepage