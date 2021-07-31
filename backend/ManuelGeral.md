# Principios do Adonis e seus significados

## Arquitetura predominante usada

> MC (Model Controller)

---

### Model

O model é usado no Adonis como identificador das colunas do banco de dados referenciados nas migrations, neste caso tem a migration que cria a tabela "User" e suas colunas "email, name, password ...", o Model torna visivel ao Typescript as colunas tornando possível a manipulação de dados através do model mas essa manipulação é feita no controller, que irei comentar mais depois, o model só tem a função de tornar visível o banco de dados ao TS

---

### Controller

A manipulação é feita usando manipulação baseada no Query Builder Knex.js, por conta disso tem-se parte do que pode ser feito no AdonisJS documentado na Docs do Knex.js, a manipulação é feita usando Knex.js ou row da query de forma mais nativa (nativa ao SQL escolhido, no caso MySQL), com isso em mente é tudo levado como função ao route para ser tratado em rota e assim estiver disponível para o fetch/axios no front-end
