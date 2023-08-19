import './Bucketlist.scss'
import { Collapse, Button, Box, useDisclosure } from '@chakra-ui/react'

function Bucketlist() {

    const { isOpen, onToggle } = useDisclosure(false)

    return (
        <main className='bucketlist'>
            <div className='bucketlist__intro-container'>
                <h1 className='bucketlist__title'>Bucketlist</h1>
                <p className='bucketlist__description'>Use this tool to learn about and keep track of your chase birds. Select a bird family and drag and drop the species to add them to your list. </p>
            </div>
            <div className='bucketlist__selector-container'>
                <Button
                    onClick={onToggle}
                    p='.75rem' border='none' background='#3a5a40' borderRadius='20px' margin='1rem' color='#dad7cd' fontFamily='Copy'>Waterfowl
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Box fontFamily='Copy' padding='1rem' background='#3a5a40' color='#dad7cd' border='1px solid #dad7cd ' width='13%' borderRadius='10px'>
                    <p className='bucketlist__bird'>Canada Goose</p>
                    <p className='bucketlist__bird'>Mallard</p>
                    <p className='bucketlist__bird'>Wood Duck</p>
                    <p className='bucketlist__bird'>Common Merganser</p>
                    <p className='bucketlist__bird'>Red-breasted Merganser</p>
                    <p className='bucketlist__bird'>Common Goldeneye</p>
                    <p className='bucketlist__bird'>Barrow's Goldeneye</p>
                    <p className='bucketlist__bird'>Bufflehead</p>
                    <p className='bucketlist__bird'>Common Loon</p>
                </Box>
                </Collapse>
            </div>
            <div className='bucketlist__container'>

            </div>
        </main>
    )
}
export default Bucketlist