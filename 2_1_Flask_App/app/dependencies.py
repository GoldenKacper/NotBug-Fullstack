from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restx import Api

db = SQLAlchemy()
migrate = Migrate()
api = Api(
    title='To-Do List API',
    version='1.0',
    description='A simple RESTful API for managing a To-Do list.',
    doc='/docs'  # Swagger UI documentation endpoint
)