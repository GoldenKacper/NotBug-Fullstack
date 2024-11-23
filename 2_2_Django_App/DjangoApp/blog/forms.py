from django import forms
from .models import Post


class PostForm(forms.ModelForm):
    """
    Form for creating and updating blog posts.

    Fields:
        title: The title of the post.
        content: The content of the post.
    """

    class Meta:
        model = Post
        fields = ['title', 'content']
