import { useParams } from "react-router-dom";
import React from "react";
import { Text, Flex, Button } from '@chakra-ui/react';
import './Noticias.css';


const Noticias = () => {

    const { id } = useParams();

    const [page, setPage] = React.useState(1);
    const [searchData, setSearchData]= React.useState("");
    const [news, setNews] = React.useState({
        articles: []
    });

    const shearchRef = React.useRef();

    React.useEffect(() => {
        const apiUrl = 'https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api'
        fetch(apiUrl + '/' + id + '/' + page + '.json')
            .then(data => data.json())
            .then(dataParsed =>{
                setNews(dataParsed);
            } );
    }, [page, id]);


    const goPrevius = () => {
        if (page > 0) {
            setNews({ articles: [] });
            setPage(page - 1);
        }
    }
    const goNext = () => {
        if (page < 5) {
            setNews({ articles: [] });
            setPage(page + 1);
        }
    }

    const search = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setSearchData(shearchRef.current.value);
    }


const filteredNews = news.articles?.filter(article =>{ return article.title.includes(searchData)})


    return (
        <div >
            {
                <div className="page">
                    <form onSubmit={search}>
                        <input type="text" className="input" ref={shearchRef}  />
                    </form>
                    <div className="articles-list">
                        {filteredNews.map(article => {
                            return <div key={article._id} className="arcticle-card">
                                <h1>{article.title}</h1>
                                <img src={article.media} alt={article.title}/>
                                <p>{article.excerpt}</p>
                            </div>
                        })}

                    </div>
                    <Flex justifyContent='space-around'>
                        <Button colorScheme='gray' isDisabled={page === 1} onClick={goPrevius}>Anterior</Button>
                        <Text>Página {page} de 5</Text>
                        <Button colorScheme='gray' isDisabled={page === 5} onClick={goNext}>Siguiente</Button>
                    </Flex>
                </div>
            }
        </div>

    );
}

export default Noticias;
