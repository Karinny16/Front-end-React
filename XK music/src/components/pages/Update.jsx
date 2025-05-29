import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import style from "./Update.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SelectA from "../form/SelectA";
import Button from "../form/Button";
import Botao from "../../Botao";

const Update = () => {
  // Estado dos dados do "livro"
  const [musica, setMusica] = useState({});

  // Recupera o id_musica da URL
  const { id_musica } = useParams();

  // Objeto de navegação
  const navigate = useNavigate();

  // Estado para as categorias
  const [categories, setCategories] = useState([]);

  // Handler para atualizar os valores de input
  function handlerChangeMusica(event) {
    setMusica({
      ...musica,
      [event.target.name]: event.target.value,
    });
  }

  function handlerChangeCategory(event) {
    setMusica({
      ...musica,
      categoria: event.target.options[event.target.selectedIndex].text,
    });
  }

  function handlerChangeAvaliacao(event) {
    setMusica({
      ...musica,
      avaliacaoId: event.target.options[event.target.selectedIndex].value,
    });
  }
  // Recupera os dados das categorias
  useEffect(() => {
    fetch(`http://localhost:3000/avaliacoes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Recupera os dados do livro do backend
 useEffect(() => {
  fetch(`http://localhost:3000/informacoes/${id_musica}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Dado recebido:", data);
      setMusica(data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [id_musica]);

  // Função para atualizar os dados (PUT)
  function updateBook(musicaToUpdate) {
    console.log("Enviando:", JSON.stringify(musicaToUpdate));

    fetch(`http://localhost:3000/comentarios/${id_musica}`, {
      // use o id correto
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(musicaToUpdate),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/perfil", { state: "Avaliação atualizado com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Função de submit
  function submit(event) {
    event.preventDefault();
    updateBook(musica);
  }

  return (
    <section className={style.create_book_container}>
      <h1>ALTERAÇÃO DE Avaliações</h1>

      <form onSubmit={submit}>
        <Input
          text="Nome da Música"
          type="text"
          name="nome_musica"
          id="txt_Musica"
          placeholder="Digite o nome da música"
          handlerChange={handlerChangeMusica}
          value={musica.nome_musica || ""}
        />

        <Input
          text="Nome do Cantor(a)"
          type="text"
          name="nome_cantor"
          id="txt_Musica"
          placeholder="Digite o nome do Cantor(a)"
          handlerChange={handlerChangeMusica}
          value={musica.cantor_musica}
        />

        <SelectA
          name="avaliacao"
          id="txt_Musica"
          text="Avaliação da Música"
          handlerChange={handlerChangeAvaliacao}
          value={musica.avaliacaoId}
        />
        <Input
          text="Comentário sobre a avaliação"
          type="text"
          name="comentario"
          id="txt_Musica"
          placeholder="Comente sua avaliação"
          handlerChange={handlerChangeMusica}
          value={musica.comentario}
        />
        <Select
          name="categoria"
          id="txt_Musica"
          text="Gênero da Música"
          options={categories}
          handlerChange={handlerChangeCategory}
        />
        <Button label="Editar livro" />
      </form>
    </section>
  );
};

export default Update;
