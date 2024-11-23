import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'mysecretkey')
    POSTGRES_DB = os.getenv('POSTGRES_DB', 'todo_db')
    POSTGRES_USER = os.getenv('POSTGRES_USER', 'postgres')
    POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD', 'postgres')
    POSTGRES_PORT = os.getenv('POSTGRES_PORT', '5432')
    POSTGRES_HOST = os.getenv('POSTGRES_HOST', 'db')
    SQLALCHEMY_DATABASE_URI = f'postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    RESTX_MASK_SWAGGER = False  # Optional: Disable the Swagger mask

class DevelopmentConfig(Config):
    """Development configuration."""
    DEBUG = True

class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False
