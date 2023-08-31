import { Heading, SimpleGrid, Box, Image } from "@chakra-ui/react";
import React from "react";
import Caraousel from "../Components/Navbar/Caraousel";
import Footer from "../Components/Navbar/Footer";
import cod from "../images/cod.png";
import ondc from "../images/ondc.png";
import live from "../images/live.png";

const Home = () => {
  return (
    <>
      <div>
        <Box></Box>
        <div
          className="ShopByCategory"
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            marginTop: "35px",
          }}
        >
          <div
            style={{
              width: "98%",
              margin: "auto",
            }}
          >
            <SimpleGrid columns={[1, 3, 7]} spacing="10px">
              <Box
                bg="white"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
              >
                <Image
                  src="https://cdn.plotch.io/image/upload/C/V/1686307440_Q2F0ZWdvcmllcy5wbmc=.png"
                  alt="Home Decor"
                  cursor="pointer"
                  borderRadius="50%"
                />
              </Box>
              <Box
                bg="white"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
              >
                <Image
                  src="https://cdn.plotch.io/image/upload/C/V/1686307538_Q1JBRlRTVklMTEFPTkRDLUNBVEVHT1JZLmdpZg==.gif"
                  alt="Tote bags"
                  cursor="pointer"
                  borderRadius="50%"
                />
              </Box>
              <Box
                bg="white"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
              >
                <Image
                  src="https://cdn.plotch.io/image/upload/C/V/1686307457_S3VydGEucG5n.png"
                  alt="Kitchen ware"
                  cursor="pointer"
                  borderRadius="50%"
                />
              </Box>
              <Box
                bg="white"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
              >
                <Image
                  src="https://cdn.plotch.io/image/upload/C/V/1686307500_U2FyZWUucG5n.png"
                  alt="Ceramic Mug"
                  cursor="pointer"
                  borderRadius="50%"
                />
              </Box>
              <Box
                bg="white"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
              >
                <Image
                  src="https://cdn.plotch.io/image/upload/C/V/1686307532_V2VzdGVybldlYXIucG5n.png"
                  alt="Idols"
                  cursor="pointer"
                  borderRadius="50%"
                />
              </Box>
              <Box
                bg="white"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
              >
                <Image
                  src="https://cdn.plotch.io/image/upload/C/V/1686307530_UGVyc29uYWwmQmVhdXR5Q2FyZS5wbmc=.png"
                  alt="Home Decor"
                  cursor="pointer"
                  borderRadius="50%"
                />
              </Box><Box
              bg="white"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="8px"
            >
              <Image
                src="https://cdn.plotch.io/image/upload/C/V/1686307532_SG9tZURlY29yLnBuZw==.png"
                alt="Home Decor"
                cursor="pointer"
                borderRadius="50%"
              />
            </Box>
            </SimpleGrid>
          </div>
          <div bgColor="grey">
            <div>
              <Image src={cod} alt="image of har ghar" />
            </div>
            <div
              style={{
                height: "60vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="https://plotchcdn.blob.core.windows.net/assets/images/1692022769_V2hhdHNBcHBJbWFnZTIwMjMtMDgtMTRhdDcuMzkuMzdQTS5qcGVn.jpeg"
                alt="image of har ghar"
              />
            </div>
            <div>
              <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap" ,margin:"5vh"}}>
                  <div style={{height:"50vh",width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686306502_MS5wbmc=.png" alt="img"  /></a>
                  </div>
                  <div style={{height:"50vh",width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686306508_Mi5wbmc=.png" alt="img"  /></a>
                  </div>
                  <div style={{height:"50vh",width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686306512_My5wbmc=.png" alt="img"  /></a>
                  </div>
                  <div style={{height:"50vh",width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686306518_NC5wbmc=.png" alt="img"  /></a>
                  </div>
              </div>
            </div>
            <div style={{marginTop:"10px"}}>
            <Image src="https://cdn.plotch.io/image/upload/C/V/1686308583_Q1JBRlRTVklMTEFPTkRDLUJSRUFLQkFOTkVSKDQpLnBuZw==.png" alt="img"/>
            </div>
            <div>
            <div>
              <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap" ,margin:"5vh"}}>
                  
              <div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311400_T1AyKDMpLnBuZw==.png " alt="img"  /></a>
                  </div><div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311392_T1AyKDIpLnBuZw==.png " alt="img"  /></a>
                  </div><div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311408_T1AyLnBuZw==.png " alt="img"  /></a>
                  </div><div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311523_NS5wbmc=.png " alt="img"  /></a>
                  </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap" ,margin:"5vh"}}>
                  <div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311546_NC5wbmc=.png " alt="img"  /></a>
                  </div>
                  <div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311693_Ni5wbmc=.png " alt="img"  /></a>
                  </div><div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311697_OC5wbmc=.png " alt="img"  /></a>
                  </div><div style={{width:"40vh",borderRadius:"15px"}}>
                  <a href="/products-near-me"><Image src="https://cdn.plotch.io/image/upload/C/V/1686311703_Ny5wbmc=.png" alt="img"  /></a>
                  </div>
              </div>
              
            </div>
            </div>
            <Image src={ondc} alt="image" />
            <Image src={live} alt="image" />
            <Image
              src="https://cdn.plotch.io/image/upload/C/V/1686312483_Q1JBRlRTVklMTEFPTkRDLUJSRUFLQkFOTkVSKDUpLnBuZw==.png"
              alt="banner"
            />
          </div>
        </div>
      </div>
      <Box
        className="Carausel"
        style={{
          width: "100%",
          height: "500px",
          marginTop: "150px",
          marginBottom: "40px",
        }}
      >
        <Caraousel />
      </Box>

      <SimpleGrid
        className="support"
        w="100%"
        m="auto"
        mt={{ sm: 10, md: 40, lg: 50 }}
        height="auto"
        p="10"
        bgColor="black"
        alignitems="center"
        columns={{ sm: null, md: 3, lg: 5 }}
      >
        <Image
          ml="40px"
          w="250px"
          h="120px"
          src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png"
          alt="On Time"
          cursor="pointer"
        />
        <Image
          ml="40px"
          w="250px"
          h="120px"
          src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png"
          alt="100% quality"
          cursor="pointer"
        />
        <Image
          ml="40px"
          w="250px"
          h="120px"
          src="https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png"
          alt="Easy Customer"
          cursor="pointer"
        />
        <Image
          ml="40px"
          w="250px"
          h="120px"
          src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png"
          alt="Secured and Safe"
          cursor="pointer"
        />
        <Image
          ml="40px"
          w="250px"
          h="120px"
          src="https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png"
          alt="Multiple Payment"
          cursor="pointer"
        />
      </SimpleGrid>
      <br />
      <br />
      <Box
        mt={{ sm: 220, md: 220, lg: 160 }}
        style={{
          width: "80%",
          height: "auto",
          margin: "auto",
        }}
      >
        <SimpleGrid spacing="10" columns={{ sm: 1, md: 2, lg: 2 }}>
          <Box>
            <Image
              src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png"
              w="50"
              cursor="pointer"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png"
              cursor="pointer"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png"
              cursor="pointer"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png"
              cursor="pointer"
            />
          </Box>
        </SimpleGrid>
      </Box>
      <Box mt={{ sm: 220, md: 220, lg: 160 }} h="auto">
        <Footer />
      </Box>
    </>
  );
};

export default Home;
