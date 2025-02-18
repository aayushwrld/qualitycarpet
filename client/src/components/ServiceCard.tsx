'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react'
import ServiceModal from './ServiceModal'


interface ServiceInfo {
  title: string;
  image: string;
  content: string;
}

interface ServiceCardProps {
  info: Record<string, ServiceInfo>;
}

export default function ServiceCard({ info }: ServiceCardProps) {
  const key = Object.keys(info)[0];
  const service = info[key];

  return (
    <Center>
      <Box
        role={'group'}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow='dark-lg'
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-2}
          pos={'relative'}
          height={'230px'}
          // _after={{
          //   transition: 'all .3s ease',
          //   content: '""',
          //   w: 'full',
          //   h: 'full',
          //   pos: 'absolute',
          //   top: 5,
          //   left: 0,
          //   backgroundImage: `url(${service.image})`,
          //   filter: 'blur(30px)',
          //   zIndex: -1,
          // }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            roundedBottom={0}
            height={230}
            width={380}
            objectFit={'cover'}
            src={service.image}
            alt={key}
          />
        </Box>
        <Stack pt={5} align={'center'}>
          <Flex paddingBottom={5} direction={'column'} gap={'1vh'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {service.title}
            </Heading>
            <ServiceModal  title={service.title} image={service.image} content={service.content}/>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}