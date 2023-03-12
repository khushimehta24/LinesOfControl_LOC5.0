from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from rest_framework.authtoken.models import Token

# Create your models here.
class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password instead of username.
        """
        if not email:
            raise ValueError('The Email must be set')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user


    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    username=None

    # extra fields
    id = models.AutoField(auto_created = True, primary_key = True)
    uid = models.CharField(max_length=100, blank=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length = 30)
    phone_no = models.CharField(max_length = 10, blank=True)
    city = models.CharField(max_length= 50, blank = True)
    image = models.URLField(max_length=200, blank=True)
    likes = models.CharField(max_length = 200, blank=True)
    followers = models.CharField(max_length = 200, blank=True)
    following = models.CharField(max_length = 200, blank=True)
    engagement = models.IntegerField(blank=True, default=0)
    is_client = models.BooleanField(blank=True, default=False)
    nature = models.IntegerField(blank=True, default=0)
    portrait = models.IntegerField(blank=True, default=0)
    wildlife = models.IntegerField(blank=True, default=0)
    urban = models.IntegerField(blank=True, default=0)
    cluster = models.IntegerField(blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return str(self.id)

    @property
    def token(self):
        token = Token.objects.get(user=User.objects.get(self.id))
        return token
