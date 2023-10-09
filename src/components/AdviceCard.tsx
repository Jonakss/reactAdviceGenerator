import { Box, BoxProps, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import Dice from '../assets/icon-dice.svg'
import dDivider from '../assets/pattern-divider-desktop.svg'
import { useState } from "react"
// import mDivider from '../assets/pattern-divider-mobile.svg'


export
    type Advice = {
        id: number,
        text: string
    }

interface AdviceCardProps extends BoxProps {
    onClick?: () => void
}

const API_PATH = 'https://api.adviceslip.com/advice'

const getAdvice = async () => {
  return fetch(API_PATH)
    .then(res => res.json())
    .then(advice => { return {
        id: advice.slip.id,
        text: advice.slip.advice}
    })
    .catch(e => { throw new Error(e) })
}

const AdviceCard = (props: AdviceCardProps) => {
  const [advice, setAdvice] = useState<Advice>({ id: 117, text: "It is easy to sit up and take notice, whatś difficult is getting up and taking action." })

    const handleNewAdvice = () => {
        getAdvice().then(advice => setAdvice(advice))
    }

    return (
        <Box onClick={props.onClick}
            w={'90vw'}
            maxW={'580px'}
            {...props} >
            <Box
                bgColor={'hsl(217, 19%, 24%)'}
                p={'2.5rem'}
                style={{ borderRadius: '1rem', boxShadow: '0px 0px 100px 20px rgba(0,0,0,.15)' }}>
                <VStack gap={'1.5rem'} >
                    <Text fontFamily='Manrope, sans-serif' letterSpacing={'.3rem'} fontWeight='800' fontSize={'12px'} color={'hsl(150, 100%, 66%)'}>ADVICE #{advice.id}</Text>
                    <Text fontFamily='Manrope, sans-serif' fontWeight='800' color={'hsl(193, 38%, 86%)'} fontSize={'28px'}>"{advice.text}"</Text>
                    <Image src={dDivider} my={'1rem'} />
                </VStack>
            </Box>
            <IconButton
                aria-label='random_advice'
                icon={<Image src={Dice} />}
                marginTop={'-2rem'}
                w={'4rem'} h={'4rem'}
                bgColor={'hsl(150, 100%, 66%)'}
                _hover={{ backgroundColor: 'hsl(150, 100%, 66%)', boxShadow: '0px 0px 20px 5px hsl(150, 100%, 66%, 45%)' }}
                style={{ borderRadius: '50%' }}
                onClick={handleNewAdvice} />
        </Box>
    )
}

export default AdviceCard