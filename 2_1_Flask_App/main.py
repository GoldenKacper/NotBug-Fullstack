"""
Author: Kacper Jagodziński
Date: 2024-11-23
Description: Flask RESTful API for a To-Do list application.
             Supports creating, listing, updating, and deleting tasks.
             Uses SQLite for data storage with SQLAlchemy ORM.
"""

from app import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000)
