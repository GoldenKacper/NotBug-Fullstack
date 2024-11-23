from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import UserRegisterForm
from django.contrib import messages


def register(request):
    """
    Handle user registration.

    If the request method is POST, validate and save the form.
    If valid, log the user in and redirect to the blog post list.
    """
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f'Account created for {user.username}!')
            return redirect('blog:post_list')
    else:
        form = UserRegisterForm()
    return render(request, 'registration/register.html', {'form': form})
