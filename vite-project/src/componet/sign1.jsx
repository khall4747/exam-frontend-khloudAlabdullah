import { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link
} from '@chakra-ui/react';
import axios from 'axios'
const SimpleSignIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [userName,SetuserName]=useState("")
  const [password,Setpassword]=useState("")
  const signup = async()=>{
      await axios.post("https://6486cfe9beba6297278f36b8.mockapi.io/user",{userName,password}).then(res=>{
        localStorage.setItem('userName',res.data.userName)
        localStorage.setItem('password',res.data.password)
        localStorage.setItem('id',res.data.id)
      })
     console.log(localStorage);
     window.location.href="/yut"
    }
  return (
    
    <Container maxW="7xl" p={{ base: 5, md: 10 }} marginLeft="300px">
        <Center>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign up</Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="name">
                <FormLabel>name</FormLabel>
                <Input rounded="md" type="text" onChange={(e)=>SetuserName(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" type={show ? 'text' : 'password'} onChange={(e)=>Setpassword(e.target.value)}/>
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue('gray.300', 'gray.700')}
                      _hover={{
                        bg: useColorModeValue('gray.400', 'gray.800')
                      }}
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
              </Stack>
              <Button onClick={signup}
                bg="green.300"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w="100%"
              >
                Sign up
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
      </Center>
    </Container>
    
  );
};

export default SimpleSignIn;