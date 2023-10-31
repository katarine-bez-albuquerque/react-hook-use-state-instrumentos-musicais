import { useState } from "react";
import { ImagensGlobais } from "componentes/ImagensGlobais";
import Container from "componentes/Container";
import Footer from "componentes/Footer";
import Formulario from "componentes/Formulario";
import Campo from "componentes/Formulario/Campo";
import Header from "componentes/Header";
import Instrumento from "componentes/Instrumento";
import Item from "componentes/Instrumento/Item";
import Navbar from "componentes/Navbar";
import Titulo from "componentes/Titulo";

const Home = () => {

    const [ nome, setNome ] = useState('');
    const [ imagem, setImagem ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ lista, setLista ] = useState([]);

    const salvarInstrumento = (evento) => {
        
        evento.preventDefault();
        setLista([...lista, {nome,imagem,descricao}]); 
                
        setNome('');
        setImagem('');
        setDescricao('');
    }

    return(
        <Container>
            <Navbar />
            <Header descricao="Os instrumentos mais usados no mundo." />
            <Titulo titulo="Cadastre um Instrumento Musical" />
            <main>
                <Formulario onSubmit={ salvarInstrumento }>
                    <Campo 
                        type="text" 
                        required={true}
                        maxLength="18"
                        placeholder="Nome do Instrumento" 
                        value={ nome }
                        onChange={ ( evento ) => setNome(evento.target.value) }
                    />
                    <Campo 
                        type="url" 
                        required={true}
                        placeholder="Endereço web da Imagem do Instrumento" 
                        value={ imagem } 
                        onChange={ ( evento ) => setImagem(evento.target.value) }
                    />
                    <Campo 
                        type="text" 
                        required={true}
                        maxLength="50"
                        placeholder="Descrição do Instrumento" 
                        value={ descricao } 
                        onChange={ ( evento ) => setDescricao(evento.target.value) }
                    />
                    <Campo 
                        type="submit"
                        value="Salvar"
                    />
                </Formulario>
                <Instrumento>                    
                    { lista.length >0 && <Titulo titulo="Instrumentos" />}                    
                    {lista.map(item => (
                        <Item 
                            key={ item.nome }
                            imagem={ item.imagem }
                            alt={ item.nome }
                            titulo={ item.nome }
                            descricao={ item.descricao }
                        />                        
                    ))}                    
                </Instrumento>
            </main>
            <Footer 
                imagem={ ImagensGlobais.violao } 
                alt="Logo Footer" 
                criadoPor="KBA Digital" 
                ano="@2023" />            
        </Container>
    );
}

export default Home;