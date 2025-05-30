import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Delete() {

    const { id_musica } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:3000/delete/${id_musica}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/perfil',{state:'LIVRO EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <div>
            {/* <h1>TESTE DE EXCLUSÃO DE LIVRO!!!!</h1> */}
        </div>
    )
}

    export default Delete
