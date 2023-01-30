import React from 'react';
import btcSrc from "../assets/btclogo.png";
import { motion } from "framer-motion";
import { Box, Image, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.800"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"96"}
          objectFit={"contain"}
          src={btcSrc}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Crypto App
      </Text>
    </Box>
  )
}

export default Home;