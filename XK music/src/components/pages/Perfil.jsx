import React, { useState } from "react";
import style from "./Perfil.module.css";
import Botao from "../../Botao";

const Perfil = () => {
  const [avaliacaoId, setAvaliacaoId] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const fetchFilteredComments = () => {
    if (!avaliacaoId) {
      setMensagem("Por favor, insira um ID de avaliação válido.");
      return;
    }

    fetch(`http://localhost:3000/comentarios/avaliacao/${avaliacaoId}`)
      .then((response) => response.json())
      .then((data) => {
        setComentarios(data);
        setMensagem(
          data.length ? "" : "Nenhum comentário encontrado para esta avaliação."
        );
      })
      .catch((error) => {
        console.error("Erro ao buscar comentários:", error);
        setMensagem("Erro ao buscar comentários.");
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
      {comentarios.map((comentario) => (
        <div key={comentario.id}>
          <ul className={style.commentsList}>
            <li className={style.commentItem}>
              <p>
                <strong>Música:</strong> {comentario.nome_musica}
              </p>
              <p>
                <strong>Cantor:</strong> {comentario.nome_cantor}
              </p>
              <p>
                <strong>Avaliação:</strong>{" "}
                {"⭐".repeat(comentario.avaliacaoId)}
              </p>
            </li>
          </ul>
          <Botao label="Detalhe" router="/informacoes/" index={comentario.id} />
        </div>
      ))}
    </section>
  );
};

export default Perfil;
