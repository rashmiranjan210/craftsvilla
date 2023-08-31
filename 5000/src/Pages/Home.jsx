import { Heading,SimpleGrid,Box,Image} from '@chakra-ui/react';
import React from 'react'
import Caraousel from '../Components/Navbar/Caraousel';
import Footer from '../Components/Navbar/Footer';




const Home = () => {
   
 



  return (
    <>
    <div>
    <Box>
    </Box>
    <div className='ShopByCategory' style={{
        width:"100%",
        height:"auto",
        margin:"auto",
        marginTop:"35px"
    }} >
        <div style={{
            marginBottom:"25px"
        }}>
        <Heading fontWeight="400">Shop By category</Heading>
        </div>
        <div style={{
            width:"98%",
            margin:"auto"
        }}>
         <SimpleGrid columns={[1, 3, 5]} spacing='10px'>
        <Box bg='white' height='100%' display="flex" justifyContent="center" alignItems="center" borderRadius="8px">
          <Image src="https://i.pinimg.com/736x/32/c8/6d/32c86dc090427bed2cb21b7cdf548bf3--landscapes-leather-jackets.jpg" alt="Home Decor" cursor="pointer" borderRadius="50%" />
        </Box>
        <Box bg='white' height='100%' display="flex" justifyContent="center" alignItems="center" borderRadius="8px">
          <Image src="https://media.gettyimages.com/id/1225016189/photo/happy-student.jpg?s=612x612&w=0&k=20&c=3g_SaxIvemwG2mxvlFo55-UOHqyhhOOEtytAdAoXoX4=" alt="Tote bags" cursor="pointer" borderRadius="50%" />
        </Box>
        <Box bg='white' height='100%' display="flex" justifyContent="center" alignItems="center" borderRadius="8px">
          <Image src="https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?w=358&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Kitchen ware" cursor="pointer" borderRadius="50%" />
        </Box>
        <Box bg='white' height='100%' display="flex" justifyContent="center" alignItems="center" borderRadius="8px">
          <Image src="https://th.bing.com/th/id/OIP.qTlG8PONqyG_XyZKU_mTxAHaHa?pid=ImgDet&rs=1" alt="Ceramic Mug" cursor="pointer" borderRadius="50%" />
        </Box>
        <Box bg='white' height='100%' display="flex" justifyContent="center" alignItems="center" borderRadius="8px">
          <Image src="https://images.pexels.com/photos/1112203/pexels-photo-1112203.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Idols" cursor="pointer" borderRadius="50%" />
        </Box>
      </SimpleGrid>
        </div>
    </div>

    </div>
       <Box className='Carausel' style={{
        width:"100%",
        height:"500px",
        marginTop:"150px",
        marginBottom:"40px"
       }}>
   
     <Caraousel />
        
       </Box>

   <SimpleGrid className='support'
   w="100%"
   m="auto"
   mt={{sm:10, md:40,lg:50}}
   height="auto"
   p="10"
   bgColor="black"
   alignitems="center"
   
   columns={{sm:null, md:3, lg:5}}>

      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png" alt="On Time" cursor="pointer" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png" alt="100% quality" cursor="pointer" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png" alt="Easy Customer" cursor="pointer" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png" alt="Secured and Safe" cursor="pointer" />
      <Image ml="40px" w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png" alt="Multiple Payment" cursor="pointer" />
   </SimpleGrid>
    <br />
    <br />
      <Box mt={{sm:220, md:220, lg:160}} style={{
        width:"80%",
        height:"auto",
        margin:"auto",
      }}>
        <SimpleGrid
        spacing="10"
         columns={{sm:1, md:2, lg:2}}>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" w="50" cursor="pointer" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" cursor="pointer" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" cursor="pointer" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" cursor="pointer" /></Box>
        </SimpleGrid>
      </Box>
  <Box mt={{sm:220, md:220, lg:160}} h="auto">
    <Footer />
  </Box>
 
    </>
  )
}

export default Home;