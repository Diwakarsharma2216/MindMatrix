import { Box, Container, Spinner, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import TypewriterEffect from './TypewritterEffect'
import { QaContex } from '../Contex/QAContex'

export const Feedback = () => {
    const {feedbackdata,contexname,contextech}=useContext(QaContex)
  return (
    <div>
       <Box
  w='100%'
  h='96vh'
  bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}
>
<Container maxW={"container.xl"}>
<Text fontSize={{base:"4xl",md:"6xl"}} color='tomato'>FeedBack😎</Text>
 <Text fontSize={{base:"2xl",md:"4xl"}}>UserName:-{contexname ? contexname :"wait...."}</Text>
 <Text fontSize={{base:"2xl",md:"4xl"}}>UserName:-{contextech ? contextech :"wait...."}</Text>
 {feedbackdata ? <TypewriterEffect data={feedbackdata}  /> : <Spinner />}
{feedbackdata ?  <Text>Thanks You </Text> :""}
 </Container>
</Box>
    </div>
  )
}


{/* <Container maxW={"container.xl"}>
<Text fontSize={{base:"4xl",md:"6xl"}} color='tomato'>FeedBack😎</Text>
 <Text fontSize={{base:"2xl",md:"4xl"}}>UserName:-Diwakar Sharma</Text>
 <Text fontSize={{base:"2xl",md:"4xl"}}>UserName:-Mern</Text>
 {feedbackdata ? <TypewriterEffect data={feedbackdata}  /> : <Spinner />}
{feedbackdata ?  <Text>Thanks You </Text> :""}
 </Container> */}