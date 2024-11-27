# NotBug-Fullstack

![NotBug Logo](https://notbug.pl/assets/images/logo/logo-color-blue.svg)

A repository created to perform recruitment tasks for **NotBug**. This repository contains multiple projects, each
designed to demonstrate proficiency in different technologies and frameworks. Each task is organized as a separate
subproject within its own folder and can be independently run using Docker Compose.

## Table of Contents

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

