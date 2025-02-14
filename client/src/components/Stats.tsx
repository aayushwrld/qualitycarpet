'use client'

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaRegClock, FaSmile } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'

interface StatsCardProps {
  title: string
  stat: string
  icon: JSX.Element
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'2px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      transition="background-color 0.5s ease-in-out"
      _hover={{
        bg: '#00000090', 
        color: 'white' 
      }}
      >
      <StatLabel fontWeight={'medium'} display={'flex'}
      alignItems={'center'}
      gap={'0.4rem'}>
        {icon}
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'} mt={2}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function Stats() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} pb={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} py={10} fontWeight={'bold'}
     fontFamily={"Work Sans"}
     fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
      >
        What Makes Our Carpet Service Company Exceptional
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Completed'}
          stat={'500+ carpet fitting'}
          icon={<Icon as={MdDesignServices} w={6} h={6} />}
        />
        <StatsCard
          title={'Years of experience'}
          stat={'5+ years'}
          icon={<Icon as={FaRegClock} w={6} h={6} />}
        />
        <StatsCard
          title={'Served'}
          stat={'100+ satisfied clients'}
          icon={<Icon as={FaSmile} w={6} h={6}/>}
        />
      </SimpleGrid>
    </Box>
  )
}