from django.contrib.auth import models as auth_models
from django.db import models

from ResumeTemplate.user_app.manager import UserAppManager


class UserApp(auth_models.AbstractUser, auth_models.PermissionsMixin):
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
    )

    is_staff = models.BooleanField(
        default=False,
        null=False,
        blank=False,
    )

    is_active = models.BooleanField(
        default=True,
        null=False,
        blank=False,
    )

    date_joined = models.DateTimeField(
        auto_now_add=True,
    )

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserAppManager()

    def __str__(self):
        return self.email


class UserProfile(models.Model):
    FIRST_NAME_MAX_LENGTH = 30
    LAST_NAME_MAX_LENGTH = 30
    TECH_STACK_MAX_LENGTH = 30
    PHONE_NUMBER_MAX_LENGTH = 13
    COUNTRY_NAME_MAX_LENGTH = 30

    user = models.OneToOneField(
        'UserApp',
        on_delete=models.CASCADE,
        primary_key=True,
    )

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    tech_stack = models.CharField(
        max_length=TECH_STACK_MAX_LENGTH,
        null=False,
        blank=False,
    )

    phone_number = models.CharField(
        max_length=PHONE_NUMBER_MAX_LENGTH,
        null=False,
        blank=False,
    )

    country_name = models.CharField(
        max_length=COUNTRY_NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )
