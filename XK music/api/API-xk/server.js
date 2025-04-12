import express from 'express';
import cors from 'cors';
import routesComment from './rotas/routesComment.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', routesComment);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
 

// app.post('/usuarios', (
//     request, response) => {
//             console.log(request.body)

//         response.send('ok,post')
//     } )
// app.get('/usuarios', (
//     request, response) => {
//         response.send('ok,deu bom')
//     } )

/*
app.post('/usuarios')
app.put('/usuarios')
app.delete('/usuarios')
*/

/*
1.Tipo de rota/ Método HTTP
2.endereço

*/



