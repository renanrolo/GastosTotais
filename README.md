# GastosTotais
Projeto de um sistema pessoal de anotações de gastos. Contas a pagar em casa no dia a dia!

Usar Docker-Composer

1. Na pasta raiz da solution executar o ```docker-composer up``` para subir as instancias dos projetos
2. Ir para a pasta auth
3. executar o comando ```npm run typeorm migration:run```



# Endpoints

### Auth Api

##### [POST] localhost/api/v1/auth-user
```
[BODY]
{
    "email": "{{$randomEmail}}",
    "password": "123"
}
[RESPONSE BODY]
{
    "UserUuid": "24b92587-c0a5-4d0e-acbe-8635e4c451b1",
    "FullName": "renan@gmail.com",
    "Email": "renan@gmail.com",
    "CreationDate": "2021-05-08T19:53:06.224Z",
    "LastUpdateDate": "2021-05-08T19:53:06.224Z"
}
```