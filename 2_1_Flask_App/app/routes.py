from flask import request
from flask_restx import Resource, Namespace
from .models import Task
from .dependencies import db
from .schemas import task_model, task_create_model, task_update_model

api = Namespace('tasks', description='Operations related to To-Do tasks')


@api.route('/')
class TaskList(Resource):
    @api.doc('list_tasks')
    @api.marshal_list_with(task_model, envelope='tasks')
    @api.response(200, 'Successfully retrieved list of tasks')
    @api.response(500, 'Internal server error')
    def get(self):
        """
        Retrieve a list of all tasks.

        **Response:**
        - **200 OK**: A list of tasks.
        - **500 Internal Server Error**: If an unexpected error occurs.

         **Example:**
        ```
        GET /api/tasks
        ```
        """
        tasks = Task.query.all()
        return tasks, 200

    @api.doc('create_task')
    @api.expect(task_create_model, validate=True)
    @api.marshal_with(task_model, code=201)
    @api.response(201, 'Task successfully created')
    @api.response(400, 'Bad Request')
    @api.response(500, 'Internal server error')
    def post(self):
        """
        Create a new task.

        **Parameters:**
        - **title** (string, required): Title of the task.
        - **description** (string, optional): Description of the task.

        **Response:**
        - **201 Created**: The created task.
        - **400 Bad Request**: If the request payload is invalid.
        - **500 Internal Server Error**: If an unexpected error occurs.

        **Example:**
        ```
        POST /api/tasks
        {
            "title": "Make tests",
            "description": "Make tests for all endpoints"
        }
        ```
        """
        data = request.json
        title = data.get('title')
        description = data.get('description', '')

        if not title:
            api.abort(400, "Title is required to create a task.")

        new_task = Task(title=title, description=description)
        db.session.add(new_task)
        db.session.commit()
        return new_task, 201


@api.route('/<int:id>')
@api.param('id', 'The Task identifier')
class TaskResource(Resource):
    @api.doc('get_task')
    @api.marshal_with(task_model)
    @api.response(200, 'Successfully retrieved task')
    @api.response(404, 'Task not found')
    @api.response(500, 'Internal server error')
    def get(self, id):
        """
        Retrieve a task by its ID.

        **Parameters:**
        - **id** (integer): The ID of the task to retrieve.

        **Response:**
        - **200 OK**: The task data.
        - **404 Not Found**: If the task does not exist.
        - **500 Internal Server Error**: If an unexpected error occurs.

         **Example:**
        ```
        GET /api/tasks/<id>
        ```
        """
        task = Task.query.get_or_404(id, description=f"Task with id {id} not found.")
        return task, 200

    @api.doc('update_task')
    @api.expect(task_update_model, validate=True)
    @api.marshal_with(task_model)
    @api.response(200, 'Task successfully updated')
    @api.response(400, 'Bad Request')
    @api.response(404, 'Task not found')
    @api.response(500, 'Internal server error')
    def put(self, id):
        """
        Update an existing task.

        **Parameters:**
        - **id** (integer): The ID of the task to update.
        - **title** (string, optional): New title of the task.
        - **description** (string, optional): New description of the task.
        - **done** (boolean, optional): New completion status of the task.

        **Response:**
        - **200 OK**: The updated task data.
        - **400 Bad Request**: If the request payload is invalid.
        - **404 Not Found**: If the task does not exist.
        - **500 Internal Server Error**: If an unexpected error occurs.

         **Example:**
        ```
        PUT /api/tasks/<id>
        {
            "title": "Updated tests",
            "description": "Updated tests for all endpoints"
        }
        ```
        """
        task = Task.query.get_or_404(id, description=f"Task with id {id} not found.")
        data = request.json

        title = data.get('title', task.title)
        description = data.get('description', task.description)
        done = data.get('done', task.done)

        if 'done' in data and not isinstance(done, bool):
            api.abort(400, "'done' must be a boolean value.")

        task.title = title
        task.description = description
        task.done = done

        db.session.commit()
        return task, 200

    @api.doc('mark_task_done')
    @api.response(200, 'Task successfully marked as done')
    @api.response(404, 'Task not found')
    @api.response(500, 'Internal server error')
    def patch(self, id):
        """
        Mark a task as done.

        **Parameters:**
        - **id** (integer): The ID of the task to mark as done.

        **Response:**
        - **200 OK**: Confirmation message.
        - **404 Not Found**: If the task does not exist.
        - **500 Internal Server Error**: If an unexpected error occurs.

         **Example:**
        ```
        PATCH /api/tasks/<id>
        ```
        """
        task = Task.query.get_or_404(id, description=f"Task with id {id} not found.")
        task.done = True
        db.session.commit()
        return {'message': f'Task {id} has been marked as done.'}, 200


    @api.doc('delete_task')
    @api.response(200, 'Task successfully deleted')
    @api.response(404, 'Task not found')
    @api.response(500, 'Internal server error')
    def delete(self, id):
        """
        Delete a task by its ID.

        **Parameters:**
        - **id** (integer): The ID of the task to delete.

        **Response:**
        - **200 OK**: Confirmation message.
        - **404 Not Found**: If the task does not exist.
        - **500 Internal Server Error**: If an unexpected error occurs.

         **Example:**
        ```
        DELETE /api/tasks/<id>
        ```
        """
        task = Task.query.get_or_404(id, description=f"Task with id {id} not found.")
        db.session.delete(task)
        db.session.commit()
        return {'message': f'Task {id} has been deleted.'}, 200
