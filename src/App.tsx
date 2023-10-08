import { useState } from 'react'
import './App.css'
import { Box, VStack } from '@chakra-ui/react'
import AdviceCard, { Advice } from './components/AdviceCard'


const API_PATH = 'https://api.adviceslip.com/advice'

const getAdvice = async () => {
  return fetch(API_PATH)
    .then(res => res.json())
    .then(advice => advice.slip)
    .catch(e => { throw new Error(e) })
}

function App() {
  const [advice, setAdvice] = useState<Advice>({ id: 117, advice: "It is easy to sit up and take notice, whatś difficult is getting up and taking action." })

  const handleNewAdvice = () => {
    getAdvice().then(advice => setAdvice(advice))
  }

  return (
    <VStack alignItems={'center'} justifyContent={'center'} h={'100vh'} w={'100vw'} bgColor={'hsl(218, 23%, 16%)'} >
      <AdviceCard advice={advice} onClick={handleNewAdvice}/>

      <Box className="attribution" justifySelf={'flex-end'} >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Jonakss">Jonathan Correa | Jonakss</a>.
      </Box>
    </VStack>
  )
}

export default App
