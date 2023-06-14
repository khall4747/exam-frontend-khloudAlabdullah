import { useEffect,useState } from "react";
import { Text,Input,Box,Grid,GridItem, HStack,Icon,Stack,CardBody,Image,Card,Heading,CardFooter,Breadcrumb,BreadcrumbItem,BreadcrumbLink,UnorderedList,ListItem} from '@chakra-ui/react'
import {Search2Icon,HamburgerIcon} from '@chakra-ui/icons'
import Img2 from './qrcode_61851812_7f5c16611ce7aad70810ece743cbe509.png'
import axios from 'axios'
import img3 from './pexels-eberhard-grossgasteiger-443446.jpg'
//import Navbar from "./navbar";
export default function Youtub() {
    const [data,setData]=useState("")
    const id =localStorage.getItem("id")
    const [cont,setcont]=useState(0)
    const [cont2,setcont2]=useState(0)
    const [cont3,setcont3]=useState(0)
    const [cont4,setcont4]=useState(0)
    //const key = "AIzaSyBuJ2yT0mqTorHierQorc-zQGJrUqJPiwU "
    useEffect(() => {
        const fetchData = async () => {
         
          const results = await axios(
            '//youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyBuJ2yT0mqTorHierQorc-zQGJrUqJPiwU'
          );
          setData(results.data.items) 
         console.log(results.data.items);
        }
        fetchData();
      }, [data])
  
      
    useEffect(()=>{
        axios.get("https://6486cfe9beba6297278f36b8.mockapi.io/user").then(res=>{
        const user= res.data.find(element => element.id === id)
             console.log(user);
               setData(user)
              //console.log(user.username);
         // console.log(res.data);
         
         // console.log(username);
        })},[])
  return (
   <>
   
   <Box>
   <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10'  >
  <Text> <HamburgerIcon></HamburgerIcon>          hello : {data.userName}</Text>
     </GridItem> 
     <GridItem w='100%' h='10'  >
        <HStack>
     <Box boxSize="500px" alignItems="center">
     <h3> <Icon as={Search2Icon}/> search </h3><Input ></Input>
  </Box>
  </HStack>
         </GridItem>
   </Grid>
   <Grid templateColumns='repeat(5, 1fr)' gap={6} paddingTop="100px">
    <Box >
   <GridItem w='100%' h='10'  >
   <UnorderedList>
  <ListItem>Home</ListItem><br></br>
  <ListItem>Vidoes</ListItem><br></br>
  <ListItem>List</ListItem><br></br>
  <ListItem>music</ListItem><br></br>
</UnorderedList>
<Box boxSize="100px" color="blue">
    <Text>my linkedin is here...</Text>
 <Image src={Img2} boxSize="100px"></Image>
 </Box>
  </GridItem>
  </Box>
  <GridItem w='100%' h='10'  >
  <Box paddingTop="100px" boxSize="800px" marginLeft="640px" >
  <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
 
>
  <Image borderRadius="10px"
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>video</Heading>

      <Text py='2'>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink  onClick={()=>setcont(cont+1)}>Like{cont}</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Share</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Subscrib</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card> 
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
 
>
  <Image borderRadius="10px"
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>video</Heading>

      <Text py='2'>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onClick={()=>setcont2(cont2+1)}>Like{cont2}</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Share</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Subscrib</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
 
>
  <Image borderRadius="10px"
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>video</Heading>

      <Text py='2'>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onClick={()=>setcont3(cont+1)} >Like{cont3}</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Share</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Subscrib</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  
>
  <Image borderRadius="10px"
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>video</Heading>

      <Text py='2'>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onClick={()=>setcont4(cont+1)}>Like{cont4}</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Share</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Subscrib</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>




  </Box>
  
 



  </GridItem>
</Grid>
</Box> 
  



   </>
  )
}
