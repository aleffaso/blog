# Blog

## Overview
The main purpose of this project is to build a webpage to create, edit, delete and relate articles with its category. The application provides knowledge about my studies on `Node.js`, `EJS` and `MySQL`.

<p align="center" style="margin: 0 10%;width:80%">
  <img  src="public/assets/src/index.png">
</p> <br>

<hr>

## Libraries 

- Bcrypt => Crypt passwords;
- Dotenv => Hide keys;
- EJS => Render HTML;
- Express => Flexible framework;
- Express-sessions => Create auth sessions;
- TinyMCE => Text editor;
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

    - `DATABASE_PASSWORD = YourPassword`
    - `DATABASE_USER = root`
    - `DATABASE_TABLE = blog`
    - `DATABASE_HOST = localhost`
    - `DATABASE_DIALECT = mysql`
    - `DATABASE_TIMEZONE = -03:00`
    - `SESSION_SECRET = passwordSecret`

<hr>

## Running the application

- Run: `npm install`;
- Run: `nodemon index.js`;
- On web browser: http://localhost:3000/

<hr>


## Screen shots

- Navbar shows categories from database;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/1.png">
</p> <br>

- Mainpage brings two buttons to register or login;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/2.png">
</p> <br>

- Create your account at the blog;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/3.png">
</p> <br>

- After you create your account, you can login;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/4.png">
</p> <br>

- The navbar will change;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/5.png">
</p> <br>

- When you create a new article it'll show as below;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/6.png">
</p> <br>

- When you create a new category it'll show as below;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/7.png">
</p> <br>

- All users will show as below;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/8.png">
</p> <br>

- All categories will show as below;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/9.png">
</p> <br>

- All articles will show as below;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/10.png">
</p> <br>

- Whenever you try to delete something from database, the message below pops up;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/11.png">
</p> <br>

- If you click on edit file, the body information will be showed at the form;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/12.png">
</p> <br>

- All articles created will be shown at the index page. If more than 4, there will be a `next`page;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/13.png">
</p> <br>

- Also a `previous`page;

<p align="center" style="margin: 0 20%;width:60%">
  <img  src="public/assets/src/14.png">
</p> <br>

<hr>

## Licenses
<br>
<p>
    <img style="width:50px;height:auto;"src="https://cdn.worldvectorlogo.com/logos/tinymce.svg" href="https://www.tiny.cloud/get-tiny/self-hosted/">
</p>
<p>
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
</p>
