import './App.css'
import { Box, VStack } from '@chakra-ui/react'
import AdviceCard from './components/AdviceCard'

function App() {

  return (
    <VStack alignItems={'center'} justifyContent={'center'} h={'100vh'} w={'100vw'} bgColor={'hsl(218, 23%, 16%)'} >
      <AdviceCard/>

      <Box className="attribution" justifySelf={'flex-end'} >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Jonakss">Jonathan Correa | Jonakss</a>.
      </Box>
    </VStack>
  )
}

export default App
