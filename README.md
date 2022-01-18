# http-todo-api

### Table of Contents

1. [General-Information](#general-information)

2. [Features](#features)

3. [Technologies](#technologies)

4. [Setup](#setup)

### General-Information

Http core package based api. As a db I used a simply sqlite with sequalize.
Reason of implementation was just for learning purposes, though it works with the required
input the api is not completely finished.

### Features

-   REST API

-   CommonJS

-   Custom error/body/url parser

-   Custom error responses

### Technologies

1. Node

2. Sequalize

### Setup

Steps:

-   install dependencies

-   create config.json -> src/config directory

-   add base environment config -> config.json

-   run server

```javascript

{
    "NODE_PORT": 8080
}

```

```shell

$ npm i

$ cd src/config & touch config.json

$ npm run dev

```
