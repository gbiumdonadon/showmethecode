const FaleMais = require('../src/app/model/FaleMaisConsulta');
const db = require('../src/config/database'); 

test('Custo Com Plano Para [Origem: 011, Destino: 016, Tempo: 20, Plano: FaleMais 30]', async () => {
        const origem = 11;
        const destino = 16;
        const tempo = 20;
        const plano = "FaleMais 30"
        const faleMais = await new FaleMais(db, origem, destino, tempo, plano).atribuir_variaveis();

        expect(await faleMais.custo_com_plano(tempo, faleMais.minutos_plano, faleMais.custo_minutos)).toBe(0);
});

test('Custo Sem Plano Para [Origem: 011, Destino: 016, Tempo: 20, Plano: FaleMais 30]', async () => {
        const origem = 11;
        const destino = 16;
        const tempo = 20;
        const plano = "FaleMais 30"
        const faleMais = await new FaleMais(db, origem, destino, tempo, plano).atribuir_variaveis();

        expect(await faleMais.custo_sem_plano(faleMais.custo_minutos,tempo)).toBe(38);
});

test('Custo Com Plano Para [Origem: 011, Destino: 017, Tempo: 80, Plano: FaleMais 60]', async () => {
        const origem = 11;
        const destino = 17;
        const tempo = 80;
        const plano = "FaleMais 60"
        const faleMais = await new FaleMais(db, origem, destino, tempo, plano).atribuir_variaveis();

        expect(await faleMais.custo_com_plano(tempo, faleMais.minutos_plano, faleMais.custo_minutos)).toBe(37.4);
});

test('Custo Sem Plano Para [Origem: 011, Destino: 017, Tempo: 80, Plano: FaleMais 60]', async () => {
    const origem = 11;
    const destino = 17;
    const tempo = 80;
    const plano = "FaleMais 60"
    const faleMais = await new FaleMais(db, origem, destino, tempo, plano).atribuir_variaveis();

    expect(await faleMais.custo_sem_plano(faleMais.custo_minutos,tempo)).toBe(136);
});

test('Custo Com Plano Para [Origem: 018, Destino: 011, Tempo: 200, Plano: FaleMais 120]', async () => {
        const origem = 18;
        const destino = 11;
        const tempo = 200;
        const plano = "FaleMais 120"
        const faleMais = await new FaleMais(db, origem, destino, tempo, plano).atribuir_variaveis();

        expect(await faleMais.custo_com_plano(tempo, faleMais.minutos_plano, faleMais.custo_minutos)).toBe(167.2);
});

test('Custo Sem Plano Para [Origem: 018, Destino: 011, Tempo: 200, Plano: FaleMais 120]', async () => {
    const origem = 18;
    const destino = 11;
    const tempo = 200;
    const plano = "FaleMais 120"
    const faleMais = await new FaleMais(db, origem, destino, tempo, plano).atribuir_variaveis();

    expect(await faleMais.custo_sem_plano(faleMais.custo_minutos,tempo)).toBe(380);
});