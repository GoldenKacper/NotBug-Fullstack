# NotBug-Fullstack

![NotBug Logo](https://notbug.pl/assets/images/logo/logo-color-blue.svg)

A repository created to perform recruitment tasks for **NotBug**. This repository contains multiple projects, each
designed to demonstrate proficiency in different technologies and frameworks. Each task is organized as a separate
subproject within its own folder and can be independently run using Docker Compose.

_While I am aware that software should be subject to testing, this requirement was not included in the specification during the initial phase of the project. 
Therefore, I decided to focus on the main functionalities of the application._

## Table of Contents

- [Tasks](#tasks)
- [Projects](#projects)
    - [1.1 Angular App](#11-angular-app)
    - [1.2 RxJs](#12-rxjs)
    - [1.3 Pokémon Angular App](#13-pokémon-angular-app)
    - [2.1 Flask To-Do List Application](#21-flask-to-do-list-application)
    - [2.2 Django Blog Application](#22-django-blog-application)
    - [2.4 Python Script](#24-python-script)
- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
- [License](#license)
- [Acknowledgments](#acknowledgments)


## Tasks

- **1.1. Angular app** – create application which allow user to store in localstorage cars. To each car user are allowed to store information about services (parts and costs) and display them in the list in car details view.
- **1.2. RxJs** – create a script which will make avg of age persons which living in Poland from data bellow. 

    **Data:**

    ```javascript
    2.	let persons = [
    3.	    {
    4.	        id: 1,
    5.	        name: "Jan Kowalski"
    6.	    }, {
    7.	        id: 2,
    8.	        name: "John Doe"
    9.	    }, {
    10.	        id: 3,
    11.	        name: "Jarek Kaczka"
    12.	    }
    13.	]
    14.	
    15.	let ages = [
    16.	    {
    17.	        person: 1,
    18.	        age: 18
    19.	    }, {
    20.	        person: 2,
    21.	        age: 24
    22.	    }, {
    23.	        person: 3,
    24.	        age: 666
    25.	    }
    26.	]
    27.	
    28.	let locations = [
    29.	    {
    30.	        person: 1,
    31.	        country: "Poland"
    32.	    }, {
    33.	        person: 3,
    34.	        country: "Poland"
    
    ```

- **1.3. Angular app** – create app to display list of pokemons and details view for each of them. Data need to be fetched from https://pokeapi.co/ using HTTP requests.
- **2.1. Create Flask app** which will be REST API app for To-Do list, which allow user to create task, list, update and delete them. Data could be “mocked”, extra points for using SQLite or PostgreSQL. URLS need to be in REST API convention.
- **2.2. Create Django App** – blog app with registration and possibility to create new entries and update them by authors after login in. App should also allow user to create a new accounts.
- **2.4. Python:**
    
    - Create good script to create new list, which only contains users from Poland. Try to do it with List Comprehension.
    `users = [{"name": "Kamil", "country":"Poland", {"name":"John", "country": "USA"}, {"name": "Yeti"}]`
    
    - Display sum of first ten elements starting from element 5:
    `numbers = [1,5,2,3,1,4,1,23,12,2,3,1,2,31,23,1,2,3,1,23,1,2,3,123]`
    
    - Fill list with powers of 2, `n [1..20]`


## Projects

### 1.1 Angular App

[Read more](./1_1_Angular_App/README.md)

### 1.2 RxJs

[Read more](./1_2_RxJs/README.md)

### 1.3 Pokémon Angular App

[Read more](./1_3_Angular_App/README.md)

### 2.1 Flask To-Do List Application

[Read more](./2_1_Flask_App/README.md)

### 2.2 Django Blog Application

[Read more](./2_2_Django_App/DjangoApp/README.md)

### 2.4 Python Script

[Read more](./2_4_Python/README.md)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker:** Installed and running on your machine
- **Docker Compose:** Installed on your machine

## How to Run

To run any of the projects in this repository, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/GoldenKacper/NotBug-Fullstack.git
    cd NotBug-Fullstack
    ```

2. Make sure you have the prerequisites installed:

    ```bash
    docker -v
    ```

   Example output:
   `Docker version 20.10.7, build f0df350`

    ```bash
    docker-compose -v
    ```

   Example output:
   `Docker Compose version v2.29.7-desktop.1`

**If any of the prerequisites are missing, they must be installed first**

3. Go to the selected project directory and follow the instructions in the README file.

   Example:

    ```bash
    cd ./1_3_Angular_App
    ```

   Run the example project using Docker Compose:

    ```bash
    docker-compose up
    ```

## License

This project is licensed under the GNU General Public License v3.0.

## Acknowledgments

- **NotBug** for the opportunity to work on these projects.
- **Angular** and its community for the robust framework.
- **Angular Material** for the beautiful UI components.
- **Flask** for the lightweight web framework.
- **Django** for the powerful web framework.
- **Python** for the versatile programming language.
- **TypeScript** for the statically typed language.
- **Docker** for simplifying deployment processes.
- **PokeAPI** for providing comprehensive Pokémon data.

