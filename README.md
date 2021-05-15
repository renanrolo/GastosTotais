``` por enquanto vai ficar em portugues mesmo porque eu preciso pensar no projeto, depois vem a traduçaõ =D ```
# GastosTotais
Projeto de um sistema pessoal de anotações de gastos. Contas a pagar em casa no dia a dia!

#### Mono-Repo
Por enquanto não ha a necessidade de separar os projetos, principalmente porque eles estarão utilizando a mesma base de dados.

#### Usar Docker-Composer

1. Na pasta raiz da solution executar o ```docker-composer up``` para subir as instancias dos projetos
2. Ir para a pasta auth
3. Executar o migrations
3.1 certificar-se de que o posgres está rodando
3.2 executar o comando ```npm run typeorm migration:run```


# Projetos

## Auth 
Projeto de autenticação e criação de tokens JWT. 
Por enquanto o projeto Auth está criando novos usuários.

