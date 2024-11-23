from datetime import datetime
from .dependencies import db


class Task(db.Model):
    """
    Represents a task in the To-Do list.

    Attributes:
        id (int): Primary key.
        title (str): Title of the task.
        description (str): Detailed description of the task.
        done (bool): Status of the task (completed or not).
        created_at (datetime): Timestamp when the task was created.
        updated_at (datetime): Timestamp when the task was last updated.
    """
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=True)
    done = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<Task {self.title}>"
