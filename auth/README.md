# Auth
Projeto de autenticação.

### Auth Api

```[POST] localhost/api/v1/auth-user```
```
Request
{
    "email": "{{$randomEmail}}",
    "password": "123"
}
```
```
Response
{
    "UserUuid": "24b92587-c0a5-4d0e-acbe-8635e4c451b1",
    "FullName": "renan@gmail.com",
    "Email": "renan@gmail.com",
    "CreationDate": "2021-05-08T19:53:06.224Z",
    "LastUpdateDate": "2021-05-08T19:53:06.224Z"
}
```
