import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./informacoes.module.css";

import Botao from "../../Botao";

// import danca_morte from '../../assets/A dança da morte.PNG'

const Informacoes = () => {
  const { id_musica } = useParams();
  console.log("ID recebido pelo componente:", id_musica);

  const [musica, setMusica] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/informacoes/${id_musica}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Resposta do servidor:", data); // Veja a estrutura real da resposta
        setMusica(data); // Ajuste dependendo do formato
      })
      .catch((err) => console.error("Erro ao buscar informações:", err));
  }, []);

  return (
    <div>
      {/* <div className={style.container_img}>
                <img className={style.img_book_detail} src={danca_morte} alt='Capa do livro: As cavernas de aço' />
            </div> */}

      <div className={style.div1}>
        <span className={style.comentario}>
          Comentário:{musica.comentario}{" "}
        </span>
        <span className={style.avaliacaoId}>
          Avaliação:{"⭐".repeat(musica.avaliacaoId)}
        </span>

        <span className={style.musica}>Música:{musica.nome_musica}</span>
        <span className={style.cantor}>Cantor:{musica.nome_cantor}</span>
        <span className={style.categoria}>Gênero musical:{musica.categoria}</span>

        <div className={style.button}>
          <Botao label="EDITAR" router="/updateBook/" index={musica.id} />

          <Botao label="EXCLUIR" router="/deleteBook/" index={musica.id} />
        </div>
      </div>
    </div>
  );
};

export default Informacoes;
