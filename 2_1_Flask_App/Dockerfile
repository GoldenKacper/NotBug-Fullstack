# The official Python runtime as a parent image
FROM python:3.13-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /usr/src/app

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy project
COPY . .

# Expose the port Flask is running on
EXPOSE 5000

# Set environment variables for Flask
ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0


# Run the application
CMD ["flask", "run", "--host=0.0.0.0"]
