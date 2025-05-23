import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();

app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'Bakashi@16',
    database: 'Playlist',
});

db.connect((err) => {
    console.log(err ? `Erro ao conectar: ${err.message}` : 'Conexão bem-sucedida!');
});

// Função para executar consultas ao banco
const queryDatabase = (sql, params, res, successMessage) => {
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(`Erro ao executar query: ${err.message}`);
            res.status(500).json({ error: 'Erro ao processar requisição.' });
        } else {
            res.status(200).json(successMessage ? { success: true, message: successMessage, result } : result);
        }
    });
};

// Rotas
app.post('/comentarios', (req, res) => {console.log('aaaaaaaaaa')
    const { nome_musica, nome_cantor, comentario, categoria, avaliacaoId } = req.body;
    console.log(nome_musica, nome_cantor, comentario, categoria,avaliacaoId)  

    if (!nome_musica || !nome_cantor || !categoria || !avaliacaoId){
        console.log('bbbbbbbbbb')
        return res.status(400).json({ error: 'Campos obrigatórios faltando!' });}

  const sql = `INSERT INTO comment (nome_musica, nome_cantor, comentario, categoria, avaliacaoId)
                 VALUES (?, ?, ?, ?, ?)`;
    queryDatabase(sql, [nome_musica, nome_cantor, comentario || null, categoria, avaliacaoId], res, 'Comentário criado!');
});

app.get('/comentarios', (req, res) => {
    queryDatabase('SELECT * FROM comment', [], res);
});

app.get('/comentarios/avaliacao/:avaliacaoId', (req, res) => {
    const sql = 'SELECT * FROM comment WHERE avaliacaoId = ?';
    queryDatabase(sql, [req.params.avaliacaoId], res);
});
app.get('/informacoes/:id_musica', (req, res) => {
    const sql = 'SELECT * FROM comment WHERE id = ?';
    db.query(sql, [req.params.id_musica], (err, result) => {
        if (err) {
            console.error('Erro ao executar query:', err);
            res.status(500).json({ error: 'Erro ao buscar informações.' });
        } else {
            console.log('Dados retornados:', result); // Verifique se está retornando dados
            res.json(result.length > 0 ? result[0] : {}); // Retorna objeto vazio se não encontrar
        }
    });
});


app.post('/avaliacoes', (req, res) => {
    const { descricao } = req.body;
    if (!descricao)
        return res.status(400).json({ error: 'Descrição é obrigatória!' });

    const sql = `INSERT INTO avaliacao (descricao) VALUES (?)`;
    queryDatabase(sql, [descricao], res, 'Avaliação criada!');
});

app.get('/avaliacoes', (req, res) => {
    queryDatabase('SELECT * FROM avaliacao', [], res);
});

// Inicialização do servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));
