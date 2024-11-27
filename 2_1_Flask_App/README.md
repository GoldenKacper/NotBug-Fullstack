# 2.1 Flask To-Do List Aplication

## Description

A Flask-based RESTful API for a To-Do list application that supports creating, listing, updating, and deleting tasks.
The application uses SQLite for data storage with SQLAlchemy ORM and is containerized using Docker for easy deployment
and scalability.

## Features

- Create, Read, Update, Delete (CRUD) operations for tasks
- RESTful API design
- SQLite database for data storage
- Dockerized setup for easy deployment
- Real-time logging with unbuffered output

## Technologies Used

- **Flask:** Micro web framework for Python.
- **SQLAlchemy:** SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- **SQLite:** Lightweight database for storing application data.
- **Docker:** Containerization platform for deployment.
- **Python:** Programming language used for the application.

## How to Run

1. **Set up .env file**

    - Create a new `.env` file in this directory.
    - Add the following environment variables to the `.env` file:

    ```
    SECRET_KEY=7b0924b84251c730cb0f1634eaf2c6cb6da09e2aeb1c1e7907839b6478901eab
    FLASK_ENV=development
    POSTGRES_DB=todo_db
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_PORT=5432
    POSTGRES_HOST=db
    ```

2. **Build and run docker-compose:**

    ```bash
    docker-compose up -d 
    ```

   This command will build the Docker image and start the container, running your main.py script.
   You can access the application at http://localhost:5000/.

3. **Access the application:**

    - The application will be accessible at `http://localhost:5000`.
    - Use tools like `curl` or `Postman` to interact with the API endpoints.

## Usage

1. **Access the API:**

   The API will be available at `http://localhost:5000/`.

2. **Create a New Task:**

   Send a POST request to `http://localhost:5000/tasks` with the task details.

3. **List All Tasks:**

   Send a GET request to `http://localhost:5000/tasks`.

4. **Retrieve a Task by ID:**

   Send a GET request to `http://localhost:5000/tasks/<id>`.

5. **Update a Task:**

   Send a PUT request to `http://localhost:5000/tasks/<id>` with the updated task details.

6. **Mark a Task as Done:**

   Send a PATCH request to `http://localhost:5000/tasks/<id>`.

7. **Delete a Task:**

   Send a DELETE request to `http://localhost:5000/tasks/<id>`.

