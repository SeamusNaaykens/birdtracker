import './BirdTracker.scss'
import snipe from '../../assets/images/snipe.jpg'
import add from '../../assets/icons/icons8-add-grey.png'
import { SlideFade, Button, Box, useDisclosure } from '@chakra-ui/react'



function BirdTracker() {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <main className='birdtracker'>
            <div className='birdtracker__icon-bar'>
                <Button onMouseEnter={onToggle} onMouseLeave={onToggle}
                    p='0rem' border='none' background='transparent'>
                    <img src={add} alt='add a bird' className='birdtracker__add__icon' />
                    <SlideFade in={isOpen}>
                        <Box
                            p='.5rem'
                            border='1px solid #dad7cd'
                            borderRadius='10px'
                            background='#588157'>
                            <p className='birdtracker__add__icon--description'>Use this button to add a new sighting!</p>
                        </Box>
                    </SlideFade>
                </Button>
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