const FaleMaisDados = require('./FaleMaisDados');

class FaleMaisConsulta {

    constructor(db,origem,destino,tempo,plano) {
        this.__db = new FaleMaisDados(db);
        this.origem = origem;
        this.destino = destino;
        this.tempo = tempo;
        this.plano = plano;
        this.minutos_plano = 0;
        this.custo_minutos = 0;
    }

    plano_minutos = async () => {
        try {
            const result = await this.__db.tempo_ligacao(this.plano);
            return result[0]['minutos'];
        } catch (err) {
            return new Error(err);
        }
    }

    custo_minuto = async () => {
        const result = await this.__db.custo_ligacao(this.origem, this.destino);
        return result[0] == undefined ? new Error(1) : result[0]['custo']
    }

    custo_sem_plano = (custo_minutos, tempo) => { 
        return custo_minutos * tempo
    }

    custo_com_plano = (tempo_ligacao, minutos_plano, custo_ligacao) => {
        return tempo_ligacao <= minutos_plano ? 0 : custo_ligacao * ((tempo_ligacao-minutos_plano)*1.1)
    }

    atribuir_variaveis = async () => {
        this.minutos_plano = await this.plano_minutos();
        this.custo_minutos = await this.custo_minuto();
        return this
    }
}

module.exports = FaleMaisConsulta;