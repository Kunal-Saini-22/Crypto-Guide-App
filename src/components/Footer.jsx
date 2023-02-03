import { Avatar, Box, Center, HStack, Img, Stack, Text, VStack , Flex } from "@chakra-ui/react";
import React from "react";
import  dp from "../assets/finalDp.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>

           <Text paddingBlock={'20px'}> &copy; Kunal Saini</Text>
          
          <HStack spacing={'5px'}>
            <FaGithub/>  <FaInstagram/>  <FaLinkedin/>
          </HStack>
            
        </VStack>

        <VStack>
          <Img
          w={"80"}
          objectFit={"contain"}
          src={dp}
          borderRadius={"50%"}/>

          <Text>Kunal Saini</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;