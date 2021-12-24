# Blog

## Overview
- The main purpose of this project is to build a webpage to create, edit, delete and relate articles with its category. The application provides knowledge about my studies on `Node.js`, `EJS` and `MySQL`/.

<hr>

## Libraries 

- Dotenv => Hide keys;
- EJS => Render HTML;
- Express => Flexible framework;
- Sequelize => Connect database;
- Slugify => Create string without space;


<hr>

## Configuring database

1. As we use MySQL to build our data base, you can download it at this link if you don't have it already: 
`https://dev.mysql.com/downloads/mysql/ ` 
2. Download `MySQL Workbench` at `https://www.mysql.com/products/workbench/`

3. After installing `WorkBench` click on `MySQL Connections`:

4. Then go on the top of the page and click on `Create new schema`

5. The name of the `new_schema` must be `blog`

6. Add `.env` file into main folder, and put:

    - `DATABASE_PASSWORD = YourPassword`;
    - `DATABASE_USER = root`;
    - `DATABASE_TABLE = blog`;
    - `DATABASE_HOST = localhost`;
    - `DATABASE_DIALECT = mysql`;

## Running the application

- Run: `npm install`;
- Run: `nodemon server.js`;
- On web browser: http://localhost:3000/
