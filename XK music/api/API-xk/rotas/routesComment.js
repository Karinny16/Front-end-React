import express from 'express';
import modelComent from '../model/modelComent.js';

const router = express.Router();

/* ROTA DE TESTE DE CONEXÃO COM A API */
router.get('/', (req, res) => {
  return res.status(200).json({ status: 'API DE COMENTÁRIOS CONECTADA!' });
});

/* ROTA DE INSERÇÃO DE COMENTÁRIO */
router.post('/inserirComentario', (req, res) => {
  const { nomeMusica, nomeCantor, comentario, categoria, avaliacao, album_cover } = req.body;
  modelComentario.create({ nomeMusica, nomeCantor, comentario, categoria, avaliacao, album_cover })
    .then(() => {
      return res.status(201).json({ errorStatus: false, mensageStatus: 'COMENTÁRIO INSERIDO COM SUCESSO' });
    })
    .catch((error) => {
      return res.status(400).json({ errorStatus: true, mensageStatus: 'HOUVE UM ERRO AO INSERIR O COMENTÁRIO', errorObject: error });
    });
});

/* ROTA DE LISTAGEM GERAL DE COMENTÁRIOS */
router.get('/listagemComentarios', (req, res) => {
  modelComentario.findAll()
    .then((response) => {
      return res.status(200).json({ errorStatus: false, mensageStatus: 'COMENTÁRIOS LISTADOS COM SUCESSO', data: response });
    })
    .catch((error) => {
      return res.status(400).json({ errorStatus: true, mensageStatus: 'HOUVE UM ERRO AO LISTAR OS COMENTÁRIOS', errorObject: error });
    });
});

/* ROTA DE LISTAGEM DE COMENTÁRIO POR ID */
router.get('/listagemComentario/:id', (req, res) => {
  const { id } = req.params;
  modelComentario.findByPk(id)
    .then((response) => {
      return res.status(200).json({ errorStatus: false, mensageStatus: 'COMENTÁRIO RECUPERADO COM SUCESSO', data: response });
    })
    .catch((error) => {
      return res.status(400).json({ errorStatus: true, mensageStatus: 'HOUVE UM ERRO AO RECUPERAR O COMENTÁRIO', errorObject: error });
    });
});

/* ROTA DE EXCLUSÃO DE COMENTÁRIO */
router.delete('/excluirComentario/:id', (req, res) => {
  const { id } = req.params;
  modelComentario.destroy({ where: { id } })
    .then(() => {
      return res.status(200).json({ errorStatus: false, mensageStatus: 'COMENTÁRIO EXCLUÍDO COM SUCESSO' });
    })
    .catch((error) => {
      return res.status(400).json({ errorStatus: true, mensageStatus: 'HOUVE UM ERRO AO EXCLUIR O COMENTÁRIO', errorObject: error });
    });
});

// Exportação do router para uso no arquivo principal
export default router;
