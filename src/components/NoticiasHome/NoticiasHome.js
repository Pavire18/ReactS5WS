import { Heading, Text, Flex, Button } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import './NoticiasHome.css';

const NoticiasHome = () => {

    return (
        <div className="page">
            <Flex >
                <Heading as='h2' size='xl' noOfLines={1} marginBottom='80px' marginTop='30px'>
                    Por favor, elige una de estas categorías:
                </Heading>
            </Flex>

            <Flex direction='row' gap='15px'>
                <Flex direction='column' w='300px'>
                    <Button colorScheme='gray' marginBottom='20px' w='fit-content'><NavLink to="/noticias/sport">Deportes</NavLink></Button>
                    <Text fontSize='sm' >Encuentra las últimas noticias sobre tus deportes favoritos, desde fútbol hasta tenis, baloncesto, golf y mucho más.</Text>
                </Flex>
                <Flex direction='column' w='300px'>
                    <Button colorScheme='gray' marginBottom='20px' w='fit-content'><NavLink to="/noticias/tech">Tecnología</NavLink></Button>
                    <Text fontSize='sm' >Mantente al día con las últimas tendencias tecnológicas, desde disposotivos móviles hasta inteligencia aritificial, robótica y mucho más.</Text>
                </Flex>
                <Flex direction='column' w='300px'>
                    <Button colorScheme='gray' marginBottom='20px' w='fit-content'><NavLink to="/noticias/economics">Economia</NavLink></Button>
                    <Text fontSize='sm' >Descubre las últimas noticias económicas, desde mercados financieros hasta empresas, negocios, política fiscal y mucho más.</Text>
                </Flex>
            </Flex>

        </div>
    );
}

export default NoticiasHome;
