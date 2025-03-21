import React, { useState } from "react";
import style from './Playlist.module.css';
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";
import SelectA from "../form/SelectA"; 

const Playlist = () => {
    const [musica, setMusica] = useState({
        nomeMusica: '',
        nomeCantor: '',
        comentario: '',
        categoria: '',
        avaliacao: ''
    });

    // Função para capturar dados dos inputs
    function handlerChangeMusica(event) {
        setMusica({
            ...musica, [event.target.name]: event.target.value 
        });
    }

    // Função para capturar dados do Select 
    function handlerChangeCategory(event) {
        setMusica({
            ...musica, categoria: event.target.options[event.target.selectedIndex].text 
        });
    }

    // Função para capturar dados do SelectA 
    function handlerChangeAvaliacao(event) {
        setMusica({
            ...musica, avaliacao: event.target.options[event.target.selectedIndex].text 
        });
    }

    // Função de envio de dados para a api
    function submit(event) {
        event.preventDefault();
        console.log(musica); 
    }

    return(  
        <section> 
           
            <h1 className={style.titulo}>XK MUSIC: Um toque, Uma vibe</h1> 
            <form onSubmit={submit}>                     
    
                <section className={style.create_playlist_container}>      
                     <div className={style.fundo}>
                    <h1 className={style.subtitulo}>Crie seu comentario da sua musica do momento</h1>  
                        <SelectA
                        name='avaliacao'   
                        id='txt_Musica'  
                        text='Avaliação da Musica'
                        handlerChange={handlerChangeAvaliacao}  
                    />


                    <Input         
                        text='Nome da Musica'         
                        type='text'          
                        name='nomeMusica'   
                        id='txt_Musica'  
                        placeholder='Digite o nome da musica' 
                        handlerChange={handlerChangeMusica}            
                    />  

                    <Input         
                        text='Nome do Cantor(a)'         
                        type='text'          
                        name='nomeCantor'   
                        id='txt_Musica'  
                        placeholder='Digite o nome do Cantor(a)' 
                        handlerChange={handlerChangeMusica}            
                    />  

                    <Select
                        name='categoria' 
                        id='txt_Musica' 
                        text='Gênero da Musica'
                        handlerChange={handlerChangeCategory}
                    />

                    <Input         
                        text='Comentario sobre a avaliação'         
                        type='text'          
                        name='comentario'  
                        id='txt_Musica'  
                        placeholder='Comente sua avaliação' 
                        handlerChange={handlerChangeMusica}            
                    /> 

                   

                    <Button
                        label='POSTAR COMENTARIO'
                    /> 
                    </div>
                </section>

            </form>
             
        </section>
    );
};

export default Playlist;
