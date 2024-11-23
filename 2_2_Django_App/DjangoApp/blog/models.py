from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Post(models.Model):
    """
    Represents a blog post.

    Attributes:
        title (str): The title of the post.
        content (str): The content of the post.
        author (User): The author of the post.
        created_at (datetime): Timestamp when the post was created.
        updated_at (datetime): Timestamp when the post was last updated.
    """
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_detail', args=[str(self.id)])
