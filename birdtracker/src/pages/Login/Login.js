import './Login.scss'
import Carousel from '../../components/Carousel/Carousel'
import { birds } from '../../components/Data/Data'
import { useState, useEffect } from 'react'
import {
    Input,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Collapse,
    useDisclosure,
    InputRightElement,
} from '@chakra-ui/react'



function Login() {

    const { isOpen, onToggle } = useDisclosure(false)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    return (
        <main className='login'>
            <div className='login__wrapper'>
                <div className='login__subwrapper'>
                    <div className='login__container'>
                        <h1 className='login__heading'>Login</h1>
                        <p className='login__description'>Input your credentials in the fields below to access all BirdTracker features.</p>
                    </div>
                    <form className='login__form'>
                        <FormControl marginBlockEnd='1rem' id="email">
                            <FormLabel marginBlockEnd='.5rem' fontSize='1.25rem'>Email address</FormLabel>
                            <Input variant='outline' height='3rem' width='22.5rem' paddingLeft='.5rem' borderRadius='5px' type="email" placeholder='We will never share your email' fontFamily='Copy' fontSize='.75rem' background='#dad7cd' border='1px solid #344e41' />
                        </FormControl>

                        <FormControl marginBlockEnd='1rem' id="password">
                            <FormLabel marginBlockEnd='.5rem' fontSize='1.25rem'>Password</FormLabel>
                            <InputGroup>
                                <Input variant='outline' height='3rem' width='22.5rem' paddingLeft='.5rem' borderRadius='5px' fontFamily='Copy' fontSize='.75rem' background='#dad7cd' border='1px solid #344e41' type={show ? 'text' : 'password'} />
                                <InputRightElement width='5rem'>
                                    <Button h='3rem' width='3rem' borderRadiusRight='5px' fontFamily='Headings' fontSize='1rem' color='#dad7cd' border='none' background='#3a5a40' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Button height='2rem' width='6rem' borderRadius='30px' fontFamily='Headings' fontSize='1.25rem' border='none' background='#3a5a40' color='#dad7cd'>Login</Button>
                    </form>
                    <div>
                        <p className='login__signup-description'>Not signed up yet? No problem! Click the link below to create a free account.</p>
                        <Button height='2rem' width='6rem' borderRadius='30px' marginBottom='2rem' fontFamily='Headings' fontSize='1.25rem' border='none' background='#3a5a40' color='#dad7cd' onClick={onToggle} >Signup</Button>
                        <Collapse in={isOpen} animateOpacity>
                            <form className='signup__form'>
                                <FormControl marginBlockEnd='1rem' id="username__signup">
                                    <FormLabel marginBlockEnd='.5rem' fontSize='1.25rem'>Username</FormLabel>
                                    <Input variant='outline' height='3rem' width='22.5rem' paddingLeft='.5rem' borderRadius='5px' fontFamily='Copy' fontSize='.75rem' background='#dad7cd' border='1px solid #344e41' type="name" ></Input>
                                </FormControl>
                                <FormControl marginBlockEnd='1rem' id="email__signup">
                                    <FormLabel marginBlockEnd='.5rem' fontSize='1.25rem'>Email address</FormLabel>
                                    <Input variant='outline' height='3rem' width='22.5rem' paddingLeft='.5rem' borderRadius='5px' type="email" placeholder='We will never share your email' fontFamily='Copy' fontSize='.75rem' background='#dad7cd' border='1px solid #344e41'></Input>
                                </FormControl>
                                <FormControl marginBlockEnd='1rem' id="password__signup">
                                    <FormLabel marginBlockEnd='.5rem' fontSize='1.25rem'>Password</FormLabel>
                                    <InputGroup>
                                        <Input variant='outline' height='3rem' width='22.5rem' paddingLeft='.5rem' borderRadius='5px' fontFamily='Copy' fontSize='.75rem' background='#dad7cd' border='1px solid #344e41' type={show ? 'text' : 'password'} />
                                        <InputRightElement width='5rem'>
                                            <Button h='3rem' width='3rem' borderRadiusRight='5px' fontFamily='Headings' fontSize='1rem' color='#dad7cd' border='none' background='#3a5a40' onClick={handleClick}>
                                                {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button height='2rem' width='6rem' borderRadius='30px' fontFamily='Headings' fontSize='1.25rem' border='none' background='#3a5a40' color='#dad7cd'>Submit</Button>
                            </form>
                        </Collapse>
                    </div>
                </div>
                <Carousel images={birds} />
            </div>
        </main>
    )

}
export default Login;