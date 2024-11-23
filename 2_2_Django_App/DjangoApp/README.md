# Django Blog Application

## Overview

A Django-based blog application that allows users to register, log in, create, update, and delete blog posts. Only
authenticated users can create and manage their own posts.

## Features

- User Registration and Authentication
- Create, Read, Update, Delete (CRUD) operations for blog posts
- Responsive design using Bootstrap
- User-friendly forms with crispy-forms

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/django-blog.git
    cd django-blog
    ```

2. **Set up .env file**

    - Create a new `.env` file in the root directory.
    - Add the following environment variables to the `.env` file:

    ```
    DEBUG=True
    SECRET_KEY="django-insecure-bf%1+e7zvbi(w^ws_h58d%kay+s_c#6sh=h0$rd*t^!6!b)kke"
    DJANGO_ALLOWED_HOSTS="localhost 127.0.0.1 [::1]"
    POSTGRES_DB=django_blog
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_HOST=db
    POSTGRES_PORT=5432
   ```

3. **Build and run docker-compose:**

    ```bash
    docker-compose up -d 
    ```

4. **Collect static files:**

    ```bash
    docker-compose exec web python manage.py collectstatic --noinput  
    ```

5. **Apply migrations:**

    ```bash
    docker-compose exec web python manage.py makemigrations
    docker-compose exec web python manage.py migrate
    ```

6. **Create a superuser (optional):**

    ```bash
    docker-compose exec web python manage.py createsuperuser
    ```

7. **Access the application:**

    - Frontend: `http://localhost:8000/`
    - Admin Panel: `http://localhost:8000/admin/`

## Usage

1. **Register a New User:**
   - Navigate to `http://localhost:8000/register/` and create a new account.

2. **Login:**
   - Navigate to `http://localhost:8000/login/` and log in with your credentials.

3. **Create a New Post:**
   - After logging in, click on "New Post" in the navigation bar to create a new blog post.

4. **Edit or Delete Posts:**
   - On the post list or detail page, you can edit or delete your own posts.

## Technologies Used

- **Django**: High-level Python web framework.
- **Bootstrap**: Frontend framework for responsive design.
- **django-crispy-forms**: For better form rendering.
