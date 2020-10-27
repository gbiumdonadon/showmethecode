const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database(':memory:');

const custo_ligacao = 
`
CREATE TABLE custo_ligacao (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    origem INT,
    destino INT,
    custo FLOAT
);
`;

const dados_custo_origem_destino =
`
INSERT INTO custo_ligacao (
    origem,
    destino,
    custo
) VALUES (011,016,1.9),(016,011,2.9),(011,017,1.7),(017,011,2.7),(011,018,0.9),(018,011,1.9);
`;

const tempo_minuto = 
`
CREATE TABLE IF NOT EXISTS tempo_minuto (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    plano INT,
    minutos INT
);
`;

const dados_tempo_minuto =
`
INSERT INTO tempo_minuto (
    plano,
    minutos
) VALUES ('FaleMais 30',30),('FaleMais 60',60),('FaleMais 120',120);
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(custo_ligacao);
    bd.run(dados_custo_origem_destino);
    bd.run(tempo_minuto);
    bd.run(dados_tempo_minuto);
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('db encerrado!');
        process.exit(0);
    })
);

module.exports = bd;

