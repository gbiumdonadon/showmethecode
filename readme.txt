- Execute "npm install" para instalar os módulos necessários.
- Execute "npm start" e acesse http://localhost:3000 para visualizar a aplicação.


Para executar os testes execute "npm test"


Enunciado:
Importante
● Orientação a objeto
● Testes
● Arquitetura/Design interno da aplicação
● Clareza e organização do código
Extras (Legal se tiver, mas não os mais importantes)
● Domain Driven Design (DDD)
● Clean Architecture
● Uso avançado da linguagem e/ou framework escolhidos
● Uso de C# ou JavaScript/Nodejs
● Interface gráfica bem-acabada
O projeto pode ser feito em qualquer linguagem, então escolha a que você se sentir
confortável. Pode ser utilizado qualquer biblioteca externa, principalmente para os testes
(RSpec ou NUnit, por exemplo). Antes de finalizar o teste, adicione um arquivo README.txt
com os procedimentos para executar os testes e a aplicação.

Desafio

A empresa de telefonia VxTel, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.
Normalmente um cliente VxTel pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
de origem e destino:
Origem Destino $/min
011 	016 	1.90
016 	011 	2.90
011 	017 	1.70
017 	011 	2.70
011 	018 	0.90
018 	011 	1.90

Com o novo produto FaleMais da VxTel o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
A VxTel, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
problema. 