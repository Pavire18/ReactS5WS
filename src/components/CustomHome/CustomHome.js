import { Heading, Image, Box, Text, Flex } from '@chakra-ui/react';
import './CustomHome.css';
import home from './home.png';

const CustomHome = () => {

    return (
        <div className="page">
            <Flex justifyContent='center' >
                <Flex direction='column'>
                    <Heading as='h2' size='xl' noOfLines={1} marginBottom='30px'>
                        Bienvenido al periódico digital.
                    </Heading>
                    <Box boxSize='sm' h='250px' marginBottom='30px'>
                        <Image src={home} alt='Imagen del Home' />
                    </Box>
                    <Text fontSize='lg' marginBottom='50px'>Nuestra mision es proporcionarte noticias objetivas y precisas de todo el mundo. Fundado en 2023 por Fulanito y Menganito, nuestro equipo está dedicado a brindarte las últimas noticias de política, negocios, tecnologia, deportes y más.</Text>

                    <Text fontSize='lg' >Contacta con nosotros:</Text>
                    <Flex alignItems='center'>
                        <Image src={home} alt='Imagen del Home' h='50px' />
                        <Text fontSize='lg' marginLeft='10px' >@periódico_digital</Text>
                    </Flex>
                    <Flex alignItems='center'>
                        <Image src={home} alt='Imagen del Home' h='50px' />
                        <Text fontSize='lg' marginLeft='10px'>Periódico Digital</Text>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
}

export default CustomHome;
