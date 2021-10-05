# Docs Master

Aqui está documentado a base de AdonisJS, Regra de negócio e noções mais avançadas (até onde meu conhecimento permite)

## Requisitos minimos para usar AdonisJS version 5.1

1. Typescript 4.3
2. node 14

> Obs: para a versão 5 do adonis esses são os requísitos,
> para versoẽs anteriores não é obrigatório o Typescript e o node 14

---

## Algumas considerações antes de codar

O AdonisJS tem como base o MVC (Model View Controller), porem o View no Adonis
pode ser um framework ou biblioteca mais maduro no mercado que a View
trazida por padrão no Adonis, no caso é o framework Edge (não conhecê-lo mostra
o quão limitado ele é em relação ao React ou Angular), nesse caso não precisa
por isso podemos apenas usar a arquitetura MC (Model Controller)

Entre as suas principais características está o Lucid dito como o mais poderoso 
ORM feito para node, é marcante codar com esse ORM que entre minhas poucas experiencias
é o que mais gostei de usar ao longo do tempo, não é muito complexo e é bastante escalável,
mostrarei um pouco mais do seu poder mais tarde

### Bora codar

1. Para começarmos qualquer projeto em Adonis primeiro temos que instalar o
   CLI
   em ambiente Global, mas se não quiser instala-lo globalmente pode pular essa
   parte

```
 npm i -g @adonisjs/cli
```

Para podermos começar um projeto bastar escrever no terminal na pasta
desejada o seguinte

```
npm init adonis-ts-app@latest hello-world

# Se estiver usando yarn
yarn create adonis-ts-app hello-world
```

no meu caso invés de nomear meu projeto de hello world eu o dei o nome de
Backend que ficou assim

```
yarn create adonis-ts-app Backend
```

> Ainda está em desenvolvimento, o back-end já pode ser testado mas o frontend ainda está incompleto
