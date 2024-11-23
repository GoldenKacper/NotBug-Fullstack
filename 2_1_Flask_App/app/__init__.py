from flask import Flask
from .config import DevelopmentConfig
from .routes import api as tasks_api
from .dependencies import db, api, migrate


def create_app(config_class=DevelopmentConfig):
    """
    Application factory to create and configure the Flask app.

    Args:
        config_class: The configuration class to use.

    Returns:
        Flask app instance.
    """
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    api.init_app(app)

    # Register namespaces
    api.add_namespace(tasks_api, path='/api/tasks')

    return app
