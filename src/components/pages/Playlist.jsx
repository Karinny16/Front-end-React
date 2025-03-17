import React from "react";
import style from './Playlist.module.css';
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const Playlist = () => {
    return(  
        <section>   
            <h1 className={style.titulo}>XK MUSIC: Um toque, Uma vibe</h1>       
            <section className={style.create_playlist_container}>      
                <h1 className={style.subtitulo}>Crie seu comentario da sua musica do momento</h1>                       
                <Input         
                    text='Nome da Musica'         
                    type='text'          
                    name='txt_livro'   
                    id='txt_livro'     
                    placeholder='Digite o nome da musica'             
                />  
                <Input         
                    text='Nome do Cantor(a)'         
                    type='text'          
                    name='txt_livro'   
                    id='txt_livro'     
                    placeholder='Digite o nome do Cantor(a)'             
                />  

                <Select
                   name='slc_categoria'
                   id='slc_categoria'
                   text='Gënero da Musica'
                />

                <Input         
                    text='Comentario sobre a avaliação'         
                    type='text'          
                    name='txt_livro'   
                    id='txt_livro'     
                    placeholder='Comente sua avaliação'             
                />  
                <Button
                label='POSTAR COMENTARIO'
                /> 
            </section>  
        </section>
    );
};

export default Playlist;
