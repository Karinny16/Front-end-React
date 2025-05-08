import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './Playlist.module.css';
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";
import SelectA from "../form/SelectA"; 

const Playlist = () => {
    const navigate = useNavigate(); 

    const [musica, setMusica] = useState({
        nome_musica: '',
        nome_cantor: '',
        comentario: '',
        categoria: '',
        avaliacaoId: ''
    });

    function handlerChangeMusica(event) {
        setMusica({
            ...musica, [event.target.name]: event.target.value 
        });
    }

    function handlerChangeCategory(event) {
        setMusica({
            ...musica, categoria: event.target.options[event.target.selectedIndex].text 
        });
    }

    function handlerChangeAvaliacao(event) {
        setMusica({
            ...musica, avaliacaoId: event.target.options[event.target.selectedIndex].value 
        });
    }

    async function submit(event) {
        event.preventDefault();
        console.log(musica);
        await fetch('http://localhost:3000/comentarios', {
            method: 'POST',
            headers: {
                'Content-Type':'application/Json',
                'Acess-Control-Allow-Origin':'*',
                'Acess-Control-Allow-Headers':'*'
            },
            body: JSON.stringify(musica),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            console.log(response);
            throw new Error();
        })
        .then(data => {
            alert('Comentário enviado com sucesso!');
            setMusica({ nome_musica: '', nome_cantor: '', comentario: '', categoria: '', avaliacaoId: '' });

            navigate("/perfil");
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao registrar comentário!');
        });
    }

    return(  
        <section> 
            <h1 className={style.titulo}>XK MUSIC: Um toque, Uma vibe</h1> 
            <form onSubmit={submit}>                     
                <section className={style.create_playlist_container}>      
                    <div className={style.fundo}>
                        <h1 className={style.subtitulo}>Crie seu comentário da sua música do momento</h1>  
                        <SelectA
                            name='avaliacao'   
                            id='txt_Musica'  
                            text='Avaliação da Música'
                            handlerChange={handlerChangeAvaliacao}  
                        />

                        <Input         
                            text='Nome da Música'         
                            type='text'          
                            name='nome_musica'   
                            id='txt_Musica'  
                            placeholder='Digite o nome da música' 
                            handlerChange={handlerChangeMusica}            
                        />  

                        <Input         
                            text='Nome do Cantor(a)'         
                            type='text'          
                            name='nome_cantor'   
                            id='txt_Musica'  
                            placeholder='Digite o nome do Cantor(a)' 
                            handlerChange={handlerChangeMusica}            
                        />  

                        <Select
                            name='categoria' 
                            id='txt_Musica' 
                            text='Gênero da Música'
                            handlerChange={handlerChangeCategory}
                        />

                        <Input         
                            text='Comentário sobre a avaliação'         
                            type='text'          
                            name='comentario'  
                            id='txt_Musica'  
                            placeholder='Comente sua avaliação' 
                            handlerChange={handlerChangeMusica}            
                        /> 

                        <Button label='POSTAR COMENTÁRIO' /> 
                    </div>
                </section>
            </form>
        </section>
    );
};

export default Playlist;
