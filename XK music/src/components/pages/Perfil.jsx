import React, { useState } from "react";
import style from './Perfil.module.css';

const Perfil = () => {
    const [avaliacaoId, setAvaliacaoId] = useState('');
    const [comentarios, setComentarios] = useState([]);
    const [mensagem, setMensagem] = useState('');

    const fetchFilteredComments = () => {
        if (!avaliacaoId) {
            setMensagem('Por favor, insira um ID de avaliação válido.');
            return;
        }

        fetch(`http://localhost:3000/comentarios/avaliacao/${avaliacaoId}`)
            .then((response) => response.json())
            .then((data) => {
                setComentarios(data);
                setMensagem(data.length ? '' : 'Nenhum comentário encontrado para esta avaliação.');
            })
            .catch((error) => {
                console.error('Erro ao buscar comentários:', error);
                setMensagem('Erro ao buscar comentários.');
            });
    };

    return (
        <section className={style.container}>
            <h2 className={style.title}>Buscar Comentários por Avaliação</h2>
            <div className={style.filter}>
                <input
                    type="number"
                    value={avaliacaoId}
                    onChange={(e) => setAvaliacaoId(e.target.value)}
                    placeholder="Digite a Avaliação(1 a 5)"
                />
                <button onClick={fetchFilteredComments}>Buscar</button>
            </div>
            {mensagem && <p className={style.mensagem}>{mensagem}</p>}
            <ul className={style.commentsList}>
                {comentarios.map((comentario, index) => (
                    <li key={index} className={style.commentItem}>
                        <p><strong>Música:</strong> {comentario.nome_musica}</p>
                        <p><strong>Cantor:</strong> {comentario.nome_cantor}</p>
                        <p><strong>Comentário:</strong> {comentario.comentario}</p>
                        <p><strong>Categoria:</strong> {comentario.categoria}</p>
                        <p><strong>Avaliação:</strong> {'⭐'.repeat(comentario.avaliacaoId)}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Perfil;
