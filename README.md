# Case Amaro

API que insere na base de dados produtos enviados pelo cliente, bem como consulta esses produtos com filtros e paginação.

## Descrição do Projeto

A API insere dados de produtos enviados em um arquivo JSON ao banco de dados. Esses dados podem ser pesquisados e ser filtrados por queries como "id", "name" ou "tags", ordenados por ordem crescente "ASC", ou descrescente "DESC", e paginados.

## Entidades (Typescript)
### Products (produtos)
Representa os produtos de nossa aplicação. Os produtos são compostos pelas seguintes características:

- ```id (string) ```

- ```name (string)```

- ``` tags (string) ```

## Tabelas (MySQL)
### Case_Amaro_Products
- ```id VARCHAR(255) e chave primária```
- ```name VARCHAR(255) e não-nulo```
- ```tags JSON e não-nulo```

##  Instruções
### Instalando as dependências
- ```npm install:```
Instala todas as dependências listadas no  ```package.json```.
### Inserindo o arquivo de dados
O arquivo ```products.JSON``` deve ser inserido no diretório ```src/migrations```
### Criando o arquivo .env:
Criar o arquivo ```.env``` e configurar com as informações de seu banco de dados.
```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
JWT_KEY = "minha-senha-segura"
JWT_EXPIRES_IN = "24h"
BCRYPT_SALT_ROUNDS = 12
```
### Executar o projeto:
- ```npm run dev```:
Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor ```localhost``` toda a vez que o projeto for alterado e salvo.

## Funcionalidades 

**1. Inserção dos produtos**
- **Método:** ```POST ```
- **Caminho:** ```/product/insert ```
- **Entrada:**  ```nenhuma ```
- **Saída:** ```mensagem de sucesso. Ao final, retorna um token de acesso ao sistema```
- **Validações e regras de negócio:**
   - ```o arquivo JSON com os dados, deve estar na pasta do projeto```
 
 **2. Busca pelos produtos**
- **Método:** ```GET ```
- **Caminho:** ```/product```
- **Entrada:**  ```token de acesso, opcionais: queries search, sort, order e page```
- **Saída:** ```uma lista com todos os produtos ```
- **Validações e regras de negócio:**
   - ```o token de acesso passado deve ser válido```


## Documentação (links)
* [Postman](https://documenter.getpostman.com/view/21578696/2s83ziQ4zQ)

## Coverage
![Seleção_040](https://user-images.githubusercontent.com/104534121/194899611-a6d3953e-86bb-42c9-9f0e-57cecb34c5a6.png)

## Tecnologias Utilizadas

- NodeJS
- TypeScript
- MySQL
- Knex
- Express
- Cors
- JWT
- BcryptJS
- Markdown
- Jest

## Autor

- * [Gabriel Wenchenck](https://github.com/gabrielwenchenck)

