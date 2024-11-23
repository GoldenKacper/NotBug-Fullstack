# The official Python image as the base
FROM python:3.13-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Start the server
CMD ["gunicorn", "DjangoApp.wsgi:application", "--bind", "0.0.0.0:8000"]
