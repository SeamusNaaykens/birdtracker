import './Bucketlist.scss'
import { Collapse, Button, Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Bucketlist() {

    const [data, setData] = useState(null);
    const [bird, setBird] = useState(null);
    const { isOpen, onToggle } = useDisclosure(false)
    
    const apiKeyEbird = process.env.EBIRD_API_KEY;
    const apiKeyNuthatch = "d3faf1f9-0fc5-4ce1-9702-59a7f4d9662e"

    useEffect(() => {
        //  Replace with your actual API key
        const apiUrl = process.env.EBIRD_API_URL; // Replace with the API endpoint you want to call
    
        axios
          .get('https://api.ebird.org/v2/ref/sppgroup/merlin', {
            headers: {
                'x-ebirdapitoken': `Bearer ${apiKeyEbird}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

      useEffect(() => { 
        axios
        .get('https://nuthatch.lastelm.software/v2/birds', {
          headers: {
              'api-key': `Bearer ${apiKeyNuthatch}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setBird(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

    }, []);

   

    return (
        <main className='bucketlist'>
            <div className='bucketlist__intro-container'>
                <h1 className='bucketlist__title'>Bucketlist</h1>
                <p className='bucketlist__description'>Use this tool to learn about and keep track of your chase birds. Select a bird family and drag and drop the species to add them to your list. </p>
            </div>
            <div className='bucketlist__selector-container'>

                {data && data.map((family) => {
                    return (
                       
                        <Box>
                        <Button
                            onClick={onToggle}
                            p='.75rem' border='none' background='#3a5a40' borderRadius='20px' margin='1rem' color='#dad7cd' fontFamily='Copy'>{family.groupName}
                        </Button>
                        <Collapse in={isOpen} animateOpacity>
                <Box fontFamily='Copy' padding='1rem' background='#3a5a40' color='#dad7cd' border='1px solid #dad7cd ' width='13%' borderRadius='10px'>
                    {/* {bird && bird.map((bird) => {
                        return (
                            <p className='bucketlist__bird'>{bird.name}</p>
                        )
                    }, [])}  */}
                </Box>
                </Collapse>
                        </Box>
                      
                    )
                }, [])}

                {/* <Button
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
                </Collapse> */}
            </div>
            <div className='bucketlist__container'>

            </div>
        </main>
    )
}
export default Bucketlist