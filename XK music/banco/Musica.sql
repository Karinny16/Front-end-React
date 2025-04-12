CREATE database Playlist;
use Playlist;

CREATE TABLE Avaliacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL -- Correção: Altera para String (VARCHAR)
);



CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_musica VARCHAR(255) NOT NULL,
    nome_cantor VARCHAR(255) NOT NULL,
    comentario VARCHAR(255),
    categoria ENUM('ROCK', 'POP', 'JAZZ', 'BLUES', 'CLASSICAL', 'HIPHOP', 'ELECTRONIC', 'REGGAE', 'METAL', 'COUNTRY', 'SERTANEJO'),
    avaliacaoId INT NOT NULL,
    INDEX (avaliacaoId),
    FOREIGN KEY (avaliacaoId) REFERENCES avaliacao(id)
);

select *from Comment;










#INSERT DAS TABELA Avaliacao

insert into avaliacao (id, descricao) values (1, 'Péssimo');
insert into avaliacao (id, descricao) values (2, 'Ruim');
insert into avaliacao (id, descricao) values (3, 'Bom');
insert into avaliacao (id, descricao) values (4, 'Ótimo');
insert into avaliacao (id, descricao) values (5, 'Excelente');

select *from avaliacao;



