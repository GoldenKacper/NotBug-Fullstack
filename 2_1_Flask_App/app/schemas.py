from flask_restx import fields
from .dependencies import api

task_model = api.model('Task', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a task'),
    'title': fields.String(required=True, description='Task title'),
    'description': fields.String(description='Task description'),
    'done': fields.Boolean(description='Task completion status'),
    'created_at': fields.DateTime(description='Task creation timestamp'),
    'updated_at': fields.DateTime(description='Task last update timestamp')
})

task_create_model = api.model('TaskCreate', {
    'title': fields.String(required=True, description='Task title', example='Buy groceries'),
    'description': fields.String(description='Task description', example='Milk, Bread, Eggs')
})

task_update_model = api.model('TaskUpdate', {
    'title': fields.String(description='Task title', example='Buy groceries and fruits'),
    'description': fields.String(description='Task description', example='Milk, Bread, Eggs, Apples'),
    'done': fields.Boolean(description='Task completion status', example=True)
})
