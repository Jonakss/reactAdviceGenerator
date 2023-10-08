import { Box, BoxProps, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import Dice from '../assets/icon-dice.svg'
import dDivider from '../assets/pattern-divider-desktop.svg'
// import mDivider from '../assets/pattern-divider-mobile.svg'


export
    type Advice = {
        id: number,
        advice: string
    }

interface AdviceCardProps extends BoxProps {
    onClick: () => void
    advice: Advice
}

const AdviceCard = (props: AdviceCardProps) => {

    return (
        <Box
            w={'90vw'}
            maxW={'580px'}
            {...props} >
            <Box
                bgColor={'hsl(217, 19%, 24%)'}
                p={'2.5rem'}
                style={{ borderRadius: '1rem', boxShadow: '0px 0px 100px 20px rgba(0,0,0,.15)' }}>
                <VStack gap={'1.5rem'} >
                    <Text fontFamily='Manrope, sans-serif' letterSpacing={'.3rem'} fontWeight='800' fontSize={'12px'} color={'hsl(150, 100%, 66%)'}>ADVICE #{props.advice.id}</Text>
                    <Text fontFamily='Manrope, sans-serif' fontWeight='800' color={'hsl(193, 38%, 86%)'} fontSize={'28px'}>"{props.advice.advice}"</Text>
                    <Image src={dDivider} my={'2rem'} />
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
                onClick={props.onClick} />
        </Box>
    )
}

export default AdviceCard