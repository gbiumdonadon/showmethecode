class FaleMaisDados {
    constructor(db) {
        this.__db = db;
    }

    async custo_ligacao(origem,destino) {
        return new Promise((resolve, reject) => {
            this.__db.all(
                `SELECT custo
                FROM custo_ligacao
                WHERE origem = '${origem}' AND destino = '${destino}'`,
                (error, result) => {
                    if (error) return reject(new Error ('custo não encontrado.'));

                    return resolve(result);
                }
            )
        });
    }

    async tempo_ligacao(plano) {
        return new Promise((resolve, reject) => {
            this.__db.all(
                `SELECT minutos
                FROM tempo_minuto
                WHERE plano = '${plano}'`,
                (error, result) => {
                    if (error) return reject('Plano não encontrado.');

                    return resolve(result);
                }
            )
        });
    }
}

module.exports = FaleMaisDados;