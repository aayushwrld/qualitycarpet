'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLeaf, IoColorPalette } from 'react-icons/io5'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function Feature1() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            About Us
          </Text>
          <Heading>Your Trusted Carpet Solution</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Transform your spaces with our premium carpet collections. Designed for comfort, durability, and style, our carpets add a touch of elegance to any setting.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Custom Carpet Solutions'}
            />
            <Feature
              icon={<Icon as={IoLeaf} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Eco-Friendly Materials'}
            />
            <Feature
              icon={<Icon as={IoColorPalette} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Elegant Designs & Colors'}
            />
          </Stack>
        </Stack>
        <Flex>
        <Flex justifyContent={'center'}>
  <Image
    rounded={'md'}
    alt={'feature image'}
    src={
      'https://www.flooringsuperstore.com/media/catalog/product/cache/43942d99e4560257de5108a0f0547660/c/-/c-luna-6724-lifstyle.jpg'
    }
    objectFit={'cover'}
    width="500px" // Set the desired width
    height="400px" // Set the desired height
  />
</Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  )
}