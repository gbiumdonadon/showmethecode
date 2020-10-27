const FaleMais = require('../model/FaleMaisConsulta');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (_, res) => {
        res.render('consulta');
    });

    app.get('/consulta', async (req, res) => {
        const { origem, destino, tempo, plano } = req.query
        const faleMais = await new FaleMais(db,origem,destino,tempo,plano).atribuir_variaveis();

        faleMais.custo_sem_plano = faleMais.custo_sem_plano(faleMais.custo_minutos, tempo);
        faleMais.custo_com_plano = faleMais.custo_com_plano(tempo, faleMais.minutos_plano, faleMais.custo_minutos);

        if (Number.isInteger(faleMais.custo_sem_plano) == false || Number.isInteger(faleMais.custo_com_plano) == false) {
            res.render('erro');

        } else {
            res.render('resultado_consulta', {
                origem: faleMais.origem,
                destino: faleMais.destino,
                tempo: faleMais.tempo,
                plano: faleMais.plano,
                custo_sem_plano: faleMais.custo_sem_plano,
                custo_com_plano: faleMais.custo_com_plano
            });
        }
    });

    app.get('/erro', async (req, res) => {

        res.render('../views/erro');
    });
}