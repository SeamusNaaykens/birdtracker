import './Achievements.scss'
import owlAvatar from '../../assets/images/GGO.jpg'
import {
    Flex,
    Box,
    Avatar,
    Text,
    Badge,
} from '@chakra-ui/react';

function Achievements() {
    return (
        <main className='achievements'>
            <div className='achievements__wrapper'>
                <div className='achievements__subwrapper'>
                    <div className='achievements__container'>
                        <h1 className='achievements__heading'>Achievements</h1>
                        <p className='achievements__description'>Add entries and sightings to unlock achievements!</p>
                    </div>
                    <Flex border='1px solid #344e41 ' padding='1rem' borderRadius='30px' alignItems='center'>
                        <Avatar height='7rem' width='7rem' borderRadius='50px' src={owlAvatar}  marginRight='1rem' alignSelf='start'/>
                        <Box ml='3' >
                            <Text fontWeight='bold' textAlign='start' fontSize='2rem'>
                                Seamso14
                                <Badge ml='1' colorScheme='green'>
                                </Badge>
                            </Text>
                            <Text fontSize='sm' marginBottom='1rem'>Birder and Photographer</Text>
                            <Text textAlign='left' marginBottom='1rem'>Member since: 01/10/2023</Text>
                            <Text textAlign='left' marginBottom='1rem'>Total species seen: </Text>
                            <Text textAlign='left' marginBottom='1rem'>Total entries: </Text>
                            <Text textAlign='left'marginBottom='1rem'>Bucketlist birds seen: </Text>
                        </Box>
                    </Flex>
                </div>
            </div>
        </main>
    )
} export default Achievements;
